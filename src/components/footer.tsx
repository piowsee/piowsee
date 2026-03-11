"use client";

import { useLanguage } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection, AnimatedChild } from "@/components/animated-section";

export function Footer() {
  const { t } = useLanguage();

  return (
    <AnimatedSection
      className="w-full py-16 px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <AnimatedChild>
        <div className="w-full h-px bg-gradient-to-be from-transparent via-border to-transparent mb-16" />
      </AnimatedChild>

      <AnimatedChild>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/logo-piowsee.webp"
                  alt="piowsee logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground">
                piowsee
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI-native software house building intelligent digital products.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              {t("footer.platform")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/#platforms" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  pocv
                </a>
              </li>
              <li>
                <a href="/#platforms" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  pesan.ai
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/#services" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  {t("enterprise.genai.title")}
                </a>
              </li>
              <li>
                <a href="/#services" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  {t("enterprise.web.title")}
                </a>
              </li>
              <li>
                <a href="/#services" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  {t("enterprise.data.title")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedChild>

      <AnimatedChild>
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
      </AnimatedChild>
    </AnimatedSection>
  );
}
