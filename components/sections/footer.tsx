export function Footer() {
  return (
    <footer className="border-t bg-background/80">
      <div className="container flex h-16 items-center justify-between text-xs text-muted-foreground">
        <span>
          © {new Date().getFullYear()} Aksellor. Alle rettigheter forbeholdt.
        </span>
        <div className="flex items-center gap-4">
          <a href="#personvern" className="hover:text-foreground">
            Personvern
          </a>
          <a href="#cookies" className="hover:text-foreground">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}

