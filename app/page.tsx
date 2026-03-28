import { AboutMission } from "@/components/landing/AboutMission";
import { FinalCtaFooter } from "@/components/landing/FinalCtaFooter";
import { HeaderNav } from "@/components/landing/HeaderNav";
import { Hero } from "@/components/landing/Hero";
import { ValueGrid } from "@/components/landing/ValueGrid";

export default function Home() {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900">
      <HeaderNav />
      <main>
        <Hero />
        <AboutMission />
        <ValueGrid />
      </main>
      <FinalCtaFooter />
    </div>
  );
}
