S2-004A — Design System Integration

Status: Open

Description:
The design system assets (design-system.css, portal.css, portal.js) were not loading correctly from the Executive Arrival Experience (Engineering Command Center) page. On GitHub Pages the page appeared unstyled (raw HTML) because the resource links used absolute paths that didn't resolve under the repository path.

Root cause:
- dashboard-gallery/index.html referenced assets using absolute paths beginning with a leading slash (e.g., `/assets/css/design-system.css`). On GitHub Pages for a project site, absolute paths resolve to the domain root (https://<user>.github.io/), not the repository subpath (https://<user>.github.io/<repo>/), causing 404s for asset requests.

Impact:
- CSS and JS were not loaded, producing an unstyled, low-quality user experience and breaking any JS-driven component hydration.

Definition of Done:
- design-system.css loads without 404s
- portal.css loads without 404s
- portal.js loads without 404s
- No console errors when page loads
- GitHub Pages renders styled UI identical to local preview (relative paths)
- Local preview and GitHub Pages behave identically

Steps to reproduce:
1. Open https://nagulapallikranthi.github.io/jira-transformation/dashboard-gallery/ (or preview the feature branch locally)
2. Observe missing styles and console 404s for `/assets/...` resources

Proposed fix (applied in feature/portal-core branch):
- Change asset references in dashboard-gallery/index.html to relative paths (`../assets/...`) so they resolve correctly from the `dashboard-gallery/` directory.

Verification steps performed:
- Updated `dashboard-gallery/index.html` on feature/portal-core to use `../assets/...` for CSS and JS links.
- Local preview of the file should now load CSS and JS from `../assets/...` and render the styled UI.

Next steps (manual validation required):
- Open the page on GitHub Pages once the feature branch is published as a preview (or merge to main when approved) and verify no 404s in the Network tab.
- Run a quick Lighthouse accessibility and console check.

Owner: Program Manager (Architecture) — @nagulapallikranthi
Priority: High (blocker for S2-004)
