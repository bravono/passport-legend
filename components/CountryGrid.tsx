"use client";

import Link from "next/link";
import { Country } from "@/lib/data/countries";

interface CountryGridProps {
  countries: Country[];
}

export function CountryGrid({ countries }: CountryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {countries.map((country) => (
        <Link
          key={country.id}
          href={`/countries/${country.slug}`}
          className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95 hover:scale-105"
        >
          {/* Background Image */}
          <img
            src={country.heroImage}
            alt={country.name}
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110 group-active:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 transition-opacity duration-300 group-hover:from-black/90" />

          {/* Country Name */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white transition-transform duration-300 group-hover:translate-y-1 group-active:translate-y-1">
              {country.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
