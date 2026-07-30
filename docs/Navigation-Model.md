# Navigation Model

## Purpose

This document defines how readers should move between the GitHub repository, the live GitHub Pages experience, and implementation artifacts.

## Navigation Layers

### Layer 1 — Public Portal

The GitHub Pages site is the visual entry point for executives, hiring managers, and readers who want to explore the framework without navigating repository folders.

Primary entry:

- Live executive analytics dashboard
- Future framework landing page
- Dashboard gallery
- Featured playbooks and reference links

### Layer 2 — Repository Home

`README.md` is the authoritative orientation page for the complete knowledge product. It should help a visitor choose one of four paths:

1. Understand the framework
2. Explore analytics
3. Plan a transformation
4. Execute controlled migration and operations

### Layer 3 — Domain Hubs

Major domains should have an index or landing document when the content set becomes large enough:

- Framework
- Analytics
- Governance
- Playbooks
- Runbooks
- Reference
- Roadmap

### Layer 4 — Individual Artifacts

Documents, dashboards, templates, examples, and datasets should link back to their domain hub and forward to the next logical action.

## Primary User Paths

| User Goal | Entry Point | Next Step | Completion Point |
|---|---|---|---|
| Understand the product | Repository README | Enterprise framework | Lifecycle and principles understood |
| View executive reporting | Live Pages site | Executive Portfolio dashboard | Decision signals and drill-down pattern understood |
| Define metrics | Metrics Library | Dashboard specification | KPI definition and ownership agreed |
| Plan consolidation | Consolidation Playbook | Registers and governance model | Approved rationalization plan |
| Execute migration | Migration Runbook | Cutover and rollback runbooks | Validated migration outcome |
| Establish governance | Governance Model | Standards and exception controls | Decision rights and review cadence defined |

## Link Conventions

- Use relative links inside the repository.
- Use the public Pages URL when directing readers to the rendered interactive experience.
- Link to a specific section where it saves navigation effort.
- Avoid duplicate links that appear to lead to different resources but resolve to the same content.
- Use meaningful link text instead of phrases such as “click here.”

## Document Footer Pattern

Major documents should eventually end with a compact navigation block:

```markdown
## Related Resources

- Previous: [Relevant prerequisite]
- Next: [Logical next action]
- Reference: [Supporting standard or metric library]
- Live experience: [Relevant dashboard or portal page]
```

## Portal Navigation Standard

The future documentation portal should use the following top-level navigation:

```text
Home | Framework | Analytics | Governance | Playbooks | Runbooks | Reference | Roadmap
```

On small screens, this should collapse into an accessible menu without removing access to the primary sections.

## Executive View Standard

The executive landing experience should prioritize:

1. Current portfolio health
2. Material risk and required decisions
3. Delivery predictability
4. Operational reliability
5. Benefits and cost outcomes
6. Transformation progress
7. Clear links to deeper evidence

The executive view should not expose technical detail until the reader chooses to drill down.

## Repository-to-Portal Mapping

| Repository Area | Portal Destination |
|---|---|
| `README.md` | Home |
| `docs/Enterprise-Jira-Transformation-Framework.md` | Framework |
| `docs/Governance-Model.md` | Governance |
| `docs/Metrics-Library.md` | Reference / Analytics |
| `dashboard-gallery/` | Analytics |
| `playbooks/` | Playbooks |
| `runbooks/` | Runbooks |
| `registers/`, `templates/`, `examples/`, `datasets/` | Reference and Downloads |
| `roadmap/` | Roadmap |

## Navigation Quality Checks

A navigation change is complete only when:

- the live site and repository home do not contradict each other;
- major resources are reachable within three meaningful choices;
- no primary page becomes an orphan;
- labels are consistent across the portal and repository;
- mobile navigation remains usable;
- users can distinguish live prototypes from reference documentation.
