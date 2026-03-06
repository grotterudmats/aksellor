# CSS + Tailwind wiring checklist – results

## 1) Global CSS import

**File:** `app/layout.tsx`  
**Import line:**
```ts
import "./globals.css";
```
**Resolved path:** `app/globals.css` (same directory as `layout.tsx`).

---

## 2) Tailwind enabled

**Tailwind v4** is used (no `@tailwind base/components/utilities`).

- **Directive:** `@import "tailwindcss";` in **`app/globals.css`** (line 1).
- **PostCSS:** `postcss.config.mjs` uses `@tailwindcss/postcss`.
- In v4, this single import replaces the old base/components/utilities directives.

---

## 3) Semantic colors resolve to CSS

**`tailwind.config.ts`:**  
`theme.extend` is empty – no `colors` (or `ring`, etc.) in the JS config.

**Color mapping is in `app/globals.css`** via Tailwind v4’s **`@theme inline`** (lines 23–35):

```css
@theme inline {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-border: hsl(var(--border));
  --color-ring: hsl(var(--ring));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-input: hsl(var(--input));
  --font-sans: var(--font-sans);
}
```

So:

- `bg-background` → `--color-background` → `hsl(var(--background))`
- `text-foreground` → `--color-foreground` → `hsl(var(--foreground))`
- `border-border` → `--color-border` → `hsl(var(--border))`
- `ring-ring` → `--color-ring` → `hsl(var(--ring))`
- `bg-primary` / `text-primary-foreground` → same pattern

**`:root`** (lines 5–21) defines the HSL values, e.g. `--primary: 262 83% 58%;`, `--primary-foreground: 0 0% 100%;`.

**Conclusion:** Shadcn-style mapping is in `globals.css` only; no colors are defined in `tailwind.config.ts`. In v4 this is the intended approach. No config change was added so as not to duplicate or conflict with `@theme inline`.

---

## 4) Temporary visual proof (done and reverted)

- **Applied:** Hero `<section>` had `bg-red-50`, H1 had `text-red-600`.
- **Reverted:** Both classes were removed; hero section again uses `hero-bg` and H1 uses `text-foreground`.

**If you still see no change when adding `bg-red-50` / `text-red-600`:**  
Confirm the dev server is running (`npm run dev`), do a hard reload, and that no other CSS (e.g. `.hero-bg` or body) is overriding. Tailwind is wired correctly; any “unchanged” look is likely specificity or caching.

---

## Summary

| Check                    | Result |
|--------------------------|--------|
| Global CSS import        | ✅ `app/globals.css` imported in `app/layout.tsx` |
| Tailwind enabled         | ✅ `@import "tailwindcss"` in `app/globals.css` |
| Semantic colors          | ✅ Defined in `@theme inline` in `app/globals.css` (shadcn-style) |
| Temporary red test       | ✅ Added then reverted in `components/sections/hero.tsx` |

Wiring is correct. You can continue design work.
