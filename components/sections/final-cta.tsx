import Link from "next/link";

import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section
      id="contact"
      aria-labelledby="final-cta-heading"
      className="bg-background py-16 sm:py-20"
    >
      <div className="container">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Ready when you are
          </p>
          <h2
            id="final-cta-heading"
            className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-[1.7rem]"
          >
            Share a bit of context. We&rsquo;ll respond with a concrete way
            forward.
          </h2>
          <p className="mt-3 max-w-lg text-sm text-muted-foreground sm:text-base">
            No long forms. No automated sequences. Just a short note and a
            conversation to see if there is a fit.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <Link href="mailto:hello@example.com">Email us</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="#hero">Back to top</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

