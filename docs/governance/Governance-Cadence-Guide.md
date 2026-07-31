# Enterprise Governance Cadence Guide

## Purpose

This guide defines the minimum governance rhythm required to operate a controlled, transparent, and decision-oriented Jira transformation program. It establishes recurring forums, expected inputs, decision rights, evidence requirements, and escalation paths so governance is consistent across executive, portfolio, program, platform, and delivery levels.

The cadence is designed to prevent duplicated meetings, unclear ownership, stale risks, unmanaged exceptions, and reporting that does not lead to action.

## Guiding principles

1. Every forum must have a clear decision purpose.
2. Every recurring meeting must produce a documented outcome.
3. Metrics should support decisions, not replace them.
4. Risks, actions, issues, and dependencies must have accountable owners and dates.
5. Escalation should occur at the lowest level capable of resolving the matter.
6. Exceptions must be time-bound, approved, and traceable.
7. Governance should remain lightweight enough to sustain.
8. Duplicate reporting should be removed wherever the same evidence already exists.

## Governance operating model

| Layer | Primary focus | Typical decision horizon |
|---|---|---|
| Executive | Strategic direction, investment, enterprise risk, value realization | Quarterly to annual |
| Portfolio | Prioritization, funding, cross-program dependencies, capacity | Monthly to quarterly |
| Program | Delivery health, milestones, risks, decisions, change control | Weekly to monthly |
| Platform / Operations | Reliability, service health, release readiness, operational risk | Daily to weekly |
| Team | Execution, blockers, commitments, quality, sprint outcomes | Daily to sprint cadence |

## Standard governance cadence

| Forum | Cadence | Chair | Core participants | Primary purpose | Required output |
|---|---|---|---|---|---|
| Executive Steering Committee | Quarterly | Executive Sponsor | CIO/CTO, Portfolio Sponsor, Transformation Lead, Finance, Risk | Confirm strategic direction, investment, value, and enterprise-level decisions | Approved decisions, funding actions, strategic risks, direction changes |
| Portfolio Governance Review | Monthly | Portfolio Owner | Program Leads, PMO, Finance, Architecture, Operations, Product | Prioritize initiatives, resolve cross-program constraints, assess portfolio health | Portfolio decisions, priority changes, capacity actions, escalations |
| Program Governance Review | Weekly | Program Manager | Workstream Leads, Product, Engineering, Operations, Architecture, PMO | Review milestones, RAID, dependencies, decisions, and forecast | Updated RAID, decision log, action log, milestone forecast |
| Architecture and Design Authority | Biweekly or on demand | Enterprise Architect | Solution Architects, Platform, Security, Data, Integration | Review material architecture choices and exceptions | Architecture decision record, approved exception, follow-up actions |
| Change Advisory Board | Weekly or release-driven | Change Manager | Operations, Engineering, QA, Security, Business Approver | Assess implementation risk and approve production changes | Approved, rejected, deferred, or conditionally approved change record |
| Release Readiness Review | Per release | Release Manager | Product, Engineering, QA, Operations, Support, Security | Confirm release entry and exit criteria | Go / no-go decision, conditions, rollback ownership, residual risks |
| Operational Service Review | Weekly | Operations Lead | Service Owners, Support, SRE, Engineering, Problem Management | Review service health, SLA, incidents, backlog, and problem trends | Service actions, risk treatment, aged-ticket decisions, trend commentary |
| KPI and Data Quality Review | Monthly | Analytics Owner | KPI Owners, Data Owners, Dashboard Owners, PMO | Validate KPI definitions, data quality, reconciliation, and reporting exceptions | KPI approvals, defect actions, accepted limitations, metric changes |
| Sprint Governance Review | Each sprint | Delivery Lead / Scrum Master | Product Owner, Engineering Lead, Program Manager, Team Representatives | Review commitment, scope change, rollover, blockers, quality, and improvement actions | Sprint decision record, corrective actions, accepted carryover rationale |
| Daily Delivery Coordination | Daily | Team Lead | Delivery team and required dependencies | Surface blockers, coordinate work, and confirm immediate priorities | Blocker ownership and same-day actions |
| Risk and Dependency Deep Dive | Biweekly or risk-triggered | Program Manager | Relevant owners and specialists | Resolve high-impact risks and cross-team dependencies | Treatment plan, escalation decision, revised target dates |
| Benefits Realization Review | Quarterly | Business Owner | Finance, Program Lead, KPI Owners, Portfolio Owner | Confirm whether expected value is being realized | Benefit status, corrective actions, reforecast, closure decisions |

