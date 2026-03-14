"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-x-[-1]"
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16 h-full flex flex-col justify-center">
        <ScrollReveal className="max-w-[800px] space-y-6 mt-16">
          <h1 className="text-4xl md:text-6xl lg:text-[76px] font-bold text-white leading-[1.05] tracking-tight">
            Automating Complexity.
            <br />
            Accelerating Growth.
          </h1>

          <p className="text-lg md:text-xl text-white max-w-[600px] font-medium opacity-90">
            piowsee is a software house building intelligent digital products
            {" "}and solutions. We help businesses optimize operations and scale
            faster through modern technology.
          </p>

          <div className="pt-4 flex gap-4 flex-wrap">
            <Button
              onClick={() =>
                document
                  .getElementById("platform")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer rounded-full bg-brand text-white font-bold px-6 py-7 text-base transition-transform"
            >
              Explore Our Platform
            </Button>

            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer rounded-full bg-transparent border-2 border-white text-white font-bold px-6 py-7 text-base transition-all hover:bg-black/10 flex items-center gap-2 group"
            >
              Consult With Our Engineers
              <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
