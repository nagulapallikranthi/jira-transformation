# KPI Definition Template

## Purpose

Use this template to define, implement, validate, publish, and maintain a governed KPI. A KPI is not ready for publication until its business purpose, formula, scope, ownership, RAG logic, data lineage, interpretation, reporting method, and success criteria are complete.

## How to use this template

Complete the sections in order. Do not begin dashboard development until Sections 1–6 are approved.

| Step | Activity | Owner | Required outcome |
|---:|---|---|---|
| 1 | Define the business objective and decision question. | Business owner | Clear reason for the KPI. |
| 2 | Define scope, exclusions, grain, and time basis. | Definition owner | Unambiguous population. |
| 3 | Define formula and edge-case rules. | Definition and analytics owners | Reproducible calculation. |
| 4 | Assign ownership. | Governance owner | No accountability gaps. |
| 5 | Define RAG thresholds and required actions. | Business owner | Actionable status logic. |
| 6 | Document source, lineage, refresh, and implementation. | Technical owner | Traceable calculation. |
| 7 | Validate representative, boundary, and historical cases. | Control reviewer | Evidence of correctness. |
| 8 | Define how the KPI is read, discussed, and acted upon. | Dashboard owner | Operational usability. |
| 9 | Approve and publish. | KPI governance forum | Controlled release. |

### Mandatory completion rules

- Replace every placeholder.
- State explicit inclusions and exclusions.
- Define Grey separately from poor performance.
- Include one worked example and one boundary test.
- Link version-controlled technical logic.
- Do not report Green when required data is stale, incomplete, or invalid.

## Document control

| Field | Value |
|---|---|
| KPI name | `<Enter KPI name>` |
| KPI ID | `KPI-<DOMAIN>-<NUMBER>` |
| Version | `0.1` |
| Lifecycle status | Proposed / Pilot / Active / Deprecated / Retired |
| Effective date | `YYYY-MM-DD` |
| Review date | `YYYY-MM-DD` |
| Classification | Public / Internal / Restricted |
| Definition owner | `<Role or function>` |
| Last updated | `YYYY-MM-DD` |

## 1. Business definition

**Instruction:** Complete this in plain business language. A reader must understand why the KPI matters without seeing the formula.

| Field | Value |
|---|---|
| Short name | `<Dashboard-friendly name>` |
| Domain | Executive / Portfolio / Program / Delivery / Sprint / JSM / DevOps / CloudOps / Security / FinOps |
| Business objective | `<Outcome supported>` |
| Decision question | `<Question this KPI answers>` |
| Description | `<What is measured>` |
| Business value | `<Why it matters and what action it enables>` |
| KPI type | Leading / Lagging / Diagnostic / Control |
| Direction | Higher is better / Lower is better / Target range |
| Audience | Executive / PMO / Manager / Product / Engineering / Operations / Analyst |

## 2. Scope and interpretation

**Instruction:** Define the population independently of any dashboard filter or team convention.

### Included

- `<Projects, teams, issue types, statuses, priorities, environments, and periods included>`

### Excluded

- `<Explicit exclusions>`

### Interpretation

Document what high, low, improving, and deteriorating results mean. Also state what the KPI does not prove and which companion KPIs must be reviewed before action is taken.

### How to read

1. Confirm reporting period and refresh time.
2. Check the current value and RAG.
3. Compare target, prior period, and trend.
4. Review numerator and denominator changes.
5. Drill down using approved dimensions.
6. Identify contributors and exceptions.
7. Assign the required action and owner.

### Team discussion prompts

- What changed and why?
- Is the change caused by performance, scope, or data?
- Which teams, work types, or priorities contribute most?
- Is the issue isolated or systemic?
- What action will change the next result?
- Who owns it and by when?

## 3. Ownership

| Role | Accountable party | Responsibility |
|---|---|---|
| Business owner | `<Role>` | Approves meaning, target, and intended use. |
| Definition owner | `<Role>` | Maintains definition and version history. |
| Data owner | `<Role>` | Owns source quality and access. |
| Technical owner | `<Role>` | Owns extraction, transformation, and calculation. |
| Dashboard owner | `<Role>` | Owns presentation and drill-down. |
| Control reviewer | `<Role>` | Performs independent reconciliation. |

## 4. Calculation specification

**Instruction:** The result must be reproducible manually using a small sample.

### Business formula

```text
<Business-readable formula>
```

### Mathematical expression

```text
<Numerator / denominator × 100, or other approved expression>
```

| Property | Numerator | Denominator |
|---|---|---|
| Name | `<Name>` | `<Name>` |
| Population | `<Population>` | `<Population>` |
| Inclusion rule | `<Rule>` | `<Rule>` |
| Exclusion rule | `<Rule>` | `<Rule>` |
| Null or zero handling | `<Rule>` | `<Rule>` |

### Edge cases

| Scenario | Treatment |
|---|---|
| Empty population | `<Rule>` |
| Zero denominator | `<Rule>` |
| Reopened item | `<Rule>` |
| Cancelled or removed item | `<Rule>` |
| Added scope | `<Rule>` |
| Duplicate record | `<Rule>` |
| Late-arriving record | `<Rule>` |
| Partial period | `<Rule>` |

