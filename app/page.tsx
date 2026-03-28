import { AboutMission } from "@/components/landing/AboutMission";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCta } from "@/components/landing/FinalCta";
import { HeaderNav } from "@/components/landing/HeaderNav";
import { Hero } from "@/components/landing/Hero";
import { PortfolioShowcase } from "@/components/landing/PortfolioShowcase";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { ValueGrid } from "@/components/landing/ValueGrid";

export default function Home() {
  return (
    <div id="top" className="min-h-dvh bg-zinc-100 text-zinc-900 antialiased">
      <HeaderNav />
      <main>
        <Hero />
        <AboutMission />
        <PortfolioShowcase />
        <ProcessSection />
        <ValueGrid />
        <TestimonialsSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
