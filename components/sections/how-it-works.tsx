import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HowItWorksSection() {
  const steps = [
    {
      label: "01",
      title: "Discovery & focus",
      body: "We unpack your context, constraints and goals, then narrow scope to what will move the needle fastest.",
    },
    {
      label: "02",
      title: "Design & build sprints",
      body: "We work in tight loops with your team, aligning on direction, then designing and implementing in parallel.",
    },
    {
      label: "03",
      title: "Launch & iterate",
      body: "We ship, measure and iterate. The goal is a marketing engine you can evolve without friction.",
    },
  ];

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="border-b bg-background py-16 sm:py-20"
    >
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            How it works
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-[1.7rem]"
          >
            A clear, low-drag engagement model.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-[0.98rem] sm:leading-relaxed">
            No big-bang redesigns. We focus on the highest-leverage parts of your
            experience first, then expand from there.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.label} className="h-full">
              <CardHeader className="border-b-0 px-6 pb-1 pt-5">
                <p className="text-xs font-medium text-muted-foreground">
                  {step.label}
                </p>
                <CardTitle className="mt-1">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-muted-foreground">
                <p>{step.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