## Forum design standard

Every governance forum should define the following before it becomes recurring:

| Field | Requirement |
|---|---|
| Forum name | Unique and outcome-oriented |
| Purpose | The decisions or controls the forum exists to provide |
| Chair | Accountable for agenda quality and meeting effectiveness |
| Secretariat | Maintains evidence, minutes, actions, and decisions |
| Required participants | Roles needed to make decisions |
| Optional participants | Specialists invited when relevant |
| Cadence | Frequency and trigger |
| Duration | Time-box appropriate to the decision scope |
| Inputs | Reports, dashboards, registers, and readiness evidence |
| Outputs | Decisions, actions, approvals, escalations, and updates |
| Quorum | Minimum representation required to make decisions |
| Escalation path | Next governance level when unresolved |
| Record location | Approved system of record |

## Standard agenda pattern

A recurring governance meeting should use a consistent decision-first agenda:

1. Confirm quorum and previous actions.
2. Review decisions required today.
3. Review exceptions and material changes.
4. Review KPI and delivery signals requiring action.
5. Review high and critical RAID items.
6. Review dependencies and milestone impact.
7. Confirm approvals, owners, and due dates.
8. Confirm escalations and communication actions.
9. Close with decision and action recap.

Status reporting without a decision, action, exception, or escalation should normally be handled asynchronously.

## Required governance artefacts

| Artefact | Minimum owner | Review cadence | Purpose |
|---|---|---|---|
| RAID Register | Program Manager | Weekly | Control risks, assumptions, issues, and dependencies |
| Decision Log | Forum Chair or Secretariat | Every forum | Preserve decision context and authority |
| Action Log | Secretariat | Every forum | Track commitments through closure |
| Milestone Plan | Program Manager | Weekly | Maintain delivery forecast and variance |
| KPI Catalogue | Analytics Owner | Monthly | Govern metric definitions and ownership |
| Dashboard Catalogue | Reporting Owner | Monthly | Govern report purpose, audience, and lifecycle |
| Change Register | Change Manager | Weekly | Track production change decisions |
| Exception Register | Governance Owner | Monthly | Control temporary deviations from standards |
| Benefits Register | Business Owner | Quarterly | Track measurable value realization |
| Architecture Decision Records | Architecture Owner | On decision | Preserve material technical decisions |
| Release Readiness Checklist | Release Manager | Per release | Evidence release readiness and residual risk |

## Decision rights

| Decision type | Recommended authority |
|---|---|
| Strategic direction and material funding | Executive Steering Committee |
| Portfolio priority and cross-program capacity | Portfolio Governance Review |
| Program scope within approved tolerance | Program Governance Review |
| Architecture standard or exception | Architecture and Design Authority |
| Production change approval | Change Advisory Board |
| Release go / no-go | Release Readiness Review authority |
| KPI definition and threshold approval | KPI and Data Quality Review |
| Sprint scope trade-off | Product Owner with Delivery Lead |
| Operational priority and service action | Service Owner / Operations Lead |

Decision authority must be documented. A forum should not escalate a decision merely because it is difficult; escalation is required when authority, risk tolerance, funding, policy, or cross-organizational impact exceeds the forum's mandate.

## RAG and escalation standard

| Status | Meaning | Governance expectation |
|---|---|---|
| Green | On plan with no material intervention required | Continue monitoring |
| Amber | At risk but recoverable within delegated authority | Named recovery plan, owner, and date required |
| Red | Forecast failure, tolerance breach, or material impact | Escalate with decision request and options |
| Grey | Insufficient or unvalidated evidence | Resolve data gap; do not report as Green |

### Mandatory escalation triggers

Escalation is required when one or more of the following occurs:

- A critical milestone is forecast to miss its approved tolerance.
- A risk exceeds the accepted impact or likelihood threshold.
- A decision remains unresolved beyond its required-by date.
- A dependency owner cannot commit to the required date.
- A production or security risk is outside delegated authority.
- KPI data is materially unreliable for executive decision-making.
- Approved scope, funding, capacity, or architecture must change.
- An exception is nearing expiry without remediation.
- The same material issue remains open across two governance cycles without credible progress.

