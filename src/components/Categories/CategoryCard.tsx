"use client";

import React from "react";
import Link from "next/link";
import type { Category } from "@/data/categories";

interface EnhancedCardProps extends Category {
  index: number;
}

export default function CategoryCard({
  slug,
  title,
  description,
  count,
  index,
}: EnhancedCardProps) {

  const dynamicRotations = [
    "hover:rotate-1 hover:scale-[1.015]",
    "hover:-rotate-1 hover:scale-[1.015]",
    "hover:rotate-[-1.5deg] hover:scale-[1.015]",
    "hover:rotate-[1.5deg] hover:scale-[1.015]",
  ];

  const activeRotation = dynamicRotations[index % dynamicRotations.length];

  return (
    <Link
      href={`/works/${slug}`}
      className={`group block w-full focus-visible:outline-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeRotation}`}
    >
      <article
        className="
          relative
          h-[360px]
          md:h-[400px]
          w-full
          overflow-hidden
          rounded-[32px]
          border
          border-white/[0.08]
          bg-[#0c0c10]
          backdrop-blur-xl
          -webkit-backdrop-blur-xl
          transition-all
          duration-600
          ease-[cubic-bezier(0.16,1,0.3,1)]
          hover:border-purple-500/30
          hover:shadow-[0_30px_60px_-15px_rgba(147,51,234,0.2)]
        "
      >
        {/* Noise Layer */}
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Glow */}
        <div
          className="
            absolute inset-0 opacity-20
            group-hover:opacity-40 scale-100
            group-hover:scale-110
            transition-all duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)] z-0
          "
          style={{
            background:
              "radial-gradient(circle at 50% 100%, rgba(147,51,234,0.3) 0%, transparent 60%)",
          }}
        />

        {/* Shine Sweep */}
        <div
          className="
            absolute inset-0 z-20 pointer-events-none
            opacity-0 group-hover:opacity-100
            transition-all duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]
            bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.08)_50%,transparent_70%)]
            -translate-x-full group-hover:translate-x-full
          "
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-10 pointer-events-none" />

        {/* Count Badge */}
        <div
          className="
            absolute top-6 left-6 z-20
            px-4 py-1.5 rounded-full
            border border-white/10
            bg-zinc-950/60 backdrop-blur-md
            text-[10px] font-bold uppercase tracking-[0.2em]
            text-zinc-400
            group-hover:text-purple-300
            group-hover:border-purple-500/20
            transition-colors duration-400
          "
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {count} Works
        </div>

        {/* Content */}
        <div
          className="
            absolute inset-0 z-20
            flex flex-col items-center justify-center
            text-center px-8 sm:px-12
          "
        >
          {/* Title */}
          <h3
            className="
              text-white/80 leading-none uppercase tracking-[0.04em]
              transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:text-white group-hover:scale-[1.02]
              w-full
            "
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(24px, 3.8vw, 56px)",
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="
              mt-3 text-zinc-500 text-[11px] sm:text-xs
              leading-relaxed max-w-[90%] font-normal
              transition-colors duration-500
              group-hover:text-zinc-300
            "
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {description}
          </p>

          {/* Explore Button */}
          <div
            className="
              mt-7 w-[148px] h-[44px] rounded-full
              border border-white/10 bg-white/[0.02] backdrop-blur-md
              flex items-center justify-center gap-2
              text-white/40 text-[10px] font-bold uppercase tracking-[0.22em]
              transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:bg-purple-500/10
              group-hover:border-purple-500/40
              group-hover:text-purple-200
              group-hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]
            "
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span>Explore</span>
            <svg
              width="11"
              height="11"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform transition-transform duration-400 group-hover:translate-x-1"
            >
              <path
                d="M2 6H10M10 6L6 2M10 6L6 10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}