import Link from "next/link";

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
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-[56px] font-bold text-center mb-6 tracking-tight">
          Tailored Software Development.
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Require a specific solution? We build secure, high-performance custom applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {promos.map((promo) => (
            <div key={promo.id} className="flex flex-col">
              {/* Image Box */}
              <div className="rounded-[32px] overflow-hidden mb-6 aspect-[4/3] bg-zinc-100 relative">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Box */}
              <div className="flex flex-col flex-1 px-2">
                <span className="text-brand font-bold tracking-wider uppercase text-sm mb-3">
                  {promo.category}
                </span>
                <h3 className="text-2xl md:text-[28px] font-bold leading-tight mb-8">
                  {promo.title}
                </h3>
                
                <div className="mt-auto">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand text-white font-bold cursor-pointer"
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
