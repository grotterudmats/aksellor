import { Check } from "lucide-react";

export function HvaViGjorSection() {
  const bullets = [
    "Egenutviklet kjerne",
    "Full teknisk kontroll",
    "Mindre leverandøravhengighet",
    "Ett samlet ansvarspunkt",
  ];

  return (
    <section
      id="hva-vi-gjor"
      aria-labelledby="hva-vi-gjor-heading"
      className="section-sep section-pad bg-background"
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2
              id="hva-vi-gjor-heading"
              className="section-title text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Hva vi gjør
            </h2>
            <p className="section-lead mt-4 lead text-muted-foreground">
              Aksellor Cloud styrker bedrifter med banebrytende nettløsninger,
              e-handelsplattformer og strategisk rådgivning for å drive
              eksponentiell vekst. Du får mindre leverandøravhengighet, raskere
              videreutvikling og ett samlet ansvarspunkt – fra plattform til
              markedsføring.
            </p>
          </div>
          <div
            className="rounded-[var(--radius)] border border-border bg-card p-6 shadow-[var(--shadow-2)] sm:p-8"
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
          </div>
        </div>
      </div>
    </section>
  );
}
