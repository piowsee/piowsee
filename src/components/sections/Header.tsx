"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#" },
  { name: "Help Centre", href: "#" },
  { name: "GoCorp", href: "#" },
  { name: "Driver-Partner Resources", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Safety", href: "#" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
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
            <svg
              width="100"
              height="32"
              viewBox="0 0 100 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={isScrolled ? "text-black" : "text-white"}
            >
              {/* Simplified Gojek Wordmark with Green Icon */}
              <circle cx="16" cy="16" r="14" stroke="#00AA13" strokeWidth="4" />
              <circle cx="16" cy="16" r="6" fill="#00AA13" />
              <text
                x="38"
                y="22"
                fontFamily="inherit"
                fontWeight="bold"
                fontSize="22"
                fill="currentColor"
                letterSpacing="-0.5"
              >
                gojek
              </text>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] font-medium transition-colors hover:text-[#00AA13] ${
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
            className={`rounded-full px-6 py-5 font-bold border-2 transition-all ${
              isScrolled
                ? "border-[#00AA13] text-[#00AA13] bg-transparent hover:bg-[#00AA13] hover:text-white"
                : "border-white text-white bg-transparent hover:bg-white hover:text-black"
            }`}
            variant="outline"
          >
            DRIVE WITH US
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
