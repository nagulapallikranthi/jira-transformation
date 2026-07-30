# Enterprise Jira Cutover Checklist

**Version 1.0**  
**Enterprise Program Leadership Series — Volume I**

## Purpose

Use this checklist to control the final transition from the source operating state to the target Jira environment. It provides a single, auditable view of readiness, execution, decision points, validation, and stabilization.

## Cutover Record

| Field | Value |
|---|---|
| Cutover ID | `<CUTOVER_ID>` |
| Scope | `<APPROVED_SCOPE>` |
| Source | `<SOURCE_ENVIRONMENT>` |
| Target | `<TARGET_ENVIRONMENT>` |
| Start | `<START_DATE_TIME>` |
| Planned go-live | `<GO_LIVE_DATE_TIME>` |
| Rollback deadline | `<ROLLBACK_DECISION_TIME>` |
| Program lead | `<PROGRAM_LEAD>` |
| Technical lead | `<TECHNICAL_LEAD>` |
| Go/No-Go owner | `<GO_NO_GO_OWNER>` |

## Status Convention

- `[ ]` Not started
- `[~]` In progress
- `[x]` Complete
- `[!]` Exception requiring decision
- `[—]` Not applicable with rationale

## 1. Governance and Authority

- [ ] Approved scope and success criteria are baselined.
- [ ] Named go/no-go authority is present and reachable.
- [ ] Technical, business, security, and integration owners are present.
- [ ] Escalation path and decision SLA are confirmed.
- [ ] Command channel, meeting bridge, and status cadence are active.
- [ ] Cutover log owner is assigned.
- [ ] Rollback authority and deadline are confirmed.
- [ ] All exceptions have documented owners and dispositions.

## 2. Change and Communication Readiness

- [ ] Source and target change freezes are active.
- [ ] Emergency-change process is confirmed.
- [ ] User notices have been issued.
- [ ] Support and service-desk teams have the communication pack.
- [ ] Leadership status template is prepared.
- [ ] Planned outage or reduced-service message is published where required.
- [ ] Go-live, delay, and rollback messages are pre-approved.

## 3. Technical Readiness

- [ ] Target configuration matches the approved design.
- [ ] Required licenses and capacity are available.
- [ ] Migration credentials have been tested.
- [ ] Required service accounts are active and least-privileged.
- [ ] Source backup is complete and restorable.
- [ ] Target backup or recovery point is recorded.
- [ ] Migration tooling passed a production-like rehearsal.
- [ ] Run duration and throughput assumptions are validated.
- [ ] Monitoring and log access are available.
- [ ] Temporary access has an expiry plan.

## 4. Data and Mapping Readiness

- [ ] Source baseline counts are captured.
- [ ] Project mappings are approved.
- [ ] Issue-type mappings are approved.
- [ ] Workflow, status, and resolution mappings are approved.
- [ ] User and group mappings are approved.
- [ ] Custom-field mappings are approved.
- [ ] Option-value mappings are approved.
- [ ] Hierarchy and link mappings are approved.
- [ ] Attachment handling is validated.
- [ ] Excluded records are documented.
- [ ] Reconciliation queries and thresholds are ready.

## 5. Integration Readiness

- [ ] Authentication details are validated.
- [ ] CI/CD integration is validated where applicable.
- [ ] Identity and provisioning integration is validated.
- [ ] Documentation integration is validated.
- [ ] Messaging and notification integration is validated.
- [ ] Reporting and analytics connections are validated.
- [ ] Webhooks and API consumers are inventoried.
- [ ] Rate limits and retry behavior are understood.
- [ ] Integration owners are available for cutover.

## 6. Migration Execution

