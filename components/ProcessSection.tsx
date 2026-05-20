"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, LucideIcon } from "lucide-react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

interface ProcessStep {
  title: string;
  description: string;
  details?: string[];
  image: string;
  icon?: LucideIcon;
}

interface ProcessSectionProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  theme?: "light" | "dark";
}

export function ProcessSection({
  title,
  subtitle,
  steps,
  theme = "light",
}: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  const isDark = theme === "dark";

  return (
    <Section
      className={
        isDark ? "bg-primary-500 text-white" : "bg-white text-primary-900"
      }
    >
      <Container>
        <div className="text-center mb-16 space-y-6">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {title.split(" ").map((word, i) => (
                <span key={i} className={i === 1 ? "text-accent-500" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h2>
            <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full mt-4" />
            <p
              className={`text-xl max-w-3xl mx-auto font-light mt-6 ${isDark ? "text-primary-100" : "text-neutral-600"}`}
            >
              {subtitle}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch min-h-[600px]">
          {/* Left Column: Stage Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative cursor-pointer p-6 rounded-3xl transition-all duration-500 border ${
                  activeStep === index
                    ? "bg-accent-500/10 border-accent-500/30 shadow-lg"
                    : "bg-transparent border-transparent hover:bg-accent-500/5"
                }`}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`text-3xl font-black transition-colors duration-500 ${
                      activeStep === index
                        ? "text-accent-500"
                        : "text-neutral-200"
                    }`}
                  >
                    0{index + 1}
                  </div>
                  <div className="space-y-1">
                    <h3
                      className={`text-xl font-bold transition-colors duration-500 ${
                        activeStep === index
                          ? isDark
                            ? "text-white"
                            : "text-primary-900"
                          : "text-neutral-400"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  {activeStep === index && (
                    <motion.div
                      layoutId="arrow"
                      className="ml-auto text-accent-500"
                    >
                      <ChevronRight size={24} />
                    </motion.div>
                  )}
                </div>

                {/* Progress bar line between steps */}
                {index < steps.length - 1 && (
                  <div className="absolute left-10 top-[100%] h-4 w-px bg-neutral-200" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Column: Active Stage Details */}
          <div className="lg:col-span-7 relative group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white">
                  <div className="space-y-6">
                    <div className="inline-block px-4 py-1 rounded-full bg-accent-500/20 backdrop-blur-md border border-accent-500/30 text-accent-400 text-xs font-bold uppercase tracking-widest">
                      Stage 0{activeStep + 1}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-lg text-primary-50 font-light leading-relaxed max-w-2xl">
                      {steps[activeStep].description}
                    </p>

                    {steps[activeStep].details && (
                      <div className="grid gap-4 pt-4">
                        {steps[activeStep].details?.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="mt-1 shrink-0">
                              <CheckCircle2
                                size={18}
                                className="text-accent-500"
                              />
                            </div>
                            <span className="text-sm md:text-base text-primary-100">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
