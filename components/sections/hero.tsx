"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";

const LOGO_LABELS = [
  "HOYER",
  "DAVID\u2011ANDERSEN",
  "MIINTO",
  "COCKTAIL CLUB",
  "STORM",
  "AKSELLOR",
];

const SPEC_ITEMS = [
  "Full control",
  "Less vendor lock-in",
  "One accountable team",
];

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="hero-bg relative overflow-hidden pt-12 pb-6 sm:pt-14 sm:pb-8 md:pt-16 md:pb-10"
    >
      <div className="hero-atmosphere pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="hero-blob top-[15%] left-[10%] h-48 w-48 bg-primary/30" />
        <div className="hero-blob top-[25%] right-[15%] h-40 w-40 bg-primary/25" />
        <div className="hero-blob bottom-[20%] left-[20%] h-32 w-32 bg-primary/20" />
        <div className="hero-blob bottom-[30%] right-[25%] h-36 w-36 bg-primary/15" />
        <div className="hero-dot top-[20%] left-[25%]" />
        <div className="hero-dot top-[35%] right-[30%]" />
        <div className="hero-dot bottom-[25%] left-[35%]" />
        <div className="hero-dot bottom-[40%] right-[20%]" />
        <div className="hero-dot top-[50%] left-[50%]" />
        <div className="hero-vignette" />
      </div>
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
          <motion.div
            className="lg:col-span-7 max-w-[58ch]"
            initial={reduced ? undefined : { opacity: 0, y: 10 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={
              reduced ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }
            }
          >
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
                  className="absolute inset-0 -inset-y-0.5 rounded-sm bg-primary/15 -z-10"
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
                  {i > 0 && <span className="opacity-50">•</span>}
                  <span>{item}</span>
                </span>
              ))}
            </div>
            </motion.div>

          <motion.div
            className="relative hidden lg:block lg:col-span-5 lg:pl-6"
            aria-hidden
            initial={
              reduced ? undefined : { opacity: 0, y: 10, scale: 0.98 }
            }
            animate={
              reduced ? undefined : { opacity: 1, y: 0, scale: 1 }
            }
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 0.45, delay: 0.06, ease: "easeOut" }
            }
          >
            <div
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/[0.05] blur-3xl"
              aria-hidden
            />
            <div className="absolute right-2 top-1 -z-10 w-[calc(100%-0.5rem)] max-w-[420px] scale-[0.98] rounded-[var(--radius)] border border-border bg-card/70 opacity-50" aria-hidden />
            <div className="relative w-full max-w-[460px] rounded-[var(--radius)] border border-border bg-card p-6 shadow-[var(--shadow-2)]">
              <div className="h-2.5 w-2/3 rounded-sm bg-muted" />
              <div className="mt-4 h-2.5 w-1/2 rounded-sm bg-muted/80" />
              <div className="mt-4 flex gap-3">
                <div className="h-20 flex-1 rounded-lg bg-muted/60" />
                <div
                  className="h-20 flex-1 rounded-lg border border-primary/20 bg-primary/10 flex flex-col justify-center gap-0.5 px-3"
                  aria-hidden
                >
                  <span className="text-xs font-semibold text-primary">Conversion</span>
                  <span className="text-sm font-bold text-primary">+18%</span>
                </div>
              </div>
              <div className="mt-4 flex items-end gap-0.5 h-7">
                {[4, 6, 5, 8, 7, 10, 9].map((h, i) => (
                  <div key={i} className="flex-1 min-w-[3px] rounded-sm bg-muted/80" style={{ height: `${h * 2}px` }} />
                ))}
                <div className="flex-1 min-w-[3px] rounded-sm bg-primary/50" style={{ height: "14px" }} />
              </div>
              <div className="mt-3 h-2.5 w-full rounded-sm bg-muted/70" />
            </div>
          </motion.div>
        </div>
        <div className="mt-10 w-full border-t border-border/60 pt-6">
          <p className="mb-3 text-xs text-muted-foreground">Trusted by teams that scale.</p>
          <div
            className="logo-row flex w-full items-center justify-evenly gap-8"
            aria-label="Partners"
          >
            {LOGO_LABELS.map((label, i) => (
              <motion.span
                key={`${label}-${i}`}
                className="logo-wordmark whitespace-nowrap"
                initial={reduced ? undefined : { opacity: 0, y: 10 }}
                animate={reduced ? undefined : { opacity: 1, y: 0 }}
                transition={
                  reduced
                    ? { duration: 0 }
                    : {
                        duration: 0.45,
                        delay: 0.12 + i * 0.04,
                        ease: "easeOut",
                      }
                }
              >
                {label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
