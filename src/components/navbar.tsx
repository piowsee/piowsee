"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "/#home" },
    { name: t("nav.platform"), href: "/#platforms" },
    { name: t("nav.services"), href: "/#services" },
    { name: t("nav.contact"), href: "/#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
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
          </Link>

          {/* Center nav — absolute so it stays in true center */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground rounded-lg hover:bg-foreground/5 transition-colors"
            >
              <Globe className="h-3.5 w-3.5" />
              {language === "en" ? "EN" : "ID"}
            </button>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}

            {/* CTA */}
            <Button
              asChild
              size="sm"
              className="bg-emerald-600 text-white hover:bg-emerald-700 rounded-full ml-2 group"
            >
              <a href="/#contact">
                {t("nav.cta")}
                <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-foreground/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-t border-border/50 backdrop-blur-xl bg-background/95"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground rounded-xl hover:bg-foreground/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 mt-4 border-t border-border/50 flex flex-col gap-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-xl hover:bg-foreground/5 transition-colors w-full text-left"
                >
                  <Globe className="h-4 w-4" />
                  {language === "en" ? "Switch to Indonesian" : "Switch to English"}
                </button>
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-xl hover:bg-foreground/5 transition-colors w-full text-left"
                  >
                    {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
