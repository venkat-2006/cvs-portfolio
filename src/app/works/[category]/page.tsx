"use client"; // Fixed: Prevents the "Event handlers cannot be passed" crash

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { works, Work } from "@/data/works";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

// ─── PREMIUM ASYMMETRIC GRID LAYER DESIGN ENGINE ────────────────────────────
const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;500;700&display=swap');

  .cat-root {
    font-family: 'Space Grotesk', sans-serif;
    background: #050508;
    min-height: 100vh;
    width: 100%;
    color: #ffffff;
  }

  .cat-noise {
    position: absolute;
    inset: 0;
    opacity: 0.015;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noiseFilter'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3e%3c/svg%3e");
    pointer-events: none;
    z-index: 1;
  }

  .cat-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 48px;
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    .cat-container { padding: 0 24px; }
  }

  .cat-title {
    font-family: 'Bebas Neue', sans-serif;
    line-height: 0.85;
    letter-spacing: -0.01em;
    text-transform: uppercase;
  }

  .cat-back-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    color: rgba(255, 255, 255, 0.4);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    margin-bottom: 40px;
    text-decoration: none;
  }
  .cat-back-btn:hover {
    color: #a78bfa;
    transform: translate3d(-4px, 0, 0);
  }

  .subgroup-header {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(32px, 4vw, 56px);
    letter-spacing: 0.02em;
    color: #ffffff;
    text-transform: uppercase;
    border-left: 3px solid #a78bfa;
    padding-left: 16px;
    margin-bottom: 32px;
    text-align: left;
  }

  .premium-img-card {
    position: relative;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(20, 20, 25, 0.5);
    overflow: hidden;
    aspect-ratio: 16 / 9;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .premium-img-card:hover {
    transform: translate3d(0, -6px, 0) scale(1.01);
    border-color: rgba(167, 139, 250, 0.4);
    box-shadow: 0 25px 50px rgba(147, 51, 234, 0.15);
  }

  .card-img-element {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .premium-img-card:hover .card-img-element {
    transform: scale(1.05);
  }

  .card-shine-overlay {
    position: absolute;
    inset: 0;
    z-index: 3;
    pointer-events: none;
    opacity: 0;
    background: linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.15) 50%, transparent 70%);
    transform: translate3d(-100%, 0, 0);
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
  }
  .premium-img-card:hover .card-shine-overlay {
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }

  .card-info-shelf {
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, #09090c 0%, rgba(9,9,12,0.4) 50%, transparent 100%);
    display: flex;
    align-items: flex-end;
    padding: 24px;
    z-index: 2;
    opacity: 0.9;
    transition: opacity 0.4s ease;
  }
  .premium-img-card:hover .card-info-shelf {
    opacity: 1;
  }
`;

export default function CategoryPage({ params }: Props) {
  // In Client Components, we unwrap async params using React.use()
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category;
  
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const currentCategoryWorks = works.filter((w) => w.category === categorySlug);

  // Group works under unique games/subheadings
  const groupedWorks: { [key: string]: Work[] } = {};
  currentCategoryWorks.forEach((work) => {
    if (!groupedWorks[work.gameOrSub]) {
      groupedWorks[work.gameOrSub] = [];
    }
    groupedWorks[work.gameOrSub].push(work);
  });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      
      <Navbar />

      <div className="cat-root relative">
        <div className="cat-noise" />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-purple-600/[0.03] blur-[150px] pointer-events-none z-0" />

        <header className="relative pt-44 md:pt-52 pb-16">
          <div className="cat-container">
            <Link href="/#showcase" className="cat-back-btn">
              <span>←</span> Return to Hub
            </Link>

            <p className="uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold text-purple-400/80 mb-4">
              Creative Segment Database
            </p>

            <h1 className="cat-title font-black text-[56px] sm:text-[88px] lg:text-[140px] tracking-tight text-left">
              {category.title}
            </h1>

            <p className="mt-6 max-w-2xl text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed text-left">
              {category.description}
            </p>
          </div>
        </header>

        <main className="pb-40">
          <div className="cat-container">
            {Object.keys(groupedWorks).length > 0 ? (
              Object.keys(groupedWorks).map((subGroupTitle) => (
                <div key={subGroupTitle} className="mb-20 w-full">
                  
                  <h2 className="subgroup-header">{subGroupTitle}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {groupedWorks[subGroupTitle].map((work) => (
                      <div key={work.id} className="premium-img-card group">
                        
                        <div className="card-shine-overlay" />

                        <img
                          src={work.image}
                          alt={`${work.title} preview`}
                          className="card-img-element"
                          onError={(e) => {
                            // Safely handles the fallback template if the image returns a 404 error
                            e.currentTarget.onerror = null; 
                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 16 9'%3E%3Crect width='100%25' height='100%25' fill='%230f0f14'/%3E%3C/svg%3E";
                          }}
                        />

                        <div className="card-info-shelf text-left">
                          <div className="w-full flex flex-col gap-1">
                            <h3 className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
                              {work.title}
                            </h3>
                            <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">
                              Production Asset Pack
                            </span>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>

                </div>
              ))
            ) : (
              <div className="text-left py-20 border-l border-white/10 pl-8 max-w-xl">
                <h2 className="text-xl font-bold tracking-tight text-zinc-400">No logs categorized</h2>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  There are currently no active production entries linked to this tracking node.
                </p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}