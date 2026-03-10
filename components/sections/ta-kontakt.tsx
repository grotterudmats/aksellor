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
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("sending");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
      company: String(fd.get("company") ?? "") || undefined,
      hp: String(fd.get("hp") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null)) as
        | { ok: true }
        | { ok: false; error?: string }
        | null;

      if (!res.ok || !data || data.ok !== true) {
        setStatus("idle");
        setError(
          (data && "error" in data && data.error) ||
            "Noe gikk galt. Prøv igjen."
        );
        return;
      }

      form.reset();
      setStatus("done");
      setTimeout(() => setStatus("idle"), 3500);
    } catch {
      setStatus("idle");
      setError("Kunne ikke sende. Sjekk nettverket og prøv igjen.");
    }
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
              <input
                type="text"
                name="hp"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden
              />
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
                  htmlFor="contact-company"
                  className="block text-sm font-medium text-foreground"
                >
                  Selskap <span className="text-muted-foreground">(valgfritt)</span>
                </label>
                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  autoComplete="organization"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  placeholder="Firmanavn"
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
              {status === "done" && (
                <p className="text-sm text-primary">
                  Takk! Meldingen er sendt. Vi tar kontakt snart.
                </p>
              )}
              {error && <p className="text-sm text-red-600">{error}</p>}
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
