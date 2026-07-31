# GS-001 — Sprint Health Data Dictionary

## Purpose

This data dictionary defines the governed fields required to calculate, validate, display and drill into the Sprint Health Dashboard. It establishes a consistent semantic contract across Jira, EazyBI, Power BI and future reporting layers.

The dictionary is designed to support enterprise-scale reporting while enforcing minimum-necessary-data and role-based-access principles.

---

## 1. Data Domains

| Domain | Purpose |
|---|---|
| Sprint | Defines sprint identity, dates, state and baseline checkpoints |
| Issue | Identifies delivery work and hierarchy |
| Scope | Supports commitment, additions, removals and estimate changes |
| Workflow | Supports completion, aging and status-transition analysis |
| Ownership | Supports team-level accountability and authorized drill-down |
| Dependency and Blocker | Supports blocked-work and dependency-risk analysis |
| Quality | Supports reopen, acceptance and escaped-defect indicators |
| Governance | Supports audit, refresh, lineage and classification controls |

---

## 2. Field Dictionary

| Business Field | Source Field / Derivation | Type | Required | Classification | Default Display | Governance Rule |
|---|---|---|---:|---|---|---|
| Sprint ID | Jira Sprint ID | Integer | Yes | Internal | Hidden technical key | Stable unique identifier; never use sprint name as the primary key |
| Sprint Name | Jira Sprint name | Text | Yes | Internal | Yes | Must be unique within the board context |
| Sprint State | Jira Sprint state | Enum | Yes | Internal | Yes | Allowed values: future, active, closed |
| Sprint Start Date | Jira Sprint startDate | Datetime | Yes | Internal | Yes | Convert to approved reporting timezone |
| Sprint End Date | Jira Sprint endDate | Datetime | Yes | Internal | Yes | Sprint must not be extended to improve KPI outcome |
| Sprint Complete Date | Jira Sprint completeDate | Datetime | Closed sprint | Internal | Operational only | Used to validate actual closure timing |
| Sprint Day Number | Derived from start date and business calendar | Integer | Yes | Internal | Yes | Use working-day calendar where applicable |
| Reporting Period | Derived | Text | Yes | Internal | Yes | Display explicitly on every report |
| Last Refresh Timestamp | Reporting platform metadata | Datetime | Yes | Internal | Yes | Must represent last successful refresh |
| Data Freshness Status | Derived | Enum | Yes | Internal | Yes | Green, Amber or Red based on approved SLA |
| Issue Key | Jira issue key | Text | Yes | Internal | Authorized drill-down only | Preserve for source traceability |
| Issue Summary | Jira summary | Text | Conditional | Potentially sensitive | Suppressed by default | Display only after classification and authorization checks |
| Issue Type | Jira issue type | Enum | Yes | Internal | Yes | Include only governed delivery issue types |
| Project Key | Jira project key | Text | Yes | Internal | Yes | Used for access and source reconciliation |
| Parent Key | Jira parent | Text | Conditional | Internal | Authorized drill-down | Required for hierarchy where applicable |
| Epic Key | Epic link / parent hierarchy | Text | Conditional | Internal | Yes at approved level | Normalize across company-managed and team-managed configurations |
| Initiative / Program | Controlled reference or Jira hierarchy | Text | Conditional | Internal | Yes | Must use governed reference values |
| Team / Functional Group | Governed Jira field | Text | Yes | Internal | Yes | Primary ownership dimension; no free-text variants |
| Assignee Account ID | Jira accountId | Text | No | Restricted | Never | Technical authorization only; not exposed in semantic model |
| Assignee Display Name | Jira assignee | Text | No | Restricted | Role-authorized only | Never use for broad performance ranking |
| Status | Jira status | Text | Yes | Internal | Yes | Map to governed status category |
| Status Category | Jira statusCategory | Enum | Yes | Internal | Yes | To Do, In Progress, Done |
| Resolution | Jira resolution | Text | Conditional | Internal | Operational only | Must align with governed Done rules |
| Created Timestamp | Jira created | Datetime | Yes | Internal | Operational only | Used for age and population analysis |
| Updated Timestamp | Jira updated | Datetime | Yes | Internal | Operational only | Not a substitute for transition history |
| Work Start Timestamp | Derived from governed status transition | Datetime | Conditional | Internal | Operational only | Use first valid entry to active-work state unless restart logic is approved |
| Done Timestamp | Derived from status history / resolution date | Datetime | Conditional | Internal | Operational only | Must be within sprint boundary for sprint completion |
| Story Points Current | Jira Story Points | Decimal | Conditional | Internal | Yes | Current estimate; not valid as baseline without history |
| Story Points at Sprint Start | Snapshot / changelog derivation | Decimal | Yes for SP metrics | Internal | Yes in aggregates | Immutable after sprint baseline is captured |
| Sprint Membership at Start | Snapshot flag | Boolean | Yes | Internal | Hidden | Defines committed population |
| Added to Sprint Timestamp | Jira changelog / snapshot | Datetime | Conditional | Internal | Operational only | Required for scope-addition analysis |
| Removed from Sprint Timestamp | Jira changelog / snapshot | Datetime | Conditional | Internal | Operational only | Required for scope-removal analysis |
| Estimate Change Timestamp | Jira changelog | Datetime | Conditional | Internal | Operational only | Required for estimate-change governance |
| Estimate Before | Jira changelog | Decimal | Conditional | Internal | Hidden | Used for audit and variance calculation |
| Estimate After | Jira changelog | Decimal | Conditional | Internal | Hidden | Used for audit and variance calculation |
| Added Scope Flag | Derived | Boolean | Yes | Internal | Hidden | True when issue enters sprint after baseline |
| Removed Scope Flag | Derived | Boolean | Yes | Internal | Hidden | True when issue exits sprint after baseline |
| Spillover Flag | Derived | Boolean | Yes | Internal | Yes in aggregates | True when sprint-start commitment is incomplete at sprint end |
| Carryover Count | Derived across sprints | Integer | Conditional | Internal | Yes | Counts consecutive sprint carryovers |
| Blocked Flag | Governed status, Flagged or approved field | Boolean | Yes | Internal | Yes | Definition must be consistent across teams |
| Blocked Start Timestamp | Status history / automation snapshot | Datetime | Conditional | Internal | Operational only | Required for blocker-age calculations |
| Blocker Category | Governed field | Enum | Conditional | Internal | Yes in aggregate | Avoid free text in executive reporting |
| Dependency Key | Linked issue / governed dependency record | Text | Conditional | Internal | Authorized drill-down | Must preserve source authorization |
| Dependency Owner Team | Controlled reference | Text | Conditional | Internal | Yes | Prefer team over individual owner |
| Dependency Required-By Date | Jira field / RAID register | Date | Conditional | Internal | Yes | Used for escalation and release-risk analysis |
| Reopened Flag | Status-history derivation | Boolean | Conditional | Internal | Aggregate only | Must use governed reopen definition |
| Acceptance State | Jira workflow / field | Enum | Conditional | Internal | Yes | Normalize values across teams |
| Defect Link | Jira issue link | Text | Conditional | Restricted/Internal | Authorized drill-down | Customer or security detail must remain suppressed |
| Customer Identifier | Jira field / text | Text | No | Confidential | Never | Exclude or tokenize before reporting layer |
| Email Address | Jira user or text field | Text | No | Confidential | Never | Must not be ingested into report dataset |
| Phone Number | Jira text field | Text | No | Confidential | Never | Must not be ingested into report dataset |
| Employee ID | Directory / Jira field | Text | No | Confidential | Never | Must not be displayed or exported |
| Free-Text Description | Jira description | Rich text | No | Potentially confidential | Never by default | Controlled drill-down only when approved |
| Comment Body | Jira comments | Rich text | No | Potentially confidential | Never | Excluded from default semantic model |
| Credential / Secret | Any source | Text | No | Secret | Never | Discovery must trigger data-quality and security incident handling |