- [ ] Final source inventory is captured after freeze.
- [ ] Unapproved changes after baseline are reconciled.
- [ ] Extraction begins under the approved migration ID.
- [ ] Extract counts and logs are retained.
- [ ] Transformations use approved mapping versions.
- [ ] Unmapped or rejected records enter the exception register.
- [ ] Load sequence follows dependency order.
- [ ] Batch identifiers and timestamps are recorded.
- [ ] Errors remain below stop thresholds.
- [ ] Failed batches are controlled for duplicate risk before rerun.

## 7. Technical Validation

- [ ] Target issue counts reconcile to approved scope.
- [ ] Parent-child relationships are preserved.
- [ ] Links and dependencies are preserved.
- [ ] Status and resolution values are correct.
- [ ] User ownership is correct.
- [ ] Comments and history meet the approved migration capability.
- [ ] Attachments are accessible.
- [ ] Permissions and security boundaries are correct.
- [ ] Boards, filters, and dashboards work where in scope.
- [ ] Automation rules pass controlled tests.
- [ ] Notifications are functioning as designed.
- [ ] Integrations process representative transactions.

## 8. Business Validation

- [ ] Business owners can create and update work.
- [ ] Representative workflows complete successfully.
- [ ] Backlogs and boards support normal planning.
- [ ] Search and filtering return expected results.
- [ ] Critical reports and KPIs are available.
- [ ] Approval and service processes function where applicable.
- [ ] Known exceptions have acceptable workarounds.
- [ ] Business acceptance is recorded.

## 9. Go/No-Go Decision

Record each decision explicitly.

| Criterion | Result | Evidence / owner |
|---|---|---|
| Critical defects | Pass / Fail | `<REFERENCE>` |
| High-severity defects | Pass / Conditional / Fail | `<REFERENCE>` |
| Data reconciliation | Pass / Fail | `<REFERENCE>` |
| Security validation | Pass / Fail | `<REFERENCE>` |
| Integration validation | Pass / Fail | `<REFERENCE>` |
| Business acceptance | Pass / Fail | `<REFERENCE>` |
| Rollback viability | Available / Expired | `<REFERENCE>` |

**Decision:** Go / Conditional Go / Hold / Rollback  
**Decision owner:** `<GO_NO_GO_OWNER>`  
**Timestamp:** `<DECISION_DATE_TIME>`  
**Conditions:** `<CONDITIONS_OR_NONE>`

## 10. Go-Live Actions

- [ ] Target environment is released to approved users.
- [ ] Required automation is enabled in the approved sequence.
- [ ] Integrations are activated and monitored.
- [ ] Source access is changed according to the coexistence plan.
- [ ] Go-live communication is issued.
- [ ] Service desk and support teams confirm readiness.
- [ ] Stabilization dashboard is active.
- [ ] First post-go-live health check is complete.

## 11. Stabilization

- [ ] Support volume is reviewed at the agreed cadence.
- [ ] Automation failures are reviewed.
- [ ] Integration errors are reviewed.
- [ ] Data-quality exceptions are tracked.
- [ ] Performance and platform health remain within thresholds.
- [ ] Critical reports and KPIs remain available.
- [ ] Daily leadership summary is issued where required.
- [ ] Defects have severity, owner, workaround, and target date.
- [ ] Temporary access is removed when no longer required.

## 12. Closure

- [ ] Stabilization exit criteria are met.
- [ ] Open defects transfer to the operational backlog.
- [ ] Final reconciliation is approved.
- [ ] Source-retention or decommission action is approved.
- [ ] Cutover evidence is archived.
- [ ] Lessons learned are completed.
- [ ] Ownership transfers to steady-state support.
- [ ] Executive closure is recorded.

## Mandatory Evidence Pack

Retain:

- readiness approval;
- source and target baselines;
- migration logs;
- exception register;
- reconciliation results;
- test evidence;
- go/no-go record;
- communications;
- rollback decision evidence;
- stabilization and closure report.

## Related Documents

- [Migration Runbook](../playbooks/migration-runbook.md)
- [Rollback Plan](rollback_plan.md)
- [Consolidation Playbook](../playbooks/consolidation-playbook.md)
