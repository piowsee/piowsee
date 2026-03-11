"use client";

import { useLanguage } from "@/lib/i18n";
import { AnimatedSection, AnimatedChild } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRef, useState, useCallback } from "react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ProductCard({
  children,
  accentColor,
}: {
  children: React.ReactNode;
  accentColor: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  return (
    <div
      ref={cardRef}
      className="group relative h-full rounded-3xl overflow-hidden
        bg-gradient-to-br from-white/80 to-white/40
        dark:from-white/[0.06] dark:to-white/[0.02]
        border border-black/[0.04] dark:border-white/[0.06]
        p-8 md:p-10
        hover:shadow-xl transition-all duration-500 cursor-default"
      style={{
        boxShadow: isHovered
          ? `0 20px 60px -15px ${accentColor}15, 0 0 0 1px ${accentColor}10`
          : undefined,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mouse-following light */}
      {isHovered && (
        <div
          className="absolute pointer-events-none z-0 transition-opacity duration-300"
          style={{
            left: mousePos.x - 150,
            top: mousePos.y - 150,
            width: 300,
            height: 300,
            background: `radial-gradient(circle, ${accentColor}18 0%, transparent 70%)`,
            borderRadius: "50%",
          }}
        />
      )}

      {/* Glow border on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${accentColor}20, transparent 50%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
        {children}
      </div>
    </div>
  );
}

export function PlatformsSection() {
  const { t } = useLanguage();

  return (
    <AnimatedSection
      id="platforms"
      className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
      <AnimatedChild className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-4">
          Our Products
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          {t("platform.heading")}
        </h2>
      </AnimatedChild>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product 1: pocv */}
        <AnimatedChild>
          <ProductCard accentColor="#34d399">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center">
                  <Image
                    src="/pocv.png"
                    alt="pocv logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {t("platform.pocv.title")}
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t("platform.pocv.body")}
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20">
                  AI Smart Rewrite
                </Badge>
                <Badge className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20">
                  ATS Optimized
                </Badge>
                <Badge className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20">
                  PDF Export
                </Badge>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground/5 text-xs font-medium uppercase tracking-wider">
                {t("platform.comingSoon")}
              </span>
            </div>
          </ProductCard>
        </AnimatedChild>

        {/* Product 2: pesan.ai */}
        <AnimatedChild>
          <ProductCard accentColor="#34d399">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center">
                  <WhatsAppIcon className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {t("platform.pesan.title")}
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t("platform.pesan.body")}
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20">
                  24/7 Automation
                </Badge>
                <Badge className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20">
                  CRM Sync
                </Badge>
                <Badge className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20">
                  Multilingual
                </Badge>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground/5 text-xs font-medium uppercase tracking-wider">
                {t("platform.comingSoon")}
              </span>
            </div>
          </ProductCard>
        </AnimatedChild>
      </div>
    </AnimatedSection>
  );
}
