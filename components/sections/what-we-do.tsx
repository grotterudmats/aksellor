import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="border-b bg-background py-16 sm:py-20"
    >
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            What we do
          </p>
          <h2
            id="what-we-do-heading"
            className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-[1.7rem]"
          >
            A compact team across strategy, design and engineering.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-[0.98rem] sm:leading-relaxed">
            We plug into your team to own the digital experience end-to-end – from
            positioning and UX to implementation and measurement.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Positioning & narrative</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Clarify who you are for, why you win and how you talk about it
                across touchpoints.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Experience & design</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Translate strategy into a premium, conversion-focused web
                experience that feels on-brand.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Implementation & iteration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Ship fast on a solid technical foundation with clear ownership
                and a small surface area.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

