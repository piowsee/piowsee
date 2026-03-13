"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Platform", href: "#platform" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo and Nav Links */}
        <div className="flex items-center gap-8 lg:gap-12 w-full">
          {/* Gojek Logo SVG */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/piowsee-logo.svg"
              alt="piowsee logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            {!isScrolled && (
              <span className="ml-3 text-white font-bold text-2xl tracking-tighter">
                piowsee
              </span>
            )}
            {isScrolled && (
              <span className="ml-3 text-black font-bold text-2xl tracking-tighter">
                piowsee
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] font-medium transition-colors hover:text-brand ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side CTA Desktop */}
        <div className="hidden lg:flex flex-shrink-0">
          <Button
            className={`cursor-pointer rounded-full px-6 py-5 font-bold border-2 transition-all ${
              isScrolled
                ? "border-brand text-brand bg-transparent hover:bg-brand hover:text-white"
                : "border-white text-black bg-white"
            }`}
            variant="outline"
          >
            Discuss Your Project
            </Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex">
          <button className={isScrolled ? "text-black" : "text-white"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
