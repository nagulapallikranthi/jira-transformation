# Sprint and Delivery Governance JQL Patterns

These patterns support sprint planning, execution control, flow management, rollover analysis, estimation hygiene, aging, blockers, and release readiness.

## Active sprint work

```jql
project = PROJ
AND sprint IN openSprints()
ORDER BY Rank ASC
```

## Active sprint work not started

```jql
project = PROJ
AND sprint IN openSprints()
AND statusCategory = "To Do"
ORDER BY priority ASC, Rank ASC
```

## Active sprint work in progress

```jql
project = PROJ
AND sprint IN openSprints()
AND statusCategory = "In Progress"
ORDER BY priority ASC, updated ASC
```

## Active sprint work completed

```jql
project = PROJ
AND sprint IN openSprints()
AND statusCategory = Done
ORDER BY resolved DESC
```

## Unassigned sprint work

```jql
project = PROJ
AND sprint IN openSprints()
AND statusCategory != Done
AND assignee IS EMPTY
ORDER BY priority ASC
```

## Sprint work without estimates

```jql
project = PROJ
AND sprint IN openSprints()
AND statusCategory != Done
AND "Story Points" IS EMPTY
ORDER BY Rank ASC
```

## Sprint work without acceptance criteria

Use a governed field or label where direct text validation is not dependable.

```jql
project = PROJ
AND sprint IN openSprints()
AND statusCategory != Done
AND labels = missing-acceptance-criteria
ORDER BY priority ASC
```

## Blocked sprint work

```jql
project = PROJ
AND sprint IN openSprints()
AND statusCategory != Done
AND (status = Blocked OR Flagged = Impediment)
ORDER BY priority ASC, updated ASC
```

## Stale in-progress work

```jql
project = PROJ
AND sprint IN openSprints()
AND statusCategory = "In Progress"
AND updated <= -3d
ORDER BY updated ASC
```

## Work added after sprint start

Jira's native JQL cannot reliably determine the exact timestamp an issue entered a sprint. Maintain a scope-change label or snapshot through automation or analytics.

```jql
project = PROJ
AND sprint IN openSprints()
AND labels = added-after-sprint-start
ORDER BY created ASC
```

## Work removed from sprint

```jql
project = PROJ
AND labels = removed-from-sprint
AND updated >= -14d
ORDER BY updated DESC
```

## Rollover candidates

```jql
project = PROJ
AND sprint IN closedSprints()
AND statusCategory != Done
ORDER BY priority ASC, updated ASC
```

For precise rollover, use a specific closed sprint rather than all closed sprints.

## Recently completed sprint work

```jql
project = PROJ
AND sprint IN closedSprints()
AND resolved >= -14d
ORDER BY resolved DESC
```

## Aged backlog over 90 days

```jql
project = PROJ
AND statusCategory = "To Do"
AND created <= -90d
ORDER BY created ASC
```

## Ready backlog

```jql
project = PROJ
AND status = "Ready for Planning"
ORDER BY priority ASC, Rank ASC
```

## Backlog missing priority

```jql
project = PROJ
AND statusCategory = "To Do"
AND priority IS EMPTY
ORDER BY created ASC
```

## Backlog missing functional ownership

```jql
project = PROJ
AND statusCategory != Done
AND "Functional Group" IS EMPTY
ORDER BY created ASC
```

## High-priority work outside a sprint

```jql
project = PROJ
AND priority IN (Highest, High)
AND statusCategory != Done
AND sprint IS EMPTY
ORDER BY priority ASC, created ASC
```

## Release scope

```jql
project = PROJ
AND fixVersion = TARGET_VERSION
ORDER BY priority ASC, Rank ASC
```

## Incomplete release scope

```jql
project = PROJ
AND fixVersion = TARGET_VERSION
AND statusCategory != Done
ORDER BY priority ASC, status ASC
```

## Release blockers

```jql
project = PROJ
AND fixVersion = TARGET_VERSION
AND statusCategory != Done
AND (priority = Highest OR status = Blocked OR Flagged = Impediment)
ORDER BY priority ASC, updated ASC
```

## Completed but unresolved issues

```jql
project = PROJ
AND statusCategory = Done
AND resolution IS EMPTY
ORDER BY updated ASC
```

## Resolved issues outside Done category

```jql
project = PROJ
AND statusCategory != Done
AND resolution IS NOT EMPTY
ORDER BY updated ASC
```

## Reopened work

Native JQL history support varies by field and deployment. A common pattern is:

```jql
project = PROJ
AND status CHANGED FROM Done
AND updated >= -30d
ORDER BY updated DESC
```

## Delivery risk cohort

```jql
project = PROJ
AND statusCategory != Done
AND (
  due < startOfDay()
  OR status = Blocked
  OR Flagged = Impediment
  OR updated <= -7d
)
ORDER BY priority ASC, due ASC, updated ASC
```

## Metric guidance

Use these queries as cohorts for calculations such as commitment reliability, completion rate, scope stability, rollover rate, blocker aging, cycle time, throughput, and estimation coverage. Snapshot sprint membership and status history when historical accuracy matters; current-state JQL cannot reconstruct every past sprint event reliably.
