"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  title?: string;
  faqs: FaqItem[];
  theme?: "light" | "dark";
}

export function FaqSection({
  title = "Frequently Asked Questions",
  faqs,
  theme = "light",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isDark = theme === "dark";

  return (
    <Section
      className={
        isDark ? "bg-primary-500 text-white" : "bg-white text-primary-500"
      }
    >
      <Container>
        <div className="text-center mb-16 space-y-4">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {title}
            </h2>
            <div className="h-1.5 w-24 bg-accent-500 mx-auto rounded-full mt-6" />
          </ScrollReveal>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div
                className={`group border rounded-[2rem] overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? isDark
                      ? "bg-primary-500-800 border-accent-500/30"
                      : "bg-neutral-50 border-accent-500/30 shadow-xl"
                    : isDark
                      ? "bg-primary-500 border-primary-700"
                      : "bg-white border-neutral-100 hover:border-accent-500/20"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-8 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <div
                      className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        openIndex === index
                          ? "bg-accent-500 text-white"
                          : isDark
                            ? "bg-primary-800 text-primary-500"
                            : "bg-neutral-100 text-primary-400"
                      }`}
                    >
                      <HelpCircle size={20} />
                    </div>
                    <h3
                      className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                        openIndex === index
                          ? isDark
                            ? "text-white"
                            : "text-primary-500"
                          : isDark
                            ? "text-primary-200"
                            : "text-primary-500"
                      }`}
                    >
                      {faq.q}
                    </h3>
                  </div>
                  <div
                    className={`shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""}`}
                  >
                    {openIndex === index ? (
                      <Minus size={24} className="text-accent-500" />
                    ) : (
                      <Plus size={24} className="text-primary-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div
                        className={`px-24 pb-8 text-lg leading-relaxed ${isDark ? "text-primary-100" : "text-primary-500"}`}
                      >
                        <div className="pt-2 border-t border-accent-500/10">
                          {faq.a}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
