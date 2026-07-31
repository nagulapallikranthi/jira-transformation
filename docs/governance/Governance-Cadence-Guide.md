# Enterprise Governance Cadence Guide

## Purpose

This guide defines the minimum governance rhythm required to operate a controlled, transparent, and decision-oriented Jira transformation program. It establishes recurring forums, expected inputs, decision rights, evidence requirements, reports, KPIs, RAG interpretation, discussion methods, expected outcomes, and escalation paths across executive, portfolio, program, platform, operations, and delivery levels.

The cadence is designed to prevent duplicated meetings, unclear ownership, stale risks, unmanaged exceptions, weak reporting, and governance forums that do not lead to decisions or action.

## Guiding principles

1. Every forum must have a clear decision purpose.
2. Every recurring meeting must produce a documented outcome.
3. Metrics must support decisions, not replace judgement.
4. Risks, actions, issues, and dependencies must have accountable owners and dates.
5. Escalation should occur at the lowest level capable of resolving the matter.
6. Exceptions must be time-bound, approved, and traceable.
7. Governance should remain lightweight enough to sustain.
8. Duplicate reporting should be removed wherever the same evidence already exists.
9. Every KPI must have a defined interpretation and action expectation.
10. Green status must be supported by evidence; missing evidence is Grey, not Green.

## Governance operating model

| Layer | Primary focus | Typical decision horizon | Primary outcome |
|---|---|---|---|
| Executive | Strategic direction, investment, enterprise risk, value realization | Quarterly to annual | Confirm direction, funding, risk tolerance, and value realization |
| Portfolio | Prioritization, funding, cross-program dependencies, capacity | Monthly to quarterly | Rebalance priorities and capacity across programs |
| Program | Delivery health, milestones, risks, decisions, change control | Weekly to monthly | Protect milestones and resolve cross-workstream constraints |
| Platform / Operations | Reliability, service health, release readiness, operational risk | Daily to weekly | Maintain service health and safe operational change |
| Team | Execution, blockers, commitments, quality, sprint outcomes | Daily to sprint cadence | Deliver accepted outcomes predictably |

# Standard Governance Cadence

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
| Sprint Governance Review | Each sprint | Delivery Lead / Scrum Master | Product Owner, Engineering Lead, Program Manager, Team Representatives | Review commitment, scope change, spillover, blockers, quality, and improvement actions | Sprint decision record, corrective actions, accepted carryover rationale |
| Daily Delivery Coordination | Daily | Team Lead | Delivery team and required dependencies | Surface blockers, coordinate work, and confirm immediate priorities | Blocker ownership and same-day actions |
| Risk and Dependency Deep Dive | Biweekly or risk-triggered | Program Manager | Relevant owners and specialists | Resolve high-impact risks and cross-team dependencies | Treatment plan, escalation decision, revised target dates |
| Benefits Realization Review | Quarterly | Business Owner | Finance, Program Lead, KPI Owners, Portfolio Owner | Confirm whether expected value is being realized | Benefit status, corrective actions, reforecast, closure decisions |

# Forum-Level Reports, KPIs, Interpretation and Outcomes

## 1. Executive Steering Committee

### Mandatory reports and charts

| Report / chart | Purpose |
|---|---|
| Enterprise transformation scorecard | Summarize strategic delivery, value, risk, and adoption |
| Benefits realization trend | Compare planned versus realized financial and operational value |
| Strategic milestone roadmap | Show critical milestones, forecast variance, and decision points |
| Enterprise RAID heatmap | Highlight the highest-impact risks, issues, and dependencies |
| Investment and capacity summary | Show spend, forecast, resource allocation, and material variance |
| Adoption and operating-model maturity trend | Show whether the transformation is being embedded and sustained |

### Mandatory KPIs

| KPI | Green | Amber | Red | How to interpret |
|---|---:|---:|---:|---|
| Strategic milestone adherence | >= 90% | 75-89% | < 75% | Falling adherence indicates that strategic commitments are becoming unreliable |
| Benefits realization | >= 90% of plan | 70-89% | < 70% | Separate timing delay from permanent benefit erosion |
| Critical risks without approved treatment | 0 | 1-2 | > 2 | Any untreated critical risk requires executive ownership |
| Funding variance | Within +/-5% | +/-6-10% | > +/-10% | Confirm whether variance is caused by scope, delay, rate, or forecast weakness |
| Decision aging | No overdue critical decisions | 1 overdue | > 1 overdue | Executive delay may be directly blocking delivery |
| Adoption maturity | Improving or target met | Flat | Declining | Delivery without adoption is not considered successful |

