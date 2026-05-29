import Container from "../Layout/Container";

import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import HeroVisual from "./HeroVisual";
import HeroTrust from "./HeroTrust";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      className="
      relative

      min-h-screen

      flex
      items-center

      overflow-hidden

      bg-[#050505]

      pt-32
      pb-20
      "
    >
      {/* =========================
          Premium Glow Background
      ========================= */}

      <div
        className="
        absolute
        inset-0
        pointer-events-none
        "
      >
        {/* Purple Glow */}
        <div
          className="
          absolute

          top-20
          left-20

          w-[500px]
          h-[500px]

          bg-purple-600/10

          rounded-full

          blur-[200px]
          "
        />

        {/* Blue Glow */}
        <div
          className="
          absolute

          bottom-20
          right-20

          w-[500px]
          h-[500px]

          bg-blue-500/10

          rounded-full

          blur-[200px]
          "
        />

        {/* Center Glow */}
        <div
          className="
          absolute

          top-1/2
          left-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[350px]
          h-[350px]

          bg-white/[0.03]

          rounded-full

          blur-[140px]
          "
        />

        {/* Luxury Grid Overlay */}
        <div
          className="
          absolute
          inset-0

          opacity-[0.03]

          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

          [background-size:80px_80px]
          "
        />
      </div>

      {/* =========================
          Main Hero Content
      ========================= */}

      <Container>
        <div
          className="
          relative
          z-10

          grid

          lg:grid-cols-2

          gap-20
          xl:gap-28

          items-center
          "
        >
          {/* =========================
              Left Content
          ========================= */}

          <div
            className="
            space-y-10

            text-center
            lg:text-left

            flex
            flex-col

            items-center
            lg:items-start
            "
          >
            <HeroContent />

            <HeroActions />

            <HeroTrust />
          </div>

          {/* =========================
              Right Visual
          ========================= */}

    <div className="flex justify-center">
  <HeroVisual />
</div>
        </div>
      </Container>

      {/* =========================
          Scroll Indicator
      ========================= */}

      <ScrollIndicator />
    </section>
  );
}