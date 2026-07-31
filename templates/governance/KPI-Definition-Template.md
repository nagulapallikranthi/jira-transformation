# KPI Definition Template

## Purpose

Use this template to define, approve, implement, validate, publish, and maintain a governed KPI. Every KPI should have one accountable definition, one approved calculation, and traceable implementation across reporting layers.

A KPI must not be published until the mandatory sections are complete and the acceptance checklist is satisfied.

## Document control

| Field | Value |
|---|---|
| KPI name | `<Enter KPI name>` |
| KPI ID | `KPI-<DOMAIN>-<NUMBER>` |
| Version | `0.1` |
| Lifecycle status | Proposed / Pilot / Active / Deprecated / Retired |
| Effective date | `YYYY-MM-DD` |
| Review date | `YYYY-MM-DD` |
| Classification | Public / Internal / Restricted |
| Definition owner | `<Role or function>` |
| Last updated | `YYYY-MM-DD` |

## 1. KPI summary

| Field | Definition |
|---|---|
| Short name | A concise display name suitable for scorecards and dashboards. |
| Domain | Executive / Portfolio / Program / Delivery / Sprint / JSM / DevOps / CloudOps / Security / FinOps / Transformation |
| Business objective | The outcome this KPI supports. |
| Executive question | The decision question this KPI answers. |
| KPI description | A plain-language explanation of what is measured. |
| Business value | Why the KPI matters and what action it should enable. |
| KPI type | Leading / Lagging / Diagnostic / Control |
| Direction of improvement | Higher is better / Lower is better / Target range |
| Reporting audience | Executive / PMO / Manager / Product / Engineering / Operations / Analyst |
| Criticality | Critical / High / Medium / Low |

## 2. Scope and interpretation

### Included

- `<Define records, teams, projects, issue types, statuses, environments, or periods included>`

### Excluded

- `<Define explicit exclusions>`

### Business interpretation

Describe what a high, low, improving, or deteriorating value means. State what the KPI does **not** prove so that it is not used outside its intended context.

### Intended decisions

| Decision | Decision owner | Expected action |
|---|---|---|
| `<Decision enabled by the KPI>` | `<Role>` | `<Action when threshold or trend is observed>` |

## 3. Ownership and accountability

| Role | Accountable party | Responsibility |
|---|---|---|
| Business owner | `<Role or function>` | Approves the business meaning, thresholds, and intended use. |
| Definition owner | `<Role or function>` | Maintains the governed definition and change history. |
| Data owner | `<Role or function>` | Owns source-data quality and access. |
| Technical owner | `<Role or function>` | Owns extraction, transformation, calculation, and deployment. |
| Dashboard owner | `<Role or function>` | Owns presentation, filters, drill-down, and release validation. |
| Control reviewer | `<Role or function>` | Performs independent reconciliation or governance review. |

## 4. Calculation specification

### Business formula

```text
<Write the formula in business-readable form>
```

### Mathematical expression

```text
<Example: completed scope / final committed scope × 100>
```

### Numerator

| Property | Definition |
|---|---|
| Name | `<Numerator name>` |
| Population | `<Records included>` |
| Inclusion rule | `<Rule>` |
| Exclusion rule | `<Rule>` |
| Null handling | Ignore / Treat as zero / Reject record / Other |

### Denominator

| Property | Definition |
|---|---|
| Name | `<Denominator name>` |
| Population | `<Records included>` |
| Inclusion rule | `<Rule>` |
| Exclusion rule | `<Rule>` |
| Zero handling | Return blank / Return zero / Flag exception / Other |

### Aggregation and grain

| Property | Value |
|---|---|
| Base grain | Issue / Sprint / Incident / Change / Deployment / Day / Team / Other |
| Aggregation | Sum / Count / Distinct count / Average / Median / Percentile / Weighted average / Ratio / Custom |
| Time basis | Created / Updated / Resolved / Closed / Sprint end / Event timestamp / Snapshot date |
| Time zone | `<Approved reporting time zone>` |
| Reporting period | Current / Daily / Weekly / Sprint / Monthly / Quarterly / Rolling period |
| Historical method | Event history / Snapshot / Current state / Hybrid |
| Rounding | `<Precision and rounding rule>` |