### How to read and discuss

Start with direction and value, then exceptions. Do not review detailed team metrics unless they create enterprise impact. For every Amber or Red item, present the business impact, options, recommendation, accountable owner, and required-by date.

### Expected outcome

- Confirm or change strategic direction.
- Approve material investment or scope decisions.
- Accept or reduce enterprise risk.
- Remove cross-organizational barriers.
- Reconfirm measurable benefits and ownership.

### Success measure

The forum is successful when all material decisions are made within the required time, strategic risks have active treatment, and the transformation remains aligned to measurable enterprise outcomes.

## 2. Portfolio Governance Review

### Mandatory reports and charts

| Report / chart | Purpose |
|---|---|
| Portfolio health scorecard | Compare programs on schedule, cost, risk, quality, and value |
| Priority-versus-capacity matrix | Show whether funded priorities fit available capacity |
| Cross-program dependency heatmap | Highlight shared constraints and sequencing risks |
| Portfolio milestone forecast | Show confidence in major delivery dates |
| Investment allocation chart | Compare planned investment against current strategic priority |
| Program trend comparison | Identify consistently improving or deteriorating programs |

### Mandatory KPIs

| KPI | Green | Amber | Red | Interpretation |
|---|---:|---:|---:|---|
| Portfolio milestone adherence | >= 90% | 75-89% | < 75% | Assess whether delays are isolated or systemic |
| Capacity allocated to top priorities | >= 85% | 70-84% | < 70% | Low alignment indicates priority dilution |
| Cross-program dependencies overdue | 0-1 | 2-3 | > 3 | Repeated overdue dependencies indicate weak ownership or sequencing |
| Programs with Red status | 0 | 1 | > 1 | A cluster of Red programs may require portfolio reprioritization |
| Value delivery against plan | >= 90% | 75-89% | < 75% | Compare delivered value, not only output completion |
| Resource contention index | Low | Moderate | High | High contention requires explicit trade-off decisions |

### How to read and discuss

Compare programs consistently using the same definitions. Focus on trade-offs: which work should continue, pause, accelerate, or receive additional capacity. Avoid allowing every program to remain a top priority.

### Expected outcome

- Confirm portfolio priorities.
- Reallocate capacity where required.
- Resolve cross-program dependencies.
- Escalate only decisions beyond portfolio authority.
- Reforecast milestones and value where evidence has changed.

### Success measure

The forum is successful when portfolio capacity is visibly aligned to priority, dependency aging reduces, and programs receive timely decisions instead of carrying unresolved constraints into future cycles.

## 3. Program Governance Review

### Mandatory reports and charts

| Report / chart | Purpose |
|---|---|
| Program RAG scorecard | Summarize schedule, scope, quality, cost, RAID, and decisions |
| Milestone trend chart | Compare baseline, previous forecast, and current forecast |
| RAID heatmap and aging report | Show exposure, owner, treatment, and stagnation |
| Dependency tracker | Show inbound and outbound dependencies and required dates |
| Decision and action aging | Highlight overdue governance obligations |
| Workstream delivery trend | Compare planned versus accepted deliverables by workstream |
| Change request impact summary | Show approved and pending changes to scope, cost, or schedule |

### Mandatory KPIs

| KPI | Green | Amber | Red | Interpretation |
|---|---:|---:|---:|---|
| Milestones on plan | >= 90% | 75-89% | < 75% | Review forecast quality, not only current dates |
| High risks with active treatment | 100% | 80-99% | < 80% | A risk without treatment is unmanaged exposure |
| Overdue decisions | 0 | 1-2 | > 2 | Decision latency often becomes hidden schedule delay |
| Overdue actions | <= 5% | 6-15% | > 15% | Repeated overdue actions indicate weak governance discipline |
| Dependency on-time rate | >= 90% | 75-89% | < 75% | Low rate predicts future milestone misses |
| Accepted delivery versus plan | >= 90% | 75-89% | < 75% | Use accepted output, not merely files or tasks created |
| Forecast accuracy | Within 10% | 11-20% | > 20% | Persistent variance signals weak planning assumptions |

