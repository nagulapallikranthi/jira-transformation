# Jira Analytics Quality Gates

## Purpose

Define objective checks that determine whether an analytics refresh is safe to publish.

## Gate sequence

```text
Extraction complete
  -> schema gate
  -> identifier gate
  -> duplicate gate
  -> reconciliation gate
  -> freshness gate
  -> semantic gate
  -> publication
```

A failed mandatory gate blocks the new dataset from replacing the last known good publication.

## Gate definitions

| Gate | Example rule | Failure response |
|---|---|---|
| Schema | Required fields and data types are present | Quarantine incompatible records and stop |
| Identifier | Issue ID and key are populated | Reject affected records |
| Duplicate | No duplicate issue ID plus source-update version | Deduplicate only by approved rule; otherwise stop |
| Reconciliation | Raw unique equals curated plus quarantined | Stop publication |
| Freshness | Source watermark is within agreed tolerance | Mark stale and alert |
| Completeness | Mandatory reporting dimensions meet threshold | Stop or publish degraded only by policy |
| Semantic | Done dates, status categories, and financial signs are coherent | Quarantine or stop |
| Referential | Project, status, user, and sprint keys resolve | Route unresolved values to Unknown and alert |

## Example Python gate runner

```python
from __future__ import annotations

from dataclasses import dataclass
from typing import Callable


@dataclass(frozen=True)
class GateResult:
    name: str
    passed: bool
    detail: str
    mandatory: bool = True


def evaluate_gates(
    checks: list[tuple[str, Callable[[], tuple[bool, str]], bool]],
) -> list[GateResult]:
    results: list[GateResult] = []
    for name, check, mandatory in checks:
        try:
            passed, detail = check()
        except Exception as exc:  # Replace with structured logging in production.
            passed = False
            detail = f"Gate raised {type(exc).__name__}: {exc}"
        results.append(GateResult(name, passed, detail, mandatory))
    return results


def publication_allowed(results: list[GateResult]) -> bool:
    return all(result.passed for result in results if result.mandatory)
```

## Semantic checks for Jira data

Recommended checks include:

- completed issues have a valid completion or resolution date;
- open issues do not carry an active completed-state resolution unless explicitly allowed;
- sprint end is not earlier than sprint start;
- issue created timestamp is not after the source-updated timestamp;
- SLA elapsed values are not negative;
- realized savings are associated with completed work;
- pipeline savings are associated with open or approved future work;
- cost increases follow the agreed sign convention;
- parent and child portfolio dimensions do not conflict without an approved exception;
- transition timestamps are chronologically ordered.

## Degraded publication

Degraded publication should be exceptional and policy-driven. The manifest must state:

- which non-mandatory gate failed;
- affected scope;
- expected reporting impact;
- owner;
- mitigation;
- expiry time for the exception.

Never silently publish incomplete data.

## Operational evidence

For every run, retain:

- gate results;
- row counts by layer;
- source and publication watermarks;
- rejected-record sample or reference;
- schema version;
- code version;
- configuration version;
- prior published run ID;
- final decision and decision timestamp.

## Acceptance criteria

- A mandatory failure prevents pointer or table-swap publication.
- The previous successful dataset remains available.
- Operators can identify the failing gate from the manifest.
- Reprocessing the corrected window produces a new auditable run.
- Quality thresholds are configuration-controlled and reviewed.
