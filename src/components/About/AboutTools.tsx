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
    name: "After Effects",
    abbr: "Ae",
    category: "Motion Tool",
    color: "rgba(158,120,255,0.10)",
    border: "rgba(158,120,255,0.28)",
    glow: "rgba(158,120,255,0.18)",
    logo: (
      <svg viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect width="240" height="234" rx="42" fill="#00005B"/>
        <path d="M100.4 144.4H72l-6.4 19.6H46l30.4-94.4h27.2L134 164h-27.2l-6.4-19.6zm-5.2-16L84 93.6l-11.2 34.8h22.4zM194 120.4c0 3.47-.53 6.4-1.6 8.8H148c.53 5.07 2.27 8.93 5.2 11.6 2.93 2.67 6.67 4 11.2 4 3.47 0 6.53-.73 9.2-2.2 2.67-1.47 4.67-3.47 6-6h16c-2.13 6.53-5.93 11.73-11.4 15.6-5.47 3.87-12.07 5.8-19.8 5.8-6.4 0-12.13-1.4-17.2-4.2-5.07-2.8-9.07-6.8-12-12-2.93-5.2-4.4-11.27-4.4-18.2 0-6.93 1.47-13 4.4-18.2 2.93-5.2 6.93-9.2 12-12 5.07-2.8 10.8-4.2 17.2-4.2 6.27 0 11.87 1.4 16.8 4.2 4.93 2.8 8.8 6.67 11.6 11.6 2.8 4.93 4.2 10.53 4.2 16.8v-1.4zm-17.6-5.6c-.27-4.53-1.87-8.07-4.8-10.6-2.93-2.53-6.53-3.8-10.8-3.8-4.13 0-7.6 1.27-10.4 3.8-2.8 2.53-4.53 6.07-5.2 10.6h31.2z" fill="#9999FF"/>
      </svg>
    ),
  },
  {
    name: "Premiere Pro",
    abbr: "Pr",
    category: "Video Tool",
    color: "rgba(234,149,255,0.08)",
    border: "rgba(234,149,255,0.25)",
    glow: "rgba(234,149,255,0.14)",
    logo: (
      <svg viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect width="240" height="234" rx="42" fill="#0D0036"/>
        <path d="M54 164V69.6h34.8c7.47 0 13.87 1.4 19.2 4.2 5.33 2.8 9.4 6.73 12.2 11.8 2.8 5.07 4.2 10.87 4.2 17.4 0 6.67-1.47 12.53-4.4 17.6-2.93 5.07-7.13 9-12.6 11.8-5.47 2.8-11.93 4.2-19.4 4.2H72.4V164H54zm18.4-43.6h15.2c6.27 0 11.07-1.6 14.4-4.8 3.33-3.2 5-7.6 5-13.2 0-5.73-1.67-10.2-5-13.4-3.33-3.2-8.13-4.8-14.4-4.8H72.4v36.2zM134 164V69.6h34.8c7.47 0 13.87 1.4 19.2 4.2 5.33 2.8 9.4 6.73 12.2 11.8 2.8 5.07 4.2 10.87 4.2 17.4 0 6.67-1.47 12.53-4.4 17.6-2.93 5.07-7.13 9-12.6 11.8-5.47 2.8-11.93 4.2-19.4 4.2H152.4V164H134zm18.4-43.6h15.2c6.27 0 11.07-1.6 14.4-4.8 3.33-3.2 5-7.6 5-13.2 0-5.73-1.67-10.2-5-13.4-3.33-3.2-8.13-4.8-14.4-4.8H152.4v36.2z" fill="#E774FF"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    abbr: "Fi",
    category: "UI Tool",
    color: "rgba(255,100,130,0.08)",
    border: "rgba(255,100,130,0.25)",
    glow: "rgba(255,100,130,0.14)",
    logo: (
      <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-8">
        <path d="M19 28.5C19 24.358 22.358 21 26.5 21C30.642 21 34 24.358 34 28.5C34 32.642 30.642 36 26.5 36C22.358 36 19 32.642 19 28.5Z" fill="#1ABCFE"/>
        <path d="M4 43.5C4 39.358 7.358 36 11.5 36H19V43.5C19 47.642 15.642 51 11.5 51C7.358 51 4 47.642 4 43.5Z" fill="#0ACF83"/>
        <path d="M19 6V21H26.5C30.642 21 34 17.642 34 13.5C34 9.358 30.642 6 26.5 6H19Z" fill="#FF7262"/>
        <path d="M4 13.5C4 17.642 7.358 21 11.5 21H19V6H11.5C7.358 6 4 9.358 4 13.5Z" fill="#F24E1E"/>
        <path d="M4 28.5C4 32.642 7.358 36 11.5 36H19V21H11.5C7.358 21 4 24.358 4 28.5Z" fill="#A259FF"/>
      </svg>
    ),
  },
];

export default function AboutTools() {
  return (
    <div>
      {/* Header — more space, bigger title */}
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

      {/* Premium grid — 2 cols → 3 cols → 5 cols */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 xl:gap-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="group relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[170px] sm:min-h-[190px] px-6 py-7 rounded-[28px] border transition-all duration-500 cursor-default hover:-translate-y-2 hover:scale-[1.02]"
            style={{
              borderColor: tool.border,
              backgroundColor: tool.color,
            }}
          >
            {/* Hover radial glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[28px]"
              style={{
                background: `radial-gradient(ellipse at 50% 0%, ${tool.glow}, transparent 70%)`,
              }}
            />

            {/* Top shine */}
            <div
              className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent, ${tool.border}, transparent)`,
              }}
            />

            {/* Luxury inner border */}
            <div
              className="absolute inset-0 rounded-[28px] pointer-events-none"
              style={{
                boxShadow: `
                  inset 0 1px 0 rgba(255,255,255,0.08),
                  inset 0 0 40px rgba(255,255,255,0.02)
                `,
              }}
            />

            {/* Logo box */}
            <div
              className="relative z-10 w-16 h-16 rounded-[20px] flex items-center justify-center border border-white/[0.08] bg-black/50 shrink-0 group-hover:border-white/20 transition-all duration-300 mb-4"
              style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }}
            >
              {tool.logo}
            </div>

            {/* Name + category */}
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