"use client";

import { useLanguage } from "@/lib/i18n";
import { AnimatedSection, AnimatedChild } from "@/components/animated-section";
import { BrainCircuit, AppWindow, Database, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function EnterpriseSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: t("enterprise.genai.title"),
      description: t("enterprise.genai.body"),
      iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: <AppWindow className="h-6 w-6" />,
      title: t("enterprise.web.title"),
      description: t("enterprise.web.body"),
      iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: t("enterprise.data.title"),
      description: t("enterprise.data.body"),
      iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <AnimatedSection
      id="services"
      className="py-32 px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
      <AnimatedChild className="text-center mb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-4">
          Custom Solutions
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {t("enterprise.heading")}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("enterprise.subtitle")}
        </p>
      </AnimatedChild>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <AnimatedChild key={index}>
            <motion.div
              className="relative rounded-2xl p-8 md:p-10 h-full cursor-default
                bg-gradient-to-br from-white/60 to-white/30
                dark:from-white/[0.04] dark:to-white/[0.01]
                border border-black/[0.04] dark:border-white/[0.06]
                group overflow-hidden"
              whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-emerald-500/[0.06] to-transparent" />

              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-8 ${service.iconBg}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-foreground transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          </AnimatedChild>
        ))}
      </div>
    </AnimatedSection>
  );
}
