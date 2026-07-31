# GS-001 — Sprint Health Dashboard
## Power BI Implementation Guide

## 1. Purpose

This guide defines the production implementation of the GS-001 Sprint Health Dashboard in Power BI. The model must preserve sprint-start commitment, current scope, scope movement, estimate changes, blocker exposure, quality signals, and spillover while supporting executive aggregation and authorized issue-level drill-through.

The governing rule remains unchanged: sprints are never extended. Unfinished committed work is recorded as spillover against the original sprint and moved to the next sprint through normal backlog governance.

---

## 2. Target Architecture

```text
Jira Cloud / Jira Data Lake / Approved API
        ↓
Raw ingestion layer
        ↓
Staging and normalization
        ↓
Historical sprint snapshot and change-event layer
        ↓
Curated star schema
        ↓
Power BI semantic model
        ↓
Executive dashboard and governed drill-through
```

Preferred enterprise characteristics:

- Service account authentication
- Centralized secrets management
- Incremental extraction
- Immutable sprint baselines
- Auditable transformations
- Deployment pipelines
- Row-level security
- Refresh monitoring
- Reconciliation controls

---

## 3. Recommended Star Schema

### 3.1 Fact tables

#### FactSprintSnapshot

One row per sprint, issue, and snapshot point.

Key columns:

- SprintSnapshotKey
- SprintKey
- IssueKey
- SnapshotDateKey
- SnapshotType: Start, Daily, Close
- BaselineIncludedFlag
- BaselineStoryPoints
- CurrentStoryPoints
- StatusKey
- StatusCategoryKey
- TeamKey
- EpicKey
- BlockedFlag
- AcceptanceReadyFlag
- DoneFlag
- CarryoverCount

#### FactSprintScopeEvent

One row per scope or estimate event.

- ScopeEventKey
- SprintKey
- IssueKey
- EventTimestamp
- EventDateKey
- EventType: Added, Removed, EstimateChanged
- StoryPointsBefore
- StoryPointsAfter
- StoryPointDelta
- ScopeChangeReasonKey
- ChangedByKey, restricted and optional

#### FactWorkflowEvent

One row per governed workflow transition.

- WorkflowEventKey
- IssueKey
- SprintKey
- FromStatusKey
- ToStatusKey
- TransitionTimestamp
- TransitionDateKey
- EnteredBlockedFlag
- ExitedBlockedFlag
- EnteredDoneFlag
- ReopenedFlag

#### FactSprintOutcome

One frozen row per issue and closed sprint.

- SprintOutcomeKey
- SprintKey
- IssueKey
- BaselineIncludedFlag
- BaselineStoryPoints
- CompletedAtSprintCloseFlag
- SpilloverFlag
- RemovedWithApprovalFlag
- CancelledFlag
- FinalDispositionKey
- CarryoverDestinationSprintKey

#### FactRefreshAudit

- RefreshRunKey
- RefreshStartTimestamp
- RefreshEndTimestamp
- SourceMaxTimestamp
- Status
- RowsLoaded
- RowsRejected
- ValidationStatus
- ErrorSummary

### 3.2 Dimensions

- DimSprint
- DimIssue
- DimProject
- DimTeam
- DimProgram
- DimPortfolio
- DimEpic
- DimStatus
- DimPriority
- DimIssueType
- DimDate
- DimScopeChangeReason
- DimDependency
- DimQualityOutcome
- DimRAGThreshold

Use surrogate keys in the curated model. Preserve Jira issue key and sprint ID as business keys.

---

## 4. Dimension Design

### DimSprint

- SprintKey
- JiraSprintID
- SprintName
- BoardID
- SprintState
- StartDateTime
- EndDateTime
- CompleteDateTime
- WorkingDays
- SprintSequence
- PreviousSprintKey
- IsCurrentSprint
- IsClosedSprint

### DimIssue

