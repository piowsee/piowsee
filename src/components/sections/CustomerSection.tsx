"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AvatarCarousel } from "@/components/ui/AvatarCarousel";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "NovaTech Solutions",
    quote:
      "Piowsee transformed our legacy system into an AI-powered platform in just three months. The team's technical depth and communication were outstanding throughout the entire engagement.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Marcus Rivera",
    role: "Founder & CEO",
    company: "GreenLoop",
    quote:
      "Working with piowsee felt like having an in-house engineering team. They delivered a scalable data pipeline that handles 10x our previous volume without breaking a sweat.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Aisha Patel",
    role: "Head of Product",
    company: "FinBridge",
    quote:
      "The AI integration piowsee built into our customer service platform reduced response times by 60%. Their ability to translate complex requirements into elegant solutions is remarkable.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "James Okonkwo",
    role: "VP of Engineering",
    company: "DataSphere",
    quote:
      "Piowsee's approach to architecture is world-class. They didn't just build what we asked for — they challenged our assumptions and delivered something far better than we imagined.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Elena Vasquez",
    role: "Director of Operations",
    company: "CloudMerge",
    quote:
      "From initial consultation to deployment, piowsee exceeded every expectation. Our new web application loads 3x faster and our users love the redesigned experience.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Daniel Kim",
    role: "Co-Founder",
    company: "HealthPulse",
    quote:
      "We needed a HIPAA-compliant AI chatbot built in 8 weeks. Piowsee delivered in 6. Their combination of speed, quality, and security awareness is rare in this industry.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Fatima Al-Rashid",
    role: "Managing Director",
    company: "Nexus Digital",
    quote:
      "Piowsee helped us automate 70% of our manual workflows with custom software. The ROI was visible within the first month. We've already started planning our next project together.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Ryan Mitchell",
    role: "Product Manager",
    company: "ScaleUp Labs",
    quote:
      "The team at piowsee genuinely cares about your product's success. They proactively identified performance bottlenecks we hadn't even noticed and optimized everything seamlessly.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
];

function circularIndex(base: number, offset: number, length: number) {
  return ((base + offset) % length + length) % length;
}

export function CustomerSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setActiveIndex((i) => (i + 1) % testimonials.length);

  const active = testimonials[activeIndex];

  return (
    <section id="customers" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-[50px] font-bold tracking-tight mb-5">
            What Our <span className="text-brand">Customers</span> Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Trusted by innovative companies to deliver results that matter.
          </p>
        </ScrollReveal>

        {/* Avatar arc + arrows */}
        <ScrollReveal delay={120}>
          <AvatarCarousel
            testimonials={testimonials}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            prev={prev}
            next={next}
          />
        </ScrollReveal>

        {/* Testimonial content */}
        <ScrollReveal delay={220}>
          <div className="text-center max-w-3xl mx-auto mt-12 min-h-[200px]">
            <div
              key={activeIndex}
              className="animate-in fade-in slide-in-from-bottom-2 duration-500"
            >
              <span className="text-6xl text-brand/20 font-serif leading-none block mb-4">
                &ldquo;
              </span>

              <blockquote className="text-base md:text-xl text-zinc-700 leading-relaxed italic mb-6">
                {active.quote}
              </blockquote>

              <p className="text-lg font-bold text-zinc-900">{active.name}</p>
              <p className="text-sm text-zinc-500">
                {active.role}, {active.company}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
