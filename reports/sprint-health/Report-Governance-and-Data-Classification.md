# GS-001 — Report Governance & Data Classification

## Document Control

| Attribute | Value |
|---|---|
| Report ID | GS-001 |
| Report | Sprint Health Dashboard |
| Artifact | Report Governance & Data Classification |
| Status | Active Sprint Deliverable |
| Business Owner | Program Management / Agile Governance |
| Technical Owner | Reporting Platform Owner |
| Classification | Internal |
| Review Cadence | At design, before release, after material scope change, and annually |

---

## 1. Purpose

This standard defines how the Sprint Health Dashboard is governed, classified, accessed, validated, refreshed, exported and audited. It replaces the earlier working label **Privacy & Security Specification**.

The objective is to ensure that the report remains useful for decision-making without exposing unnecessary personal, customer, security-sensitive or confidential information.

---

## 2. Governance Principles

1. Collect and publish only data required for an approved reporting purpose.
2. Prefer team, sprint, program and portfolio aggregation over individual-level comparison.
3. Preserve Jira authorization in every drill-down path.
4. Separate executive-safe data from operationally restricted detail.
5. Exclude free-text fields from the default reporting model.
6. Make every KPI reproducible, traceable and supported by source evidence.
7. Display the reporting period and latest successful refresh timestamp.
8. Treat exports as separate governed outputs rather than unrestricted copies of the interactive report.
9. Revalidate this standard whenever the audience, source fields, drill-down depth or distribution method changes.

---

## 3. Intended Audience and Access Model

| Audience | Default View | Permitted Detail | Prohibited by Default |
|---|---|---|---|
| Executive | Portfolio, program and team aggregation | KPI trends, exceptions, risks and recommended actions | Individual rankings, email addresses, comments, customer identifiers |
| Director | Program, team, sprint and epic | Approved issue drill-down for owned scope | Cross-program restricted records and unnecessary personal data |
| Program Manager / PMO | Program, team, sprint, epic and governed evidence | Issue keys and approved summaries | Secrets, customer-sensitive data and uncontrolled exports |
| Scrum Master / Product Owner | Authorized team and sprint detail | Issue-level operational evidence | Data outside authorized Jira scope |
| Engineering Manager | Authorized team, sprint and issue detail | Delivery and blocker evidence | Cross-team individual ranking |
| Broad Distribution / Static Export | Executive-safe aggregation only | Sanitized KPI and trend data | Names, free text, customer data, infrastructure detail and restricted issue summaries |

Access must follow least-privilege principles. Report access does not grant additional Jira access.

---

## 4. Data Classification Matrix

| Data Element | Classification | Default Rule | Notes |
|---|---|---|---|
| Sprint name and dates | Internal | Display | Validate naming does not contain customer-sensitive text |
| Project, program, pillar or team | Internal | Display | Use governed reference names |
| Issue key | Internal Restricted | Operational views only | Preserve Jira permission checks |
| Issue summary | Potentially Sensitive | Mask or suppress by default | May contain customer, employee or security context |
| Epic or initiative name | Internal / Potentially Sensitive | Display after classification check | Mask where restricted |
| Status and status category | Internal | Display | Normalize into governed reporting categories |
| Priority | Internal | Display | Do not infer personal performance |
| Story points or approved estimate | Internal | Display | Team planning measure only |
| Velocity and completion metrics | Internal | Display in aggregate | Never use for individual ranking |
| Assignee name | Restricted Personal Data | Operational role-based views only | Prefer owner role or team aggregation |
| Email address | Confidential Personal Data | Never display or export | Exclude from semantic model |
| Phone number | Confidential Personal Data | Never ingest, display or export | Not required for reporting |
| Employee or contractor ID | Confidential Personal Data | Never display or export | Exclude from reporting dataset |
| Customer name or tenant identifier | Confidential | Mask, suppress or aggregate | Requires explicit approved use case |
| Free-text description or comments | Potentially Confidential | Excluded by default | Controlled drill-down only when approved |
| Vulnerability, infrastructure or security detail | Restricted | Never display in executive views | Route to approved security systems |
| API token, password, secret or private key | Secret | Never ingest, store, display or export | Any detection is a release-blocking incident |

---

## 5. Minimum Necessary Dataset

The default semantic model may include only fields required for approved KPIs and drill-downs:

- Sprint ID, name, state, start date, end date and completion date
- Issue key and governed hierarchy
- Project, team, pillar and functional group
- Issue type, status, status category, priority and resolution
- Approved estimation field
- Sprint membership and estimate history
- Created, updated, resolved and workflow transition timestamps
- Blocked indicator and governed blocker category
- Dependency links or governed dependency identifier
- Quality indicators required by approved KPI definitions

The following must not be included in the default model:

- Email, phone number or employee identifier
- Uncontrolled issue descriptions or comments
- Attachments
- Authentication data, credentials or secrets
- Customer identifiers without explicit approval
- Raw security findings or confidential infrastructure details

