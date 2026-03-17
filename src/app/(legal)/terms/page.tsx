"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import Image from "next/image";

const sections = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "service", label: "Description of Service" },
  { id: "ip", label: "Intellectual Property" },
  { id: "obligations", label: "User Obligations" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "law", label: "Governing Law" },
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -70% 0px",
        threshold: 0.15,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="relative -mt-[88px] w-full h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
          alt="Terms of service hero"
          className="object-cover"
          fill
          priority
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-24 pt-[128px] text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-4 text-lg text-white/80">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      <section className="flex justify-center px-6 py-20">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[240px_1fr] gap-14">
          <aside className="hidden md:block sticky top-[120px] h-fit">
            <h3 className="text-sm font-semibold text-zinc-900 mb-5">
              Table of contents
            </h3>

            <ul className="space-y-3 text-sm text-zinc-500">
              {sections.map((section) => {
                const isActive = activeSection === section.id;

                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={cn(
                        "transition",
                        isActive
                          ? "text-brand"
                          : "text-zinc-500 hover:text-brand"
                      )}
                    >
                      {section.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className="prose prose-zinc lg:prose-lg max-w-none">
            <h2
              id="acceptance"
              className="scroll-mt-[100px] text-2xl font-bold text-zinc-900 mt-0 mb-4"
            >
              1. Acceptance of Terms
            </h2>

            <p className="text-zinc-600 mb-6 leading-relaxed">
              By accessing or using the piowsee website, consulting with our
              engineers, or utilizing our software platforms (including but not
              limited to pocv and Pesan AI), you agree to be bound by these
              Terms of Service. If you disagree with any part of these terms,
              you may not access our services.
            </p>

            <h2
              id="service"
              className="scroll-mt-[100px] text-2xl font-bold text-zinc-900 mt-8 mb-4"
            >
              2. Description of Service
            </h2>

            <p className="text-zinc-600 mb-6 leading-relaxed">
              piowsee is a software house providing custom digital product
              development, AI integrations, web applications, and proprietary
              internal platforms designed to automate complexity. Our specific
              deliverables and services are subject to separate master service
              agreements (MSAs) or statements of work (SOWs) established with
              clients.
            </p>

            <h2
              id="ip"
              className="scroll-mt-[100px] text-2xl font-bold text-zinc-900 mt-8 mb-4"
            >
              3. Intellectual Property
            </h2>

            <p className="text-zinc-600 mb-6 leading-relaxed">
              The piowsee website and its original content, features, and
              functionality are and will remain the exclusive property of
              piowsee and its licensors. Unless explicitly stated in a custom
              software development contract, piowsee retains the underlying
              intellectual property rights to our proprietary codebases, AI
              models, and internal tools.
            </p>

            <h2
              id="obligations"
              className="scroll-mt-[100px] text-2xl font-bold text-zinc-900 mt-8 mb-4"
            >
              4. User Obligations
            </h2>

            <p className="text-zinc-600 mb-6 leading-relaxed">
              When interacting with our website or platforms, you agree not to:
            </p>

            <ul className="list-disc pl-6 text-zinc-600 mb-6 space-y-2">
              <li>Use the services for any illegal or unauthorized purpose.</li>
              <li>
                Attempt to reverse engineer, decompile, or otherwise extract the
                source code of the software provided by piowsee.
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the
                services or the data contained therein.
              </li>
            </ul>

            <h2
              id="liability"
              className="scroll-mt-[100px] text-2xl font-bold text-zinc-900 mt-8 mb-4"
            >
              5. Limitation of Liability
            </h2>

            <p className="text-zinc-600 mb-6 leading-relaxed">
              In no event shall piowsee, nor its directors, employees, partners,
              agents, suppliers, or affiliates, be liable for any indirect,
              incidental, special, consequential, or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use the services.
            </p>

            <h2
              id="law"
              className="scroll-mt-[100px] text-2xl font-bold text-zinc-900 mt-8 mb-4"
            >
              6. Governing Law
            </h2>

            <p className="text-zinc-600 mb-6 leading-relaxed">
              These Terms shall be governed and construed in accordance with
              the laws of Indonesia, without regard to its conflict of law
              provisions. Our failure to enforce any right or provision of
              these Terms will not be considered a waiver of those rights.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}