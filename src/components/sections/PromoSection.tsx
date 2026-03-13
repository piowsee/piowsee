import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const promos = [
  {
    id: 1,
    category: "Promos",
    title: "New to Gojek? We've got you covered",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Promos",
    title: "Up to $15 off rides to/from airports",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Corporate",
    title: "Gojek for your business needs",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
  },
];

export function PromoSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-[56px] font-bold text-center mb-16 tracking-tight">
          More for you
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {promos.map((promo) => (
            <div key={promo.id} className="flex flex-col group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              {/* Image Box */}
              <div className="rounded-[32px] overflow-hidden mb-6 aspect-[4/3] bg-zinc-100 relative">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Box */}
              <div className="flex flex-col flex-1 px-2">
                <span className="text-[#00AA13] font-bold tracking-wider uppercase text-sm mb-3">
                  {promo.category}
                </span>
                <h3 className="text-2xl md:text-[28px] font-bold leading-tight mb-8">
                  {promo.title}
                </h3>
                
                <div className="mt-auto">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-gray-200 text-black font-bold group-hover:bg-[#00AA13] group-hover:text-white group-hover:border-[#00AA13] transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
