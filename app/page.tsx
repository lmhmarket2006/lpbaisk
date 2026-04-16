import { AnnouncementBar } from "@/components/landing/AnnouncementBar";
import { AuthorityStrip } from "@/components/landing/AuthorityStrip";
import { BrandHeader } from "@/components/landing/BrandHeader";
import { Differentiators } from "@/components/landing/Differentiators";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCta } from "@/components/landing/FinalCta";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { Hero } from "@/components/landing/Hero";
import { Instructor } from "@/components/landing/Instructor";
import { MidPageCta } from "@/components/landing/MidPageCta";
import { ModulesSection } from "@/components/landing/ModulesSection";
import { Outcomes } from "@/components/landing/Outcomes";
import { PainPoints } from "@/components/landing/PainPoints";
import { PricingSection } from "@/components/landing/PricingSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";
import { Transformation } from "@/components/landing/Transformation";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:m-0 focus:inline-flex focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-navy focus:shadow-lg"
      >
        تخطي إلى المحتوى
      </a>

      <AnnouncementBar />
      <BrandHeader />

      <main id="main">
        <Hero />
        <AuthorityStrip />
        <PainPoints />
        <Transformation />
        <Outcomes />
        <ModulesSection />
        <MidPageCta />
        <Differentiators />
        <Instructor />
        <PricingSection />
        <FaqSection />
        <FinalCta />
        <SiteFooter />
      </main>

      <StickyMobileCta />
      <FloatingWhatsApp />
    </>
  );
}
