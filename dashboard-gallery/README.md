# Enterprise Analytics Dashboard Gallery

The dashboard gallery converts the Enterprise Metrics Library into an interactive, visual reference experience.

## Open the Master Dashboard

[Launch the interactive dashboard gallery](index.html)

The gallery includes five organization-neutral sample reports:

1. Executive Portfolio Dashboard
2. Sprint Governance Dashboard
3. JSM SLA and Operations Dashboard
4. Transformation Governance Dashboard
5. FinOps and Cost Optimization Dashboard

All names, values, programs, teams, tickets, financial amounts, and operating scenarios are synthetic.

## Purpose

The gallery demonstrates how approved KPI definitions can be translated into decision-ready dashboards. It is intended to help portfolio leaders, PMOs, engineering managers, service owners, platform teams, and analytics practitioners understand:

- the recommended information hierarchy;
- the relationship between KPI cards, trends, diagnostics, and action queues;
- the drill-down path from executive signal to operational evidence;
- the difference between audience-specific views built from a shared metric model;
- the expected narrative and action associated with each dashboard.

## Dashboard Map

| Dashboard | Primary Audience | Decision Supported | Gallery Link |
|---|---|---|---|
| Executive Portfolio | CIO, CTO, VP, portfolio leadership | Where is executive intervention required? | [Open view](index.html#executive) |
| Sprint Governance | PMO, engineering managers, delivery leads | Can current commitments be trusted? | [Open view](index.html#sprint) |
| JSM Operations | Operations leaders and service owners | Where is service performance deteriorating? | [Open view](index.html#jsm) |
| Transformation Governance | Transformation board and platform leadership | Is the operating model becoming simpler and governed? | [Open view](index.html#transformation) |
| FinOps | CIO, Finance, CloudOps, FinOps | Are financial opportunities becoming realized value? | [Open view](index.html#finops) |

## Relationship to the Metrics Library

The gallery is the visual companion to the [Enterprise Metrics and Dashboard Library](../docs/Metrics-Library.md).

The Metrics Library is the authoritative source for:

- metric purpose;
- formulas;
- ownership;
- refresh cadence;
- RAG thresholds;
- exclusions;
- drill-down dimensions;
- interpretation guidance;
- expected action.

The HTML gallery demonstrates presentation and interaction. It does not replace metric governance or implementation specifications.

## Design Principles Demonstrated

Each dashboard follows a common decision path:

```text
Signal
  ↓
Trend
  ↓
Segment
  ↓
Root cause
  ↓
Action
  ↓
Underlying evidence
```

The visual design intentionally includes:

- four headline KPI cards;
- visible status and target context;
- trend or distribution analysis;
- an action-oriented detail table;
- a concise management narrative;
- audience-relevant filters;
- clear disclosure that the data is illustrative.

## Running Locally

Open `index.html` directly in a modern browser.

For a local web server, run one of the following commands from the repository root:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/dashboard-gallery/
```

## GitHub Pages

The gallery can be published through GitHub Pages after the repository owner selects an approved Pages source. The page is fully static and does not require a server, build tool, JavaScript framework, external library, or real data connection.

A production publication should add:

- accessibility validation;
- approved branding;
- automated HTML checks;
- a version and release process;
- dashboard implementation specifications;
- controlled sample-data files;
- tested browser support.

## Data and Confidentiality

The gallery must remain organization-neutral. Do not add real:

- Jira URLs;
- project keys;
- issue IDs;
- user names;
- customer names;
- financial results;
- internal service names;
- credentials;
- incident details;
- proprietary configurations.

Refer to [`PORTFOLIO_DATA_POLICY.md`](../PORTFOLIO_DATA_POLICY.md) before contributing dashboard content.
