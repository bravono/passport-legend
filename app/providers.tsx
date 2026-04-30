"use client";

import { ThemeProvider } from "next-themes";
import { PageTransition } from "@/components/PageTransition";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <PageTransition>{children}</PageTransition>
    </ThemeProvider>
  );
}
