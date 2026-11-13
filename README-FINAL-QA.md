# Portfolio V2 — final quality pass

This is a PATCH, not a complete repository. Extract its contents into the root of `devrobb-portfolio`, overwriting the matching files.

## Changes
- Reduced project-card height and improved responsive sizing.
- Improved engineering explanations in the central project data file.
- Improved form failure fallback and sender reply-to metadata. The Formspree endpoint is unchanged.
- Added metadata for social sharing, sitemap and robots route.
- Preserved the earlier heading-fix and visual-polish styles.

## Verify
1. `npm run lint`
2. `npm run build`
3. Test Home, Projects, About and Contact at desktop and mobile widths.
4. Test Formspree with a real message and verify it arrives in the inbox. No automated test can guarantee delivery.
5. Check `/sitemap.xml` and `/robots.txt` after deployment.
6. Confirm external project/demo links open as expected.

No dependency changes or deletions are included.