### How to read and discuss

Review movement since the last meeting. Ask what changed, why it changed, what impact it creates, and what decision is required. A static Red item without a revised treatment plan should be escalated.

### Expected outcome

- Confirm milestone forecast.
- Approve recovery actions within delegated authority.
- Resolve cross-workstream blockers.
- Update RAID, actions, decisions, and dependencies.
- Escalate material scope, cost, policy, or enterprise-risk decisions.

### Success measure

The forum is successful when delivery forecasts become more accurate, high risks move toward closure, overdue decisions reduce, and workstreams leave with clear owners and dates.

## 4. Architecture and Design Authority

### Mandatory reports and charts

| Report / chart | Purpose |
|---|---|
| Architecture decision backlog | Show pending decisions, age, and delivery impact |
| Standards compliance report | Identify deviations from approved architecture patterns |
| Exception register | Track approved exceptions, expiry, and remediation |
| Technical dependency map | Show integration, platform, security, and data dependencies |
| Non-functional readiness scorecard | Assess resilience, scalability, observability, security, and operability |

### Mandatory KPIs

| KPI | Green | Amber | Red | Interpretation |
|---|---:|---:|---:|---|
| Architecture decisions made by required date | >= 95% | 80-94% | < 80% | Late decisions create avoidable rework and delivery delay |
| Standards compliance | >= 95% | 85-94% | < 85% | Distinguish justified exceptions from uncontrolled divergence |
| Exceptions past expiry | 0 | 1 | > 1 | Expired exceptions are unmanaged technical risk |
| Critical NFR gaps | 0 | 1-2 | > 2 | A critical gap may block release or require explicit risk acceptance |
| Rework caused by late architecture decisions | <= 5% | 6-10% | > 10% | High rework indicates architecture engagement is too late |

### How to read and discuss

Review decisions by delivery impact and required-by date. Each exception must include risk, compensating control, expiry, owner, and remediation. Avoid abstract architecture debate without a decision request.

### Expected outcome

- Approve or reject architecture choices.
- Record architecture decisions.
- Approve time-bound exceptions.
- Assign remediation and required-by dates.
- Escalate risk beyond architecture authority.

### Success measure

The forum is successful when critical design decisions are made before implementation dependency dates, exception aging remains controlled, and architecture-related rework decreases.

## 5. Change Advisory Board

### Mandatory reports and charts

| Report / chart | Purpose |
|---|---|
| Change calendar | Show release collisions, freezes, and high-risk windows |
| Change risk distribution | Compare low, medium, and high-risk changes |
| Change success trend | Show successful, failed, backed-out, and emergency changes |
| Failed-change root-cause report | Identify recurring weaknesses in testing, planning, or rollback |
| Emergency-change trend | Show whether emergency activity is increasing |
| Post-implementation review backlog | Track required reviews and actions |

### Mandatory KPIs

| KPI | Green | Amber | Red | Interpretation |
|---|---:|---:|---:|---|
| Change success rate | >= 95% | 90-94% | < 90% | Falling success indicates inadequate readiness or risk control |
| Failed change rate | <= 5% | 6-10% | > 10% | Review by application, team, change type, and root cause |
| Emergency change percentage | <= 10% | 11-20% | > 20% | High emergency volume may indicate weak planning or incident recurrence |
| Rollback readiness | 100% for material changes | 90-99% | < 90% | A change without a credible rollback plan is not ready |
| PIR completion on time | >= 95% | 80-94% | < 80% | Missing reviews prevent learning from failure |

### How to read and discuss

Focus on evidence: testing, monitoring, dependencies, implementation sequence, rollback, communication, and ownership. High-risk changes require a clear failure scenario and tested recovery path.

### Expected outcome

- Approve, reject, defer, or conditionally approve changes.
- Confirm implementation and rollback ownership.
- Record residual risk.
- Trigger post-implementation review where required.

### Success measure

The forum is successful when change failure and emergency change trends reduce without creating unnecessary approval delay.

## 6. Release Readiness Review

