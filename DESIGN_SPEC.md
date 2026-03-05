## Design spec – Aksellor‑inspirert marketinglayout

Denne specen er basert på visuell inspeksjon av `aksellor.com` (struktur, rytme, typografi) og er tilpasset til vårt Next.js + Tailwind + shadcn‑inspirerte oppsett. Ingen tekst eller assets er kopiert.

---

### Typografi

- **Fontfamilie**
  - **Sans**: Inter (via `next/font`), fallback `system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif`
  - **Mono**: JetBrains Mono for kode/metadata

- **Base**
  - **Body font-size**: 15–16 px (`text-sm` og `text-base`)
  - **Line-height body**: ~1.5 (`leading-relaxed`/default)

- **Heading hierarchy**
  - **H1 (hero)**: `text-3xl sm:text-4xl md:text-5xl`, `font-semibold`, tight tracking `tracking-tight`, lett negativ letter-spacing via CSS
  - **H2 (seksjonsoverskrifter)**: `text-2xl sm:text-3xl`, `font-semibold`, `tracking-tight`
  - **H3 (korttitler, steg)**: `text-base`–`text-lg`, `font-semibold`
  - **Overlines/eyebrow**: `text-[0.7rem]`–`text-xs`, `uppercase`, høy letter-spacing `tracking-[0.16em]`–`[0.2em]`, `text-muted-foreground`

- **Bruk i kode**
  - Overskrifter er konsekvent `h1` i hero, `h2` i hovedseksjoner, `h3` inne i cards/steg.
  - Eyebrow‑tekst brukes i hero, “What we do”, “How it works”, “Cases”, “Testimonials”, “FAQ”, “Final CTA”.

---

### Spacing‑scale

Observasjon: aksellor.com bruker en relativt tett, men konsistent skala.

- **Vertikal seksjonspadding**
  - Hero: `py-16 sm:py-20`
  - Andre seksjoner: `py-14`–`py-18`

- **Lokale avstander**
  - Mellom overline og heading: `mt-3`–`mt-4` (12–16 px)
  - Mellom heading og paragraf: `mt-3`–`mt-4`
  - Mellom seksjonshode og innhold (cards, grids): `mt-8` (32 px)
  - Grid‑gaps: `gap-5` (20 px) for cards, `gap-6`–`gap-8` for større blokker

- **Skala vi bruker**
  - 4, 8, 12, 16, 20, 24, 32, 40, 48, 64 px (tilsvarer Tailwind: `1`, `2`, `3`, `4`, `5`, `6`, `8`, `10`, `12`, `16`)

---

### Farger

Basert på aksellor.coms lyse, nøytrale B2B‑uttrykk.

- **Bakgrunn og tekst (CSS‑variabler / Tailwind‑tokens)**
  - `--background`: nøytral, nesten hvit (`210 40% 98%` – lys grå)
  - `--foreground`: mørk blågrå (`222.2 47.4% 11.2%`)
  - `--muted`: lys gråblå for bakgrunn på sekundære elementer
  - `--muted-foreground`: middels grå tekst for brødtekst/sekundærtekst

- **Primærfarge**
  - `--primary`: mørk, nær `--foreground` (premium, ikke skarp), brukes til CTA‑knapper
  - `--primary-foreground`: nesten hvit

- **Accent & border**
  - `--accent`: lys grå (for hover‑bakgrunner)
  - `--border`: lys grå/blå (`~#e5e7eb`), brukes til seksjonslinjer og card‑rammer

- **Bruk**
  - Hele siden på lys bakgrunn.
  - Cards og seksjoner bruker subtile borders i stedet for tunge skygger.

---

### Knappestiler

- **Form**
  - Pill‑form: `rounded-full`
  - Border‑radius definert via `--radius` (`0.75rem`) for andre elementer, men knapper er eksplisitt runde.

- **Størrelser**
  - Default: `h-10 px-5` (CTA i navigasjon)
  - Large: `h-11 px-6` (hero / final CTA)
  - Small: `h-9 px-4 text-xs` (sekundær‑CTA)

