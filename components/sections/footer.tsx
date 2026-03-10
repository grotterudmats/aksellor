import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">Aksellor</p>
            <p className="mt-1 max-w-xs text-xs text-muted-foreground">
              Plattform, e-handel og rådgivning for fremtidens digital handel.
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-6 text-sm text-muted-foreground"
            aria-label="Footer-navigasjon"
          >
            <Link href="#hva-vi-gjor" className="transition-colors hover:text-foreground">
              Hva vi gjør
            </Link>
            <Link href="#vi-leverer" className="transition-colors hover:text-foreground">
              Vi leverer
            </Link>
            <Link href="#case-studies" className="transition-colors hover:text-foreground">
              Cases
            </Link>
            <Link href="#ta-kontakt" className="transition-colors hover:text-foreground">
              Ta kontakt
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-border/70 pt-6 text-xs text-muted-foreground">
          © {year} Aksellor. Alle rettigheter forbeholdt.
        </div>
      </div>
    </footer>
  );
}
