# Enterprise RAID Register Template

## Purpose

Use this template to capture, assess, govern, escalate and close Risks, Assumptions, Issues and Dependencies consistently across enterprise programs, portfolios, releases and operational initiatives.

The register is intended to provide one auditable source of truth for:

- What may affect delivery
- What has already affected delivery
- What is being assumed
- What depends on another team, vendor, system or decision
- Who owns the response
- What action is required and by when
- What requires escalation or leadership decision

---

## RAID Type Definitions

| Type | Definition | Primary Question | Typical Response |
|---|---|---|---|
| Risk | A future uncertain event that may affect objectives | What might happen? | Avoid, reduce, transfer, accept or prepare contingency |
| Assumption | A condition believed to be true but not yet validated | What are we relying on? | Validate by a defined date and convert if disproved |
| Issue | A current event or condition already affecting objectives | What has happened? | Contain, resolve, recover and communicate impact |
| Dependency | Work, decision, capability or delivery required from another party | What must happen elsewhere first? | Confirm owner, required-by date, commitment and escalation path |

Do not record a known active problem as a Risk. Once a risk materializes, create or convert it into an Issue and preserve the original risk reference.

---

## Master RAID Register

| Field | Required | Guidance |
|---|---:|---|
| ID | Yes | Unique identifier such as R-001, A-001, I-001 or D-001 |
| Type | Yes | Risk, Assumption, Issue or Dependency |
| Title | Yes | Short, specific and outcome-oriented description |
| Description | Yes | Explain the condition, cause and relevant context |
| Cause | Risk/Issue | Root cause or initiating condition |
| Event / Condition | Yes | The uncertain event, active problem, assumption or dependency |
| Impact | Yes | Consequence to scope, schedule, quality, cost, security, compliance, operations or customer |
| Program / Product / Pillar | Yes | Portfolio or organizational grouping |
| Related Epic / Release / Sprint | Where applicable | Traceability to delivery scope |
| Owner | Yes | Accountable person responsible for response and updates |
| Action Owner | Where different | Person performing the mitigation or resolution action |
| External Owner | Dependency | Accountable team, vendor or stakeholder outside the owning team |
| Date Raised | Yes | Date first entered in the register |
| Required-By / Target Date | Yes | Date by which action, validation, decision or delivery is required |
| Probability | Risk only | 1–5 scale defined below |
| Impact Score | Risk only | 1–5 scale defined below |
| Inherent Score | Risk only | Probability × Impact before response |
| Response Strategy | Risk only | Avoid, Reduce, Transfer, Accept or Exploit for opportunities |
| Mitigation / Resolution Plan | Yes | Actions intended to reduce or remove exposure |
| Contingency / Recovery Plan | Risk/Issue | Action taken if risk materializes or recovery is required |
| Trigger / Early Warning | Risk | Observable condition showing the risk is becoming more likely |
| Validation Method | Assumption | Evidence required to validate or reject the assumption |
| Dependency Commitment | Dependency | Confirmed deliverable, owner and date from the providing party |
| Status | Yes | Proposed, Open, Monitoring, Escalated, Resolved, Closed or Invalid |
| Residual Probability | Risk | Probability after mitigation |
| Residual Impact | Risk | Impact after mitigation |
| Residual Score | Risk | Residual Probability × Residual Impact |
| RAG | Yes | Green, Amber or Red based on thresholds below |
| Escalation Level | Where applicable | Team, Program, Portfolio or Executive |
| Decision Required | Where applicable | Specific decision, decision owner and decision-by date |
| Last Review Date | Yes | Date of most recent formal review |
| Next Review Date | Yes | Planned next review date |
| Closure Evidence | On closure | Link, approval, validation or outcome proving closure |
| Closed Date | On closure | Date formally accepted as closed |

### Register Template

