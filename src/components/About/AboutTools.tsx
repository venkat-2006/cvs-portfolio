import Image from "next/image";
const tools = [
  {
    name: "Photoshop",
    abbr: "Ps",
    category: "Design Tool",
    color: "rgba(49,119,185,0.12)",
    border: "rgba(49,119,185,0.28)",
    glow: "rgba(49,119,185,0.18)",
    logo: (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <rect width="48" height="48" rx="10" fill="#001E36" />
    <rect
      x="2"
      y="2"
      width="44"
      height="44"
      rx="8"
      stroke="#31A8FF"
      strokeWidth="1.5"
      fill="none"
    />
    <text
      x="24"
      y="31"
      textAnchor="middle"
      fill="#31A8FF"
      fontSize="18"
      fontWeight="700"
      fontFamily="Arial, sans-serif"
    >
      Ps
    </text>
  </svg>
),
  },
  {
    name: "Illustrator",
    abbr: "Ai",
    category: "Design Tool",
    color: "rgba(255,122,0,0.10)",
    border: "rgba(255,122,0,0.28)",
    glow: "rgba(255,122,0,0.15)",
   logo: (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <rect width="48" height="48" rx="10" fill="#330000" />
    <rect
      x="2"
      y="2"
      width="44"
      height="44"
      rx="8"
      stroke="#FF9A00"
      strokeWidth="1.5"
      fill="none"
    />
    <text
      x="24"
      y="31"
      textAnchor="middle"
      fill="#FF9A00"
      fontSize="18"
      fontWeight="700"
      fontFamily="Arial, sans-serif"
    >
      Ai
    </text>
  </svg>
),
  },
{
  name: "Magnific",
  abbr: "Ma",
  category: "AI Enhancement",
  color: "rgba(255,110,199,0.10)",
  border: "rgba(255,110,199,0.28)",
  glow: "rgba(255,110,199,0.18)",
  logo: (
  <Image
    src="/images/magnific.png"
    width={32}
    height={32}
    alt="Magnific"
  />
),
},
{
  name: "ChatGPT",
  abbr: "GPT",
  category: "Creative Intelligence",
  color: "rgba(16,163,127,0.10)",
  border: "rgba(16,163,127,0.28)",
  glow: "rgba(16,163,127,0.18)",
  logo: (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="10" fill="#10A37F"/>
    <image
      href="https://cdn.jsdelivr.net/npm/@lobehub/icons-static-png@latest/dark/openai.png"
      x="6"
      y="6"
      width="36"
      height="36"
    />
  </svg>
),
},
];
export default function AboutTools() {
  return (
    <div>
      <div className="mb-20">
        <p
          className="text-[10px] font-semibold uppercase text-zinc-500 mb-4"
          style={{ letterSpacing: "0.4em", fontFamily: "'DM Sans', sans-serif" }}
        >
          My Stack
        </p>
        <h3
          className="text-white/90 font-black leading-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(60px, 7vw, 96px)",
            letterSpacing: "0.02em",
          }}
        >
          Tools I Use
        </h3>
      </div>

      {/* 2 cols → 4 cols (was 5) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 xl:gap-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="group relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[170px] sm:min-h-[190px] px-6 py-7 rounded-[28px] border transition-all duration-500 cursor-default hover:-translate-y-2 hover:scale-[1.02]"
            style={{
              borderColor: tool.border,
              backgroundColor: tool.color,
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[28px]"
              style={{
                background: `radial-gradient(ellipse at 50% 0%, ${tool.glow}, transparent 70%)`,
              }}
            />
            <div
              className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent, ${tool.border}, transparent)`,
              }}
            />
            <div
              className="absolute inset-0 rounded-[28px] pointer-events-none"
              style={{
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 40px rgba(255,255,255,0.02)`,
              }}
            />
            <div
              className="relative z-10 w-16 h-16 rounded-[20px] flex items-center justify-center border border-white/[0.08] bg-black/50 shrink-0 group-hover:border-white/20 transition-all duration-300 mb-4"
              style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }}
            >
              {tool.logo}
            </div>
            <div className="relative z-10">
              <h4
                className="text-[16px] lg:text-[18px] font-bold text-white/70 group-hover:text-white transition-colors duration-300 leading-tight"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {tool.name}
              </h4>
              <p
                className="mt-2 text-[11px] uppercase text-white/25"
                style={{ letterSpacing: "0.3em", fontFamily: "'DM Sans', sans-serif" }}
              >
                {tool.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}