# Technical Libraries

This area contains reusable, organization-neutral implementation examples that translate the framework into working analytics, integration, and automation patterns.

## Available now

- [Enterprise JQL Reference Library](jql/README.md) — categorized enterprise query patterns for executive reporting, portfolio, sprint governance, JSM, CloudOps, DevOps, FinOps, and data quality.
- [Baseline JQL Reference Library](jql/Baseline-JQL-Library.md) — compact backlog, aging, sprint, SLA, cost, and governance cohorts with validation guidance.
- [Power BI Implementation Guide](../docs/Power-BI-Implementation-Guide.md) — architecture, semantic model, refresh, security, performance, reconciliation, and deployment guidance.
- [Governed KPI Catalogue](../analytics/KPI-Catalogue.md) — business definitions that technical measures must implement.

## Enterprise JQL modules

| Module | Coverage |
|---|---|
| [Executive and Portfolio](jql/executive-and-portfolio.md) | Active portfolio, milestones, strategic risk, dependencies, ownership, and benefits |
| [Sprint and Delivery Governance](jql/sprint-and-delivery.md) | Sprint state, estimation, blockers, aging, rollover, backlog, and release readiness |
| [JSM and SLA Operations](jql/jsm-and-sla.md) | Incidents, requests, changes, SLA cohorts, priority, aging, and operational hygiene |
| [CloudOps, DevOps, and FinOps](jql/cloudops-devops-finops.md) | Reliability, security, automation, release, cloud routing, and financial pipeline |
| [Data Quality and Governance](jql/data-quality-and-governance.md) | Missing metadata, invalid states, ownership gaps, stale work, and control exceptions |

## Library roadmap

| Library | Baseline purpose | Status |
|---|---|---|
| `jql/` | Issue selection, cohort definitions, governance checks, and operational queues | Expanded usable baseline |
| `sql/` | Normalized analytics model, history, snapshots, and reconciliation | Next implementation batch |
| `mdx/` | EazyBI rolling periods, realized-versus-pipeline logic, and trends | Next implementation batch |
| `dax/` | Power BI measures, targets, RAG states, and executive narratives | Next implementation batch |
| `rest-api/` | Authenticated extraction, pagination, rate limits, retries, and write-back controls | Planned |
| `automation/` | Jira automation patterns, idempotency, audit, and guardrails | Planned |
| `python/` | Validation, transformation, synthetic-data generation, and quality checks | Planned |

## Example standard

Every example must include:

1. business purpose;
2. assumptions and prerequisites;
3. complete example using placeholders;
4. expected output or result shape;
5. performance, security, and scale considerations;
6. validation and failure scenarios;
7. related dashboard or metric;
8. limitations and situations requiring history, snapshots, or another technology.

## Safety standard

Examples must never contain live URLs, credentials, tokens, field IDs, project keys, account IDs, personal information, copied organizational data, or proprietary configuration. Write-back examples require explicit approval boundaries, least privilege, idempotency, audit logging, and recovery behavior.
