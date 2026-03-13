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

const services = [
  {
    id: 1,
    title: "AI-Integrated Development",
    description: "We integrate AI into our software through modern APIs and tooling. Expect smarter workflows and automated decision-making built into every product.",
    iconColor: "bg-brand",
  },
  {
    id: 2,
    title: "Scalable & Future-Proof",
    description: "Built on modern frameworks, our products easily adapt and scale as your business expands and technology evolves.",
    iconColor: "bg-brand",
  },
  {
    id: 3,
    title: "End-to-End Delivery",
    description: "From system architecture and UI/UX design to deployment and maintenance, we handle the entire engineering lifecycle.",
    iconColor: "bg-brand",
  },
  {
    id: 4,
    title: "End-to-End Delivery",
    description: "From system architecture and UI/UX design to deployment and maintenance, we handle the entire engineering lifecycle.",
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
    <div className="flex justify-center gap-2 mt-8">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors ${
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
    <section id="services" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why piowsee
          </h2>
          <p className="text-xl text-gray-700">
            Engineering the Future of Digital Business.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-[100vw] sm:max-w-none">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service) => (
                <CarouselItem
                  key={service.id}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full bg-zinc-50 rounded-[32px] p-8 flex flex-col justify-between border border-zinc-100">
                    <div className="space-y-6">
                      {/* Simulated Icon/Logo Box */}
                      <div
                        className={`w-16 h-16 rounded-2xl ${service.iconColor} flex items-center justify-center text-white font-bold shadow-sm`}
                      >
                        {service.title.split(" ")[1]
                          ? service.title.split(" ")[1][0]
                          : "G"}
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-black tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed min-h-[50px]">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="#"
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
            
            {/* Carousel Navigation Buttons - Hidden on touch devices normally but kept for mouse users */}
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 bg-white hover:bg-zinc-100 hover:text-brand border-zinc-200" />
              <CarouselNext className="-right-12 bg-white hover:bg-zinc-100 hover:text-brand border-zinc-200" />
            </div>
            
            {/* Carousel Dots */}
            <CarouselDots />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
