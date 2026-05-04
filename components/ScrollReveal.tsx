"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up"
}: ScrollRevealProps) {
  const getInitialState = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 40 };
      case "down": return { opacity: 0, y: -40 };
      case "left": return { opacity: 0, x: 40 };
      case "right": return { opacity: 0, x: -40 };
      case "none": return { opacity: 0 };
      default: return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      initial={getInitialState()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
