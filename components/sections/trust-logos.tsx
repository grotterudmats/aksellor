export function TrustLogosSection() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="border-b bg-background py-10 sm:py-12"
    >
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p
              id="trust-heading"
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
            >
              Trusted by B2B teams
            </p>
            <p className="mt-2 max-w-sm text-xs text-muted-foreground">
              We typically work with product-led and sales-led B2B SaaS
              companies from seed to series C.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-3 text-xs text-muted-foreground sm:grid-cols-3 md:text-sm">
            <span className="text-foreground/80">Placeholder Logo 1</span>
            <span className="text-foreground/80">Placeholder Logo 2</span>
            <span className="text-foreground/80">Placeholder Logo 3</span>
            <span className="text-foreground/80">Placeholder Logo 4</span>
            <span className="text-foreground/80">Placeholder Logo 5</span>
            <span className="text-foreground/80">Placeholder Logo 6</span>
          </div>
        </div>
      </div>
    </section>
  );
}

