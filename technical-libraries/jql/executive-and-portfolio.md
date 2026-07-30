# Executive and Portfolio JQL Patterns

These patterns support strategic reviews, portfolio governance, milestone control, dependency management, risk escalation, and benefits tracking.

## 1. All active portfolio work

**Purpose:** Establish the active portfolio population.

```jql
project = PROJ
AND statusCategory != Done
ORDER BY priority ASC, due ASC
```

## 2. Active epics

```jql
project = PROJ
AND issuetype = Epic
AND statusCategory != Done
ORDER BY priority ASC, updated ASC
```

## 3. Epics without an accountable owner

```jql
project = PROJ
AND issuetype = Epic
AND statusCategory != Done
AND assignee IS EMPTY
ORDER BY created ASC
```

## 4. Strategic work missing a target release

```jql
project = PROJ
AND issuetype IN (Epic, Initiative)
AND statusCategory != Done
AND fixVersion IS EMPTY
ORDER BY priority ASC
```

## 5. Overdue active work

```jql
project = PROJ
AND statusCategory != Done
AND due < startOfDay()
ORDER BY due ASC
```

## 6. Due in the next 14 days

```jql
project = PROJ
AND statusCategory != Done
AND due >= startOfDay()
AND due <= 14d
ORDER BY due ASC
```

## 7. High-priority work with no recent update

```jql
project = PROJ
AND priority IN (Highest, High)
AND statusCategory != Done
AND updated <= -7d
ORDER BY updated ASC
```

## 8. Open risks

```jql
project = PROJ
AND issuetype = Risk
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

## 9. Open decisions

```jql
project = PROJ
AND issuetype = Decision
AND statusCategory != Done
ORDER BY due ASC, priority ASC
```

## 10. Open dependencies

```jql
project = PROJ
AND issuetype = Dependency
AND statusCategory != Done
ORDER BY priority ASC, due ASC
```

## 11. Blocked portfolio items

```jql
project = PROJ
AND statusCategory != Done
AND (status = Blocked OR Flagged = Impediment)
ORDER BY priority ASC, updated ASC
```

## 12. Executive exceptions

Use a governed label or dedicated field to identify items requiring senior intervention.

```jql
project = PROJ
AND statusCategory != Done
AND labels = executive-attention
ORDER BY priority ASC, updated ASC
```

## 13. Milestones due this quarter

```jql
project = PROJ
AND issuetype IN (Milestone, Epic)
AND statusCategory != Done
AND due >= startOfQuarter()
AND due <= endOfQuarter()
ORDER BY due ASC
```

## 14. Milestones completed this quarter

```jql
project = PROJ
AND issuetype IN (Milestone, Epic)
AND statusCategory = Done
AND resolved >= startOfQuarter()
AND resolved <= endOfQuarter()
ORDER BY resolved DESC
```

## 15. Work without a parent portfolio item

Adjust issue types to the hierarchy used in your environment.

```jql
project = PROJ
AND issuetype IN (Story, Task)
AND statusCategory != Done
AND parent IS EMPTY
AND "Epic Link" IS EMPTY
ORDER BY created ASC
```

## 16. Items with unresolved linked blockers

Native JQL has limited linked-issue traversal. Use a marketplace extension, automation-maintained flag, or analytics layer for dependable dependency calculations. A practical base cohort is:

```jql
project = PROJ
AND statusCategory != Done
AND labels = dependency-blocked
ORDER BY priority ASC, updated ASC
```

## 17. Benefits-realization pipeline

```jql
project = PROJ
AND statusCategory != Done
AND "Benefit Type" IS NOT EMPTY
AND "Forecast Benefit" IS NOT EMPTY
ORDER BY "Forecast Benefit" DESC
```

## 18. Completed work missing realized benefit

```jql
project = PROJ
AND statusCategory = Done
AND "Benefit Type" IS NOT EMPTY
AND "Realized Benefit" IS EMPTY
ORDER BY resolved ASC
```

## 19. Portfolio data-quality exceptions

```jql
project = PROJ
AND issuetype IN (Epic, Initiative)
AND statusCategory != Done
AND (
  assignee IS EMPTY
  OR priority IS EMPTY
  OR due IS EMPTY
  OR fixVersion IS EMPTY
)
ORDER BY created ASC
```

## 20. Recently changed executive scope

```jql
project = PROJ
AND issuetype IN (Epic, Initiative)
AND updated >= -7d
AND labels = scope-change
ORDER BY updated DESC
```

## Recommended dashboard use

Combine these cohorts with governed calculations for:

- portfolio health;
- milestone confidence;
- overdue exposure;
- intervention demand;
- dependency aging;
- benefit pipeline;
- realized benefits;
- ownership completeness;
- strategic data quality.

Do not derive RAG status from JQL alone. Define thresholds, exception rules, owner actions, and reconciliation controls in the metric catalogue and semantic model.
