# Enterprise Jira Automation Pattern Library

This library defines reusable automation patterns with enterprise controls for reliability, auditability, security, and maintainability.

## Design principles

1. Automate a clearly defined business decision, not an unclear process.
2. Keep rules small enough to test and support.
3. Use explicit entry conditions and stop conditions.
4. Make repeated execution safe.
5. Record meaningful actions without flooding issue history.
6. Separate notifications from state-changing actions when practical.
7. Protect privileged actions with approvals and least privilege.
8. Define ownership, support, rollback, and retirement criteria.

## Standard rule specification

Every automation should document:

- business purpose;
- trigger;
- scope and project boundaries;
- preconditions;
- actions;
- idempotency control;
- exception path;
- audit evidence;
- performance considerations;
- owner and backup owner;
- test cases;
- rollback plan;
- review frequency.

## Pattern catalogue

### 1. Mandatory-field gate

**Purpose:** Prevent work from entering an execution status without required routing or governance metadata.

```text
Trigger: Issue transitioned to In Progress
Condition: Functional Group is empty OR Pillar is empty
Actions:
  - transition issue back to previous governed status
  - add concise guidance comment
  - notify assignee once
Idempotency: apply label automation-field-gate once per failure episode
```

### 2. Epic-to-child inheritance

**Purpose:** Keep child work aligned with approved portfolio metadata.

Fields commonly inherited:

- release target;
- product or pillar;
- environment;
- functional group;
- cost category;
- strategic objective.

Guardrails:

- update only fields designated as inherited;
- do not overwrite an explicitly approved child exception;
- log parent and child keys;
- avoid recursive update loops.

### 3. SLA-risk notification

```text
Trigger: Scheduled query
Scope: Open operational tickets approaching SLA threshold
Conditions:
  - not in an approved pause status
  - no notification marker within the cooldown period
Actions:
  - notify assignee or team channel
  - add internal marker or entity property
  - escalate only after the defined threshold
```

Do not use comments as the sole anti-spam mechanism when a structured property or dedicated field is available.

### 4. Stale-work nudge

Ask one context-specific question rather than sending a generic reminder.

Examples:

- Is the current due date still achievable?
- Which dependency is blocking progress?
- Has the implementation been completed and is acceptance pending?
- Should this item be moved to an approved waiting status?

Use cooldowns, stop on Done, and pause while the issue is legitimately On Hold or waiting for external input.

### 5. Release-note comment write-back

Before adding a generated comment:

1. verify the release identifier;
2. validate the target issue and permission;
3. search for the idempotency marker;
4. post only approved content;
5. log the action and response;
6. route failures to an operational queue.

### 6. Resolution hygiene

```text
Trigger: Transition to a completed status
Condition: Resolution is empty
Action: Set approved resolution value
```

A companion rule may clear resolution when an issue is reopened, but it must be restricted to approved reopen transitions.

## Anti-patterns

- one rule attempting to manage an entire lifecycle;
- unbounded branching across all projects;
- automation triggered by its own field updates;
- repeated comments without cooldown or idempotency;
- hard-coded account IDs, URLs, credentials, or environment-specific values;
- automatic priority escalation without a governed decision model;
- destructive bulk transitions without dry-run evidence;
- rules with no owner or operational dashboard.

## Validation checklist

- Trigger fires only in the intended scope.
- Negative cases do not execute actions.
- Replaying the event does not duplicate effects.
- Rule does not create recursion.
- Notification frequency is acceptable.
- Audit log identifies the decision path.
- Failure path is observable.
- Permissions are least privilege.
- Rollback has been tested.
- Rule is reviewed after workflow or field changes.

## Related assets

- [JQL governance queries](../jql/data-quality-and-governance.md)
- [REST API library](../rest-api/README.md)
- [Python validation utilities](../python/README.md)
