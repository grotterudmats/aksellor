import Link from "next/link";

import { Button } from "@/components/ui/button";

const LOGO_LABELS = [
  "HOYER",
  "DAVID-ANDERSEN",
  "MIINTO",
  "COCKTAIL CLUB",
  "PARTNER",
  "PARTNER",
];

const SPEC_ITEMS = [
  "Full control",
  "Less vendor lock-in",
  "One accountable team",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="hero-bg pt-12 pb-10 sm:pt-14 sm:pb-12 md:pt-16 md:pb-14"
    >
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
          <div className="lg:col-span-7 max-w-[58ch]">
            <p
              className="mb-4 inline-flex rounded-md border border-border bg-muted/60 px-3 py-1.5 text-xs font-medium tracking-wide text-muted-foreground"
              aria-hidden
            >
              Aksellor Cloud · Commerce Platform
            </p>
            <h1
              id="hero-heading"
              className="hero-h1 font-semibold tracking-tight text-foreground"
            >
              Utvikler{" "}
              <span className="relative inline-block">
                <span className="relative z-10">fremtidens</span>
                <span
                  className="absolute bottom-0.5 left-0 right-0 h-1.5 rounded-sm bg-primary/25"
                  aria-hidden
                />
              </span>{" "}
              digital handel
            </h1>
            <p className="mt-5 lead text-muted-foreground leading-relaxed">
              Aksellor Cloud bygger plattform, e-handel og rådgivning som gir
              bedrifter eksponentiell vekst med mindre leverandøravhengighet og ett
              samlet ansvarspunkt.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button asChild size="lg">
                <Link href="#ta-kontakt">Book demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#case-studies">Se leveranser</Link>
              </Button>
            </div>
            <div
              className="mt-4 flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground"
              aria-hidden
            >
              {SPEC_ITEMS.map((item, i) => (
                <span key={item} className="flex items-center gap-x-2">
                  {i > 0 && <span className="opacity-50">·</span>}
                  <span>{item}</span>
                </span>
              ))}
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Trusted by teams that scale.
            </p>
            <div
              className="logo-row mt-3"
              aria-hidden
              role="presentation"
            >
              {LOGO_LABELS.map((label, i) => (
                <span key={`${label}-${i}`} className="logo-wordmark">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block lg:col-span-5 lg:pl-4" aria-hidden>
            <div
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/[0.06] blur-2xl"
              aria-hidden
            />
            <div className="relative w-full max-w-[340px] rounded-[var(--radius)] border border-border bg-card p-5 shadow-[var(--shadow-2)] ml-auto">
              <div className="h-2 w-2/3 rounded-sm bg-muted" />
              <div className="mt-3 h-2 w-1/2 rounded-sm bg-muted/80" />
              <div className="mt-4 flex gap-2">
                <div className="h-14 flex-1 rounded-lg bg-muted/60" />
                <div
                  className="h-14 flex-1 rounded-lg border border-primary/30 bg-primary/10"
                  aria-hidden
                />
              </div>
              <div className="mt-3 h-2.5 w-full rounded-sm bg-muted/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
