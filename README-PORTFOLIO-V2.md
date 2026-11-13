# Portfolio V2 — patch ZIP

This archive contains **changed and new files only**. It is not a complete repository.

1. Back up or commit your existing local project.
2. Extract this archive into the root of `devrobb-portfolio`, preserving paths and overwriting matching files.
3. Run `npm run lint` and `npm run build`, then `npm run dev`.
4. Inspect desktop (1440px), tablet (768px) and mobile (390px).
5. Check all external URLs and submit one real Formspree test message.

## Updated
- Desktop-first homepage with direct project and GitHub calls to action.
- Three-card Project Deck with accessible project selection, detailed engineering notes, screenshots for existing projects and responsive horizontal cards on mobile.
- DataPreflight added as the first project.
- About page with Winc education, professional background and current stack.
- Contact page with corrected GitHub URL and HTTP-response-aware Formspree feedback.
- Root layout spacing and SEO metadata.

## Known limitations
- DataPreflight screenshots are not included because the source repository has no DataPreflight screenshot assets. A deliberate graphic placeholder links to the real application; add actual screenshots later.
- The original project assets, Nav, Footer, Providers, and other routes are retained from your local checkout.
- Build/lint were not run against the full project here because the repository could only be read through the GitHub connector and package installation was unavailable in the working environment.
- `npm audit` warnings from the existing lockfile were not automatically fixed.