- IssueKey surrogate
- JiraIssueKey
- IssueType
- ProjectKey
- ParentIssueKey
- EpicKey
- CreatedDate
- ResolutionDate
- CurrentStatusKey
- CurrentStoryPoints
- RestrictedSummary or null
- JiraURL

Do not include comments, descriptions, email addresses, customer identifiers, credentials, or secrets in the default semantic model.

### DimTeam

- TeamKey
- TeamName
- FunctionalGroup
- Pillar
- Program
- Portfolio
- EffectiveFrom
- EffectiveTo
- IsCurrent

Use slowly changing dimensions where team ownership or hierarchy changes must remain historically accurate.

---

## 5. Power Query Transformation Flow

### Stage 1 — Raw

- Preserve source field names and payloads.
- Add ingestion timestamp and source identifier.
- Do not apply business logic.
- Quarantine malformed records.

### Stage 2 — Standardized

- Convert timestamps to the approved reporting timezone.
- Standardize nulls and booleans.
- Normalize issue keys, sprint IDs, and custom-field values.
- Map status values to governed status categories.
- Normalize team, pillar, and program reference data.

### Stage 3 — Historical reconstruction

- Reconstruct sprint membership events.
- Identify sprint-start population.
- Preserve sprint-start estimates.
- Identify additions and removals after sprint start.
- Calculate estimate deltas.
- Reconstruct status at sprint closure.
- Determine original-sprint spillover.
- Calculate carryover count across consecutive sprints.

### Stage 4 — Curated model

- Create fact and dimension tables.
- Enforce one row per declared grain.
- Generate surrogate keys.
- Remove restricted columns.
- Add reconciliation flags.
- Publish only validated records.

---

## 6. Baseline and Closure Rules

### Sprint-start baseline

The baseline timestamp is the approved sprint start. For each issue present at that point, preserve:

- Issue key
- Sprint ID
- Story points
- Team
- Epic
- Status
- Inclusion or exclusion flag

The baseline must not be overwritten by later issue changes.

### Sprint closure

At sprint closure, freeze:

- Completed baseline story points
- Incomplete baseline story points
- Approved removals
- Cancelled items
- Spillover items
- Final scope
- Quality and acceptance state

Moving an issue to a later sprint must not remove the missed commitment from the original sprint.

---

## 7. Core DAX Measures

The model and column names below are illustrative and should match the production schema.

### Sprint-start committed story points

```DAX
Sprint Start Committed SP :=
CALCULATE(
    SUM(FactSprintOutcome[BaselineStoryPoints]),
    FactSprintOutcome[BaselineIncludedFlag] = TRUE()
)
```

### Completed sprint-start commitment

```DAX
Completed Committed SP :=
CALCULATE(
    SUM(FactSprintOutcome[BaselineStoryPoints]),
    FactSprintOutcome[BaselineIncludedFlag] = TRUE(),
    FactSprintOutcome[CompletedAtSprintCloseFlag] = TRUE()
)
```

### Commitment reliability

```DAX
Commitment Reliability % :=
DIVIDE(
    [Completed Committed SP],
    [Sprint Start Committed SP]
)
```

### Current scope story points

```DAX
Current Scope SP :=
CALCULATE(
    SUM(FactSprintSnapshot[CurrentStoryPoints]),
    FactSprintSnapshot[SnapshotType] = "Daily",
    FactSprintSnapshot[IsLatestSnapshot] = TRUE()
)
```

### Completed current scope

```DAX
Completed Current Scope SP :=
CALCULATE(
    SUM(FactSprintSnapshot[CurrentStoryPoints]),
    FactSprintSnapshot[SnapshotType] = "Daily",
    FactSprintSnapshot[IsLatestSnapshot] = TRUE(),
    FactSprintSnapshot[DoneFlag] = TRUE()
)
```

### Current scope completion

```DAX
Current Scope Completion % :=
DIVIDE(
    [Completed Current Scope SP],
    [Current Scope SP]
)
```

### Added scope

```DAX
Added Scope SP :=
CALCULATE(
    SUM(FactSprintScopeEvent[StoryPointDelta]),
    FactSprintScopeEvent[EventType] = "Added"
)
```

