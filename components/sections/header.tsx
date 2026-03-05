import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-between sm:h-16">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground"
          aria-label="Aksellor hjem"
        >
          Aksellor
        </Link>
        <nav
          className="flex items-center gap-5 text-sm text-muted-foreground"
          aria-label="Hovednavigasjon"
        >
          <Link
            href="#what-we-do"
            className="hidden sm:inline hover:text-foreground hover:underline hover:decoration-foreground/60 hover:underline-offset-4"
          >
            What we do
          </Link>
          <Link
            href="#how-it-works"
            className="hidden sm:inline hover:text-foreground hover:underline hover:decoration-foreground/60 hover:underline-offset-4"
          >
            How it works
          </Link>
          <Link
            href="#cases"
            className="hidden sm:inline hover:text-foreground hover:underline hover:decoration-foreground/60 hover:underline-offset-4"
          >
            Cases
          </Link>
          <Button asChild size="sm">
            <Link href="#contact">Book intro call</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

