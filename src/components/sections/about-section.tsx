"use client";

import { useLanguage } from "@/lib/i18n";
import { AnimatedSection, AnimatedChild } from "@/components/animated-section";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <AnimatedSection
      id="about"
      className="py-32 px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
      {/* Thin separator line */}
      <AnimatedChild>
        <div className="w-full h-px bg-gradient-to-be from-transparent via-border to-transparent mb-32" />
      </AnimatedChild>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
        <AnimatedChild className="lg:col-span-2 lg:sticky lg:top-32 self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-4">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            {t("about.heading")}
          </h2>
        </AnimatedChild>

        <AnimatedChild className="lg:col-span-3">
          <p className="text-xl md:text-[22px] text-muted-foreground leading-relaxed font-light">
            {t("about.body")}
          </p>

          {/* Mini stats row */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-2 border-t border-border/50">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">2026</p>
              <p className="text-sm text-muted-foreground mt-1">Founded</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">AI</p>
              <p className="text-sm text-muted-foreground mt-1">First Approach</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">ID</p>
              <p className="text-sm text-muted-foreground mt-1">Based in Indonesia</p>
            </div>
          </div>
        </AnimatedChild>
      </div>
    </AnimatedSection>
  );
}
