import Link from "next/link";
import type { Category } from "@/data/categories";

export default function CategoryCard({
  slug,
  title,
  description,
  count,
  icon,
  gradient,
}: Category) {
  return (
    <Link href={`/works/${slug}`} className="group block w-full focus-visible:outline-none">
      <article
        className="
          relative h-64 md:h-72
          overflow-hidden rounded-2xl
          border border-white/10
          bg-white/5
          transition-all duration-500
          hover:scale-[1.02]
          hover:border-white/20
        "
      >
        {/* Gradient Base */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-700 group-hover:scale-105`}
        />

        {/* Spotlight */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.13), transparent 65%)",
          }}
        />

        {/* Glass top sheen */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, transparent 40%)",
          }}
        />

        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-5 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        />

        {/* Count badge */}
        <div
          className="
            absolute top-5 left-5 z-10
            px-3 py-1.5
            rounded-full
            text-xs font-semibold
            uppercase tracking-widest
            text-white/70
            border border-white/10
            bg-black/30
            backdrop-blur-md
          "
        >
          {count} Works
        </div>

        {/* Inset ring */}
        <div
          className="
            absolute inset-0 rounded-2xl
            ring-1 ring-inset ring-white/10
            group-hover:ring-white/20
            transition-all duration-500
            pointer-events-none
          "
        />

        {/* Content — centred in card */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-8 text-center">

          <h3
            className="text-white font-black tracking-tight leading-none text-4xl md:text-5xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {title}
          </h3>

          <p className="text-sm leading-relaxed text-white/70 max-w-[80%] line-clamp-2">
            {description}
          </p>

          <span
            className="
              mt-1
              inline-flex items-center justify-center gap-2
              w-40
              py-3
              rounded-full
              border border-white/25
              bg-white/10
              backdrop-blur-md
              text-white text-xs font-bold uppercase tracking-[0.2em]
              transition-all duration-300
              group-hover:bg-white/20
              group-hover:border-white/40
              group-hover:scale-105
            "
          >
            Explore
            <span className="text-sm">→</span>
          </span>

        </div>
      </article>
    </Link>
  );
}