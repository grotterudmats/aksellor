import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "VP Marketing, B2B SaaS",
      quote:
        "The Aksellor team helped us sharpen our story and ship a site our team is actually proud of.",
    },
    {
      name: "Founder, B2B company",
      quote:
        "They work like an internal team – fast, opinionated and thoughtful about trade-offs.",
    },
  ];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="border-b bg-background py-14 sm:py-18"
    >
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-[1.7rem]"
          >
            Signals from teams like yours.
          </h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.name} className="h-full">
              <CardContent className="pt-5 text-sm">
                <p className="text-muted-foreground">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-4 text-xs font-medium text-foreground">
                  {item.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

