"use client";

import { useState } from "react";
import { Check, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", whatsapp: "", description: "" });
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus("idle");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main CTA Block */}
        <div className="bg-zinc-50 rounded-3xl p-6 md:p-12 text-center relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-zinc-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
            <div className="absolute top-1/2 -right-24 w-80 h-80 bg-[#218b87]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            {/* Main Header */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight mb-6">
              Ready to boost your business efficiency?
            </h2>

            {/* Checklist */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
              {[
                "Fast & structured setup",
                "Modern AI integration",
                "1-on-1 Technical consultation"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[13px] md:text-sm font-medium text-zinc-700">
                  <Check className="w-4 h-4 text-[#218b87]" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-[#218b87] hover:bg-[#1a7672] text-white rounded-full px-6 py-5 text-[17px] font-semibold shadow-lg shadow-[#218b87]/20 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Consult with Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay / Form using Shadcn Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[500px] bg-white text-black p-8 rounded-2xl border-none shadow-2xl">
          <DialogHeader className="text-center sm:text-center mb-6">
            <DialogTitle className="text-2xl font-bold text-zinc-900 mb-2">Consult with Us</DialogTitle>
            <DialogDescription className="text-zinc-500 text-sm">
              Fill out the details below to receive an initial quote and technical consultation from the piowsee engineering team.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5 mt-2">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold text-zinc-700">Full Name</Label>
              <Input
                id="name"
                required
                type="text"
                placeholder="John Doe"
                className="w-full bg-zinc-50 border-zinc-200 px-4 py-6 text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-blue-500 transition-all font-medium rounded-lg"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-zinc-700">Email Address</Label>
              <Input
                id="email"
                required
                type="email"
                placeholder="you@email.com"
                className="w-full bg-zinc-50 border-zinc-200 px-4 py-6 text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-blue-500 transition-all font-medium rounded-lg"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* WhatsApp */}
            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-sm font-semibold text-zinc-700">WhatsApp Number</Label>
              <Input
                id="whatsapp"
                required
                type="tel"
                placeholder="e.g. +1234567890"
                className="w-full bg-zinc-50 border-zinc-200 px-4 py-6 text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-blue-500 transition-all font-medium rounded-lg"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
            </div>

            {/* Project Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-semibold text-zinc-700">Project Description</Label>
              <textarea
                id="description"
                required
                placeholder="Tell us about your project requirements..."
                className="w-full min-h-[120px] bg-zinc-50 border border-zinc-200 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:outline-none focus:border-blue-500 transition-all font-medium rounded-lg resize-none"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-sm font-medium text-emerald-600 text-center animate-in fade-in slide-in-from-top-1">
                Thank you! Your inquiry has been sent successfully.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-600 text-center animate-in fade-in slide-in-from-top-1">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}

            {/* Submit */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting || status === "success"}
                className="w-full bg-[#10b981] hover:bg-[#059669] text-white rounded-lg py-6 text-lg font-bold shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 mr-1 opacity-90" />
                    Get Free Consultation Now!
                  </span>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
