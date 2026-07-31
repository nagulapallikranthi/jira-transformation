# Sprint Governance Playbook

## 1. Purpose, scope and intended audience

This playbook defines the end-to-end operating model for planning, executing, monitoring, reviewing and improving sprints across product, engineering, platform, cloud operations, DevOps, SRE, security and shared-service teams.

It is designed for Scrum Masters, Program Managers, Product Managers, Engineering Managers, Technical Leads, Developers, QA, SRE, Operations leaders, PMO and executives.

The playbook is intentionally performance-oriented. Every chapter includes:

1. the reports and KPIs required to evaluate performance;
2. how to read and interpret those measures;
3. the Red-Amber-Green (RAG) logic;
4. how the results should be discussed with the team; and
5. how success is measured.

### Governing principles

- The sprint ends on time even when work is incomplete.
- Spillover is visible, measured and carried into the next sprint with its original sprint identified.
- Quality is built into delivery and assessed while the work is being performed.
- A ticket is not complete because its status changed; it is complete only when the agreed Definition of Done is met.
- Metrics are used to improve the system, not to rank or blame individuals.
- Planned work, unplanned work, defects, dependencies and blocked time must remain distinguishable.
- Executive reporting must preserve traceability to team-level data.

### Performance management for this chapter

**Reports and KPIs:** Playbook adoption, percentage of teams using the standard workflow, percentage of sprint reviews using the agreed scorecard, governance exceptions and unresolved process deviations.

**How to interpret:** Low adoption normally indicates unclear ownership, incomplete enablement or a process that is too difficult to follow. Repeated exceptions indicate that either the process is not fit for purpose or teams are bypassing controls.

**RAG:** Green: at least 95% adoption and no critical exception. Amber: 80-94% adoption or one unresolved major exception. Red: below 80% adoption or any critical governance failure.

**Team discussion:** Ask what prevents teams from following the model, which controls add value, which steps create friction and what support is required. Do not treat adoption as a compliance-only conversation.

**Success measure:** Teams can independently run a sprint using this playbook, use the same definitions and explain their sprint health using a common scorecard.

---

## 2. Sprint lifecycle and control points

A sprint progresses through six controlled stages:

1. **Backlog readiness** – candidate work is refined and assessed.
2. **Sprint planning** – capacity, priority, dependencies and commitment are agreed.
3. **Sprint execution** – work progresses with daily inspection and active impediment management.
4. **Validation and acceptance** – evidence confirms the Definition of Done.
5. **Sprint review and closure** – delivered outcomes and spillovers are recorded.
6. **Retrospective and improvement** – systemic improvements are agreed and tracked.

### Mandatory lifecycle controls

| Stage | Entry criteria | Exit criteria | Primary owner |
|---|---|---|---|
| Backlog readiness | Prioritised candidate backlog exists | Ready items meet the Definition of Ready | Product Owner / Program Manager |
| Sprint planning | Capacity and ready backlog are available | Sprint goal and committed scope are approved | Product Owner and Engineering Manager |
| Execution | Sprint started and ownership assigned | Work reaches acceptance or is classified as spillover | Delivery team |
| Validation | Acceptance evidence is available | Definition of Done confirmed | QA / Product / Service Owner |
| Closure | Sprint end date reached | Results, spillover and metrics baselined | Scrum Master / Program Manager |
| Improvement | Review data and feedback available | Actions have owners and due dates | Whole team |

### Performance management for this chapter

**Reports and KPIs:** Lifecycle stage ageing, work-item status distribution, percentage of items entering the sprint without meeting the Definition of Ready, acceptance latency, closure hygiene and retrospective action closure rate.

**How to read:** A concentration of work in one stage indicates flow imbalance. Late acceptance suggests testing or stakeholder availability constraints. High closure hygiene failures reduce reporting reliability.

**RAG:** Green: at least 90% of items progress through expected stages without control failure. Amber: 75-89% or recurring stage ageing. Red: below 75%, missing sprint closure, or material work bypassing validation.

**Team discussion:** Review where work is accumulating, why the control point failed and whether the cause is capacity, dependency, unclear acceptance criteria or workflow misuse.

**Success measure:** Work moves predictably through the lifecycle, control failures decline sprint over sprint and closure data is complete within one business day of sprint end.

