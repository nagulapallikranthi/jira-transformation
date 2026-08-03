# Verification Pack — S2-009: Reusable Tables

Acceptance Criteria
- Reusable table component renders provided columns and rows.
- Table has basic accessible markup (role="table") and simple styling for readability.

Verification Checklist
- [ ] Open dashboard-gallery/examples/reusable-tables-demo.html via a static server from branch feature/portal-core.
- [ ] Confirm table renders with header cells: ID, Name, Status.
- [ ] Confirm two sample rows are present.
- [ ] Confirm no console errors.

Required Evidence
- Screenshot of the demo table (dashboard-gallery/artifacts/s2-009-verify.png)
- DOM snippet showing table markup

Notes
- This is a minimal implementation designed to be reusable across dashboards; enhancements (sorting, pagination, styling) are future work.