### Mandatory reports and charts

| Report / chart | Purpose |
|---|---|
| Release readiness scorecard | Consolidate product, engineering, QA, operations, security, and support readiness |
| Defect severity and aging chart | Show unresolved defects and release impact |
| Test completion and pass-rate trend | Confirm functional and non-functional validation |
| Dependency readiness matrix | Show readiness of upstream and downstream dependencies |
| Deployment and rollback readiness | Confirm execution sequence, monitoring, and recovery |
| Residual risk summary | Present accepted risks and ownership |

### Mandatory KPIs

| KPI | Green | Amber | Red | Interpretation |
|---|---:|---:|---:|---|
| Mandatory entry criteria met | 100% | 90-99% with approved conditions | < 90% | Missing mandatory criteria normally blocks release |
| Critical defects open | 0 | 0 with high-severity exceptions | Any critical defect | Critical defects require explicit no-go or risk authority |
| Test pass rate | >= 95% | 90-94% | < 90% | Interpret alongside coverage and defect severity |
| Dependency readiness | 100% | 90-99% | < 90% | One missing critical dependency may invalidate overall readiness |
| Rollback validation | Complete | Partial with accepted risk | Missing | Unvalidated rollback materially increases production risk |
| Monitoring and alert readiness | 100% | Minor gaps | Material gaps | A release must be observable from the point of deployment |

### How to read and discuss

Review by exception, not by presentation sequence. Any Amber or Red item must clearly state whether it blocks release, can be conditionally accepted, or requires risk approval.

### Expected outcome

- Go, no-go, or conditional-go decision.
- Confirm conditions, owners, and deadlines.
- Confirm rollback and command structure.
- Record residual risks and acceptance authority.

### Success measure

The forum is successful when release decisions are evidence-based, post-release incidents decline, and conditional approvals are closed within the agreed period.

## 7. Operational Service Review

### Mandatory reports and charts

| Report / chart | Purpose |
|---|---|
| Service health dashboard | Show availability, performance, incidents, and operational risk |
| SLA attainment trend | Compare response and resolution performance |
| Incident volume and severity trend | Identify instability and recurring service impact |
| Oldest-open-ticket report | Surface neglected operational work |
| Backlog aging distribution | Show queue health and stagnation |
| Problem and RCA trend | Confirm recurring incidents are being eliminated |
| Change-related incident report | Connect production instability to change activity |
| Capacity and saturation trend | Detect infrastructure or platform pressure |

### Mandatory KPIs

| KPI | Green | Amber | Red | Interpretation |
|---|---:|---:|---:|---|
| Availability / SLO attainment | Meets target | Within error-budget warning | Breaches target | Review customer impact and error-budget consumption |
| Resolution SLA attainment | >= 95% | 85-94% | < 85% | Segment by priority, service, owner, and cause |
| Critical incidents | 0 | 1 | > 1 | Repeated critical incidents require problem management |
| Oldest open critical ticket | Within SLA | Near breach | Breached | Age without action is a governance failure |
| Backlog over aging threshold | <= 10% | 11-20% | > 20% | High aging may indicate poor ownership or capacity |
| RCA completion on time | >= 95% | 80-94% | < 80% | Incomplete RCA weakens recurrence prevention |
| Repeat incident rate | Declining | Flat | Increasing | Increasing recurrence indicates ineffective corrective action |

### How to read and discuss

Begin with customer or service impact, then trend, then root cause. Do not treat automated first response as proof of service performance; resolution, recurrence, and aging must also be reviewed.

### Expected outcome

- Assign corrective and preventive actions.
- Reprioritize aged operational work.
- Escalate unresolved service risks.
- Initiate problem management or capacity action.
- Confirm owners for SLA recovery.

### Success measure

The forum is successful when repeat incidents, aged backlog, and resolution breaches reduce while service reliability and corrective-action closure improve.

## 8. KPI and Data Quality Review

### Mandatory reports and charts

| Report / chart | Purpose |
|---|---|
| KPI catalogue status | Show ownership, approval, lifecycle state, and pending definitions |
| Data-quality scorecard | Track completeness, accuracy, consistency, timeliness, and validity |
| Reconciliation report | Compare source systems, curated data, and dashboard output |
| Dashboard defect trend | Show reporting defects, severity, age, and recurrence |
| Metric exception register | Track accepted limitations and expiry |
| Usage and adoption report | Show whether governed dashboards are actually used |

