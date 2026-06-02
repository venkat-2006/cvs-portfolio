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
    title: "Typography Exploration",
    before: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=600&auto=format&fit=crop&q=80",
    tag: "Letters & Rhythm",
  },
  {
    title: "Color Exploration",
    before: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80",
    tag: "Mood Testing",
  },
  {
    title: "Logo Concept",
    before: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&auto=format&fit=crop&q=80",
    tag: "Unused Direction",
  },
  {
    title: "Creative Experiment",
    before: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&auto=format&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=600&auto=format&fit=crop&q=80",
    tag: "Visual Playground",
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
    height: 460px;
    perspective: 2000px;
    width: 100%;
  }

  .cl-paper-backlayer {
    position: absolute;
    inset: 12px -4px -4px 12px;
    background: rgba(20, 20, 25, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.01);
    border-radius: 32px 76px 32px 32px;
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
    position: relative;
    width: 100%;
    height: 100%;
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
    border-radius: 32px 76px 32px 32px;
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
    border-radius: 32px 76px 32px 32px;
    overflow: hidden;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
  }

  .cl-paper-main::after {
    content: '';
    position: absolute;
    top: -1px;
    right: -1px;
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, transparent 50%, #050507 50%),
                linear-gradient(225deg, transparent 50%, rgba(255,255,255,0.04) 50%);
    border-left: 1px solid var(--lab-border);
    border-bottom: 1px solid var(--lab-border);
    border-bottom-left-radius: 24px;
    pointer-events: none;
    z-index: 5;
  }

  /* FIXED HIGH-FIDELITY PUSH PIN DESIGN MODULE ENGINE */
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

  /* Translucent polymer acrylic head with radial specular reflection highlights */
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

  /* Fluid molded center ergonomic grip block */
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

  /* Thick base flange containing internal visual core compression details */
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

  /* Chrome specular chrome steel logic needle shaft */
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

  /* Adaptive skeuomorphic soft blurred ambient pin depth casting map shadow */
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

  .cl-reveal-overlay {
    position: absolute;
    inset: 0;
    background: rgba(5, 5, 7, 0.45);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3;
    transition: background 0.4s ease;
  }
  .cl-card-space:hover .cl-reveal-overlay {
    background: rgba(5, 5, 7, 0.35);
  }

  .cl-reveal-pill {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 10px 22px;
    border-radius: 100px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #ffffff;
    box-shadow: 0 12px 24px -6px rgba(0,0,0,0.6);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease;
  }
  .cl-card-space:hover .cl-reveal-pill {
    transform: scale(1.04) translateY(-1px);
    background: rgba(255, 255, 255, 0.1);
  }
  .cl-reveal-arrow {
    font-size: 12px;
    color: var(--lab-muted);
    margin-top: 12px;
    letter-spacing: 0.05em;
    font-weight: 500;
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
            <p className="cl-head__eyebrow">Creative Lab</p>
            <h2 className="cl-head__title">Designer&apos;s Playground</h2>
            <p className="cl-head__sub">
              Unused concepts, visual explorations, color studies and creative experiments that shaped the final work.
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
                    
                    {/* FRONT SHEET VIEWPORT LAYER */}
                    <div className="cl-face cl-face--front">
                      <div className="cl-paper-main">
                        <Image
                          src={card.before}
                          alt={`${card.title} draft preview canvas`}
                          fill
                          sizes="(max-width: 768px) 100vw, 600px"
                          className="object-cover filter grayscale contrast-125 brightness-[0.7]"
                          priority={index <= 1}
                        />

                        <div className="cl-reveal-overlay">
                          <span className="cl-reveal-pill">Tap To Reveal</span>
                          <span className="cl-reveal-arrow">Final Result →</span>
                        </div>
                      </div>
                    </div>

                    {/* BACK SHEET VIEWPORT LAYER */}
                    <div className="cl-face cl-face--back">
                      <div className="cl-paper-main">
                        <Image
                          src={card.after}
                          alt={`${card.title} finalized execution result`}
                          fill
                          sizes="(max-width: 768px) 100vw, 600px"
                          className="object-cover"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />

                        {/* Text Metadata Details */}
                        <div className="absolute bottom-8 left-8 z-20 pr-14">
                          <p 
                            className="text-purple-400 text-xs font-bold uppercase tracking-[0.2em]"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {card.tag}
                          </p>
                          <h3 
                            className="text-white text-2xl sm:text-3xl font-bold mt-1.5 tracking-tight"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {card.title}
                          </h3>
                        </div>
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