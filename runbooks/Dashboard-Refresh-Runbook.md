# Dashboard Refresh Runbook

## Purpose

This runbook defines the standard operating procedure for monitoring, diagnosing, recovering, validating, and closing dashboard refresh incidents across enterprise reporting platforms.

It is designed for dashboards built on Jira, Jira Service Management, REST APIs, data lakes, data warehouses, Power BI, EazyBI, and related analytics services.

## Scope

This runbook applies when any of the following occurs:

- A scheduled refresh fails.
- A dashboard displays stale data.
- Source and dashboard totals do not reconcile.
- A dataset refresh exceeds its normal duration.
- Credentials, gateways, APIs, or upstream systems become unavailable.
- A refresh succeeds technically but produces incomplete or invalid data.
- A published dashboard is unavailable after refresh or deployment.

## Operating principles

1. Protect data integrity before restoring availability.
2. Never publish unvalidated data as healthy.
3. Preserve the last known good dataset whenever possible.
4. Record evidence for every failed refresh and recovery action.
5. Escalate based on business impact, not only technical severity.
6. Close the incident only after reconciliation and stakeholder confirmation.

## Roles and responsibilities

| Role | Responsibility |
|---|---|
| Monitoring owner | Detects failures and opens the incident record. |
| Analytics support | Performs first-level diagnosis and recovery. |
| Data owner | Confirms source availability and data completeness. |
| Platform owner | Resolves gateway, capacity, service, or infrastructure issues. |
| Dashboard owner | Validates visuals, filters, calculations, and user impact. |
| Business owner | Confirms restored data is acceptable for decision-making. |
| Incident manager | Coordinates major incidents, communications, and escalation. |

## Severity classification

| Severity | Definition | Example | Target response |
|---|---|---|---|
| SEV-1 | Executive or regulatory reporting unavailable or materially incorrect. | Board dashboard is unavailable before a scheduled review. | Immediate |
| SEV-2 | Critical operational dashboard unavailable or stale with no acceptable workaround. | Incident-management dashboard is more than one refresh cycle behind. | Within 30 minutes |
| SEV-3 | Partial failure, degraded performance, or limited-user impact. | One dataset partition fails while the rest remain current. | Within 4 business hours |
| SEV-4 | Minor defect, cosmetic issue, or non-urgent refresh delay. | A low-use dashboard refresh is delayed but data remains usable. | Next business day |

## Entry criteria

Start this runbook when monitoring, a user report, or a validation control identifies a suspected refresh problem.

Capture the following before making changes:

- Dashboard and dataset name
- Workspace, environment, or tenant
- Failure timestamp
- Last successful refresh timestamp
- Refresh mode: scheduled, manual, incremental, direct query, or streaming
- Business audience and current impact
- Error message, correlation ID, or service request ID
- Recent deployment, schema, credential, permission, or configuration changes

## Phase 1: Confirm the incident

### Step 1: Verify freshness

Check:

- Dataset last refreshed timestamp
- Dashboard last updated timestamp
- Source system latest available record timestamp
- Expected refresh frequency
- Time-zone alignment
- Incremental-refresh partition status

Do not rely only on a successful refresh indicator. A technically successful refresh can still contain stale or incomplete data.

### Step 2: Reproduce the issue

Validate the problem using at least two independent checks where possible:

- Compare dashboard totals with source-system queries.
- Compare current results with the previous successful refresh.
- Check whether all users or only specific roles are affected.
- Test another dashboard using the same source, gateway, or semantic model.

### Step 3: Determine business impact

Identify:

- Which reports and audiences are affected
- Whether decisions, SLA reviews, releases, audits, or executive meetings are blocked
- Whether a trusted workaround exists
- Whether incorrect data was already distributed

Assign severity and start communications according to the incident level.

## Phase 2: Diagnose the failure domain

Use the error evidence to identify the most likely failure domain.

| Failure domain | Typical indicators | Initial checks |
|---|---|---|
| Source system | Timeout, unavailable endpoint, incomplete extract | Source health, query access, rate limits, maintenance windows |
| Authentication | Expired token, invalid credentials, unauthorized response | Secret expiry, service account status, OAuth consent, permission changes |
| Network or gateway | Gateway offline, DNS failure, connectivity timeout | Gateway status, cluster health, firewall, proxy, certificate |
| API extraction | Pagination gaps, rate limiting, malformed response | HTTP status, retry logic, page count, continuation token |
| Schema change | Missing column, type mismatch, renamed field | Source schema, transformation mappings, model dependencies |
| Transformation | Query error, invalid join, duplicate explosion | Query steps, row counts, nulls, join cardinality |
| Capacity or performance | Memory error, timeout, throttling | Capacity utilization, concurrent jobs, dataset size, query duration |
| Semantic model | Measure error, relationship issue, partition failure | Model validation, calculation errors, relationship integrity |
| Publication | Refresh completes but dashboard remains old | Dataset binding, cache, deployment status, workspace permissions |
| Data quality | Refresh succeeds with invalid totals | Completeness, accuracy, timeliness, consistency, uniqueness checks |