### Mandatory KPIs

| KPI | Green | Amber | Red | Interpretation |
|---|---:|---:|---:|---|
| KPI ownership completeness | 100% | 90-99% | < 90% | An unowned KPI cannot be governed reliably |
| Data completeness | >= 98% | 95-97.9% | < 95% | Assess missingness by field, team, source, and time period |
| Reconciliation variance | <= 1% | >1-3% | > 3% | Material variance blocks trusted decision-making |
| Data freshness compliance | >= 98% | 95-97.9% | < 95% | Stale data must not be presented as current |
| Critical dashboard defects open | 0 | 1 | > 1 | Critical defects may require report withdrawal |
| Metric exceptions past expiry | 0 | 1 | > 1 | Expired exceptions indicate uncontrolled reporting risk |
| Dashboard adoption | Increasing / target met | Flat | Declining | Low use may signal poor relevance, trust, or usability |

### How to read and discuss

Separate data defects from genuine performance signals. Do not debate business performance until the underlying data is sufficiently trusted. Every defect must have severity, owner, target date, and affected decisions.

### Expected outcome

- Approve or revise KPI definitions.
- Assign data-quality remediation.
- Accept or reject temporary limitations.
- Retire duplicate or unused reports.
- Confirm whether dashboards remain fit for decision-making.

### Success measure

The forum is successful when reconciliation variance, critical defects, and expired exceptions reduce while KPI ownership and dashboard trust increase.

## 9. Sprint Governance Review

### Mandatory reports and charts

| Report / chart | Purpose |
|---|---|
| Sprint monitoring dashboard | Provide a consolidated view of delivery, quality, flow, scope, and risk |
| Commitment versus accepted delivery | Measure reliability of sprint commitment |
| Scope change trend | Show work added, removed, or materially changed after sprint start |
| Spillover trend | Show unfinished committed work across sprints |
| Velocity trend | Track accepted throughput without treating velocity as a productivity target |
| Burn-up or burn-down | Show progress and scope movement during the sprint |
| Work aging and blocked-time report | Identify stalled work and unresolved dependencies |
| First-pass acceptance trend | Show quality of completed deliverables |
| Reopen and defect-leakage trend | Show downstream quality failure |
| Capacity allocation chart | Compare planned capacity, unplanned work, and actual delivery |
| Improvement-action tracker | Confirm retrospective actions are being implemented |

### Mandatory KPIs

| KPI | Green | Amber | Red | Interpretation |
|---|---:|---:|---:|---|
| Commitment reliability | >= 90% | 75-89% | < 75% | Measures accepted committed work, not merely status Done |
| First-pass acceptance | >= 90% | 75-89% | < 75% | Low acceptance means quality is being inspected in rather than built in |
| Spillover rate | <= 10% | 11-20% | > 20% | Review cause by estimation, dependency, scope, quality, or capacity |
| Scope change | <= 10% | 11-20% | > 20% | High scope movement weakens predictability |
| Unplanned work | <= 15% | 16-25% | > 25% | Segment legitimate operational work from avoidable interruption |
| Blocked-time ratio | <= 10% | 11-20% | > 20% | High blocked time indicates unresolved dependencies or weak escalation |
| Reopen rate | <= 5% | 6-10% | > 10% | Reopens indicate incomplete acceptance or quality gaps |
| Defect leakage | <= 5% | 6-10% | > 10% | Leakage shows defects escaping sprint controls |
| Improvement-action closure | >= 90% | 75-89% | < 75% | A retrospective without closed actions does not create improvement |
| Velocity stability | Within +/-15% of rolling average | +/-16-25% | > +/-25% | Large swings may indicate planning inconsistency or changing capacity |

### How to read and discuss

Review the sprint goal first, then accepted commitment, then quality, scope movement, blockers, and improvement actions. Discuss system causes rather than individual blame. Every Amber or Red KPI should result in a specific corrective action or an explicit accepted condition.

### Expected outcome

- Accept completed sprint outcomes.
- Record and classify spillover.
- Identify root causes of missed commitments.
- Agree corrective actions for planning, quality, flow, and dependencies.
- Carry approved spillover into the next sprint without delaying sprint start.

