# Data Quality and Governance JQL Patterns

These queries identify configuration, ownership, workflow, metadata, and reporting-control exceptions. They are intended for recurring governance reviews and remediation queues.

## Unassigned active work

```jql
project = PROJ
AND statusCategory != Done
AND assignee IS EMPTY
ORDER BY priority ASC, created ASC
```

## Missing reporter

```jql
project = PROJ
AND reporter IS EMPTY
ORDER BY created ASC
```

## Missing priority

```jql
project = PROJ
AND statusCategory != Done
AND priority IS EMPTY
ORDER BY created ASC
```

## Missing due date for governed issue types

```jql
project = PROJ
AND issuetype IN (Epic, Risk, Dependency, Milestone)
AND statusCategory != Done
AND due IS EMPTY
ORDER BY created ASC
```

## Missing fix version

```jql
project = PROJ
AND issuetype IN (Epic, Story, Task)
AND statusCategory != Done
AND fixVersion IS EMPTY
ORDER BY priority ASC, created ASC
```

## Missing component

```jql
project = PROJ
AND statusCategory != Done
AND component IS EMPTY
ORDER BY created ASC
```

## Missing functional group

```jql
project = PROJ
AND statusCategory != Done
AND "Functional Group" IS EMPTY
ORDER BY created ASC
```

## Missing environment

```jql
project = PROJ
AND statusCategory != Done
AND Environment IS EMPTY
ORDER BY created ASC
```

## Missing cloud provider

```jql
project = PROJ
AND statusCategory != Done
AND "Cloud Provider" IS EMPTY
ORDER BY created ASC
```

## Active work with no recent update

```jql
project = PROJ
AND statusCategory != Done
AND updated <= -14d
ORDER BY updated ASC
```

## Done issues missing resolution

```jql
project = PROJ
AND statusCategory = Done
AND resolution IS EMPTY
ORDER BY updated ASC
```

## Open issues with resolution populated

```jql
project = PROJ
AND statusCategory != Done
AND resolution IS NOT EMPTY
ORDER BY updated ASC
```

## Closed work missing completion date

```jql
project = PROJ
AND statusCategory = Done
AND resolved IS EMPTY
ORDER BY updated ASC
```

## In-progress work without assignee

```jql
project = PROJ
AND statusCategory = "In Progress"
AND assignee IS EMPTY
ORDER BY priority ASC, updated ASC
```

## Blocked work without blocker reason

Use a dedicated field or governed label for blocker evidence.

```jql
project = PROJ
AND status = Blocked
AND "Blocker Reason" IS EMPTY
ORDER BY priority ASC, updated ASC
```

## On-hold work without review date

```jql
project = PROJ
AND status = "On Hold"
AND "Review Date" IS EMPTY
ORDER BY updated ASC
```

## Items outside approved issue types

```jql
project = PROJ
AND issuetype NOT IN (Epic, Story, Task, Sub-task, Bug, Risk, Dependency, Decision)
ORDER BY issuetype ASC, created ASC
```

## Deprecated label usage

```jql
project = PROJ
AND labels IN (deprecated-label-1, deprecated-label-2)
ORDER BY updated DESC
```

## Deprecated component usage

```jql
project = PROJ
AND component IN ("Deprecated Component")
ORDER BY updated DESC
```

## Duplicate legacy keys retained after migration

```jql
project = PROJ
AND "Old Issue Key" IS NOT EMPTY
ORDER BY "Old Issue Key" ASC
```

## Work lacking parent alignment

```jql
project = PROJ
AND issuetype IN (Story, Task)
AND statusCategory != Done
AND parent IS EMPTY
AND "Epic Link" IS EMPTY
ORDER BY created ASC
```

## Epics with no child-delivery indicator

Native JQL cannot reliably identify epics with zero children without an extension or automation-maintained flag. Use:

```jql
project = PROJ
AND issuetype = Epic
AND labels = no-child-work
AND statusCategory != Done
ORDER BY created ASC
```

## Invalid priority and issue-type combinations

```jql
project = PROJ
AND issuetype = "Service Request"
AND priority = P0
AND labels = priority-validation-required
ORDER BY created ASC
```

## Issues changed during a governance window

```jql
project = PROJ
AND updated >= START_DATE
AND updated <= END_DATE
ORDER BY updated DESC
```

## Recently created custom-workflow exceptions

```jql
project = PROJ
AND labels = workflow-exception
AND created >= -30d
ORDER BY created DESC
```

## Governance queue

A consolidated operational queue can combine the most important exceptions:

```jql
project = PROJ
AND statusCategory != Done
AND (
  assignee IS EMPTY
  OR priority IS EMPTY
  OR "Functional Group" IS EMPTY
  OR updated <= -14d
  OR (status = Blocked AND "Blocker Reason" IS EMPTY)
)
ORDER BY priority ASC, created ASC
```

## Control model

For every governance query, define:

- accountable owner;
- remediation SLA;
- approved exception route;
- evidence required for closure;
- review cadence;
- threshold for escalation;
- dashboard and audit-log destination.

Query counts should be trended over time. A decreasing exception count is useful, but sustained control effectiveness also requires sampling, field-validity checks, workflow conformance, and reconciliation against configuration and historical data.
