"use client";

import React from "react";
import Link from "next/link";
import type { Category } from "@/data/categories";

// Extra extension interface parameter to accept layout tracking indices
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
  
  // Creates organic layout variations across grid structures
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
          box-shadow-[0_20px_45px_rgba(0,0,0,0.5)]
          transition-all
          duration-600
          ease-[cubic-bezier(0.16,1,0.3,1)]
          hover:border-purple-500/30
          hover:shadow-[0_30px_60px_-15px_rgba(147,51,234,0.2)]
        "
      >
        {/* Matte Background SVG Noise Layer */}
        <div 
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Ambient Deep Core Studio Light Glow */}
        <div
          className="
            absolute
            inset-0
            opacity-20
            group-hover:opacity-40
            scale-100
            group-hover:scale-110
            transition-all
            duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]
            z-0
          "
          style={{
            background:
              "radial-gradient(circle at 50% 100%, rgba(147,51,234,0.3) 0%, transparent 60%)",
          }}
        />

        {/* Premium Linear Specular Sweep Shine Ray Overlay */}
        <div
          className="
            absolute
            inset-0
            z-20
            pointer-events-none
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]
            bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.08)_50%,transparent_70%)]
            -translate-x-full
            group-hover:translate-x-full
          "
        />

        {/* Outer Vignette Darkening Boundary Shroud Mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-10 pointer-events-none" />

        {/* Floating Metrics Micro Index Token Badge */}
        <div
          className="
            absolute
            top-6
            left-6
            z-20
            px-4
            py-1.5
            rounded-full
            border
            border-white/10
            bg-zinc-950/60
            backdrop-blur-md
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-zinc-400
            group-hover:text-purple-300
            group-hover:border-purple-500/20
            transition-colors
            duration-400
          "
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {count} Logs Compiled
        </div>

        {/* Dynamic Structural Inner Data Frame Base */}
        <div
          className="
            absolute
            inset-0
            z-20
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-8
            sm:px-12
          "
        >
          {/* Master Compressed Core Title Header */}
          <h3
            className="
              text-white/80
              leading-none
              uppercase
              tracking-[0.04em]
              transition-all
              duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:text-white
              group-hover:scale-[1.02]
            "
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(48px, 5.5vw, 76px)",
            }}
          >
            {title}
          </h3>

          {/* Fully Spaced Descriptive Parameter Copy Block */}
          <p 
            className="
              mt-4 
              text-zinc-500 
              text-xs 
              sm:text-sm 
              leading-relaxed 
              max-w-[90%]
              font-normal
              transition-colors
              duration-500
              group-hover:text-zinc-300
            "
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {description}
          </p>

          {/* Action Module Interactive Progress Pill Button */}
          <div
            className="
              mt-8
              w-[160px]
              h-[48px]
              rounded-full
              border
              border-white/10
              bg-white/[0.02]
              backdrop-blur-md
              flex
              items-center
              justify-center
              gap-2
              text-white/40
              text-[11px]
              font-bold
              uppercase
              tracking-[0.22em]
              transition-all
              duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:bg-purple-500/10
              group-hover:border-purple-500/40
              group-hover:text-purple-200
              group-hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]
            "
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span>Explore</span>
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transform transition-transform duration-400 group-hover:translate-x-1"
            >
              <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

      </article>
    </Link>
  );
}