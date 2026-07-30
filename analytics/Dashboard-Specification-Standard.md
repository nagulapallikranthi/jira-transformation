# Dashboard Specification Standard

Every dashboard in this repository must be decision-oriented, traceable to governed metrics, and independently testable.

## Required sections

1. **Purpose** — the business problem and decisions supported.
2. **Audience** — primary, secondary, and operational users.
3. **Scope** — included and excluded projects, work types, periods, and environments.
4. **KPI inventory** — metric name, formula reference, unit, owner, and status.
5. **Visual design** — visual type, purpose, sorting, labels, and accessibility notes.
6. **Filters** — mandatory defaults, optional filters, and cross-filter behavior.
7. **Drill paths** — portfolio to program to team to issue, where applicable.
8. **Data sources** — objects, fields, APIs, snapshots, and refresh cadence.
9. **Thresholds** — target, warning, critical, and not-applicable rules.
10. **Reconciliation** — source totals, variance tolerance, and sign-off owner.
11. **Security** — row-level security, sensitive fields, and export controls.
12. **Actions** — expected management response for each material signal.
13. **Validation** — positive, negative, boundary, missing-data, and scale tests.
14. **Ownership** — product owner, data owner, technical owner, and approver.

## Visual selection guide

| Decision need | Preferred visual | Avoid |
|---|---|---|
| Status against target | KPI card, bullet chart, variance bar | Decorative gauge without thresholds |
| Trend over time | Line chart with target or control limits | Pie chart |
| Composition | Stacked bar or 100% stacked bar | Excessive categories in donut charts |
| Distribution | Histogram, box plot, aging bands | Averages without spread |
| Flow | Cumulative flow, throughput and cycle-time trend | Single snapshot only |
| Prioritization | Ranked bar, heat map, risk matrix | Unsorted tables |
| Dependency analysis | Matrix, network view, aging table | Unqualified dependency counts |

## RAG rules

RAG status must be computed from approved thresholds, not manually selected for convenience. Every RAG measure must define:

- direction of goodness;
- green, amber, and red boundaries;
- treatment of missing or stale data;
- minimum sample size;
- override authority and audit trail;
- reset behavior after the underlying condition improves.

## Data freshness

A dashboard must show its latest successful refresh timestamp and data-health state. Stale, incomplete, or unreconciled data must be visibly marked. Executive pages must not silently display the last good value when the current refresh has failed.

## Reconciliation tolerance

Counts should normally reconcile exactly. Financial values must define an approved rounding and timing tolerance. Any accepted variance must be documented with cause, owner, expiry date, and corrective action.

## Acceptance checklist

- [ ] All published KPIs exist in the governed KPI catalogue.
- [ ] Filters and exclusions are explicit.
- [ ] Every visual supports a named decision.
- [ ] Drill-through preserves context.
- [ ] Missing data cannot be mistaken for good performance.
- [ ] Source totals have been reconciled.
- [ ] Security and export behavior have been reviewed.
- [ ] Accessibility checks cover contrast, labels, keyboard use, and non-color cues.
- [ ] Performance meets the agreed page-load and interaction target.
- [ ] Business, data, and technical owners have approved publication.