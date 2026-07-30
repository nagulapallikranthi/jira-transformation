# Documentation Standards

## Purpose

These standards keep the Enterprise Jira Transformation Framework consistent, trustworthy, maintainable, and suitable for public enterprise use.

## Core Principles

1. **Organization-neutral** — never expose employer, customer, employee, tenant, credential, incident, or proprietary data.
2. **Decision-oriented** — explain what decision the reader can make or what action they can take.
3. **Evidence-aware** — distinguish established guidance, configurable examples, assumptions, and prototypes.
4. **Reusable** — favor adaptable patterns over one-organization prescriptions.
5. **Measurable** — define outputs, controls, acceptance criteria, and success measures.
6. **Accessible** — use direct language, clear headings, short paragraphs, and meaningful tables.
7. **Traceable** — cross-link related frameworks, metrics, playbooks, runbooks, and templates.

## Standard Document Header

Every major artifact should begin with:

```markdown
# Document Title

**Status:** Concept | Draft | Reference | Template | Prototype  
**Audience:** Primary reader groups  
**Purpose:** One concise statement of intended value
```

Formal release management may later add owner, version, last-reviewed date, and approval status.

## Recommended Document Structure

1. Purpose
2. Intended audience
3. Scope
4. Context or problem statement
5. Principles or assumptions
6. Method, model, or procedure
7. Roles and ownership
8. Controls and decision points
9. Measures and acceptance criteria
10. Risks and trade-offs
11. Related resources

Not every document needs every heading, but the reader should always understand purpose, ownership, action, and outcome.

## Writing Style

- Write for leaders and practitioners, not only specialists.
- Define uncommon terms at first use.
- Use active voice and explicit ownership.
- Prefer specific verbs such as assess, approve, validate, reconcile, escalate, and measure.
- Avoid marketing claims that cannot be demonstrated.
- Avoid unexplained maturity labels such as best practice or industry standard.
- Use examples to clarify decisions, not to imitate real internal data.

## Tables

Use tables when readers need to compare dimensions, owners, thresholds, phases, or controls. Every table should have clear column headings and should remain readable on a standard browser width.

## Diagrams

- Prefer Mermaid for version-controlled process and architecture diagrams.
- Provide a short written explanation below complex diagrams.
- Keep node labels concise.
- Use organization-neutral terms.
- Do not reproduce proprietary screenshots or internal architecture.

## Metrics and Formulas

Every formal KPI should define:

- business purpose;
- formula;
- numerator and denominator where applicable;
- inclusion and exclusion rules;
- source data;
- grain and aggregation behavior;
- refresh cadence;
- owner;
- target and thresholds;
- interpretation;
- action when the threshold is breached.

## Technical Examples

JQL, SQL, MDX, DAX, REST, and automation examples must:

- use placeholders or synthetic identifiers;
- identify required adaptation points;
- avoid credentials and real URLs;
- explain expected output;
- include limitations or assumptions;
- be validated where practical before being presented as reference material.

## Dashboard Standards

Every dashboard specification should identify:

- audience and decision purpose;
- KPI definitions;
- slicers and filters;
- visual type and rationale;
- drill-down path;
- data quality checks;
- refresh expectation;
- ownership;
- threshold and action logic;
- synthetic-data notice for demonstrations.

## Review Checklist

Before publication, confirm:

- no confidential or identifying data is present;
- links and cross-references work;
- headings follow a logical hierarchy;
- claims are supportable;
- assumptions are explicit;
- examples are synthetic;
- actions, ownership, and outcomes are clear;
- spelling, formatting, and terminology are consistent;
- the artifact fits the repository structure;
- status accurately reflects maturity.

## Change Discipline

Material changes should explain:

- what changed;
- why it changed;
- who is affected;
- whether definitions or expected behavior changed;
- what validation was completed.

Changes to metric formulas, governance controls, or operational procedures should be treated as controlled changes rather than editorial updates.
