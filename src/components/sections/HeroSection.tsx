import * as React from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image / Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay for text contrast */}
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
          alt="Gojek Driver"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
        <div className="max-w-[800px] space-y-6 mt-20">
          <h1 className="text-5xl md:text-7xl lg:text-[84px] font-bold text-white leading-[1.05] tracking-tight">
            More ways to go
            <br />
            with Gojek
          </h1>
          
          <p className="text-xl md:text-2xl text-white max-w-[600px] font-medium opacity-90">
            Use code <strong className="font-bold">EXTRA</strong> for up to $12 off your next ride.
          </p>
          
          <div className="pt-4">
            <Button
              className="rounded-full bg-white text-black hover:bg-gray-100 hover:text-black font-bold px-8 py-6 text-lg transition-transform hover:scale-105"
            >
              Redeem now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
