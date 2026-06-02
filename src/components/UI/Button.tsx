"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
  href?: string; // Optional prop to support single-page smooth scrolling
  onClick?: () => void;
};

export default function Button({ children, href, onClick }: Props) {
  // Shared premium Tailwind styling classes matrix
  const baseStyles = `
    group
    relative
    overflow-hidden
    inline-flex
    items-center
    justify-center
    gap-4
    min-w-[220px]
    px-10
    py-5
    rounded-full
    bg-white/10
    backdrop-blur-2xl
    border
    border-white/15
    text-white
    font-semibold
    text-base
    md:text-lg
    shadow-[0_0_30px_rgba(255,255,255,0.05)]
    hover:bg-white/15
    hover:border-white/30
    hover:scale-[1.02]
    transition-all
    duration-300
    cursor-pointer
    select-none
  `;

  // Internal component sub-elements (Shine ray + Content + Arrow Icon)
  const renderContent = () => (
    <>
      {/* Shine Effect */}
      <span
        className="
        absolute
        inset-0
        -translate-x-full
        group-hover:translate-x-full
        transition-transform
        duration-1000
        bg-gradient-to-r
        from-transparent
        via-white/20
        to-transparent
        "
      />

      {/* Text */}
      <span className="relative z-10 whitespace-nowrap">
        {children}
      </span>

      {/* Arrow */}
      <ArrowRight
        size={22}
        className="
        relative
        z-10
        transition-transform
        duration-300
        group-hover:translate-x-1
        "
      />
    </>
  );

  // OPTION A: If an href string layout value is passed, render a valid semantic <a> anchor link
  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {renderContent()}
      </a>
    );
  }

  // OPTION B: Fallback to a standard native operational button element form
  return (
    <button onClick={onClick} className={baseStyles}>
      {renderContent()}
    </button>
  );
}