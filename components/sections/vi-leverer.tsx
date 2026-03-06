"use client";

import {
  Globe,
  ShoppingCart,
  Palette,
  Sparkles,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const offerings = [
  {
    title: "AI Website builder",
    description: "Moderne nettsider bygget med smarte verktøy og rask iterasjon.",
    icon: Globe,
  },
  {
    title: "Komplett fremtidsrettet e-commerce",
    description: "Hele kjeden fra katalog til kasse, skalert for vekst.",
    icon: ShoppingCart,
  },
  {
    title: "Optimalisert design og utvikling",
    description: "Brukeropplevelse og ytelse som konverterer og holder kunder.",
    icon: Palette,
  },
  {
    title: "Generativ innholdsproduksjon og markedsføring",
    description: "Innhold og kampanjer som følger merkevaren og målgruppen.",
    icon: Sparkles,
  },
  {
    title: "Personlig support og rådgivning",
    description: "Dedikert sparring og oppfølging så du når målene dine.",
    icon: Headphones,
  },
  {
    title: "Automatisert compliance-håndtering",
    description: "Sikkerhet og regelverk håndtert systematisk og transparent.",
    icon: ShieldCheck,
  },
];

export function ViLevererSection() {
  return (
    <section
      id="vi-leverer"
      aria-labelledby="vi-leverer-heading"
      className="section-sep section-pad bg-background"
    >
      <div className="container">
        {process.env.NODE_ENV === "development" && (
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mb-4 inline-block rounded-md border border-amber-400/60 bg-amber-400/20 px-2.5 py-1 text-xs font-medium text-amber-800"
          >
            Motion: ON
          </motion.span>
        )}
        <h2
          id="vi-leverer-heading"
          className="section-title text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Vi leverer
        </h2>
        <p className="section-lead mt-3 max-w-2xl lead text-muted-foreground">
          Alt du trenger for å vokse digitalt – på én plattform, med ett team.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-[var(--radius)] border border-border bg-card p-5 shadow-[var(--shadow)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[var(--shadow-2)] focus-within:ring-2 focus-within:ring-primary/20 focus-within:ring-offset-2"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
