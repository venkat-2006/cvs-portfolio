"use client";

import { useState } from "react";
import type { Service } from "@/data/services";
import ServicePreview from "./ServicePreview";

type Props = {
  service: Service;
  index: number;
};

export default function ServiceCard({ service, index }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative border-b border-white/[0.06] cursor-pointer transition-all duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Dynamic Surface Under-Glow Radial Blast */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 50%, rgba(167, 139, 250, 0.04), transparent 60%)",
        }}
      />

      {/* Main Structural Content Carriage */}
      <div className="relative py-10 md:py-14 pl-1 sm:pl-3 transition-all duration-500 transform group-hover:translate-x-2">
        <div className="flex items-center justify-between gap-6 lg:gap-12">

          {/* Left Block: Numerical Tag + Detail Text Core */}
          <div className="flex gap-4 sm:gap-6 md:gap-12 items-start min-w-0">

            {/* Micro Monospace Index Badge */}
            <span
              className="
                shrink-0
                text-[11px] sm:text-xs font-bold
                tracking-[0.2em]
                text-white/15
                mt-1.5 md:mt-3.5
                transition-colors duration-400
                group-hover:text-purple-400/60
              "
              style={{ fontFamily: "monospace" }}
            >
              [0{index + 1}]
            </span>

            {/* Typography Asset Column */}
            <div className="min-w-0 text-left">
              
              {/* FIXED: Added tracking-[0.03em] to give the letters breathing room */}
              <h3
                className="
                  text-white/70 font-black
                  uppercase
                  text-3xl sm:text-4xl md:text-5xl xl:text-[56px]
                  leading-[1.1] sm:leading-[1]
                  tracking-[0.03em]
                  transition-colors duration-400
                  group-hover:text-white
                "
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-3.5
                  text-xs sm:text-sm
                  leading-relaxed
                  text-zinc-500
                  max-w-xl
                  font-normal
                  transition-colors duration-400
                  group-hover:text-zinc-300
                "
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {service.description}
              </p>

              {/* Tag Capsule Array Track */}
              <div className="flex flex-wrap gap-2 mt-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-3.5 py-1.5
                      rounded-full
                      text-[9px] font-bold
                      uppercase tracking-[0.2em]
                      text-white/25
                      border border-white/[0.05]
                      bg-white/[0.01]
                      backdrop-blur-md
                      transition-all duration-400
                      group-hover:text-purple-300
                      group-hover:border-purple-500/30
                      group-hover:bg-purple-500/[0.02]
                    "
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block: Studio Render Slider Shield */}
          <div className="hidden lg:block shrink-0">
            <ServicePreview
              image={service.image}
              title={service.title}
              visible={hovered}
            />
          </div>

        </div>
      </div>
    </div>
  );
}