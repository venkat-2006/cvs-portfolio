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
      className="group relative border-b border-white/[0.08] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(139,92,246,0.07), transparent 70%)",
        }}
      />

      <div className="relative py-8 md:py-10">
        <div className="flex items-center justify-between gap-6 lg:gap-10">

          {/* Left: number + content */}
          <div className="flex gap-5 md:gap-8 items-start min-w-0">

            {/* Number */}
            <span
              className="
                shrink-0
                text-[11px] font-semibold
                uppercase tracking-[0.3em]
                text-white/20
                mt-2
                w-6
                transition-colors duration-300
                group-hover:text-white/45
              "
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {service.number}
            </span>

            {/* Text */}
            <div className="min-w-0">
              <h3
                className="
                  text-white/80 font-black
                  tracking-tight leading-none
                  text-2xl sm:text-3xl md:text-4xl xl:text-[52px]
                  transition-colors duration-300
                  group-hover:text-white
                "
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-3
                  text-[13px] sm:text-sm
                  leading-relaxed
                  text-white/35
                  max-w-lg
                  transition-colors duration-300
                  group-hover:text-white/60
                "
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-2.5 py-1
                      rounded-full
                      text-[10px] font-semibold
                      uppercase tracking-[0.2em]
                      text-white/30
                      border border-white/[0.07]
                      bg-white/[0.03]
                      transition-all duration-300
                      group-hover:text-white/55
                      group-hover:border-white/15
                    "
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: preview slides in from right — desktop only */}
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