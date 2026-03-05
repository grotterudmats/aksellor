import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="hero-bg pt-14 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24"
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr,minmax(280px,400px)] lg:items-center lg:gap-14">
          <div>
            <h1
              id="hero-heading"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.12]"
            >
              Utvikler fremtidens digital handel
            </h1>
            <p className="mt-4 lead text-muted-foreground">
              Aksellor Cloud bygger plattform, e-handel og rådgivning som gir
              bedrifter eksponentiell vekst med mindre leverandøravhengighet og ett
              samlet ansvarspunkt.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="rounded-[1.25rem] shadow-[var(--shadow-soft)]">
                <Link href="#ta-kontakt">Book demo</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-[1.25rem] border-[1px]"
              >
                <Link href="#case-studies">Se leveranser</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground/90">
              Trusted by teams that scale.
            </p>
            <div className="logo-row mt-3" aria-hidden>
              {["Partner A", "Partner B", "Partner C", "Partner D", "Partner E", "Partner F"].map(
                (label) => (
                  <span key={label} className="logo-row-item">
                    {label}
                  </span>
                )
              )}
            </div>
          </div>
          {/* Right column: CSS-only product mock / abstract UI */}
          <div className="relative hidden lg:block" aria-hidden>
            <div className="relative aspect-[4/3] max-h-[320px]">
              {/* Stacked cards illusion */}
              <div
                className="absolute inset-0 rounded-[1.5rem] border border-border/80 bg-card/80 shadow-[var(--shadow-card)]"
                style={{ transform: "rotate(-2deg) translateY(4px)" }}
              />
              <div
                className="absolute inset-0 rounded-[1.5rem] border border-border/80 bg-card shadow-[var(--shadow-card)]"
                style={{ transform: "rotate(1.5deg) translateY(-2px)" }}
              />
              <div className="absolute inset-0 flex flex-col gap-3 rounded-[1.5rem] border border-border/80 bg-card p-4 shadow-[var(--shadow-soft)]">
                <div className="h-2 w-3/4 rounded-full bg-muted" />
                <div className="h-2 w-1/2 rounded-full bg-muted/80" />
                <div className="mt-2 flex gap-2">
                  <div className="h-8 flex-1 rounded-lg bg-primary/15" />
                  <div className="h-8 w-16 rounded-lg bg-muted" />
                </div>
                <div className="mt-auto grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-12 rounded-lg bg-muted/60" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
