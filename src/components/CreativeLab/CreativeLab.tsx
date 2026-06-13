"use client";

import React, { useState } from "react";
import Image from "next/image";

// ─── TYPES & DATA STRUCTURES ────────────────────────────────────────────────
type LabCard = {
  title: string;
  before: string;
  after: string;
  tag: string;
};

const cards: LabCard[] = [
  {
    title: "Documentary Transformation",
    before: "/images/BeforeAfter/documentary-before.png",
    after: "/images/BeforeAfter/documentary-after.png",
    tag: "Storytelling",
  },
  {
    title: "Cinematic Transformation",
    before: "/images/BeforeAfter/filmy-before-1.png",
    after: "/images/BeforeAfter/filmy-after-1.png",
    tag: "Entertainment",
  },
  {
    title: "Gaming Transformation",
    before: "/images/BeforeAfter/gaming-before-1.png",
    after: "/images/BeforeAfter/gaming-after-1.png",
    tag: "Engagement",
  },
  {
    title: "Podcast Transformation",
    before: "/images/BeforeAfter/podcast-before.png",
    after: "/images/BeforeAfter/podcast-after.png",
    tag: "Personal Branding",
  },
];

// ─── INTEGRATED DESIGN CSS STYLES ───────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;500;700&display=swap');

  :root {
    --lab-bg: #050505;
    --lab-surface: rgba(14, 14, 18, 0.65);
    --lab-border: rgba(255, 255, 255, 0.06);
    --lab-accent: #a78bfa;
    --lab-muted: rgba(255, 255, 255, 0.45);
  }

  .cl-root {
    background: var(--lab-bg);
    min-height: 100vh;
    font-family: 'Space Grotesk', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 120px 0;
    position: relative;
    width: 100%;
  }

  .cl-section {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .cl-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(140px);
    pointer-events: none;
    z-index: 0;
    opacity: 0.55;
    width: 700px; height: 700px;
    background: radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 70%);
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }

  .cl-head {
    text-align: center;
    margin-bottom: 80px;
    max-width: 600px;
    width: 100%;
  }
  .cl-head__eyebrow {
    font-size: 11px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: var(--lab-accent);
    margin-bottom: 18px;
    font-weight: 700;
  }
  .cl-head__title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(48px, 7.5vw, 84px);
    line-height: 0.9;
    letter-spacing: 0.02em;
    color: #ffffff;
    margin-bottom: 22px;
  }
  .cl-head__sub {
    font-size: clamp(14px, 1.6vw, 16px);
    color: var(--lab-muted);
    line-height: 1.6;
  }

  .cl-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 56px 48px;
    width: 100%;
    max-width: 1200px;
  }

  @media (max-width: 900px) {
    .cl-grid {
      grid-template-columns: 1fr;
      gap: 48px;
    }
  }

  .cl-card-space {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    perspective: 2000px;
  }

  .cl-paper-backlayer {
    position: absolute;
    inset: 12px -4px -4px 12px;
    background: rgba(20, 20, 25, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.01);
    border-radius: 20px;
    transform: rotate(-1.5deg);
    z-index: 1;
    pointer-events: none;
    box-shadow: 0 10px 35px rgba(0,0,0,0.5);
    transition: transform 0.6s ease;
  }
  .cl-card-space:hover .cl-paper-backlayer {
    transform: rotate(-2.5deg) scale(0.99);
  }

  .cl-flipper {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 2;
  }

  .cl-flipper--flipped {
    transform: rotateY(180deg);
  }

  .cl-face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 20px;
    overflow: hidden;
  }

  .cl-face--back {
    transform: rotateY(180deg);
  }

  .cl-paper-main {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--lab-surface);
    border: 1px solid var(--lab-border);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
  }

  .cl-pin-container {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    pointer-events: none;
    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
    width: 32px;
    height: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cl-card-space:hover .cl-pin-container {
    transform: translateX(-50%) translateY(-2px) rotate(6deg);
  }

  .cl-pin-head {
    width: 20px;
    height: 16px;
    background: radial-gradient(circle at 35% 35%, rgba(244, 63, 94, 0.95) 0%, rgba(190, 18, 60, 0.95) 70%, rgba(159, 18, 57, 1) 100%);
    border-radius: 6px 6px 4px 4px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow:
      inset 0 3px 5px rgba(255, 255, 255, 0.4),
      inset 0 -2px 4px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 3;
  }

  .cl-pin-grip {
    width: 14px;
    height: 10px;
    background: radial-gradient(circle at 35% 35%, rgba(225, 29, 72, 0.95) 0%, rgba(159, 18, 57, 1) 100%);
    border-left: 1px solid rgba(255, 255, 255, 0.15);
    border-right: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.2);
    margin-top: -1px;
    z-index: 2;
  }

  .cl-pin-base {
    width: 26px;
    height: 6px;
    background: linear-gradient(135deg, #be123c, #881337);
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    margin-top: -1px;
    z-index: 3;
  }

  .cl-pin-needle {
    width: 2.5px;
    height: 20px;
    background: linear-gradient(90deg, #475569 0%, #e2e8f0 30%, #ffffff 50%, #cbd5e1 70%, #334155 100%);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 0 0 1px 1px;
    transform: rotate(-2deg);
    z-index: 1;
    position: relative;
  }

  .cl-pin-shadow {
    position: absolute;
    width: 28px;
    height: 12px;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.65) 0%, transparent 75%);
    bottom: -6px;
    left: 8px;
    filter: blur(1.5px);
    z-index: 0;
    transform: rotate(10deg);
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  .cl-card-space:hover .cl-pin-shadow {
    transform: rotate(15deg) translate3d(2px, 1px, 0);
    opacity: 0.8;
  }

  .cl-label-badge {
    position: absolute;
    bottom: 16px;
    left: 16px;
    z-index: 4;
    background: rgba(0, 0, 0, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    padding: 6px 14px;
    border-radius: 100px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
  }

  .cl-hint {
    position: absolute;
    bottom: 16px;
    right: 16px;
    z-index: 4;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.4);
    transition: color 0.3s ease;
  }
  .cl-card-space:hover .cl-hint {
    color: rgba(255, 255, 255, 0.75);
  }
`;

export default function CreativeLab() {
  const [openCards, setOpenCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    if (openCards.includes(index)) {
      setOpenCards(openCards.filter((i) => i !== index));
    } else {
      setOpenCards([...openCards, index]);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="cl-root">
        <div className="cl-orb" />

        <section className="cl-section">

          <div className="cl-head">
            <p className="cl-head__eyebrow">Before & After</p>
            <h2 className="cl-head__title">Design Transformations</h2>
            <p className="cl-head__sub">
              A look behind the scenes at how raw concepts evolve into polished, high-impact designs.
            </p>
          </div>

          <div className="cl-grid">
            {cards.map((card, index) => {
              const isOpen = openCards.includes(index);

              const dynamicRotations = [
                "-rotate-2 sm:-rotate-3",
                "rotate-1 sm:rotate-2",
                "rotate-[-1deg] sm:rotate-[-2deg]",
                "rotate-[1.5deg] sm:rotate-[3deg]",
              ];

              return (
                <div
                  key={`lab-card-space-${index}`}
                  className={`cl-card-space ${dynamicRotations[index]}`}
                  onClick={() => toggleCard(index)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="cl-paper-backlayer" />

                  {/* HIGH-FIDELITY PUSH PIN MODULE */}
                  <div className="cl-pin-container">
                    <div className="cl-pin-head" />
                    <div className="cl-pin-grip" />
                    <div className="cl-pin-base" />
                    <div className="cl-pin-needle" />
                    <div className="cl-pin-shadow" />
                  </div>

                  <div className={`cl-flipper ${isOpen ? "cl-flipper--flipped" : ""}`}>

                    {/* FRONT — BEFORE image */}
                    <div className="cl-face cl-face--front">
                      <div className="cl-paper-main">
                        <Image
                          src={card.before}
                          alt={`${card.title} — before`}
                          fill
                          sizes="(max-width: 768px) 100vw, 600px"
                          className="object-cover"
                          priority={index <= 1}
                        />
                        <div className="cl-label-badge">Before</div>
                        <div className="cl-hint">Tap to reveal →</div>
                      </div>
                    </div>

                    {/* BACK — AFTER image */}
                    <div className="cl-face cl-face--back">
                      <div className="cl-paper-main">
                        <Image
                          src={card.after}
                          alt={`${card.title} — after`}
                          fill
                          sizes="(max-width: 768px) 100vw, 600px"
                          className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />

                        <div className="absolute bottom-5 left-5 z-20 pr-10">
                          <p
                            className="text-purple-400 text-xs font-bold uppercase tracking-[0.2em]"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {card.tag}
                          </p>
                          <h3
                            className="text-white text-xl sm:text-2xl font-bold mt-1 tracking-tight"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {card.title}
                          </h3>
                        </div>

                        <div className="cl-label-badge" style={{ bottom: "auto", top: 16 }}>After</div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </section>
      </div>
    </>
  );
}