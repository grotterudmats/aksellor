# STEP 1 — Diagnosis (art direction + motion)

**Why the hero still feels flat/off (3):**
- Headline has no hierarchy or emphasis: plain text, no accent highlight on keywords, no badge above to anchor the offer.
- Buttons are flat (no inner highlight or hover lift); CTA block lacks a “spec row” that reinforces value (full control, less lock-in, one team).
- Mock is skeleton-only (gray blocks, one accent stripe) with no depth (layered cards), no accent details (chart, active state), and no glow—so it doesn’t feel like a real product preview.

**Why the logo row feels fake/unstyled (2):**
- Labels read as placeholders (“Partner A/B/C”) instead of brand-like wordmarks (e.g. HOYER, MIINTO); no chip treatment (fixed width, centering, tracking).
- Grid can still wrap awkwardly on edge widths; no explicit 3×2 desktop / 2×3 small / stacked mobile, and no edge fade for a “trust strip” feel.

**Specific upgrades we will implement (3):**
- **Composition + hierarchy:** Pill badge above H1, subtle accent highlight on 1–2 headline keywords, spec row under CTA, H1 typography via CSS variable (clamp, no inline style).
- **Details + depth:** Primary button with white text, inner highlight and hover lift; logo row as wordmark chips with real-looking labels and strict grid; mock with accent elements (e.g. mini chart, highlighted card, active nav), layered depth and subtle glow.
- **Motion:** Hero copy fade+up, mock delayed fade/scale, logo stagger, Vi leverer cards scroll reveal; all respecting `prefers-reduced-motion`, durations 0.3–0.6s.
