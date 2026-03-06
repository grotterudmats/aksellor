# Design QA Report

**Run:** before + after | **Date:** 2026-03-05

## FAILs (max 15) – before fix pass

- [ ] **contrast** Primary CTA may not enforce white text on accent
- [ ] **contrast** Accent color too light; should be darker (#5B2EFF-ish)
- [ ] **max-width** H1/lead text block may exceed 60ch
- [ ] **typography** H1 line-height should be 1.05–1.1
- [ ] **typography** Lead needs ~1.6 line-height, max-width ~60ch
- [ ] **spacing** Section title/lead margins inconsistent
- [ ] **logo-pill** Logo row must be wordmark-only: no pills, opacity 0.55
- [ ] **logo-pill** Logo row on mobile: wrap, center, consistent gap
- [ ] **shadow** Too many shadow levels; reduce to 2
- [ ] **border** Borders should be hairline (subtle)
- [ ] **radius** Single consistent radius site-wide
- [ ] **gradient** Remove card gradients; only hero has bg effect
- [ ] **hero-mock** Right mock too dominant; topbar + 2–3 panels + accent strip
- [ ] **button** Secondary: dark text, clear hover
- [ ] **input** Inputs: visible border + focus ring

## PASS (after fix pass)

- [x] **contrast** Primary CTA: `text-white` on accent; accent set to 252 100% 59% (#5B2EFF-ish), accent-fg #FFF
- [x] **typography** H1: line-height 1.08, max-width 60ch in globals
- [x] **typography** Lead: line-height 1.6, max-width 60ch
- [x] **spacing** section-title / section-lead utilities; consistent section-pad
- [x] **logo-row** Wordmark only: opacity 0.55, no pills; mobile center + gap
- [x] **shadow** Two levels only: --shadow, --shadow-2
- [x] **border** Hairline: border token with /0.6 on section-sep
- [x] **radius** Single --radius (1.25rem) used everywhere; --radius-lg removed from cards
- [x] **gradient** Én plattform card: flat bg, no gradient
- [x] **hero-mock** Product mock: topbar, 2 panels + accent strip, max-w 280px
- [x] **button** Outline/ghost: dark text, hover bg-muted
- [x] **input** Border + focus ring on all inputs (ta-kontakt)

## Screenshots

- `design-qa/before-desktop.png` (run `npm run dev` then `npm run qa:design`)
- `design-qa/before-mobile.png`
- `design-qa/after-desktop.png` (run `npm run qa:design:after`)
- `design-qa/after-mobile.png`

## Filer endret (DEL 2)

- `app/globals.css` – tokens (accent, shadow, border), H1/lead, logo-row, section-title/lead
- `components/ui/button.tsx` – primary text-white, outline/ghost dark text + hover
- `components/sections/header.tsx` – CTA focus ring offset
- `components/sections/hero.tsx` – H1 line-height, mock replaced with product layout (topbar, panels, strip)
- `components/sections/hva-vi-gjor.tsx` – card flat bg, --radius, section-title/lead
- `components/sections/vi-leverer.tsx` – --radius, section-title/lead
- `components/sections/case-studies.tsx` – --radius, section-title/lead
- `components/sections/ta-kontakt.tsx` – --radius, section-title/lead
- `scripts/design-qa-audit.mjs` – ny (Playwright audit + screenshots)
- `package.json` – qa:design scripts, playwright devDep
- `DESIGN_QA.md` – rapport
