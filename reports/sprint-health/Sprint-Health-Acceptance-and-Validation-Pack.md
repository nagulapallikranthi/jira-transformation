# GS-001 — Sprint Health Acceptance and Validation Pack

## 1. Purpose

This pack defines the evidence required to approve the Sprint Health Dashboard for production use. It is the release gate for the report specification, KPI logic, data model, Jira implementation, EazyBI implementation, Power BI implementation and HTML reference design.

A report is not accepted because it renders successfully. It is accepted only when business meaning, source reconciliation, governance, access control, usability and operational support have been validated.

---

## 2. Release Decision

| Attribute | Required Value |
|---|---|
| Report ID | GS-001 |
| Report | Sprint Health Dashboard |
| Release candidate | Recorded before validation |
| Validation owner | Program Management / Agile Governance |
| Data owner | Jira / Reporting Product Owner |
| Technical owner | Reporting Engineering |
| Privacy approver | Designated data-governance representative |
| Decision | Approved / Approved with conditions / Rejected |
| Decision date | Recorded |
| Evidence location | Linked repository, test record or controlled evidence store |

**Approval rule:** Any failed critical control results in Rejected or Approved with explicit remediation, owner and due date. Critical privacy, authorization, secret-exposure or KPI-integrity failures cannot be conditionally waived for production publication.

---

## 3. Quality Gates

GS-001 must pass five independent gates:

1. Governance Gate
2. Privacy and Data Classification Gate
3. KPI and Data Integrity Gate
4. Technical and Operational Gate
5. Executive and User Experience Gate

Each gate must have an accountable approver and supporting evidence.

---

## 4. Governance Gate

| ID | Control | Expected Evidence | Severity | Result |
|---|---|---|---|---|
| GOV-01 | Report owner and accountable data owner are named | Document control record | Critical | Pending |
| GOV-02 | Audience and permitted granularity are documented | Governance specification | High | Pending |
| GOV-03 | Every KPI has a definition, formula, unit, population and owner | KPI catalog | Critical | Pending |
| GOV-04 | Sprint extension is not used to improve results | Governance rule and sprint-close process | Critical | Pending |
| GOV-05 | Spillover remains traceable to the missed sprint commitment | Historical evidence test | Critical | Pending |
| GOV-06 | Current completion and commitment reliability are visibly separated | Dashboard review | High | Pending |
| GOV-07 | Scope additions and removals are separately visible | KPI and visual review | High | Pending |
| GOV-08 | Threshold changes follow controlled approval | Change record or version history | Medium | Pending |
| GOV-09 | Assumptions and known limitations are published | Report governance document | High | Pending |
| GOV-10 | Release and rollback ownership are defined | Runbook or release record | High | Pending |

### Governance Exit Criteria

- No Critical control is failed.
- All High controls are passed or have formally accepted remediation.
- KPI and threshold versions are traceable.
- The final release decision is documented.

---

## 5. Privacy and Data Classification Gate

| ID | Control | Expected Evidence | Severity | Result |
|---|---|---|---|---|
| PRI-01 | Executive view excludes email, phone number and employee identifier | Field inspection and export test | Critical | Pending |
| PRI-02 | Secrets, credentials, tokens and private keys are excluded from ingestion and display | Data scan and field allowlist | Critical | Pending |
| PRI-03 | Customer or tenant identifiers are suppressed, masked or explicitly approved | Data sample and governance approval | Critical | Pending |
| PRI-04 | Assignee names are absent from broadly shared executive views | Screenshot and export test | High | Pending |
| PRI-05 | Free-text comments and descriptions are excluded from the default semantic model | Model inspection | High | Pending |
| PRI-06 | Drill-down respects Jira or semantic-model authorization | Positive and negative access tests | Critical | Pending |
| PRI-07 | Row-level security is tested using representative roles | RLS test evidence | Critical | Pending |
| PRI-08 | Static exports contain only the executive-safe dataset | Export inspection | High | Pending |
| PRI-09 | Small-population suppression is applied where identification risk exists | Test case and configuration | Medium | Pending |
| PRI-10 | Historical retention is limited to approved reporting and audit requirements | Retention configuration | Medium | Pending |

### Privacy Exit Criteria

- No restricted or secret data is exposed to an unauthorized audience.
- Negative-access testing confirms that unauthorized users cannot reach underlying detail.
- Exported output does not bypass the approved access model.

---

## 6. KPI and Data Integrity Gate

### 6.1 Required Reconciliation Dataset

Validation must use at least:

- One active sprint
- Three completed sprints
- One sprint with scope additions
- One sprint with scope removals
- One sprint with estimate changes
- One sprint with blocked work
- One sprint with spillover
- One repeated-carryover item
- One cancelled or invalid work item
- One item moved between sprints

