"use client";

import React from "react";
import Image from "next/image";

// ─── TYPES & DATA STRUCTURES ────────────────────────────────────────────────
type Client = {
  id: number;
  name: string;
  category: string;
  image: string;
  social: string;
  platform: string;
};

const clients: Client[] = [
  {
    id: 1,
    name: "MrBeast",
    category: "Creator",
    image: "https://i.pravatar.cc/200?img=1",
    social: "https://instagram.com/mrbeast",
    platform: "Instagram",
  },
  {
    id: 2,
    name: "KSI",
    category: "Creator",
    image: "https://i.pravatar.cc/200?img=2",
    social: "https://instagram.com/ksi",
    platform: "Instagram",
  },
  {
    id: 3,
    name: "FaZe Clan",
    category: "Esports",
    image: "https://i.pravatar.cc/200?img=3",
    social: "https://instagram.com/fazeclan",
    platform: "Instagram",
  },
  {
    id: 4,
    name: "100 Thieves",
    category: "Esports",
    image: "https://i.pravatar.cc/200?img=4",
    social: "https://instagram.com/100thieves",
    platform: "Instagram",
  },
  {
    id: 5,
    name: "Ninja",
    category: "Creator",
    image: "https://i.pravatar.cc/200?img=5",
    social: "https://instagram.com/ninja",
    platform: "Instagram",
  },
  {
    id: 6,
    name: "Liquid",
    category: "Esports",
    image: "https://i.pravatar.cc/200?img=6",
    social: "https://instagram.com/teamliquid",
    platform: "Instagram",
  },
  {
    id: 7,
    name: "Pokimane",
    category: "Creator",
    image: "https://i.pravatar.cc/200?img=7",
    social: "https://instagram.com/pokimanelol",
    platform: "Instagram",
  },
  {
    id: 8,
    name: "Cloud9",
    category: "Esports",
    image: "https://i.pravatar.cc/200?img=8",
    social: "https://instagram.com/cloud9",
    platform: "Instagram",
  },
  {
    id: 9,
    name: "Valkyrae",
    category: "Creator",
    image: "https://i.pravatar.cc/200?img=9",
    social: "https://instagram.com/valkyrae",
    platform: "Instagram",
  },
  {
    id: 10,
    name: "NRG",
    category: "Esports",
    image: "https://i.pravatar.cc/200?img=10",
    social: "https://instagram.com/nrgesports",
    platform: "Instagram",
  },
];

