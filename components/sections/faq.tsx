import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const items = [
    {
      id: "scope",
      question: "What kind of companies do you typically work with?",
      answer:
        "Mostly B2B SaaS and services companies from seed to series C. The common thread is a need for a tighter narrative and a more effective marketing site.",
    },
    {
      id: "timeline",
      question: "How long does a typical engagement take?",
      answer:
        "The first meaningful version of your new experience is usually live within 4–8 weeks, depending on scope and stakeholders.",
    },
    {
      id: "team",
      question: "Who will I actually work with?",
      answer:
        "A small senior team across strategy, design and engineering. No hand-offs between agencies or internal teams.",
    },
  ];

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-b bg-background py-16 sm:py-20"
    >
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-[1.7rem]"
          >
            Common questions, upfront.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-[0.98rem] sm:leading-relaxed">
            Swap these for your real objections and buying questions later. The
            structure is ready.
          </p>
        </div>
        <div className="mt-8 max-w-2xl">
          <Accordion type="single" collapsible>
            {items.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

