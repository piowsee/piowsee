"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedChild } from "@/components/animated-section";
import { ArrowRight, BadgeCheck } from "lucide-react";
import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false });

export function HeroSection() {
  const { t } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const auroraColors = mounted && resolvedTheme === "light"
    ? ["#c6c1f6", "#cbcbff", "#38df8e"]
    : ["#34d399", "#47919e", "#624f90"];

  return (
    <AnimatedSection
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 lg:px-8 overflow-x-hidden pt-28 pb-36"
    >
      {/* Aurora Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden"
        style={{
          opacity: mounted && resolvedTheme === "light" ? 0.2 : 0.7,
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      >
        <Aurora
          colorStops={auroraColors}
          blend={0.5}
          amplitude={1}
          speed={0.7}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
        <AnimatedChild>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 glass-panel text-emerald-600 dark:text-emerald-400">
            <BadgeCheck className="w-4 h-4" />
            piowsee.ai  
          </div>
        </AnimatedChild>

        <AnimatedChild>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-gradient leading-[1.2] max-w-6xl mx-auto">
            {t("hero.headline")}
          </h1>
        </AnimatedChild>

        <AnimatedChild>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed mx-auto font-light">
            {t("hero.subtitle")}
          </p>
        </AnimatedChild>

        <AnimatedChild className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Button
            asChild
            size="lg"
            className="bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 w-full sm:w-auto h-14 px-8 text-base rounded-full group"
          >
            <a href="#platforms">
              {t("hero.primary")}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto h-14 px-8 text-base rounded-full border-foreground/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300"
          >
            <a href="#contact">{t("hero.secondary")}</a>
          </Button>
        </AnimatedChild>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-1.5 pt-2">
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </AnimatedSection>
  );
}
