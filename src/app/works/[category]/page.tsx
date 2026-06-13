"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { works } from "@/data/works";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default function CategoryPage({ params }: Props) {
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category;
  
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const currentCategoryWorks = works.filter((w) => w.category === categorySlug);
  const isPortraitCategory = categorySlug === 'insta-covers';

  return (
    <div className="min-h-screen bg-[#030305] text-white relative selection:bg-purple-500/30 overflow-x-hidden">
      {/* Background aesthetic noise & underglow */}
      <div 
        className="absolute inset-0 opacity-[0.012] mix-blend-overlay pointer-events-none z-1" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noise'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noise)'/%3e%3c/svg%3e")`
        }}
      />
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] rounded-full bg-purple-600/[0.015] blur-[200px] pointer-events-none z-0" />
      
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Premium Large Header Block with Increased Spacing */}
        <header className="pt-44 md:pt-52 pb-16 border-b border-white/[0.03] mb-16">
          
          {/* Attatractive, Premium High-End Return Button */}
          <div className="mb-20">
  <Link
    href="/#showcase"
    className="group relative inline-flex items-center gap-6 overflow-hidden rounded-full border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-white/[0.01] px-8 py-5 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-purple-500/40 hover:shadow-[0_20px_50px_rgba(147,51,234,0.15),inset_0_1px_20px_rgba(255,255,255,0.05)] will-change-transform"
  >
    {/* Ambient Interactive Background Radial Aura */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none">
      <div className="absolute -inset-10 bg-[radial-gradient(circle_at_left,rgba(139,92,246,0.15),transparent_45%)]" />
      <div className="absolute -inset-10 bg-[radial-gradient(circle_at_right,rgba(168,85,247,0.05),transparent_40%)]" />
    </div>

    {/* Luxury Premium Diagonal Shimmer Layer */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="w-full h-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full duration-1000 ease-out transition-transform" />
    </div>

    {/* Left Icon: Elevated Glass Arrow Badge */}
    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] shadow-[inner_0_1px_2px_rgba(255,255,255,0.1)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 group-hover:shadow-[0_0_15px_rgba(147,51,234,0.2)]">
      <span className="text-base font-light text-white/80 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-0.5">
        ←
      </span>
    </div>

    {/* High-End Typography Hub Stack */}
    <div className="relative z-10 flex flex-col items-start gap-0.5">
      <span
        className="text-[9px] font-black uppercase text-purple-400/70 tracking-[0.45em] transition-colors duration-500 group-hover:text-purple-300"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        Navigation Node
      </span>

      <span
        className="text-base font-bold tracking-tight text-white/85 transition-colors duration-500 group-hover:text-white"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        Return to Showcase
      </span>
    </div>

    {/* Right Icon: Slide Indicator Arrow */}
    <span className="relative z-10 ml-4 text-lg font-light text-white/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 group-hover:text-purple-400/80">
      
    </span>
  </Link>
</div>
<div className="h-2"></div>

          <p className="uppercase tracking-[0.5em] text-[11px] font-black text-purple-400/80 mb-5">
            Creative Segment Database
          </p>

          {/* Expanded Massive Screen-Shaking Typography */}
          <h1 className="font-black text-6xl sm:text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.85] font-sans text-left">
            {category.title}
          </h1>

          <p className="mt-8 max-w-2xl text-zinc-400 text-sm sm:text-base leading-relaxed text-left opacity-90">
            {category.description}
          </p>
          <div className="h-2"></div>
        </header>

        {/* Dense Premium Grid Layout */}
        <main className="pb-40">
          {currentCategoryWorks.length > 0 ? (
            <div 
              className={`grid gap-3 w-full justify-start ${
                isPortraitCategory 
                  ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" 
                  : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              }`}
            >
              {currentCategoryWorks.map((work) => (
                <div 
                  key={work.id} 
                  className={`group relative w-full bg-[#07070a] border border-white/[0.05] rounded-lg overflow-hidden shadow-md transition-all duration-500 cubic-bezier(0.25, 1, 0.2, 1) hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_12px_24px_rgba(0,0,0,0.8),0_0_20px_rgba(139,92,246,0.28)] will-change-transform ${
                    isPortraitCategory 
                      ? "aspect-[9/16] max-w-[240px]" 
                      : "aspect-[16/9] max-w-[340px]"
                  }`}
                  title={work.title}
                >
                  {/* Lightning sweep hover effect */}
                  <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/[0.22] to-transparent -translate-x-full group-hover:translate-x-full duration-700 ease-out" style={{ transitionProperty: 'transform' }} />
                  
                  {/* Anchoring vignette layer */}
                  <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.45)_100%)]" />

                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-[1.025] transition-transform duration-500 ease-out"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null; 
                      e.currentTarget.src = isPortraitCategory 
                        ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='16'%3E%3Crect width='100%25' height='100%25' fill='%2307070a'/%3E%3C/svg%3E"
                        : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='9'%3E%3Crect width='100%25' height='100%25' fill='%2307070a'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 border-l border-white/10 pl-8 max-w-xl text-left">
              <h2 className="text-xl font-bold tracking-tight text-zinc-500">No logs categorized</h2>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                There are currently no active production entries linked to this tracking node.
              </p>
            </div>
          )}
        </main>

      </div>

      <Footer />
    </div>
  );
}