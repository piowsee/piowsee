"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

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
      <button
        onClick={prev}
        className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center hover:bg-zinc-50 hover:text-brand transition-colors cursor-pointer shrink-0"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

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
            <button
              key={tIdx}
              onClick={() => setActiveIndex(tIdx)}
              className={`absolute rounded-full overflow-hidden transition-all duration-500 ease-out cursor-pointer shrink-0 w-24 h-24 md:w-28 md:h-28 ${
                isActive
                  ? "ring-4 ring-brand ring-offset-4 ring-offset-zinc-50"
                  : "grayscale"
              } ${abs > 2 ? "pointer-events-none" : ""}`}
              style={{
                transform: `translateX(calc(${diff} * 115%)) translateY(-${translateY}px) scale(${scale})`,
                opacity,
                zIndex,
              }}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-full h-full object-cover"
                loading={isActive ? "eager" : "lazy"}
              />
            </button>
          );
        })}
      </div>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center hover:bg-zinc-50 hover:text-brand transition-colors cursor-pointer shrink-0"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
}