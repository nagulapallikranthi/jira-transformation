# Python Utilities for Jira Analytics

This library provides safe, reusable Python patterns for validating Jira extracts, transforming source data, generating quality evidence, and preparing synthetic demonstration datasets.

## Intended use

- validate raw API payloads;
- normalize nested Jira fields;
- detect duplicates and missing identifiers;
- reconcile source, raw, curated, and reporting layers;
- produce refresh manifests and diagnostics;
- generate synthetic data without exposing organizational information;
- run automated quality checks in CI/CD.

## Recommended project structure

```text
python/
  src/
    extract/
    transform/
    validate/
    reconcile/
    synthetic/
  tests/
  config/
  schemas/
  output/
  README.md
```

Configuration should contain placeholders only. Secrets must be provided at runtime through an approved secret-management mechanism.

## Minimal issue validation

```python
from __future__ import annotations

from dataclasses import dataclass
from typing import Any


@dataclass(frozen=True)
class ValidationResult:
    issue_key: str | None
    is_valid: bool
    errors: tuple[str, ...]


def validate_issue(payload: dict[str, Any]) -> ValidationResult:
    errors: list[str] = []
    issue_key = payload.get("key")
    fields = payload.get("fields")

    if not issue_key or not isinstance(issue_key, str):
        errors.append("Missing or invalid issue key")

    if not isinstance(fields, dict):
        errors.append("Missing or invalid fields object")
    else:
        if not fields.get("created"):
            errors.append("Missing created timestamp")
        if not fields.get("updated"):
            errors.append("Missing updated timestamp")
        if not isinstance(fields.get("status"), dict):
            errors.append("Missing or invalid status")

    return ValidationResult(
        issue_key=issue_key if isinstance(issue_key, str) else None,
        is_valid=not errors,
        errors=tuple(errors),
    )
```

Invalid records should be quarantined with the run ID and validation errors. They should not silently disappear from the pipeline.

## Duplicate detection

```python
import pandas as pd


def find_duplicate_issue_versions(df: pd.DataFrame) -> pd.DataFrame:
    required = {"issue_id", "source_updated_at"}
    missing = required.difference(df.columns)
    if missing:
        raise ValueError(f"Missing required columns: {sorted(missing)}")

    mask = df.duplicated(
        subset=["issue_id", "source_updated_at"],
        keep=False,
    )
    return df.loc[mask].sort_values(["issue_id", "source_updated_at"])
```

Use stable source identifiers rather than issue keys alone because keys can change during project moves.

## Reconciliation result

```python
from dataclasses import dataclass


@dataclass(frozen=True)
class Reconciliation:
    source_count: int
    raw_unique_count: int
    curated_count: int
    quarantined_count: int

    @property
    def is_balanced(self) -> bool:
        return self.raw_unique_count == (
            self.curated_count + self.quarantined_count
        )
```

Publication should stop when reconciliation is not balanced.

## Refresh manifest

A refresh manifest should include:

```json
{
  "run_id": "<RUN_ID>",
  "generated_at": "<UTC_TIMESTAMP>",
  "window_start": "<UTC_TIMESTAMP>",
  "window_end": "<UTC_TIMESTAMP>",
  "source_count": 0,
  "curated_count": 0,
  "quarantined_count": 0,
  "duplicate_count": 0,
  "schema_valid": true,
  "reconciliation_valid": true,
  "health": "PASS"
}
```

Dashboards should consume only published runs that passed the quality gate.

## Synthetic-data standard

Synthetic datasets must:

- use invented project names, people, keys, and organizations;
- avoid copying real distributions where they could reveal confidential behavior;
- include a clear synthetic-data notice;
- contain deliberate quality scenarios for testing;
- be reproducible through a fixed random seed;
- never include production tokens, URLs, IDs, comments, or descriptions.

## Testing expectations

At minimum, test:

- valid and invalid payloads;
- missing nested fields;
- duplicate issue versions;
- late-arriving updates;
- empty extraction windows;
- unexpected schema additions;
- reconciliation failures;
- manifest PASS and FAIL outcomes;
- deterministic synthetic-data generation.

## Related assets

- [REST API extraction](../rest-api/extraction-and-pagination.md)
- [SQL analytics library](../sql/README.md)
- [Power BI implementation guide](../../docs/Power-BI-Implementation-Guide.md)
