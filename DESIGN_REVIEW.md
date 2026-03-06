# Design Review – Hero / komposisjon

**Før komposisjonspass.** Les gjennom hero.tsx, header.tsx, globals.css.

---

## Komposisjonsfeil i hero (3)

- **Grid for liten til å fylle:** `lg:grid-cols-[1fr,minmax(260px,360px)]` gir venstre kolonne som tar «resten» og høyre max 360px. På 1180px container blir venstre ~820px, men copy har `max-w-xl` (36rem ≈ 576px) – dermed står copy smalt til venstre og det blir stort tomrom mellom copy og mock.
- **Ingen tydelig 2-kolonne-balanse:** Det er ikke en fast fordeling (f.eks. 7/5 eller 6/6). Visual kolonnen er begrenset til max 280px i mock-wrapper, så den føles liten og «hengt på høyre» i stedet for å danne en komposisjon.
- **Hero føles «venstre-justert blokk»:** Copy-blokken er én smal kolonne; CTA, trust og logo-row ligger under uten visuell knytning til høyre. Det blir ikke én hero-enhet, men tekst + en liten boks.

---

## Typografi / rytme (2)

- **Line-length ubegrenset i praksis:** H1 har `max-width: 60ch` i globals, men wrapper har `max-w-xl` (36rem). På stor skjerm kan H1 bli for bred hvis 60ch > 36rem; lead har også 60ch. Det mangler én tydelig max-width på hero copy-blokken (f.eks. 55–65ch eller max-w-2xl) slik at både H1 og lead har forutsigbar linjelengde.
- **Spacing mellom elementer generisk:** mt-4, mt-5, mt-6, mt-2.5 – ingen tydelig skala (f.eks. 8/12/16/24). Trust-line og logo-row henger tett under CTA uten «pusterom», så blokken copy + CTA + trust + logos blir én tett klump.

---

## Logo-row (2)

- **Wrap uten kontroll:** `flex flex-wrap` med 6 items gir tilfeldig wrap: på noen bredder 2+4, 3+3, 4+2. Det ser ubevisst ut. Bedre: på desktop to eksplisitte rader (f.eks. 3+3) med grid; på mobil wrap med faste gaps.
- **Plassering og hierarki:** Logo-row er direkte under trust-line uten visuell gruppering (ingen spacing-scale eller subtil linje). Den oppleves som «ekstra tekst» under CTA i stedet for en tydelig «partnere / trust»-blokk.

---

## Mock visual (2)

- **For liten og lav:** Mock har `max-w-[280px]` og ingen min-høyde. Den blir en liten boks som ikke visuelt balanserer copy. På 1180px container tar den lite plass og sitter «nederst» pga `items-center` på rad som har mye høyde på venstre – dermed ser den lav og liten ut.
- **Lite «future/tech»-uttrykk:** Kun små grå rektangler, en tynn accent-stripe og en topplinje. Ingen tydelig topbar, ingen «paneler» som ser ut som UI (tabs, sidebar, kort), ingen dybde – det leses som en generisk boks, ikke et produkt- eller plattform-visual.

---

## Konkrete tiltak (3)

1. **Hero som tydelig 2-kolonne med faste andeler:** Bytt til f.eks. `lg:grid-cols-12`; copy (H1, lead, CTA, trust, logos) i `lg:col-span-7`, visual i `lg:col-span-5`. Gi hero-container max-w 1180–1240 og la begge kolonner fylle sin andel. Align visual vertikalt med copy (items-start eller items-center etter behov).
2. **Logo-row med kontrollert layout:** Desktop: grid 2 rader × 3 (eller 6 i én rad med `nowrap` hvis plass). Mobil: flex wrap med jevne gaps og sentering. Fjern tilfeldig wrap.
3. **Mock større og mer strukturert:** Øk mockens bredde til å fylle kolonnen (f.eks. min-h-[320px] eller aspect-ratio), flytt den opp (align med toppen av copy), og gi tydelig struktur: topbar, 2–3 paneler (sidebar + main, eller kort-stack), én accent-stripe med lav opacity slik at det ser «product/tech» ut uten bilder.