### Time-window rules

- Current-period definition: `<Rule>`
- Rolling-period definition: `<Rule>`
- Partial-period treatment: `<Rule>`
- Late-arriving data treatment: `<Rule>`
- Reopened-record treatment: `<Rule>`

## 5. Dimensions and filters

| Dimension | Required | Definition and hierarchy |
|---|---:|---|
| Organization or portfolio | Yes / No | `<Definition>` |
| Program or product | Yes / No | `<Definition>` |
| Team or functional group | Yes / No | `<Definition>` |
| Project | Yes / No | `<Definition>` |
| Sprint or release | Yes / No | `<Definition>` |
| Priority or severity | Yes / No | `<Definition>` |
| Environment or region | Yes / No | `<Definition>` |
| Cloud provider or platform | Yes / No | `<Definition>` |
| Issue or request type | Yes / No | `<Definition>` |

### Approved filters

List the filters users may apply without changing the KPI's meaning.

### Prohibited filters

List filters that would create a misleading or mathematically invalid result.

## 6. Thresholds and status logic

| Status | Rule | Interpretation | Required response |
|---|---|---|---|
| Green | `<Rule>` | Healthy | `<Action or monitoring expectation>` |
| Amber | `<Rule>` | Attention required | `<Action and owner>` |
| Red | `<Rule>` | Intervention required | `<Action, escalation, and owner>` |
| Grey | Data unavailable or not applicable | Do not interpret as performance | Investigate data availability or applicability. |

### Threshold governance

- Threshold basis: Baseline / Target / SLA / Benchmark / Risk appetite / Control limit
- Threshold approval authority: `<Role or forum>`
- Threshold review frequency: `<Frequency>`
- Minimum sample size: `<Rule>`
- Suppression rule: `<Rule for small or sensitive populations>`

## 7. Source and lineage

| Layer | System or asset | Object | Required fields | Owner |
|---|---|---|---|---|
| Source | Jira / JSM / CI-CD / Monitoring / Finance / Other | `<Project, endpoint, table, or dataset>` | `<Fields>` | `<Owner>` |
| Extraction | `<API, connector, export, or pipeline>` | `<Job or process>` | `<Controls>` | `<Owner>` |
| Staging | `<Store>` | `<Table or file>` | `<Keys and timestamps>` | `<Owner>` |
| Curated model | `<Warehouse or semantic model>` | `<Fact and dimensions>` | `<Measures and relationships>` | `<Owner>` |
| Presentation | Power BI / EazyBI / Portal / Other | `<Dashboard or report>` | `<Visuals>` | `<Owner>` |

### Required identifiers

Document the stable keys used to prevent duplicate counting and preserve traceability.

### Refresh and freshness

| Property | Value |
|---|---|
| Extraction frequency | `<Frequency>` |
| Dataset refresh frequency | `<Frequency>` |
| Expected source latency | `<Duration>` |
| Maximum acceptable staleness | `<Duration>` |
| Freshness timestamp displayed | Yes / No |
| Backfill supported | Yes / No |

## 8. Technical implementation

Only include technologies used by the KPI. Link to reusable library assets instead of duplicating governed logic where possible.

### JQL

```jql
<Insert validated base JQL or link to the JQL library>
```

### REST API

```http
GET /rest/api/3/search
```

Document pagination, field selection, changelog requirements, retries, rate limits, and authentication assumptions.

### SQL

```sql
-- Insert governed transformation or aggregation logic.
```

### MDX

```mdx
-- Insert governed EazyBI measure or reference.
```

### DAX

```dax
-- Insert governed semantic-model measure or reference.
```

### Automation dependency

| Automation | Purpose | Failure impact | Recovery control |
|---|---|---|---|
| `<Rule or job>` | `<Purpose>` | `<Impact>` | `<Control>` |

