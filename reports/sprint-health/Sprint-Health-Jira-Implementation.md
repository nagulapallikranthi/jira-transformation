# GS-001 — Sprint Health Jira Implementation Guide

## Purpose

This guide translates the governed Sprint Health Dashboard definitions into a Jira implementation approach. Jira provides the operational source and drill-down experience; historical KPI calculations require approved snapshots, changelog processing or an analytics platform.

The implementation must preserve Jira permissions and must not expose restricted fields through dashboards, filters, exports or automation payloads.

---

## 1. Implementation Principles

1. Never extend a sprint to improve delivery metrics.
2. Preserve an immutable sprint-start baseline.
3. Separate sprint-start commitment from current sprint scope.
4. Track additions, removals and estimate changes independently.
5. Use team-level ownership for broad reporting; avoid individual rankings.
6. Keep JQL filters simple, reusable and auditable.
7. Do not treat current Jira values as historical truth.
8. Preserve Jira authorization in all issue-level drill-downs.
9. Exclude confidential and free-text fields from broad report datasets.
10. Flag missing or stale data rather than silently estimating it.

---

## 2. Required Jira Configuration

### 2.1 Core Fields

| Field | Requirement | Notes |
|---|---|---|
| Sprint | Mandatory for sprint-governed delivery work | Board and sprint IDs must be retained |
| Story Points / Estimate | Required for point-based KPIs | Use one governed field per project family |
| Team / Functional Group | Mandatory before active work | Controlled values only |
| Epic / Parent hierarchy | Required where hierarchy reporting is used | Normalize company-managed and team-managed projects |
| Priority | Recommended | Use governed enterprise values |
| Flagged / Blocked indicator | Required for blocker analytics | Prefer Jira Flagged or a governed blocker field |
| Blocker Category | Recommended | Controlled list; no executive free text |
| Acceptance State | Required when product acceptance is separate from Done | Normalize values |
| Dependency link or key | Required for dependency analysis | Use approved link types or dedicated field |
| Resolution | Required for closed-work integrity | Align with workflow governance |

### 2.2 Historical Fields or Snapshot Store

Jira's current issue state is insufficient for:

- Sprint-start commitment
- Scope additions and removals
- Story-point changes
- Status at sprint checkpoints
- Spillover attribution
- Repeated carryover

Implement one of the following approved patterns:

1. Jira Automation snapshots to a governed issue/entity store.
2. Jira changelog extraction into a reporting database.
3. Atlassian Analytics/Data Lake historical model where available.
4. EazyBI change-history import where configuration supports the required events.

The chosen method must retain source issue key, sprint ID, event timestamp, previous value and new value.

---

## 3. Sprint Baseline Design

### 3.1 Baseline Event

Capture the baseline at the approved sprint-start checkpoint. Recommended trigger:

- Sprint starts, plus a short controlled tolerance window if operationally required.

### 3.2 Baseline Record

For every governed issue in the sprint, retain:

- Sprint ID
- Issue key
- Issue type
- Team / Functional Group
- Epic / parent hierarchy
- Story points at baseline
- Status at baseline
- Baseline timestamp
- Source project
- Baseline version or run ID

### 3.3 Immutability

- Baseline records must never be overwritten.
- Corrections require a new version with reason, approver and timestamp.
- The report must identify which baseline version was used.

---

## 4. Base JQL Filter Library

Replace placeholders with approved project, board, issue-type and status values.

### 4.1 Current Sprint Population

```jql
project = <PROJECT>
AND Sprint in openSprints()
AND issuetype in (<GOVERNED_DELIVERY_TYPES>)
```

### 4.2 Incomplete Current Sprint Work

```jql
project = <PROJECT>
AND Sprint in openSprints()
AND statusCategory != Done
AND issuetype in (<GOVERNED_DELIVERY_TYPES>)
```

### 4.3 Completed Current Sprint Work

```jql
project = <PROJECT>
AND Sprint in openSprints()
AND statusCategory = Done
AND issuetype in (<GOVERNED_DELIVERY_TYPES>)
```

### 4.4 Blocked Current Sprint Work

