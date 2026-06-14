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
    .ft-signature__dev {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.35s ease;
}

.ft-signature__dev:hover {
  color: #c084fc;
  letter-spacing: 0.22em;
  text-shadow: 0 0 20px rgba(192, 132, 252, 0.35);
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
  .ft-link-card--discord:hover {
    border-color: rgba(88, 101, 242, 0.7);
    box-shadow: 0 20px 45px rgba(88, 101, 242, 0.2);
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
  .ft-link-card--discord .ft-link-card__brand-icon { color: rgba(88, 101, 242, 0.65); }
  .ft-link-card--email .ft-link-card__brand-icon { color: rgba(167, 139, 250, 0.65); }

  .ft-link-card:hover .ft-link-card__brand-icon {
    transform: scale(1.1);
  }
  .ft-link-card--instagram:hover .ft-link-card__brand-icon { color: #f43f5e; }
  .ft-link-card--behance:hover .ft-link-card__brand-icon { color: #3b82f6; }
  .ft-link-card--discord:hover .ft-link-card__brand-icon { color: #5865F2; }
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
  .ft-link-card--discord:hover .ft-link-card__icon { border-color: rgba(88, 101, 242, 0.6); }
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

          {/* Social Action Grid */}
          <div className="ft-grid">

            {/* INSTAGRAM LINK CARD */}
            <a href="https://www.instagram.com/cvs_gfx/" target="_blank" rel="noreferrer" className="ft-link-card ft-link-card--instagram">
              <div className="ft-link-card__left">
                <div className="ft-link-card__brand-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
                        <stop offset="0%" stopColor="#ffd600" />
                        <stop offset="20%" stopColor="#ff6a00" />
                        <stop offset="50%" stopColor="#ee0979" />
                        <stop offset="80%" stopColor="#c92bb7" />
                        <stop offset="100%" stopColor="#4f5bd5" />
                      </radialGradient>
                    </defs>
                    <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
            <a href="https://www.behance.net/cvsgfx" target="_blank" rel="noreferrer" className="ft-link-card ft-link-card--behance">
              <div className="ft-link-card__left">
                <div className="ft-link-card__brand-icon">
                  <svg width="20" height="20" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#1769ff" d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 14 16 L 21.544922 16 C 21.944922 16 25.908203 16.007234 25.908203 20.115234 C 25.908203 22.322234 24.2875 23.132953 23.6875 23.376953 C 24.5875 23.624953 27 24.536 27 27.875 C 27 32 23.370625 32 22.640625 32 L 14 32 L 14 16 z M 30 18 L 38 18 L 38 20 L 30 20 L 30 18 z M 17.5 18.5 L 17.5 22.5 L 21 22.5 C 21 22.5 22.410156 22.405 22.410156 20.5 C 22.410156 18.5 21 18.5 21 18.5 L 17.5 18.5 z M 34.087891 21.978516 C 37.640891 21.978516 39.011719 24.6615 39.011719 27.0625 C 39.011719 27.3765 38.981234 28 38.865234 28 L 30.677734 28 C 30.677734 30.153 32.199609 30.609375 33.224609 30.609375 C 34.196609 30.609375 34.800781 30.199219 35.175781 29.449219 L 38.628906 29.449219 C 37.551906 32.449219 35.367188 32.978516 33.117188 32.978516 C 29.790188 32.978516 27.337891 31.021484 27.337891 27.021484 C 27.337891 23.028484 29.761891 21.978516 34.087891 21.978516 z M 17.5 25 L 17.5 29.5 L 21.5 29.5 C 21.5 29.5 23.5 29.5 23.5 27.25 C 23.5 25 21.5 25 21.5 25 L 17.5 25 z M 33.962891 24.291016 C 32.612891 24.291016 30.820313 24.882 30.695313 26.875 L 36.757813 26.875 C 36.757813 25.625 35.862891 24.291016 33.962891 24.291016 z"/>
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

            {/* DISCORD LINK CARD (FIXED WITH YOUR NUMERIC USER ID) */}
            <a href="https://discordapp.com/users/1071042905776599150" target="_blank" rel="noreferrer" className="ft-link-card ft-link-card--discord">
              <div className="ft-link-card__left">
                <div className="ft-link-card__brand-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#5865F2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.04.036.052a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <span className="ft-link-card__label">Discord</span>
              </div>
              <div className="ft-link-card__icon">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="ft-link-card__svg">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>

            {/* EMAIL CONTACT LINK CARD (FIXED CROSS-PLATFORM FALLBACK) */}
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=cvsworks69@gmail.com&su=Project%20Inquiry"
  target="_blank"
  rel="noopener noreferrer"
  className="ft-link-card ft-link-card--email"
  aria-label="Send Email"
>
  <div className="ft-link-card__left">
    <div className="ft-link-card__brand-icon">
      {/* Your Gmail SVG */}
    </div>
    <span className="ft-link-card__label">Email Contact</span>
  </div>

  <div className="ft-link-card__icon">
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ft-link-card__svg"
    >
      <path
        d="M1 9L9 1M9 1H3M9 1V7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
</a>

          </div>

          {/* Signature Identity Summary Row Block */}
          <div className="ft-signature">
            <p className="ft-signature__copy">
              &copy; 2026 CVS GFX. All Rights Reserved.
            </p>
            <a
  href="https://github.com/venkat-2006"
  target="_blank"
  rel="noopener noreferrer"
  className="ft-signature__dev"
  aria-label="Visit Venkat's GitHub"
>
  Designed & Developed by VENKAT
</a>
          </div>

        </section>
      </div>
    </>
  );
}