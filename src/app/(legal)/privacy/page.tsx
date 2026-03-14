"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "data-collection", label: "The Data We Collect" },
  { id: "data-use", label: "How We Use Your Data" },
  { id: "security", label: "Data Security" },
  { id: "contact", label: "Contact Details" },
];

export default function PrivacyPolicy() {
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
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
          alt="Privacy policy hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-24 pt-[128px] text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Privacy Policy
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
                      className={`transition ${
                        isActive
                          ? "text-brand"
                          : "text-zinc-500 hover:text-brand"
                      }`}
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
              id="introduction"
              className="scroll-mt-[100px] text-2xl font-bold text-zinc-900 mt-0 mb-4"
            >
              1. Introduction
            </h2>

            <p className="text-zinc-600 mb-6 leading-relaxed">
              Welcome to piowsee ("we," "our," or "us"). We are an Indonesian
              software house specializing in intelligent digital products,
              including but not limited to AI integrations, custom web
              applications, and data systems like pocv and Pesan AI. We respect
              your privacy and are committed to protecting your personal data.
              This privacy policy will inform you as to how we look after your
              personal data when you visit our website (regardless of where you
              visit it from) or use our services.
            </p>

            <h2
              id="data-collection"
              className="scroll-mt-[100px] text-2xl font-bold text-zinc-900 mt-8 mb-4"
            >
              2. The Data We Collect
            </h2>

            <p className="text-zinc-600 mb-6 leading-relaxed">
              We may collect, use, store, and transfer different kinds of
              personal data about you. When you consult with our engineers or
              use our platforms, we may collect:
            </p>

            <ul className="list-disc pl-6 text-zinc-600 mb-6 space-y-2">
              <li>
                <strong>Identity and Contact Data:</strong> Includes your first
                name, last name, username, email address, telephone numbers,
                and company name.
              </li>
              <li>
                <strong>Technical Data:</strong> Includes internet protocol
                (IP) address, your login data, browser type and version, time
                zone setting and location, browser plug-in types and versions,
                operating system, and platform.
              </li>
              <li>
                <strong>Usage Data:</strong> Includes information about how you
                use our website, products, and services (e.g., interactions
                with our AI agents like Pesan AI).
              </li>
              <li>
                <strong>Candidate Data (via pocv):</strong> If utilizing our AI
                Resume Builder, we temporarily process resume data for the
                explicit purpose of ATS optimization and rewriting, which is not
                used for generalized AI training.
              </li>
            </ul>

            <h2
              id="data-use"
              className="scroll-mt-[100px] text-2xl font-bold text-zinc-900 mt-8 mb-4"
            >
              3. How We Use Your Data
            </h2>

            <p className="text-zinc-600 mb-6 leading-relaxed">
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>

            <ul className="list-disc pl-6 text-zinc-600 mb-6 space-y-2">
              <li>
                To provide and deliver our software development services and
                digital products.
              </li>
              <li>
                To manage our relationship with you, including consulting and
                platform support.
              </li>
              <li>
                To improve our platforms (pocv, Pesan AI) and ensure our AI
                integrations function efficiently and securely.
              </li>
              <li>
                To comply with a legal or regulatory obligation in Indonesia.
              </li>
            </ul>

            <h2
              id="security"
              className="scroll-mt-[100px] text-2xl font-bold text-zinc-900 mt-8 mb-4"
            >
              4. Data Security
            </h2>

            <p className="text-zinc-600 mb-6 leading-relaxed">
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used, or accessed in
              an unauthorized way, altered, or disclosed. We limit access to
              your personal data to those employees, agents, contractors, and
              other third parties who have a business need to know.
            </p>

            <h2
              id="contact"
              className="scroll-mt-[100px] text-2xl font-bold text-zinc-900 mt-8 mb-4"
            >
              5. Contact Details
            </h2>

            <p className="text-zinc-600 mb-6 leading-relaxed">
              If you have any questions about this privacy policy or our
              privacy practices, please contact us. piowsee is engineered and
              headquartered in Indonesia.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}