```jql
project = <PROJECT>
AND Sprint in openSprints()
AND statusCategory != Done
AND issuetype in (<GOVERNED_DELIVERY_TYPES>)
AND (
    Flagged = Impediment
    OR status = Blocked
    OR "Blocked?" = Yes
)
```

Use only blocker conditions approved for the target Jira configuration.

### 4.5 Aging In-Progress Work

```jql
project = <PROJECT>
AND Sprint in openSprints()
AND statusCategory = "In Progress"
AND issuetype in (<GOVERNED_DELIVERY_TYPES>)
ORDER BY statusCategoryChangedDate ASC
```

`statusCategoryChangedDate` is only a starting indicator. Accurate work age may require full transition history.

### 4.6 Unestimated Sprint Work

```jql
project = <PROJECT>
AND Sprint in openSprints()
AND issuetype in (<GOVERNED_DELIVERY_TYPES>)
AND "Story Points" is EMPTY
```

### 4.7 Missing Team Assignment

```jql
project = <PROJECT>
AND Sprint in openSprints()
AND issuetype in (<GOVERNED_DELIVERY_TYPES>)
AND "Functional Group" is EMPTY
```

### 4.8 Failed Acceptance / Testing

```jql
project = <PROJECT>
AND Sprint in openSprints()
AND status in ("Failed in Testing", "Product Acceptance")
```

Adapt this filter to the governed workflow and acceptance definition.

### 4.9 Candidate Spillover at Sprint End

```jql
project = <PROJECT>
AND Sprint = <SPRINT_ID_OR_NAME>
AND statusCategory != Done
AND issuetype in (<GOVERNED_DELIVERY_TYPES>)
```

This is only a candidate population. Final spillover must be intersected with the sprint-start baseline.

---

## 5. Filters and Dashboard Gadgets

### 5.1 Recommended Saved Filters

| Filter | Audience | Purpose |
|---|---|---|
| GS-001 Current Sprint Population | Delivery team | Source population validation |
| GS-001 Incomplete Work | Team and program | Remaining work |
| GS-001 Blocked Work | Team and program | Blocker action |
| GS-001 Aging Work | Scrum Master / Engineering Manager | Flow intervention |
| GS-001 Missing Estimates | Scrum Master / Product Owner | Data quality |
| GS-001 Missing Team | PMO / Jira governance | Ownership quality |
| GS-001 Acceptance Exceptions | Product Owner / QA | Readiness risk |
| GS-001 Spillover Candidates | Program / PMO | Sprint-close validation |

### 5.2 Jira Dashboard Gadgets

Jira-native gadgets may support operational views such as:

- Filter Results for blockers and aging items
- Two-Dimensional Filter Statistics by team and status
- Created vs Resolved Chart where relevant
- Pie Chart for remaining work by status
- Sprint Health gadget or burndown where supported

Jira gadgets do not replace governed historical calculations. Commitment reliability, scope stability and repeated carryover should come from the reporting layer.

---

## 6. Automation Design

### 6.1 Sprint-Start Snapshot

**Trigger:** Sprint started, scheduled lookup or approved orchestration event.

**Actions:**

1. Identify the sprint and governed board population.
2. Capture issue key, sprint ID, story points, team, hierarchy and status.
3. Write immutable records to the approved store.
4. Record snapshot run ID, timestamp and result count.
5. Alert on missing required fields or count mismatch.

### 6.2 Scope-Change Capture

**Trigger:** Sprint field changes during an active sprint.

Capture:

- Issue key
- Sprint ID
- Added or removed event
- Event timestamp
- Story points at event
- Team and hierarchy
- Actor identifier only where required for audit and access-controlled
- Approved scope-change reason where configured

Do not display actor names in executive reporting.

### 6.3 Estimate-Change Capture

**Trigger:** Story Points changes while an issue belongs to an active sprint.

Capture previous value, new value, timestamp, sprint ID and issue key. Notify only where thresholds or governance rules are breached.

### 6.4 Blocker Aging

**Trigger:** Issue enters or exits the governed blocked condition.

