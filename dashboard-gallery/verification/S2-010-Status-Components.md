# Verification Pack — S2-010: Status Components (RAG, Trends, Badges)

Acceptance Criteria
- RAG indicator renders a colored dot with appropriate color coding for 'green', 'amber', 'red'.
- Trend indicator shows delta percentage with ▲/▼ symbols and color.
- Badge renders a pill-shaped label.

Verification Checklist
- [ ] Open dashboard-gallery/examples/status-components-demo.html via a static server from branch feature/portal-core.
- [ ] Confirm RAG placeholder shows a green dot.
- [ ] Confirm Trend placeholder shows ▲ 4% in green.
- [ ] Confirm Badge placeholder shows the text 'Stable'.
- [ ] Confirm no console errors.

Required Evidence
- Screenshot of the demo (dashboard-gallery/artifacts/s2-010-verify.png)
- DOM snippet showing rendered markup

Notes
- This implementation is intentionally minimal for Sprint 2. Enhancements (ARIA improvements, animations) will be added later.
