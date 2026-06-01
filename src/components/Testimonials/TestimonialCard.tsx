import type { Testimonial } from "@/data/testimonials";

type Props = {
  testimonial: Testimonial;
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center justify-center gap-1.5 shrink-0 bg-white/[0.02] border border-white/[0.04] px-4 py-2 rounded-full backdrop-blur-md shadow-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" : "text-white/5"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    /* RESPONSIVE UPGRADE: Expanded padding bounds layout configuration to accommodate flex scaling elements cleanly */
    <div className="relative w-full h-auto rounded-[40px] border border-white/[0.06] ring-1 ring-white/[0.08] ring-inset bg-gradient-to-b from-[#0a0a0c]/90 via-[#060608]/95 to-[#020203]/98 backdrop-blur-3xl px-4 sm:px-10 md:px-14 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.85),0_0_1px_1px_rgba(255,255,255,0.02)_inset]">
      
      {/* Hyper-realistic Glass Diagonal Light Sheen */}
      <div
        className="absolute inset-0 pointer-events-none select-none mix-blend-overlay"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 25%, transparent 60%)",
        }}
      />
      
      {/* High-End Refractive Corner Ambient Glow */}
      <div
        className="absolute -top-32 -right-32 w-80 h-80 rounded-full pointer-events-none opacity-40 mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(147,51,234,0.18) 0%, rgba(79,70,229,0.05) 50%, transparent 100%)",
          filter: "blur(50px)",
        }}
      />
      
      {/* Diamond Cut Top Specular Border Edge */}
      <div
        className="absolute top-0 inset-x-0 h-[1px] pointer-events-none select-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 h-full w-full">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-5 w-full">
          
          {/* OPTIMIZED FIXED PILL CONTAINER: Implemented your explicit custom 'mt-8 md:mt-10' layout parameters and fluid size boundaries */}
          <div className="flex items-center gap-3 sm:gap-4 text-left mx-auto w-full max-w-[290px] sm:max-w-xs md:max-w-sm bg-white/[0.01] border border-white/[0.03] p-2.5 sm:p-3 pt-3.5 pb-3.5 pr-4 sm:pr-5 mt-8 md:mt-10 rounded-3xl backdrop-blur-sm shadow-xl">
            <div className="relative shrink-0 ml-1">
              
              {/* Luxury Circle Frame for Avatar */}
              <div className="w-12 h-12 sm:w-14 md:w-16 rounded-full border border-white/[0.12] bg-gradient-to-b from-zinc-800/50 to-zinc-950 shadow-2xl flex items-center justify-center overflow-hidden ring-4 ring-black/40">
                <span
                  className="text-zinc-100 font-bold text-base sm:text-lg md:text-xl tracking-widest pl-[1px]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              
              {/* Premium Verification Accent Badge */}
              <div className="absolute -bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#060608] flex items-center justify-center shadow-[0_2px_8px_rgba(16,185,129,0.4)]">
                <svg className="w-1.5 h-1.5 text-black stroke-[3.5]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Name and Role text blocks */}
            <div className="flex flex-col justify-center min-w-0 pr-1 sm:pr-2">
              <p
                className="text-white font-medium text-[14px] sm:text-[15px] md:text-[17px] tracking-wide antialiased truncate"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {testimonial.name}
              </p>
              <p
                className="text-purple-400/70 font-semibold text-[9px] sm:text-[10px] md:text-[11px] mt-0.5 uppercase tracking-[0.18em] truncate"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {testimonial.role}
              </p>
            </div>
          </div>

          {/* Centered Star Container below the pill layout */}
          <StarRating rating={testimonial.rating} />
        </div>

        {/* Ultra-faded Fine Line Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* Content Box Layout */}
        <div className="relative w-full h-auto flex flex-col items-center justify-center text-center px-2 sm:px-6 md:px-8 pb-4">
          <p
            className="absolute -top-8 sm:-top-10 inset-x-0 mx-auto text-[90px] sm:text-[110px] md:text-[130px] leading-none text-white/[0.02] font-black select-none pointer-events-none text-center"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            “
          </p>
          <p
            className="relative text-zinc-200 text-[14px] sm:text-[16px] md:text-[21px] leading-[1.8] sm:leading-[1.85] font-light tracking-wide antialiased text-center max-w-[540px]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {testimonial.review}
          </p>
        </div>
      </div>
    </div>
  );
}