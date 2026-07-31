# GS-001 — Sprint Health Dashboard

## Document Control

| Attribute | Value |
|---|---|
| Report ID | GS-001 |
| Report Name | Sprint Health Dashboard |
| Sprint | Sprint 2 — Enterprise Agile Reporting Platform, Phase 1 |
| Status | In Progress |
| Primary Audience | Executive leaders, Directors, Program Managers, PMO, Scrum Masters, Product Owners, Engineering Managers |
| Report Owner | Program Management / Agile Governance |
| Data Classification | Internal; restricted fields controlled by role-based access |
| Refresh Target | Daily during sprint; final snapshot at sprint closure |
| Source Systems | Jira Software, approved reporting layer, governed reference data |

---

## 1. Purpose

The Sprint Health Dashboard provides a single, governed view of whether a sprint is likely to meet its committed outcome without extending the sprint boundary.

It must help leaders and delivery teams understand:

- Whether committed scope is likely to complete within the sprint.
- Whether scope changed after sprint start.
- Whether work is blocked, aging or likely to spill over.
- Whether velocity and completion patterns are stable.
- Which teams, epics, dependencies or work items require action.
- Whether the sprint outcome is supported by auditable underlying evidence.

The dashboard does not reward sprint extension. Any unfinished work at sprint end is recorded as spillover and moved to the next sprint under normal backlog governance.

---

## 2. Decisions Enabled

The report should enable the following decisions:

1. Whether delivery intervention is required during the sprint.
2. Whether scope should be descoped through formal product-owner governance.
3. Whether blockers or dependencies require escalation.
4. Whether capacity assumptions remain valid.
5. Whether repeated spillover indicates estimation, planning or execution weakness.
6. Whether executive attention is required for delivery, quality or dependency risk.

---

## 3. Mandatory Data Privacy and Security Gate

Every release of this report must pass the privacy gate before publication.

### 3.1 Permitted by Default

| Data Element | Classification | Default Display Rule |
|---|---|---|
| Sprint name and dates | Internal | Allowed |
| Team or functional group | Internal | Allowed |
| Issue key | Internal | Allowed only in authorized internal views |
| Issue summary | Internal / potentially sensitive | Mask or suppress when customer, security or employee data is present |
| Epic or initiative name | Internal | Allowed subject to project classification |
| Status, priority and story points | Internal | Allowed |
| Aggregate velocity and completion metrics | Internal | Allowed |
| Aggregated blocker and aging counts | Internal | Allowed |

### 3.2 Restricted or Prohibited

| Data Element | Classification | Rule |
|---|---|---|
| Assignee name | Restricted | Display only where operationally necessary and role-authorized; prefer team-level aggregation |
| Email address | Confidential | Never display |
| Phone number | Confidential | Never display |
| Employee or contractor ID | Confidential | Never display |
| Customer name or tenant identifier | Confidential | Suppress, mask or aggregate unless explicitly approved |
| Incident, vulnerability or infrastructure secrets | Restricted | Never display in executive report |
| API token, password, secret, private key | Secret | Never ingest or display |
| Free-text comments or descriptions | Potentially confidential | Exclude from default dataset; use only through controlled drill-down |

### 3.3 Privacy Validation Checklist

A report release fails acceptance if any answer below is Yes without approved mitigation:

- Does the report expose unnecessary personal data?
- Does it reveal customer-identifying information?
- Does it expose security-sensitive infrastructure details?
- Does it include secrets, credentials or tokens?
- Does it display restricted issue text to an unauthorized audience?
- Does it allow users to infer individual performance from a broadly shared executive view?
- Does exported data bypass role-based access controls?

### 3.4 Privacy-by-Design Rules

- Prefer team, program and portfolio aggregation over individual ranking.
- Apply row-level security for team- or project-restricted data.
- Suppress small populations where individual identification is likely.
- Exclude free-text fields from the semantic model unless specifically approved.
- Preserve Jira permissions in all drill-down experiences.
- Log report access, refresh failures and data-export events where the platform supports it.
- Retain only the minimum historical data required for trend analysis and audit.

---

## 4. Executive Layout

