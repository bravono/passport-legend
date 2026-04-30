"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Container } from "./Container";
import { Button } from "./Button";
import {
  getCitizenshipCountries,
  getResidenceCountries,
} from "@/lib/data/countries";

const otherNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const citizenshipRef = useRef<HTMLDivElement>(null);
  const residenceRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  const citizenshipCountries = getCitizenshipCountries();
  const residenceCountries = getResidenceCountries();

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const handleCitizenshipHover = (isEntering: boolean) => {
    if (isEntering) {
      setOpenDropdown("citizenship");
    } else {
      setOpenDropdown(null);
    }
  };

  const handleResidenceHover = (isEntering: boolean) => {
    if (isEntering) {
      setOpenDropdown("residence");
    } else {
      setOpenDropdown(null);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900/80">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 font-bold text-white">
              PL
            </div>
            <span className="hidden font-bold text-neutral-900 dark:text-white sm:inline">
              <img src="assets/PL Logo Tra" alt="" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 md:flex items-center">
            {otherNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
              >
                {link.label}
              </Link>
            ))}

            {/* Citizenship Dropdown */}
            <div
              ref={citizenshipRef}
              onMouseEnter={() => handleCitizenshipHover(true)}
              onMouseLeave={() => handleCitizenshipHover(false)}
              className="relative"
            >
              <Link
                href="/citizenship"
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 flex items-center gap-1"
              >
                Citizenship
                <svg
                  className={`w-4 h-4 transition-transform ${openDropdown === "citizenship" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </Link>

              {openDropdown === "citizenship" && (
                <div className="absolute left-0 mt-2 w-max bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-700 p-4 z-50">
                  <div className="grid grid-cols-6 gap-3">
                    {citizenshipCountries.map((country) => (
                      <Link
                        key={country.id}
                        href={`/countries/${country.slug}`}
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
              onMouseEnter={() => handleResidenceHover(true)}
              onMouseLeave={() => handleResidenceHover(false)}
              className="relative"
            >
              <Link
                href="/residence"
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 flex items-center gap-1"
              >
                Residence
                <svg
                  className={`w-4 h-4 transition-transform ${openDropdown === "residence" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </Link>

              {openDropdown === "residence" && (
                <div className="absolute left-0 mt-2 w-max bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-700 p-4 z-50">
                  <div className="grid grid-cols-6 gap-3">
                    {residenceCountries.map((country) => (
                      <Link
                        key={country.id}
                        href={`/countries/${country.slug}`}
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
          </nav>

          {/* Theme Switcher & Mobile Menu */}
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.5 1.5H9.5V.5h1v1zm0 17H9.5v-1h1v1zM19 9.5v1h-1v-1h1zm-18 0v1H0v-1h1zM17.657 2.343L16.95 3.05l-.707-.707.707-.707zm-15.314 15.314l-.707.707-.707-.707.707-.707zm0-15.314l.707.707-.707.707-.707-.707zm15.314 15.314l.707-.707.707.707-.707.707zM10 5a5 5 0 110 10 5 5 0 010-10z" />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <nav className="space-y-1 border-t border-neutral-200 py-4 dark:border-neutral-700 md:hidden">
            {otherNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-primary-600 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-primary-400"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <details className="group px-4">
              <summary className="py-2 text-sm font-medium text-neutral-600 cursor-pointer transition-colors hover:bg-neutral-100 hover:text-primary-600 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-primary-400">
                Citizenship
              </summary>
              <div className="mt-2 grid grid-cols-2 gap-2 ml-2">
                {citizenshipCountries.map((country) => (
                  <Link
                    key={country.id}
                    href={`/countries/${country.slug}`}
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
              <summary className="py-2 text-sm font-medium text-neutral-600 cursor-pointer transition-colors hover:bg-neutral-100 hover:text-primary-600 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-primary-400">
                Residence
              </summary>
              <div className="mt-2 grid grid-cols-2 gap-2 ml-2">
                {residenceCountries.map((country) => (
                  <Link
                    key={country.id}
                    href={`/countries/${country.slug}`}
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
          </nav>
        )}
      </Container>
    </header>
  );
}