---

## 3. Backlog readiness and Definition of Ready

Only work that can reasonably be understood, estimated and started should be committed.

### Definition of Ready

A work item is Ready when:

- the business or operational outcome is clear;
- acceptance criteria are testable;
- priority is agreed;
- owner and functional group are identified;
- dependencies are documented;
- required architecture, security, infrastructure or compliance inputs are known;
- estimate is available where estimation is applicable;
- target environment and release expectation are known;
- no unresolved question prevents the team from starting;
- parent, epic, sprint and required Jira fields are populated.

Items that do not meet these conditions may remain in refinement but must not be counted as committed sprint scope.

### Required reports

- Backlog readiness funnel: candidate, refinement, ready and committed.
- Definition of Ready failure reasons.
- Ready backlog coverage by team and priority.
- Age of ready work.
- Dependency readiness report.

### Core KPIs

| KPI | Definition |
|---|---|
| Ready backlog coverage | Ready story points or items divided by average sprint demand |
| DoR compliance | Committed items meeting all mandatory readiness checks divided by total committed items |
| Refinement conversion | Items becoming Ready divided by items reviewed in refinement |
| Requirement churn | Committed items with material acceptance-criteria changes after sprint start divided by committed items |
| Ready-item ageing | Median days an item remains Ready before selection |

### How to read and interpret

Ready backlog coverage below one sprint creates planning risk. Excessively high coverage may signal stale prioritisation. Low DoR compliance predicts rollover, blocked work and rework. Requirement churn indicates that items entered the sprint before sufficient alignment.

### RAG

- **Green:** DoR compliance at least 95%; ready backlog coverage between 1.5 and 2.5 sprints; requirement churn below 5%.
- **Amber:** DoR compliance 85-94%; coverage between 1.0 and 1.49 or above 2.5; churn 5-10%.
- **Red:** DoR compliance below 85%; coverage below one sprint; churn above 10%.

### How to discuss with the team

Discuss the most common readiness failures, not individual authors. Ask whether acceptance criteria were genuinely testable, whether dependencies were understood and whether refinement capacity was sufficient. Agree corrective actions before the next planning session.

### Success measure

At least 95% of committed work meets the Definition of Ready, requirement churn declines and no sprint is delayed because the ready backlog is insufficient.

---

## 4. Sprint planning, capacity and commitment

Sprint planning converts business priority and available capacity into a realistic sprint goal and committed scope.

### Planning sequence

1. Confirm sprint goal and priority outcomes.
2. Calculate gross team capacity.
3. Deduct leave, holidays, support allocation, ceremonies and known operational demand.
4. Review prior velocity, spillover and quality trends.
5. Select Ready work in priority order.
6. Validate dependencies, skill coverage and test capacity.
7. Separate committed scope, stretch scope and forecast-only work.
8. Record the baseline at sprint start.

### Capacity calculation

Net capacity should reflect actual available delivery time. Teams must avoid increasing commitment merely to match a historic velocity when current capacity is lower.

### Required reports

- Capacity versus committed demand.
- Skill or role capacity coverage.
- Historical velocity and accepted throughput.
- Spillover brought into the sprint.
- Planned work versus unplanned reserve.
- Commitment composition by work type, priority, product or pillar.

### Core KPIs

| KPI | Definition |
|---|---|
| Capacity utilisation plan | Committed estimated effort divided by net available capacity |
| Commitment load | Committed story points divided by median accepted velocity of recent comparable sprints |
| Spillover load | Effort carried from prior sprints divided by total sprint commitment |
| Unplanned reserve | Capacity reserved for incidents, service requests or urgent work divided by net capacity |
| Commitment concentration | Percentage of commitment dependent on one person, component or external dependency |

### How to read and interpret

Planning above sustainable capacity increases rollover and quality risk. A high spillover load reduces room for new priorities. Low reserve is risky for operations-heavy teams. Commitment concentration reveals single points of failure.

### RAG

- **Green:** planned utilisation 80-95%; spillover load below 10%; commitment load at or below 110% of recent accepted velocity; critical skill coverage confirmed.
- **Amber:** utilisation 96-105% or 65-79%; spillover 10-20%; commitment load 111-120%; one material skill gap.
- **Red:** utilisation above 105%; spillover above 20%; commitment load above 120%; missing critical skill or unresolved blocking dependency.

