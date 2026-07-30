# Baseline JQL Reference Library

All examples use placeholders and must be adapted to local project, issue-type, status, field, and permission models. Validate every query in a non-production context before operational use.

## Placeholder convention

- `<PROJECT>` — approved project key
- `<BOARD>` — board or filter context
- `<START_DATE>` and `<END_DATE>` — ISO dates
- `<TEAM_FIELD>` — governed team field
- `<PILLAR_FIELD>` — governed portfolio or pillar field
- `<COST_FIELD>` — approved numeric cost field

## Active backlog

```jql
project = <PROJECT>
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

Use for backlog inventory. Do not interpret this as actionable work without excluding cancelled, duplicate, waiting, or non-delivery states defined by the local workflow.

## Oldest unresolved work

```jql
project = <PROJECT>
AND resolution IS EMPTY
ORDER BY created ASC
```

Use to identify aging risk. Pair with issue age bands and status-specific SLA logic.

## Unassigned active work

```jql
project = <PROJECT>
AND statusCategory != Done
AND assignee IS EMPTY
ORDER BY priority ASC, created ASC
```

Use for ownership hygiene. Validate whether queues intentionally use assignment groups instead of individuals.

## Overdue work

```jql
project = <PROJECT>
AND statusCategory != Done
AND due < startOfDay()
ORDER BY due ASC
```

Use only when due date is governed and consistently populated.

## Recently created versus resolved

Created cohort:

```jql
project = <PROJECT>
AND created >= startOfWeek(-1)
AND created < startOfWeek()
```

Resolved cohort:

```jql
project = <PROJECT>
AND resolved >= startOfWeek(-1)
AND resolved < startOfWeek()
```

Compare counts using identical project and issue-type scope. Do not mix current-state filters with historical cohorts unless intended.

## Sprint scope added after start

```jql
project = <PROJECT>
AND sprint = <SPRINT_ID>
AND created > <SPRINT_START_DATE>
```

This captures newly created work, not all work added after sprint start. Accurate scope-change reporting normally requires changelog or snapshot data.

## Sprint rollover candidates

```jql
project = <PROJECT>
AND sprint = <SPRINT_ID>
AND statusCategory != Done
```

Run at sprint close or against a historical snapshot. Current JQL alone may not reproduce the exact closing state after later edits.

## Blocked work

```jql
project = <PROJECT>
AND status IN (Blocked, "On Hold")
ORDER BY priority ASC, updated ASC
```

Adapt the status set to the approved workflow. Distinguish blocked execution from waiting for customer, vendor, or approval.

## Missing mandatory ownership data

```jql
project = <PROJECT>
AND statusCategory != Done
AND (assignee IS EMPTY OR <TEAM_FIELD> IS EMPTY)
```

Use as a data-quality control, not merely a report filter.

## JSM breached SLA

```jql
project = <PROJECT>
AND "Time to resolution" = breached()
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

The exact SLA field name and functions depend on the Jira Service Management configuration.

## JSM approaching SLA

```jql
project = <PROJECT>
AND "Time to resolution" = running()
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

Native JQL does not universally express a custom remaining-time amber threshold. Use SLA calendars, automation, marketplace analytics, or replicated data where necessary.

## Cost opportunity pipeline

```jql
project = <PROJECT>
AND issuetype = Task
AND <COST_FIELD> IS NOT EMPTY
AND statusCategory != Done
ORDER BY created ASC
```

Financial reporting must distinguish opportunity, approved forecast, realized value, cost avoidance, and cost increase. JQL identifies cohorts; it does not perform governed financial aggregation.

## Completed cost outcomes

```jql
project = <PROJECT>
AND issuetype = Task
AND <COST_FIELD> IS NOT EMPTY
AND statusCategory = Done
AND resolved >= <START_DATE>
AND resolved < <END_DATE>
```

Reconcile completion date, benefit effective date, and financial approval date before reporting realized value.

## Governance exceptions

```jql
project = <PROJECT>
AND labels = governance-exception
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

Prefer a controlled field and approval workflow over labels for production governance.

## Validation checklist

- Confirm project and issue-type scope.
- Confirm archived and deleted objects are handled appropriately.
- Validate status-category assumptions against workflows.
- Test permission effects using a service account representative of production reporting.
- Compare query totals with an independent source.
- Document time zone, date boundaries, and sprint timing.
- Use changelog, snapshots, or warehouse history for historical state questions.
- Never place credentials, tenant URLs, account IDs, or live project keys in public examples.