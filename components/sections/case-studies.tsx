"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const cases = [
  {
    id: "hoyer",
    name: "Hoyer.no",
    tag: "E-handel",
    teaser:
      "E-handelsløsning og plattform som støtter vekst på tvers av kanaler.",
    expanded:
      "Placeholder: Hoyer har valgt Aksellor Cloud for å samle netthandel og markedsføring under ett tak. Vi leverte en skalerbar plattform med rask tid til marked og tydelig eierskap.",
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
    teaser:
      "Premium merkevare med behov for fleksibel e-handel og sterk brukeropplevelse.",
    expanded:
      "Placeholder: David Andersen ønsket en løsning som reflekterer kvaliteten på produktene. Vi bygde en moderne e-handel med fokus på konvertering og kundereise.",
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
    teaser:
      "Abonnements- og engrosløsning med integrasjoner mot lager og betaling.",
    expanded:
      "Placeholder: Cocktail Club trengte en stabil e-handel som håndterer abonnementer og B2B. Vi leverte integrasjoner mot eksisterende systemer og tydelig brukeropplevelse.",
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
    teaser:
      "Skalering av flermerkevare-plattform med fokus på ytelse og brukeropplevelse.",
    expanded:
      "Placeholder: Miinto har vokst raskt og trengte en plattform som skalerer med dem. Vi har bidratt med arkitektur, e-handel og optimalisering for konvertering og hastighet.",
    impacts: [
      "Raskere sidelasting og bedre Core Web Vitals",
      "Fleksibel integrasjon mot mange merkevarer",
      "Én teknisk eier for videreutvikling",
    ],
  },
];

export function CaseStudiesSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="section-sep section-pad bg-background"
    >
      <div className="container">
        <h2
          id="case-studies-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Case studies
        </h2>
        <p className="mt-3 max-w-2xl lead text-muted-foreground">
          Slik har vi hjulpet bedrifter med plattform, e-handel og vekst.
        </p>
        <div className="mt-10 space-y-3">
          {cases.map((c) => {
            const isOpen = openId === c.id;
            return (
              <div
                key={c.id}
                className="overflow-hidden rounded-[1.5rem] border border-border/80 bg-card shadow-sm transition-shadow hover:shadow-[var(--shadow-soft)]"
              >
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
                  <p className="mt-2 text-sm text-muted-foreground">{c.teaser}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 rounded-[1.25rem]"
                    onClick={() => setOpenId(isOpen ? null : c.id)}
                    aria-expanded={isOpen}
                    aria-controls={`case-content-${c.id}`}
                    id={`case-trigger-${c.id}`}
                  >
                    Les mer
                    <ChevronDown
                      className={cn("ml-1 h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
                      aria-hidden
                    />
                  </Button>
                </div>
                <div
                  id={`case-content-${c.id}`}
                  role="region"
                  aria-labelledby={`case-trigger-${c.id}`}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="min-h-0">
                    <div className="border-t border-border/60 bg-muted/30 px-5 py-4 sm:px-6 sm:py-5">
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
                              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                              aria-hidden
                            />
                            <span>{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