### How to discuss with the team

Ask whether the team can explain the commitment in relation to actual capacity, not aspiration. Review the effect of support work, leave, dependency risk and prior spillover. The final commitment must be owned jointly by Product and Engineering.

### Success measure

The sprint starts with a clear goal, committed scope within sustainable capacity, visible reserve and no known unowned dependency.

---

## 5. Sprint execution and daily flow

Execution governance protects the sprint goal while helping the team adapt to real conditions.

### Daily operating expectations

- Update status, remaining work and blockers before the daily review.
- Record blocked reasons and dependency ownership.
- Escalate blockers based on impact and ageing.
- Keep work-in-progress within the team's agreed limit.
- Separate active work from waiting states.
- Confirm that testing and acceptance progress throughout the sprint.
- Avoid opening new work when ageing in-progress work can be completed.

### Required reports

- Sprint burndown and burnup.
- Work-item status and ageing.
- Cumulative flow diagram.
- Blocked work and blocked-time ageing.
- Work-in-progress by person, team and component.
- Daily scope movement.
- Acceptance queue.

### Core KPIs

| KPI | Definition |
|---|---|
| Flow efficiency | Active working time divided by total elapsed cycle time |
| WIP adherence | Days within agreed WIP limit divided by sprint days |
| Blocked-item rate | Items blocked during the sprint divided by committed items |
| Blocked-time ratio | Total blocked hours divided by total elapsed work hours |
| In-progress ageing | Median and 85th-percentile days in active statuses |
| Daily completion pace | Accepted effort completed against expected time-phased pace |

### How to read and interpret

Burndown alone does not reveal why delivery is at risk. Use it with cumulative flow, blocked ageing and acceptance queues. A flat burndown with rising WIP indicates work is being started but not completed. A growing acceptance queue indicates downstream validation constraints.

### RAG

- **Green:** WIP within limit; no critical blocker older than one business day; progress remains within 10% of expected pace; blocked-time ratio below 10%.
- **Amber:** WIP exceeds the limit for up to two days; progress 10-20% behind; blocker ageing of two business days; blocked-time ratio 10-20%.
- **Red:** persistent WIP breach; progress more than 20% behind; critical blocker older than two business days; blocked-time ratio above 20%.

### How to discuss with the team

Focus on finishing, not status narration. Ask: What is closest to acceptance? What is blocked? What decision is needed today? Which new start should be deferred? Escalate systemic constraints rather than expecting the delivery team to absorb them silently.

### Success measure

Work flows steadily, WIP remains controlled, blocking time declines and the acceptance queue does not build disproportionately near sprint end.

---

## 6. Scope change and unplanned work governance

Sprint scope may change, but every change must be visible and its impact understood.

### Change categories

- Priority trade-off: one item replaces another of comparable effort.
- Urgent production or security work.
- Newly discovered mandatory work required to complete committed scope.
- De-scope due to changed business priority.
- Scope growth caused by incomplete discovery.

Every addition or removal must include a reason, approver, date, effort impact and effect on the sprint goal.

### Required reports

- Sprint baseline versus current scope.
- Added and removed work by reason.
- Unplanned work by source and priority.
- Scope volatility trend.
- Sprint goal impact assessment.

### Core KPIs

| KPI | Definition |
|---|---|
| Scope change rate | Added plus removed effort divided by baseline committed effort |
| Unplanned work ratio | Unplanned accepted effort divided by total accepted effort |
| Net scope growth | Added effort minus removed effort as a percentage of baseline |
| Emergency-work frequency | Number of urgent additions per sprint |
| Trade-off compliance | Scope additions with an approved offset divided by non-emergency additions |

### How to read and interpret

High scope change reduces predictability. Net growth indicates that additions were not offset. A high unplanned ratio may be normal for operational teams but must be reflected in capacity planning. Repeated emergency work suggests upstream reliability or prioritisation problems.

### RAG

- **Green:** scope change below 10%; net growth below 5%; all material changes approved and traceable.
- **Amber:** scope change 10-20%; net growth 5-10%; one change missing timely approval.
- **Red:** scope change above 20%; net growth above 10%; unapproved changes or sprint goal materially compromised.

