"use client";

import React from "react";
import Image from "next/image";

export default function AboutIntro() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">

      {/* LEFT SIDE */}
      <div className="relative max-w-[430px] xl:max-w-[470px] w-full mx-auto lg:mx-0">

        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.08] bg-black">

          {/* Background - FORCED TO PITCH BLACK */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "#000000",
            }}
          />

          {/* Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.06] z-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* LOGO POSITIONING */}
          <div className="absolute inset-0 flex items-center justify-center p-16 pt-4 pb-12 z-20">
            <div className="relative w-full h-full">
              <Image
                src="/images/logo.png"
                alt="CVS GFX Logo"
                fill
                priority
                /* FIXED: Added sizes attribute mapping to your max-width breakpoints 
                  minus the padding of the inner box wrapper.
                */
                sizes="(max-width: 768px) 300px, (max-width: 1280px) 400px, 470px"
                className="object-contain filter brightness-[0.95]"
              />
            </div>
          </div>

          {/* Bottom Gradient Overlay */}
          <div
            className="absolute inset-x-0 bottom-0 h-[45%] z-30 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, #000000 20%, transparent 100%)",
            }}
          />

          {/* Name Block */}
          <div className="absolute bottom-16 left-10 z-40">

            <h3
              className="text-white font-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(48px,5vw,64px)",
                letterSpacing: "0.04em",
              }}
            >
              CVS GFX
            </h3>

            <p
              className="mt-2 text-white/55 uppercase text-xs"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.35em",
              }}
            >
              Graphic Designer
            </p>

          </div>
        </div>

        {/* Open To Work Badge */}
        <div
          className="
            absolute
            bottom-8
            right-8
            z-50
            px-5
            py-3
            rounded-full
            border
            border-white/10
            bg-black/60
            backdrop-blur-xl
          "
          style={{
            boxShadow: "0 10px 40px rgba(0,0,0,.35)",
          }}
        >
          <div className="flex items-center gap-3">

            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
            </span>

            <span
              className="text-[11px] font-bold uppercase text-white/80"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.2em",
              }}
            >
              Open to Work
            </span>

          </div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-8 px-4 lg:px-0">

        <h2
          className="text-white leading-[0.88]"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(72px,8vw,128px)",
            letterSpacing: "0.01em",
          }}
        >
          Turning Ideas Into
          <br />
          <span className="text-white/25">
            Visual Experiences.
          </span>
        </h2>

        <div className="w-20 h-px bg-white/15" />

        <p
          className="text-[17px] leading-[1.9] text-zinc-400 max-w-[580px]"
          style={{
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          I create thumbnails, posters, branding and social media creatives
          designed to capture attention, elevate brands and make people
          stop mid-scroll.
        </p>

        <p
          className="text-[16px] leading-[1.9] text-zinc-600 max-w-[580px]"
          style={{
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Based online. Working with creators, esports teams and businesses
          worldwide to build visuals that actually perform.
        </p>

        {/* Skills & Services Grid */}
        <div className="pt-4">
          <div className="pt-2">

            <div className="grid grid-cols-2 gap-5 max-w-[650px]">

              {[
                "Thumbnail Design",
                "Poster Art",
                "Brand Identity",
                "Esports",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    h-[88px]
                    rounded-[24px]
                    border
                    border-white/[0.08]
                    bg-white/[0.02]
                    backdrop-blur-md
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white/[0.15]
                    hover:bg-white/[0.03]
                  "
                >
                  <span
                    className="text-[15px] font-medium text-white/80 text-center"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>
          <div className="h-[72px]"></div>
        </div>

      </div>

    </div>
  );
}