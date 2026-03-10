"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

const cases = [
  {
    id: "hoyer",
    name: "Hoyer.no",
    tag: "E-handel",
    image: "/case1.jpg",
    teaser:
      "E-handelsløsning og plattform som støtter vekst på tvers av kanaler.",
    expanded:
      "Hoyer har valgt Aksellor for å samle netthandel og markedsføring under ett tak. Vi leverte en skalerbar plattform med rask tid til marked og tydelig eierskap.",
    impacts: [
      "Kortere tid fra idé til lansering",
      "Én felles plattform for flere merkevarer",
      "Redusert avhengighet av flere leverandører",
    ],
  },
  {
    id: "david-andersen",
    name: "David-andersen.no",
    tag: "Premium",
    image: "/case2.jpg",
    teaser:
      "Premium merkevare med behov for fleksibel e-handel og sterk brukeropplevelse.",
    expanded:
      "David-Andersen ønsket en løsning som reflekterer kvaliteten på produktene. Vi bygde en moderne e-handel med fokus på konvertering og kundereise.",
    impacts: [
      "Økt konvertering på mobil",
      "Enklere redigering av innhold",
      "Bedre sporbarhet av kampanjer",
    ],
  },
  {
    id: "cocktailclub",
    name: "Cocktailclub.com",
    tag: "B2B",
    image: "/case3.jpg",
    teaser:
      "Abonnements- og engrosløsning med integrasjoner mot lager og betaling.",
    expanded:
      "Cocktail Club trengte en stabil e-handel som håndterer abonnementer og B2B. Vi leverte integrasjoner mot eksisterende systemer og tydelig brukeropplevelse.",
    impacts: [
      "Sammensatt abonnement og engros i én løsning",
      "Redusert manuell håndtering",
      "Tydeligere innsikt i salg og lager",
    ],
  },
  {
    id: "miinto",
    name: "Miinto.com",
    tag: "Skalering",
    image: "/case4.jpg",
    teaser:
      "Skalering av flermerkevare-plattform med fokus på ytelse og brukeropplevelse.",
    expanded:
      "Miinto har vokst raskt og trengte en plattform som skalerer med dem. Vi har bidratt med arkitektur, e-handel og optimalisering for konvertering og hastighet.",
    impacts: [
      "Raskere sidelasting og bedre Core Web Vitals",
      "Fleksibel integrasjon mot mange merkevarer",
      "Én teknisk eier for videreutvikling",
    ],
  },
];

export function CaseStudiesSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduced = useReducedMotion();

  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = useCallback((direction: "left" | "right") => {
    const container = scrollerRef.current;
    if (!container) return;

    const firstCard = container.querySelector<HTMLElement>("[data-case-card]");
    const base = firstCard?.offsetWidth ?? container.clientWidth * 0.7;
    const gap = 24; // px, matches gap-6
    const delta = direction === "right" ? base + gap : -(base + gap);

    container.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="section-sep section-pad bg-background"
    >
      <div className="container">
        <h2
          id="case-studies-heading"
          className="section-title text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Case studies
        </h2>
        <p className="section-lead mt-3 max-w-2xl lead text-muted-foreground">
          Slik har vi hjulpet bedrifter med plattform, e-handel og vekst.
        </p>
        <div className="mt-8">
          <div className="scrollParent relative">
            <div className="scrollX">
              <div
                ref={scrollerRef}
                className="scroller no-scrollbar mt-2 flex gap-6 overflow-x-auto scroll-smooth py-6"
                style={{
                  width: "100vw",
                  marginLeft: "calc((100% - 100vw) / 2)",
                  paddingLeft: "calc((100vw - 100%) / 2 - 12px)",
                  paddingRight: "calc((100vw - 100%) / 2 - 12px)",
                }}
                aria-label="Case cards"
              >
            {cases.map((c, i) => {
              const isOpen = openId === c.id;
              const fu = fadeUp(i, reduced ?? undefined);
              const imageSrc = c.image;

              return (
                <motion.article
                  key={c.id}
                  initial={fu.initial}
                  whileInView={fu.whileInView}
                  viewport={fu.viewport}
                  transition={fu.transition}
                  className="flex-[0_0_auto] shrink-0 w-[78vw] md:w-[52vw] lg:w-[40vw] overflow-hidden rounded-[var(--radius)] border border-border bg-card shadow-[var(--shadow)] transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-2)] focus-within:ring-2 focus-within:ring-primary/20 focus-within:ring-offset-2"
                  data-case-card
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[var(--radius)] bg-gradient-to-br from-muted/70 via-muted to-muted/80">
                    <div className="flex h-full w-full items-center justify-center text-xs font-medium tracking-wide text-muted-foreground/80">
                      Case
                    </div>
                    <img
                      src={imageSrc}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.classList.add("hidden");
                      }}
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {c.name}
                      </h3>
                      <span
                        className="rounded-md border border-border/80 bg-muted/50 px-2 py-0.5 text-xs font-medium text-muted-foreground"
                        aria-hidden
                      >
                        {c.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {c.teaser}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-4 rounded-[var(--radius)]"
                      onClick={() => setOpenId(isOpen ? null : c.id)}
                      aria-expanded={isOpen}
                      aria-controls={`case-content-${c.id}`}
                      id={`case-trigger-${c.id}`}
                    >
                      Les mer
                      <ChevronDown
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform duration-200 ease-out",
                          isOpen && "rotate-180"
                        )}
                        aria-hidden
                      />
                    </Button>
                    <div
                      id={`case-content-${c.id}`}
                      role="region"
                      aria-labelledby={`case-trigger-${c.id}`}
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <motion.div
                          className="mt-3 border-t border-border/80 pt-4"
                          initial={false}
                          animate={{ opacity: isOpen ? 1 : 0 }}
                          transition={{
                            duration: 0.25,
                            delay: isOpen ? 0.05 : 0,
                            ease: "easeOut",
                          }}
                        >
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {c.expanded}
                          </p>
                          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-foreground/80">
                            Impact
                          </p>
                          <ul className="mt-2 space-y-2" role="list">
                            {c.impacts.map((impact) => (
                              <li
                                key={impact}
                                className="flex items-start gap-3 text-sm text-foreground"
                              >
                                <span
                                  className="mt-1.5 h-1.5 w-1 shrink-0 rounded-sm bg-primary"
                                  aria-hidden
                                />
                                <span>{impact}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
              </div>
            </div>

            <div className="buttonsHolder pointer-events-none absolute top-1/2 hidden -translate-y-1/2 md:flex">
              <button
                type="button"
                className="btnLeft pointer-events-auto rounded-full bg-background/90 shadow-[var(--shadow)] hover:bg-background"
                style={{
                  position: "absolute",
                  left: "calc((100% - 100vw) / 2 + 16px)",
                }}
                onClick={() => scrollByCard("left")}
                aria-label="Forrige case"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                className="btnRight pointer-events-auto rounded-full bg-background/90 shadow-[var(--shadow)] hover:bg-background"
                style={{
                  position: "absolute",
                  right: "calc((100% - 100vw) / 2 + 16px)",
                }}
                onClick={() => scrollByCard("right")}
                aria-label="Neste case"
              >
                <ChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
