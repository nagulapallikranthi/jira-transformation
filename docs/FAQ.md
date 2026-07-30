# Frequently Asked Questions

## Is this an Atlassian product or official implementation guide?

No. This is an independent, organization-neutral reference framework. Product names remain the property of their respective owners.

## Is the framework only for Jira migrations?

No. Migration is one lifecycle component. The framework also covers assessment, target operating model, governance, configuration rationalization, service management, delivery analytics, FinOps, stabilization, and continuous improvement.

## Can the examples be copied directly into production?

Treat examples as governed starting points. Validate local workflows, fields, permissions, data volumes, licensing, security, and business rules before implementation.

## Why are synthetic datasets required?

The repository is public. Synthetic data allows realistic demonstrations without exposing employer, customer, employee, project, incident, security, or financial information.

## Does JQL provide complete historical analytics?

Usually not by itself. Questions about state at a past point in time often require changelog extraction, periodic snapshots, or a data warehouse.

## What makes a KPI governed?

A governed KPI has a purpose, formula, owner, unit, grain, source mapping, exclusions, target, thresholds, refresh cadence, reconciliation method, drill-down, and approved interpretation.

## Should every team use exactly the same Jira workflow?

Not necessarily. The framework favors a governed core with controlled extensions. Variants require a legitimate business need, named owner, impact assessment, and lifecycle plan.

## Can dashboards use manually selected RAG statuses?

Manual judgment may be recorded, but computed and manual states must be distinguished. Overrides require authority, rationale, timestamp, and audit history.

## Why preserve issue history or snapshots?

Current-state records cannot reliably reproduce prior sprint scope, status, ownership, aging, or backlog conditions after later changes. History supports accurate trend and point-in-time analysis.

## What is the preferred Power BI architecture?

Separate controlled ingestion, raw landing, validation, curated data, semantic modelling, and presentation. Use a service identity, preserve history, reconcile totals, and apply least privilege.

## Is write-back from automation or analytics allowed?

Only with explicit governance. Write-back must have least privilege, idempotency, validation, audit logging, failure handling, approval boundaries, and recovery procedures.

## How should missing data be shown?

Missing, stale, or unreconciled data must be visible as unavailable or unhealthy. It must never be silently interpreted as green performance or zero demand.

## How should teams start using this repository?

Begin with the Enterprise Jira Transformation Framework, Governance Model, Metrics Library, Consolidation Playbook, and relevant runbooks. Select a bounded use case, define acceptance criteria, and validate with synthetic or non-production data.

## What does 85% maturity mean for Baseline v1.0?

It means each major area is substantively usable: core guidance exists, navigation and cross-links work, representative implementation examples are present, controls and limitations are documented, and remaining gaps are enhancements rather than missing foundations.

## How can contributors help?

Contributors can improve documentation, add organization-neutral examples, propose governed metrics, strengthen validation cases, add synthetic assets, and report defects through the repository templates.