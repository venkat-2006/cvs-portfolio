import Link from "next/link";
import type { Category } from "@/data/categories";

export default function CategoryCard({
  slug,
  title,
  description,
  count,
  gradient,
}: Category) {
  return (
    <Link
      href={`/works/${slug}`}
      className="group block w-full focus-visible:outline-none"
    >
      <article
        className="
          relative
          h-[320px]
          md:h-[360px]

          overflow-hidden
          rounded-[32px]

          border
          border-white/[0.08]

          bg-white/[0.03]

          transition-all
          duration-700

          hover:-translate-y-2
          hover:border-white/[0.18]
        "
      >
        {/* Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-700 group-hover:scale-110`}
        />

        {/* Spotlight */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
          "
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.14), transparent 65%)",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Glass Shine */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 40%)",
          }}
        />

        {/* Count */}
        <div
          className="
            absolute
            top-6
            left-6
            z-20

            px-4
            py-2

            rounded-full

            border
            border-white/10

            bg-black/30
            backdrop-blur-md

            text-[11px]
            uppercase
            tracking-[0.2em]
            text-white/70
          "
        >
          {count} Works
        </div>

        {/* Content */}
        <div
          className="
            absolute
            inset-0
            z-10

            flex
            flex-col
            items-center
            justify-center

            text-center

            px-10
          "
        >
          <h3
            className="text-white leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(52px,5vw,72px)",
              letterSpacing: "0.02em",
            }}
          >
            {title}
          </h3>

          <p className="mt-4 text-white/70 text-[15px] leading-relaxed max-w-[85%]">
            {description}
          </p>

          <div
            className="
              mt-8

              w-[170px]
              h-[52px]

              rounded-full

              border
              border-white/20

              bg-white/10
              backdrop-blur-md

              flex
              items-center
              justify-center
              gap-2

              text-white
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]

              transition-all
              duration-300

              group-hover:bg-white/20
              group-hover:border-white/35
            "
          >
            Explore →
          </div>
        </div>

      </article>
    </Link>
  );
}