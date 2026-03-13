import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "GoCar",
    description: "The go-to ride that seats up to 4 adults",
    iconColor: "bg-[#00AA13]",
  },
  {
    id: 2,
    title: "GoCar XL",
    description: "Extra space for up to 6 adults or large items",
    iconColor: "bg-[#00AA13]",
  },
  {
    id: 3,
    title: "GoCar Premium",
    description: "A comfortable ride for that special date",
    iconColor: "bg-[#00AA13]",
  },
  {
    id: 4,
    title: "GoTaxi",
    description: "Taxis dispatched straight to your app",
    iconColor: "bg-blue-600",
  },
  {
    id: 5,
    title: "GoCar Kids",
    description: "Comes with a booster seat for ages 4-7",
    iconColor: "bg-orange-500",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Rides on Gojek
          </h2>
          <p className="text-xl text-gray-700">
            A ride for every occasion? We've got you covered.
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex-none w-[300px] md:w-[350px] snap-center bg-zinc-50 rounded-[32px] p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 ease-out border border-zinc-100"
            >
              <div className="space-y-6">
                {/* Simulated Icon/Logo Box */}
                <div
                  className={`w-16 h-16 rounded-2xl ${service.iconColor} flex items-center justify-center text-white font-bold shadow-sm`}
                >
                  {service.title.split(" ")[1] ? service.title.split(" ")[1][0] : "G"}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-black tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed min-h-[50px]">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-flex items-center text-[#00AA13] font-bold hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
