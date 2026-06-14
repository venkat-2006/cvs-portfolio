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
    slug: string; // ← must match the folder name [slug]
  }>;
};

export default function CategoryPage({ params }: Props) {
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.slug; // ← updated from .category

  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const currentCategoryWorks = works.filter((w) => w.category === categorySlug);
  const isPortraitCategory = categorySlug === "insta-covers";

  const titleWords = category.title.split(" ");
  const firstWord = titleWords[0];
  const restWords = titleWords.slice(1).join(" ");

  return (
    <div className="min-h-screen bg-[#030305] text-white relative selection:bg-purple-500/30 overflow-x-hidden">

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.012] mix-blend-overlay pointer-events-none z-1"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noise'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noise)'/%3e%3c/svg%3e")`,
        }}
      />

      {/* Ambient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-purple-700/[0.07] blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-purple-600/[0.03] blur-[200px] pointer-events-none z-0" />

      <Navbar />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 relative z-10">

        <header className="pt-44 md:pt-52 pb-16 mb-16">

          {/* Back Button */}
          <div className="mb-16">
            <Link
              href="/#showcase"
              className="group relative inline-flex items-center gap-5 overflow-hidden rounded-full border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-white/[0.01] px-7 py-4 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-purple-500/40 hover:shadow-[0_20px_50px_rgba(147,51,234,0.15)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute -inset-10 bg-[radial-gradient(circle_at_left,rgba(139,92,246,0.15),transparent_45%)]" />
              </div>
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] transition-all duration-500 group-hover:-translate-x-0.5 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 group-hover:shadow-[0_0_15px_rgba(147,51,234,0.2)]">
                <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">←</span>
              </div>
              <div className="relative z-10 flex flex-col items-start gap-0.5">
                <span className="text-[9px] font-black uppercase text-purple-400/70 tracking-[0.45em] transition-colors duration-500 group-hover:text-purple-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Navigation
                </span>
                <span className="text-sm font-semibold tracking-tight text-white/80 transition-colors duration-500 group-hover:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Return to Showcase
                </span>
              </div>
              <span className="relative z-10 ml-2 text-base text-white/20 transition-all duration-500 group-hover:translate-x-1 group-hover:text-purple-400/80">›</span>
            </Link>
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8 bg-purple-500/50" />
            <p className="uppercase tracking-[0.5em] text-[10px] font-black text-purple-400/60" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Creative Segment
            </p>
          </div>

          {/* Title Block */}
          <div className="relative mb-10 overflow-visible">
            <span
              aria-hidden="true"
              className="absolute -top-6 -left-3 select-none pointer-events-none uppercase text-white/[0.025] leading-none tracking-tighter"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(100px, 18vw, 260px)" }}
            >
              {firstWord}
            </span>

            {restWords && (
              <p
                className="relative text-purple-400/70 mb-1 leading-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "clamp(18px, 2.2vw, 32px)", letterSpacing: "0.01em" }}
              >
                — the art of
              </p>
            )}

            <h1
              className="relative leading-[0.85] uppercase tracking-tighter"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(64px, 10vw, 148px)",
                background: "linear-gradient(160deg, #ffffff 0%, rgba(255,255,255,0.75) 50%, rgba(168,85,247,0.9) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {firstWord}
            </h1>

            {restWords && (
              <h1
                className="relative leading-tight mt-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 4vw, 64px)", color: "rgba(255,255,255,0.55)", letterSpacing: "-0.01em" }}
              >
                {restWords}
              </h1>
            )}

            {!restWords && (
              <p
                className="relative mt-2 leading-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(16px, 2vw, 28px)", color: "rgba(168,85,247,0.6)", letterSpacing: "0.02em" }}
              >
                — a curated collection
              </p>
            )}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-purple-500/50 to-transparent" />
            <div className="w-1 h-1 rounded-full bg-purple-400/50" />
            <div className="h-px w-4 bg-white/5" />
          </div>

          {/* Description */}
          <p className="max-w-xl text-zinc-400 text-sm leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {category.description}
          </p>

          {/* Stats pill */}
          <div className="flex items-center gap-5 mt-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-md" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                {currentCategoryWorks.length} Works
              </span>
            </div>
            <span className="text-[11px] text-zinc-700 uppercase tracking-[0.2em]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {category.title} Collection
            </span>
          </div>

          <div className="mt-12 h-px w-full bg-gradient-to-r from-purple-500/20 via-white/[0.04] to-transparent" />
        </header>

        {/* Grid */}
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
                  className={`group relative w-full bg-[#07070a] border border-white/[0.05] rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_12px_24px_rgba(0,0,0,0.8),0_0_20px_rgba(139,92,246,0.28)] will-change-transform ${
                    isPortraitCategory ? "aspect-[9/16] max-w-[240px]" : "aspect-[16/9] max-w-[340px]"
                  }`}
                  title={work.title}
                >
                  <div
                    className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/[0.22] to-transparent -translate-x-full group-hover:translate-x-full ease-out"
                    style={{ transitionProperty: "transform, opacity", transitionDuration: "700ms" }}
                  />
                  <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.45)_100%)]" />
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-[1.025] transition-transform duration-500 ease-out"
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
            <div className="py-20 border-l border-white/10 pl-8 max-w-xl">
              <h2 className="text-xl font-bold tracking-tight text-zinc-500">No works found</h2>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                There are currently no entries linked to this category.
              </p>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}