## 9. Data-quality requirements

| Dimension | Requirement | Measure | Threshold | Failure response |
|---|---|---|---|---|
| Completeness | Required fields are populated. | `% complete` | `<Target>` | `<Action>` |
| Accuracy | Values agree with the authoritative source. | `% reconciled` | `<Target>` | `<Action>` |
| Timeliness | Data arrives within the approved latency. | `age of latest record` | `<Target>` | `<Action>` |
| Consistency | Definitions and mappings are applied uniformly. | `% conforming` | `<Target>` | `<Action>` |
| Uniqueness | Records are not duplicated at the KPI grain. | `duplicate count` | `0` or `<Target>` | `<Action>` |
| Validity | Values satisfy domain and business rules. | `% valid` | `<Target>` | `<Action>` |

### Mandatory quality gates

- [ ] Required source fields are available.
- [ ] Record keys are stable and unique.
- [ ] Status and category mappings are approved.
- [ ] Time-zone conversion is validated.
- [ ] Null, zero, reopened, cancelled, and deleted-record behavior is tested.
- [ ] Current-period and historical results reconcile.
- [ ] Data freshness is visible and within tolerance.

## 10. Validation and reconciliation

| Test | Method | Expected result | Evidence location |
|---|---|---|---|
| Source population | Compare source query with extracted population. | Counts reconcile within approved tolerance. | `<Link or artifact>` |
| Formula test | Calculate representative cases manually. | Results match governed formula. | `<Link or artifact>` |
| Boundary test | Test threshold edges, zeros, nulls, and empty populations. | Status and output follow documented rules. | `<Link or artifact>` |
| Historical test | Recalculate approved prior periods. | Results are reproducible. | `<Link or artifact>` |
| Drill-through test | Trace aggregate value to source records. | Full traceability is available. | `<Link or artifact>` |
| Cross-tool test | Compare Power BI, EazyBI, SQL, or other implementations. | Results match within approved tolerance. | `<Link or artifact>` |
| Access test | Validate row-level or role-based security. | Users see only authorized data. | `<Link or artifact>` |

### Reconciliation tolerance

- Count tolerance: `<Value or percentage>`
- Financial tolerance: `<Value or percentage>`
- Percentage-point tolerance: `<Value>`
- Exception approval: `<Role or forum>`

## 11. Presentation specification

| Property | Value |
|---|---|
| Primary visual | KPI card / Line / Bar / Heatmap / Matrix / Table / Other |
| Comparison | Target / Prior period / Baseline / Benchmark |
| Trend period | `<Period>` |
| Default grain | `<Grain>` |
| Drill-down path | Enterprise → Portfolio → Program → Team → Record |
| Tooltip content | `<Required context>` |
| Data-freshness display | `<Format>` |
| Accessibility requirements | Text alternative, non-colour status cue, keyboard support, readable labels |

### Display rules

- Display the KPI name and reporting period.
- Display the latest refresh timestamp.
- Do not use colour as the only status indicator.
- Explain denominator changes and material restatements.
- Distinguish zero, blank, unavailable, and not applicable.
- Provide access to the governed definition from the report.

## 12. Risks, assumptions, and limitations

### Assumptions

- `<Assumption and validation owner>`

### Known limitations

- `<Limitation, consequence, and mitigation>`

### Misuse risks

- `<How the KPI could be misinterpreted or gamed>`

### Dependencies

| Dependency | Type | Owner | Impact if unavailable |
|---|---|---|---|
| `<Dependency>` | Upstream / Downstream / Governance / Technical | `<Owner>` | `<Impact>` |

## 13. Exceptions and incident handling

| Condition | KPI behavior | Notification | Owner | Resolution target |
|---|---|---|---|---|
| Source unavailable | Blank / Last known value / Suppressed | `<Channel>` | `<Owner>` | `<Target>` |
| Refresh failed | `<Behavior>` | `<Channel>` | `<Owner>` | `<Target>` |
| Quality gate failed | `<Behavior>` | `<Channel>` | `<Owner>` | `<Target>` |
| Definition changed | `<Behavior>` | `<Channel>` | `<Owner>` | `<Target>` |
| Historical restatement | `<Behavior>` | `<Channel>` | `<Owner>` | `<Target>` |