### Success measure

The forum is successful when commitment reliability, first-pass acceptance, and improvement-action closure increase sprint on sprint while spillover, scope volatility, blocked time, and defect leakage decrease.

## 10. Daily Delivery Coordination

### Mandatory reports and charts

| Report / chart | Purpose |
|---|---|
| Active sprint board | Show current work state and ownership |
| Blocked and impediment list | Surface work requiring intervention |
| Work-item aging view | Identify stalled work |
| Sprint goal confidence | Show current confidence in achieving the goal |
| Due-soon and dependency report | Protect immediate commitments |

### Mandatory KPIs

| KPI | Green | Amber | Red | Interpretation |
|---|---:|---:|---:|---|
| Blockers without owner | 0 | 1 | > 1 | Every blocker requires accountable ownership |
| Blockers older than one working day | 0 | 1-2 | > 2 | Aging blockers require escalation, not repeated discussion |
| Work items with no update beyond threshold | <= 5% | 6-10% | > 10% | Validate whether the issue is stale data or stalled work |
| Sprint goal confidence | High | At risk | Unlikely | Confidence must be based on evidence, not optimism |
| Same-day action closure | >= 90% | 75-89% | < 75% | Low closure indicates coordination is not converting into progress |

### How to read and discuss

Keep the conversation focused on movement, blockers, help required, and immediate priority. Do not turn the forum into detailed status narration or problem-solving for every issue.

### Expected outcome

- Assign blocker ownership.
- Confirm same-day priorities.
- Escalate unresolved dependencies.
- Update sprint-goal confidence.

### Success measure

The forum is successful when blockers are resolved quickly, stale work decreases, and the team can identify the most important next action without ambiguity.

## 11. Risk and Dependency Deep Dive

### Mandatory reports and charts

| Report / chart | Purpose |
|---|---|
| Risk heatmap | Prioritize risks by likelihood and impact |
| Dependency network or heatmap | Show concentration and sequencing exposure |
| Risk and dependency aging | Identify stagnant items |
| Treatment effectiveness report | Assess whether mitigation is reducing exposure |
| Required-by date variance | Show dependencies likely to miss delivery need dates |

### Mandatory KPIs

| KPI | Green | Amber | Red | Interpretation |
|---|---:|---:|---:|---|
| Critical risks without owner | 0 | 0 | Any | Unowned critical exposure is unacceptable |
| High risks without active treatment | 0 | 1 | > 1 | Treatment must include action, owner, and date |
| Dependencies committed by required date | >= 95% | 80-94% | < 80% | Missing commitment reduces schedule confidence |
| Overdue dependencies | <= 5% | 6-15% | > 15% | Review concentration by provider and workstream |
| Risk exposure trend | Decreasing | Flat | Increasing | Flat exposure may still be unacceptable when dates approach |
| Treatment actions overdue | <= 5% | 6-15% | > 15% | Overdue treatment means mitigation exists only on paper |

### How to read and discuss

Review only material risks and dependencies. Ask whether exposure changed, whether treatment remains credible, and whether the required decision date has moved closer. Avoid repeated status reporting without a resolution path.

### Expected outcome

- Agree treatment plans.
- Confirm dependency commitments.
- Escalate unresolved ownership or dates.
- Reassess residual exposure.

### Success measure

The forum is successful when critical exposure and overdue dependencies decrease and treatment actions close before delivery impact occurs.

## 12. Benefits Realization Review

### Mandatory reports and charts

| Report / chart | Purpose |
|---|---|
| Planned-versus-realized benefit trend | Compare expected and actual value |
| Benefit forecast | Show future value based on current evidence |
| Benefit attribution report | Connect value to delivered capabilities |
| Adoption and utilization trend | Confirm that capability is being used |
| Cost and saving summary | Show realized savings, mitigated cost, cost increase, and pipeline |
| Benefit risk register | Show assumptions and threats to realization |

### Mandatory KPIs

