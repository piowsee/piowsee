"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const platforms = [
  {
    id: "pocv",
    label: "pocv",
    badge: "Coming Soon",
    features: [
      "ATS Score Analysis",
      "AI Resume Rewriting",
      "PDF Export",
      "Smart Suggestions",
    ],
    videoUrl: "/pocv.mp4",
    description:
      "Maximize candidate success with AI-driven ATS optimization and smart rewriting capabilities.",
  },
  {
    id: "pesanai",
    label: "Pesan AI",
    badge: "Coming Soon",
    features: [
      "WhatsApp Cloud API",
      "AI Auto-Reply",
      "CRM Scheduling",
      "Multi-Agent Support",
    ],
    videoUrl: "/comingSoon.mp4",
    description:
      "Automate customer support and CRM scheduling directly through the WhatsApp Cloud API.",
  },
];

export function PlatformSection() {
  const [activeTab, setActiveTab] = useState(0);
  const active = platforms[activeTab];

  return (
    <section id="platform" className="py-24 bg-zinc-50 overflow-hidden">
      {/* GLOBAL CONTAINER */}
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-[50px] font-bold text-black mb-3 tracking-tight leading-tight">
            <span className="text-brand">Our Platforms.</span> In Development.
          </h2>

          <p className="text-lg md:text-xl text-zinc-500 mb-12">
            Explore what we&apos;re{" "}
            <span className="text-brand">building next</span>.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="flex flex-wrap justify-center gap-3 mb-10"
          delay={100}
        >
          {platforms.map((platform, index) => (
            <Button
              key={platform.id}
              onClick={() => setActiveTab(index)}
              variant="outline"
              className={cn(
                "cursor-pointer relative rounded-full h-auto px-5 py-2.5 text-[13px] md:text-sm font-bold transition-all duration-300 border",
                index === activeTab
                  ? "border-zinc-900 text-black bg-white shadow-sm"
                  : "border-zinc-300 text-zinc-500 hover:border-zinc-400 hover:text-zinc-800 bg-transparent"
              )}
            >
              {platform.label}

              {platform.badge && (
                <span className="ml-2 px-1.5 py-0.5 bg-brand/20 text-brand text-[9px] font-bold rounded-full uppercase tracking-wider">
                  {platform.badge}
                </span>
              )}
            </Button>
          ))}
        </ScrollReveal>

        <ScrollReveal
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-12"
          delay={180}
        >
          {active.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-zinc-600 text-[13px] md:text-sm font-medium"
            >
              <Check className="w-3.5 h-3.5 text-brand" />
              {feature}
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal className="max-w-4xl mx-auto" delay={260}>
          <div className="rounded-2xl border border-zinc-300 bg-gray-900 shadow-2xl shadow-black/20 overflow-hidden p-1.5">
            <div className="flex items-center gap-2 px-3 py-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>

            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-gray-900 bg-gray-900 mt-1">
              <video
                key={active.id}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={active.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          className="text-center text-zinc-500 mt-8 max-w-xl mx-auto text-base leading-relaxed"
          delay={320}
        >
          <p>{active.description}</p>
        </ScrollReveal>

      </div>
    </section>
  );
}