## Phase 3: Recovery actions

### Source-system failure

1. Confirm the source-system incident or maintenance window.
2. Pause repeated automated retries if they may increase load.
3. Use the last known good dataset when business-approved.
4. Resume refresh only after the source owner confirms stability.
5. Run reconciliation before publication.

### Authentication or permission failure

1. Confirm whether the credential, token, certificate, or secret expired.
2. Validate the service account is active and correctly licensed.
3. Restore the approved credential through the governed secret-management process.
4. Test access with the least-privileged account.
5. Trigger a controlled refresh.
6. Record the new expiry date and preventive action.

Never place credentials, tokens, or secrets in the incident record or repository.

### Gateway or connectivity failure

1. Check gateway service and cluster status.
2. Confirm network reachability to each required source.
3. Validate certificates, DNS, firewall rules, proxy settings, and ports.
4. Restart only the affected component when restart approval exists.
5. Confirm failover-node health where a cluster is used.
6. Test a lightweight source connection before running the full refresh.

### API extraction failure

1. Capture the endpoint, response code, and correlation ID.
2. Confirm authentication and API version.
3. Check rate limits and retry-after guidance.
4. Validate pagination, continuation tokens, and maximum page size.
5. Confirm filters did not unintentionally exclude records.
6. Restart from a safe checkpoint rather than duplicating the full load.
7. Reconcile extracted record counts with the source.

### Schema-change failure

1. Compare the current source schema with the last successful schema.
2. Identify renamed, removed, added, or type-changed fields.
3. Assess downstream impact across transformations, models, measures, and visuals.
4. Apply a backward-compatible correction where possible.
5. Validate all dependent datasets before publication.
6. Raise a governed change for permanent remediation.

### Transformation or model failure

1. Identify the first failing transformation or partition.
2. Validate row counts before and after each major step.
3. Check null handling, joins, duplicate keys, and data types.
4. Roll back to the last known good transformation when needed.
5. Reprocess only affected partitions when safe.
6. Run model validation and calculation checks.

### Capacity or performance failure

1. Check concurrent refreshes and workload peaks.
2. Compare current duration with the normal baseline.
3. Identify memory-intensive queries, large partitions, and unnecessary columns.
4. Reschedule non-critical workloads when approved.
5. Use incremental refresh or partition processing where supported.
6. Escalate sustained capacity constraints to the platform owner.

### Publication or cache failure

1. Confirm the refreshed dataset is bound to the published dashboard.
2. Validate deployment-pipeline status and environment mapping.
3. Check cache, browser session, embedded-report configuration, and permissions.
4. Confirm the correct workspace and version are being accessed.
5. Republish only after the refreshed dataset has passed validation.

## Phase 4: Validation and reconciliation

A refresh is not considered recovered until all mandatory validations pass.

### Technical validation

- Refresh status is successful.
- All required partitions completed.
- Refresh duration is within an acceptable range or explained.
- No unresolved gateway, API, model, or capacity errors remain.
- Dataset and dashboard timestamps are current.

### Data-quality validation

| Dimension | Required check |
|---|---|
| Completeness | Expected records, periods, teams, products, and dimensions are present. |
| Accuracy | Key totals match the trusted source within the approved tolerance. |
| Timeliness | Data falls within the agreed freshness SLA. |
| Consistency | Related dashboards and reporting layers show compatible results. |
| Uniqueness | Duplicate records or keys have not been introduced. |
| Validity | Values conform to expected formats, domains, and business rules. |

### Business reconciliation

At minimum, validate:

- Total record count
- Created and resolved counts where applicable
- Open backlog or inventory
- Financial totals where applicable
- SLA or KPI numerator and denominator
- Current period and prior period
- One representative drill-down to transaction or issue level

Record the evidence, tolerance, result, and validator for each check.

## Phase 5: Communication

### Initial notification

Include:

- What is affected
- Business impact
- Last known good refresh
- Current severity
- Whether a workaround exists
- Next update time

### Progress update

Include:

- Confirmed failure domain
- Actions completed
- Remaining risk
- Revised recovery estimate
- Decision or support required

