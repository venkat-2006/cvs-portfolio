import React from "react";

export default function FooterCTA() {
  return (
    <div className="w-full border-b border-white/[0.03] pb-16 md:pb-24 text-center overflow-hidden select-none">
      <h2
        className="text-white font-black uppercase leading-[0.85] tracking-tighter text-center mx-auto"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(48px, 9.5vw, 140px)",
        }}
      >
        Let&apos;s Create <br />
        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-[length:200%_auto] animate-[shine-sweep_5s_linear_infinite] bg-clip-text text-transparent">
          Something Exceptional
        </span>
      </h2>
    </div>
  );
}