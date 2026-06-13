const tools = [
  {
    name: "Photoshop",
    abbr: "Ps",
    category: "Design Tool",
    color: "rgba(49,119,185,0.12)",
    border: "rgba(49,119,185,0.28)",
    glow: "rgba(49,119,185,0.18)",
    logo: (
      <svg viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect width="240" height="234" rx="42" fill="#001E36"/>
        <path d="M54 164V69.6h36.8c7.47 0 13.87 1.4 19.2 4.2 5.33 2.8 9.4 6.73 12.2 11.8 2.8 5.07 4.2 10.87 4.2 17.4 0 6.67-1.47 12.53-4.4 17.6-2.93 5.07-7.13 9-12.6 11.8-5.47 2.8-11.93 4.2-19.4 4.2H72.4V164H54zm18.4-43.6h17.2c6.27 0 11.07-1.6 14.4-4.8 3.33-3.2 5-7.6 5-13.2 0-5.73-1.67-10.2-5-13.4-3.33-3.2-8.13-4.8-14.4-4.8H72.4v36.2z" fill="#31A8FF"/>
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
      <svg viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect width="240" height="234" rx="42" fill="#330000"/>
        <path d="M100.4 144.4H72l-6.4 19.6H46l30.4-94.4h27.2L134 164h-27.2l-6.4-19.6zm-5.2-16L84 93.6l-11.2 34.8h22.4zM152 69.6h18.4V164H152V69.6z" fill="#FF9A00"/>
      </svg>
    ),
  },
  {
    name: "Magnific",
    abbr: "Ma",
    category: "AI Upscaler",
    color: "rgba(255,110,199,0.10)",
    border: "rgba(255,110,199,0.28)",
    glow: "rgba(255,110,199,0.18)",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect width="48" height="48" rx="10" fill="#0f0f0f"/>
        <circle cx="24" cy="24" r="10" fill="none" stroke="#FF6EC7" strokeWidth="2.5"/>
        <circle cx="24" cy="24" r="5" fill="#FF6EC7"/>
        <circle cx="24" cy="24" r="2" fill="#0f0f0f"/>
        <line x1="24" y1="10" x2="24" y2="7" stroke="#FF6EC7" strokeWidth="2" strokeLinecap="round"/>
        <line x1="24" y1="41" x2="24" y2="38" stroke="#FF6EC7" strokeWidth="2" strokeLinecap="round"/>
        <line x1="10" y1="24" x2="7" y2="24" stroke="#FF6EC7" strokeWidth="2" strokeLinecap="round"/>
        <line x1="41" y1="24" x2="38" y2="24" stroke="#FF6EC7" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    abbr: "Gp",
    category: "AI Assistant",
    color: "rgba(16,163,127,0.10)",
    border: "rgba(16,163,127,0.28)",
    glow: "rgba(16,163,127,0.18)",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect width="48" height="48" rx="10" fill="#10A37F"/>
        <path d="M24 12c-4.4 0-8 3.6-8 8 0 2.2.9 4.2 2.3 5.7L12 34h6l2-4h8l2 4h6l-6.3-8.3c1.4-1.5 2.3-3.5 2.3-5.7 0-4.4-3.6-8-8-8zm0 4c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" fill="white"/>
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