### Resolution notice

Include:

- Recovery timestamp
- Root cause or current best-known cause
- Validation completed
- Data period confirmed
- Any residual limitation
- Follow-up problem or change record

Do not state that data is restored until reconciliation has passed.

## Escalation triggers

Escalate immediately when:

- Incorrect data reached an executive, customer, audit, or regulatory audience.
- Recovery is likely to miss a committed reporting deadline.
- More than one critical dashboard or platform is affected.
- Credentials or permissions suggest a security incident.
- Data loss, corruption, or duplication is suspected.
- Repeated retries are increasing source-system or platform impact.
- The same failure recurs without a permanent corrective action.

## Rollback and last-known-good operation

Use rollback when the new refresh, transformation, model, or deployment cannot be safely corrected within the required recovery window.

Rollback requirements:

1. Identify the last validated dataset, model, or deployment.
2. Confirm rollback compatibility with the current source schema.
3. Obtain required approval based on severity and governance policy.
4. Preserve failed-run logs and artifacts.
5. Restore the last known good version.
6. Validate freshness limitations and clearly label them.
7. Communicate the rollback and expected next refresh.

Never conceal stale data. Display or communicate its effective timestamp.

## Evidence and audit record

Retain:

- Incident or problem record
- Refresh-run ID and timestamps
- Error messages and correlation IDs
- Source and dashboard record counts
- Validation results
- Recovery actions and owners
- Approvals and communications
- Root-cause analysis where required
- Corrective and preventive actions

Do not retain secrets, tokens, passwords, or restricted personal data in the evidence package.

## Problem management and prevention

Create a problem record when:

- The failure repeats.
- A manual recovery step is required more than once.
- The incident exposes an architectural weakness.
- Monitoring did not detect the failure promptly.
- Recovery depends on undocumented knowledge.

Potential preventive controls include:

- Credential-expiry alerts
- Gateway-health monitoring
- Source-schema drift detection
- Automated record-count reconciliation
- Refresh-duration anomaly alerts
- API rate-limit monitoring
- Partition-level validation
- Last-known-good retention
- Dependency and ownership registers
- Synthetic refresh tests

## Exit criteria

The incident may be closed only when:

- The refresh completed successfully.
- Freshness meets the agreed SLA or an approved exception exists.
- Mandatory reconciliation passed.
- Dashboard owners verified critical visuals and filters.
- Business impact ended.
- Stakeholders received a resolution notice.
- Evidence is attached to the incident record.
- Follow-up actions have owners and due dates.
- A problem record or RCA has been created when required.

## Operational checklist

### Detection

- [ ] Alert or user report validated
- [ ] Incident record created
- [ ] Severity assigned
- [ ] Last successful refresh identified
- [ ] Business impact documented

### Diagnosis

- [ ] Source availability checked
- [ ] Credentials and permissions checked
- [ ] Gateway and connectivity checked
- [ ] API and pagination checked
- [ ] Schema and transformation changes checked
- [ ] Capacity and performance checked
- [ ] Failure domain confirmed

### Recovery

- [ ] Safe recovery method selected
- [ ] Required approval obtained
- [ ] Refresh or rollback completed
- [ ] Repeated retries controlled
- [ ] Last-known-good data protected

### Validation

- [ ] Technical checks passed
- [ ] Data-quality checks passed
- [ ] Source reconciliation passed
- [ ] Critical visuals tested
- [ ] Dashboard timestamp confirmed

### Closure

- [ ] Resolution communicated
- [ ] Evidence retained
- [ ] Corrective actions assigned
- [ ] RCA or problem record created where required
- [ ] Incident formally closed

## Acceptance criteria

This runbook is accepted when it:

- Covers detection, severity, diagnosis, recovery, validation, communication, rollback, and closure.
- Distinguishes technical refresh success from data correctness.
- Defines clear responsibilities and escalation triggers.
- Supports source, API, gateway, model, capacity, and publication failures.
- Requires reconciliation before declaring recovery.
- Protects credentials and sensitive information.
- Provides a reusable operational checklist.
- Can be applied across Jira, JSM, Power BI, EazyBI, and enterprise data platforms.

## Related documents

- `docs/governance/Governance-Cadence-Guide.md`
- `templates/governance/KPI-Definition-Template.md`
- `templates/governance/RAID-Register-Template.md`
- `docs/Enterprise-Reference-Architecture.md`
- `docs/Power-BI-Implementation-Guide.md`

## Version history

| Version | Date | Change |
|---|---|---|
| 1.0 | 2026-07-31 | Initial governed dashboard refresh runbook. |
