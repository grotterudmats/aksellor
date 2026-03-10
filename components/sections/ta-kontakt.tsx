"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const bullets = [
  "Svar innen 24t",
  "Teknisk sparring",
  "Demo av plattform",
];

export function TaKontaktSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("done"), 800);
  }

  return (
    <section
      id="ta-kontakt"
      aria-labelledby="ta-kontakt-heading"
      className="section-sep section-pad bg-background"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="ta-kontakt-heading"
              className="section-title text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Ta kontakt
            </h2>
            <p className="section-lead mt-4 lead text-muted-foreground">
              Vi vil gjerne høre om behovet ditt og hvordan Aksellor kan
              bidra. Send en melding så tar vi en uforpliktende prat.
            </p>
            <ul className="mt-6 space-y-3" role="list">
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
          <div
            className="rounded-[var(--radius)] border border-border bg-card p-6 shadow-[var(--shadow)] sm:p-8"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              aria-label="Kontaktskjema"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-foreground"
                >
                  Navn
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  placeholder="Ditt navn"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-foreground"
                >
                  E-post
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  placeholder="din@epost.no"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-foreground"
                >
                  Melding
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5 w-full resize-y rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  placeholder="Fortell oss kort om behovet ditt..."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-[var(--radius)] sm:w-auto"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? "Sender..."
                  : status === "done"
                    ? "Sendt"
                    : "Send"}
              </Button>
              <p className="text-xs text-muted-foreground">
                Vi behandler opplysningene i henhold til vår personvernerklæring.
                Ved å sende skjemaet godtar du at vi kontakter deg i forbindelse
                med henvendelsen.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