// ─── INTEGRATED DESIGN CSS STYLES ───────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700&display=swap');

  :root {
    --bg: #050507;
    --surface: rgba(10, 10, 12, 0.7);
    --border: rgba(255, 255, 255, 0.06);
    --border-hover: rgba(139, 92, 246, 0.35);
    --purple: #a78bfa;
    --white: #ffffff;
    --muted: rgba(255, 255, 255, 0.45);
    --card-size: 220px;
    --gap: 32px;
  }

  .fc-root {
    background: var(--bg);
    min-height: 100vh;
    font-family: 'DM Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 100px 0;
    position: relative;
    width: 100%;
  }

  .fc-section {
    width: 100%;
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
  }

  .fc-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(140px);
    pointer-events: none;
    z-index: 0;
    opacity: 0.65;
  }
  .fc-orb--purple {
    width: 650px; height: 650px;
    background: radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%);
    top: -150px; left: -100px;
  }
  .fc-orb--blue {
    width: 550px; height: 550px;
    background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%);
    bottom: -150px; right: -50px;
  }

  .fc-head {
    text-align: center;
    margin-bottom: 72px;
    position: relative;
    z-index: 2;
    padding: 0 24px;
  }
  .fc-head__eyebrow {
    font-size: 11px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: var(--purple);
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    font-weight: 700;
  }
  .fc-head__eyebrow::before,
  .fc-head__eyebrow::after {
    content: '';
    width: 32px; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.4));
  }
  .fc-head__eyebrow::after {
    background: linear-gradient(90deg, rgba(167, 139, 250, 0.4), transparent);
  }
  .fc-head__title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(48px, 8vw, 88px);
    line-height: 0.9;
    letter-spacing: 0.02em;
    color: var(--white);
    margin-bottom: 22px;
  }
  .fc-head__title span {
    color: rgba(255, 255, 255, 0.2);
  }
  .fc-head__sub {
    font-size: clamp(14px, 1.6vw, 16px);
    color: var(--muted);
    font-weight: 400;
    max-width: 440px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .fc-rows {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    position: relative;
    z-index: 2;
    width: 100%;
  }

  .fc-row-wrap {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  /* Smooth Edge Blend Vignettes */
  .fc-row-wrap::before,
  .fc-row-wrap::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    width: 250px;
    z-index: 10;
    pointer-events: none;
  }
  .fc-row-wrap::before {
    left: 0;
    background: linear-gradient(90deg, var(--bg) 0%, rgba(5, 5, 7, 0.8) 20%, transparent 100%);
  }
  .fc-row-wrap::after {
    right: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(5, 5, 7, 0.8) 80%, var(--bg) 100%);
  }

  .fc-track {
    display: flex;
    gap: var(--gap);
    width: max-content;
    padding: 16px 0;
    will-change: transform;
  }

  /* BULLETPROOF STABILITY FIXED ENGINE: Uses strict pause hooks instead of time re-scaling to guarantee zero pixel layout drifting */
  .fc-track--left {
    animation: scrollLeft-proj 36s linear infinite;
  }
  .fc-row-wrap:hover .fc-track--left {
    animation-play-state: paused;
  }

  .fc-track--right {
    animation: scrollRight-proj 36s linear infinite;
  }
  .fc-row-wrap:hover .fc-track--right {
    animation-play-state: paused;
  }

  @keyframes scrollLeft-proj {
    0%   { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-50%, 0, 0); }
  }
  @keyframes scrollRight-proj {
    0%   { transform: translate3d(-50%, 0, 0); }
    100% { transform: translate3d(0, 0, 0); }
  }

  /* ── Circular Black Glass Card Node ── */
  .fc-card {
    position: relative;
    width: var(--card-size);
    height: var(--card-size);
    border-radius: 50%;
    border: 1px solid var(--border);
    background: var(--surface);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
    
    transform: translate3d(0,0,0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    
    transition:
      transform 0.4s cubic-bezier(0.25, 1, 0.5, 1),
      border-color 0.4s ease,
      box-shadow 0.4s ease;
    will-change: transform;
    padding: 24px;
  }

  .fc-card:hover {
    transform: scale(1.08) translate3d(0,0,0);
    border-color: var(--border-hover);
    box-shadow:
      0 0 50px rgba(139,92,246,0.25),
      0 20px 40px rgba(0,0,0,0.7);
  }

  .fc-card__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    transform: translate3d(0, 0, 0);
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .fc-card:hover .fc-card__content {
    transform: translate3d(0, -8px, 0);
  }

  .fc-card__img-wrap {
    width: 84px; height: 84px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(5, 5, 7, 0.4);
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    transition: border-color 0.4s ease, transform 0.4s ease;
    margin-bottom: 12px;
  }
  .fc-card:hover .fc-card__img-wrap {
    border-color: rgba(139,92,246,0.5);
    transform: scale(1.03);
  }

  .fc-card__img {
    width: 100%; height: 100%;
    object-fit: cover;
    border-radius: 50%;
    filter: grayscale(100%) brightness(0.85);
    transition: filter 0.4s ease;
  }
  .fc-card:hover .fc-card__img {
    filter: grayscale(0%) brightness(1);
  }

  .fc-card__name {
    font-size: 14px;
    font-weight: 500;
    color: rgba(255,255,255,0.9);
    letter-spacing: 0.01em;
    transition: color 0.3s ease;
    text-align: center;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .fc-card:hover .fc-card__name {
    color: var(--white);
  }

  .fc-card__tag {
    font-size: 9px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--purple);
    font-weight: 700;
    margin-top: 4px;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  .fc-card:hover .fc-card__tag {
    opacity: 1;
  }

  .fc-card__social {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate3d(-50%, 12px, 0);
    background: rgba(139, 92, 246, 0.15);
    border: 1px solid rgba(139, 92, 246, 0.3);
    color: #d8b4fe;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 4px 14px;
    border-radius: 30px;
    opacity: 0;
    transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
    pointer-events: none;
    white-space: nowrap;
  }
  .fc-card:hover .fc-card__social {
    opacity: 1;
    transform: translate3d(-50%, -14px, 0);
  }

  .fc-card__shine {
    position: absolute;
    top: 0; bottom: 0;
    width: 50%;
    left: -100%;
    background: linear-gradient(105deg,
      transparent 20%,
      rgba(255,255,255,0.06) 50%,
      transparent 80%
    );
    pointer-events: none;
    z-index: 4;
  }
  .fc-card:hover .fc-card__shine {
    animation: sheenSweep 0.9s ease-in-out forwards;
  }
  @keyframes sheenSweep {
    0% { left: -100%; }
    100% { left: 160%; }
  }

  .fc-stats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 64px;
    margin-top: 72px;
    padding: 0 24px;
    position: relative;
    z-index: 2;
  }
  .fc-stat {
    text-align: center;
  }
  .fc-stat__num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(36px, 5vw, 56px);
    color: var(--white);
    letter-spacing: 0.02em;
    line-height: 1;
  }
  .fc-stat__num span {
    color: var(--purple);
  }
  .fc-stat__label {
    font-size: 11px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-top: 6px;
    font-weight: 500;
  }
  .fc-stat__divider {
    width: 1px;
    height: 48px;
    background: linear-gradient(180deg, transparent, rgba(255,255,255,0.08), transparent);
  }

  @media (max-width: 1024px) {
    :root {
      --card-size: 190px;
      --gap: 24px;
    }
    .fc-card__img-wrap { width: 72px; height: 72px; }
  }

  @media (max-width: 768px) {
    :root {
      --card-size: 160px;
      --gap: 16px;
    }
    .fc-root { padding: 80px 0; }
    .fc-head { margin-bottom: 56px; }
    .fc-row-wrap::before,
    .fc-row-wrap::after { width: 120px; }
    .fc-card__img-wrap { width: 64px; height: 64px; }
    .fc-card__name { font-size: 12px; }
    .fc-stats { gap: 36px; }
    .fc-orb--purple { width: 400px; height: 400px; }
    .fc-orb--blue { width: 350px; height: 350px; }
  }

  @media (max-width: 480px) {
    :root {
      --card-size: 140px;
      --gap: 14px;
    }
    .fc-row-wrap::before,
    .fc-row-wrap::after { width: 60px; }
    .fc-card { padding: 16px; }
    .fc-card__img-wrap { width: 56px; height: 56px; margin-bottom: 8px; }
    .fc-card__name { font-size: 11px; }
    .fc-card__tag { font-size: 8px; }
    .fc-stats { flex-wrap: wrap; gap: 24px; }
    .fc-stat__divider { display: none; }
  }
