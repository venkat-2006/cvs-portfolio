import AboutIntro from "./AboutIntro";
import AboutStats from "./AboutStats";
import AboutTimeline from "./AboutTimeline";
import AboutTools from "./AboutTools";
import AboutPhilosophy from "./AboutPhilosophy";
import AboutCTA from "./AboutCTA";

export default function About() {
  return (
    <section className="relative w-full bg-[#080808] py-24 md:py-32 lg:py-40 overflow-hidden">

      {/* Ambient Orbs */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-60 -left-60 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 60%)",
          }}
        />

        <div
          className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 60%)",
          }}
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.03) 0%, transparent 55%)",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 xl:px-12">

        {/* About Label */}
        <div className="mb-10">
          <span
            className="inline-block text-white/60 uppercase"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(18px, 1.5vw, 24px)",
              letterSpacing: "0.35em",
              fontWeight: 700,
            }}
          >
            ABOUT ME
          </span>
        </div>

        {/* Intro Section */}
        <AboutIntro />

        {/* Stats */}
        <div className="mt-40 lg:mt-48">
          <AboutStats />
        </div>

        {/* Remaining Sections */}
        <div className="mt-40 flex flex-col gap-24 md:gap-32 lg:gap-40">

          <AboutTimeline />

          <AboutTools />

          <AboutPhilosophy />

          <AboutCTA />
          <div></div>

        </div>

      </div>

    </section>
  );
}