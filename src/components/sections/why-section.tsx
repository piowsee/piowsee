"use client";

import { useLanguage } from "@/lib/i18n";
import { AnimatedSection, AnimatedChild } from "@/components/animated-section";
import { motion } from "framer-motion";
import { Brain, Layers, Workflow } from "lucide-react";

export function WhySection() {
  const { t } = useLanguage();

  const items = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: t("why.ai.title"),
      body: t("why.ai.body"),
      iconBg: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: t("why.scale.title"),
      body: t("why.scale.body"),
      iconBg: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: t("why.e2e.title"),
      body: t("why.e2e.body"),
      iconBg: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <AnimatedSection
      id="why"
      className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
      <AnimatedChild className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-4">
          Why Choose Us
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Why piowsee?
        </h2>
      </AnimatedChild>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((item, index) => (
          <AnimatedChild key={index}>
            <motion.div
              className={`relative rounded-2xl p-8 md:p-10 h-full cursor-default
                bg-gradient-to-br from-white/60 to-white/30
                dark:from-white/[0.04] dark:to-white/[0.01]
                border border-black/[0.04] dark:border-white/[0.06]
                shadow-sm dark:shadow-none
                group overflow-hidden`}
              whileHover={{
                y: -4,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-emerald-500/[0.06] to-transparent" />

              {/* Decorative number */}
              <span className="absolute top-6 right-8 text-7xl font-black text-foreground/[0.03] dark:text-white/[0.03] select-none group-hover:text-emerald-500/10 transition-colors duration-500">
                0{index + 1}
              </span>

              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${item.iconBg} transition-transform duration-300 group-hover:scale-110`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-foreground transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-md">
                  {item.body}
                </p>
              </div>
            </motion.div>
          </AnimatedChild>
        ))}
      </div>
    </AnimatedSection>
  );
}
