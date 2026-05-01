import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-neutral-200/60 bg-white/50 p-6 backdrop-blur-sm transition-all duration-500 ease-smooth dark:border-neutral-700/50 dark:bg-neutral-800/50 md:p-8",
        hover &&
          "shadow-premium hover:-translate-y-2 hover:border-primary-500/50 hover:shadow-premium-hover dark:hover:border-primary-400/50",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
