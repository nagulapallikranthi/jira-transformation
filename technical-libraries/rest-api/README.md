# Enterprise Jira REST API Library

This library provides organization-neutral patterns for extracting, validating, and safely writing Jira data at enterprise scale.

## Scope

- service-account and OAuth-based access patterns;
- issue search and field selection;
- pagination and checkpointing;
- incremental extraction;
- retry, throttling, and rate-limit handling;
- attachment and changelog retrieval;
- controlled comment write-back;
- audit logging and recovery;
- security, privacy, and operational guardrails.

## Reference architecture

```text
Jira Cloud
  -> authenticated API client
  -> paginated extractor
  -> raw landing zone
  -> schema and quality validation
  -> curated model
  -> dashboards / automation / release workflows
```

## Minimum controls

1. Use a dedicated service identity rather than a personal account.
2. Grant only the scopes required by the approved use case.
3. Store secrets in an approved secret manager.
4. Never log access tokens, authorization headers, or sensitive payloads.
5. Use bounded retries with exponential backoff and jitter.
6. Persist extraction checkpoints so a failed run can resume safely.
7. Separate read-only extraction from write-back permissions where practical.
8. Log each write-back with issue key, action, timestamp, caller, and result.
9. Make write operations idempotent.
10. Validate changes in a non-production environment before rollout.

## Core search pattern

```http
POST /rest/api/3/search
Content-Type: application/json
Authorization: Bearer <token>

{
  "jql": "project in (<PROJECT_KEYS>) ORDER BY updated ASC",
  "fields": [
    "summary",
    "status",
    "priority",
    "assignee",
    "created",
    "updated",
    "resolutiondate"
  ],
  "startAt": 0,
  "maxResults": 100
}
```

Do not request every field by default. Field minimization improves performance, reduces exposure, and makes schema changes easier to govern.

## Pagination algorithm

```text
startAt = 0
repeat:
  request page
  validate response
  persist page
  startAt = startAt + returned_count
until startAt >= total
```

The extractor should treat `total` as informational rather than a permanent contract because data can change while extraction is running. For large estates, use a stable updated-time window and deterministic ordering.

## Incremental extraction pattern

Use a high-water mark based on `updated`, with a safety overlap to capture late-arriving changes.

```jql
updated >= "<LAST_SUCCESS_MINUS_OVERLAP>" AND updated < "<CURRENT_RUN_CUTOFF>"
ORDER BY updated ASC, key ASC
```

Persist:

- run identifier;
- window start and cutoff;
- last successful page;
- record count;
- source watermark;
- validation result;
- completion state.

## Retry policy

Retry only transient failures such as timeouts, selected 5xx responses, and explicit throttling responses. Do not blindly retry authentication, authorization, validation, or malformed-request failures.

Recommended behavior:

```text
attempt 1 -> immediate
attempt 2 -> exponential delay + jitter
attempt 3 -> exponential delay + jitter
attempt 4 -> stop, preserve checkpoint, raise operational alert
```

Honor server-provided retry guidance when available.

## Controlled comment write-back

```http
POST /rest/api/3/issue/<ISSUE_KEY>/comment
Content-Type: application/json

{
  "body": {
    "type": "doc",
    "version": 1,
    "content": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "<APPROVED_RELEASE_WORKFLOW_COMMENT>"
          }
        ]
      }
    ]
  }
}
```

Before posting, search existing comments for an idempotency marker such as a run ID or release ID. Never post duplicate workflow comments.

## Validation checklist

- API identity and scopes approved;
- endpoint and API version confirmed;
- field list documented;
- JQL reconciled against Jira UI samples;
- pagination tested above one page;
- rate-limit and timeout behavior tested;
- secrets absent from source control and logs;
- raw record count reconciled;
- duplicate and missing-key checks passed;
- write-back tested for idempotency;
- rollback and support ownership documented.

## Related assets

- [JQL library](../jql/README.md)
- [SQL library](../sql/README.md)
- [Python utilities](../python/README.md)
- [Automation patterns](../automation/README.md)
- [Power BI implementation guide](../../docs/Power-BI-Implementation-Guide.md)