### Section A — Sprint Summary

- Sprint name and date range
- Current day within sprint
- Reporting period
- Last successful refresh timestamp
- Data freshness status
- Overall Sprint Health RAG
- Concise explanation of the primary health drivers

### Section B — KPI Cards

- Sprint Health Score
- Commitment Reliability
- Sprint Completion Percentage
- Scope Stability
- Spillover Rate
- Velocity
- Blocked Work Exposure
- Aging Work Exposure
- Predictability Index
- Quality Risk

### Section C — Trends

- Velocity trend over recent completed sprints
- Commitment reliability trend
- Spillover trend
- Scope change trend
- Completion trajectory against elapsed sprint time

### Section D — Exceptions and Drivers

- Highest-risk incomplete items
- Blocked work and blocker age
- Dependency risks
- Scope added after sprint start
- Items repeatedly carried across sprints
- Quality or testing bottlenecks

### Section E — Recommended Actions

Each action must include:

- Triggering metric or exception
- Action owner role
- Recommended action
- Due date or urgency
- Expected outcome

### Section F — Evidence Drill-down

- Program
- Team
- Sprint
- Epic
- Story or task
- Issue

All drill-downs must preserve source-system authorization.

---

## 5. KPI Catalog

### 5.1 Sprint Health Score

**Purpose:** Provide a composite indicator of overall sprint delivery health.

**Recommended Formula:**

```text
Sprint Health Score =
  (Commitment Reliability × 30%) +
  (Completion Alignment × 20%) +
  (Scope Stability × 15%) +
  (Blocked Work Health × 15%) +
  (Spillover Health × 10%) +
  (Quality Health × 10%)
```

All components are normalized to a 0–100 scale.

**Governance Rule:** The composite score must never hide a critical red condition. Any approved critical override forces overall health to Red even when the weighted score is higher.

**Initial RAG Thresholds:**

| Score / Condition | RAG |
|---|---|
| 85–100 and no critical override | Green |
| 70–84 | Amber |
| Below 70 or critical override | Red |

### 5.2 Commitment Reliability

**Definition:** Percentage of sprint-start committed scope completed by sprint end.

```text
Commitment Reliability % =
Completed Sprint-Start Commitment / Sprint-Start Commitment × 100
```

**Preferred Unit:** Story points. Use issue count only when estimation is not available, and label the metric accordingly.

**Included:** Issues present in the sprint commitment baseline.

**Excluded:** Items added after sprint start, cancelled items formally excluded through approved governance, subtasks when parent-level measurement is used.

**Interpretation:** A declining trend indicates planning, dependency, capacity or execution instability.

### 5.3 Sprint Completion Percentage

```text
Completion % = Completed Scope / Current Sprint Scope × 100
```

This is a current-scope execution measure and must not be confused with commitment reliability.

### 5.4 Scope Stability

```text
Scope Stability % =
1 − ((Added Scope + Removed Scope) / Sprint-Start Scope)
```

The result is expressed as a percentage and bounded between 0% and 100%.

Track added and removed scope separately so that equal additions and removals do not conceal volatility.

### 5.5 Spillover Rate

```text
Spillover Rate % =
Incomplete Sprint-Start Commitment at Sprint End / Sprint-Start Commitment × 100
```

A sprint is not extended to improve this measure. Unfinished work moves to the next sprint and remains visible as spillover.

### 5.6 Velocity

```text
Velocity = Story Points Completed During the Sprint
```

Velocity is a team planning signal, not an individual productivity metric. Cross-team velocity comparisons are prohibited unless estimation practices are demonstrably standardized and the use case is approved.

### 5.7 Blocked Work Exposure

Recommended measures:

- Number of blocked items
- Blocked story points
- Percentage of remaining scope blocked
- Median blocker age
- Oldest blocker age

```text
Blocked Scope % = Blocked Remaining Story Points / Remaining Story Points × 100
```

### 5.8 Aging Work Exposure

Measure unfinished work by age bands appropriate to the sprint cadence.

Suggested bands for a ten-working-day sprint:

- 0–2 working days
- 3–5 working days
- 6–8 working days
- More than 8 working days

