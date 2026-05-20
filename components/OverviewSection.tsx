"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

interface OverviewItem {
  no: number | string;
  title: string;
  description: string;
}

interface OverviewSectionProps {
  title: string;
  items: OverviewItem[];
  countryName: string;
  theme?: "light" | "dark";
}

export function OverviewSection({
  title,
  items,
  countryName,
  theme = "light",
}: OverviewSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const isDark = theme === "dark";

  return (
    <Section
      className={
        isDark ? "bg-primary-500 text-white" : "bg-white text-primary-500"
      }
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <ScrollReveal direction="up">
            <div className="max-w-2xl">
              <div
                className={`inline-block px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase border ${
                  isDark
                    ? "bg-accent-500/10 text-accent-400 border-accent-500/20"
                    : "bg-accent-50 text-accent-700 border-accent-100"
                }`}
              >
                Quick Look
              </div>
              <h2
                className={`text-4xl md:text-6xl font-bold tracking-tight ${isDark ? "text-white" : "text-primary-500"}`}
              >
                {title}
              </h2>
            </div>
          </ScrollReveal>
          <div
            className={`${isDark ? "text-primary-500" : "text-primary-400"} font-mono text-sm hidden md:block uppercase tracking-widest`}
          >
            PROGRAM SUMMARY / {countryName}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar Navigation - Numbers */}
          <div className="lg:col-span-4 flex flex-wrap lg:flex-col gap-4">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative flex items-center gap-6 p-6 rounded-2xl transition-all duration-500 group ${
                  activeIndex === index
                    ? isDark
                      ? "bg-white/10 border-accent-500"
                      : "bg-neutral-50 border-accent-600"
                    : isDark
                      ? "bg-transparent border-white/5 hover:bg-white/5"
                      : "bg-transparent border-neutral-100 hover:bg-neutral-50"
                } border-l-4`}
              >
                <span
                  className={`text-3xl font-mono font-bold transition-colors duration-300 ${
                    activeIndex === index
                      ? "text-accent-500"
                      : isDark
                        ? "text-white/20"
                        : "text-primary-100"
                  }`}
                >
                  {String(item.no).padStart(2, "0")}
                </span>
                <span
                  className={`text-lg font-bold text-left transition-colors duration-300 ${
                    activeIndex === index
                      ? isDark
                        ? "text-white"
                        : "text-primary-500"
                      : isDark
                        ? "text-primary-500"
                        : "text-primary-300"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="lg:col-span-8 min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`relative w-full p-12 md:p-20 rounded-[3rem] border shadow-2xl ${
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-neutral-100"
                }`}
              >
                <div
                  className={`absolute top-10 right-16 text-[12rem] font-bold select-none pointer-events-none transition-colors duration-700 font-mono ${
                    isDark ? "text-white/5" : "text-primary-50"
                  }`}
                >
                  {String(items[activeIndex].no).padStart(2, "0")}
                </div>

                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent-500/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-accent-500 animate-pulse" />
                  </div>

                  <h3
                    className={`text-4xl md:text-5xl font-bold tracking-tight ${isDark ? "text-white" : "text-primary-500"}`}
                  >
                    {items[activeIndex].title}
                  </h3>

                  <p
                    className={`text-xl md:text-2xl leading-relaxed font-light ${isDark ? "text-primary-100" : "text-primary-500"}`}
                  >
                    {items[activeIndex].description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent-500 rounded-b-[3rem]" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