| KPI | Green | Amber | Red | Interpretation |
|---|---:|---:|---:|---|
| Realized benefit versus plan | >= 90% | 70-89% | < 70% | Distinguish delayed realization from lost value |
| Adoption rate | >= target | Within 10% of target | > 10% below target | Low adoption may explain weak benefit realization |
| Benefit forecast confidence | High | Medium | Low | Confidence depends on data quality and validated assumptions |
| Benefits without accountable owner | 0 | 1 | > 1 | Every benefit requires a business owner |
| Benefits with expired assumptions | 0 | 1 | > 1 | Revalidate assumptions before continuing to report value |
| Realized versus pipeline ratio | Improving as planned | Flat | Deteriorating | A growing pipeline without realization may signal execution delay |

### How to read and discuss

Review evidence of value rather than activity completion. Challenge attribution, timing, assumptions, and adoption. Benefits should be reforecast when the delivery or operating context changes.

### Expected outcome

- Confirm realized value.
- Reforecast future benefits.
- Assign corrective adoption or delivery actions.
- Close benefits that are fully realized and evidenced.
- Escalate material benefit erosion.

### Success measure

The forum is successful when benefits are evidence-based, ownership is clear, adoption supports realization, and forecasts become increasingly accurate.

# Standard RAG Method

| Status | Meaning | Governance expectation |
|---|---|---|
| Green | On plan with no material intervention required | Continue monitoring; evidence must be current and validated |
| Amber | At risk but recoverable within delegated authority | Named recovery plan, accountable owner, and date required |
| Red | Forecast failure, tolerance breach, or material impact | Escalate with options, recommendation, impact, and required decision date |
| Grey | Insufficient, stale, or unvalidated evidence | Resolve data gap; do not report as Green |

## RAG interpretation rules

1. RAG must reflect forecast outcome, not only current position.
2. One critical Red dependency may make the overall item Red even when most indicators are Green.
3. Amber without a recovery plan is treated as Red for governance purposes.
4. Repeated Amber across multiple cycles requires escalation.
5. Thresholds must be calibrated where business criticality requires stricter limits.
6. Teams must not manipulate scope or definitions merely to preserve Green status.
7. Overall RAG must be explainable from supporting KPIs and evidence.

# How Governance Discussions Must Be Conducted

For every material exception, the chair should ask:

1. What changed since the last review?
2. What evidence supports the current status?
3. What is the forecast impact?
4. What is the underlying cause?
5. What recovery or treatment has been attempted?
6. What decision, support, or escalation is required?
7. Who owns the next action?
8. By what date must it be completed?
9. How will closure be evidenced?

Discussion must focus on the work system, decision, and outcome. Metrics must not be used to rank individuals or encourage defensive reporting.

# Forum Design Standard

Every governance forum must define:

| Field | Requirement |
|---|---|
| Forum name | Unique and outcome-oriented |
| Purpose | Decisions or controls the forum exists to provide |
| Chair | Accountable for agenda quality and effectiveness |
| Secretariat | Maintains evidence, minutes, actions, and decisions |
| Required participants | Roles needed to make decisions |
| Optional participants | Specialists invited when relevant |
| Cadence | Frequency and trigger |
| Duration | Time-box appropriate to decision scope |
| Inputs | Reports, dashboards, registers, and readiness evidence |
| Mandatory KPIs | Defined measures and approved thresholds |
| Outputs | Decisions, actions, approvals, escalations, and updates |
| Quorum | Minimum representation required to make decisions |
| Escalation path | Next governance level when unresolved |
| Record location | Approved system of record |
| Success measure | Evidence that the forum is improving outcomes |

# Standard Agenda Pattern

1. Confirm quorum and previous actions.
2. Review decisions required today.
3. Review exceptions and material changes.
4. Review RAG and KPI signals requiring action.
5. Review high and critical RAID items.
6. Review dependencies and milestone impact.
7. Confirm approvals, owners, and due dates.
8. Confirm escalations and communication actions.
9. Close with decision and action recap.

Status reporting without a decision, action, exception, or escalation should normally be handled asynchronously.

# Required Governance Artefacts

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
| Sprint Scorecard | Delivery Lead | Each sprint | Track commitment, quality, flow, and improvement |
| Data Quality Log | Data Owner | Monthly | Track reporting defects and remediation |

# Decision Rights

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

A forum should not escalate a decision merely because it is difficult. Escalation is required when authority, risk tolerance, funding, policy, or cross-organizational impact exceeds the forum's mandate.