Capture blocked-start and blocked-end timestamps. Avoid relying solely on the current blocked flag.

### 6.5 Sprint-Close Snapshot

**Trigger:** Sprint completes.

Capture final status, final estimate, completion timestamp, sprint disposition and next sprint membership. Mark incomplete sprint-start commitment as spillover without changing the original sprint record.

---

## 7. Workflow and Status Mapping

Create a governed mapping table:

| Reporting Category | Example Jira Statuses |
|---|---|
| Not Started | New, Submitted, Ready for Planning |
| In Progress | In Progress, In Review, In Grooming |
| Waiting / Paused | Reporter – Need More Info, On Hold |
| Blocked | Blocked |
| Testing / Acceptance | Ready for Testing, Product Acceptance, Ready for Acceptance |
| Failed Validation | Failed in Testing |
| Done | Done, Accepted, Resolved where governed |
| Excluded Closure | Cancelled, Out of Scope |

Project-specific statuses must map to one approved reporting category. Mapping changes require impact review because they affect historical KPI comparability.

---

## 8. Done and Completion Rules

An item counts as completed only when:

- It meets the governed status-category and resolution rule.
- The completion timestamp is on or before the sprint boundary.
- Required acceptance evidence is present where applicable.
- It is not subsequently invalidated by an approved reopen rule.

Items moved to Done after sprint closure must not be credited to the closed sprint unless the source evidence shows completion occurred within the sprint and the late update is an approved correction.

---

## 9. Scope-Change Governance

For work added or removed after sprint start, capture a governed reason such as:

- Production or customer-critical interruption
- Regulatory or security requirement
- Dependency-driven change
- Product-owner reprioritization
- Incorrect sprint assignment
- Work decomposition or split
- Duplicate / invalid work

Scope movement must remain visible. Removing work does not erase its effect on scope volatility.

---

## 10. Privacy and Access Validation

Before publishing any Jira dashboard or saved filter:

- Confirm filter sharing is limited to authorized groups.
- Exclude email, phone, employee ID, customer ID, description and comments.
- Avoid assignee columns in broadly shared views.
- Verify issue summaries do not reveal customer or security-sensitive information.
- Ensure external or anonymous access is disabled.
- Verify exported filter results do not bypass intended restrictions.
- Use Jira account IDs only in controlled technical processing, never executive display.

---

## 11. Data-Quality Controls

| Control | Expected Action |
|---|---|
| Baseline issue count differs from Jira sprint population | Block KPI publication and reconcile |
| Story-point coverage below approved threshold | Show coverage warning and suppress unreliable point-based claims |
| Missing team / functional group | Route to governance queue |
| Duplicate snapshot records | Quarantine duplicate run and retain auditable correction |
| Sprint dates changed after start | Flag governance exception |
| Unsupported status appears | Map before next publication; display data-quality warning |
| Scope event lacks timestamp or sprint ID | Exclude from calculation and raise pipeline exception |
| Restricted field found in output | Block release immediately |

---

## 12. Validation Checklist

- [ ] Saved filters use approved project and issue-type scope.
- [ ] Sprint-start baseline is immutable and reconciled.
- [ ] Current scope is not presented as original commitment.
- [ ] Additions and removals are tracked separately.
- [ ] Estimate changes are historically captured.
- [ ] Blocker age is based on event timestamps.
- [ ] Done logic matches workflow governance.
- [ ] Subtask double-counting is prevented.
- [ ] Spillover remains attributed to the missed sprint.
- [ ] Jira permissions are preserved in drill-down.
- [ ] Restricted and prohibited fields are absent.
- [ ] Refresh and snapshot failures are visible.

---

## 13. Definition of Done

The Jira implementation is ready when:

- Required fields and mappings are approved.
- Baseline, change and closure snapshot mechanisms are implemented or formally planned with owners and dates.
- Saved filters reconcile with Jira source populations.
- Dashboard sharing and drill-down permissions are validated.
- Data-quality exceptions are actionable.
- No prohibited data is exposed.
- KPI calculations can be reproduced from Jira evidence and the governed historical store.
