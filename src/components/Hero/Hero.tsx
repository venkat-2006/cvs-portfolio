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
      "
    >
      {/* Premium Background Glow */}
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
          top-[-100px]
          left-[-100px]

          w-[500px]
          h-[500px]

          bg-purple-500/25

          blur-[180px]
          rounded-full
          "
        />

        {/* Blue Glow */}
        <div
          className="
          absolute
          bottom-[-100px]
          right-[-100px]

          w-[500px]
          h-[500px]

          bg-blue-500/20

          blur-[180px]
          rounded-full
          "
        />

        {/* Center Accent Glow */}
        <div
          className="
          absolute
          top-1/2
          left-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[300px]
          h-[300px]

          bg-white/5

          blur-[120px]
          rounded-full
          "
        />

        {/* Grid Overlay */}
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

      <Container>
        <div
          className="
          relative
          z-10

          grid
          lg:grid-cols-2

          gap-16
          lg:gap-24

          items-center
          "
        >
          {/* Left Content */}
          <div className="space-y-10">
            <HeroContent />

            <HeroActions />

            <HeroTrust />
          </div>

          {/* Right Visual */}
          <HeroVisual />
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}