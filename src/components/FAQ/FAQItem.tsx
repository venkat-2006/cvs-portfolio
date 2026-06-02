"use client";

import React from "react";

type FAQItemProps = {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div
      onClick={onToggle}
      className={`group w-full rounded-[32px] border bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer select-none ${
        isOpen
          ? "border-purple-500/40 bg-white/[0.04] shadow-[0_0_40px_rgba(168,85,247,0.15)]"
          : "border-white/10 hover:border-white/20 hover:bg-white/[0.03] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
      }`}
    >
      <div className="flex items-center justify-between gap-6">
        <h3
          className={`text-base sm:text-lg font-medium tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1 ${
            isOpen ? "text-purple-300" : "text-zinc-200"
          }`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {question}
        </h3>
        
        {/* Vector Micro-Arrow Indicator Element */}
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen
              ? "border-purple-400 bg-purple-500/20 text-purple-300 rotate-180"
              : "border-white/10 text-zinc-400 group-hover:border-white/30 group-hover:text-white"
          }`}
        >
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Smooth height expand and structural fade wrapper animation */}
      <div
        className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? "16px" : "0px",
        }}
      >
        <div className="overflow-hidden">
          <p
            className="text-sm sm:text-base text-zinc-400 leading-relaxed pr-4 sm:pr-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}