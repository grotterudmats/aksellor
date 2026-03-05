import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export default function MarketingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <section id="hero" className="border-b py-16 sm:py-20">
          <div className="container">
            <h1 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Basen for neste Aksellor-lignende marketing-side.
            </h1>
            <p className="mt-4 max-w-xl text-balance text-sm text-muted-foreground sm:text-base">
              Rask iterasjon, ryddig struktur, god typografi og forutsigbar
              spacing.
            </p>
          </div>
        </section>

        <section id="produkt" className="border-b py-12 sm:py-16">
          <div className="container">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Placeholder: Produktseksjon
            </h2>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground sm:text-base">
              Beskriv verdiforslaget ditt her. Bytt senere til faktiske
              komponenter.
            </p>
          </div>
        </section>

        <section id="om-oss" className="border-b py-12 sm:py-16">
          <div className="container">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Placeholder: Om oss
            </h2>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground sm:text-base">
              Historie, team og sosial proof kan bo i egne seksjons-komponenter.
            </p>
          </div>
        </section>

        <section id="kontakt" className="py-12 sm:py-16">
          <div className="container">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Placeholder: Kontakt
            </h2>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground sm:text-base">
              Skjema, CTA eller lenke til booking verktøy kan komme her.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