- **Varianter (Button)**
  - `default`: fylt primær (`bg-primary text-primary-foreground`, hover `bg-primary/90`)
  - `outline`: `border border-input bg-background text-foreground`, hover `bg-accent`
  - `ghost`: ingen border, subtil bakgrunn på hover
  - `subtle`: `bg-muted text-foreground`, hover litt mørkere

- **States & accesibility**
  - `focus-visible:ring-2` med `ring-ring` og `ring-offset-2`
  - Disabled: redusert opacity, `pointer-events-none`

---

### Cards / seksjonsstil

- **Card**
  - Radius: `rounded-2xl` (store, myke hjørner)
  - Border: `border border-border`
  - Bakgrunn: `bg-card`
  - Shadow: veldig subtil `shadow-sm` (kan skrus av om man vil helt flat stil)
  - Innholdspadding: `px-6 py-4`

- **Section‑layout**
  - `section` med `border-b border-border` mellom blokker
  - `container` med maks bredde ca 1100–1150 px, god padding på mobil (`px-4 sm:px-6 lg:px-8`)
  - Tekstblokker begrenset til `max-w-xl`–`max-w-2xl` for lesbarhet

---

### Grid‑mønstre

- **Container**
  - `.container`: `mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8`
  - Sentrert innhold med forutsigbar padding

- **2‑kolonne**
  - Testimonials: `md:grid-cols-2`
  - Footer: `md:grid-cols-[2fr,1fr,1fr,1fr]`

- **3‑kolonne**
  - What we do: `md:grid-cols-3`
  - How it works: `md:grid-cols-3`
  - Cases: `md:grid-cols-3`

- **Mobile‑first**
  - Alt starter som stacked (`grid` uten `md:grid-cols-*`), så bryter ved `md` (`768px+`).

---

### Seksjons‑TODO per komponent

**`HeroSection`**
- [ ] Juster hero‑typo til å matche aksellor‑følelse: én sterk H1, kortere, presis subheading.
- [ ] Finjuster spacing: ca 24–32 px mellom overline, H1, brødtekst og knapper.
- [ ] Sørg for at CTA‑knappene har riktig visuell vekt: primær fylt, sekundær ghost, lik høyde.
- [ ] Test lesbarhet på 390 px bredde (tekstbryting, knappelayout).

**`TrustLogosSection`**
- [ ] Bruk mer dempede logo‑placeholders (kun tekst, ingen grafer).
- [ ] Sørg for at teksten til venstre er kort og presis; maks 2 linjer.
- [ ] Juster grid‑gaps slik at seksjonen oppleves kompakt men ikke trang.

**`WhatWeDoSection`**
- [ ] Hold overline + H2 + intro‑tekst til maks 3–4 linjer.
- [ ] Sørg for konsistent card‑høyde på desktop (`h-full`).
- [ ] Juster brødtekst‑lengde i hvert card slik at det visuelt balanseres.

**`HowItWorksSection`**
- [ ] Bruk nummererte steg med små labels (`01`, `02`, `03`) og tydelige titler.
- [ ] Hold tekstlengden per steg til 2–3 setninger.
- [ ] Sørg for at steg‑cards har lik høyde på desktop for ryddig grid.

**`CasesSection`**
- [ ] Placeholder‑cases skal ha kort navn, kort badge og 2–3 linjer beskrivelse.
- [ ] Hold grid på 3 kolonner på desktop; stacked på mobil.
- [ ] La overskrift og intro‑tekst speile struktur fra aksellor.com (men med egen tekst).

**`TestimonialsSection`**
- [ ] Bruk 1–2 korte quotes med navn/rolle, ikke lange blokker.
- [ ] Sørg for at tekstblokkene ikke blir for brede (`max-w-*` om nødvendig).

**`FaqSection`**
- [ ] 3–5 FAQ‑punkter med korte, konkrete svar.
- [ ] Sørg for god hit‑area på triggeren og tydelig focus state.

**`FinalCtaSection`**
- [ ] Overskrift som oppsummerer verdien og inviterer til handling.
- [ ] Primær handling: e‑post eller booking‑lenke.
- [ ] Sekundær handling: “Back to top” eller lignende low‑commitment‑valg.

