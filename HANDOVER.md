# HANDOVER.md — TheTherapies
> Status: IN PROGRESS

## What This Product Is
TheTherapies is a comprehensive, evidence-based knowledge platform that explains psychological therapies in depth. It covers what therapies involve, who they help, and what the research evidence says. Designed for two audiences: people considering therapy and practising clinicians. Includes a library of therapies, a conditions browser, printable resources (20+ worksheets), and professional resources. Optimized for NHS environments.

## Tech Stack
- **Framework:** Next.js 16 (App Router) with TypeScript
- **UI:** Tailwind CSS 4
- **Data:** Static data files (TypeScript) -- no database
- **Deployment:** Vercel
- **Package Manager:** npm

## What Is Built and Working
- Homepage with therapy browser and condition browser
- Full therapy library (statically defined in TypeScript data files)
- Conditions database with therapy cross-references
- For Everyone section (public-facing therapy info)
- For Professionals section (clinician-focused resources)
- About page
- Printable resource system with 20+ worksheets (PDF-ready pages)
- Sitemap generation
- Custom sage-themed favicon
- Mobile-optimized viewport and responsive design
- Resource cards linking to printable resource pages
- Evidence sources data

## What Is Unfinished
- No user accounts or authentication
- No search functionality
- No CMS -- all content is hardcoded in TypeScript data files
- No analytics or tracking
- README is default Next.js boilerplate
- NHS DNS blocker bypass work was attempted (may need verification)

## Known Bugs
- Resource badges changed from "PDF + Ready" to just "PDF" (design choice, not a bug)
- NHS network DNS blockers may prevent access (optimization attempted)

## Project Structure
```
thetherapies/
  src/
    app/
      about/              # About page
      conditions/         # Conditions browser
      for-everyone/       # Public therapy information
      for-professionals/  # Clinician resources
      resources/          # Printable worksheets/resources
      therapies/          # Therapy library pages
      sitemap.ts          # Dynamic sitemap generation
    components/           # Shared UI components (TherapyCard, etc.)
    data/
      therapies/          # Therapy content (TypeScript files)
      conditions.ts       # Conditions database
      resource-content.ts # Printable resource content
      sources.ts          # Evidence source citations
    lib/                  # Utility functions
  public/                 # Static assets, favicon
```

## How to Run It
1. Clone the repository
2. `npm install`
3. `npm run dev` -- starts at http://localhost:3000
4. No environment variables required (fully static site)

## Next Steps (In Order)
1. Add search functionality across therapies and conditions
2. Expand therapy content with more modalities
3. Add a CMS or MDX system for easier content updates
4. Implement analytics (privacy-respecting)
5. Write a proper README
6. Add SEO meta tags for all therapy/condition pages
7. Consider adding user accounts for clinicians (bookmarks, notes)

## Key Documentation
- `src/data/therapies/` -- All therapy content definitions
- `src/data/conditions.ts` -- Conditions database
- `src/data/resource-content.ts` -- Printable resource content
- `src/data/sources.ts` -- Evidence citations