### How to discuss with the team

Discuss the reason and trade-off for each material change. Avoid criticising teams for legitimate production demand; instead assess whether the planning reserve was appropriate and whether the root cause is recurring.

### Success measure

Scope remains stable enough to support prediction, genuine urgent work is absorbed through an agreed mechanism and every change is auditable.

---

## 7. Dependency, blocker and RAID governance

Dependencies and RAID items must be identified early, owned and actively governed.

### Required practices

- Record upstream and downstream dependencies before commitment.
- Assign an accountable owner and required-by date.
- Track risks, assumptions, issues and dependencies in the governed RAID register.
- Link material RAID items to affected Jira work.
- Escalate based on probability, impact, ageing and sprint-goal impact.

### Required reports

- Dependency map and heatmap.
- Open RAID items by severity and ageing.
- Blocker trend and blocker cause.
- Cross-team dependency fulfilment.
- Decisions required and overdue decisions.

### Core KPIs

| KPI | Definition |
|---|---|
| Dependency readiness | Committed items with all dependencies confirmed divided by dependency-bearing committed items |
| Dependency fulfilment | Dependencies delivered by required date divided by dependencies due |
| Blocker resolution time | Median elapsed time from blocker raised to resolution |
| RAID exposure | Weighted score using probability, impact and urgency |
| Overdue decision rate | Decisions past due divided by open decisions |

### How to read and interpret

A dependency can be open without being unhealthy if it has an owner, date and credible plan. Unowned, overdue or high-impact dependencies are the main concern. Rising blocker resolution time indicates escalation or ownership weakness.

### RAG

- **Green:** at least 95% dependency readiness; at least 90% fulfilment; no critical unowned item.
- **Amber:** readiness 85-94%; fulfilment 75-89%; one overdue high-severity item.
- **Red:** readiness below 85%; fulfilment below 75%; critical dependency unowned or sprint goal blocked.

### How to discuss with the team

Review the decision or action needed, accountable owner and due date. Do not spend the meeting restating the risk. Escalate cross-team issues through the agreed governance cadence.

### Success measure

Dependencies are discovered before commitment, critical blockers are resolved quickly and no sprint failure occurs because a known dependency lacked ownership.

---

## 8. Quality, validation and Definition of Done

Quality is assessed continuously while work is built. It is not a separate brainstorming or inspection phase added after delivery.

### Definition of Done

A work item is Done when, as applicable:

- acceptance criteria are met;
- peer review is completed;
- automated and manual tests pass;
- defects are resolved or formally accepted;
- security, performance and operational checks are complete;
- documentation and runbooks are updated;
- observability and support readiness are confirmed;
- deployment or release evidence is attached;
- Product, service owner or designated accepter has accepted the outcome;
- Jira fields, resolution and links are complete.

### Required reports

- First-pass acceptance.
- Defect discovery by stage.
- Reopened work.
- Escaped defects.
- Test execution and pass rate.
- Acceptance ageing.
- Definition of Done compliance.

### Core KPIs

| KPI | Definition |
|---|---|
| First-pass acceptance | Items accepted without rework divided by items submitted for acceptance |
| Reopen rate | Reopened items divided by completed items |
| Defect leakage | Defects found after acceptance divided by total defects found |
| DoD compliance | Completed items meeting all applicable DoD controls divided by completed items |
| Acceptance latency | Median time from ready-for-acceptance to accepted |
| Rework ratio | Effort spent correcting rejected work divided by total effort |

### How to read and interpret

High completion with low first-pass acceptance is not healthy delivery. Reopen rate and escaped defects expose weak validation. Acceptance latency may indicate stakeholder capacity rather than delivery-team performance and must be discussed accordingly.

### RAG

- **Green:** first-pass acceptance at least 90%; DoD compliance at least 95%; reopen below 5%; no critical escaped defect.
- **Amber:** first-pass acceptance 75-89%; DoD 85-94%; reopen 5-10%; one major escaped defect.
- **Red:** first-pass acceptance below 75%; DoD below 85%; reopen above 10%; any critical escaped defect.

### How to discuss with the team

