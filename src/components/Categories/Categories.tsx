import { categories } from "@/data/categories";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const totalWorks = categories.reduce((sum, c) => sum + c.count, 0);

  return (
    <section className="relative w-full bg-[#050507] pt-28 pb-32 overflow-hidden">

      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-80 -left-80 w-[900px] h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(147,51,234,0.06) 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(147,51,234,0.04) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1650px] px-6 md:px-10 xl:px-14">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-10 bg-gradient-to-r from-purple-500 to-transparent" />
          <span
            className="text-[10px] font-bold uppercase text-purple-400 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/[0.07] tracking-[0.35em]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Portfolio Collections
          </span>
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-8">

          {/* Left */}
          <div className="flex flex-col gap-5">
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(56px, 8vw, 120px)",
                lineHeight: "0.92",
                letterSpacing: "0.02em",
              }}
            >
              Explore
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(147,51,234,0.7)", color: "transparent" }}>
                Collections
              </span>
            </h2>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-1">
              {[
                { num: `${totalWorks}+`, label: "Total Assets" },
                { num: `${categories.length}`, label: "Categories" },
                { num: "2+", label: "Years Active" },
              ].map(({ num, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span
                    className="text-white text-2xl"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    {num}
                  </span>
                  <span
                    className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div
            className="lg:max-w-[360px] flex flex-col gap-5 lg:pb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <p className="text-[15px] leading-[1.8] text-zinc-400 font-light border-l-2 border-purple-500/30 pl-5">
              Browse premium thumbnails, custom poster designs, and visual assets — each category meticulously curated for maximum impact.
            </p>

            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-medium text-zinc-500 tracking-[0.18em] uppercase">
                Actively updated with new work
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-14" />
        <div className="h-2"></div>

        {/* Grid — 2 cols mobile, 2 cols md, 3 cols xl */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
          {categories.map((category, i) => (
            <div
              key={category.slug}
              className="animate-rise"
              style={{ animationDelay: `${i * 65}ms`, animationFillMode: "both" }}
            >
              <CategoryCard {...category} index={i} />
            </div>
          ))}
        </div>
        <div className="h-2"></div>

      </div>
    </section>
  );
}