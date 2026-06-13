const timeline = [
  {
    year: "2023",
    title: "Creative Foundations",
    description:
      "Began exploring digital design through gaming and content creation, developing expertise in thumbnails, posters, and social media visuals while building a strong foundation in visual communication.",
  },
  {
    year: "2024",
    title: "Professional Breakthrough",
    description:
      "Started working with clients and transforming creative skills into professional services. Delivered high-quality visual assets for creators and brands while gaining valuable real-world project experience.",
  },
  {
    year: "2025",
    title: "Growth & Specialization",
    description:
      "Expanded into branding, esports, marketing creatives, and content-focused design. Refined workflows, elevated design quality, and successfully managed projects across multiple industries and audiences.",
  },
  {
    year: "2026",
    title: "Proven Impact",
    description:
      "Successfully delivered 500+ projects for 40+ clients across various niches. With over 2 years of design experience, I continue helping brands, businesses, and creators build memorable visual identities and achieve stronger digital presence.",
  },
];

function TimelineCard({
  item,
}: {
  item: { year?: string; title: string; description: string };
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-[28px] border border-white/[0.07] transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.15]"
      style={{ isolation: "isolate" }}
    >
      <div
        className="absolute inset-0 rounded-[28px]"
        style={{ background: "linear-gradient(160deg, rgba(16,16,16,0.98) 0%, rgba(7,7,7,0.98) 100%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.13] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 45%)" }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 65%)" }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px opacity-45 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.70) 50%, transparent)" }}
      />
      <div
        className="absolute inset-y-0 left-0 w-px opacity-20 group-hover:opacity-55 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, transparent 60%)" }}
      />
      <div
        className="absolute inset-0 rounded-[28px] pointer-events-none"
        style={{
          boxShadow: [
            "inset 0 1.5px 0 rgba(255,255,255,0.10)",
            "inset 0 -1px 0 rgba(0,0,0,0.4)",
            "inset 1px 0 rgba(255,255,255,0.04)",
            "inset -1px 0 rgba(0,0,0,0.2)",
          ].join(", "),
        }}
      />
      <div
        className="absolute inset-0 rounded-[28px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)" }}
      />

      <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-[220px] sm:min-h-[260px] lg:min-h-[320px] px-6 py-8 lg:px-10 lg:py-12">
        <h4
          className="text-white/90 group-hover:text-white transition-colors duration-300 mb-4 sm:mb-6"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(36px, 9vw, 64px)",
            lineHeight: 0.92,
            letterSpacing: "0.03em",
          }}
        >
          {item.title}
        </h4>
        <p
          className="max-w-[340px] text-[13px] sm:text-[15px] lg:text-[17px] leading-7 lg:leading-8 text-white/45 group-hover:text-white/65 transition-colors duration-300"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function AboutTimeline() {
  return (
    <div>
      {/* Header */}
      <div className="mb-16 sm:mb-20 lg:mb-24 px-1 sm:px-0">
        <p
          className="text-[11px] font-semibold uppercase text-white/35 mb-4"
          style={{ letterSpacing: "0.35em", fontFamily: "'DM Sans', sans-serif" }}
        >
          The Journey
        </p>
        <h3
          className="text-white/85 leading-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 7vw, 90px)",
            letterSpacing: "0.02em",
          }}
        >
          How I Got{" "}
          <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)", color: "transparent" }}>
            Here
          </span>
        </h3>
      </div>

      {/* ── Mobile ── */}
      <div className="lg:hidden">
        <div className="relative">

          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] pointer-events-none"
            style={{
              left: "20px",
              background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.20) 4%, rgba(255,255,255,0.20) 96%, transparent)",
            }}
          />

          <div className="flex flex-col gap-0">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative flex gap-5 sm:gap-7">

                {/* Left column: dot */}
                <div
                  className="relative shrink-0 flex flex-col items-center"
                  style={{ width: "40px" }}
                >
                  <div className="relative mt-[22px]">
                    <div
                      className="absolute inset-0 rounded-full scale-[3.5] blur-md pointer-events-none"
                      style={{ background: "rgba(255,255,255,0.07)" }}
                    />
                    <div
                      className="relative w-[16px] h-[16px] rounded-full border-2 border-white/35 bg-[#080808]"
                      style={{ boxShadow: "0 0 16px rgba(255,255,255,0.18), 0 0 0 3px rgba(255,255,255,0.04)" }}
                    />
                  </div>
                </div>

                {/* Right column */}
                <div className="flex-1 flex flex-col pb-8 pr-4 min-w-0">

                  {/* Year row */}
                  <div className="flex items-center gap-3 h-[60px]">
                    <span
                      className="text-[13px] font-bold uppercase tracking-[0.32em] text-white/50"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.year}
                    </span>

                    {index === 0 && (
                      <span
                        className="px-2.5 py-1 rounded-full text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35 border border-white/12 bg-white/[0.03]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Start
                      </span>
                    )}
                    {index === timeline.length - 1 && (
                      <span
                        className="px-2.5 py-1 rounded-full text-[9px] font-semibold uppercase tracking-[0.25em] text-emerald-400/70 border border-emerald-400/25 bg-emerald-400/[0.05]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Now
                      </span>
                    )}
                  </div>

                  {/* Card — constrained width */}
                  <div className="w-full max-w-[420px]">
                    <TimelineCard item={item} />
                  </div>

                  {index < timeline.length - 1 && (
                    <div className="h-10" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden lg:block relative">
        <div
          className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.12) 3%, rgba(255,255,255,0.12) 97%, transparent 100%)",
          }}
        />

        <div className="space-y-12 xl:space-y-16">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={item.year} className="relative flex items-center justify-center">

                <div className="w-[420px] xl:w-[460px] pr-14">
                  {isLeft ? <TimelineCard item={item} /> : <div className="min-h-[320px]" />}
                </div>

                <div className="shrink-0 flex flex-col items-center gap-3 z-10" style={{ width: "100px" }}>
                  <div
                    className="px-4 py-2 rounded-full border border-white/[0.10] bg-[#080808] text-white/60 text-[11px] font-semibold tracking-[0.25em] whitespace-nowrap"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.year}
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-8 h-8 rounded-full bg-white/5 blur-xl" />
                    <div
                      className="relative h-[16px] w-[16px] rounded-full bg-[#080808] border border-white/25"
                      style={{ boxShadow: "0 0 0 4px rgba(255,255,255,0.04), 0 0 24px rgba(255,255,255,0.08)" }}
                    />
                  </div>
                </div>

                <div className="w-[420px] xl:w-[460px] pl-14">
                  {!isLeft ? <TimelineCard item={item} /> : <div className="min-h-[320px]" />}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}