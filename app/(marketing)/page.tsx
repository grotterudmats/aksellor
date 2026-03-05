import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/hero";
import { HvaViGjorSection } from "@/components/sections/hva-vi-gjor";
import { ViLevererSection } from "@/components/sections/vi-leverer";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { TaKontaktSection } from "@/components/sections/ta-kontakt";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <HvaViGjorSection />
        <ViLevererSection />
        <CaseStudiesSection />
        <TaKontaktSection />
      </main>
      <Footer />
    </div>
  );
}
