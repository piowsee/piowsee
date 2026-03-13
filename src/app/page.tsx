import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowToUseSection } from "@/components/sections/HowToUseSection";
import { PromoSection } from "@/components/sections/PromoSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <HowToUseSection />
      <PromoSection />
      <Footer />
    </main>
  );
}
