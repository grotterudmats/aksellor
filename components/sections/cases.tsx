import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CasesSection() {
  const cases = [
    {
      name: "B2B SaaS A",
      badge: "Seed → Series A",
      summary:
        "Reframed positioning and rebuilt marketing site, leading to a material lift in demo requests.",
    },
    {
      name: "B2B SaaS B",
      badge: "PLG motion",
      summary:
        "Clarified onboarding story and product narrative for self-serve funnel on web.",
    },
    {
      name: "Services company C",
      badge: "Premium repositioning",
      summary:
        "Built a lean, premium site that supports fewer but higher-quality inbound opportunities.",
    },
  ];

  return (
    <section
      id="cases"
      aria-labelledby="cases-heading"
      className="border-b bg-background py-16 sm:py-20"
    >
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Case studies
          </p>
          <h2
            id="cases-heading"
            className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-[1.7rem]"
          >
            Work that looks good and performs.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-[0.98rem] sm:leading-relaxed">
            Placeholder cases – swap for actual work later. The structure is ready
            for concrete metrics and quotes.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <Card key={item.name} className="h-full">
              <CardHeader>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {item.badge}
                </p>
                <CardTitle className="mt-1 text-base">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>{item.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