### Removed scope

```DAX
Removed Scope SP :=
ABS(
    CALCULATE(
        SUM(FactSprintScopeEvent[StoryPointDelta]),
        FactSprintScopeEvent[EventType] = "Removed"
    )
)
```

### Scope stability

```DAX
Scope Stability % :=
VAR Baseline = [Sprint Start Committed SP]
VAR Movement = [Added Scope SP] + [Removed Scope SP]
RETURN
IF(
    Baseline > 0,
    MAX(0, 1 - DIVIDE(Movement, Baseline))
)
```

### Spillover story points

```DAX
Spillover SP :=
CALCULATE(
    SUM(FactSprintOutcome[BaselineStoryPoints]),
    FactSprintOutcome[SpilloverFlag] = TRUE()
)
```

### Spillover rate

```DAX
Spillover Rate % :=
DIVIDE(
    [Spillover SP],
    [Sprint Start Committed SP]
)
```

### Remaining story points

```DAX
Remaining SP :=
[Current Scope SP] - [Completed Current Scope SP]
```

### Blocked remaining story points

```DAX
Blocked Remaining SP :=
CALCULATE(
    SUM(FactSprintSnapshot[CurrentStoryPoints]),
    FactSprintSnapshot[IsLatestSnapshot] = TRUE(),
    FactSprintSnapshot[DoneFlag] = FALSE(),
    FactSprintSnapshot[BlockedFlag] = TRUE()
)
```

### Blocked scope exposure

```DAX
Blocked Scope % :=
DIVIDE(
    [Blocked Remaining SP],
    [Remaining SP]
)
```

### Velocity

```DAX
Velocity SP :=
CALCULATE(
    SUM(FactSprintOutcome[BaselineStoryPoints]),
    FactSprintOutcome[CompletedAtSprintCloseFlag] = TRUE()
)
```

Velocity must be used as a team planning signal, not an individual productivity metric.

### Repeated carryover count

```DAX
Repeated Carryover Count :=
CALCULATE(
    DISTINCTCOUNT(FactSprintOutcome[IssueKey]),
    FactSprintOutcome[CarryoverCount] >= 2
)
```

### Reliability rolling average

```DAX
Commitment Reliability 6 Sprint Avg :=
AVERAGEX(
    TOPN(
        6,
        FILTER(
            ALL(DimSprint),
            DimSprint[IsClosedSprint] = TRUE()
                && DimSprint[EndDateTime] <= MAX(DimSprint[EndDateTime])
        ),
        DimSprint[EndDateTime], DESC
    ),
    CALCULATE([Commitment Reliability %])
)
```

### Reliability variability

```DAX
Commitment Reliability Std Dev :=
STDEVX.P(
    TOPN(
        6,
        FILTER(
            ALL(DimSprint),
            DimSprint[IsClosedSprint] = TRUE()
                && DimSprint[EndDateTime] <= MAX(DimSprint[EndDateTime])
        ),
        DimSprint[EndDateTime], DESC
    ),
    CALCULATE([Commitment Reliability %])
)
```

### Predictability index

```DAX
Predictability Index :=
VAR AverageReliability = [Commitment Reliability 6 Sprint Avg]
VAR VariabilityPenalty = [Commitment Reliability Std Dev]
RETURN
MAX(0, AverageReliability - VariabilityPenalty)
```

The final normalization and threshold must be approved before production use.

---

## 8. Sprint Health Score

Recommended weighted structure:

```DAX
Sprint Health Score :=
    [Commitment Reliability Score] * 0.30
    + [Completion Alignment Score] * 0.20
    + [Scope Stability Score] * 0.15
    + [Blocked Work Health Score] * 0.15
    + [Spillover Health Score] * 0.10
    + [Quality Health Score] * 0.10
```

Critical overrides must supersede the weighted score.

