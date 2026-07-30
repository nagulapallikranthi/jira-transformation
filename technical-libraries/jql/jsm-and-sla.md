# Jira Service Management and SLA JQL Patterns

These patterns support incident, service-request, change, backlog, priority, SLA, and operational-hygiene reporting. SLA field names differ by environment; replace placeholders with the exact JSM field names.

## Open JSM demand

```jql
project = JSM
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

## Open incidents

```jql
project = JSM
AND issuetype = Incident
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

## Open service requests

```jql
project = JSM
AND issuetype = "Service Request"
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

## Open change requests

```jql
project = JSM
AND issuetype = "Change Request"
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

## P0 and P1 operational queue

```jql
project = JSM
AND priority IN (P0, P1)
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

## Unassigned open tickets

```jql
project = JSM
AND statusCategory != Done
AND assignee IS EMPTY
ORDER BY priority ASC, created ASC
```

## Oldest open tickets

```jql
project = JSM
AND statusCategory != Done
ORDER BY created ASC
```

## Open longer than 30 days

```jql
project = JSM
AND statusCategory != Done
AND created <= -30d
ORDER BY created ASC
```

## Stale active tickets

```jql
project = JSM
AND statusCategory = "In Progress"
AND updated <= -5d
ORDER BY updated ASC
```

## Waiting for reporter information

```jql
project = JSM
AND status = "Reporter - Need More Info"
ORDER BY updated ASC
```

## On-hold tickets

```jql
project = JSM
AND status = "On Hold"
ORDER BY updated ASC
```

## Blocked tickets

```jql
project = JSM
AND status = Blocked
ORDER BY priority ASC, updated ASC
```

## Breached time to first response

```jql
project = JSM
AND "Time to first response" = breached()
ORDER BY priority ASC, created ASC
```

## Breached time to resolution

```jql
project = JSM
AND "Time to resolution" = breached()
ORDER BY priority ASC, created ASC
```

## SLA at risk

JSM supports SLA functions based on the configured field. Confirm the syntax in the target environment.

```jql
project = JSM
AND statusCategory != Done
AND "Time to resolution" = running()
AND labels = sla-amber
ORDER BY priority ASC, created ASC
```

## Resolved in the last seven days

```jql
project = JSM
AND statusCategory = Done
AND resolved >= -7d
ORDER BY resolved DESC
```

## Created in the last seven days

```jql
project = JSM
AND created >= -7d
ORDER BY created DESC
```

## Resolution supplied but ticket still open

```jql
project = JSM
AND statusCategory != Done
AND resolution IS NOT EMPTY
ORDER BY updated ASC
```

## Done ticket missing resolution

```jql
project = JSM
AND statusCategory = Done
AND resolution IS EMPTY
ORDER BY updated ASC
```

## Incident missing RCA classification

```jql
project = JSM
AND issuetype = Incident
AND statusCategory = Done
AND "RCA Required" = Yes
AND labels != rca-complete
ORDER BY resolved ASC
```

## High-priority incident without recent update

```jql
project = JSM
AND issuetype = Incident
AND priority IN (P0, P1)
AND statusCategory != Done
AND updated <= -1h
ORDER BY priority ASC, updated ASC
```

## Changes pending approval

```jql
project = JSM
AND issuetype = "Change Request"
AND status = "Pending Approval"
ORDER BY due ASC, created ASC
```

## Approved changes awaiting implementation

```jql
project = JSM
AND issuetype = "Change Request"
AND status = "Approved by CAB Approver"
ORDER BY "Planned Date" ASC
```

## Emergency changes

```jql
project = JSM
AND issuetype = "Change Request"
AND "Change Type" = Emergency
AND created >= -30d
ORDER BY created DESC
```

## Failed changes

```jql
project = JSM
AND issuetype = "Change Request"
AND status = "Failed in Testing"
ORDER BY updated DESC
```

## Priority-quality review

```jql
project = JSM
AND priority = P0
AND labels = priority-review-required
AND statusCategory != Done
ORDER BY created ASC
```

## Operational data-quality exceptions

```jql
project = JSM
AND statusCategory != Done
AND (
  assignee IS EMPTY
  OR priority IS EMPTY
  OR "Functional Group" IS EMPTY
  OR Environment IS EMPTY
)
ORDER BY priority ASC, created ASC
```

## Analytics guidance

Use snapshots and SLA event data for accurate breach rates, pause-duration analysis, queue aging, reassignment, and historical trend reporting. JQL is suitable for operational cohorts, but it should not be the sole source for historical SLA calculations or status-duration metrics.
