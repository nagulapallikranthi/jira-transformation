# CloudOps, DevOps, and FinOps JQL Patterns

These patterns support operational work management, release governance, reliability, security remediation, automation, cost optimization, and financial pipeline reporting.

## CloudOps active work

```jql
project = OPS
AND "Functional Group" = CloudOps
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

## DevOps active work

```jql
project = OPS
AND "Functional Group" = DevOps
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

## Work by cloud provider

```jql
project = OPS
AND "Cloud Provider" = AWS
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

Repeat with Azure, IBM Cloud, or the governed provider values used in the environment.

## Production work

```jql
project = OPS
AND Environment = Production
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

## Multi-environment work

```jql
project = OPS
AND Environment IN (Production, Preview, Staging)
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

## Reliability backlog

```jql
project = OPS
AND labels = reliability
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

## Security remediation backlog

```jql
project = OPS
AND labels IN (security, vulnerability-remediation)
AND statusCategory != Done
ORDER BY priority ASC, due ASC
```

## Overdue security remediation

```jql
project = OPS
AND labels IN (security, vulnerability-remediation)
AND statusCategory != Done
AND due < startOfDay()
ORDER BY due ASC
```

## Automation candidates

```jql
project = OPS
AND labels = automation-candidate
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

## Automation delivered this quarter

```jql
project = OPS
AND labels = automation
AND statusCategory = Done
AND resolved >= startOfQuarter()
ORDER BY resolved DESC
```

## Technical-debt backlog

```jql
project = OPS
AND labels = technical-debt
AND statusCategory != Done
ORDER BY priority ASC, created ASC
```

## Release work for a target version

```jql
project = OPS
AND fixVersion = TARGET_VERSION
ORDER BY priority ASC, status ASC
```

## Release blockers

```jql
project = OPS
AND fixVersion = TARGET_VERSION
AND statusCategory != Done
AND (
  priority IN (P0, P1)
  OR status = Blocked
  OR Flagged = Impediment
)
ORDER BY priority ASC, updated ASC
```

## Change-related release work

```jql
project = OPS
AND fixVersion = TARGET_VERSION
AND labels = change-required
AND statusCategory != Done
ORDER BY due ASC, priority ASC
```

## Cost-work population

```jql
project = OPS
AND issuetype = Task
AND (
  "Mitigation or Saving?" IS NOT EMPTY
  OR "Cost Increase (in $)" IS NOT EMPTY
  OR "Cost Saved (in $)" IS NOT EMPTY
  OR "Cost Increase mitigated (in $)" IS NOT EMPTY
)
ORDER BY created ASC
```

## Open cost pipeline

```jql
project = OPS
AND issuetype = Task
AND statusCategory != Done
AND (
  "Mitigation or Saving?" IS NOT EMPTY
  OR "Cost Increase (in $)" IS NOT EMPTY
  OR "Cost Saved (in $)" IS NOT EMPTY
  OR "Cost Increase mitigated (in $)" IS NOT EMPTY
)
ORDER BY priority ASC, created ASC
```

## Realized savings work

```jql
project = OPS
AND issuetype = Task
AND statusCategory = Done
AND "Cost Saved (in $)" IS NOT EMPTY
ORDER BY resolved DESC
```

## Cost-avoidance work

```jql
project = OPS
AND issuetype = Task
AND "Cost Increase mitigated (in $)" IS NOT EMPTY
ORDER BY created ASC
```

## Cost increase exposure

```jql
project = OPS
AND issuetype = Task
AND "Cost Increase (in $)" IS NOT EMPTY
ORDER BY "Cost Increase (in $)" DESC
```

## Cost items missing classification

```jql
project = OPS
AND issuetype = Task
AND (
  "Cost Saved (in $)" IS NOT EMPTY
  OR "Cost Increase (in $)" IS NOT EMPTY
  OR "Cost Increase mitigated (in $)" IS NOT EMPTY
)
AND "Mitigation or Saving?" IS EMPTY
ORDER BY created ASC
```

## Cost items completed without financial value

```jql
project = OPS
AND issuetype = Task
AND statusCategory = Done
AND "Mitigation or Saving?" IS NOT EMPTY
AND "Cost Saved (in $)" IS EMPTY
AND "Cost Increase mitigated (in $)" IS EMPTY
AND "Cost Increase (in $)" IS EMPTY
ORDER BY resolved ASC
```

## Work missing operational routing

```jql
project = OPS
AND statusCategory != Done
AND (
  "Functional Group" IS EMPTY
  OR Environment IS EMPTY
  OR "Cloud Provider" IS EMPTY
)
ORDER BY priority ASC, created ASC
```

## Analytics guidance

Cost values should be modeled as signed measures under a documented convention. Separate realized outcomes from pipeline forecasts, preserve the issue-level audit trail, and avoid summing mutually exclusive financial fields without classification rules. For DevOps and reliability metrics, combine Jira work data with deployment, incident, observability, and source-control systems rather than treating Jira as the sole system of record.