```DAX
Overall Sprint RAG :=
VAR CriticalOverride = [Critical Override Flag]
VAR Score = [Sprint Health Score]
RETURN
SWITCH(
    TRUE(),
    CriticalOverride = 1, "Red",
    Score >= 85, "Green",
    Score >= 70, "Amber",
    "Red"
)
```

Critical override examples:

- Missing or invalid baseline
- Stale data outside the approved window
- Critical blocked release dependency
- Material acceptance or quality failure
- Reconciliation failure above tolerance

---

## 9. Report Page Design

### Page 1 — Executive Sprint Health

Header:

- Sprint name and date range
- Current sprint day
- Reporting period
- Last successful refresh
- Data freshness
- Overall RAG and driver statement

KPI cards:

- Sprint Health Score
- Commitment Reliability
- Completion
- Scope Stability
- Spillover
- Blocked Scope
- Predictability
- Quality Risk

Visuals:

- Completion trajectory
- Commitment versus completed scope
- Scope movement waterfall
- Six-sprint reliability and spillover trend
- Executive action panel

### Page 2 — Scope and Commitment

- Baseline versus current scope
- Added and removed scope by day
- Estimate changes
- Scope-change reason
- Late additions
- Issue-level evidence table

### Page 3 — Blockers and Dependencies

- Blocked exposure by team and epic
- Blocker age distribution
- Oldest blockers
- Dependency heatmap
- Action owner and due date

### Page 4 — Quality and Acceptance

- Acceptance readiness
- Failed testing transitions
- Reopened work
- Defect linkage
- Completed items missing acceptance evidence

### Page 5 — Trends and Maturity

- Velocity
- Commitment reliability
- Scope stability
- Spillover
- Predictability
- Repeated carryover

### Page 6 — Audit and Evidence

- KPI reconciliation status
- Refresh status
- Data-quality exceptions
- Included and excluded population
- Jira issue drill-through

---

## 10. Drill-Through Design

Required drill path:

```text
Portfolio → Program → Team → Sprint → Epic → Issue
```

Issue drill-through should include only approved fields:

- Jira issue key
- Sanitized summary
- Issue type
- Team
- Epic
- Status
- Priority
- Baseline story points
- Current story points
- Scope-event flags
- Blocked status and age
- Carryover count
- Jira hyperlink

Preserve Jira authorization where possible. Where this cannot be guaranteed, suppress restricted issue-level content and use the Jira link as the controlled evidence path.

---

## 11. Row-Level Security

Recommended security mapping table:

### SecurityUserScope

- UserPrincipalName
- PortfolioKey
- ProgramKey
- TeamKey
- AccessLevel
- EffectiveFrom
- EffectiveTo

Example role expression:

```DAX
SecurityUserScope[UserPrincipalName] = USERPRINCIPALNAME()
```

Use relationships or bridge-table logic to filter the authorized portfolio, program, or team population.

Security principles:

- Executives see approved aggregates.
- Program leaders see authorized programs and teams.
- Team users see their authorized team and issue detail.
- No broad access to individual performance views.
- Static executive exports contain only executive-safe fields.

Test RLS with representative users before release.

---

## 12. Incremental Refresh

Recommended partitioning:

- FactSprintSnapshot by SnapshotDate
- FactSprintScopeEvent by EventTimestamp
- FactWorkflowEvent by TransitionTimestamp
- FactSprintOutcome by SprintEndDate
- FactRefreshAudit by RefreshStartTimestamp

Suggested policy:

- Retain enough history for approved trend and audit requirements.
- Refresh recent active-sprint and late-arriving change windows.
- Keep closed sprint outcomes immutable unless a governed correction is approved.
- Detect and log source backfills.

Do not rely solely on incremental refresh for baseline correctness. Baseline records must be immutable and independently validated.

---

## 13. Performance Optimization

- Use a star schema and single-direction relationships by default.
- Avoid high-cardinality free-text columns.
- Disable Auto Date/Time.
- Use integer surrogate keys.
- Precompute expensive historical logic upstream.
- Limit calculated columns in large fact tables.
- Use measures rather than duplicated columns where appropriate.
- Avoid bi-directional relationships unless the need is explicit and tested.
- Use aggregation tables for portfolio views if volume requires them.
- Run Performance Analyzer on every report page.
- Validate model size and refresh duration against production capacity.

