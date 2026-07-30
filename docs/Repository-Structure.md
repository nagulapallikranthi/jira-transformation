# Repository Structure

## Purpose

This document defines the target organization of the Enterprise Jira Transformation Framework repository. The structure is designed to keep executive guidance, implementation material, interactive assets, and reusable templates easy to find and maintain.

## Target Structure

```text
jira-transformation/
├── README.md
├── PORTFOLIO_DATA_POLICY.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── SECURITY.md
├── CODE_OF_CONDUCT.md
├── .github/
│   ├── workflows/
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
├── dashboard-gallery/
│   ├── index.html
│   ├── assets/
│   └── README.md
├── docs/
│   ├── Enterprise-Jira-Transformation-Framework.md
│   ├── Governance-Model.md
│   ├── Metrics-Library.md
│   ├── Site-Map.md
│   ├── Repository-Structure.md
│   ├── Documentation-Standards.md
│   ├── Navigation-Model.md
│   ├── architecture/
│   ├── analytics/
│   ├── governance/
│   └── reference/
├── playbooks/
│   ├── assessment/
│   ├── consolidation/
│   ├── migration/
│   ├── adoption/
│   └── stabilization/
├── runbooks/
│   ├── migration/
│   ├── cutover/
│   ├── rollback/
│   ├── validation/
│   └── reconciliation/
├── templates/
│   ├── governance/
│   ├── program-management/
│   ├── reporting/
│   └── operational-readiness/
├── registers/
│   ├── synthetic-inventories/
│   ├── risk/
│   ├── dependency/
│   └── decision/
├── datasets/
│   ├── synthetic/
│   └── data-dictionary/
├── examples/
│   ├── jql/
│   ├── sql/
│   ├── mdx/
│   ├── dax/
│   └── api/
├── roadmap/
└── wiki/
```

## Folder Responsibilities

| Folder | Responsibility |
|---|---|
| `.github/` | Automation, contribution workflows, issue templates, and repository governance |
| `dashboard-gallery/` | Live GitHub Pages experience and reusable presentation assets |
| `docs/` | Frameworks, policies, architecture, metrics, and reference guidance |
| `playbooks/` | Repeatable leadership and planning methods |
| `runbooks/` | Step-by-step operational execution procedures |
| `templates/` | Reusable documents and implementation structures |
| `registers/` | Synthetic inventories, decisions, risks, dependencies, and controls |
| `datasets/` | Synthetic datasets and data dictionaries only |
| `examples/` | Generic technical examples for analytics and integrations |
| `roadmap/` | Release direction, planned capabilities, and maturity progression |
| `wiki/` | Lightweight supporting navigation or explanatory material |

## Placement Rules

- A document explaining **what and why** belongs in `docs/`.
- A repeatable method explaining **how to plan or lead** belongs in `playbooks/`.
- A controlled procedure explaining **how to execute** belongs in `runbooks/`.
- A reusable blank or configurable artifact belongs in `templates/`.
- A worked technical illustration belongs in `examples/`.
- Structured sample records belong in `datasets/` or `registers/` and must remain synthetic.
- Public-facing web content belongs in `dashboard-gallery/` until the portal expands into a broader site structure.

## Naming Standard

- Use descriptive, stable names.
- Use `Title-Case-With-Hyphens.md` for major Markdown documents.
- Use lowercase directory names.
- Avoid internal acronyms in filenames unless they are widely understood, such as JSM, JQL, SQL, MDX, DAX, or API.
- Do not include version numbers in filenames unless multiple versions must coexist.

## Growth Principle

Folders should be created only when they contain or immediately support meaningful content. The target structure is a roadmap, not a requirement to create empty directories.
