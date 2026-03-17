"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const faqs = [
  {
    question: "What services does piowsee offer?",
    answer:
      "piowsee provides end-to-end software development services including AI-integrated applications, modern web and mobile platforms, custom data systems, and ongoing technical consultations tailored to your business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A simple web application typically takes 4–8 weeks, while enterprise-grade systems with AI integration can range from 3–6 months. We provide a detailed timeline during the initial consultation.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Yes. All our projects include a post-launch support period. We also offer flexible maintenance plans to ensure your system stays up-to-date, secure, and running smoothly as your business grows.",
  },
  {
    question: "Can you integrate AI into an existing system?",
    answer:
      "Absolutely. We specialize in retrofitting AI capabilities into existing platforms — from intelligent chatbots and recommendation engines to automated data pipelines and decision-support tools.",
  },
  {
    question: "How do I get started with piowsee?",
    answer:
      "Simply reach out via our contact form or WhatsApp. We'll schedule a free initial consultation to understand your goals, then provide a tailored proposal with timeline and cost estimates — no commitment required.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with modern stacks including Next.js, React, Node.js, Python, and cloud platforms like AWS and Vercel. For AI, we leverage APIs from OpenAI, Anthropic, and custom fine-tuned models depending on your use case.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            Got <span className="text-brand">Questions?</span>
          </h2>
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto">
            Here are answers to the most common things people ask about working
            with piowsee.
          </p>
        </ScrollReveal>

        {/* items-start: right column is fully independent from left height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">

          {/* Left — Accordion */}
          <ScrollReveal className="flex flex-col" delay={100}>
            <div>
              {faqs.map((faq, idx) => (
                <div key={idx}>
                  {/* Question button */}
                  <Button
                    variant="ghost"
                    className="w-full h-auto p-0 py-5 justify-between text-left group cursor-pointer whitespace-normal"
                    onClick={() =>
                      setOpenIndex(openIndex === idx ? null : idx)
                    }
                  >
                    <span
                      className={cn(
                        "text-[15px] md:text-[17px] font-semibold leading-snug pr-4 min-w-0 flex-1 transition-colors duration-150",
                        openIndex === idx
                          ? "text-brand"
                          : "text-zinc-800 group-hover:text-brand"
                      )}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 flex-shrink-0 transition-all duration-300",
                        openIndex === idx
                          ? "rotate-180 text-brand"
                          : "text-zinc-400 group-hover:text-brand"
                      )}
                    />
                  </Button>

                  {/* Answer — grid-rows animation, no fixed max-height needed */}
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-in-out",
                      openIndex === idx ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm text-zinc-500 leading-relaxed pb-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                  {/* Divider — always below the answer, same position always */}
                  {idx < faqs.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-zinc-200 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — Truly fixed size, never resizes */}
          <ScrollReveal delay={220}>
            <div className="rounded-xl overflow-hidden h-[450px] bg-zinc-100 relative shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaboration"
                className="object-cover"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
