export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/80">
      <div className="container py-10 text-sm text-muted-foreground">
        <div className="grid gap-8 md:grid-cols-[2fr,1fr,1fr,1fr]">
          <div>
            <p className="text-base font-semibold text-foreground">Aksellor</p>
            <p className="mt-3 max-w-sm text-xs">
              Strategy, design and engineering for ambitious B2B companies.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              Company
            </p>
            <ul className="mt-3 space-y-1.5">
              <li>
                <a href="#what-we-do" className="hover:text-foreground">
                  What we do
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-foreground">
                  Cases
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              Resources
            </p>
            <ul className="mt-3 space-y-1.5">
              <li>
                <a href="#faq" className="hover:text-foreground">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              Legal
            </p>
            <ul className="mt-3 space-y-1.5">
              <li>
                <a href="#privacy" className="hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#cookies" className="hover:text-foreground">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-4 text-xs md:flex-row md:items-center md:justify-between">
          <span>© {year} Aksellor. All rights reserved.</span>
          <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
            Built with Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}