Review defect patterns, unclear acceptance criteria, test gaps, review effectiveness and environment constraints. Do not use defect counts as an individual-performance measure. Agree preventive changes that can be applied within the existing scope.

### Success measure

Most work is accepted on the first submission, critical defects do not escape and DoD evidence is complete when the item is closed.

---

## 9. Sprint ceremonies and decision governance

Ceremonies are decision forums, not status meetings.

| Ceremony | Required decisions and outcomes | Evidence |
|---|---|---|
| Backlog refinement | Ready, not ready, estimate, dependency and acceptance clarity | Updated backlog and DoR status |
| Sprint planning | Sprint goal, capacity, commitment, reserve and risks | Baselined sprint plan |
| Daily review | Completion focus, blocker action and priority adjustment | Updated work and blocker actions |
| Mid-sprint health review | Recovery plan where forecast is at risk | Forecast and action log |
| Sprint review | Outcome acceptance and stakeholder feedback | Accepted items and feedback |
| Retrospective | Improvement actions with owners and dates | Retrospective action register |
| Leadership review | Cross-team risks, decisions and trend review | Decision and escalation log |

### Required reports

- Ceremony attendance and decision completion.
- Action ageing.
- Decisions overdue.
- Sprint health scorecard.
- Retrospective action progress.

### Core KPIs

| KPI | Definition |
|---|---|
| Decision effectiveness | Decisions completed by due date divided by decisions due |
| Action closure rate | Governance actions closed by due date divided by actions due |
| Ceremony outcome compliance | Ceremonies producing required evidence divided by ceremonies held |
| Retrospective action effectiveness | Improvement actions that produce measurable improvement divided by completed actions |

### How to read and interpret

High attendance does not equal effective governance. Measure whether decisions, actions and required evidence are produced. Repeated overdue actions indicate unclear accountability or insufficient authority.

### RAG

- **Green:** at least 90% decision and action completion; all ceremonies produce required outcomes.
- **Amber:** 75-89% completion or one recurring missing output.
- **Red:** below 75%, critical decisions unresolved or ceremonies consistently reduced to status reporting.

### How to discuss with the team

Ask what decision the forum must make, what evidence is needed and who owns the next action. Cancel or redesign ceremonies that do not produce a meaningful outcome.

### Success measure

Each ceremony produces the intended decision or artefact, actions close on time and meeting time decreases as information quality improves.

---

## 10. Roles, accountability and team health

### Core accountability

| Role | Primary accountability |
|---|---|
| Product Owner / Product Manager | Outcome priority, acceptance criteria and business acceptance |
| Engineering Manager | Capacity, technical execution, quality and people enablement |
| Program Manager / Scrum Master | Governance, dependency management, reporting, facilitation and escalation |
| Technical Lead / Architect | Technical approach, design integrity and technical risk |
| Developer / Engineer | Build quality, evidence, estimates and transparent progress |
| QA / Validation | Test strategy, defect visibility and acceptance evidence |
| SRE / Operations | Reliability, operability, support readiness and production feedback |
| Executive Sponsor | Priority alignment, strategic decisions and obstacle removal |

### Required reports

- Ownership completeness.
- Workload distribution.
- Skill coverage and concentration.
- Decision and action ownership.
- Team health pulse.
- Interrupt and after-hours burden for operations teams.

### Core KPIs

| KPI | Definition |
|---|---|
| Ownership completeness | Active items with accountable owners divided by active items |
| Work concentration | Percentage of active work held by the most-loaded contributor or role |
| Critical skill coverage | Critical skills with primary and backup coverage divided by critical skills identified |
| Team health index | Periodic pulse covering clarity, workload, collaboration and sustainability |
| Interrupt load | Unplanned interruptions divided by available delivery time |

### How to read and interpret

Work concentration can reveal bottlenecks or specialist dependency, but should not be used as an individual productivity judgement. A declining team-health score combined with rising interrupt load is an early sustainability warning.

### RAG

- **Green:** ownership at least 98%; no critical skill has a single unsupported owner; team-health trend stable or improving.
- **Amber:** ownership 90-97%; one high concentration risk; health declines for one sprint.
- **Red:** ownership below 90%; critical unowned work; sustained health decline or unsafe workload.

