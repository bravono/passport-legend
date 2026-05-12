"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Button";
import { getCitizenshipCountries } from "@/lib/data/countries-citizenship";
import { getResidenceCountries } from "@/lib/data/countries-residence";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const citizenshipRef = useRef<HTMLDivElement>(null);
  const residenceRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const citizenshipCountries = getCitizenshipCountries();
  const residenceCountries = getResidenceCountries();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        citizenshipRef.current &&
        !citizenshipRef.current.contains(event.target as Node) &&
        residenceRef.current &&
        !residenceRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleHover = (
    type: "citizenship" | "residence" | null,
    isEntering: boolean,
  ) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (isEntering) {
      setOpenDropdown(type);
    } else {
      timeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 300);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="font-bold text-neutral-900">
              <img
                src="/assets/Logo.svg"
                alt="Passport Legend"
                className="h-20 w-auto md:h-50"
              />
            </span>
          </Link>

          {/* Desktop Navigation — Order: Home, Citizenship, Residence, News, About, Contact */}
          <nav className="hidden gap-8 md:flex items-center">
            <Link
              href="/"
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600"
            >
              Home
            </Link>

            {/* Citizenship Dropdown */}
            <div
              ref={citizenshipRef}
              onMouseEnter={() => handleHover("citizenship", true)}
              onMouseLeave={() => handleHover("citizenship", false)}
              className="relative"
            >
              <Link
                href="/citizenship"
                className="text-sm font-medium text-neutral-600 transition-all duration-300 hover:text-primary-600 flex items-center gap-1 group"
              >
                Citizenship
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "citizenship" ? "rotate-180" : ""}`}
                />
              </Link>

              {openDropdown === "citizenship" && (
                <div className="absolute left-0 mt-2 w-max bg-white rounded-lg shadow-xl border border-neutral-200 p-4 z-50">
                  <div className="grid grid-cols-6 gap-3">
                    {citizenshipCountries.map((country) => (
                      <Link
                        key={country.id}
                        href={`/citizenship-by-investment/${country.slug}`}
                        className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95 hover:scale-105"
                      >
                        <img
                          src={country.heroImage}
                          alt={country.name}
                          className="h-16 w-24 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-1 left-1 right-1">
                          <h4 className="text-xs font-bold text-white truncate">
                            {country.name}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Residence Dropdown */}
            <div
              ref={residenceRef}
              onMouseEnter={() => handleHover("residence", true)}
              onMouseLeave={() => handleHover("residence", false)}
              className="relative"
            >
              <Link
                href="/residence"
                className="text-sm font-medium text-neutral-600 transition-all duration-300 hover:text-primary-600 flex items-center gap-1 group"
              >
                Residence
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "residence" ? "rotate-180" : ""}`}
                />
              </Link>

              {openDropdown === "residence" && (
                <div className="absolute left-0 mt-2 w-max bg-white rounded-lg shadow-xl border border-neutral-200 p-4 z-50">
                  <div className="grid grid-cols-6 gap-3">
                    {residenceCountries.map((country) => (
                      <Link
                        key={country.id}
                        href={`/residence-by-investment/${country.slug}`}
                        className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95 hover:scale-105"
                      >
                        <img
                          src={country.heroImage}
                          alt={country.name}
                          className="h-16 w-24 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-1 left-1 right-1">
                          <h4 className="text-xs font-bold text-white truncate">
                            {country.name}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600"
            >
              News
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-neutral-600 hover:bg-primary-50 transition-all duration-300 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6 animate-scale-up" />
            ) : (
              <Menu className="h-6 w-6 animate-scale-up" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <nav className="space-y-1 border-t border-neutral-200 py-4 md:hidden">
            <Link
              href="/"
              className="block px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-primary-600"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <details className="group px-4">
              <summary className="py-2 text-sm font-medium text-neutral-600 cursor-pointer transition-colors hover:bg-neutral-100 hover:text-primary-600">
                Citizenship
              </summary>
              <div className="mt-2 grid grid-cols-2 gap-2 ml-2">
                {citizenshipCountries.map((country) => (
                  <Link
                    key={country.id}
                    href={`/citizenship-by-investment/${country.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="group/item relative overflow-hidden rounded-lg"
                  >
                    <img
                      src={country.heroImage}
                      alt={country.name}
                      className="h-16 w-full object-cover transition-transform duration-300 group-hover/item:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-1 left-1 right-1">
                      <h4 className="text-xs font-bold text-white truncate">
                        {country.name}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </details>
            <details className="group px-4">
              <summary className="py-2 text-sm font-medium text-neutral-600 cursor-pointer transition-colors hover:bg-neutral-100 hover:text-primary-600">
                Residence
              </summary>
              <div className="mt-2 grid grid-cols-2 gap-2 ml-2">
                {residenceCountries.map((country) => (
                  <Link
                    key={country.id}
                    href={`/residence-by-investment/${country.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="group/item relative overflow-hidden rounded-lg"
                  >
                    <img
                      src={country.heroImage}
                      alt={country.name}
                      className="h-16 w-full object-cover transition-transform duration-300 group-hover/item:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-1 left-1 right-1">
                      <h4 className="text-xs font-bold text-white truncate">
                        {country.name}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </details>
            <Link
              href="/blog"
              className="block px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-primary-600"
              onClick={() => setMobileOpen(false)}
            >
              News
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-primary-600"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-primary-600"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
}
