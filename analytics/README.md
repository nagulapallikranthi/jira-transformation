# Enterprise Analytics Library

This area contains governed specifications for enterprise Jira, Jira Service Management, delivery, DevOps, FinOps, governance, and transformation reporting.

## Start here

- [Governed Enterprise KPI Catalogue](KPI-Catalogue.md)
- [Dashboard Specification Standard](Dashboard-Specification-Standard.md)
- [Metrics and Dashboard Library](../docs/Metrics-Library.md)
- [Power BI Implementation Guide](../docs/Power-BI-Implementation-Guide.md)
- [Interactive Dashboard Gallery](../dashboard-gallery/)

## Domains

| Domain | Primary decisions | Baseline coverage |
|---|---|---|
| Executive portfolio | Strategic health, intervention, investment, and benefits | Governed KPI set established |
| Program and delivery | Predictability, dependencies, scope, risk, and milestones | Governed KPI set established |
| Sprint and flow | Commitment reliability, throughput, aging, blockers, and quality | Governed KPI set established |
| JSM operations | Demand, SLA, backlog, incident, request, and change performance | Governed KPI set established |
| DevOps | Deployment frequency, lead time, failure rate, and recovery | Governed KPI set established |
| FinOps | Realized savings, pipeline, cost avoidance, and cost growth | Governed KPI set established |
| Transformation | Adoption, standardization, data quality, governance, and automation | Governed KPI set established |
| AI insights | Explainable summaries, anomalies, forecasts, and recommended actions | Principles established; implementation examples planned |

## Required specification for every dashboard

Every dashboard must define:

- purpose, audience, and decisions supported;
- included and excluded scope;
- KPI definitions, formulas, and owners;
- source objects, required fields, and grain;
- filters, drill paths, and default views;
- targets, thresholds, RAG, and missing-data behavior;
- refresh, freshness, and reconciliation controls;
- security, export, and confidentiality constraints;
- interpretation and expected management actions;
- positive, negative, boundary, missing-data, and scale validation scenarios.

## Publication rule

A dashboard may be labelled **governed** only when all published measures exist in the KPI catalogue, source totals reconcile within approved tolerance, thresholds are approved, data freshness is visible, and business, data, and technical ownership is recorded. Otherwise it must be labelled **concept** or **experimental**.