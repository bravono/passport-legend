import React from "react";
import { cn } from "@/lib/utils/cn";

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

const categoryStyles: Record<string, string> = {
  Citizenship: "bg-primary-50 text-primary-700",
  Residency: "bg-accent-50 text-accent-700",
  Investment: "bg-emerald-50 text-emerald-700",
  Lifestyle: "bg-amber-50 text-amber-700",
  Travel: "bg-sky-50 text-sky-700",
  News: "bg-slate-100 text-slate-700",
  General: "bg-gray-100 text-gray-700",
};

export default function CategoryBadge({
  category,
  className,
}: CategoryBadgeProps) {
  const style = categoryStyles[category] || "bg-gray-100 text-gray-700";

  return (
    <span
      className={cn(
        "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300",
        style,
        className,
      )}
    >
      {category}
    </span>
  );
}
