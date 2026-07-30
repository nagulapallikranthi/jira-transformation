# Enterprise Metrics and Dashboard Library

## A Decision-Centred Reference Framework for Jira, JSM, Engineering, Operations, Portfolio, Transformation, and FinOps Analytics

> **Visual companion:** [Open the interactive Enterprise Analytics Dashboard Gallery](../dashboard-gallery/index.html)

## Executive Summary

Enterprise reporting often fails because organizations build charts before agreeing on the decisions those charts must support. The result is a large collection of dashboards that display activity but do not improve accountability, predictability, risk management, or executive decision-making.

This library provides a reusable framework for designing enterprise metrics and dashboards across:

- portfolio and program governance;
- engineering delivery and sprint execution;
- Jira Service Management and operational performance;
- Jira transformation and platform governance;
- financial and cost optimization;
- automation and AI-assisted program operations.

The objective is not to create more dashboards. It is to create a trusted and governed decision system.

Every recommended dashboard must answer five questions:

1. What decision does this dashboard support?
2. Who is responsible for acting on the insight?
3. What is the authoritative metric definition?
4. What drill-down path explains the result?
5. What action is expected when a threshold is breached?

## How to Use This Library

The framework has four connected layers.

### Layer 1 — Executive Questions

Start with the questions leadership needs answered.

Examples:

- Are strategic programs delivering expected outcomes?
- Can current delivery commitments be trusted?
- Where is operational risk increasing?
- Which programs require executive intervention?
- Are financial benefits being realized?
- Is the Jira operating model becoming simpler and more governed?

### Layer 2 — Standardized Metrics

Each business question is connected to formally governed metrics. Every metric should have:

- a unique name;
- a business purpose;
- an approved formula;
- an authoritative data source;
- an accountable owner;
- a refresh cadence;
- a target and warning thresholds;
- documented exclusions;
- drill-down dimensions;
- interpretation guidance;
- an expected action.

### Layer 3 — Audience-Specific Dashboards

A CIO should not receive the same view as a Jira administrator. The underlying metric may be the same, but its aggregation, visual, narrative, and expected action should differ by audience.

### Layer 4 — Action and Governance

A metric becomes valuable only when it changes a decision or behavior. Every dashboard should define:

- who reviews it;
- how frequently it is reviewed;
- which threshold requires action;
- who owns corrective action;
- how decisions are recorded;
- how the metric definition is governed.

## Dashboard Design Principles

### Design for Decisions, Not Data Availability

Do not create a report simply because a field exists. Start with the decision.

Bad starting point:

> We have priority, status, assignee, and story points. What charts can we create?

Better starting point:

> Which commitments are at risk, why are they at risk, and who must intervene?

### Move from Summary to Explanation

Every dashboard should follow this hierarchy:

```text
Signal
  ↓
Trend
  ↓
Segment
  ↓
Root cause
  ↓
Action
  ↓
Underlying evidence
```

### Separate Health from Volume

High volume does not necessarily indicate good performance. More completed tickets may reflect increased incident volume. High velocity may result from estimation inflation. Low backlog may result from premature closure.

Dashboards should combine volume, quality, risk, and outcome measures.

### Show Trends, Not Isolated Values

Important KPIs should include at least one of the following:

- prior-period comparison;
- rolling average;
- target line;
- peer-team comparison;
- year-over-year comparison;
- forecast;
- variance explanation.

### Use RAG Carefully

Recommended interpretation:

- **Green:** within target and stable;
- **Amber:** outside tolerance or deteriorating;
- **Red:** materially outside target or requiring intervention;
- **Grey:** insufficient or unreliable data.

Grey is essential. Unreliable data should never be reported as green.

### Preserve Metric Integrity

One metric must have one approved definition. Dashboards may aggregate it differently, but the underlying calculation must remain consistent.

### Balance Leading and Lagging Indicators

Lagging indicators show what has happened. Leading indicators show that an outcome may deteriorate.

A strong dashboard combines both.

## Dashboard Portfolio

The initial portfolio contains five flagship dashboards.

