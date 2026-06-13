



export default function AboutPhilosophy() {
  return (
    <div className="relative">

      <div className="w-full h-px bg-white/[0.06] mb-20" />

      {/* Decorative quote mark */}
      <div
        className="absolute -top-8 left-0 select-none pointer-events-none"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "220px",
          lineHeight: 1,
          color: "rgba(255,255,255,0.035)",
          letterSpacing: "-0.05em",
        }}
      >
        "
      </div>

      {/* Purple ambient glow */}
      <div   
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: "700px",
          height: "400px",
          background: "radial-gradient(ellipse at 15% 60%, rgba(139,92,246,0.07), transparent 65%)",
        }}
      />

      <div className="relative max-w-6xl px-1">

        {/* Label + thin rule */}
        <div className="flex items-center gap-5 mb-12">
          <p
            className="text-[13px] font-semibold uppercase text-zinc-500"
            style={{ letterSpacing: "0.45em", fontFamily: "'DM Sans', sans-serif" }}
          >
            Creative Philosophy
          </p>
          <span
            className="flex-1 h-px max-w-[80px]"
            style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.08), transparent)" }}
          />
        </div>

        <h3
          className="font-black leading-[1.0]"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(62px, 9vw, 124px)",
            letterSpacing: "0.01em",
          }}
        >
          {/* Line 1 */}
          <span className="block text-white/90">
            Good design should
          </span>

          {/* Line 2 — outline only, fixed via paint-order trick */}
          <span
            className="block relative"
            style={{
              WebkitTextStroke: "2px rgba(139,92,246,0.75)",
              color: "transparent",
              paintOrder: "stroke fill",
            }}
          >
            stop scrolling
            {/* Gradient underline */}
            <span
              className="absolute left-0 -bottom-1 pointer-events-none"
              style={{
                width: "55%",
                height: "2px",
                background: "linear-gradient(90deg, rgba(139,92,246,0.55), transparent)",
              }}
            />
          </span>

          {/* Line 3 */}
          <span className="block text-white/90">
            and start{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(255,255,255,0.12)",
              }}
            >
              conversations.
            </span>
          </span>
        </h3>

        {/* Byline */}
        <div className="mt-14 flex items-center gap-5">
          <span
            className="block h-px w-16"
            style={{ background: "linear-gradient(90deg, rgba(139,92,246,0.45), transparent)" }}
          />
          <p
            className="text-[10px] uppercase text-white/22"
            style={{ letterSpacing: "0.38em", fontFamily: "'DM Sans', sans-serif" }}
          >
            CVS GFX — Est. 2022
          </p>
        </div>

      </div>

      <div className="w-full h-px bg-white/[0.06] mt-20" />
    </div>
  );
}