### Grain and time

| Property | Value |
|---|---|
| Base grain | Issue / Sprint / Incident / Change / Deployment / Day / Team / Other |
| Aggregation | Sum / Count / Distinct count / Average / Median / Percentile / Ratio / Custom |
| Time basis | Created / Updated / Resolved / Closed / Sprint end / Event / Snapshot |
| Time zone | `<Approved time zone>` |
| Reporting period | Daily / Weekly / Sprint / Monthly / Quarterly / Rolling |
| Historical method | Event history / Snapshot / Current state / Hybrid |
| Rounding | `<Rule>` |

## 5. Dimensions and filters

| Dimension | Allowed | Definition |
|---|---:|---|
| Portfolio or program | Yes / No | `<Definition>` |
| Product or pillar | Yes / No | `<Definition>` |
| Team or functional group | Yes / No | `<Definition>` |
| Project | Yes / No | `<Definition>` |
| Sprint or release | Yes / No | `<Definition>` |
| Priority or severity | Yes / No | `<Definition>` |
| Environment or region | Yes / No | `<Definition>` |
| Cloud provider or platform | Yes / No | `<Definition>` |
| Issue or request type | Yes / No | `<Definition>` |

### Approved filters

- `<Filter and why it preserves meaning>`

### Prohibited filters

- `<Filter and why it would mislead>`

## 6. RAG thresholds and response

| Status | Rule | Interpretation | Required response |
|---|---|---|---|
| Green | `<Rule>` | Within target. | Continue monitoring. |
| Amber | `<Rule>` | At risk but recoverable. | Record cause, recovery action, owner, and date. |
| Red | `<Rule>` | Material miss or tolerance breach. | Escalate with impact, options, recommendation, and decision date. |
| Grey | Data unavailable, stale, invalid, or not applicable. | Performance cannot be interpreted. | Resolve the data or applicability issue. |

### RAG rules

- Evaluate current value and trend together.
- A worsening Green result may be Amber when recovery is required.
- Use Grey when freshness or quality is outside tolerance.
- Do not hide Red sub-populations inside an average.
- Document and approve every manual override.

| Governance property | Value |
|---|---|
| Threshold basis | Baseline / Target / SLA / Benchmark / Risk appetite / Control limit |
| Approval authority | `<Role or forum>` |
| Review frequency | `<Frequency>` |
| Minimum sample size | `<Rule>` |
| Suppression rule | `<Rule>` |

## 7. Data source and lineage

| Layer | Asset | Required detail | Owner |
|---|---|---|---|
| Source | `<Jira, JSM, CI/CD, monitoring, finance, other>` | `<Project, endpoint, table, fields>` | `<Owner>` |
| Extraction | `<API, connector, export, pipeline>` | `<Job, pagination, retries, controls>` | `<Owner>` |
| Staging | `<Store>` | `<Keys, timestamps, mappings>` | `<Owner>` |
| Curated model | `<Model>` | `<Facts, dimensions, relationships>` | `<Owner>` |
| Presentation | `<Power BI, EazyBI, HTML, portal>` | `<Dashboard and visuals>` | `<Owner>` |

| Refresh property | Value |
|---|---|
| Extraction frequency | `<Frequency>` |
| Dataset refresh | `<Frequency>` |
| Expected latency | `<Duration>` |
| Maximum staleness | `<Duration>` |
| Refresh timestamp displayed | Yes / No |
| Backfill supported | Yes / No |

## 8. Technical implementation

**Instruction:** Include only the technologies used and link reusable governed logic.

```jql
<Validated JQL or library reference>
```

```sql
-- Governed SQL or model reference
```

```mdx
-- Governed EazyBI measure or reference
```

```dax
-- Governed Power BI measure or reference
```

| Automation dependency | Purpose | Failure impact | Recovery control |
|---|---|---|---|
| `<Rule or job>` | `<Purpose>` | `<Impact>` | `<Control>` |

## 9. Data quality

| Dimension | Measure | Threshold | Failure response |
|---|---|---|---|
| Completeness | `% required fields populated` | `<Target>` | `<Action>` |
| Accuracy | `% reconciled` | `<Target>` | `<Action>` |
| Timeliness | `age of latest data` | `<Target>` | `<Action>` |
| Consistency | `% conforming to mappings` | `<Target>` | `<Action>` |
| Uniqueness | `duplicate count` | `0 or target` | `<Action>` |
| Validity | `% passing business rules` | `<Target>` | `<Action>` |

## 10. Validation

| Test | Method | Expected result | Evidence |
|---|---|---|---|
| Source population | Compare source and extracted counts. | Within tolerance. | `<Link>` |
| Formula | Calculate representative sample manually. | Exact match. | `<Link>` |
| Boundary | Test zeros, nulls, empty sets, and threshold edges. | Documented behavior. | `<Link>` |
| Historical | Recalculate prior periods. | Reproducible. | `<Link>` |
| Drill-through | Trace aggregate to records. | Full traceability. | `<Link>` |
| Cross-tool | Compare implemented tools. | Within tolerance. | `<Link>` |
| Access | Validate security. | Authorized access only. | `<Link>` |

