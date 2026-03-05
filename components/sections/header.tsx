import Link from "next/link";

export function Header() {
  return (
    <header className="border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-base font-semibold tracking-tight">
          Aksellor
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="#produkt" className="hover:text-foreground">
            Produkt
          </Link>
          <Link href="#om-oss" className="hover:text-foreground">
            Om oss
          </Link>
          <Link href="#kontakt" className="hover:text-foreground">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}