## 14. Related assets

| Asset type | Name | Location |
|---|---|---|
| Dashboard | `<Dashboard>` | `<Repository path or link>` |
| KPI | `<Related KPI>` | `<Repository path or link>` |
| JQL | `<Query>` | `<Repository path>` |
| SQL | `<Query or model>` | `<Repository path>` |
| MDX | `<Measure>` | `<Repository path>` |
| DAX | `<Measure>` | `<Repository path>` |
| Runbook | `<Operational procedure>` | `<Repository path>` |
| Playbook | `<Management method>` | `<Repository path>` |

## 15. Lifecycle and change control

### Lifecycle states

| State | Entry criteria | Exit criteria |
|---|---|---|
| Proposed | Business need and provisional owner identified. | Definition is complete enough for design review. |
| Pilot | Formula, data, and initial implementation approved for controlled use. | Validation, reconciliation, and user acceptance pass. |
| Active | Production approval and publication controls are complete. | Replacement, deprecation, or material redesign is approved. |
| Deprecated | Replacement or retirement decision is published. | Retention period ends and dependencies are removed. |
| Retired | KPI is no longer calculated or published. | Not applicable. |

### Material-change criteria

A new KPI version is required when any of the following changes:

- business meaning or intended decision;
- numerator, denominator, scope, grain, or time basis;
- inclusion or exclusion rules;
- threshold or RAG logic;
- authoritative source or historical method;
- security or confidentiality classification.

### Version history

| Version | Effective date | Change | Reason | Approved by |
|---|---|---|---|---|
| `0.1` | `YYYY-MM-DD` | Initial proposal | `<Reason>` | `<Role or forum>` |

## 16. Approval record

| Approval | Name or role | Decision | Date | Evidence |
|---|---|---|---|---|
| Business owner | `<Role>` | Approved / Rejected / Conditional | `YYYY-MM-DD` | `<Link>` |
| Data owner | `<Role>` | Approved / Rejected / Conditional | `YYYY-MM-DD` | `<Link>` |
| Technical owner | `<Role>` | Approved / Rejected / Conditional | `YYYY-MM-DD` | `<Link>` |
| Analytics governance | `<Forum>` | Approved / Rejected / Conditional | `YYYY-MM-DD` | `<Link>` |

## 17. Publication acceptance checklist

### Definition

- [ ] Business objective and executive question are explicit.
- [ ] Scope, exclusions, grain, and time basis are unambiguous.
- [ ] Formula, numerator, denominator, null handling, and zero handling are documented.
- [ ] Direction of improvement and thresholds are approved.

### Data and implementation

- [ ] Authoritative source and lineage are documented.
- [ ] Technical logic is version controlled.
- [ ] Data-quality gates meet approved thresholds.
- [ ] Refresh, latency, and failure behavior are defined.
- [ ] Security and confidentiality controls are validated.

### Testing

- [ ] Representative, boundary, and historical tests pass.
- [ ] Aggregate-to-record drill-through is verified.
- [ ] Cross-tool results reconcile within tolerance.
- [ ] User acceptance and owner approvals are recorded.

### Publication

- [ ] Visual follows the dashboard specification standard.
- [ ] Refresh timestamp and definition link are displayed.
- [ ] Accessibility requirements are satisfied.
- [ ] Change history and effective date are current.

## Related documents

- [Governed KPI Catalogue](../../analytics/KPI-Catalogue.md)
- [Dashboard Specification Standard](../../analytics/Dashboard-Specification-Standard.md)
- [Power BI Implementation Guide](../../docs/Power-BI-Implementation-Guide.md)
- [Documentation Standards](../../docs/Documentation-Standards.md)
- [Portfolio Data Policy](../../PORTFOLIO_DATA_POLICY.md)
