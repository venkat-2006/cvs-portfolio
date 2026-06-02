"use client";

import React from "react";

// ─── INTEGRATED DESIGN CSS STYLES ───────────────────────────────────────────
const cssFooter = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;500;700&display=swap');

  :root {
    --foot-bg: #050507;
    --foot-border: rgba(255, 255, 255, 0.18);
    --foot-accent: #c084fc;
    --foot-muted: rgba(255, 255, 255, 0.85);
  }

  .ft-root {
    background: var(--foot-bg);
    padding: 120px 0 48px;
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(255, 255, 255, 0.03);
  }

  /* Deep Immersive Atmospheric Light Flares with precise 6% opacity layers */
  .ft-orb {
    pointer-events: none;
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: 1;
  }
  .ft-orb__p {
    position: absolute;
    bottom: -150px; left: -150px;
    width: 600px; height: 600px;
    border-radius: 50%;
    opacity: 0.06;
    mix-blend-mode: screen;
    background: radial-gradient(circle, rgba(147,51,234,0.6) 0%, transparent 70%);
    filter: blur(140px);
  }
  .ft-orb__b {
    position: absolute;
    top: -150px; right: -150px;
    width: 500px; height: 500px;
    border-radius: 50%;
    opacity: 0.05;
    mix-blend-mode: screen;
    background: radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%);
    filter: blur(120px);
  }
  .ft-noise {
    position: absolute;
    inset: 0;
    opacity: 0.015;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noiseFilter'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3e%3c/svg%3e");
    pointer-events: none;
  }

  .ft-section {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Availability Badge styling */
  .ft-badge {
    margin-bottom: 56px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    border: 1px solid rgba(16, 185, 129, 0.35);
    background: rgba(16, 185, 129, 0.05);
    padding: 8px 18px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
  .ft-badge__dot-container {
    position: relative;
    display: flex;
    height: 8px; width: 8px;
  }
  .ft-badge__ping {
    position: absolute;
    display: inline-flex;
    height: 100%; width: 100%;
    border-radius: 50%;
    background: #34d399;
    opacity: 0.75;
    animation: pulsePing 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  @keyframes pulsePing {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(3); opacity: 0; }
  }
  .ft-badge__dot {
    position: relative;
    display: inline-flex;
    border-radius: 50%;
    height: 8px; width: 8px;
    background: #10b981;
  }
  .ft-badge__text {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #34d399;
    font-family: 'Space Grotesk', sans-serif;
  }

  /* Massive Headline Hero Display */
  .ft-cta {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    padding-bottom: 64px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .ft-cta__title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(44px, 9vw, 130px);
    line-height: 0.85;
    letter-spacing: -0.01em;
    color: #ffffff;
    text-transform: uppercase;
    text-align: center;
  }
  .ft-cta__title span {
    background: linear-gradient(90deg, #c084fc, #6366f1, #c084fc);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shiftGlow 4s linear infinite;
  }
  @keyframes shiftGlow {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  /* Links Responsive Matrix Track */
  .ft-grid {
    width: 100%;
    padding: 64px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  @media (max-width: 1024px) {
    .ft-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 560px) {
    .ft-grid { grid-template-columns: 1fr; gap: 16px; }
  }

  /* HIGH-LIGHTING UPDATE: Thick borders and high surface illumination values */
  .ft-link-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 24px;
    border: 1px solid var(--foot-border);
    background: rgba(255, 255, 255, 0.03);
    padding: 24px 28px;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    text-decoration: none;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }
  
  .ft-link-card:hover {
    transform: translate3d(0, -5px, 0);
    background: rgba(255, 255, 255, 0.05);
  }

  /* Distinct high-end custom brand lighting glow responses */
  .ft-link-card--instagram:hover {
    border-color: rgba(244, 63, 94, 0.7);
    box-shadow: 0 20px 45px rgba(244, 63, 94, 0.2);
  }
  .ft-link-card--behance:hover {
    border-color: rgba(59, 130, 246, 0.7);
    box-shadow: 0 20px 45px rgba(59, 130, 246, 0.2);
  }
  .ft-link-card--dribbble:hover {
    border-color: rgba(236, 72, 153, 0.7);
    box-shadow: 0 20px 45px rgba(236, 72, 153, 0.2);
  }
  .ft-link-card--email:hover {
    border-color: rgba(167, 139, 250, 0.7);
    box-shadow: 0 20px 45px rgba(167, 139, 250, 0.2);
  }

  .ft-link-card__left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  /* FIXED BRAND VISIBILITY: Embedded icons feature bright color tints even when idle */
  .ft-link-card__brand-icon {
    display: flex;
    transition: color 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .ft-link-card--instagram .ft-link-card__brand-icon { color: rgba(244, 63, 94, 0.65); }
  .ft-link-card--behance .ft-link-card__brand-icon { color: rgba(59, 130, 246, 0.65); }
  .ft-link-card--dribbble .ft-link-card__brand-icon { color: rgba(236, 72, 153, 0.65); }
  .ft-link-card--email .ft-link-card__brand-icon { color: rgba(167, 139, 250, 0.65); }

  .ft-link-card:hover .ft-link-card__brand-icon {
    transform: scale(1.1);
  }
  .ft-link-card--instagram:hover .ft-link-card__brand-icon { color: #f43f5e; }
  .ft-link-card--behance:hover .ft-link-card__brand-icon { color: #3b82f6; }
  .ft-link-card--dribbble:hover .ft-link-card__brand-icon { color: #ec4899; }
  .ft-link-card--email:hover .ft-link-card__brand-icon { color: #c084fc; }

  .ft-link-card__label {
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: var(--foot-muted);
    transition: color 0.3s ease;
    font-family: 'Space Grotesk', sans-serif;
  }
  .ft-link-card:hover .ft-link-card__label {
    color: #ffffff;
  }

  /* Side Arrow Capsular Ring Element */
  .ft-link-card__icon {
    display: flex;
    height: 32px; width: 32px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.22);
    background: #050507;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .ft-link-card:hover .ft-link-card__icon {
    color: #ffffff;
    background: #000000;
  }
  .ft-link-card--instagram:hover .ft-link-card__icon { border-color: rgba(244, 63, 94, 0.6); }
  .ft-link-card--behance:hover .ft-link-card__icon { border-color: rgba(59, 130, 246, 0.6); }
  .ft-link-card--dribbble:hover .ft-link-card__icon { border-color: rgba(236, 72, 153, 0.6); }
  .ft-link-card--email:hover .ft-link-card__icon { border-color: rgba(167, 139, 250, 0.6); }

  .ft-link-card__svg {
    transition: transform 0.3s ease;
  }
  .ft-link-card:hover .ft-link-card__svg {
    transform: translate3d(2px, -2px, 0);
  }

  /* Signature footer element layouts */
  .ft-signature {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  @media (min-width: 640px) {
    .ft-signature {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .ft-signature__copy {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.45);
    font-weight: 400;
  }
  
  .ft-signature__dev {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: rgba(255, 255, 255, 0.45);
  }
`;

export default function Footer() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssFooter }} />
      <div className="ft-root">
        
        {/* Background ambient lighting configurations */}
        <div className="ft-orb" aria-hidden="true">
          <div className="ft-orb__p" />
          <div className="ft-orb__b" />
          <div className="ft-noise" />
        </div>

        <section className="ft-section">
          
          {/* Availability Status Badge */}
          <div className="ft-badge">
            <div className="ft-badge__dot-container">
              <div className="ft-badge__ping" />
              <div className="ft-badge__dot" />
            </div>
            <span className="ft-badge__text">Available For Freelance Work</span>
          </div>

          {/* Large Header Title CTA Block */}
          <div className="ft-cta">
            <h2 className="ft-cta__title">
              Let&apos;s Create <br />
              <span>Something Exceptional</span>
            </h2>
          </div>

          {/* Rebuilt Centered Responsive Social Action Grid with Integrated Inline SVGs */}
          <div className="ft-grid">
            
            {/* INSTAGRAM LINK CARD */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="ft-link-card ft-link-card--instagram">
              <div className="ft-link-card__left">
                <div className="ft-link-card__brand-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
                <span className="ft-link-card__label">Instagram</span>
              </div>
              <div className="ft-link-card__icon">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="ft-link-card__svg">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>

            {/* BEHANCE LINK CARD */}
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="ft-link-card ft-link-card--behance">
              <div className="ft-link-card__left">
                <div className="ft-link-card__brand-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a3 3 0 1 0 0-6H4v6z"/>
                    <path d="M11 15.5a3.5 3.5 0 1 1-7 0V12h7z"/>
                    <line x1="15" x2="20" y1="8" y2="8"/>
                    <path d="M21 13c0 2.5-2 4-4.5 4S12 15.5 12 13s1.5-4 4.5-4 4.5 1.5 4.5 4z"/>
                  </svg>
                </div>
                <span className="ft-link-card__label">Behance</span>
              </div>
              <div className="ft-link-card__icon">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="ft-link-card__svg">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>

            {/* DRIBBBLE LINK CARD */}
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="ft-link-card ft-link-card--dribbble">
              <div className="ft-link-card__left">
                <div className="ft-link-card__brand-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56"/>
                  </svg>
                </div>
                <span className="ft-link-card__label">Dribbble</span>
              </div>
              <div className="ft-link-card__icon">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="ft-link-card__svg">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>

            {/* EMAIL CONTACT LINK CARD */}
            <a href="mailto:hello@designer.com" className="ft-link-card ft-link-card--email">
              <div className="ft-link-card__left">
                <div className="ft-link-card__brand-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <span className="ft-link-card__label">Email Contact</span>
              </div>
              <div className="ft-link-card__icon">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="ft-link-card__svg">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>

          </div>

          {/* Signature Identity Summary Row Block */}
          <div className="ft-signature">
            <p className="ft-signature__copy">
              &copy; 2026 Designer Name. All Rights Reserved.
            </p>
            <p className="ft-signature__dev">
              Designed & Developed with Care
            </p>
          </div>

        </section>
      </div>
    </>
  );
}