Age should be measured from the latest valid start-of-work timestamp and should exclude approved waiting states only when the pause rule is explicit and auditable.

### 5.9 Predictability Index

```text
Predictability Index =
Average Commitment Reliability across the last N completed sprints
− Variability Penalty
```

The variability penalty should reflect the standard deviation or another approved dispersion measure. The formula must be finalized before production use.

### 5.10 Quality Risk

Initial indicators may include:

- Defects discovered during sprint acceptance
- Reopened issues
- Failed testing transitions
- Escaped defects linked to sprint scope
- Percentage of completed items without required acceptance evidence

Quality metrics must not mix production defects, test defects and reopened delivery items without clearly defined categories.

---

## 6. Data Lineage

### 6.1 Minimum Required Jira Data

| Data Domain | Required Fields |
|---|---|
| Sprint | Sprint ID, sprint name, start date, end date, complete date, state |
| Issue identity | Issue key, issue type, project, parent, epic link or equivalent hierarchy |
| Ownership | Team or functional group; assignee only for authorized operational drill-down |
| Scope | Story points or approved estimation field, sprint membership history |
| Workflow | Status, status category, status-change timestamps, resolution |
| Planning | Created date, commitment-baseline timestamp, added-to-sprint timestamp, removed-from-sprint timestamp |
| Risk | Flagged or blocked indicator, blocker reason category, linked dependency |
| Quality | Defect links, test or acceptance state, reopen history where available |

### 6.2 Mandatory Historical Requirement

A current Jira issue snapshot is insufficient for commitment reliability, scope volatility and spillover analysis. The reporting layer must preserve or reconstruct:

- Sprint-start membership
- Sprint-start estimate
- Additions after sprint start
- Removals after sprint start
- Estimate changes during sprint
- Status at relevant reporting checkpoints
- Final sprint disposition

### 6.3 Data Transformations

- Normalize status values into governed reporting categories.
- Normalize team and pillar names using controlled reference data.
- Convert timestamps to the approved reporting timezone.
- Preserve source issue key for drill-down.
- Create immutable sprint-baseline records.
- Separate current scope from sprint-start commitment.
- Flag repeated carryover across consecutive sprints.
- Remove or mask restricted fields before the semantic layer is published.

---

## 7. Base Jira Query Patterns

These are starting patterns and must be adapted to the actual project, board and field configuration.

### Current Sprint Population

```jql
project = <PROJECT>
AND Sprint in openSprints()
AND issuetype in (<GOVERNED_DELIVERY_TYPES>)
```

### Incomplete Current Sprint Work

```jql
project = <PROJECT>
AND Sprint in openSprints()
AND statusCategory != Done
AND issuetype in (<GOVERNED_DELIVERY_TYPES>)
```

### Currently Blocked Work

```jql
project = <PROJECT>
AND Sprint in openSprints()
AND statusCategory != Done
AND (
  Flagged = Impediment
  OR status = Blocked
  OR labels in (blocked)
)
```

### Completed Current Sprint Work

```jql
project = <PROJECT>
AND Sprint in openSprints()
AND statusCategory = Done
AND issuetype in (<GOVERNED_DELIVERY_TYPES>)
```

**Important:** JQL alone does not reliably recreate sprint-start commitment or membership history. Historical change data, automation snapshots or an analytics platform is required.

---

## 8. Visual Specification

| Visual | Purpose | Interpretation | Recommended Action |
|---|---|---|---|
| Overall health card | Summarize current sprint condition | Read with driver text and override flags | Escalate only when threshold or critical override is met |
| Completion trajectory line | Compare work completion with elapsed time | A widening gap indicates increasing delivery risk | Re-plan remaining work, remove blockers or formally descoped work |
| Commitment vs completed bar | Show baseline commitment and achieved output | Highlights reliability without hiding scope changes | Review planning quality and dependency assumptions |
| Scope movement waterfall | Show starting scope, additions, removals and final scope | Reveals volatility and late scope injection | Enforce scope-change approval and reason capture |
| Spillover trend | Show carryover across completed sprints | Persistent increase signals systemic weakness | Launch root-cause action across planning, capacity and dependencies |
| Blocked work heatmap | Show blocked exposure by team, epic or age | Concentration identifies intervention point | Escalate owners and dependency providers |
| Aging work distribution | Show remaining work by age band | Older unfinished work is more likely to spill over | Swarm, split, descoped or resolve blocker |
| Exception table | Provide auditable underlying records | Used for operational action and validation | Assign action, owner and due date |

