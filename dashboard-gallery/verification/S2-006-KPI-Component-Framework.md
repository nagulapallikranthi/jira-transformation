# Verification Pack — S2-006: KPI Component Framework

Acceptance Criteria
- kpi-card component renders title, value, and meta fields from provided JSON.
- RAG (red/amber/green) visual indicator present when rag field is provided.
- Component is accessible: has appropriate role/labels and keyboard focus when interactive elements present.

Verification Checklist
- [ ] Open dashboard-gallery/index.html served from branch feature/portal-core.
- [ ] Confirm kpi-card placeholders with data-portal-component="kpi-card" are populated from kpis.json.
- [ ] Inspect rendered card markup for title, value, and meta text.
- [ ] Verify RAG color classes (e.g., contains class or inline styles indicating green/amber/red).
- [ ] Perform a simple keyboard navigation check: tab into the card and confirm focusable elements behave correctly.

Required Evidence
- Screenshot of populated KPI card(s) (dashboard-gallery/artifacts/s2-006-verify.png)
- DOM snippet showing kpi-card markup (copy from Elements panel)
- Link to commit SHA: (replace with committed SHA)

Known Limitations
- Styling is intentionally lightweight; visual polish is out of scope for Sprint 2 verification.

Steps to reproduce
1. git checkout feature/portal-core
2. Serve the repo via a static server (python -m http.server 8000)
3. Open /dashboard-gallery/index.html
4. Verify cards populate and capture evidence

Optional artifacts location
- dashboard-gallery/artifacts/

Notes
- The synthetic fixture dashboard-gallery/data/kpis.json is used for deterministic verification.
