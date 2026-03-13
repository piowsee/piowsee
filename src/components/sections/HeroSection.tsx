"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/75 z-10" /> {/* Dark overlay for text contrast */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-x-[-1]"
        >
          <source 
            src="video.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
        <div className="max-w-[800px] space-y-6 mt-20">
          <h1 className="text-5xl md:text-7xl lg:text-[84px] font-bold text-white leading-[1.05] tracking-tight">
            Automating Complexity.
            <br />
            Accelerating Growth.
          </h1>
          
          <p className="text-xl md:text-2xl text-white max-w-[600px] font-medium opacity-90">
            piowsee is a software house building intelligent digital products and solutions. We help businesses optimize operations and scale faster through modern technology.
          </p>
          
          <div className="pt-4 flex gap-4 flex-wrap">
            <Button
              className="cursor-pointer rounded-full bg-white text-black hover:text-black font-bold px-8 py-6 text-lg transition-transform"
            >
              Explore Our Platform
            </Button>
            <Button
              className="cursor-pointer rounded-full bg-transparent border-2 border-white text-white font-bold px-8 py-6 text-lg transition-all"
            >
              Consult With Our Engineers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
