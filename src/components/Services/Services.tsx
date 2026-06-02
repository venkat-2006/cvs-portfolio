import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section 
      id="services"
      className="relative w-full bg-[#050507] py-20 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/2 -left-40 w-[800px] h-[800px] rounded-full -translate-y-1/2 opacity-60 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, rgba(147, 51, 234, 0.06) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-40 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Minimal Paced Eyebrow Row */}
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="block h-px w-6 bg-purple-500/40" />
          <span
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-400"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Capabilities Matrix
          </span>
        </div>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2
            className="text-white font-black uppercase text-left
                       text-[52px] sm:text-[76px] md:text-[96px] lg:text-[110px] xl:text-[120px]
                       leading-[1.05] sm:leading-[1] md:leading-[0.85]
                       tracking-[0.02em]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
            }}
          >
            What I Do
          </h2>

          <p
            className="text-sm md:text-base leading-relaxed text-zinc-400 lg:max-w-[340px] lg:pb-2 text-left"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Engineered visual assets and creative solutions for premium brands, creators, and platforms seeking distinct market authority.
          </p>
        </div>

        {/* Top Boundary Line Divider */}
        <div className="w-full h-px bg-white/[0.08] mt-12 md:mt-16" />

        {/* Services Iteration Row Map Track */}
        <div className="w-full flex flex-col">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <div className="h-10" />
      </div>
    </section>
  );
}