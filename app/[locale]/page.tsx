import { getLocale } from "next-intl/server";
import { HeroSection } from "@/components/screens/home/HeroSection";
import { AboutSection } from "@/components/screens/home/AboutSection";
import { VisionMissionSection } from "@/components/screens/home/VisionMissionSection";
import { ServicesSection } from "@/components/screens/home/ServicesSection";
import { WhatWeOfferSection } from "@/components/screens/home/WhatWeOfferSection";
import { ClientJourneySection } from "@/components/screens/home/ClientJourneySection";
import { WhoWeServeSection } from "@/components/screens/home/WhoWeServeSection";
import { ValuesSection } from "@/components/screens/home/ValuesSection";
import { PromiseSection } from "@/components/screens/home/PromiseSection";
import { ContactSection } from "@/components/screens/home/ContactSection";


export default async function Page() {
  const locale = await getLocale();
  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="text-slate-800 bg-slate-50 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden scroll-smooth">
      <main>
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <ServicesSection />
        <WhatWeOfferSection />
        <ClientJourneySection />
        <WhoWeServeSection />
        <ValuesSection />
        <PromiseSection />
        <ContactSection />
      </main>
    </div>);
}
