# Enterprise DAX Library for Jira Analytics

This library provides reusable Power BI DAX patterns for executive, portfolio, sprint, JSM, CloudOps, DevOps, and FinOps reporting.

The measures assume a governed semantic model with a proper date table and clearly defined relationships. Rename tables and columns to match the implementation.

## Required model foundations

- a marked date table named `DimDate`;
- a current-state issue fact for operational reporting;
- historical snapshot or event facts for trends and scope-change analysis;
- conformed project, team, status, priority, sprint, and user dimensions;
- explicit KPI targets stored in a governed target table.

## Core issue measures

```DAX
Issues =
DISTINCTCOUNT ( FactIssueCurrent[IssueKey] )
```

```DAX
Open Issues =
CALCULATE (
    [Issues],
    FactIssueCurrent[StatusCategory] <> "Done"
)
```

```DAX
Resolved Issues =
CALCULATE (
    [Issues],
    FactIssueCurrent[StatusCategory] = "Done"
)
```

## Created and resolved flow

```DAX
Issues Created =
CALCULATE (
    DISTINCTCOUNT ( FactIssueCurrent[IssueKey] ),
    USERELATIONSHIP ( DimDate[Date], FactIssueCurrent[CreatedDate] )
)
```

```DAX
Issues Resolved =
CALCULATE (
    DISTINCTCOUNT ( FactIssueCurrent[IssueKey] ),
    USERELATIONSHIP ( DimDate[Date], FactIssueCurrent[ResolvedDate] )
)
```

```DAX
Net Flow =
[Issues Created] - [Issues Resolved]
```

A positive net flow means demand exceeded throughput for the selected period.

## Rolling 12 months

```DAX
Issues Resolved R12M =
CALCULATE (
    [Issues Resolved],
    DATESINPERIOD (
        DimDate[Date],
        MAX ( DimDate[Date] ),
        -12,
        MONTH
    )
)
```

```DAX
Cost Increase R12M Signed =
- ABS (
    CALCULATE (
        SUM ( FactCostOutcome[CostIncrease] ),
        DATESINPERIOD (
            DimDate[Date],
            MAX ( DimDate[Date] ),
            -12,
            MONTH
        )
    )
)
```

## SLA measures

```DAX
Completed SLA Cycles =
CALCULATE (
    COUNTROWS ( FactSLACycle ),
    FactSLACycle[CycleStatus] = "Completed"
)
```

```DAX
Breached SLA Cycles =
CALCULATE (
    COUNTROWS ( FactSLACycle ),
    FactSLACycle[CycleStatus] = "Completed",
    FactSLACycle[IsBreached] = TRUE ()
)
```

```DAX
SLA Compliance % =
DIVIDE (
    [Completed SLA Cycles] - [Breached SLA Cycles],
    [Completed SLA Cycles]
)
```

## Sprint predictability

```DAX
Committed Story Points =
SUM ( FactSprintCommitment[CommittedStoryPoints] )
```

```DAX
Completed Committed Story Points =
SUM ( FactSprintCommitment[CompletedCommittedStoryPoints] )
```

```DAX
Sprint Predictability % =
DIVIDE (
    [Completed Committed Story Points],
    [Committed Story Points]
)
```

## Scope volatility

```DAX
Scope Added Story Points =
SUM ( FactSprintCommitment[AddedAfterStartStoryPoints] )
```

```DAX
Scope Removed Story Points =
SUM ( FactSprintCommitment[RemovedAfterStartStoryPoints] )
```

```DAX
Scope Volatility % =
DIVIDE (
    ABS ( [Scope Added Story Points] )
        + ABS ( [Scope Removed Story Points] ),
    [Committed Story Points]
)
```

This measure requires sprint-start baselines or event history. It must not be calculated from current sprint membership alone.

## Cost analytics

```DAX
Realized Savings =
CALCULATE (
    SUM ( FactCostOutcome[CostSaved] ),
    FactCostOutcome[OutcomeState] = "Realized"
)
```

```DAX
Pipeline Savings =
CALCULATE (
    SUM ( FactCostOutcome[CostSaved] ),
    FactCostOutcome[OutcomeState] = "Pipeline"
)
```

```DAX
Savings Realization % =
DIVIDE (
    [Realized Savings],
    [Realized Savings] + [Pipeline Savings]
)
```

## Trend and variance

```DAX
Open Issues Previous Month =
CALCULATE (
    [Open Issues],
    DATEADD ( DimDate[Date], -1, MONTH )
)
```

```DAX
Open Issues MoM Change =
[Open Issues] - [Open Issues Previous Month]
```

```DAX
Open Issues MoM % =
DIVIDE (
    [Open Issues MoM Change],
    [Open Issues Previous Month]
)
```

## Dynamic RAG state

```DAX
KPI RAG State =
VAR Actual = [KPI Actual]
VAR GreenThreshold = [KPI Green Threshold]
VAR AmberThreshold = [KPI Amber Threshold]
RETURN
    SWITCH (
        TRUE (),
        ISBLANK ( Actual ), "No Data",
        Actual >= GreenThreshold, "Green",
        Actual >= AmberThreshold, "Amber",
        "Red"
    )
```

Create a separate lower-is-better pattern for metrics such as breach rate, age, defect leakage, or cost overrun.

## Executive narrative

```DAX
Portfolio Narrative =
VAR OpenCount = [Open Issues]
VAR NetChange = [Net Flow]
VAR Compliance = [SLA Compliance %]
VAR Direction =
    SWITCH (
        TRUE (),
        NetChange > 0, "increased",
        NetChange < 0, "decreased",
        "remained stable"
    )
RETURN
    "Open demand is " & FORMAT ( OpenCount, "#,0" )
        & ". Backlog " & Direction
        & " by " & FORMAT ( ABS ( NetChange ), "#,0" )
        & " items during the selected period. SLA compliance is "
        & FORMAT ( Compliance, "0.0%" ) & "."
```

Narratives should describe governed measures only and should not infer causes unless supporting dimensions or annotations exist.

## Data-quality measures

```DAX
Issues Missing Assignee =
CALCULATE (
    [Issues],
    ISBLANK ( FactIssueCurrent[AssigneeKey] )
)
```

```DAX
Mandatory Field Completeness % =
DIVIDE (
    [Issues] - [Issues Missing Mandatory Fields],
    [Issues]
)
```

## Performance guidance

- Prefer measures over calculated columns for aggregations.
- Keep filter directions single unless a validated use case requires otherwise.
- Use variables to avoid repeated expression evaluation.
- Avoid iterators over large issue tables when a pre-aggregated fact can be used.
- Separate current-state and historical facts.
- Use aggregation tables for high-volume snapshot models.
- Validate every measure at total, project, team, and time-grain levels.

## Validation checklist

- [ ] Date relationships are explicit and tested.
- [ ] Totals reconcile to SQL-governed views.
- [ ] Percentages use a defined and visible denominator.
- [ ] Empty populations return blank where appropriate.
- [ ] Targets are versioned and effective-dated.
- [ ] RAG direction is correct for the KPI.
- [ ] Historical measures use snapshot or event facts.
- [ ] Row-level security does not alter enterprise totals unexpectedly.

## Planned modules

- `time-intelligence.md`
- `sprint-and-delivery.md`
- `jsm-and-sla.md`
- `finops-and-cost.md`
- `portfolio-and-executive.md`
- `narratives-and-dynamic-titles.md`
- `data-quality.md`
- `performance-optimization.md`