| ID | Type | Title | Program / Pillar | Owner | Date Raised | Target Date | Probability | Impact | Inherent Score | RAG | Status | Mitigation / Resolution | Contingency / Recovery | Residual Score | Decision Required | Last Review | Next Review |
|---|---|---|---|---|---|---|---:|---:|---:|---|---|---|---|---:|---|---|---|
| R-001 | Risk | | | | | | | | | | Open | | | | | | |
| A-001 | Assumption | | | | | | N/A | N/A | N/A | | Open | Validation action | If disproved | N/A | | | |
| I-001 | Issue | | | | | | N/A | | | | Open | Resolution action | Recovery plan | | | | |
| D-001 | Dependency | | | | | | N/A | | | | Open | Dependency action | Alternative path | | | | |

---

## Probability Scale

| Score | Rating | Guidance |
|---:|---|---|
| 1 | Rare | Unlikely to occur; exceptional conditions required |
| 2 | Unlikely | Could occur, but evidence currently suggests low likelihood |
| 3 | Possible | Credible chance of occurring during the planning horizon |
| 4 | Likely | More likely than not or supported by strong warning indicators |
| 5 | Almost Certain | Expected to occur without immediate intervention |

## Impact Scale

Use the highest applicable impact across the dimensions below.

| Score | Rating | Schedule / Delivery | Cost / Effort | Quality / Operations | Customer / Compliance |
|---:|---|---|---|---|---|
| 1 | Insignificant | Negligible effect; absorbed within team | Minimal | No material service effect | No customer or compliance impact |
| 2 | Minor | Small delay with no milestone impact | Limited rework | Minor degradation | Limited internal impact |
| 3 | Moderate | Sprint, milestone or dependency affected | Noticeable unplanned effort | Service or quality target at risk | Customer concern or minor control gap |
| 4 | Major | Release or committed outcome at risk | Significant cost or resource shift | Major incident, material quality failure | Material customer, security or compliance impact |
| 5 | Severe | Strategic commitment or business objective threatened | Major financial exposure | Critical outage or systemic failure | Regulatory breach, major customer harm or executive impact |

---

## Risk Scoring

### Inherent Risk

`Inherent Risk Score = Probability × Impact`

This represents exposure before planned mitigations are considered.

### Residual Risk

`Residual Risk Score = Residual Probability × Residual Impact`

Residual scoring must be updated only after mitigation evidence exists. Do not reduce the score merely because a mitigation action has been planned.

### RAG Thresholds

| Score | RAG | Governance Expectation |
|---:|---|---|
| 1–4 | Green | Manage within the team and review through normal cadence |
| 5–9 | Amber | Named mitigation owner, due date and program-level visibility required |
| 10–15 | High Amber | Formal recovery or mitigation plan, weekly review and leadership visibility |
| 16–25 | Red | Immediate escalation with impact, options, recommendation and decision owner |

A risk may be manually raised to a higher RAG when:

- It threatens a regulatory, security or contractual obligation
- The required-by date is imminent
- The response owner has not committed
- The same risk is recurring across teams
- Leadership decision is overdue

Manual downgrading below the calculated level requires documented approval.

---

## Type-Specific Governance

### Risks

Every material risk must include:

- Cause, uncertain event and impact statement
- Inherent probability and impact
- Response strategy
- Mitigation owner and target date
- Trigger or early-warning indicator
- Contingency plan
- Residual score supported by evidence

Recommended risk statement format:

> Because of **cause**, there is a possibility that **event** may occur, resulting in **impact**.

### Assumptions

Every assumption must include:

- The exact condition believed to be true
- Why the program is relying on it
- Validation owner
- Validation method
- Validation deadline
- Consequence if disproved

An assumption becomes:

- A Risk when it remains uncertain and could cause future impact
- An Issue when it is proven false and is already affecting delivery

### Issues

Every issue must include:

- Actual impact already experienced
- Containment action
- Resolution plan
- Recovery plan where schedule or service has been affected
- Root cause or RCA reference when required
- Resolution owner and target date

Issue severity should reflect current business impact, not the original forecast.

### Dependencies

Every dependency must include:

- Providing team or external owner
- Receiving team
- Required deliverable or decision
- Required-by date
- Confirmed commitment date
- Current confidence or RAG
- Fallback or alternative path
- Escalation route

A dependency is Red when a committed outcome is threatened and there is no credible recovery path.

---

## Aging and Overdue Rules