---

## DEL 2: BEFORE-screenshots

Kjør med dev-server kjørende:
```bash
npm run dev
# I annen terminal:
npm run screenshots:debug
```
Lagres som: `public/debug/before-desktop.png`, `public/debug/before-mobile.png`.

---

## DEL 3–4: Implementert + AFTER-screenshots

Etter endringer, kjør:
```bash
npm run screenshots:debug:after
```
Lagres som: `public/debug/after-desktop.png`, `public/debug/after-mobile.png`.

---

## DEL 5: Rapport – Hva var feil

- Hero var én smal copy-blokk (`max-w-xl`) + liten mock (max 280px); grid ga stort tomrom mellom dem.
- Ingen fast 2-kolonne-fordeling; visual kolonne var «hengt på» og ikke del av en balansert komposisjon.
- Logo-row brukte flex wrap uten kontroll → tilfeldig 2+4, 3+3, 4+2 på ulike bredder.
- H1/lead hadde ikke konsekvent max-width på hero-blokken (60ch i globals, men wrapper begrenset ikke lesebredde tydelig).
- Mock var liten, lav (items-center ga visuell «senkning»), og så generisk ut (små grå rektangler, lite struktur).
- CTA-raden var nøktern; knapper og spacing ga ikke «product»-følelse.

---

## DEL 5: Hva ble endret

- **Hero 2-kolonne:** `lg:grid-cols-12` med copy i `lg:col-span-7`, visual i `lg:col-span-5`. Container `max-w-[1240px]`. Copy-blokk `max-w-[65ch]` for forutsigbar linjelengde.
- **Typografi:** H1 med `clamp(1.875rem, 4vw + 1rem, 2.5rem)` og `leading-[1.1]`. Lead `max-w-[58ch]` og `leading-relaxed`.
- **CTA:** Større knapper (`text-base px-6 py-6`), mer spacing (`mt-8`, `gap-4` / `sm:gap-5`).
- **Logo-row:** Desktop: CSS grid `grid-template-columns: repeat(3, 1fr)` → fast 2×3, ingen stygg wrap. Mobil: flex wrap med jevne gaps og sentering. `max-width: 28rem` på desktop for å unngå for bred rad.
- **Mock:** Flyttet opp (`lg:items-start`), større (`min-h-[320px]`, `max-w-[420px]`), tydelig struktur: topbar (dots + url-lignende bar), sidebar (ikon-/navigasjonsblokker) + main (linjer + to kort + accent-stripe). `ml-auto` i kolonnen for å aligne mot innhold.
- **globals.css:** Logo-row endret til grid på sm+ med 3 kolonner; mobil uendret (flex wrap, center).

---

## DEL 5: 3 konkrete forbedringer til neste

1. **Header/nav + CTA:** Sticky header kan få mer «premium» spacing og ev. en subtil skillelinje mellom nav og CTA; CTA-knapp størrelse/kontrast i tråd med hero-CTA.
2. **Kort-konsistens:** Se over «Hva vi gjør» og «Vi leverer» – ensartet kort-høyde, ikon-størrelse og hover så hele siden føles som én visuell familie.
3. **Hero-mock på mobil:** Vurder en forenklet mock eller en enkel gradient/shape under CTA på mobil i stedet for å skjule helt, slik at fold ikke blir bare tekst.

---

## Filer endret

| Fil | Endring |
|-----|--------|
| `components/sections/hero.tsx` | 2-kolonne grid (12 cols, 7+5), copy max-w-[65ch], H1 clamp, lead max-w-[58ch], CTA spacing/knappestørrelse, logo-row markup (uendret antall items), mock ny struktur og størrelse |
| `app/globals.css` | Logo-row: grid 3 kolonner på sm+, max-width 28rem, gaps justert |
| `scripts/screenshots-debug.mjs` | Nytt script: BEFORE/AFTER screenshots til public/debug |
| `package.json` | Scripts: `screenshots:debug`, `screenshots:debug:after` |
| `DESIGN_REVIEW.md` | Design review (DEL 1), instruks for screenshots (DEL 2/4), rapport (DEL 5) |