Recommended targets:

- Executive page render under 5 seconds in normal usage
- Drill-through under 10 seconds for an authorized population
- Scheduled refresh within the approved operating window
- No unresolved ambiguous relationships

---

## 14. Data Validation and Reconciliation

For every sprint, validate:

- Sprint ID, dates, and state match Jira.
- Baseline issue count matches the approved sprint-start snapshot.
- Baseline story points reconcile exactly.
- Current scope reconciles with Jira at refresh time.
- Added and removed scope reconcile with event history.
- Estimate changes preserve both original and current values.
- Closed-sprint completion is evaluated at closure time.
- Spillover remains attributed to the original sprint.
- Cancelled and formally removed scope follow the approved exclusion rule.
- Subtasks are not double-counted.
- Restricted fields are absent from unauthorized datasets.

Create a reconciliation table with:

- Validation rule
- Expected value
- Actual value
- Variance
- Tolerance
- Status
- Owner
- Resolution note

Publication must fail when a critical validation rule fails.

---

## 15. Refresh Monitoring

Display:

- Last successful refresh
- Source maximum timestamp
- Data latency
- Rows loaded
- Rows rejected
- Validation status
- Current freshness RAG

Recommended freshness rules:

| Condition | Status |
|---|---|
| Refresh completed within agreed window and validation passed | Green |
| Refresh delayed but still usable within approved tolerance | Amber |
| Refresh failed, data stale, partial, or validation failed | Red |

When freshness is Red, the report must not present an unqualified delivery-health conclusion.

---

## 16. Deployment and Release Management

Use separate workspaces:

- Development
- Test
- Production

Use Power BI deployment pipelines where available.

Release controls:

- Source-control report and model definitions where technically supported.
- Maintain environment-specific parameters.
- Use service principals or approved service accounts.
- Separate developer credentials from production refresh credentials.
- Validate gateway and data-source bindings.
- Run RLS and export tests.
- Capture release approval and rollback plan.

---

## 17. Privacy and Data Classification

The semantic model must exclude by default:

- Email addresses
- Phone numbers
- Employee or contractor IDs
- Customer names and tenant identifiers
- Credentials, secrets, tokens, and keys
- Vulnerability or infrastructure-sensitive text
- Jira comments and unrestricted descriptions

Use team aggregation rather than individual ranking. Suppress small populations where identification risk exists. Review exports, Analyze in Excel, subscriptions, and shared datasets as part of the privacy gate.

---

## 18. Acceptance Checklist

- [ ] Approved source and authentication method implemented.
- [ ] Immutable sprint baseline available.
- [ ] Closed-sprint outcome frozen.
- [ ] Star schema implemented at documented grain.
- [ ] KPI measures match the GS-001 KPI Catalog.
- [ ] Scope additions, removals, and estimate changes are auditable.
- [ ] Spillover remains tied to the original sprint.
- [ ] RLS validated with representative users.
- [ ] Restricted fields removed or masked.
- [ ] Refresh monitoring visible.
- [ ] Reconciliation controls pass.
- [ ] Executive and operational pages use common governed measures.
- [ ] Performance targets met.
- [ ] Deployment and rollback tested.
- [ ] Governance approval recorded.

---

## 19. Definition of Done

The Power BI implementation is complete only when:

- The model preserves sprint-start commitment and closure state.
- Current scope is visibly separated from committed scope.
- Every KPI is traceable to source fields and documented transformations.
- Scope volatility, blocker exposure, spillover, and carryover are auditable.
- Executive visuals provide interpretation and recommended action.
- Authorized users can drill through to evidence without exposing restricted data.
- Refresh, reconciliation, security, performance, and release controls pass.
- The published report meets the Privacy, Governance, Technical, Executive, and Implementation quality gates.
