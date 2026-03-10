"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";

const PARTNER_LOGOS = Array.from({ length: 12 }, (_, i) => `/partner${i + 1}.png`);

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
            <h1
              id="hero-heading"
              className="hero-h1 font-semibold tracking-tight text-foreground"
            >
              Vi utvikler{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Fremtidens</span>
              </span>
              <br />
              digitale Handel
            </h1>
            <p className="mt-6 md:mt-7 lead text-muted-foreground leading-relaxed">
              Aksellor bygger plattform, e-handel og rådgivning som gir
              bedrifter eksponentiell vekst med mindre leverandøravhengighet og ett
              samlet ansvarspunkt.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button asChild size="lg">
                <Link href="https://tidycal.com/aksellor/30-minute-meeting" className="!text-primary-foreground hover:!text-primary-foreground">Book demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#ta-kontakt">Kontakt oss</Link>
              </Button>
            </div>
            </motion.div>

          <motion.div
            className="relative hidden lg:flex lg:col-span-5 lg:items-start lg:justify-end lg:pl-8"
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
              className="absolute -inset-8 -z-10 rounded-[2rem] bg-primary/[0.05] blur-3xl"
              aria-hidden
            />
            <div className="relative w-full min-w-[320px] max-w-[520px] rounded-[var(--radius)] border border-border bg-card p-6 shadow-[var(--shadow-2)]">
              <div className="flex items-center justify-between gap-2">
                <div className="h-2.5 w-1/3 rounded-sm bg-muted" />
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Dashboard</span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="rounded-lg border border-border bg-muted/40 p-3">
                  <div className="h-2 w-2/3 rounded-sm bg-muted" />
                  <div className="mt-2 h-4 w-3/4 rounded-sm bg-muted/80" />
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/10 p-3">
                  <div className="h-2 w-2/3 rounded-sm bg-primary/40" />
                  <div className="mt-2 h-4 w-4/5 rounded-sm font-semibold text-primary">AOV</div>
                </div>
                <div className="rounded-lg border border-border bg-muted/40 p-3">
                  <div className="h-2 w-2/3 rounded-sm bg-muted" />
                  <div className="mt-2 h-4 w-3/4 rounded-sm bg-muted/80" />
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <div className="h-2.5 w-16 rounded-sm bg-muted/80" />
                <div className="h-2.5 w-20 rounded-sm bg-muted/60" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-3 rounded-md border border-border bg-muted/30 px-3 py-2">
                  <div className="h-8 w-8 shrink-0 rounded bg-muted/80" />
                  <div className="flex-1">
                    <div className="h-2.5 w-4/5 rounded-sm bg-muted/70" />
                    <div className="mt-1.5 h-2 w-1/3 rounded-sm bg-muted/50" />
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-md border border-primary/20 bg-primary/5 px-3 py-2">
                  <div className="h-8 w-8 shrink-0 rounded bg-primary/20" />
                  <div className="flex-1">
                    <div className="h-2.5 w-3/4 rounded-sm bg-primary/30" />
                    <div className="mt-1.5 h-2 w-1/4 rounded-sm bg-primary/20" />
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-md border border-border bg-muted/30 px-3 py-2">
                  <div className="h-8 w-8 shrink-0 rounded bg-muted/80" />
                  <div className="flex-1">
                    <div className="h-2.5 w-4/5 rounded-sm bg-muted/70" />
                    <div className="mt-1.5 h-2 w-1/3 rounded-sm bg-muted/50" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-10 w-full border-t border-border/60 pt-6">
          <div
            className={reduced ? "partner-static" : "partner-marquee-wrapper overflow-hidden"}
            aria-label="Partnere"
          >
            <div
              className={`flex items-center gap-12 ${reduced ? "partner-marquee-static justify-center" : "partner-marquee"}`}
            >
              {(reduced ? PARTNER_LOGOS.slice(0, 6) : [...PARTNER_LOGOS, ...PARTNER_LOGOS]).map((src, i) => (
                <div
                  key={i}
                  className="partner-logo flex h-10 w-24 shrink-0 items-center justify-center grayscale opacity-50 transition-all duration-200 hover:grayscale-0 hover:opacity-90"
                >
                  <img
                    src={src}
                    alt=""
                    className="max-h-8 w-auto object-contain"
                    onError={(e) => e.currentTarget.classList.add("hidden")}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
