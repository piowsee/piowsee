"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const services = [
  {
    id: 1,
    title: "AI-Integrated Development",
    description:
      "We integrate AI into our software through modern APIs and tooling. Expect smarter workflows and automated decision-making built into every product.",
    iconColor: "bg-brand",
  },
  {
    id: 2,
    title: "Scalable & Future-Proof",
    description:
      "Built on modern frameworks, our products easily adapt and scale as your business expands and technology evolves.",
    iconColor: "bg-brand",
  },
  {
    id: 3,
    title: "End-to-End Delivery",
    description:
      "From system architecture and UI/UX design to deployment and maintenance, we handle the entire engineering lifecycle.",
    iconColor: "bg-brand",
  },
  {
    id: 4,
    title: "End-to-End Delivery",
    description:
      "From system architecture and UI/UX design to deployment and maintenance, we handle the entire engineering lifecycle.",
    iconColor: "bg-brand",
  },
];

function CarouselDots() {
  const { api } = useCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!api) return;

    setScrollSnaps(api.scrollSnapList());
    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });

    api.on("reInit", () => {
      setScrollSnaps(api.scrollSnapList());
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex justify-center gap-2 mt-10">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          className={`cursor-pointer w-2.5 h-2.5 rounded-full transition-colors ${
            index === selectedIndex ? "bg-brand" : "bg-zinc-300"
          }`}
          onClick={() => api?.scrollTo(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white overflow-hidden">
      {/* GLOBAL CONTAINER (align dengan header) */}
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">
        <ScrollReveal className="mb-14 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Why <span className="text-brand">piowsee?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Engineering the future of{" "}
            <span className="text-brand">digital business</span>.
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal className="relative" delay={120}>
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="mb-1">
              {services.map((service) => (
                <CarouselItem
                  key={service.id}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full bg-zinc-50 rounded-[28px] p-6 lg:p-8 flex flex-col justify-between border border-zinc-100 transition hover:shadow-md">
                    
                    {/* Top Content */}
                    <div className="space-y-5">
                      
                      {/* Icon Box */}
                      <div
                        className={`w-14 h-14 rounded-xl ${service.iconColor} flex items-center justify-center text-white font-bold shadow-sm text-lg`}
                      >
                        {service.title.split(" ")[1]
                          ? service.title.split(" ")[1][0]
                          : "G"}
                      </div>

                      {/* Text */}
                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed min-h-[60px]">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Link */}
                    <div className="mt-8">
                      <Link
                        href="/#contact"
                        className="inline-flex items-center text-brand font-bold hover:underline"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 bg-white hover:bg-zinc-100 hover:text-brand border-zinc-200" />
              <CarouselNext className="-right-12 bg-white hover:bg-zinc-100 hover:text-brand border-zinc-200" />
            </div>

            {/* Dots */}
            <CarouselDots />
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
}
