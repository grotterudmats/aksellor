import Link from "next/link";
import Image from "next/image";

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
          className="flex items-center gap-2 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Aksellor hjem"
        >
          <Image
            src="/logo.svg"
            alt=""
            width={32}
            height={32}
            className="h-7 w-auto sm:h-8"
          />
          <span className="hidden font-medium tracking-[0.08em] text-foreground sm:inline" style={{ fontFamily: "var(--font-montserrat)" }}>
            Aksellor
          </span>
        </Link>
        <nav
          className="flex items-center gap-6 text-sm text-muted-foreground"
          aria-label="Hovednavigasjon"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hidden transition-all duration-200 hover:text-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-block"
            >
              {label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="https://tidycal.com/aksellor/30-minute-meeting" className="!text-primary-foreground hover:!text-primary-foreground">Book demo</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
