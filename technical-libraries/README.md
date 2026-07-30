# Technical Libraries

This area contains reusable, organization-neutral implementation examples that translate the framework into working analytics, integration, and automation patterns.

## Available now

- [Baseline JQL Reference Library](jql/Baseline-JQL-Library.md) — backlog, aging, sprint, SLA, cost, and governance cohorts with validation guidance.
- [Power BI Implementation Guide](../docs/Power-BI-Implementation-Guide.md) — architecture, semantic model, refresh, security, performance, reconciliation, and deployment guidance.
- [Governed KPI Catalogue](../analytics/KPI-Catalogue.md) — business definitions that technical measures must implement.

## Library roadmap

| Library | Baseline purpose | Status |
|---|---|---|
| `jql/` | Issue selection, cohort definitions, governance checks, and operational queues | Initial usable baseline |
| `sql/` | Normalized analytics model, history, snapshots, and reconciliation | Planned next batch |
| `mdx/` | EazyBI rolling periods, realized-versus-pipeline logic, and trends | Planned next batch |
| `dax/` | Power BI measures, targets, RAG states, and executive narratives | Planned next batch |
| `rest-api/` | Authenticated extraction, pagination, rate limits, retries, and write-back controls | Planned next batch |
| `automation/` | Jira automation patterns, idempotency, audit, and guardrails | Planned next batch |
| `python/` | Validation, transformation, synthetic-data generation, and quality checks | Planned next batch |

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