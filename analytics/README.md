# Enterprise Analytics Library

This area will contain implementation-ready specifications for enterprise Jira, JSM, delivery, DevOps, FinOps, governance, and transformation reporting.

## Domains

| Domain | Primary decisions |
|---|---|
| Executive portfolio | Strategic health, intervention, investment, and benefits |
| Program and delivery | Predictability, dependencies, scope, risk, and milestones |
| Sprint and flow | Commitment reliability, throughput, aging, blockers, and quality |
| JSM operations | Demand, SLA, backlog, incident, request, and change performance |
| DevOps | Deployment frequency, lead time, failure rate, and recovery |
| FinOps | Realized savings, pipeline, cost avoidance, and cost growth |
| Transformation | Adoption, standardization, data quality, governance, and automation |
| AI insights | Explainable summaries, anomalies, forecasts, and recommended actions |

## Required specification for every dashboard

- purpose and audience;
- decisions supported;
- KPI definitions and formulas;
- source objects and required fields;
- filters and drill-downs;
- target, threshold, and RAG logic;
- refresh and reconciliation controls;
- interpretation and expected actions;
- privacy and confidentiality constraints;
- validation scenarios.

The initial interactive concepts are available in `dashboard-gallery/`. Governed metric definitions are maintained in `docs/Metrics-Library.md`.
