import * as React from "react";

const steps = [
  {
    id: 1,
    title: "Select your destination",
    description: "Enter your drop-off and pick-up locations accurately.",
  },
  {
    id: 2,
    title: "Select a vehicle",
    description: "Choose from our range of vehicles the one that best suits your needs.",
  },
  {
    id: 3,
    title: "Get matched with a driver",
    description: "Relax, your ride is on its way. Track your driver in real-time.",
  },
  {
    id: 4,
    title: "Pay, and ride on",
    description: "Pay seamlessly with cash or card, and rate your overall ride experience.",
  },
];

export function HowToUseSection() {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-[56px] font-bold text-center mb-16 tracking-tight">
          How to use Gojek
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-12 md:gap-24">
          
          {/* Left: Interactive/Numbered list */}
          <div className="w-full md:w-1/2 space-y-8">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex gap-6 items-start transition-opacity duration-300 ${index === 0 ? "opacity-100" : "opacity-40 hover:opacity-100 cursor-pointer"}`}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${index === 0 ? 'bg-[#00AA13] text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {step.id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Phone mockup */}
          <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="relative w-[300px] h-[600px] bg-white rounded-[40px] shadow-2xl border-[8px] border-zinc-900 overflow-hidden shrink-0">
              <div className="absolute top-0 inset-x-0 h-6 bg-zinc-900 rounded-b-3xl w-1/2 mx-auto" /> {/* Fake Notch */}
              <div className="w-full h-full bg-zinc-100 flex flex-col pt-12 items-center">
                 {/* Fake Map App UI */}
                 <div className="w-[90%] h-48 bg-zinc-200 rounded-xl mb-4 relative overflow-hidden">
                   <div className="absolute top-4 left-4 w-8 h-8 bg-black rounded-full shadow-sm" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#00AA13] ring-4 ring-[#00AA13]/30" />
                 </div>
                 <div className="w-[90%] space-y-4">
                    <div className="h-12 bg-white rounded-lg px-4 flex items-center shadow-sm text-sm text-gray-500 border border-zinc-100">To: Singapore Changi Airport</div>
                    <div className="h-12 bg-white rounded-lg px-4 flex items-center shadow-sm text-sm text-gray-500 border border-zinc-100">From: Current Location</div>
                    <div className="h-16 bg-[#00AA13] rounded-full mt-8 flex items-center justify-center text-white font-bold text-lg shadow-md cursor-pointer">Order GoCar</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