### 6.2 KPI Tests

| ID | KPI / Rule | Test | Acceptance Tolerance | Result |
|---|---|---|---|---|
| KPI-01 | Sprint-start commitment | Reconcile immutable baseline against sprint-start source evidence | Exact match | Pending |
| KPI-02 | Commitment Reliability | Recalculate completed baseline scope divided by baseline scope | ±0.1 percentage point | Pending |
| KPI-03 | Current Scope Completion | Recalculate completed current scope divided by current scope | ±0.1 percentage point | Pending |
| KPI-04 | Added Scope | Reconcile additions after start with membership history | Exact issue set and estimate total | Pending |
| KPI-05 | Removed Scope | Reconcile removals after start with membership history | Exact issue set and estimate total | Pending |
| KPI-06 | Scope Stability | Recalculate using approved addition/removal logic | ±0.1 percentage point | Pending |
| KPI-07 | Spillover Rate | Validate incomplete baseline commitment at sprint close | Exact issue set; ±0.1 point | Pending |
| KPI-08 | Velocity | Reconcile completed story points to governed Done rule | Exact total | Pending |
| KPI-09 | Blocked Scope | Validate status, flag and label normalization | Exact issue set | Pending |
| KPI-10 | Blocker Age | Validate start, pause and end timestamps | ±1 hour | Pending |
| KPI-11 | Aging Work | Validate age bands and approved pause states | Exact band assignment | Pending |
| KPI-12 | Estimate Change Rate | Reconcile sprint-start and subsequent estimate values | Exact issue set and total | Pending |
| KPI-13 | Reopen Rate | Validate Done-to-not-Done transitions | Exact issue set | Pending |
| KPI-14 | Repeated Carryover | Validate consecutive sprint participation | Exact sequence | Pending |
| KPI-15 | Sprint Health Score | Recalculate weighted components and critical override | ±0.1 point | Pending |

### 6.3 Edge Cases

The following must be explicitly tested:

- Zero-point sprint
- Null story-point values
- Subtasks and parent items both present
- Issue completed after sprint close
- Issue reopened after sprint close
- Cancelled work
- Scope added and removed on the same day
- Estimate changed to zero
- Sprint renamed
- Sprint closed and reopened administratively
- Duplicate records from incremental loads
- Timezone boundary around sprint start or close

### Data Integrity Exit Criteria

- All Critical KPI tests pass.
- Totals reconcile within documented tolerance.
- No duplicate counting exists across hierarchy levels.
- Historical baseline values remain immutable after sprint start.
- Null and cancelled-item handling match the documented rules.

---

## 7. Technical and Operational Gate

| ID | Control | Expected Evidence | Severity | Result |
|---|---|---|---|---|
| TEC-01 | Refresh completes within the approved service target | Refresh log | High | Pending |
| TEC-02 | Incremental load does not duplicate or omit history | Load comparison | Critical | Pending |
| TEC-03 | Failed refresh preserves the last successful approved dataset | Failure simulation | High | Pending |
| TEC-04 | Dashboard visibly shows last successful refresh time | Screenshot | High | Pending |
| TEC-05 | Stale data is visibly flagged | Staleness test | High | Pending |
| TEC-06 | Drill-through reaches the correct source evidence | Link and filter test | Critical | Pending |
| TEC-07 | Filters do not change governed KPI meaning unexpectedly | Filter test matrix | Critical | Pending |
| TEC-08 | Performance meets the approved response target | Performance test | High | Pending |
| TEC-09 | Mobile and common desktop layouts remain usable | Responsive review | Medium | Pending |
| TEC-10 | Monitoring captures refresh failure and data-quality exceptions | Alert evidence | High | Pending |
| TEC-11 | Deployment is versioned and rollback is tested | Deployment record | High | Pending |
| TEC-12 | Semantic model and source credentials use approved service identities | Configuration review | Critical | Pending |

### Suggested Performance Targets

- Executive landing page: under 5 seconds at normal enterprise load
- Standard slicer interaction: under 3 seconds
- Drill-through page: under 5 seconds
- Scheduled refresh: within the approved reporting window

Targets may be adjusted after representative load testing, but the final approved values must be documented.

---

## 8. Executive and User Experience Gate

