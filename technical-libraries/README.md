# Technical Libraries

This area contains reusable, organization-neutral implementation examples that translate the framework into working analytics, integration, automation, and validation patterns.

## Available now

- [Enterprise JQL Reference Library](jql/README.md) — categorized enterprise query patterns for executive reporting, portfolio, sprint governance, JSM, CloudOps, DevOps, FinOps, and data quality.
- [Baseline JQL Reference Library](jql/Baseline-JQL-Library.md) — compact backlog, aging, sprint, SLA, cost, and governance cohorts with validation guidance.
- [Enterprise SQL Analytics Library](sql/README.md) — dimensional modeling, snapshots, incremental loading, reconciliation, data quality, and warehouse design.
- [Enterprise MDX Library](mdx/README.md) — EazyBI rolling periods, sprint metrics, SLA calculations, realized-versus-pipeline cost, RAG states, and optimization guidance.
- [Enterprise DAX Library](dax/README.md) — Power BI measures for issue flow, sprint predictability, SLA, FinOps, trends, executive narratives, and data quality.
- [Enterprise Jira REST API Library](rest-api/README.md) — authentication controls, field minimization, pagination, incremental extraction, retries, write-back, and auditability.
- [Extraction and Pagination Patterns](rest-api/extraction-and-pagination.md) — full loads, watermarks, replay, failure classification, and reconciliation.
- [Enterprise Jira Automation Patterns](automation/README.md) — governed rules for field gates, inheritance, SLA risk, stale work, release workflows, and resolution hygiene.
- [Python Utilities for Jira Analytics](python/README.md) — validation, normalization, deduplication, reconciliation, refresh manifests, and synthetic-data standards.
- [Jira Analytics Quality Gates](python/quality-gates.md) — schema, identifier, duplicate, freshness, semantic, and publication controls.
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

## Library maturity

| Library | Baseline purpose | Status |
|---|---|---|
| `jql/` | Issue selection, cohort definitions, governance checks, and operational queues | Expanded usable baseline |
| `sql/` | Normalized analytics model, history, snapshots, incremental loading, and reconciliation | Foundation published |
| `mdx/` | EazyBI rolling periods, realized-versus-pipeline logic, sprint, SLA, and trends | Foundation published |
| `dax/` | Power BI measures, targets, RAG states, trends, and executive narratives | Foundation published |
| `rest-api/` | Authenticated extraction, pagination, rate limits, retries, and write-back controls | Foundation published |
| `automation/` | Jira automation patterns, idempotency, audit, and guardrails | Foundation published |
| `python/` | Validation, transformation, synthetic-data generation, and quality checks | Foundation published |

## Cross-technology traceability

The technical libraries should be used as connected layers rather than independent snippets:

1. The KPI catalogue defines the governed business meaning.
2. JQL defines a transparent operational cohort where native Jira filtering is sufficient.
3. The REST API layer extracts approved fields using bounded, auditable runs.
4. Python validates, normalizes, reconciles, and creates publication evidence.
5. SQL creates durable current-state, history, snapshot, and reconciliation layers.
6. MDX implements governed measures in EazyBI.
7. DAX implements governed measures in Power BI.
8. Automation applies approved workflow controls and operational nudges.
9. Dashboard specifications define audience, visuals, filters, and interpretation.
10. Playbooks define ownership, operating cadence, controls, and action thresholds.

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
