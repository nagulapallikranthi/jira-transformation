# Jira API Extraction and Pagination Patterns

## Purpose

Provide a repeatable extraction design that works for proof-of-concept reporting and can scale into an enterprise analytics pipeline.

## Extraction modes

| Mode | Use case | Primary control |
|---|---|---|
| Full baseline | Initial load or controlled rebuild | Fixed run cutoff and reconciliation |
| Incremental | Routine refresh | Updated-time watermark with overlap |
| Targeted replay | Recovery of failed windows | Stored run metadata and bounded date range |
| Reference data | Projects, fields, statuses, users | Independent refresh cadence |
| Changelog | Historical status and field transitions | Separate endpoint and expansion strategy |

## Full baseline

A baseline run should freeze its logical scope using a run cutoff.

```jql
project in (<PROJECT_KEYS>)
AND created < "<RUN_CUTOFF>"
ORDER BY key ASC
```

Record the run cutoff in the manifest. New issues created after the cutoff belong to the next incremental cycle.

## Incremental window

```jql
project in (<PROJECT_KEYS>)
AND updated >= "<WINDOW_START>"
AND updated < "<WINDOW_END>"
ORDER BY updated ASC, key ASC
```

The window start should include an overlap, for example the previous successful watermark minus a configurable safety period. Deduplicate on issue ID plus source-updated timestamp.

## Page contract

For every page, store:

- run ID;
- request sequence;
- start position or cursor;
- requested page size;
- returned count;
- source total when supplied;
- request timestamp;
- response timestamp;
- checksum or content hash;
- validation state.

This makes reprocessing and audit investigation possible without repeating the entire source call.

## Failure classification

| Failure | Retry? | Response |
|---|---:|---|
| Timeout or connection reset | Yes | Backoff and retry |
| Throttling response | Yes | Honor retry guidance |
| Temporary server failure | Limited | Retry with cap |
| Invalid JQL | No | Fail configuration validation |
| Missing permission | No | Escalate access issue |
| Expired credential | No automatic loop | Rotate or refresh credential |
| Schema mismatch | No blind retry | Quarantine payload and alert |

## Reconciliation

At minimum, compare:

1. source issue count for the bounded JQL;
2. raw unique issue count;
3. curated unique issue count;
4. rejected or quarantined count;
5. duplicate count;
6. maximum source-updated timestamp;
7. missing mandatory identifiers.

The equality rule is:

```text
raw unique = curated accepted + quarantined unique
```

Any unexplained difference blocks publication.

## Performance guidance

- Select only required fields.
- Avoid expanding changelog during broad issue searches unless tested for volume.
- Extract reference data separately.
- Partition by project or time window when a single run becomes operationally fragile.
- Preserve raw payloads for replay, subject to retention and privacy controls.
- Use bounded concurrency; more parallel requests are not always faster under rate limits.

## Acceptance criteria

- A run can resume after an interrupted page.
- Replaying the same window creates no duplicates.
- A late update inside the overlap is captured.
- A malformed payload is quarantined rather than silently discarded.
- Counts reconcile before curated publication.
- Run metadata supports investigation without exposing credentials.