| Condition | Required Action |
|---|---|
| No update by Next Review Date | Mark stale and raise to the governance owner |
| Target date passed and item still open | Mark overdue; Amber minimum |
| Red item not reviewed within one business day | Escalate to Program or Portfolio leadership |
| Dependency unconfirmed within two business days of request | Raise to Amber and contact the providing owner |
| Assumption not validated by deadline | Convert to Risk or Issue based on impact |
| Mitigation overdue | Recalculate exposure and escalate if outcome is threatened |
| Same item carried for three review cycles without movement | Require recovery decision, re-plan or formal acceptance |

Age should be calculated from Date Raised. Overdue days should be calculated from Target Date or Required-By Date.

---

## Escalation Standard

A Red item must be escalated with the following information:

1. What happened or may happen
2. Business and delivery impact
3. Current score and reason for Red status
4. Actions already taken
5. Available options
6. Recommended option
7. Decision owner
8. Decision required by date
9. Consequence of no decision

Do not escalate a Red item with only a problem statement.

---

## Governance Cadence

| Governance Layer | Frequency | Reports Reviewed | KPIs / Indicators | Expected Outcome |
|---|---|---|---|---|
| Team / Workstream | Daily or twice weekly | Open blockers, issues and near-term dependencies | New items, overdue actions, blocker age | Immediate ownership and action |
| Program | Weekly | RAID register, heatmap, aging and dependency view | Open by RAG, Red count, overdue count, mitigation coverage, residual exposure | Resolve cross-team constraints and escalate decisions |
| Portfolio / PMO | Fortnightly or monthly | Program risk trend, top dependencies and decision log | Exposure trend, recurring risks, overdue Red items, decision aging | Prioritize intervention and allocate resources |
| Executive | Monthly or exception-based | Top material risks, issues and decisions | Strategic exposure, milestone impact, financial or customer consequence | Approve options, accept exposure or mandate recovery |

Every governance review should result in one or more of the following:

- Action confirmed or changed
- Owner confirmed
- Due date confirmed
- Score updated with evidence
- Escalation initiated
- Decision recorded
- Item closed with validation

---

## Minimum Dashboard and Reporting Views

A production implementation should make the following views available where data supports them:

- Open RAID by type and RAG
- Red and High Amber items
- Risk heatmap: probability × impact
- Inherent versus residual exposure
- Exposure trend over time
- Overdue RAID actions
- Item aging by type and severity
- Mitigation coverage
- Dependencies by providing and receiving team
- Dependency required-by conflicts
- Decisions required and decision aging
- Assumptions nearing validation deadline
- Issues by business-impact category
- Closure rate and average time to close
- Recurring or duplicated risks across programs

Each chart should allow drill-down to the underlying register population.

---

## Worked Examples

### Risk Example

| Field | Example |
|---|---|
| ID | R-014 |
| Title | Shared messaging readiness may delay application onboarding |
| Statement | Because the shared messaging design is not yet approved, there is a possibility that application onboarding may miss the release readiness date, resulting in release delay and rework. |
| Probability | 4 – Likely |
| Impact | 4 – Major |
| Inherent Score | 16 – Red |
| Response Strategy | Reduce |
| Mitigation | Architecture decision workshop; confirm isolation model; publish approved pattern |
| Owner | Platform Architecture Lead |
| Target Date | 15-Aug-2026 |
| Trigger | No approved design five business days before onboarding starts |
| Contingency | Use temporary isolated messaging configuration for the first release |
| Residual Probability | 2 |
| Residual Impact | 3 |
| Residual Score | 6 – Amber, once approval and test evidence exist |

### Assumption Example

| Field | Example |
|---|---|
| ID | A-006 |
| Assumption | The vendor will provide production credentials before integration testing |
| Validation Owner | Integration Lead |
| Validation Method | Written confirmation and successful credential test |
| Validation Date | 08-Aug-2026 |
| If Disproved | Convert to dependency risk and activate test-environment fallback |

### Issue Example

