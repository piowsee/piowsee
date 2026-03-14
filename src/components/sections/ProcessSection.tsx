import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const promos = [
  {
    id: 1,
    category: "AI Integration",
    title: "Generative AI Integration",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Web Apps",
    title: "Modern Web Applications",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Data Systems",
    title: "Data Processing Systems",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white">
      {/* Container align dengan section lain */}
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-[50px] font-bold text-center mb-5 tracking-tight">
            Tailored <span className="text-brand">Software Development.</span>
          </h2>

          <p className="text-lg md:text-xl text-center text-gray-600 mb-14 max-w-2xl mx-auto leading-relaxed">
            Require a specific solution? We build secure, high-performance{" "}
            <span className="text-brand">custom applications</span>.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promos.map((promo) => (
            <ScrollReveal key={promo.id} delay={promo.id * 100}>
              <div className="flex flex-col">
                <div className="rounded-[28px] overflow-hidden mb-5 aspect-[4/3] bg-zinc-100 relative">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                </div>

                <div className="flex flex-col flex-1 px-2">
                  <span className="text-brand font-bold tracking-wider uppercase text-[13px] mb-2.5">
                    {promo.category}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold leading-tight mb-6">
                    {promo.title}
                  </h3>

                  <div className="mt-auto">
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center px-5 py-2.5 text-sm md:text-[15px] rounded-full bg-brand text-white font-bold cursor-pointer transition-transform hover:bg-brand/90 hover:-translate-y-0.25"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
