"use client";

import { Star } from "lucide-react";

interface CountryImageProps {
  src: string;
  alt: string;
}

export function CountryImage({ src, alt }: CountryImageProps) {
  return (
    <div className="relative group">
      {/* Decorative Background Elements - Soft Glows */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />

      {/* Floating Badge - Social Proof */}
      <div className="absolute top-0 right-0 py-4 px-6 bg-white dark:bg-neutral-900 shadow-2xl rounded-2xl border border-neutral-100 dark:border-neutral-800 z-20 translate-x-6 -translate-y-6 group-hover:translate-x-8 group-hover:-translate-y-8 transition-all duration-500 hidden sm:block">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white dark:border-neutral-900 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 15}`}
                  alt="user"
                />
              </div>
            ))}
          </div>
          <div className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400 leading-tight uppercase tracking-tighter">
            <span className="text-accent-600 dark:text-accent-400">800+</span>{" "}
            <br /> Success Stories
          </div>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative aspect-[4/5] md:aspect-[3/4] w-full">
        {/* Layered Decorative Cards */}
        <div className="absolute inset-x-4 -bottom-4 h-full bg-accent-500/15 rounded-[2.5rem] transform rotate-3 transition-transform duration-700 group-hover:rotate-2 group-hover:translate-y-1" />
        <div className="absolute inset-x-8 -bottom-8 h-full bg-primary-500/10 rounded-[2.5rem] transform -rotate-2 transition-transform duration-700 group-hover:-rotate-1 group-hover:translate-y-1" />

        {/* The Frame and Image */}
        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-neutral-950 shadow-2xl bg-white dark:bg-neutral-900 transition-all duration-700 group-hover:translate-y-[-8px]">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />

          {/* Overlay Gradients for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-700" />

          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_80px_rgba(0,0,0,0.3)] pointer-events-none" />

          {/* On-Image Labels */}
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-[1px] w-8 bg-accent-500" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent-400">
                Premium Destination
              </span>
            </div>
            <h4 className="text-2xl font-bold tracking-tight mb-2 font-serif">
              {alt}
            </h4>
            <div className="flex items-center gap-1 text-accent-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
              <span className="text-[10px] font-bold ml-2 text-white/70 uppercase tracking-widest">
                Global Standard
              </span>
            </div>
          </div>
        </div>

        {/* Decorative Corner Dots */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(var(--color-accent-500)_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
      </div>
    </div>
  );
}