# Mandatory Escalation Triggers

- A critical milestone is forecast to miss its approved tolerance.
- A risk exceeds accepted impact or likelihood threshold.
- A decision remains unresolved beyond its required-by date.
- A dependency owner cannot commit to the required date.
- A production or security risk is outside delegated authority.
- KPI data is materially unreliable for executive decision-making.
- Approved scope, funding, capacity, or architecture must change.
- An exception is nearing expiry without remediation.
- The same material issue remains open across two governance cycles without credible progress.
- An Amber item has no recovery plan.
- A Red item has no explicit decision request.

# Meeting Evidence and Records

Every formal governance forum must record:

- Date and forum name
- Chair and participants
- Quorum status
- Reports and data reviewed
- RAG status and supporting rationale
- Decisions made
- Decisions deferred and reason
- Actions, owners, and due dates
- Escalations raised
- Exceptions approved or rejected
- Material changes to scope, forecast, cost, risk, quality, or value
- Links to supporting evidence

Meeting notes should be concise and decision-centered. Transcripts are not a substitute for an approved decision record.

# Action Management Standard

| Field | Requirement |
|---|---|
| Action ID | Unique identifier |
| Description | Specific outcome, not vague activity |
| Owner | One accountable person or role |
| Due date | Agreed completion date |
| Priority | Critical / High / Medium / Low |
| Source forum | Governance body that created the action |
| Status | Open / In Progress / Blocked / Complete / Cancelled |
| Evidence | Link or note proving closure |
| Escalation status | Required when overdue or blocked |

An action is not complete until evidence exists and the originating authority accepts closure where required.

# Exception Governance

All exceptions must include:

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

Permanent exceptions are not permitted. Long-lived deviations must be resolved through a formal standard change or renewed time-bound approval.

# Governance Health Measures

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
| Data-quality defects | Material defects reduce over time |
| Escalation quality | Escalations include options, impact, and recommendation |
| First-pass decision rate | More decisions made without repeated forum cycles |
| Action recurrence | Same corrective actions do not repeatedly reopen |
| Outcome improvement | Governed KPIs improve over time |

# Anti-Patterns to Avoid

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
- Using KPIs to blame individuals
- Changing definitions to protect Green status
- Treating file creation or task completion as accepted business outcome

# Implementation Checklist

- [ ] Governance layers and authorities are approved.
- [ ] Every recurring forum has a documented charter.
- [ ] Duplicate forums have been consolidated or removed.
- [ ] Required participants and quorum are defined.
- [ ] Mandatory reports and KPIs are assigned to each forum.
- [ ] RAG thresholds and interpretation rules are approved.
- [ ] Standard agenda and evidence requirements are in use.
- [ ] RAID, decision, action, and exception registers have accountable owners.
- [ ] Escalation thresholds are agreed.
- [ ] Meeting outputs are stored in an approved system of record.
- [ ] KPI and dashboard reviews are included in the operating rhythm.
- [ ] Governance health measures are reviewed periodically.
- [ ] Cadence effectiveness is reassessed at least quarterly.

# Acceptance Criteria

This guide is considered adopted when:

1. Governance forums are mapped to the operating layers in this document.
2. Each forum has an approved purpose, chair, participants, cadence, inputs, outputs, quorum, and success measure.
3. Mandatory reports, charts, KPIs, and RAG thresholds are agreed for each forum.
4. Participants understand how to read, interpret, discuss, and act on each material KPI.
5. Decision rights and escalation paths are documented.
6. Required registers and evidence locations are established.
7. Actions and decisions are traceable from creation through closure.
8. Exception approvals are time-bound and reviewable.
9. At least one complete governance cycle has been run using the standard.
10. Participants confirm that duplicate reporting, unclear decision ownership, and action aging have reduced.

# Review and Maintenance

| Field | Value |
|---|---|
| Document owner | Enterprise Governance Office / PMO |
| Review frequency | Quarterly |
| Approval authority | Transformation Governance Board |
| Version | 2.0 |
| Classification | Public |

Changes to this guide should be reviewed when governance layers, decision authorities, organizational structures, reporting standards, KPI thresholds, or regulatory obligations materially change.
