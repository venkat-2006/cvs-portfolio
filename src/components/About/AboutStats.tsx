const stats = [
  { value: "100+", label: "Projects Completed", sub: "Across all categories" },
  { value: "20+", label: "Happy Clients", sub: "Worldwide" },
  { value: "3+", label: "Years Active", sub: "Since 2022" },
  { value: "∞", label: "Creative Drive", sub: "Never Stops" },
];

export default function AboutStats() {
  return (
    <section className="py-10">
      {/* Top Divider */}
      <div className="w-full h-px bg-white/[0.06] mb-16" />

      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-x-32 justify-items-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative w-full max-w-[260px] h-[190px] rounded-[34px] cursor-default"
              style={{
                isolation: "isolate",
                overflow: "hidden",
              }}
            >
              {/* Premium Black Glass Base */}
              <div
                className="absolute inset-0 rounded-[34px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(22,22,22,0.95) 0%, rgba(8,8,8,0.95) 100%)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  boxShadow: `
                    0 20px 50px rgba(0,0,0,0.45),
                    inset 0 1px 0 rgba(255,255,255,0.05)
                  `,
                }}
              />

              {/* Ambient Highlight */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top left, rgba(255,255,255,0.04), transparent 60%)",
                }}
              />

              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top center, rgba(255,255,255,0.08), transparent 60%)",
                }}
              />

              {/* Main Border */}
              <div
                className="absolute inset-0 rounded-[34px] pointer-events-none"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />

              {/* Hover Border */}
              <div
                className="absolute inset-0 rounded-[34px] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  border: "1px solid rgba(255,255,255,0.16)",
                  boxShadow: `
                    0 0 30px rgba(255,255,255,0.03),
                    inset 0 0 30px rgba(255,255,255,0.02)
                  `,
                }}
              />

              {/* Top Shine */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-10 py-8 transition-all duration-500 group-hover:-translate-y-1">
                <h3
                  className="text-white"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(60px, 4vw, 82px)",
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </h3>

                <p
                  className="mt-4 text-[17px] font-medium text-white/90"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {stat.label}
                </p>

                <p
                  className="mt-2 text-[13px] tracking-wide text-white/40"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
     

      {/* Bottom Divider */}
      <div className="w-full h-px bg-white/[0.06] mt-16" />
       <div className="h-[60px]"></div>
    </section>
  );
}