import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const platformLinks = [
  { label: "pocv", href: "#" },
  { label: "pesan.ai", href: "#" },
];

const serviceLinks = [
  { label: "Generative AI Integration", href: "#" },
  { label: "Modern Web Applications", href: "#" },
  { label: "Data Processing Systems", href: "#" },
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
      <div className="container mx-auto px-5 py-20 md:px-8 lg:px-10 xl:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1.1fr_0.8fr_0.95fr] lg:gap-10 xl:gap-14">
          <div className="max-w-sm space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/piowsee-logo.svg"
                alt="piowsee logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-3xl font-bold tracking-tight">piowsee</span>
            </Link>

            <p className="text-base leading-8 text-zinc-400">
              AI-native software house building intelligent digital products.
            </p>
          </div>

          <FooterColumn title="Platform" links={platformLinks} />
          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
          <LanguageColumn />
        </div>

        <div className="mt-16 border-t border-white/5 pt-6 text-sm text-zinc-500">
          <p>&copy; {year} piowsee. Engineered in Indonesia.</p>
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
              className="text-base text-zinc-300 transition hover:text-white"
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

      <div className="relative w-full max-w-[190px]">
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
