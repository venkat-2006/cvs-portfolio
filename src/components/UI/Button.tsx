"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export default function Button({ children, href, onClick }: Props) {
  const baseStyles = `
    group
    relative
    overflow-hidden
    inline-flex
    items-center
    justify-center
    gap-4
    min-w-[180px]
    h-[72px]
    px-8
    rounded-full
    text-white
    font-semibold
    text-base
    md:text-lg
    bg-purple-900
    border
    border-purple-700/50
    shadow-[0_0_25px_rgba(88,28,135,0.5),0_0_50px_rgba(88,28,135,0.25),inset_0_0_20px_rgba(59,7,100,0.4)]
    hover:bg-purple-800
    hover:border-purple-600/50
    hover:shadow-[0_0_35px_rgba(88,28,135,0.7),0_0_70px_rgba(88,28,135,0.35),inset_0_0_25px_rgba(59,7,100,0.3)]
    hover:scale-[1.03]
    transition-all
    duration-300
    cursor-pointer
    select-none
  `;

  const renderContent = () => (
    <>
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
        via-white/10
        to-transparent
        "
      />
      <span className="relative z-10 whitespace-nowrap">
        {children}
      </span>
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

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {renderContent()}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {renderContent()}
    </button>
  );
}