"use client";

import React from "react";

type Props = {
  image: string;
  title: string;
  visible: boolean;
};

export default function ServicePreview({ image, title, visible }: Props) {
  return (
    <div
      className="
        relative
        w-[320px] xl:w-[400px]
        aspect-[16/10]
        rounded-2xl
        overflow-hidden
        border
        bg-zinc-950
        shrink-0
        box-shadow-[0_30px_60px_rgba(0,0,0,0.8)]
      "
      style={{
        borderColor: visible ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.05)",
        opacity: visible ? 1 : 0,
        transform: visible 
          ? "translate3d(0, 0, 0) scale(1) rotate(0deg)" 
          : "translate3d(30px, 0, 0) scale(0.95) rotate(1deg)",
        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <img
        src={image}
        alt={`${title} capability preview artwork illustration`}
        className="w-full h-full object-cover"
        style={{
          transform: visible ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onError={(e) => {
          // Absolute premium dark-room canvas matrix protection layer fallback if the path 404s
          e.currentTarget.onerror = null;
          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 16 10'%3E%3Crect width='100%25' height='100%25' fill='%230b0b0e'/%3E%3C/svg%3E";
        }}
      />

      {/* High-End Linear Dynamic Specular Shimmer Veil Overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-500"
        style={{
          opacity: visible ? 1 : 0.4,
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 50%, rgba(0, 0, 0, 0.5) 100%)",
        }}
      />
      
      {/* Inner ambient vignette shadow mask protection layout */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]" />
    </div>
  );
}