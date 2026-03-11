"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "id";

type Translations = {
  [key in Language]: Record<string, string>;
};

const translations: Translations = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.platform": "Platform",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.cta": "Discuss Your Project",
    // Hero
    "hero.headline": "Automating Complexity. Accelerating Growth.",
    "hero.subtitle": "piowsee is a software house building intelligent digital products and solutions. We help businesses optimize operations and scale faster through modern technology.",
    "hero.primary": "Explore Our Platform",
    "hero.secondary": "Consult With Our Engineers",
    // About
    "about.heading": "Engineering the Future of Digital Business.",
    "about.body": "Founded in 2026 in Indonesia, piowsee bridges the gap between complex artificial intelligence and practical business applications. We don't just write code; we architect intelligent systems designed to solve real operational bottlenecks. Our mission is clear: to make scalable technology accessible, enabling personal growth and driving measurable business efficiency.",
    // Why
    "why.ai.title": "AI-Integrated Development",
    "why.ai.body": "We integrate AI into our software through modern APIs and tooling. Expect smarter workflows and automated decision-making built into every product.",
    "why.scale.title": "Scalable & Future-Proof",
    "why.scale.body": "Built on modern frameworks, our products easily adapt and scale as your business expands and technology evolves.",
    "why.e2e.title": "End-to-End Delivery",
    "why.e2e.body": "From system architecture and UI/UX design to deployment and maintenance, we handle the entire engineering lifecycle.",
    // Platforms
    "platform.heading": "Our Platforms. In Development.",
    "platform.pocv.title": "pocv - AI Resume Builder",
    "platform.pocv.body": "Maximize candidate success with AI-driven ATS optimization and smart rewriting capabilities.",
    "platform.pesan.title": "Pesan AI - WhatsApp AI Agent",
    "platform.pesan.body": "Automate customer support and CRM scheduling directly through the WhatsApp Cloud API.",
    "platform.comingSoon": "Coming Soon",
    // Enterprise
    "enterprise.heading": "Tailored Software Development.",
    "enterprise.subtitle": "Require a specific solution? We build secure, high-performance custom applications.",
    "enterprise.genai.title": "Generative AI Integration",
    "enterprise.genai.body": "Embed LLMs and automated data processing into your existing corporate systems.",
    "enterprise.web.title": "Modern Web Applications",
    "enterprise.web.body": "High-performance, responsive web platforms built with Modern Technology.",
    "enterprise.data.title": "Data Processing Systems",
    "enterprise.data.body": "Scalable pipelines for real-time analytics and business intelligence.",
    // Contact
    "contact.heading": "Start Your Digital Transformation.",
    "contact.name": "Full Name / Company",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Send Inquiry",
    // Footer
    "footer.platform": "Platform",
    "footer.services": "Services",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.copyright": "© 2026 piowsee. Engineered in Indonesia.",
  },
  id: {
    // Nav
    "nav.home": "Beranda",
    "nav.platform": "Platform",
    "nav.services": "Layanan",
    "nav.process": "Proses",
    "nav.contact": "Kontak",
    "nav.cta": "Diskusikan Proyek Anda",
    // Hero
    "hero.headline": "Mengotomatisasi Kompleksitas. Mempercepat Pertumbuhan.",
    "hero.subtitle": "piowsee adalah software house yang membangun produk dan solusi digital cerdas. Kami membantu bisnis mengoptimalkan operasi dan berkembang lebih cepat melalui teknologi modern.",
    "hero.primary": "Jelajahi Platform Kami",
    "hero.secondary": "Konsultasi dengan Insinyur Kami",
    // About
    "about.heading": "Membangun Masa Depan Bisnis Digital.",
    "about.body": "Didirikan pada tahun 2026 di Indonesia, piowsee menjembatani kesenjangan antara kecerdasan buatan yang kompleks dan aplikasi bisnis praktis. Kami tidak hanya menulis kode; kami merancang sistem cerdas yang dibuat untuk memecahkan hambatan operasional nyata. Misi kami jelas: membuat teknologi yang dapat diskalakan mudah diakses, memungkinkan pertumbuhan dan mendorong efisiensi bisnis yang terukur.",
    // Why
    "why.ai.title": "Pengembangan Berbasis AI",
    "why.ai.body": "Kami mengintegrasikan AI ke dalam perangkat lunak kami melalui API dan tooling modern. Dapatkan alur kerja yang lebih cerdas dan pengambilan keputusan otomatis di setiap produk.",
    "why.scale.title": "Terukur & Anti-Ketinggalan Zaman",
    "why.scale.body": "Dibuat dengan framework modern, produk kami mudah beradaptasi dan berkembang seiring perluasan bisnis dan evolusi teknologi.",
    "why.e2e.title": "Pengiriman Ujung-ke-Ujung",
    "why.e2e.body": "Mulai dari arsitektur sistem dan desain UI/UX hingga penerapan dan pemeliharaan, kami menangani seluruh siklus rekayasa.",
    // Platforms
    "platform.heading": "Platform Kami. Dalam Pengembangan.",
    "platform.pocv.title": "pocv – Pembangun Resume Cerdas",
    "platform.pocv.body": "Maksimalkan kesuksesan kandidat dengan optimasi ATS berbasis AI dan kemampuan penulisan ulang cerdas.",
    "platform.pesan.title": "Pesan AI – Agen AI WhatsApp",
    "platform.pesan.body": "Otomatiskan dukungan pelanggan dan penjadwalan CRM langsung melalui API Cloud WhatsApp.",
    "platform.comingSoon": "Segera Hadir",
    // Enterprise
    "enterprise.heading": "Pengembangan Perangkat Lunak Khusus.",
    "enterprise.subtitle": "Membutuhkan solusi spesifik? Kami membangun aplikasi kustom yang aman dan berkinerja tinggi.",
    "enterprise.genai.title": "Integrasi AI Generatif",
    "enterprise.genai.body": "Sematkan LLM dan pemrosesan data otomatis ke dalam sistem Anda yang sudah ada.",
    "enterprise.web.title": "Aplikasi Web Modern",
    "enterprise.web.body": "Platform web responsif berkinerja tinggi yang dibangun dengan Teknologi Modern.",
    "enterprise.data.title": "Sistem Pemrosesan Data",
    "enterprise.data.body": "Pipeline terukur untuk analitik waktu nyata dan intelijen bisnis.",
    // Contact
    "contact.heading": "Mulai Transformasi Digital Anda.",
    "contact.name": "Nama Lengkap / Perusahaan",
    "contact.email": "Email",
    "contact.message": "Isi/Pesan",
    "contact.submit": "Kirim Pertanyaan",
    // Footer
    "footer.platform": "Platform",
    "footer.services": "Layanan",
    "footer.legal": "Hukum",
    "footer.privacy": "Kebijakan Privasi",
    "footer.terms": "Syarat Layanan",
    "footer.copyright": "© 2026 piowsee. Direkayasa di Indonesia.",
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Auto-detect browser language
    if (typeof navigator !== "undefined") {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.includes("id")) {
        setLanguage("id");
      } else {
        // Read from local storage if previously set
        const stored = localStorage.getItem("piowsee-lang") as Language;
        if (stored === "en" || stored === "id") {
          setLanguage(stored);
        }
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("piowsee-lang", lang);
  };

  const t = (key: string) => {
    // If not mounted yet to avoid hydration errors, we could just return English default, 
    // but React hydration might still be unhappy with differing text. 
    // Since we're okay with it here, let's keep it simple.
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