| Dashboard | Primary Audience | Primary Decision | Interactive View |
|---|---|---|---|
| Executive Portfolio Dashboard | CIO, CTO, VP, business leadership | Where is executive attention required? | [Open](../dashboard-gallery/index.html#executive) |
| Sprint Governance Dashboard | PMO, engineering managers, delivery leads | Can current commitments be trusted? | [Open](../dashboard-gallery/index.html#sprint) |
| JSM SLA and Operations Dashboard | Operations leaders, service owners | Where is service performance deteriorating? | [Open](../dashboard-gallery/index.html#jsm) |
| Transformation Governance Dashboard | Transformation board, platform leadership | Is the operating model becoming simpler and sustainable? | [Open](../dashboard-gallery/index.html#transformation) |
| FinOps and Cost Optimization Dashboard | CIO, Finance, CloudOps, FinOps | Are savings and cost avoidance being realized? | [Open](../dashboard-gallery/index.html#finops) |

---

# Dashboard 1 — Executive Portfolio Dashboard

## Purpose

Provide senior leadership with a concise view of portfolio health, strategic delivery, major risks, financial outcomes, and decisions requiring intervention.

## Decisions Supported

- Which programs require intervention?
- Which strategic commitments are unlikely to be delivered?
- Where are major dependencies unresolved?
- Which business outcomes are at risk?
- Are delivery, operational, and financial trends improving?
- What decisions are waiting for executive action?

## Core Metrics

### Portfolio Health Index

A weighted view of delivery, risk, financial, operational, and strategic health.

Illustrative model:

```text
Portfolio Health Index =
Delivery Health × 30%
+ Risk Health × 25%
+ Milestone Health × 20%
+ Financial Health × 15%
+ Operational Health × 10%
```

Weighting should be adapted to organizational priorities.

### Delivery Predictability

Measures how reliably committed portfolio outcomes are delivered.

### Enterprise Risk Exposure

Shows the number and weighted severity of unresolved strategic risks.

### Benefit Realization

Shows realized value against the approved business case.

### Milestone Confidence

Shows the percentage of milestones forecast to complete within approved date tolerance.

## Recommended Visuals

| Visual | Purpose |
|---|---|
| KPI cards | Immediate executive signal |
| Twelve-month health trend | Show direction and stability |
| Program health matrix | Compare strategic programs |
| Risk exposure heatmap | Identify concentration |
| Milestone confidence chart | Show delivery risk |
| Benefit realization waterfall | Compare committed and realized value |
| Executive decision queue | Highlight blocked governance decisions |

## Drill-Down

```text
Portfolio → Program → Workstream → Epic → Risk, dependency, or milestone → Jira or source record
```

## Example Executive Narrative

> Portfolio health declined during the reporting period. The primary contributors were milestone slippage in two platform programs and increased dependency exposure in the revenue portfolio. Financial realization remains on track, but a material portion of forecast value depends on decisions due within the next fourteen days.

---

# Dashboard 2 — Sprint Governance Dashboard

## Purpose

Measure whether teams are making realistic commitments, protecting sprint scope, resolving blockers, and improving delivery reliability.

The purpose is not to compare teams using velocity. It is to evaluate the health of the delivery system.

## Decisions Supported

- Can sprint commitments be trusted?
- Which teams have recurring rollover?
- Is scope being added after sprint start?
- Are dependencies affecting completion?
- Is work entering the sprint without sufficient readiness?
- Are estimates changing after commitment?
- Is capacity aligned to planned demand?

## Core Metrics

### Sprint Predictability

```text
Sprint Predictability =
Completed Committed Story Points
÷ Story Points Committed at Sprint Start
× 100
```

Illustrative target range:

```text
95% to 105%
```

Values consistently above 105% may indicate scope additions, weak baselines, or estimation issues. Values below 95% may indicate overcommitment, interrupt demand, unresolved dependencies, poor readiness, or capacity loss.

### Scope Stability

```text
Scope Stability =
1 - Absolute Scope Change ÷ Original Sprint Commitment
```

Additions and removals should be shown separately. Net scope change can hide significant disruption.

### Rollover Rate

```text
Rollover Rate =
Committed Items Not Completed ÷ Total Committed Items × 100
```

Both story-point and item-count views should be available.

### Blocked Work Ratio

```text
Blocked Work Ratio =
Time Work Remained Blocked ÷ Total Active Work Time × 100
```

### Readiness Compliance

Percentage of work entering the sprint that met the approved Definition of Ready.

### Estimation Change Rate

Percentage of items whose estimates changed after sprint commitment.

### Unplanned Work Ratio

Work added after sprint start that was not part of the approved commitment.

## Anti-Patterns

Do not:

- rank teams using velocity;
- compare story points across teams as standardized units;
- hide removed scope;
- recalculate the sprint baseline after scope changes;
- classify rollover as complete in the original sprint;
- count cancelled work as delivered;
- ignore work completed without an estimate;
- measure only the final sprint state without preserving history.

---

# Dashboard 3 — JSM SLA and Operations Dashboard

## Purpose

Provide operational leaders with an accurate view of service demand, SLA performance, backlog health, incident patterns, and corrective actions.

The dashboard must separate fast acknowledgement from effective resolution.

## Decisions Supported

- Where are SLA breaches concentrated?
- Which services or teams are experiencing demand pressure?
- Are tickets prioritized correctly?
- Which open issues are at risk of breaching?
- Where is resolution delay occurring?
- Are pause statuses used correctly?
- Which categories generate repeated incidents?
- Are aging tickets being actively resolved?

## Core Metrics

### First Response SLA Compliance

```text
Tickets Meeting Response SLA
÷ Tickets with Completed Response SLA Cycle
× 100
```

### Resolution SLA Compliance

```text
Tickets Resolved Within Resolution SLA
÷ Tickets with Completed Resolution SLA Cycle
× 100
```

### Amber SLA Risk

Number of open tickets whose remaining SLA time is below the approved warning threshold.

### Backlog Aging

Recommended measures:

- median age;
- 75th percentile;
- 90th percentile;
- oldest open ticket;
- percentage older than target;
- age by status, assignee, and service.

### Net Flow

```text
Net Flow = Tickets Created - Tickets Resolved
```

Positive net flow means the backlog is increasing.

### Reopen Rate

```text
Reopen Rate = Reopened Tickets ÷ Resolved Tickets × 100
```

### Misprioritization Rate

Percentage of tickets whose priority changed after triage.

### Pause Status Integrity

Measures whether SLA pause statuses are appropriately used and supported by valid dependency reasons.

### Assignment Latency

Time between ticket creation and assignment to the accountable resolver group.

---

# Dashboard 4 — Transformation Governance Dashboard

## Purpose

Measure whether Jira transformation is producing a simpler, standardized, governed, and scalable operating model.

Transformation success should not be measured only by migration completion. It should evaluate whether complexity, exceptions, and governance debt are being reduced.

## Decisions Supported

- Is workflow standardization improving?
- Are custom fields being reduced or continuing to grow?
- Are teams adopting the target operating model?
- Are governance exceptions being resolved?
- Is automation reliable?
- Are permissions and schemes becoming simpler?
- Is data quality improving?
- Are users bypassing standards?

## Core Metrics

### Standards Adoption

```text
Projects Using Approved Standard
÷ Projects in Transformation Scope
× 100
```

Standards may include workflow, field configuration, permission model, issue-type scheme, naming convention, reporting model, and automation standards.

### Workflow Reuse Ratio

```text
Projects Using Shared Workflows ÷ Total In-Scope Projects × 100
```

### Custom Field Growth

```text
New Custom Fields Created - Custom Fields Retired
```

Report both net growth and gross creation.

### Field Utilization

Percentage of active custom fields with meaningful usage during the selected period.

### Data Quality Score

Composite measure covering mandatory-field completion, invalid values, duplicates, stale records, inconsistent classifications, ownership gaps, missing resolution, and incomplete hierarchy.

### Governance Exception Aging

Age and exposure of approved deviations from the target standard.

### Automation Reliability

```text
Successful Automation Executions
÷ Total Automation Executions
× 100
```

Supplement with failure count, retry rate, latency, disabled rules, execution-limit breaches, and duplicate action rate.

### Configuration Debt

Weighted score covering duplicate schemes, inactive fields, unused statuses, one-off workflows, unmanaged automations, unsupported integrations, and undocumented exceptions.

---

# Dashboard 5 — FinOps and Cost Optimization Dashboard

## Purpose

Provide visibility into realized savings, forecast savings, cost avoidance, cost increases, mitigation activity, and the cost-optimization pipeline.

The dashboard must distinguish between identified opportunity, approved initiative, in-progress work, validated saving, realized saving, recurring saving, one-time saving, cost avoidance, cost increase, and cost increase mitigated.

## Decisions Supported

- How much financial value has been realized?
- How much remains in the pipeline?
- Which initiatives are delayed?
- Which providers or services contribute most to savings?
- Where are cost increases occurring?
- Which savings have been validated?
- Are opportunities converting into outcomes?
- What is the annualized impact?

## Core Metrics

### Realized Savings

Savings implemented, validated, and observed within the approved measurement period.

### Annualized Savings

```text
Annualized Savings = Validated Monthly Recurring Saving × 12
```

One-time savings must not be annualized.

### Pipeline Value

Expected value from identified or approved initiatives that has not yet been realized. Segment by confidence and stage.

### Cost Avoidance

A future cost that would likely have occurred but was prevented through an approved intervention. Report separately from realized savings.

### Cost Increase

New or increased expenditure observed during the reporting period.

### Cost Increase Mitigated

The portion of a forecast cost increase reduced through intervention.

### Opportunity Conversion Rate

```text
Realized Initiatives ÷ Validated Opportunities × 100
```

### Value Realization Cycle Time

Time from opportunity identification to validated financial realization.

### Stale Pipeline Value

Value associated with initiatives that have not progressed within the approved aging threshold.

---

# KPI Definition Standard

Every KPI should use the following structure.

## KPI Name

Use one clear and stable name.

## Business Question

State the decision the KPI supports.

## Definition

Explain exactly what the KPI measures.

## Formula

Provide the approved calculation.

## Unit

Examples: percentage, count, currency, hours, days, ratio, score, or story points.

## Indicator Type

- leading;
- lagging;
- diagnostic;
- control;
- outcome.

## Data Source

Examples: Jira issue history, sprint history, JSM SLA data, Atlassian Data Lake, Git, CI/CD platform, cloud billing, CMDB, finance validation, or automation audit logs.

## Data Owner

Function accountable for data quality.

## Metric Owner

Function accountable for definition and interpretation.

## Refresh Cadence

Near real-time, hourly, daily, weekly, monthly, or quarterly.

## Target and RAG Thresholds

Targets and thresholds must be published and version-controlled.

## Exclusions

Examples include cancelled work, test projects, archived teams, duplicate incidents, withdrawn opportunities, and training records.

## Drill-Down Dimensions

Examples include business unit, portfolio, program, team, service, priority, provider, functional group, environment, owner, sprint, and release.

## Recommended Visual

Specify the primary visual and appropriate supporting visual.

## Interpretation

Explain what improvement and deterioration mean.

## Common Misinterpretations

Document how the metric can be misunderstood or manipulated.

## Expected Action

Specify what leaders should do when the metric breaches target.

# Dashboard-to-Metric Mapping

| Metric | Executive | Sprint | JSM | Transformation | FinOps |
|---|---:|---:|---:|---:|---:|
| Portfolio Health | Primary |  |  | Supporting | Supporting |
| Delivery Predictability | Primary | Primary |  |  |  |
| Milestone Confidence | Primary | Supporting |  | Supporting | Supporting |
| Risk Exposure | Primary | Supporting | Supporting | Supporting | Supporting |
| Sprint Predictability | Supporting | Primary |  |  |  |
| Scope Stability |  | Primary |  |  |  |
| Rollover Rate |  | Primary |  |  |  |
| Response SLA | Supporting |  | Primary |  |  |
| Resolution SLA | Supporting |  | Primary |  |  |
| Backlog Aging | Supporting | Supporting | Primary | Supporting | Supporting |
| Standards Adoption | Supporting |  |  | Primary |  |
| Workflow Reuse |  |  |  | Primary |  |
| Automation Reliability | Supporting | Supporting | Supporting | Primary |  |
| Realized Savings | Primary |  |  | Supporting | Primary |
| Pipeline Value | Supporting |  |  |  | Primary |
| Cost Avoidance | Primary |  |  |  | Primary |
| Value Realization Time | Supporting |  |  | Supporting | Primary |

# Dashboard Build Specification

Every dashboard should have an implementation specification containing:

## Audience and Purpose

Who uses the dashboard and what decisions it supports.

## Visual Inventory

Every KPI card, chart, table, matrix, filter, narrative, and action queue.

## Data Model

Illustrative model:

```text
Fact Issues
Fact Issue Status History
Fact Sprints
Fact SLA Cycles
Fact Risks
Fact Milestones
Fact Financial Benefits
Fact Automation Executions

Dim Date
Dim Project
Dim Program
Dim Team
Dim Service
Dim Priority
Dim Status
Dim Owner
Dim Cloud Provider
Dim Environment
Dim Business Unit
```

## Data Quality Rules

Examples:

- completed issues must have a resolution;
- sprint commitment baselines must be preserved;
- reopened issues must retain prior resolution history;
- financial values require a validation state;
- transitions must have valid timestamps;
- owner fields must map to an accountable group;
- cancelled records must not be treated as delivered outcomes.

## Calculation Layer

Dashboards should reference approved KPI definitions rather than independently recreating logic.

## Security Model

Recommended controls include row-level access, business-unit restrictions, financial-data restrictions, confidential-program filtering, audit logging, and controlled export permissions.

## Refresh and Reliability

Each dashboard should display:

- last successful refresh;
- data coverage period;
- data-quality status;
- missing-source warning;
- partial-data warning;
- metric-definition version.

# AI-Assisted Dashboard Capabilities

AI should augment analysis rather than replace metric governance.

Recommended capabilities:

- trend summarization;
- anomaly detection;
- evidence-backed root-cause suggestions;
- executive narrative generation;
- risk prediction;
- data-quality detection.

AI-generated insights must reference supporting metrics, identify the reporting period, distinguish fact from inference, disclose data gaps, avoid fabricated root causes, permit human review, and preserve accountability.

# Dashboard Review Cadence

| Dashboard | Recommended Cadence | Forum |
|---|---|---|
| Executive Portfolio | Monthly, with weekly exception review | Executive portfolio review |
| Sprint Governance | Every sprint and mid-sprint | Sprint governance review |
| JSM SLA and Operations | Daily operations and weekly leadership review | Operations review |
| Transformation Governance | Biweekly or monthly | Transformation steering committee |
| FinOps and Cost Optimization | Monthly, with weekly pipeline review | FinOps governance forum |

# Dashboard Quality Checklist

Before publication, confirm that:

- the audience is clearly defined;
- every visual supports a decision;
- metric definitions are approved;
- calculations are consistent across tools;
- filters are meaningful;
- drill-down paths work;
- targets are visible;
- trends are included;
- leading and lagging indicators are balanced;
- data-quality status is visible;
- illustrative data is clearly identified;
- confidential information is protected;
- expected actions are documented;
- ownership is assigned;
- refresh timing is transparent;
- the dashboard has been tested with intended users.

# What Good Looks Like

A mature enterprise dashboard does not merely report that a metric is red. It explains:

- what changed;
- when it changed;
- where the issue is concentrated;
- what is driving the issue;
- who owns the next action;
- when intervention is required;
- how to reach the underlying evidence.

The best dashboard is not the one with the most visuals. It is the one that helps the right person recognize a problem early, understand its cause, and make a better decision.
