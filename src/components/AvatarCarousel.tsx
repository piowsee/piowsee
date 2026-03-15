"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
};

type Props = {
  testimonials: Testimonial[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  prev: () => void;
  next: () => void;
};

export function AvatarCarousel({
  testimonials,
  activeIndex,
  setActiveIndex,
  prev,
  next,
}: Props) {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-12 md:px-20 mt-12 mb-4">
      {/* Left arrow */}
      <Button
        onClick={prev}
        variant="outline"
        size="icon"
        className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 size-10 md:size-12 rounded-full bg-white border-zinc-200 shadow-sm hover:bg-zinc-50 hover:text-brand cursor-pointer shrink-0"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </Button>

      {/* Avatars Container */}
      <div className="relative w-full h-36 md:h-40 flex items-center justify-center overflow-hidden">
        {testimonials.map((t, tIdx) => {
          let diff = tIdx - activeIndex;
          const length = testimonials.length;
          if (diff > length / 2) diff -= length;
          if (diff < -length / 2) diff += length;

          const abs = Math.abs(diff);
          const isActive = diff === 0;

          const opacity = abs > 2 ? 0 : Math.max(1 - abs * 0.35, 0.35);
          const scale = Math.max(1 - abs * 0.25, 0.5);
          const translateY = abs * abs * 6;
          const zIndex = 50 - abs;

          return (
            <Button
              key={tIdx}
              onClick={() => setActiveIndex(tIdx)}
              variant="ghost"
              className={cn(
                "absolute rounded-full overflow-hidden transition-all duration-500 ease-out cursor-pointer shrink-0 p-0 w-24 h-24 md:w-28 md:h-28",
                isActive
                  ? "ring-4 ring-brand ring-offset-4 ring-offset-zinc-50"
                  : "grayscale",
                abs > 2 && "pointer-events-none"
              )}
              style={{
                transform: `translateX(calc(${diff} * 115%)) translateY(-${translateY}px) scale(${scale})`,
                opacity,
                zIndex,
              }}
            >
              <Image
                src={t.avatar}
                alt={t.name}
                width={112}
                height={112}
                className="w-full h-full object-cover"
                priority={isActive}
              />
            </Button>
          );
        })}
      </div>

      {/* Right arrow */}
      <Button
        onClick={next}
        variant="outline"
        size="icon"
        className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 size-10 md:size-12 rounded-full bg-white border-zinc-200 shadow-sm hover:bg-zinc-50 hover:text-brand cursor-pointer shrink-0"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </Button>
    </div>
  );
}