import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Mail, Phone, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const platformLinks = [
  { label: "pocv", href: "/#platform" },
  { label: "pesan.ai", href: "/#platform" },
];

const serviceLinks = [
  { label: "Generative AI Integration", href: "/#services" },
  { label: "Modern Web Applications", href: "/#services" },
  { label: "Data Processing Systems", href: "/#services" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-white/5 bg-[#050505] text-white"
    >
      {/* GLOBAL CONTAINER */}
      <div className="mx-auto w-full max-w-350 px-6 md:px-10 lg:px-16 py-20">
        <ScrollReveal>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1.1fr_0.8fr_0.95fr] lg:gap-8 xl:gap-12">
            <div className="max-w-sm space-y-5">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <Image
                  src="/logo-piowsee.webp"
                  alt="piowsee logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="text-2xl font-bold tracking-tight">
                  piowsee
                </span>
              </Link>

              <p className="text-[15px] leading-7 text-zinc-400">
                AI-native software house building intelligent digital products.
              </p>
            </div>

            <FooterColumn title="Platform" links={platformLinks} />
            <FooterColumn title="Services" links={serviceLinks} />
            <FooterColumn title="Legal" links={legalLinks} />
            <LanguageColumn />
          </div>
        </ScrollReveal>

        <div className="mt-16 border-t border-white/5 pt-6 flex items-center justify-between gap-4 text-[13px] text-zinc-500">
          <p>&copy; {year} piowsee. Engineered in Indonesia.</p>
          <div className="flex flex-row items-center gap-4 md:gap-6">
            <a
              href="mailto:poc.helpteam@gmail.com"
              className="flex items-center gap-2 hover:text-white transition text-right md:text-left"
              title="Email"
            >
              <Mail className="w-5 h-5 text-zinc-500" />
              <span className="hidden xs:inline">poc.helpteam@gmail.com</span>
            </a>
            <a
              href="https://wa.me/6285195563454"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition text-right md:text-left"
              title="WhatsApp"
            >
              <Phone className="w-5 h-5 text-zinc-500" />
              <span className="hidden xs:inline">+62 851 9556 3454</span>
            </a>
            <a
              href="https://maps.google.com/?q=Sumedang, West Java"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition text-right md:text-left"
              title="Location"
            >
              <MapPin className="w-5 h-5 text-zinc-500" />
              <span className="hidden xs:inline">Sumedang, West Java</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="space-y-5">
      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        {title}
      </h4>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="cursor-pointer text-base text-zinc-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LanguageColumn() {
  return (
    <div className="space-y-5">
      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Language
      </h4>

      {/* TODO: use shadcn/ui select */}
      <div className="relative w-full max-w-47.5">
        <select
          aria-label="Select language"
          defaultValue="en"
          className="h-11 w-full cursor-pointer appearance-none rounded-full border border-white/10 bg-zinc-900 px-4 pr-11 text-sm font-medium text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] outline-none transition"
        >
          <option value="en" className="bg-zinc-900 text-zinc-100">
            English
          </option>
          <option value="id" className="bg-zinc-900 text-zinc-100">
            Indonesia
          </option>
        </select>

        <div className="pointer-events-none absolute inset-y-1 right-2 flex w-9 items-center justify-center rounded-full">
          <ChevronDown className="h-4 w-4 text-zinc-400" />
        </div>
      </div>
    </div>
  );
}
