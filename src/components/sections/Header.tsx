"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "Platform", href: "/#platform" },
  { name: "Process", href: "/#process" },
  { name: "Customers", href: "/#customers" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMobileNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const hash = href.split("#")[1];
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-5"
      }`}
    >
      {/* Header container */}
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image
            src="/piowsee-logo.svg"
            alt="piowsee logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />

          <span
            className={`ml-2 font-bold text-xl tracking-tighter ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            piowsee
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`cursor-pointer text-[15px] font-medium transition-colors ${
                isScrolled
                  ? "text-gray-900 hover:text-brand"
                  : "text-white hover:text-white/85"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`cursor-pointer rounded-full px-5 py-4 font-bold border-2 text-[15px] transition-all ${
              isScrolled
                ? "border-brand text-brand bg-transparent hover:text-brand"
                : "border-white text-black bg-white"
            }`}
            variant="outline"
          >
            Discuss Your Project
          </Button>
        </div>

        {/* Hamburger Button */}
        <button
          ref={buttonRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden cursor-pointer ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="w-full mt-4 bg-white border-t border-gray-200">
          <div className="px-6 py-8 flex flex-col gap-7 items-center text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleMobileNavClick(e, link.href)}
                className="text-gray-900 text-[17px] font-medium"
              >
                {link.name}
              </Link>
            ))}

            <Button
              onClick={(e) => handleMobileNavClick(e, "/#contact")}
              className="rounded-full bg-brand text-white font-bold w-full max-w-[260px] cursor-pointer"
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}