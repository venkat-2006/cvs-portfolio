"use client";

import React, { useState } from "react";

// ─── DATA MATRIX ─────────────────────────────────────────────────────────────
type FAQType = {
  id: number;
  question: string;
  answer: string;
};



export const faqData: FAQType[] = [
  {
    id: 1,
    question: "How long does a thumbnail take?",
    answer: "Usually within 24-48 hours depending on complexity and active production queue lengths."
  },
  {
    id: 2,
    question: "Do you provide revisions?",
    answer: "Yes, structured feedback loops and revisions are included with every project asset to ensure complete satisfaction."
  },
  {
    id: 3,
    question: "Can you work with international clients?",
    answer: "Absolutely. All asset delivery, communication pipelines, and invoicing operations are handled seamlessly via global remote frameworks."
  },
  {
    id: 4,
    question: "What software do you use?",
    answer: "Photoshop, Illustrator, Magnific, and ChatGPT form the core structural stack for all conceptualization work."
  }
];

// ─── INTEGRATED DESIGN CSS STYLES ───────────────────────────────────────────
const cssFAQ = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;500;700&display=swap');

  :root {
    --bg-f: #050505;
    --surface-f: rgba(14, 14, 18, 0.65);
    --border-f: rgba(255, 255, 255, 0.06);
    --accent-f: #a78bfa;
    --muted-f: rgba(255, 255, 255, 0.45);
  }

  .faq-root {
    background: var(--bg-f);
    min-height: auto;
    font-family: 'Space Grotesk', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 120px 0;
    position: relative;
    width: 100%;
  }

  .faq-section {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .faq-head {
    text-align: center;
    margin-bottom: 64px;
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .faq-head__eyebrow {
    font-size: 11px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: var(--accent-f);
    margin-bottom: 18px;
    font-weight: 700;
  }
  .faq-head__title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(40px, 7.5vw, 72px);
    line-height: 0.95;
    letter-spacing: 0.02em;
    color: #ffffff;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  .faq-head__sub {
    font-size: clamp(14px, 1.6vw, 16px);
    color: var(--muted-f);
    line-height: 1.6;
  }

  .faq-grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  .faq-item {
    width: 100%;
    border-radius: 32px;
    border: 1px solid var(--border-f);
    background: var(--surface-f);
    padding: 28px 32px;
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
    select-none: none;
  }
  
  .faq-item--open {
    border-color: rgba(167, 139, 250, 0.4);
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0 0 40px rgba(168, 85, 247, 0.12);
  }

  .faq-item:hover:not(.faq-item--open) {
    border-color: rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }

  .faq-item__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    width: 100%;
  }

  .faq-item__question {
    font-size: clamp(15px, 2vw, 18px);
    font-weight: 500;
    tracking-style: tight;
    color: rgba(255, 255, 255, 0.9);
    transition: transform 0.3s ease, color 0.3s ease;
    text-align: left;
  }
  .faq-item:hover .faq-item__question {
    transform: translate3d(4px, 0, 0);
  }
  .faq-item--open .faq-item__question {
    color: #f3e8ff;
  }

  .faq-item__icon {
    display: flex;
    h-8: 32px; w-8: 32px;
    height: 32px; width: 32px;
    shrink-0: 0; flex-shrink: 0;
    align-items: center;
    justify-content: center;
    rounded-full: 50%; border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.4);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .faq-item:hover .faq-item__icon {
    border-color: rgba(255,255,255,0.2);
    color: #ffffff;
  }
  .faq-item--open .faq-item__icon {
    transform: rotate(180deg);
    border-color: var(--accent-f);
    background: rgba(167, 139, 250, 0.15);
    color: #c084fc;
  }

  .faq-item__body {
    display: grid;
    transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: grid-template-rows, opacity, margin-top;
  }

  .faq-item__content {
    overflow: hidden;
  }

  .faq-item__answer {
    font-size: clamp(13.5px, 1.6vw, 15px);
    line-height: 1.65;
    color: var(--muted-f);
    padding-right: 24px;
    text-align: left;
  }
`;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssFAQ }} />
      <div className="faq-root">
        <section className="faq-section">
          
          <div className="faq-head">
            <p className="faq-head__eyebrow">Frictionless Answers</p>
            <h2 className="faq-head__title">Frequently Asked Questions</h2>
            <p className="faq-head__sub">
              All essential parameters mapped down explicitly. Click an accordion track row below to toggle operational insights instantly.
            </p>
          </div>

          <div className="faq-grid">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={`faq-item-container-${idx}`}
                  className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <div className="faq-item__header">
                    <h3 className="faq-item__question">{item.question}</h3>
                    <div className="faq-item__icon">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div
                    className="faq-item__body"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? "16px" : "0px",
                    }}
                  >
                    <div className="faq-item__content">
                      <p className="faq-item__answer">{item.answer}</p>
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