## 11. Report and dashboard specification

| Property | Value |
|---|---|
| Primary visual | KPI card / Line / Bar / Heatmap / Matrix / Table |
| Comparison | Target / Prior period / Baseline / Benchmark |
| Trend period | `<Period>` |
| Default grain | `<Grain>` |
| Drill-down | Enterprise → Portfolio → Program → Team → Record |
| Tooltip | `<Required context>` |
| Freshness display | `<Format>` |

### Required report elements

- Current value and RAG.
- Target and prior-period comparison.
- Rolling trend.
- Numerator and denominator.
- Top contributors and exceptions.
- Approved drill-downs.
- Refresh timestamp.
- Definition and owner link.
- Action required for Amber, Red, or Grey.

### Success measurement

| Dimension | Measure | Target |
|---|---|---|
| Adoption | `% intended reviews using the KPI` | `<Target>` |
| Trust | `% reconciliations within tolerance` | `<Target>` |
| Actionability | `% Amber/Red results with owner and action` | `<Target>` |
| Timeliness | `% refreshes within SLA` | `<Target>` |
| Outcome | `<Business result expected to improve>` | `<Target>` |

## 12. Risks, limitations, and dependencies

| Type | Detail | Owner | Mitigation |
|---|---|---|---|
| Assumption | `<Assumption>` | `<Owner>` | `<Validation>` |
| Limitation | `<Limitation>` | `<Owner>` | `<Mitigation>` |
| Misinterpretation risk | `<Risk>` | `<Owner>` | `<Control or companion KPI>` |
| Dependency | `<Dependency>` | `<Owner>` | `<Fallback>` |

## 13. Lifecycle and approval

| State | Entry criteria | Exit criteria |
|---|---|---|
| Proposed | Need and owner identified. | Definition ready for design review. |
| Pilot | Formula and implementation approved for controlled use. | Validation and user acceptance pass. |
| Active | Production approval complete. | Replacement or retirement approved. |
| Deprecated | Replacement or retirement published. | Dependencies removed. |
| Retired | No longer calculated or published. | Not applicable. |

| Approval | Role | Decision | Date | Evidence |
|---|---|---|---|---|
| Business | `<Role>` | Approved / Rejected / Conditional | `YYYY-MM-DD` | `<Link>` |
| Data | `<Role>` | Approved / Rejected / Conditional | `YYYY-MM-DD` | `<Link>` |
| Technical | `<Role>` | Approved / Rejected / Conditional | `YYYY-MM-DD` | `<Link>` |
| Governance | `<Forum>` | Approved / Rejected / Conditional | `YYYY-MM-DD` | `<Link>` |

## 14. Worked example — Sprint Commitment Reliability

| Field | Example |
|---|---|
| Objective | Improve sprint predictability. |
| Decision question | How reliably is original sprint scope accepted by sprint end? |
| Formula | Accepted original committed story points / original committed story points × 100. |
| Included | Work in the sprint at commitment baseline and accepted by sprint end. |
| Excluded | Added scope, approved cancellations, and unestimated work. |
| Green | `>= 90%` |
| Amber | `75% to < 90%` |
| Red | `< 75%` |
| Grey | Missing baseline, invalid sprint state, or stale data. |
| Companion KPIs | Scope change, unplanned work, blocked time, first-pass acceptance. |

Example: original commitment = 100 story points; accepted original commitment = 84 story points. Result = `84%`, therefore Amber.

Interpretation: delivery is below target but recoverable. Review incomplete work, blocker concentration, added work, estimation quality, and acceptance failures before changing future commitment.

Success: the KPI remains Green for three consecutive sprints without worsening quality or team sustainability.

## 15. Publication acceptance checklist

- [ ] Business objective and decision question are clear.
- [ ] Scope, exclusions, grain, and time basis are unambiguous.
- [ ] Formula and edge cases are documented.
- [ ] Ownership is complete.
- [ ] RAG thresholds and actions are approved.
- [ ] Source and lineage are traceable.
- [ ] Technical logic is version controlled.
- [ ] Data-quality gates pass.
- [ ] Representative, boundary, historical, and RAG tests pass.
- [ ] Report explains how to read and interpret the KPI.
- [ ] Amber, Red, and Grey actions are operational.
- [ ] Refresh timestamp and definition link are visible.
- [ ] Success measures are defined.
- [ ] Approvals and effective date are recorded.

## Related documents

- [Governed KPI Catalogue](../../analytics/KPI-Catalogue.md)
- [Dashboard Specification Standard](../../analytics/Dashboard-Specification-Standard.md)
- [Sprint Governance Playbook](../../playbooks/Sprint-Governance-Playbook.md)
- [Governance Cadence Guide](../../docs/governance/Governance-Cadence-Guide.md)
- [Power BI Implementation Guide](../../docs/Power-BI-Implementation-Guide.md)
- [Documentation Standards](../../docs/Documentation-Standards.md)
- [Portfolio Data Policy](../../PORTFOLIO_DATA_POLICY.md)
