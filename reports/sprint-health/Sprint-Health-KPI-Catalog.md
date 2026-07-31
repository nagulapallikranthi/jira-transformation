# GS-001 — Sprint Health KPI Catalog

## Purpose

This catalog defines the governed KPIs used by the Sprint Health Dashboard. It separates sprint-start commitment from current scope, prevents velocity misuse, preserves spillover visibility, and provides a reproducible basis for Jira, EazyBI and Power BI implementation.

---

## 1. KPI Governance Rules

1. Every KPI must state its business question, formula, population, exclusions, source fields, refresh behavior, thresholds and drill-down path.
2. Story points are the preferred unit for sprint delivery metrics. Issue count may be used only when estimation is unavailable and must be labeled clearly.
3. Sprint-start commitment must be captured as an immutable baseline.
4. Current sprint scope must not be substituted for sprint-start commitment.
5. Added and removed scope must be reported separately.
6. Sprints are never extended to improve a KPI. Incomplete committed work becomes spillover.
7. Velocity is a team planning measure and must not be used for individual evaluation or ungoverned cross-team ranking.
8. Composite scores must not hide critical red conditions.
9. Executive views should use aggregation; operational drill-down must preserve authorization.
10. Thresholds are initial recommendations until calibrated with historical data.

---

## 2. KPI Summary

| KPI ID | KPI | Primary Question | Direction |
|---|---|---|---|
| SH-01 | Sprint Health Score | Is the sprint healthy overall? | Higher is better |
| SH-02 | Commitment Reliability | How much sprint-start commitment was completed? | Higher is better |
| SH-03 | Current Scope Completion | How much current scope is complete? | Higher is better |
| SH-04 | Scope Stability | How stable was scope after sprint start? | Higher is better |
| SH-05 | Scope Added | How much work entered after sprint start? | Lower is generally better |
| SH-06 | Scope Removed | How much committed work was removed? | Lower is generally better |
| SH-07 | Spillover Rate | How much sprint-start commitment remained incomplete? | Lower is better |
| SH-08 | Velocity | How much estimated work was completed? | Trend, not target |
| SH-09 | Blocked Scope Exposure | How much remaining scope is blocked? | Lower is better |
| SH-10 | Blocker Age | How long have blockers remained unresolved? | Lower is better |
| SH-11 | Aging Work Exposure | How much remaining work is aging? | Lower is better |
| SH-12 | Predictability Index | How reliably does the team meet commitments over time? | Higher is better |
| SH-13 | Estimate Change Rate | How much estimation changed after commitment? | Lower is generally better |
| SH-14 | Reopen Rate | How often does completed work return to active status? | Lower is better |
| SH-15 | Acceptance Readiness | How much completed work has required acceptance evidence? | Higher is better |
| SH-16 | Repeated Carryover | How much work has crossed multiple sprint boundaries? | Lower is better |

---

## 3. KPI Specifications

## SH-01 — Sprint Health Score

**Business question:** Is the sprint likely to meet its intended outcome without extending the sprint boundary?

**Formula**

```text
Sprint Health Score =
  Commitment Reliability Component × 30%
+ Completion Alignment Component × 20%
+ Scope Stability Component × 15%
+ Blocked Work Health Component × 15%
+ Spillover Health Component × 10%
+ Quality Health Component × 10%
```

All components are normalized to 0–100.

**Critical overrides**

Overall health is forced to Red when any approved critical condition exists, including:

- Critical production or release blocker affecting sprint outcome
- More than 30% of remaining story points blocked after the sprint midpoint
- Missing or invalid sprint baseline
- Data freshness beyond the approved threshold
- Prohibited-data exposure or authorization failure

**Initial thresholds**

| Result | Status |
|---|---|
| 85–100 with no critical override | Green |
| 70–84 | Amber |
| Below 70 or critical override | Red |

**Drill-down:** Score → component → team/epic → issue evidence.

---

## SH-02 — Commitment Reliability

**Business question:** What percentage of the sprint-start commitment was completed by sprint end?

```text
Commitment Reliability % =
Completed Sprint-Start Story Points
÷ Sprint-Start Story Points
× 100
```

**Numerator:** Story points from baseline items that meet the governed Done rule by sprint end.

**Denominator:** Story points captured in the immutable sprint-start baseline.

**Included**

- Governed delivery issue types in the baseline
- Baseline estimate, even if the estimate later changes
- Items completed within the approved sprint boundary

**Excluded**

- Work added after sprint start
- Subtasks where parent-level estimation is used
- Invalid or duplicate records
- Formally cancelled items only when the cancellation rule is approved and separately disclosed

**Initial thresholds**

| Result | Status |
|---|---|
| 90% or above | Green |
| 75%–89.99% | Amber |
| Below 75% | Red |

