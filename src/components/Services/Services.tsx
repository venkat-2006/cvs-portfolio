import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="relative w-full bg-[#080808] py-24 md:py-32 lg:py-40 overflow-hidden">

      {/* Ambient orb */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/2 -left-40 w-[700px] h-[700px] rounded-full -translate-y-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.03) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">

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
            Services
          </span>
        </div>

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

          <h2
            className="text-white leading-[0.9] shrink-0"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(64px, 8vw, 100px)",
              letterSpacing: "0.01em",
            }}
          >
            What I Do
          </h2>

          <p
            className="text-[15px] leading-relaxed text-zinc-400 lg:max-w-[280px] lg:pb-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Creative solutions for brands, creators and businesses that want to stand out.
          </p>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.08] mt-12 lg:mt-16" />

        {/* Cards */}
        <div>
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
         <div className="h-10"></div>

      </div>
    </section>
  );
}