`;

// ─── SUB COMPONENT: CLIENT LOGO CARD ─────────────────────────────────────────
function ClientCard({ client }: { client: Client }) {
  return (
    <a
      href={client.social}
      target="_blank"
      rel="noreferrer"
      className="fc-card"
      aria-label={`Visit ${client.name} on ${client.platform}`}
    >
      <div className="fc-card__shine" />
      <div className="fc-card__content">
        <div className="fc-card__img-wrap relative">
          <Image
            src={client.image}
            alt={`${client.name} brand identification logo`}
            fill
            sizes="(max-width: 480px) 56px, (max-width: 768px) 64px, (max-width: 1024px) 72px, 84px"
            className="fc-card__img"
            priority={client.id <= 4}
          />
        </div>
        <span className="fc-card__name">{client.name}</span>
        <span className="fc-card__tag">{client.category}</span>
      </div>
      <span className="fc-card__social">↗ {client.platform}</span>
    </a>
  );
}

// ─── SUB COMPONENT: MARQUEE RUNWAY TRACK ─────────────────────────────────────
function MarqueeRow({ items, direction = "left" }: { items: Client[]; direction?: "left" | "right" }) {
  const quadrupledSequence = [...items, ...items, ...items, ...items];

  return (
    <div className="fc-row-wrap">
      <div className={`fc-track fc-track--${direction}`}>
        {quadrupledSequence.map((client, idx) => (
          <ClientCard
            key={`client-single-capsule-${direction}-${client.id}-${idx}`}
            client={client}
          />
        ))}
      </div>
    </div>
  );
}

// ─── CORE EXPORT COMPONENT ───────────────────────────────────────────────────
export default function FeaturedClients() {
  const midPivotIndex = Math.ceil(clients.length / 2);
  const upperTrackRow = clients.slice(0, midPivotIndex);
  const lowerTrackRow = clients.slice(midPivotIndex);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="fc-root">
        <section className="fc-section">
          {/* Background Atmospheric Glow Components */}
          <div className="fc-orb fc-orb--purple" />
          <div className="fc-orb fc-orb--blue" />

          {/* Heading Blocks */}
          <div className="fc-head">
            <p className="fc-head__eyebrow">Social Proof</p>
            <h2 className="fc-head__title">
              FEATURED <span>CLIENTS</span>
            </h2>
            <p className="fc-head__sub">
              Creators, brands and esports teams I&apos;ve had the privilege of collaborating with.
            </p>
          </div>

          {/* Running Lanes Runway Systems */}
          <div className="fc-rows">
            <MarqueeRow items={upperTrackRow} direction="left" />
            <MarqueeRow items={lowerTrackRow} direction="right" />
          </div>

          {/* Statistics Dashboard Block Area */}
          <div className="fc-stats">
            <div className="fc-stat">
              <div className="fc-stat__num">50<span>+</span></div>
              <div className="fc-stat__label">Collaborations</div>
            </div>
            <div className="fc-stat__divider" />
            <div className="fc-stat">
              <div className="fc-stat__num">12<span>M+</span></div>
              <div className="fc-stat__label">Combined Reach</div>
            </div>
            <div className="fc-stat__divider" />
            <div className="fc-stat">
              <div className="fc-stat__num">4<span>+</span></div>
              <div className="fc-stat__label">Years Active</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}