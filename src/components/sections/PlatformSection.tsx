"use client";

import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "pocv — AI Resume Builder",
    description: "Maximize candidate success with AI-driven ATS optimization and smart rewriting capabilities.",
    badge: "Coming Soon",
  },
  {
    id: 2,
    title: "Pesan AI — WhatsApp AI Agent",
    description: "Automate customer support and CRM scheduling directly through the WhatsApp Cloud API.",
    badge: "Coming Soon",
  },
];

export function PlatformSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="platform" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-[56px] font-bold text-center mb-16 tracking-tight">
          Our Platforms. In Development.
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-12 md:gap-24">
          
          {/* Left: Interactive/Numbered list */}
          <div className="w-full md:w-1/2 space-y-8">
            {steps.map((step) => (
              <div 
                key={step.id} 
                onClick={() => setActiveStep(step.id)}
                className={`flex gap-6 items-start transition-opacity duration-300 cursor-pointer ${step.id === activeStep ? "opacity-100" : "opacity-40 hover:opacity-100"}`}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl transition-colors duration-300 ${step.id === activeStep ? 'bg-brand text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {step.id}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    {step.badge && (
                      <span className="px-3 py-1 bg-brand/10 text-brand text-[11px] font-bold rounded-full uppercase tracking-wider relative top-0.5">
                        {step.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Phone mockup */}
          <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="relative w-[300px] h-[600px] bg-zinc-50 rounded-[40px] shadow-2xl border-[8px] border-zinc-900 overflow-hidden shrink-0 transition-all duration-300">
              <div className="absolute top-0 inset-x-0 h-6 bg-zinc-900 rounded-b-3xl w-1/2 mx-auto z-20" /> {/* Fake Notch */}
              
              <div className="w-full h-full relative z-10 flex flex-col pt-12 items-center bg-zinc-100">
                 {/* Conditionally render content inside the phone */}
                 {activeStep === 1 ? (
                   // pocv - AI Resume Builder Mockup
                   <div className="w-full px-4 space-y-4 animate-in fade-in duration-500">
                     <div className="w-full bg-white p-4 rounded-xl shadow-sm border border-zinc-100 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full border-4 border-brand flex items-center justify-center bg-emerald-50 text-brand font-bold text-lg shadow-inner">
                          92
                        </div>
                        <div>
                          <p className="font-bold text-zinc-800 text-sm">ATS Match Score</p>
                          <p className="text-xs text-brand font-semibold">Excellent Candidate</p>
                        </div>
                     </div>
                     <div className="w-full bg-white p-4 rounded-xl shadow-sm border border-zinc-100 space-y-3">
                        <div className="h-4 w-1/2 bg-zinc-200 rounded-md" />
                        <div className="h-3 w-3/4 bg-zinc-100 rounded-md" />
                        <div className="flex gap-2 pt-2">
                           <div className="px-2 py-1 bg-brand/10 text-brand text-[10px] rounded-full font-bold">React</div>
                           <div className="px-2 py-1 bg-brand/10 text-brand text-[10px] rounded-full font-bold">AI Engineering</div>
                        </div>
                     </div>
                     <div className="w-full bg-white p-4 rounded-xl shadow-sm border border-zinc-100 space-y-3">
                        <div className="h-4 w-1/3 bg-zinc-200 rounded-md" />
                        <div className="space-y-2">
                          <div className="h-2 w-full bg-zinc-100 rounded-md" />
                          <div className="h-2 w-full bg-zinc-100 rounded-md" />
                          <div className="h-2 w-4/5 bg-zinc-100 rounded-md" />
                        </div>
                     </div>
                     <div className="w-full mt-auto pt-6">
                        <div className="h-12 w-full bg-brand rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">Export PDF</div>
                     </div>
                   </div>
                 ) : (
                   // Pesan AI - WhatsApp AI Agent Mockup
                   <div className="w-full h-full flex flex-col bg-[#efeae2] animate-in fade-in duration-500">
                      {/* WhatsApp Header */}
                      <div className="bg-[#005c4b] w-full px-4 py-3 pb-4 flex items-center gap-3 shadow-md z-10">
                        <div className="w-8 h-8 rounded-full bg-zinc-300 flex items-center justify-center overflow-hidden">
                          <div className="w-full h-full bg-white text-brand text-xs flex items-center justify-center font-bold">AI</div>
                        </div>
                        <div>
                           <p className="text-white font-bold text-sm">Pesan AI Agent</p>
                           <p className="text-white/80 text-[10px]">online</p>
                        </div>
                      </div>
                      
                      {/* Chat Body */}
                      <div className="flex-1 p-3 space-y-3 overflow-hidden relative">
                         <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'}}/>
                         <div className="flex justify-start relative z-10">
                            <div className="bg-white px-3 py-2 rounded-lg rounded-tl-none max-w-[80%] shadow-sm border border-zinc-100/50">
                               <p className="text-sm text-zinc-800">Hi! I am the Pesan AI assistant. How can I help you today?</p>
                               <span className="text-[9px] text-zinc-400 block text-right mt-1">10:00 AM</span>
                            </div>
                         </div>
                         <div className="flex justify-end relative z-10">
                            <div className="bg-[#dcf8c6] px-3 py-2 rounded-lg rounded-tr-none max-w-[80%] shadow-sm">
                               <p className="text-sm text-zinc-800">I need to schedule a consultation regarding a new web app.</p>
                               <span className="text-[9px] text-zinc-500 block text-right mt-1">10:05 AM ✓✓</span>
                            </div>
                         </div>
                         <div className="flex justify-start relative z-10">
                            <div className="bg-white px-3 py-2 rounded-lg rounded-tl-none max-w-[80%] shadow-sm border border-zinc-100/50">
                               <p className="text-sm text-zinc-800">Absolutely. I have available slots tomorrow at 10 AM or 2 PM. Which works best for you?</p>
                               <span className="text-[9px] text-zinc-400 block text-right mt-1">10:05 AM</span>
                            </div>
                         </div>
                      </div>

                      {/* Input Bar */}
                      <div className="bg-[#f0f2f5] p-2 flex items-center gap-2 relative z-10">
                         <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-zinc-500 rounded-full">😊</div>
                         <div className="flex-1 bg-white h-9 rounded-full px-4 flex items-center">
                            <p className="text-zinc-400 text-sm">Type a message...</p>
                         </div>
                         <div className="w-9 h-9 flex-shrink-0 bg-brand rounded-full flex items-center justify-center text-white shadow-sm">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                         </div>
                      </div>
                   </div>
                 )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