**Key rule:** Current scope completion must never be labeled commitment reliability.

---

## SH-03 — Current Scope Completion

**Business question:** What percentage of the sprint's current scope is complete?

```text
Current Scope Completion % =
Completed Current-Scope Story Points
÷ Current-Scope Story Points
× 100
```

**Use:** In-sprint progress monitoring.

**Limitation:** This measure can improve when unfinished work is removed. It must always be shown beside scope movement.

**Suggested context:** Compare completion percentage with elapsed working-day percentage.

---

## SH-04 — Scope Stability

**Business question:** How stable was the sprint scope after the baseline was taken?

```text
Scope Volatility % =
(Added Story Points + Removed Story Points)
÷ Sprint-Start Story Points
× 100

Scope Stability % = 100% − Scope Volatility %
```

Bound Scope Stability between 0% and 100%.

**Initial thresholds**

| Scope Stability | Status |
|---|---|
| 90% or above | Green |
| 80%–89.99% | Amber |
| Below 80% | Red |

**Key rule:** Added and removed scope remain separately visible because equal values can conceal instability.

---

## SH-05 — Scope Added

```text
Scope Added % =
Story Points Added After Sprint Start
÷ Sprint-Start Story Points
× 100
```

Track:

- Added story points
- Added issue count
- Date added
- Reason category
- Approval owner
- Completion status of added work

Recommended reason categories:

- Production or customer emergency
- Regulatory or security obligation
- Dependency enablement
- Planning omission
- Product priority change
- Technical discovery
- Unclassified

Unclassified additions should be treated as a governance exception.

---

## SH-06 — Scope Removed

```text
Scope Removed % =
Sprint-Start Story Points Removed Before Sprint End
÷ Sprint-Start Story Points
× 100
```

Track removal reason and approval. Removal does not erase the original commitment and must remain visible in commitment analysis.

Recommended reason categories:

- Formal descoping
- Dependency unavailable
- Requirement invalidated
- Duplicate or erroneous item
- Capacity correction
- Reprioritization
- Unclassified

---

## SH-07 — Spillover Rate

**Business question:** How much sprint-start commitment remained incomplete at sprint end?

```text
Spillover Rate % =
Incomplete Sprint-Start Story Points at Sprint End
÷ Sprint-Start Story Points
× 100
```

**Initial thresholds**

| Result | Status |
|---|---|
| 10% or below | Green |
| Above 10% and up to 25% | Amber |
| Above 25% | Red |

**Required dimensions**

- Team
- Epic or initiative
- Issue type
- Spillover reason
- Number of consecutive sprints carried

**Non-negotiable rule:** The sprint must not be extended to avoid spillover.

---

## SH-08 — Velocity

```text
Velocity = Story Points Completed Within the Sprint Boundary
```

Report:

- Current completed velocity
- Median velocity over recent completed sprints
- Rolling average
- Variability
- Capacity context

**Prohibited uses**

- Individual productivity measurement
- Performance ranking
- Cross-team league tables without approved standardization
- Artificial target setting that encourages estimate inflation

Velocity has no universal Green/Amber/Red threshold. Interpret against the team's own history and material capacity changes.

---

## SH-09 — Blocked Scope Exposure

```text
Blocked Scope % =
Blocked Remaining Story Points
÷ Remaining Story Points
× 100
```

Also report blocked issue count and blocked story points.

**Initial thresholds**

| Result | Status |
|---|---|
| 5% or below | Green |
| Above 5% and up to 15% | Amber |
| Above 15% | Red |

A critical blocker may trigger a Red override regardless of percentage.

**Blocked definition:** Governed blocked status, impediment flag or approved blocker field. Labels alone are insufficient for production unless standardized.

---

## SH-10 — Blocker Age

Report:

- Median blocker age
- Oldest blocker age
- Blockers older than the escalation threshold
- Blockers without an owner
- Blockers without a target resolution date

```text
Blocker Age =
Current Timestamp − Latest Valid Blocked-Start Timestamp
```

Pause periods only when the workflow explicitly supports an approved waiting state and the pause is auditable.

Suggested escalation for a ten-working-day sprint:

| Age | Status |
|---|---|
| Up to 1 working day | Green |
| More than 1 and up to 2 working days | Amber |
| More than 2 working days | Red |

---

## SH-11 — Aging Work Exposure

```text
Work Age =
Current Timestamp − Latest Valid Start-of-Work Timestamp
```

Suggested bands for a ten-working-day sprint:

- 0–2 working days
- 3–5 working days
- 6–8 working days
- More than 8 working days

Report both issue count and story points by age band. Separate waiting time from active processing time when reliable transition data exists.

---

## SH-12 — Predictability Index

**Business question:** How consistently does the team meet sprint commitments?

Recommended initial model:

