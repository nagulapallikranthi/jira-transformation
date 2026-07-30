# Governed Enterprise KPI Catalogue

This catalogue defines the minimum Baseline v1.0 metric set for enterprise Jira, Jira Service Management, delivery, DevOps, FinOps, and transformation reporting. Each KPI must be reconciled to source data before executive use.

## KPI governance fields

Every implemented KPI must record: metric owner, business purpose, formula, unit, grain, source objects, required fields, exclusions, target, thresholds, refresh cadence, reconciliation method, drill-down path, and approved interpretation.

## Executive and portfolio metrics

| KPI | Definition | Primary decision |
|---|---|---|
| Portfolio health index | Weighted score across schedule, scope, risk, cost, quality, and dependency health | Where leadership intervention is required |
| Initiatives on track | Percentage of active initiatives within approved schedule, scope, and risk tolerances | Whether commitments remain credible |
| Milestone confidence | Percentage of near-term milestones forecast to complete by target date | Where delivery dates require challenge or support |
| Benefits realized | Confirmed benefits delivered divided by approved benefits target | Whether transformation value is materializing |
| Benefits at risk | Approved benefits linked to delayed, blocked, or high-risk initiatives | Which value commitments require protection |
| Strategic alignment coverage | Percentage of active initiatives mapped to an approved objective | Whether investment is traceable to strategy |
| Executive decision latency | Median time from escalation to recorded decision | Whether governance is enabling delivery |
| Critical dependency exposure | Count of unresolved critical dependencies due within the reporting horizon | Where cross-team intervention is needed |

## Program and delivery metrics

| KPI | Definition | Primary decision |
|---|---|---|
| Plan reliability | Completed planned scope divided by final committed scope | How reliable delivery commitments are |
| Scope stability | One minus added and removed scope divided by committed scope | Whether planning discipline is effective |
| Milestone adherence | Milestones completed on or before baseline date divided by completed milestones | Whether plans are being met |
| Dependency aging | Median age of unresolved dependencies | Whether coordination risk is accumulating |
| Risk exposure | Sum of probability multiplied by impact for active risks | Where mitigation investment is required |
| Issue aging | Median age of open delivery issues | Whether work is flowing or stagnating |
| Forecast variance | Difference between forecast and baseline completion date | Whether the delivery forecast is deteriorating |
| Delivery confidence | Governed RAG assessment based on evidence, trends, and unresolved exposure | Whether leadership should trust the current forecast |

## Sprint and flow metrics

| KPI | Definition | Primary decision |
|---|---|---|
| Sprint commitment reliability | Completed committed story points divided by committed story points | Whether sprint commitments are credible |
| Sprint completion rate | Completed issues divided by final sprint issue count | Whether teams are finishing planned work |
| Scope added after start | Work added after sprint start divided by final sprint scope | Whether interrupts or planning gaps are significant |
| Rollover rate | Incomplete sprint items carried forward divided by final sprint scope | Whether work slicing and execution need improvement |
| Throughput | Number of work items completed per period | How much work the system delivers |
| Cycle time | Median elapsed time from active work start to completion | How quickly work moves through delivery |
| Work item age | Current age of open in-progress work | Which items are becoming flow risks |
| Blocked-time ratio | Blocked duration divided by total cycle time | How much delay is dependency-driven |
| Work in progress | Count of items currently in active workflow states | Whether teams are overloaded |
| Estimation accuracy | Completed effort divided by latest approved estimate | Whether estimates support planning |

## Jira Service Management metrics

| KPI | Definition | Primary decision |
|---|---|---|
| First-response SLA attainment | Requests meeting first-response SLA divided by eligible requests | Whether demand is acknowledged promptly |
| Resolution SLA attainment | Requests meeting resolution SLA divided by eligible resolved requests | Whether service commitments are being met |
| Open backlog | Count of unresolved requests at period end | Whether demand exceeds delivery capacity |
| Backlog growth | Created minus resolved requests during the period | Whether operational debt is increasing |
| Oldest open request | Maximum age of an unresolved eligible request | Whether severe aging is hidden by averages |
| Reopen rate | Reopened requests divided by resolved requests | Whether resolution quality is sufficient |
| Major-incident recurrence | Repeated major incidents linked to the same failure theme | Whether corrective action is effective |
| Mean time to restore | Average restoration duration for eligible incidents | How rapidly service is restored |
| Change success rate | Successful changes divided by completed changes | Whether change controls are effective |
| Emergency change rate | Emergency changes divided by completed changes | Whether planning or platform stability is weak |

## DevOps and platform metrics

| KPI | Definition | Primary decision |
|---|---|---|
| Deployment frequency | Successful production deployments per service and period | Whether value reaches production regularly |
| Lead time for change | Median time from committed change to production deployment | How quickly validated changes reach users |
| Change failure rate | Deployments causing rollback, incident, or remediation divided by deployments | Whether release quality is acceptable |
| Time to restore service | Median time to restore after deployment-related failure | Whether recovery capability is effective |
| Pipeline success rate | Successful pipeline runs divided by completed pipeline runs | Whether delivery automation is reliable |
| Release readiness coverage | Release candidates meeting all mandatory readiness controls | Whether releases are safe to approve |
| Automation coverage | Eligible repeatable controls executed automatically | Where manual risk and effort remain |
| Platform availability | Available service time divided by eligible service time | Whether the platform meets reliability objectives |

## FinOps metrics

| KPI | Definition | Primary decision |
|---|---|---|
| Realized savings | Verified recurring and one-time cost reduction delivered | What financial value has been captured |
| Savings pipeline | Approved but not yet realized savings opportunities | What future value is expected |
| Cost avoidance | Verified increase prevented relative to approved baseline | What growth has been mitigated |
| Cost increase | Confirmed increase in recurring or one-time cost | Where cost pressure is emerging |
| Annualized benefit | Recurring monthly benefit multiplied by twelve, adjusted for effective date | What full-year impact is expected |
| Benefit realization rate | Realized benefit divided by approved opportunity value | Whether opportunities convert into outcomes |
| Opportunity aging | Age of open cost opportunities | Which opportunities require action |
| Forecast-to-actual variance | Difference between approved forecast and realized financial impact | Whether financial planning is accurate |

## Transformation and governance metrics

| KPI | Definition | Primary decision |
|---|---|---|
| Standard workflow adoption | Work items using approved standard workflows divided by eligible work items | Whether standardization is taking hold |
| Mandatory-field completeness | Eligible records containing valid mandatory data | Whether reporting inputs are trustworthy |
| Configuration rationalization | Retired redundant objects divided by approved rationalization scope | Whether complexity is reducing |
| Automation exception rate | Failed or manually overridden automation executions divided by executions | Whether automation remains controlled |
| Governance decision compliance | Changes executed with required recorded approvals | Whether decision controls are followed |
| Data-quality defect rate | Records failing governed validation rules divided by records tested | Whether analytics can be trusted |
| Migration reconciliation pass rate | Reconciliation checks passed divided by checks executed | Whether migrated data is complete and accurate |
| Adoption coverage | Active users or teams following the target operating model | Whether the transformation is embedded |

## Baseline acceptance criteria

The catalogue reaches Baseline v1.0 when every metric selected for a published dashboard has an approved formula, source mapping, threshold, owner, validation case, and reconciliation result. Metrics not meeting this standard must be labelled experimental and excluded from executive scorecards.