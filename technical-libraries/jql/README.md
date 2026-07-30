# Enterprise JQL Reference Library

This library provides reusable Jira Query Language patterns for enterprise reporting, operational governance, portfolio visibility, sprint health, Jira Service Management, CloudOps, DevOps, FinOps, and data-quality controls.

## Usage principles

- Replace all placeholder project keys, field names, statuses, boards, and date windows before use.
- Validate queries against the intended Jira deployment and permission model.
- Prefer saved filters for governed reporting and reuse.
- Avoid expensive broad scans where a bounded project, issue type, status, or date filter is available.
- Document the business definition behind each filter so that dashboards and operational queues remain consistent.
- Review custom-field names and option values after configuration changes.

## Library structure

| Module | Purpose |
|---|---|
| [Executive and Portfolio](executive-and-portfolio.md) | Strategic visibility, intervention, milestones, risks, and benefits |
| [Sprint and Delivery Governance](sprint-and-delivery.md) | Commitment, rollover, scope, aging, blockers, and estimation |
| [JSM and SLA Operations](jsm-and-sla.md) | Incidents, service requests, changes, response, resolution, and aging |
| [CloudOps, DevOps, and FinOps](cloudops-devops-finops.md) | Reliability, operations, automation, releases, and cost work |
| [Data Quality and Governance](data-quality-and-governance.md) | Missing fields, invalid states, hygiene, ownership, and control exceptions |

## Standard query documentation

Every production filter should record:

1. Business purpose
2. Intended audience
3. Query owner
4. Query text
5. Required custom fields
6. Known exclusions
7. Refresh cadence
8. Validation method
9. Downstream dashboards or automations
10. Change history

## Placeholder convention

- `PROJ` — Jira project key
- `OPS` — operations project key
- `JSM` — service-management project key
- `TEAM_NAME` — team or functional-group value
- `FIELD_NAME` — custom-field display name
- `TARGET_VERSION` — release or fix version
- `START_DATE` / `END_DATE` — ISO dates

## Performance guidance

Start every query with the strongest indexed constraints available, typically project, issue type, status category, resolution, sprint, fix version, or created/updated date. Add text searches and complex negative conditions only after narrowing the candidate set.

## Governance warning

JQL selects issues; it does not create a complete metric definition. Measures such as predictability, SLA compliance, aging, cost realization, and scope volatility require additional calculation rules in EazyBI, SQL, Power BI, or another governed analytics layer.