### How to discuss with the team

Discuss role clarity, overloaded skills, handoffs, interruptions and support needs. Protect psychological safety and do not expose individual health responses in executive reporting.

### Success measure

Ownership is clear, work is sustainable, critical skills have coverage and teams can escalate constraints without penalty.

---

## 11. Sprint review, closure and spillover

The sprint closes on its scheduled end date. Incomplete work becomes visible spillover and is reassessed for the next sprint.

### Closure rules

- Baseline commitment remains unchanged for historical measurement.
- Accepted work is recorded separately from work merely moved to Done.
- Incomplete work retains its source sprint for spillover analysis.
- Remaining effort is re-estimated when material learning occurred.
- Spillover is not automatically recommitted; it is reprioritised with the rest of the backlog.
- The reason for spillover is classified: dependency, capacity, scope change, quality, estimation, interruption, acceptance delay or execution.

### Required reports

- Planned versus accepted delivery.
- Spillover by reason, team, work type and age.
- Sprint goal achievement.
- Closure hygiene.
- Accepted outcomes and business value.
- Trend of repeated carry-forward items.

### Core KPIs

| KPI | Definition |
|---|---|
| Commitment reliability | Accepted committed effort divided by baseline committed effort |
| Sprint goal success | Sprint goals achieved divided by sprint goals committed |
| Spillover rate | Incomplete committed effort divided by baseline committed effort |
| Repeat spillover rate | Items carried more than once divided by spillover items |
| Closure hygiene | Closed items with complete resolution and evidence divided by closed items |
| Outcome delivery rate | Accepted outcomes achieved divided by outcomes planned |

### How to read and interpret

Commitment reliability must be interpreted with scope change, quality and unplanned work. High velocity with low outcome achievement is not success. Repeat spillover is more concerning than a one-time carry-forward caused by a known event.

### RAG

- **Green:** commitment reliability at least 85%; sprint goal achieved; repeat spillover below 5%; closure hygiene at least 98%.
- **Amber:** reliability 70-84%; goal partially achieved; repeat spillover 5-10%; hygiene 90-97%.
- **Red:** reliability below 70%; sprint goal missed; repeat spillover above 10%; hygiene below 90%.

### How to discuss with the team

Review systemic spillover causes and the effect on outcomes. Avoid asking teams to compensate by overcommitting in the next sprint. Agree what will change in refinement, capacity planning, dependency management or execution.

### Success measure

Sprint results are closed on time, spillover is transparent, repeat carry-forward declines and commitment reliability improves without sacrificing quality.

---

## 12. Retrospective and continuous improvement

Retrospectives convert evidence and experience into measurable improvement.

### Required practices

- Review the sprint scorecard and qualitative feedback.
- Identify no more than a manageable number of high-value actions.
- Assign owner, target sprint, expected result and measure.
- Carry incomplete actions visibly into the next sprint.
- Verify whether completed actions improved the target KPI.

### Required reports

- Retrospective action register.
- Action ageing and closure.
- Improvement experiment outcomes.
- Sprint-over-sprint maturity trend.
- Recurring root causes.

### Core KPIs

| KPI | Definition |
|---|---|
| Improvement action closure | Actions completed by target date divided by actions due |
| Improvement effectiveness | Completed actions producing expected measurable change divided by completed actions |
| Recurrence rate | Repeated root causes divided by root causes raised |
| Sprint maturity score | Composite of predictability, quality, flow, governance and continuous improvement |

### How to read and interpret

Closing an action is insufficient if the target performance did not improve. Repeated root causes indicate superficial corrective action or lack of ownership. Maturity should rise gradually and sustainably rather than through threshold manipulation.

### RAG

- **Green:** at least 85% action closure; at least 70% effectiveness; recurrence below 10%.
- **Amber:** closure 70-84%; effectiveness 50-69%; recurrence 10-20%.
- **Red:** closure below 70%; effectiveness below 50%; recurrence above 20%.

### How to discuss with the team

Begin with evidence, then ask what helped or hindered the sprint. Select actions that the team can influence. Escalate system-level constraints to the governance forum rather than assigning them back to the team without authority.

### Success measure

Improvement actions change measurable outcomes, recurring causes decline and the sprint maturity score improves over successive sprints.

