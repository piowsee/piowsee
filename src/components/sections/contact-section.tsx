"use client";

import React, { useState, useRef } from "react";
import { useLanguage } from "@/lib/i18n";
import { AnimatedSection, AnimatedChild } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactSection() {
  const { t } = useLanguage();

  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3500);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "poc.helpteam@gmail.com",
      href: "mailto:poc.helpteam@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+62 851 9556 3454",
      href: "tel:+6285195563454",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Sumedang, West Java",
    },
  ];

  return (
    <AnimatedSection
      id="contact"
      className="py-32 px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
      {/* Separator */}
      <AnimatedChild>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16" />
      </AnimatedChild>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Contact Info */}
        <AnimatedChild>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-12 leading-[1.1]">
            {t("contact.heading")}
          </h2>

          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-5 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {info.icon}
                </motion.div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-foreground text-lg font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground text-lg font-medium">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedChild>

        {/* Right: Interactive Form Card */}
        <AnimatedChild>
          <motion.div
            ref={cardRef}
            className="relative rounded-3xl p-8 md:p-10 overflow-hidden min-h-[500px] flex flex-col
              bg-gradient-to-br from-white/80 to-white/40
              dark:from-white/[0.04] dark:to-white/[0.01]
              border border-black/[0.04] dark:border-white/[0.06]
              shadow-xl shadow-black/5 dark:shadow-black/20
              cursor-default"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Mouse spotlight */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
              style={{
                opacity: isHovered ? 1 : 0,
                background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(52,211,153,0.09), transparent 65%)`,
              }}
            />

            {/* Glow ring on hover */}
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                boxShadow: "inset 0 0 0 1px rgba(52,211,153,0.18)",
              }}
            />

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                /* Success state — fills the card, card size unchanged */
                <motion.div
                  key="success"
                  className="flex-1 flex flex-col items-center justify-center gap-6 text-center"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-emerald-500/15 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 18 }}
                  >
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
                    <p className="text-muted-foreground">We'll get back to you soon.</p>
                  </motion.div>
                </motion.div>
              ) : (
                /* Form */
                <motion.form
                  key="form"
                  className="space-y-5"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {[
                    { id: "name", type: "text", placeholder: "John Doe", label: t("contact.name") },
                    { id: "email", type: "email", placeholder: "john@example.com", label: t("contact.email") },
                  ].map((field, i) => (
                    <motion.div
                      key={field.id}
                      className="space-y-2 group/field"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.4 }}
                    >
                      <Label
                        htmlFor={field.id}
                        className="text-sm font-semibold text-muted-foreground transition-colors group-focus-within/field:text-emerald-600 dark:group-focus-within/field:text-emerald-400"
                      >
                        {field.label}
                      </Label>
                      <Input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="rounded-xl border-border/50 bg-background/50 focus-visible:ring-2 focus-visible:ring-zinc-600/30 dark:focus-visible:ring-emerald-500/40 focus-visible:border-zinc-700/60 dark:focus-visible:border-emerald-400/80 h-12 px-4 shadow-sm transition-all duration-200 focus-visible:shadow-emerald-500/10 focus-visible:shadow-md"
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    className="space-y-2 group/field"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.14, duration: 0.4 }}
                  >
                    <Label
                      htmlFor="message"
                      className="text-sm font-semibold text-muted-foreground transition-colors group-focus-within/field:text-emerald-600 dark:group-focus-within/field:text-emerald-400"
                    >
                      {t("contact.message")}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      className="rounded-xl border-border/50 bg-background/50 focus-visible:ring-2 focus-visible:ring-zinc-600/30 dark:focus-visible:ring-emerald-500/40 focus-visible:border-zinc-700/60 dark:focus-visible:border-emerald-400/80 px-4 py-3 shadow-sm transition-all duration-200 focus-visible:shadow-emerald-500/10 focus-visible:shadow-md min-h-[120px] resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.21, duration: 0.4 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-500/25 disabled:opacity-80 h-14 text-base rounded-2xl transition-all duration-300 mt-2 group relative overflow-hidden"
                    >
                      {/* Shimmer on hover */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                      <span className="relative flex items-center justify-center gap-2">
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.span
                              key="loading"
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Sending...
                            </motion.span>
                          ) : (
                            <motion.span
                              key="idle"
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.2 }}
                            >
                              {t("contact.submit")}
                              <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </span>
                    </Button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatedChild>
      </div>
    </AnimatedSection>
  );
}
