import TestimonialSlider from "./TestimonialSlider";

export default function Testimonials() {
  return (
    <section className="relative w-full bg-[#050505] py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Ambient Radial Mesh Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-80"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16">
        {/* Eyebrow Label Row */}
        <div className="flex items-center gap-3 mb-10">
          <span className="block h-[1px] w-8 bg-zinc-800" />
          <span
            className="text-[10px] font-bold uppercase text-zinc-500"
            style={{ letterSpacing: "0.55em", fontFamily: "'DM Sans', sans-serif" }}
          >
            Testimonials
          </span>
        </div>

        {/* Section Header Content Blocks */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-24">
          <h2
            className="text-white leading-[0.9] shrink-0 font-black tracking-tight"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(54px, 7.5vw, 100px)",
              letterSpacing: "0.01em",
            }}
          >
            What Clients
            <br />
            <span className="text-white/20">Say About Me</span>
          </h2>
          <p
            className="text-[14px] sm:text-[15px] leading-relaxed text-zinc-500 lg:max-w-[300px] lg:pb-2 font-normal"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Real feedback from real clients. Every single review is validated from productions I have delivered directly.
          </p>
        </div>

        {/* Nudges the slider perfectly to the right relative to the page header assets */}
        <div className="flex justify-center w-full translate-x-0 sm:translate-x-4 lg:translate-x-16">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
}