---

## 13. Sprint performance scorecard and RAG model

The scorecard provides a balanced view of delivery. No single metric should determine sprint health.

### Mandatory scorecard dimensions

| Dimension | Primary measures | Weight |
|---|---|---:|
| Commitment and outcomes | Commitment reliability, sprint-goal success, outcome delivery | 25% |
| Flow and execution | WIP adherence, blocked time, ageing, flow efficiency | 20% |
| Quality | First-pass acceptance, DoD compliance, reopen and leakage | 25% |
| Scope and predictability | Scope change, unplanned work, forecast accuracy | 15% |
| Governance and improvement | Decision closure, action closure, maturity improvement | 15% |

### Overall RAG calculation

- **Green:** weighted score at least 85, no red critical control and sprint goal achieved.
- **Amber:** score 70-84, or one red non-critical dimension, or sprint goal partially achieved.
- **Red:** score below 70, sprint goal missed, critical quality or control failure, or material data incompleteness.

RAG thresholds may be calibrated by team type after a stable baseline exists. Any change to thresholds must be documented and must not rewrite historical performance.

### How to read and interpret

Start with the overall RAG, then review the dimension causing the result. Compare the current sprint with at least the previous three comparable sprints. Use absolute values, trends and explanatory context together.

### How to discuss with the team

1. What outcome did we commit to?
2. What was accepted?
3. Where did flow slow down?
4. What changed after sprint start?
5. Did quality hold?
6. What is the most important corrective action?

### Success measure

The scorecard enables the team and leadership to reach the same fact-based understanding of sprint health, and its trends lead to specific decisions and measurable improvement.

---

## 14. Sprint monitoring dashboard

A separate standalone HTML dashboard is maintained at:

`dashboards/Sprint-Monitoring-Dashboard.html`

The dashboard contains:

- executive RAG and sprint goal status;
- commitment, accepted delivery and spillover;
- velocity and commitment reliability trends;
- scope volatility and unplanned work;
- cumulative flow and work ageing;
- blocker and dependency health;
- quality and first-pass acceptance;
- team capacity and workload concentration;
- retrospective and governance action tracking;
- interpretation guidance and recommended discussion prompts.

### Dashboard usage

- Teams review it daily for flow, blockers and scope movement.
- Program and engineering leaders review it mid-sprint and at closure.
- Executives review the outcome, trend, major risks and decisions required.
- Every RAG must be traceable to its underlying measure and threshold.

### Performance management for this chapter

**Reports and KPIs:** Data freshness, field completeness, reconciliation variance, dashboard usage and percentage of RAGs with supporting data.

**How to interpret:** A visually complete dashboard is not trustworthy when source fields are missing or stale. Reconciliation failures must be resolved before the dashboard is used for decisions.

**RAG:** Green: data fresh within the agreed refresh interval, completeness at least 98% and reconciliation variance below 1%. Amber: minor delay, completeness 95-97% or variance 1-3%. Red: stale data, completeness below 95%, variance above 3% or broken traceability.

**Team discussion:** Confirm whether the result reflects delivery reality. Resolve data-quality problems separately from delivery-performance discussions so that teams are not held accountable for unreliable reporting.

**Success measure:** Stakeholders use one trusted dashboard, every measure is reproducible and decisions can be traced to current, complete source data.

---

## 15. Definition of completion for sprint governance

This playbook is considered implemented when:

- teams use the standard sprint lifecycle and controls;
- the Definition of Ready and Definition of Done are configured or operationalised;
- sprint baselines and scope changes are captured;
- spillover remains traceable to its source sprint;
- the mandatory scorecard is produced every sprint;
- RAG thresholds are documented and consistently applied;
- performance discussions use evidence, trends and system causes;
- improvement actions are owned and measured;
- the sprint monitoring dashboard reconciles with source data;
- leadership and teams can interpret the same performance view without additional explanation.

## Related artefacts

- `templates/governance/KPI-Definition-Template.md`
- `templates/governance/RAID-Register-Template.md`
- `docs/governance/Governance-Cadence-Guide.md`
- `runbooks/Dashboard-Refresh-Runbook.md`
- `dashboards/Sprint-Monitoring-Dashboard.html`
