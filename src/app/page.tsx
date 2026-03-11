import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WhySection } from "@/components/sections/why-section";
import { PlatformsSection } from "@/components/sections/platforms-section";
import { EnterpriseSection } from "@/components/sections/enterprise-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-start w-full relative z-0 pb-12">
        <HeroSection />
        <AboutSection />
        <WhySection />
        <PlatformsSection />
        <EnterpriseSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