No visual is included solely for decoration.

---

## 9. Explainable Insight Rules

Automated or AI-generated insights must:

- Cite the supporting metric, comparison period and affected population.
- Distinguish observed fact from inferred cause.
- Avoid personal performance judgments.
- Avoid exposing restricted text or personal data.
- State confidence or limitation where causal evidence is incomplete.
- Provide a specific operational or governance action.

Example:

> Commitment reliability is at risk because 34% of remaining story points are blocked, primarily across two dependency-linked epics. This is an observed concentration, not proof that the dependency is the only cause. Program leadership should validate delivery dates with the dependency owners today.

---

## 10. Access and Distribution Model

| Audience | Default Granularity | Restricted Content |
|---|---|---|
| Executive | Portfolio, program, team aggregation | No individual names, comments or restricted issue summaries |
| Director / Program Manager | Program, team, epic and approved issue drill-down | Personal and customer data suppressed |
| Scrum Master / Product Owner | Team, sprint, epic, issue | Access limited to authorized projects |
| Engineering Manager | Team and authorized issue detail | No cross-team personal ranking |
| PMO / Governance | Cross-program aggregates and governed evidence | Access based on portfolio authorization |

Exports must retain access restrictions wherever technically possible. Broadly distributable static exports must contain only the executive-safe dataset.

---

## 11. Validation Controls

Before publication, validate:

- Active sprint dates match the source board.
- Sprint-start baseline exists and is immutable.
- Story-point totals reconcile with Jira within approved tolerance.
- Done criteria follow the governed status and resolution rules.
- Added and removed scope reconcile with sprint history.
- Spillover is attributed to the sprint where commitment was missed.
- Cancelled or invalid work is handled consistently.
- Duplicate issues and subtasks are not double-counted.
- Restricted fields are absent from unauthorized views.
- Refresh timestamp and reporting period are visible.
- Every KPI supports drill-down to auditable evidence.

---

## 12. Initial Acceptance Criteria

GS-001 is Done only when:

### Business

- The report supports sprint intervention, escalation and closure decisions.
- Commitment reliability, current completion and scope change are clearly separated.
- The dashboard explains the most important health drivers and recommended actions.

### Governance

- Every KPI has a definition, formula, owner, audience and business rule.
- Included and excluded populations are documented.
- Sprint extension is not used as a corrective mechanism.
- Spillover remains visible and traceable across sprints.

### Data and Technical

- Sprint history is available for baseline and scope-change calculations.
- KPI totals reconcile to approved source evidence.
- Refresh, failure handling and data-freshness rules are defined.
- Drill-down preserves Jira or semantic-layer authorization.

### Privacy and Security

- The privacy checklist passes.
- No email, phone, employee ID, secret, credential or unauthorized customer data is exposed.
- Individual names are absent from executive views unless explicitly approved.
- Free-text fields are excluded from the default model.
- Export behavior is validated.

### User Experience

- Every visual has a purpose, interpretation and recommended action.
- Reporting period and last refresh timestamp are visible.
- Exceptions are actionable and linked to evidence.
- The dashboard is usable at executive and operational levels without duplicating incompatible KPI logic.

---

## 13. Remaining Build Tasks

- Finalize KPI formulas and thresholds with worked examples.
- Create the detailed KPI catalog.
- Create the governed data dictionary and privacy classification matrix.
- Create Jira implementation guidance.
- Create Power BI and EazyBI implementation guidance.
- Build the HTML reference dashboard.
- Add evidence tables and drill-down specifications.
- Execute Definition-of-Done review and record validation results.

---

## 14. Change Log

| Version | Change |
|---|---|
| 0.1 | Created GS-001 master specification and embedded mandatory privacy, governance, lineage and acceptance controls |
