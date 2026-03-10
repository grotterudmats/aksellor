"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { fadeUp } from "@/lib/motion";

const bullets = [
  "Egenutviklet kjerne",
  "Full teknisk kontroll",
  "Mindre leverandøravhengighet",
  "Ett samlet ansvarspunkt",
];

export function HvaViGjorSection() {
  const reduced = useReducedMotion();
  const fu0 = fadeUp(0, reduced);
  const fu1 = fadeUp(1, reduced);

  return (
    <section
      id="hva-vi-gjor"
      aria-labelledby="hva-vi-gjor-heading"
      className="section-sep hva-vi-gjor-bg relative pt-12 pb-12 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16"
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <motion.div
            initial={fu0.initial}
            whileInView={fu0.whileInView}
            viewport={fu0.viewport}
            transition={fu0.transition}
            className="max-w-[60ch]"
          >
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground/80" aria-hidden>
              Oversikt
            </p>
            <h2
              id="hva-vi-gjor-heading"
              className="section-title text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Hva vi gjør
            </h2>
            <p className="section-lead mt-4 text-lg md:text-xl leading-relaxed text-muted-foreground">
              Aksellor Cloud styrker bedrifter med banebrytende nettløsninger,
              e-handelsplattformer og strategisk rådgivning for å drive
              eksponentiell vekst.
            </p>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-muted-foreground">
              Du får mindre leverandøravhengighet, raskere videreutvikling og ett
              samlet ansvarspunkt – fra plattform til markedsføring.
            </p>
          </motion.div>
          <motion.div
            initial={fu1.initial}
            whileInView={fu1.whileInView}
            viewport={fu1.viewport}
            transition={fu1.transition}
            className="rounded-[var(--radius)] border border-border bg-card p-6 shadow-[var(--shadow-2)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[var(--shadow-2)] sm:p-8"
          >
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Én plattform
            </h3>
            <ul className="mt-5 space-y-3.5" role="list">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
