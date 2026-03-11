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
      {/* Atmosphere */}
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
          {/* Left */}
          <motion.div
            className="lg:col-span-7 max-w-[58ch]"
            initial={reduced ? undefined : { opacity: 0, y: 10 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={reduced ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }}
          >
            <h1 id="hero-heading" className="hero-h1 font-semibold tracking-tight text-foreground">
              Vi utvikler{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Fremtidens
                </span>
              </span>
              <br />
              digitale Handel
            </h1>

            <p className="mt-6 md:mt-7 lead text-muted-foreground leading-relaxed">
              Aksellor bygger plattform, e-handel og rådgivning som gir bedrifter eksponentiell vekst med mindre
              leverandøravhengighet og ett samlet ansvarspunkt.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button asChild size="lg" className="!text-primary-foreground">
                <Link href="https://tidycal.com/aksellor/30-minute-meeting">Book demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#ta-kontakt">Kontakt oss</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: E-commerce Website Builder mock (clean + readable) */}
          <motion.div
            className="relative hidden lg:flex lg:col-span-5 lg:items-start lg:justify-end lg:pl-8"
            aria-hidden
            initial={reduced ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
            animate={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={reduced ? { duration: 0 } : { duration: 0.45, delay: 0.06, ease: "easeOut" }}
          >
            <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-primary/[0.06] blur-3xl" aria-hidden />

            <div className="relative w-full min-w-[320px] max-w-[560px]">
              <div className="w-full overflow-hidden rounded-[var(--radius)] border border-border bg-card shadow-[var(--shadow-2)]">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-border bg-background/60 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                    <span className="h-2.5 w-2.5 rounded-full bg-muted/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-muted/60" />
                    <span className="ml-2 text-[11px] font-medium text-muted-foreground">Storefront Builder</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                      Preview
                    </span>
                    <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-semibold text-primary-foreground">
                      Publish
                    </span>
                  </div>
                </div>

                {/* Main mock area: 2 columns – sidebar + storefront preview */}
                <div className="grid h-[360px] grid-cols-[88px_1fr] gap-3 bg-background p-4">
                  {/* Left sidebar – nav only */}
                  <div className="flex flex-col gap-2 rounded-lg border border-border bg-muted/10 p-2">
                    {[
                      { label: "Pages", active: false },
                      { label: "Products", active: true },
                      { label: "Theme", active: false },
                      { label: "Checkout", active: false },
                    ].map((it) => (
                      <div
                        key={it.label}
                        className={
                          it.active
                            ? "rounded-lg border border-primary/20 bg-primary/10 px-2 py-2.5"
                            : "rounded-lg border border-border bg-card px-2 py-2.5"
                        }
                      >
                        <div className={it.active ? "h-2.5 w-full max-w-[48px] rounded-sm bg-primary/40" : "h-2.5 w-full max-w-[48px] rounded-sm bg-muted/80"} />
                        <div className={it.active ? "mt-1.5 h-2 w-3/4 rounded-sm bg-primary/25" : "mt-1.5 h-2 w-3/4 rounded-sm bg-muted/60"} />
                      </div>
                    ))}
                  </div>

                  {/* Large canvas – storefront preview */}
                  <div className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card">
                    {/* Hero / banner block */}
                    <div className="relative shrink-0 border-b border-border">
                      <div className="aspect-[2.2/1] w-full rounded-t-lg bg-muted/25" />
                      <div className="absolute left-4 right-4 top-4 flex flex-col gap-2">
                        <div className="h-3 w-32 rounded-md bg-muted/90" />
                        <div className="h-2.5 w-48 rounded-md bg-muted/70" />
                      </div>
                      <div className="absolute bottom-3 left-4 h-7 w-20 rounded-full border border-primary/20 bg-primary/10" />
                    </div>

                    {/* Product grid: 2 cols x 2 rows */}
                    <div className="grid flex-1 grid-cols-2 gap-3 p-3">
                      {[0, 1, 2, 3].map((idx) => (
                        <div
                          key={idx}
                          className={
                            idx === 1
                              ? "rounded-lg border border-primary/25 bg-primary/[0.06] p-2.5"
                              : "rounded-lg border border-border bg-background p-2.5"
                          }
                        >
                          <div className="aspect-square w-full rounded-md bg-muted/50" />
                          <div className="mt-2 h-2.5 w-4/5 rounded-md bg-muted/80" />
                          <div className="mt-1.5 h-2 w-1/3 rounded-md bg-muted/60" />
                          <div
                            className={
                              idx === 1
                                ? "mt-2.5 h-6 w-full rounded-full bg-primary/20"
                                : "mt-2.5 h-6 w-full rounded-full border border-primary/20 bg-primary/10"
                            }
                          />
                        </div>
                      ))}
                    </div>

                    {/* Bottom: checkout / promo strip */}
                    <div className="shrink-0 border-t border-border bg-muted/15 px-3 py-2.5">
                      <div className="h-7 w-full rounded-full bg-primary/15" />
                    </div>
                  </div>
                </div>
              </div>

              {/* subtle depth layer */}
              <div
                className="pointer-events-none absolute -bottom-3 right-8 -z-10 h-24 w-[70%] rounded-[2rem] bg-primary/[0.06] blur-2xl"
                aria-hidden
              />
            </div>
          </motion.div>
        </div>

        {/* Partner marquee */}
        <div className="mt-10 w-full border-t border-border/60 pt-6">
          <div className={reduced ? "partner-static" : "partner-marquee-wrapper overflow-hidden"} aria-label="Partnere">
            <div className={`flex items-center gap-12 ${reduced ? "partner-marquee-static justify-center" : "partner-marquee"}`}>
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