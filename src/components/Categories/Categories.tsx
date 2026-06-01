import { categories } from "@/data/categories";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const totalWorks = categories.reduce((sum, c) => sum + c.count, 0);

  return (
    <section className="relative w-full bg-[#080808] pt-24 pb-40 md:pb-48 lg:pb-56 overflow-hidden">

      {/* Ambient Orbs */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-80 -left-80 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 60%)",
          }}
        />

        <div
          className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1650px] px-6 md:px-10 xl:px-14">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="block h-px w-8 bg-zinc-700" />

          <span
            className="text-[10px] font-semibold uppercase text-zinc-500"
            style={{
              letterSpacing: "0.55em",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Portfolio Collections
          </span>
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">

          <h2
            className="text-white leading-[0.9]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(80px, 9vw, 130px)",
              letterSpacing: "0.01em",
            }}
          >
            Explore
            <br />
            Collections
          </h2>

          <div
            className="lg:max-w-[340px] flex flex-col gap-5 lg:pb-3"
            style={{
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <p className="text-[15px] leading-relaxed text-zinc-400">
              Browse thumbnails, posters and creative work organized by niche.
            </p>

            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[11px] text-zinc-500">
                {totalWorks}+ works across {categories.length} collections
              </span>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {categories.map((category, i) => (
            <div
              key={category.slug}
              className="animate-rise"
              style={{
                animationDelay: `${i * 65}ms`,
                animationFillMode: "both",
              }}
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}