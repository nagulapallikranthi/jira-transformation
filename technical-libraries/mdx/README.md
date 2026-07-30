# Enterprise MDX Library for EazyBI

This library contains reusable MDX patterns for Jira and JSM analytics in EazyBI. The examples are organization-neutral and use placeholder measure and hierarchy names that must be mapped to the target cube.

## Scope

- rolling time windows;
- sprint commitment, completion, rollover, and predictability;
- SLA and aging analytics;
- realized-versus-pipeline cost reporting;
- cumulative and trend measures;
- executive RAG indicators;
- validation and performance practices.

## General rules

1. Confirm the measure grain before applying time aggregation.
2. Use the hierarchy that actually participates in the report context.
3. Distinguish issue creation, resolution, transition, sprint, and snapshot dates.
4. Avoid summing already cumulative measures.
5. Return `NULL` rather than zero when no valid population exists.
6. Test calculations against a small, known Jira cohort before publishing.

## Rolling 12-month signed cost measure

Use this when the source cost increase should always display as a negative value.

```mdx
-Abs(
  Sum(
    LastPeriods(
      12,
      [Time].CurrentHierarchyMember
    ),
    [Measures].[Cost Increase (Clean)]
  )
)
```

Important: this works only when the report is evaluated at a monthly member. If the current time member is a day, quarter, year, or default member, the selected periods may not represent the intended 12 calendar months.

## Rolling 12 completed months

```mdx
Sum(
  Tail(
    Filter(
      [Time].[Month].Members,
      [Time].CurrentMember.StartDate >=
        DateAdd('m', -12, Now())
      AND
      [Time].CurrentMember.StartDate <
        DateSerial(Year(Now()), Month(Now()), 1)
    ),
    12
  ),
  [Measures].[Issues resolved]
)
```

Use a date-driven filter when the report context may not reliably point to the latest month.

## Realized cost savings

```mdx
Sum(
  Filter(
    Descendants([Issue].CurrentHierarchyMember, [Issue].[Issue]),
    [Measures].[Issues resolved] > 0
    AND
    CoalesceEmpty([Measures].[Cost Saved], 0) > 0
  ),
  [Measures].[Cost Saved]
)
```

## Pipeline cost savings

```mdx
Sum(
  Filter(
    Descendants([Issue].CurrentHierarchyMember, [Issue].[Issue]),
    [Measures].[Issues created] > 0
    AND
    [Measures].[Issues resolved] = 0
    AND
    CoalesceEmpty([Measures].[Cost Saved], 0) > 0
  ),
  [Measures].[Cost Saved]
)
```

## Realized-versus-pipeline total

```mdx
CoalesceEmpty([Measures].[Realized Cost Savings], 0)
+
CoalesceEmpty([Measures].[Pipeline Cost Savings], 0)
```

Keep realized and pipeline measures separate in the semantic definition even when a combined total is displayed.

## Sprint commitment reliability

```mdx
CASE WHEN
  [Measures].[Sprint committed story points] > 0
THEN
  [Measures].[Sprint completed committed story points]
  /
  [Measures].[Sprint committed story points]
END
```

Format as a percentage.

## Scope change rate

```mdx
CASE WHEN
  [Measures].[Sprint committed story points] > 0
THEN
  Abs(
    [Measures].[Sprint final story points]
    -
    [Measures].[Sprint committed story points]
  )
  /
  [Measures].[Sprint committed story points]
END
```

This requires historical sprint commitment data. Current sprint membership alone cannot prove what was committed at sprint start.

## Rollover rate

```mdx
CASE WHEN
  [Measures].[Sprint committed issues] > 0
THEN
  [Measures].[Sprint committed issues not completed]
  /
  [Measures].[Sprint committed issues]
END
```

## SLA compliance

```mdx
CASE WHEN
  [Measures].[Completed SLA cycles] > 0
THEN
  (
    [Measures].[Completed SLA cycles]
    -
    [Measures].[Breached SLA cycles]
  )
  /
  [Measures].[Completed SLA cycles]
END
```

## Aging band example

```mdx
CASE
WHEN [Measures].[Open issue age days] <= 7 THEN '0-7 days'
WHEN [Measures].[Open issue age days] <= 14 THEN '8-14 days'
WHEN [Measures].[Open issue age days] <= 30 THEN '15-30 days'
WHEN [Measures].[Open issue age days] <= 60 THEN '31-60 days'
ELSE '60+ days'
END
```

For issue counts by band, create separate numeric measures or a calculated member in an age-band dimension rather than relying only on a text result.

## Executive RAG state

```mdx
CASE
WHEN IsEmpty([Measures].[KPI Actual]) THEN 'No Data'
WHEN [Measures].[KPI Actual] >= [Measures].[KPI Green Threshold] THEN 'Green'
WHEN [Measures].[KPI Actual] >= [Measures].[KPI Amber Threshold] THEN 'Amber'
ELSE 'Red'
END
```

Reverse the comparison for KPIs where a lower value is better, such as aging or breach rate.

## Performance guidance

- Prefer native imported measures over repeated issue-level iteration.
- Limit `Descendants()` calculations on large cubes.
- Use issue-level filters only when a pre-aggregated measure cannot meet the requirement.
- Avoid nested `Filter`, `Generate`, and `NonEmptyCrossJoin` patterns without testing.
- Separate display measures from reusable base measures.
- Document whether the formula is evaluated by issue, sprint, time, assignee, or SLA cycle.

## Validation checklist

- [ ] Monthly totals reconcile with a controlled Jira cohort.
- [ ] Open and resolved populations are mutually understood.
- [ ] Empty data is not silently converted into a misleading zero.
- [ ] Rolling windows contain the intended members.
- [ ] Current and historical sprint measures are not mixed.
- [ ] Cost values are signed consistently.
- [ ] Formula performance is tested at enterprise cube scale.

## Planned modules

- `time-intelligence.md`
- `sprint-analytics.md`
- `sla-and-aging.md`
- `finops-and-cost.md`
- `portfolio-and-executive.md`
- `forecasting.md`
- `performance-optimization.md`