| Field | Example |
|---|---|
| ID | I-021 |
| Issue | Deployment pipeline cannot publish to the preview environment |
| Current Impact | Product acceptance is blocked for four stories |
| Containment | Manual deployment approved for current sprint only |
| Resolution | Correct service-account permission and rerun validation |
| Owner | DevOps Lead |
| Target Date | 02-Aug-2026 |
| Recovery | Prioritize acceptance of blocked stories after pipeline restoration |

### Dependency Example

| Field | Example |
|---|---|
| ID | D-017 |
| Dependency | QA environment capacity increase required from CloudOps |
| Providing Team | CloudOps |
| Receiving Team | Product QA |
| Required-By | 10-Aug-2026 |
| Commitment | CloudOps confirmed completion by 08-Aug-2026 |
| Current RAG | Green |
| Fallback | Reduce parallel test execution and extend environment hours, without extending the sprint |

---

## Jira Implementation Guidance

Recommended issue types or record types:

- Risk
- Assumption
- Issue
- Dependency
- Decision
- Action

Recommended Jira fields:

- RAID Type
- Probability
- Impact
- Inherent Score
- Residual Probability
- Residual Impact
- Residual Score
- RAG
- Response Strategy
- Mitigation
- Contingency
- Trigger
- Target Date
- Required-By Date
- External Owner / Providing Team
- Decision Required
- Decision Owner
- Next Review Date
- Closure Evidence

Recommended automation controls:

- Calculate inherent and residual score
- Set RAG from score while preserving approved manual overrides
- Notify the owner before Target Date and Next Review Date
- Escalate overdue Red items
- Require mitigation and owner before moving to Open
- Require closure evidence before Closed
- Convert a materialized Risk into a linked Issue
- Alert when an Assumption reaches its validation deadline
- Alert when a Dependency is unconfirmed or overdue
- Preserve field history for auditability

---

## Data Quality Rules

A RAID item is incomplete when any mandatory field is missing.

Minimum quality controls:

- 100% owner coverage
- 100% target-date coverage for open material items
- 100% mitigation or resolution coverage
- 100% next-review-date coverage
- 100% closure-evidence coverage for closed items
- No overdue Red item without escalation evidence
- No reduced residual score without completed mitigation evidence
- No dependency without a providing owner and required-by date
- No assumption without a validation method and deadline

---

## Closure Criteria

An item may be closed only when:

### Risk

- The threat no longer exists, has passed, or has been formally accepted
- Residual exposure is recorded
- Closure is approved by the accountable owner

### Assumption

- The assumption has been validated with evidence, or converted to a Risk or Issue

### Issue

- The immediate impact is resolved
- Recovery is complete or formally accepted
- RCA and prevention actions are recorded when required

### Dependency

- The required deliverable or decision has been received and validated
- The receiving owner confirms the dependency is satisfied

Every closure requires evidence and a closed date. Closing an item because it is old is not permitted.

---

## Acceptance Checklist

### Register Quality

- [ ] Correct RAID type selected
- [ ] Clear title and description provided
- [ ] Accountable owner assigned
- [ ] Target or required-by date populated
- [ ] Impact stated in business or delivery terms
- [ ] Mitigation, resolution or validation action documented
- [ ] Next review date populated

### Risk Quality

- [ ] Probability and impact scored using the approved scale
- [ ] Inherent score calculated
- [ ] Response strategy selected
- [ ] Trigger and contingency documented
- [ ] Residual score supported by mitigation evidence

### Governance Quality

- [ ] RAG and escalation level validated
- [ ] Red items include options, recommendation and decision owner
- [ ] Overdue items have a recovery action
- [ ] Review history is current
- [ ] Dashboard population reconciles with the register

### Closure Quality

- [ ] Outcome independently validated
- [ ] Closure evidence attached or linked
- [ ] Residual exposure accepted where applicable
- [ ] Closed date recorded
- [ ] Related actions or follow-up work remain traceable

---

## Success Measures

The RAID process is effective when:

- Material risks are identified before they become issues
- Red items are escalated early enough to change the outcome
- Mitigations close on time and demonstrably reduce exposure
- Cross-team dependencies have confirmed owners and dates
- Decisions are made before they block committed delivery
- Repeated risks decline across successive sprints or releases
- Register data reconciles with dashboard reporting
- Governance meetings result in documented actions and decisions