```text
Predictability Index =
Rolling Mean Commitment Reliability
− Reliability Variability Penalty
− Repeated Spillover Penalty
```

Example implementation:

```text
Variability Penalty = min(Standard Deviation of Reliability, 20)
Repeated Spillover Penalty = min(Repeated-Carryover Scope %, 15)
```

Use at least six completed sprints where available. Mark the KPI provisional when fewer than four comparable sprints exist.

---

## SH-13 — Estimate Change Rate

```text
Estimate Change Rate % =
Sum of Absolute Story-Point Changes After Sprint Start
÷ Sprint-Start Story Points
× 100
```

Absolute change prevents increases and decreases from cancelling each other out.

Report:

- Number of items re-estimated
- Net change
- Absolute change
- Timing of change
- Reason category

Estimate changes after commitment should not rewrite the baseline.

---

## SH-14 — Reopen Rate

```text
Reopen Rate % =
Items Reopened After Entering Governed Done State
÷ Items That Entered Governed Done State
× 100
```

Define governed reopen transitions explicitly. Do not count administrative workflow corrections unless approved.

Suggested thresholds require calibration by work type; a provisional starting point is:

| Result | Status |
|---|---|
| 3% or below | Green |
| Above 3% and up to 8% | Amber |
| Above 8% | Red |

---

## SH-15 — Acceptance Readiness

```text
Acceptance Readiness % =
Completed Items with Required Acceptance Evidence
÷ Completed Items Requiring Acceptance
× 100
```

Acceptance evidence may include:

- Product acceptance status
- Test evidence
- Required approval
- Release note or change record
- Linked validation artifact

Do not count evidence merely because an attachment exists; the evidence type must be governed.

---

## SH-16 — Repeated Carryover

```text
Repeated Carryover % =
Story Points on Items Carried Across Two or More Sprint Boundaries
÷ Current Sprint Story Points
× 100
```

Report consecutive sprint count per item.

Suggested severity:

| Consecutive Sprint Boundaries | Status |
|---|---|
| 1 | New spillover |
| 2 | Amber governance review |
| 3 or more | Red escalation and root-cause action |

Repeated carryover should trigger review of slicing, dependency management, estimation, ownership and priority validity.

---

## 4. Common Population Rules

### Governed Delivery Types

Configure approved issue types by project. Typical included types are Story and Task. Epic-level reporting is usually hierarchical rather than included in team velocity. Subtasks are excluded when their parent carries the estimate.

### Done Rule

A work item is complete only when it meets the approved status-category, resolution and acceptance requirements by the sprint boundary. Status name alone is insufficient when workflows vary.

### Sprint Boundary

Use the approved sprint start and end timestamps from Jira. A later manual closure timestamp must not silently extend the performance window.

### Timezone

All snapshots, transition times and boundaries must use the approved reporting timezone. The dashboard must display that timezone.

### Cancelled Work

Cancelled work remains traceable. Whether it is excluded from a KPI depends on the approved cancellation rule and must be disclosed.

### Missing Estimates

Show missing-estimate count and percentage. Do not silently treat missing estimates as zero for commitment metrics.

---

## 5. Data Quality Indicators

Every Sprint Health release must show or validate:

- Missing sprint baseline
- Missing story points
- Duplicate issues
- Invalid sprint dates
- Issues assigned to multiple active sprints unexpectedly
- Missing team mapping
- Missing blocker owner or date
- Unclassified scope-change reasons
- Stale refresh
- Reconciliation variance against Jira

A KPI must be marked **Not Reliable** when a data-quality failure materially affects its numerator, denominator or population.

---

## 6. Worked Example

Sprint-start commitment: 100 story points.

During the sprint:

- 15 points added
- 10 points removed
- 75 baseline points completed
- 8 added points completed
- 12 remaining points blocked
- 25 baseline points incomplete at sprint end

Results:

```text
Commitment Reliability = 75 ÷ 100 = 75%
Scope Added = 15 ÷ 100 = 15%
Scope Removed = 10 ÷ 100 = 10%
Scope Volatility = (15 + 10) ÷ 100 = 25%
Scope Stability = 75%
Spillover Rate = 25 ÷ 100 = 25%
Current Scope = 100 + 15 − 10 = 105 points
Current Scope Completion = (75 + 8) ÷ 105 = 79.05%
```

This example demonstrates why current completion and commitment reliability must remain separate.

---

## 7. Definition of Done

The catalog is production-ready when:

- Every KPI has an approved owner.
- Formulas and populations are validated against sample sprints.
- Thresholds are calibrated or clearly marked provisional.
- Source fields and historical requirements are mapped.
- Privacy and classification controls are applied.
- Jira, EazyBI and Power BI implementations reproduce the same results.
- Drill-down reconciles to source evidence.
- No KPI encourages sprint extension or individual performance ranking.
