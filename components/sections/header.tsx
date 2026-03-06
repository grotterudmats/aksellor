import Link from "next/link";

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#hva-vi-gjor", label: "Hva vi gjør" },
  { href: "#vi-leverer", label: "Vi leverer" },
  { href: "#case-studies", label: "Cases" },
  { href: "#ta-kontakt", label: "Ta kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between sm:h-16">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
          aria-label="Aksellor Cloud hjem"
        >
          Aksellor Cloud
        </Link>
        <nav
          className="flex items-center gap-6 text-sm text-muted-foreground"
          aria-label="Hovednavigasjon"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hidden transition-opacity hover:text-foreground hover:underline hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-block"
            >
              {label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="#ta-kontakt">Book demo</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
