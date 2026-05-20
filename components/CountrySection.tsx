"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { ChevronRight } from "lucide-react";

interface Country {
  id: string;
  name: string;
  slug: string;
  type: string;
  shortDescription: string;
  heroImage: string;
  sections?: {
    about?: string;
  };
}

interface CountrySectionProps {
  countries: Country[];
}

export function CountrySection({ countries }: CountrySectionProps) {
  const [selected, setSelected] = useState<Country>(countries[0]);

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left column: list of countries */}
          <div className="lg:col-span-4 space-y-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-primary-500 mb-2">
                Explore Destinations
              </h2>
              <div className="h-1 w-16 bg-accent-500 rounded-full" />
            </div>
            <div className="max-h-[500px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-transparent">
              <ul className="space-y-3">
                {countries.map((c) => (
                  <li
                    key={c.id}
                    className={`group cursor-pointer p-4 rounded-xl transition-all duration-300 border flex items-center justify-between ${
                      c.id === selected.id
                        ? "bg-primary-500 border-primary-900 text-white shadow-lg translate-x-2"
                        : "bg-neutral-50 border-neutral-100 text-primary-500 hover:bg-white hover:border-primary-200 hover:shadow-md"
                    }`}
                    onClick={() => setSelected(c)}
                  >
                    <span className="font-medium">{c.name}</span>
                    <ChevronRight
                      size={18}
                      className={`transition-transform duration-300 ${
                        c.id === selected.id
                          ? "translate-x-1 text-accent-400"
                          : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                      }`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column: country card */}
          <div className="lg:col-span-8">
            <div className="relative group perspective-1000">
              <Card className="overflow-hidden border-none bg-white shadow-2xl rounded-[2rem] flex flex-col md:flex-row min-h-[450px]">
                {/* Text side */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center space-y-6 bg-gradient-to-br from-white to-neutral-50">
                  <div>
                    <h3 className="text-3xl font-bold text-primary-500 mb-4 leading-tight">
                      {selected.name}
                    </h3>
                    <div className="h-0.5 w-12 bg-accent-500 mb-6" />
                    <p className="text-primary-500 leading-relaxed mb-6 italic">
                      {selected.shortDescription}
                    </p>
                    {selected.sections?.about && (
                      <div className="text-sm text-primary-400 line-clamp-6 leading-relaxed">
                        {selected.sections.about}
                      </div>
                    )}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={
                        selected.type === "citizenship"
                          ? `/citizenship-by-investment/${selected.slug}`
                          : `/residence-by-investment/${selected.slug}`
                      }
                      className="inline-flex items-center text-primary-500 font-bold hover:text-accent-600 transition-colors group"
                    >
                      Learn More About {selected.name}
                      <ChevronRight
                        size={20}
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>

                {/* Image side */}
                <div className="flex-1 relative h-72 md:h-auto min-h-[350px] bg-primary-950 p-8 flex items-center justify-center">
                  {/* Decorative background grid/elements */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(rgba(212,175,55,0.25)_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="absolute top-10 right-10 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl" />

                  {/* Layered Image Container */}
                  <div className="relative w-full h-full min-h-[250px] group/img max-w-[320px] md:max-w-none">
                    {/* Golden accent background card */}
                    <div className="absolute inset-0 bg-accent-500/20 rounded-2xl transform translate-x-2 translate-y-2 rotate-2 transition-transform duration-500 group-hover/img:translate-x-1 group-hover/img:translate-y-1 group-hover/img:rotate-1" />
                    {/* Main Image Frame */}z
                    <div className="absolute inset-0 rounded-2xl overflow-hidden border border-primary-800 shadow-xl bg-primary-900 transition-all duration-500 group-hover/img:-translate-x-1 group-hover/img:-translate-y-1 group-hover/img:-rotate-1">
                      <Image
                        src={selected.heroImage}
                        alt={selected.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-[10px] font-light tracking-widest text-accent-400 uppercase mb-1">
                          Premium Destination
                        </p>
                        <p className="text-lg font-bold">{selected.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