---

## 3. Governed Derived Fields

### 3.1 Sprint-Start Commitment

```text
Sprint-Start Commitment =
Sum of approved estimation units for issues present in the sprint baseline
```

The baseline must be captured at the approved sprint-start checkpoint and remain immutable.

### 3.2 Completed Sprint-Start Commitment

```text
Completed Sprint-Start Commitment =
Sprint-start committed scope meeting governed Done criteria within the sprint boundary
```

### 3.3 Current Sprint Scope

```text
Current Sprint Scope =
Sprint-start commitment + added scope − removed scope
```

### 3.4 Remaining Scope

```text
Remaining Scope = Current Sprint Scope − Completed Current Scope
```

### 3.5 Scope Added

```text
Scope Added =
Approved estimation units for issues added after the sprint baseline
```

### 3.6 Scope Removed

```text
Scope Removed =
Approved estimation units for baseline or current-scope issues removed after sprint start
```

### 3.7 Blocker Age

```text
Blocker Age = Reporting Timestamp − Blocked Start Timestamp
```

Paused periods may be excluded only where the pause status and calculation rule are explicitly approved and auditable.

### 3.8 Work Age

```text
Work Age = Reporting Timestamp − Valid Work Start Timestamp
```

### 3.9 Spillover

```text
Spillover =
Sprint-start committed scope not completed by the sprint end timestamp
```

