import AboutIntro from "./AboutIntro";
import AboutStats from "./AboutStats";
import AboutTimeline from "./AboutTimeline";
import AboutTools from "./AboutTools";
import AboutPhilosophy from "./AboutPhilosophy";
import AboutCTA from "./AboutCTA";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#050507] py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Ambient Premium Lighting Orbs */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-60 -left-60 w-[800px] h-[800px] rounded-full opacity-60 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, rgba(147,51,234,0.06) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />

        <div
          className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full opacity-40 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 60%)",
            filter: "blur(90px)",
          }}
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-30 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.02) 0%, transparent 55%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 xl:px-12 z-10">

        {/* About Heading */}
        <div className="w-full text-left mb-0">
          <h2
            className="text-white font-black uppercase leading-[0.9]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(64px, 8vw, 120px)",
              letterSpacing: "0.02em",
            }}
          >
            About <span className="text-white/20">Me</span>
          </h2>
        </div>

        {/* Intro */}
        <div className="-mt-8 md:-mt-10 lg:-mt-12">
          <AboutIntro />
        </div>

        {/* Stats */}
        <div className="mt-36 lg:mt-44 w-full">
          <AboutStats />
        </div>

        {/* Remaining Sections */}
        <div className="mt-36 flex flex-col gap-28 md:gap-36 lg:gap-44 w-full">
          <AboutTimeline />

          <AboutTools />

          <AboutPhilosophy />

          <AboutCTA />
          <div className="h-4"></div>
        </div>

      </div>
    </section>
  );
}