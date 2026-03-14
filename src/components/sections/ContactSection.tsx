"use client";

import { useState } from "react";
import { Check, Mail, Phone, MapPin, Send, X, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormData = {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.whatsapp.trim() || !/^\+?[\d\s\-()+]{8,}$/.test(data.whatsapp)) {
    errors.whatsapp = "Please enter a valid WhatsApp number.";
  }
  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validateForm(formData);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    if (touched[field]) {
      const fieldErrors = validateForm(updated);
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched: Partial<Record<keyof FormData, boolean>> = {
      name: true, email: true, whatsapp: true, message: true,
    };
    setTouched(allTouched);
    const formErrors = validateForm(formData);
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", whatsapp: "", message: "" });
        setTouched({});
        setErrors({});
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentState = isSubmitting ? "submitting" : status;

  const buttonContent: Record<string, React.ReactNode> = {
    idle: (
      <span className="flex items-center gap-2">
        <Send className="w-4 h-4" />
        Send Message
      </span>
    ),
    submitting: (
      <span className="flex items-center gap-2">
        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        Sending...
      </span>
    ),
    success: (
      <span className="flex items-center gap-2 animate-in fade-in zoom-in-95 duration-300">
        <CheckCircle2 className="w-5 h-5" />
        Message Sent!
      </span>
    ),
    error: (
      <span className="flex items-center gap-2 animate-in fade-in zoom-in-90 duration-300">
        <AlertCircle className="w-5 h-5" />
        Failed to Send
      </span>
    ),
  };

  const buttonClass: Record<string, string> = {
    idle: "bg-[#218b87] hover:bg-[#1a7672]",
    submitting: "bg-[#218b87] opacity-80",
    success: "bg-emerald-500 hover:bg-emerald-500",
    error: "bg-red-700 hover:bg-red-700",
  };

  const inputBorder = (field: keyof FormData) =>
    errors[field] && touched[field]
      ? "border-red-400 focus-visible:ring-red-300/40"
      : "border-zinc-200 focus-visible:ring-[#218b87]/30";

  return (
    <section id="contact" className="py-20 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        {/* Header — centered */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            Consult with Us
          </h2>
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto mb-16">
            Fill out the details below to receive an initial quote and technical consultation from the piowsee engineering team.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["Fast & structured setup", "Modern AI integration", "1-on-1 Technical consultation"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[13px] md:text-sm font-medium text-zinc-700">
                <Check className="w-4 h-4 text-[#218b87]" />
                {item}
              </div>
            ))}
          </div> */}
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto items-start">

          {/* Left — Contact Information */}
          <div className="flex flex-col justify-center space-y-8 lg:pt-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Contact Information</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Reach out directly or fill in the form and we&apos;ll get back to you shortly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#218b87]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-[#218b87]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Email</p>
                  <a
                    href="mailto:poc.helpteam@gmail.com"
                    className="text-zinc-900 font-medium hover:text-[#218b87] transition"
                  >
                    poc.helpteam@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#218b87]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#218b87]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Phone</p>
                  <a
                    href="https://wa.me/6285195563454"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 font-medium hover:text-[#218b87] transition"
                  >
                    +62 851 9556 3454
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#218b87]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#218b87]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Location</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Sumedang%2C+West+Java"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 font-medium hover:text-[#218b87] transition"
                  >
                    Sumedang, West Java
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-zinc-100">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>

              {/* Name */}
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-sm font-semibold text-zinc-700">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className={`w-full bg-zinc-50 border px-4 py-6 text-zinc-900 placeholder:text-zinc-400 transition-all font-medium rounded-lg ${inputBorder("name")}`}
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                />
                {errors.name && touched.name && (
                  <p className="text-xs text-red-500 flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
                    <X className="w-3 h-3 flex-shrink-0" />{errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-semibold text-zinc-700">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@email.com"
                  className={`w-full bg-zinc-50 border px-4 py-6 text-zinc-900 placeholder:text-zinc-400 transition-all font-medium rounded-lg ${inputBorder("email")}`}
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                />
                {errors.email && touched.email && (
                  <p className="text-xs text-red-500 flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
                    <X className="w-3 h-3 flex-shrink-0" />{errors.email}
                  </p>
                )}
              </div>

              {/* WhatsApp */}
              <div className="space-y-1.5">
                <Label htmlFor="whatsapp" className="text-sm font-semibold text-zinc-700">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="e.g. 6281234567890"
                  className={`w-full bg-zinc-50 border px-4 py-6 text-zinc-900 placeholder:text-zinc-400 transition-all font-medium rounded-lg ${inputBorder("whatsapp")}`}
                  value={formData.whatsapp}
                  onChange={(e) => handleChange("whatsapp", e.target.value)}
                  onBlur={() => handleBlur("whatsapp")}
                />
                {errors.whatsapp && touched.whatsapp && (
                  <p className="text-xs text-red-500 flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
                    <X className="w-3 h-3 flex-shrink-0" />{errors.whatsapp}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-sm font-semibold text-zinc-700">Message</Label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project requirements..."
                  className={`w-full min-h-[120px] bg-zinc-50 border px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-2 transition-all font-medium rounded-lg resize-none text-sm ${
                    errors.message && touched.message
                      ? "border-red-400 focus:ring-red-200"
                      : "border-zinc-200 focus:ring-[#218b87]/20 focus:border-[#218b87]"
                  }`}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                />
                {errors.message && touched.message && (
                  <p className="text-xs text-red-500 flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
                    <X className="w-3 h-3 flex-shrink-0" />{errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white rounded-lg py-6 text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer disabled:cursor-not-allowed ${buttonClass[currentState]}`}
              >
                {buttonContent[currentState]}
              </Button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