Work moved after sprint close remains attributed as spillover to the sprint where the commitment was missed.

---

## 4. Allowed Values and Reference Data

### 4.1 Health RAG

| Value | Meaning |
|---|---|
| Green | Within approved threshold and no critical override |
| Amber | Material risk requiring active management |
| Red | Outcome at significant risk or critical override active |
| Grey | Insufficient or stale data; never interpret as healthy |

### 4.2 Data Freshness

| Status | Initial Rule |
|---|---|
| Green | Last successful refresh within target SLA |
| Amber | Refresh delayed but still within tolerated exception window |
| Red | Refresh beyond tolerated window or critical source failure |

Exact time thresholds must be configured in the implementation guide.

### 4.3 Work Population

Governed delivery types should be explicitly configured. Typical values may include:

- Epic, where epic-level reporting is required
- Story
- Task
- Bug, only when bugs are part of sprint commitment

Subtasks must not be combined with parent estimates unless double-counting controls are in place.

---

## 5. Null and Data-Quality Rules

| Condition | Treatment |
|---|---|
| Missing sprint baseline | Block commitment, scope-stability and spillover publication |
| Missing story points | Include in count-based evidence; exclude from SP denominator and disclose coverage |
| Missing team | Assign to `Unmapped` and fail governance threshold when above tolerance |
| Missing status history | Allow current-state metrics only; block historical flow and age claims |
| Duplicate issue record | Retain one governed record and log reconciliation exception |
| Closed issue without valid Done evidence | Exclude from completed scope until reconciled |
| Removed and re-added issue | Preserve all events; apply approved net and gross scope-change rules |
| Sprint dates changed after start | Flag governance exception and retain original baseline dates |
| Stale refresh | Display Grey/Red freshness state and suppress unsupported insights |

---

## 6. Privacy and Access Controls

- The executive dataset contains no assignee names, email addresses, employee IDs, customer identifiers, descriptions or comments.
- Team-level and epic-level aggregation is the default.
- Issue-level drill-down is available only through authorized views.
- Small-population suppression must be applied where a team-level metric could identify an individual.
- Static exports must use the executive-safe dataset unless explicitly approved.
- Source-system permissions must be preserved wherever direct Jira drill-down is provided.

---

## 7. Reconciliation Controls

For every reporting period, validate:

1. Sprint issue population against Jira board evidence.
2. Sprint-start estimate total against the immutable baseline.
3. Current scope against baseline plus scope-change events.
4. Completed scope against governed Done evidence.
5. Added and removed scope against changelog or snapshot records.
6. Blocked population against the approved blocker rule.
7. Team and hierarchy mappings against reference data.
8. Restricted-field absence in executive and export datasets.

Any unresolved reconciliation failure must be shown as a data-quality exception and may block report release.

---

## 8. Ownership

| Area | Accountable Role |
|---|---|
| Business definitions | Agile Governance / Program Management |
| Jira field configuration | Jira Platform Owner |
| Reference data | PMO / Portfolio Governance |
| Data pipeline and history | Reporting Engineering / BI Team |
| Access model | Report Owner and Data Owner |
| Data classification | Data Owner / Governance |
| KPI validation | Report Owner and Business Approver |
| Reconciliation | BI Operations / Report Steward |

---

## 9. Definition of Done

This data dictionary is complete when:

- Every GS-001 KPI maps to governed source and derived fields.
- Required history fields are available or explicitly identified as gaps.
- Data classifications and display rules are approved.
- Null, duplicate and reconciliation rules are implemented.
- Executive and operational datasets are separated where required.
- No prohibited field is present in the default semantic model.
- Jira, EazyBI and Power BI implementations use the same business definitions.