## Meeting evidence and records

Every formal governance forum must record:

- Date and forum name
- Chair and participants
- Quorum status
- Decisions made
- Decisions deferred and reason
- Actions, owners, and due dates
- Escalations raised
- Exceptions approved or rejected
- Material changes to scope, forecast, cost, risk, or value
- Links to supporting evidence

Meeting notes should be concise and decision-centered. Transcripts are not a substitute for an approved decision record.

## Action management standard

Every action must include:

| Field | Requirement |
|---|---|
| Action ID | Unique identifier |
| Description | Specific outcome, not a vague activity |
| Owner | One accountable person or role |
| Due date | Agreed completion date |
| Priority | Critical / High / Medium / Low |
| Source forum | Governance body that created the action |
| Status | Open / In Progress / Blocked / Complete / Cancelled |
| Evidence | Link or note proving closure |
| Escalation status | Required when overdue or blocked |

An action is not complete until evidence exists and the originating authority accepts closure where required.

## Exception governance

All exceptions to approved standards, controls, workflows, data rules, or architecture must include:

- Exception ID
- Standard or control being bypassed
- Business justification
- Risk assessment
- Compensating controls
- Accountable owner
- Approval authority
- Start date
- Expiry date
- Remediation plan
- Review cadence
- Closure evidence

Permanent exceptions are not permitted. Long-lived deviations should be resolved through a formal standard change or a renewed, time-bound approval.

## Governance health measures

The following measures can be used to evaluate whether governance is working:

| Measure | Desired outcome |
|---|---|
| Decision aging | Decisions made before required-by date |
| Action closure rate | Actions closed on time with evidence |
| Overdue critical actions | Zero or decreasing trend |
| RAID aging | High-impact items show active treatment and movement |
| Exception aging | Exceptions close or renew before expiry |
| Meeting effectiveness | High proportion of agenda items result in decisions or actions |
| Duplicate forum count | Decreasing trend |
| Attendance / quorum rate | Decision-making roles consistently represented |
| Data quality defects | Material defects reduce over time |
| Escalation quality | Escalations include options, impact, and recommendation |

## Anti-patterns to avoid

- Meetings that only repeat dashboard content
- Multiple forums reviewing the same issue without distinct authority
- Risks without owners or treatment dates
- Actions assigned to groups instead of accountable owners
- Amber or Red status without recovery actions
- Green status based on missing evidence
- Escalations without a clear decision request
- Decisions recorded only in email or chat
- Exceptions without expiry dates
- Permanent recurring meetings with no recent decisions
- Reporting large volumes of metrics without material commentary

## Implementation checklist

- [ ] Governance layers and authorities are approved.
- [ ] Every recurring forum has a documented charter.
- [ ] Duplicate forums have been consolidated or removed.
- [ ] Required participants and quorum are defined.
- [ ] Standard agenda and evidence requirements are in use.
- [ ] RAID, decision, action, and exception registers have accountable owners.
- [ ] Escalation thresholds are agreed.
- [ ] Meeting outputs are stored in an approved system of record.
- [ ] KPI and dashboard reviews are included in the operating rhythm.
- [ ] Governance health measures are reviewed periodically.
- [ ] Cadence effectiveness is reassessed at least quarterly.

## Acceptance criteria

This guide is considered adopted when:

1. Governance forums are mapped to the operating layers in this document.
2. Each forum has an approved purpose, chair, participants, cadence, inputs, outputs, and quorum.
3. Decision rights and escalation paths are documented.
4. Required registers and evidence locations are established.
5. Actions and decisions are traceable from creation through closure.
6. Exception approvals are time-bound and reviewable.
7. At least one complete governance cycle has been run using the standard.
8. Participants confirm that duplicate reporting and unclear decision ownership have been reduced.

## Review and maintenance

| Field | Value |
|---|---|
| Document owner | Enterprise Governance Office / PMO |
| Review frequency | Quarterly |
| Approval authority | Transformation Governance Board |
| Version | 1.0 |
| Classification | Public |

Changes to this guide should be reviewed when governance layers, decision authorities, organizational structures, reporting standards, or regulatory obligations materially change.