| ID | Control | Expected Evidence | Severity | Result |
|---|---|---|---|---|
| UX-01 | Overall health and drivers are understandable within one minute | Executive review | High | Pending |
| UX-02 | Reporting period and refresh timestamp are visible | Screenshot | High | Pending |
| UX-03 | Every visual has a defined decision purpose | Design review | High | Pending |
| UX-04 | Every risk signal has an interpretation and recommended action | Content review | High | Pending |
| UX-05 | Trend context is available for major KPIs | Dashboard review | Medium | Pending |
| UX-06 | Exception records provide actionable evidence | Operational user test | High | Pending |
| UX-07 | Color is not the only way health is communicated | Accessibility review | High | Pending |
| UX-08 | Individual productivity ranking is absent | Governance review | Critical | Pending |
| UX-09 | Terminology matches the KPI catalog and governance playbook | Terminology review | Medium | Pending |
| UX-10 | Prototype or sample values are clearly labelled | Screenshot and content review | High | Pending |

### Executive Acceptance Questions

Approvers should be able to answer:

1. Is the sprint likely to meet its original commitment?
2. How much scope changed after sprint start?
3. What work is blocked or aging?
4. What is most likely to spill over?
5. Which action should leadership take now?
6. Can the conclusion be traced to source evidence?

If any answer is unclear, the executive gate is not complete.

---

## 9. Platform-Specific Validation

### 9.1 Jira

- Saved filters use governed issue types and Done rules.
- Dashboard filters do not substitute current-state JQL for historical baselines.
- Sprint-start snapshots are captured successfully.
- Scope additions, removals and estimate changes are auditable.
- Spillover movement occurs only after sprint closure.
- Issue drill-down preserves project permissions.

### 9.2 EazyBI

- Imported sprint and transition history is complete.
- Calculated measures use the governed Time and Sprint context.
- Empty and zero values behave as documented.
- Aggregate values reconcile with Jira evidence.
- MDX does not mix current scope and baseline scope.
- Report performance is acceptable on the production-sized cube.

### 9.3 Power BI

- Star-schema relationships are one-directional unless an exception is approved.
- DAX measures return correct totals at sprint, team and portfolio levels.
- Incremental refresh preserves historical changes.
- Row-level security is tested through effective-role simulation.
- Deployment pipeline promotion retains parameters and permissions.
- Export and Analyze in Excel behavior match the access model.

### 9.4 HTML Reference Dashboard

- Responsive layout works on common desktop and mobile widths.
- Sample values are identified as illustrative.
- No confidential or personal information is embedded.
- All mandatory sections are represented: summary, KPI cards, trends, exceptions, actions and evidence.
- The reference design does not imply that static HTML is the production source of truth.

---

## 10. Defect Classification

| Severity | Definition | Release Rule |
|---|---|---|
| Critical | Incorrect KPI, unauthorized exposure, secret exposure, broken authorization or materially misleading executive conclusion | Release blocked |
| High | Missing required evidence, failed reconciliation, stale-data ambiguity, broken drill-down or major usability problem | Release blocked unless formally remediated before use |
| Medium | Limited usability, documentation or non-critical performance issue | May release with owner and due date |
| Low | Cosmetic or minor wording issue with no decision impact | May release and track |

---

## 11. Acceptance Evidence Register

| Evidence ID | Description | Owner | Location | Date | Status |
|---|---|---|---|---|---|
| EVD-001 | KPI reconciliation workbook | Reporting Engineering | To be linked | TBD | Pending |
| EVD-002 | Privacy and field inspection | Data Governance | To be linked | TBD | Pending |
| EVD-003 | RLS positive and negative tests | Reporting Engineering | To be linked | TBD | Pending |
| EVD-004 | Jira baseline and scope-history sample | Jira Product Owner | To be linked | TBD | Pending |
| EVD-005 | Performance and refresh results | Platform Owner | To be linked | TBD | Pending |
| EVD-006 | Executive usability review | Program Leadership | To be linked | TBD | Pending |
| EVD-007 | Deployment and rollback test | Reporting Engineering | To be linked | TBD | Pending |

---

## 12. Release Sign-off

| Role | Name | Decision | Conditions / Comments | Date |
|---|---|---|---|---|
| Report Owner | TBD | Pending |  |  |
| Data Owner | TBD | Pending |  |  |
| Technical Owner | TBD | Pending |  |  |
| Privacy / Governance Approver | TBD | Pending |  |  |
| Executive Sponsor | TBD | Pending |  |  |

---

## 13. Definition of Done

GS-001 is accepted as a Gold Standard Report when:

- All five quality gates have completed evidence.
- No Critical defect remains open.
- KPI values reconcile to approved source evidence.
- Privacy, data classification and authorization tests pass.
- Jira, EazyBI and Power BI implementation guidance aligns with the same KPI logic.
- The HTML dashboard represents the approved information architecture.
- Reporting period, refresh time, formula lineage, population rules, drill-down and recommended actions are available.
- The release decision and approvers are recorded.
- Known limitations and follow-up items are visible and owned.

Until these conditions are met, the report remains a release candidate rather than a production-approved Gold Standard Report.
