# Enterprise SQL Analytics Library

This library provides implementation patterns for building governed Jira analytics outside the transactional Jira reporting layer. It is intended for enterprise data platforms, Power BI semantic models, reconciliation pipelines, and historical analysis.

## Scope

The baseline covers:

- dimensional modeling for Jira and JSM data;
- issue, sprint, SLA, change, incident, and cost facts;
- historical snapshots and slowly changing dimensions;
- incremental extraction and merge patterns;
- reconciliation between Jira, warehouse, and dashboard totals;
- data-quality controls and performance guidance.

## Recommended model

### Core dimensions

- `dim_date`
- `dim_issue`
- `dim_project`
- `dim_user`
- `dim_status`
- `dim_priority`
- `dim_issue_type`
- `dim_sprint`
- `dim_release`
- `dim_team`
- `dim_pillar`
- `dim_cloud_provider`

### Core facts

- `fact_issue_current`
- `fact_issue_snapshot_daily`
- `fact_issue_transition`
- `fact_sprint_commitment`
- `fact_sla_cycle`
- `fact_incident`
- `fact_change_request`
- `fact_cost_outcome`
- `fact_worklog`

## Baseline star-schema pattern

```sql
CREATE TABLE fact_issue_snapshot_daily (
    snapshot_date_key      integer      NOT NULL,
    issue_key              varchar(64)  NOT NULL,
    project_key            varchar(32)  NOT NULL,
    status_key             integer      NOT NULL,
    priority_key           integer      NULL,
    assignee_key           integer      NULL,
    sprint_key             integer      NULL,
    team_key               integer      NULL,
    story_points           decimal(10,2) NULL,
    age_days               integer      NOT NULL,
    is_open                boolean      NOT NULL,
    is_overdue             boolean      NOT NULL,
    is_sla_breached        boolean      NULL,
    loaded_at_utc          timestamp    NOT NULL,
    PRIMARY KEY (snapshot_date_key, issue_key)
);
```

## Incremental merge pattern

```sql
MERGE INTO fact_issue_current AS target
USING stage_issue_current AS source
   ON target.issue_key = source.issue_key
WHEN MATCHED AND source.source_updated_at > target.source_updated_at THEN
  UPDATE SET
      status_key        = source.status_key,
      priority_key      = source.priority_key,
      assignee_key      = source.assignee_key,
      sprint_key        = source.sprint_key,
      story_points      = source.story_points,
      source_updated_at = source.source_updated_at,
      loaded_at_utc     = CURRENT_TIMESTAMP
WHEN NOT MATCHED THEN
  INSERT (
      issue_key, project_key, status_key, priority_key,
      assignee_key, sprint_key, story_points,
      source_updated_at, loaded_at_utc
  )
  VALUES (
      source.issue_key, source.project_key, source.status_key,
      source.priority_key, source.assignee_key, source.sprint_key,
      source.story_points, source.source_updated_at, CURRENT_TIMESTAMP
  );
```

## Daily snapshot pattern

```sql
INSERT INTO fact_issue_snapshot_daily (
    snapshot_date_key,
    issue_key,
    project_key,
    status_key,
    priority_key,
    assignee_key,
    sprint_key,
    team_key,
    story_points,
    age_days,
    is_open,
    is_overdue,
    is_sla_breached,
    loaded_at_utc
)
SELECT
    CAST(TO_CHAR(CURRENT_DATE, 'YYYYMMDD') AS integer),
    issue_key,
    project_key,
    status_key,
    priority_key,
    assignee_key,
    sprint_key,
    team_key,
    story_points,
    CURRENT_DATE - CAST(created_at AS date),
    CASE WHEN status_category <> 'Done' THEN TRUE ELSE FALSE END,
    CASE WHEN due_date < CURRENT_DATE AND status_category <> 'Done' THEN TRUE ELSE FALSE END,
    is_sla_breached,
    CURRENT_TIMESTAMP
FROM fact_issue_current;
```

## Reconciliation controls

Every production load should validate at least:

1. source issue count versus staged issue count;
2. staged issue count versus warehouse current-state count;
3. duplicate issue keys;
4. orphaned dimension keys;
5. null rates for mandatory governance fields;
6. latest source-update timestamp and data freshness;
7. dashboard totals versus governed SQL views.

Example:

```sql
SELECT
    project_key,
    COUNT(*) AS issue_count,
    SUM(CASE WHEN status_category <> 'Done' THEN 1 ELSE 0 END) AS open_count,
    SUM(CASE WHEN status_category = 'Done' THEN 1 ELSE 0 END) AS done_count
FROM fact_issue_current
GROUP BY project_key
ORDER BY project_key;
```

## Enterprise guidance

- Preserve Jira identifiers and source timestamps exactly as received.
- Store current state and history separately.
- Never reconstruct historical scope or status solely from current issue values.
- Use surrogate keys for dimensions but retain natural Jira keys for traceability.
- Make all loads idempotent and restartable.
- Record batch ID, extraction window, source watermark, row counts, and load status.
- Publish governed views rather than exposing raw ingestion tables directly.
- Apply row-level security in the semantic layer or governed database views.

## Planned modules

- `star-schema.md`
- `incremental-loading.md`
- `historical-snapshots.md`
- `sla-and-cycle-time.md`
- `sprint-and-scope-history.md`
- `finops-and-cost.md`
- `data-quality-and-reconciliation.md`
- `performance-tuning.md`

## Validation checklist

- [ ] Grain is explicitly documented for every fact table.
- [ ] Measures are additive, semi-additive, or non-additive by design.
- [ ] Historical reporting does not rely on mutable current-state fields.
- [ ] Time zones are normalized and documented.
- [ ] Deleted or inaccessible issues have a controlled handling rule.
- [ ] Late-arriving updates can be replayed safely.
- [ ] Source-to-report reconciliation is automated.
