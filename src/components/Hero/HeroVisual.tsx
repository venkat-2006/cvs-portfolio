"use client";

import Image from "next/image";

export default function HeroVisual() {
  return (
    <div
      className="
      relative

      w-full
      aspect-square
max-w-[280px]
md:max-w-[420px]
xl:max-w-[520px]

mx-auto

mt-12
sm:mt-16
lg:mt-0

animate-float
      "
    >
      {/* Outer Glow */}
      <div
        className="
        absolute
        inset-[-15%]

        rounded-full

        bg-gradient-to-br
        from-purple-600/30
        via-fuchsia-500/20
        to-blue-500/30

        blur-[120px]
        "
      />

      {/* Glass Circle */}
      <div
        className="
        absolute
        inset-0

        rounded-full

        border
        border-white/10

        bg-white/5

        backdrop-blur-3xl

        shadow-[0_0_120px_rgba(168,85,247,0.25)]

        overflow-hidden
        "
      >
        {/* Liquid Highlight */}
        <div
          className="
          absolute

          top-8
          left-10

          w-32
          h-32

          rounded-full

          bg-white/20

          blur-2xl
          "
        />

        {/* Secondary Highlight */}
        <div
          className="
          absolute

          bottom-12
          right-12

          w-24
          h-24

          rounded-full

          bg-purple-400/20

          blur-xl
          "
        />
        {/* Water Reflection Effect */}
<div
  className="
  absolute
  inset-0

  opacity-30

  bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.2),transparent_35%)]

  animate-pulse
  "
/>

{/* Logo */}
<div
  className="
  absolute
  inset-0

  flex
  items-center
  justify-center
  "
>
 <Image
  src="/images/logo.png"
  alt="GVS"
  fill
  className="
    object-cover
    rounded-full
    mix-blend-screen
    opacity-90
  "
/>
</div>

        {/* Logo
        <div
          className="
          absolute
          inset-0

          flex
          items-center
          justify-center
          "
        >
          <Image
            src="/images/logo.png"
            alt="GVS"
            width={350}
            height={350}
            className="
            w-[70%]
            h-auto

            opacity-90

            drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]
            "
            priority
          />
        </div> */}
      </div>
    </div>
  );
}