---

## 6. Data-Handling Rules

### 6.1 Aggregation

- Executive views use program, team, sprint and epic aggregation.
- Individual-level data is shown only when operationally necessary and authorized.
- Cross-team individual comparisons are prohibited.
- Small populations must be suppressed or rolled up where identification is likely.

### 6.2 Masking and Suppression

- Potentially sensitive summaries must be masked in broad views.
- Restricted epics or initiatives must use an approved alias or be omitted.
- Customer and tenant identifiers must be tokenized, aggregated or suppressed.
- Null suppression must not create a misleading denominator.

### 6.3 Drill-down

- Drill-down must preserve source authorization.
- A report user must not gain access to an issue through the dashboard when Jira would deny access.
- Direct Jira links are preferred over copied restricted text.
- Executive-safe exports must not include operational drill-down tables.

### 6.4 Historical Data

- Retain only the history required for trend analysis, audit and KPI reconstruction.
- Sprint baselines must be immutable.
- Access to historical snapshots must follow the same authorization model as current data.
- Retention periods must follow organizational policy and legal requirements.

---

## 7. Source and Lineage Governance

| Layer | Required Control |
|---|---|
| Jira source | Approved service account, least privilege, auditable authentication and no personal credentials for production |
| Ingestion | Allowlisted fields, schema validation, secret scanning and failed-record quarantine |
| Transformation | Governed status mappings, timezone normalization, immutable sprint baseline and duplicate prevention |
| Semantic model | Approved KPI definitions, row-level security, restricted-field removal and certified calculations |
| Dashboard | Audience-appropriate views, visible freshness status and controlled drill-down |
| Export | Sanitized dataset, export logging where supported and no bypass of access controls |

Every KPI must be traceable from visual to measure, transformation, source fields and source population.

---

## 8. Refresh and Freshness Rules

| Condition | Rule |
|---|---|
| During active sprint | Refresh at least daily; more frequently only when operationally justified |
| Sprint closure | Capture a final immutable snapshot after closure validation |
| Refresh failure | Retain last successful data, mark report stale and display failure status |
| Partial load | Do not publish as healthy; identify affected population and quarantine invalid records |
| Source delay | Display source timestamp and known lag |
| Material data correction | Re-run validation and document the correction |

A dashboard must not show a current status without displaying the last successful refresh timestamp.

---

## 9. Validation Controls

Before publication, confirm:

- [ ] Audience and access level are approved.
- [ ] Data elements match the classification matrix.
- [ ] Email, phone number and employee identifiers are absent.
- [ ] Secrets, credentials and tokens are absent.
- [ ] Customer identifiers are masked, suppressed or explicitly approved.
- [ ] Free-text fields are excluded from the default dataset.
- [ ] Executive views contain no unnecessary individual-level detail.
- [ ] Jira authorization is preserved in drill-down.
- [ ] Static exports use the executive-safe dataset.
- [ ] Row-level security has been tested with representative roles.
- [ ] Reporting period and refresh timestamp are visible.
- [ ] KPI totals reconcile with source evidence.
- [ ] Included and excluded populations are documented.
- [ ] Data retention and historical snapshot handling are approved.
- [ ] Known limitations are visible.

Any failed mandatory control blocks release.

---

## 10. Assumptions

- The organization has an approved identity and access-management mechanism for the reporting platform.
- Jira permissions are the primary source authorization for issue-level data.
- Team and program reference data are governed outside the dashboard.
- Sprint history is available through snapshots, changelog data or an approved analytics platform.
- Report consumers use the dashboard for delivery governance, not individual performance management.

---

## 11. Known Limitations

- Jira current-state queries alone cannot reconstruct sprint-start commitment reliably.
- Issue summaries may contain sensitive information even when the field itself is classified Internal.
- Static exports may not retain interactive row-level security; therefore only sanitized export models are allowed.
- Small-team reporting can permit indirect identification even without names.
- Historical corrections can change trend results and must be documented.

---

## 12. Release Decision

The Report Owner and Data Owner must record one outcome:

| Decision | Meaning |
|---|---|
| Approved | All mandatory controls passed |
| Approved with Conditions | Time-bound remediation exists and no prohibited data is exposed |
| Rejected | One or more mandatory controls failed |
| Suspended | Previously approved report is temporarily withdrawn because of a new risk or control failure |

### Approval Record

| Field | Value |
|---|---|
| Review Date | |
| Report Version | |
| Reviewer | |
| Decision | |
| Conditions / Exceptions | |
| Next Review Date | |

---

## 13. Definition of Done

This artifact is complete when:

- The access model is implemented and tested.
- The classification matrix is mapped to actual source fields.
- The default semantic model excludes prohibited fields.
- Executive and operational views are separated.
- Export behavior is tested.
- Every mandatory validation control passes.
- Approval is recorded and linked to the report release.
