import type { CreatorClient } from "@/data/clients";

type ClientLogoProps = {
  client: CreatorClient;
};

export default function ClientLogo({ client }: ClientLogoProps) {
  return (
    <a
      href={client.social}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${client.name} links`}
      className="group relative flex items-center justify-center rounded-full border border-white/[0.08] ring-1 ring-white/[0.04] bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-2xl overflow-hidden shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 hover:border-purple-500/40 hover:shadow-[0_0_50px_rgba(147,51,234,0.25)] w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 shadow-2xl"
    >
      {/* Absolute Luxury Sweep Sheen Overlay */}
      <div className="absolute inset-y-0 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -left-full group-hover:animate-[shine-sweep_1.2s_ease-in-out] pointer-events-none z-10" />

      {/* Dynamic Refractive Radial Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-purple-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Perfect Circular Center Avatar Frame */}
      <div className="relative z-10 w-[72%] h-[72%] rounded-full border border-white/10 bg-zinc-950/50 p-1 overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-102 ring-4 ring-black/40 shadow-inner">
        <img
          src={client.image}
          alt={client.name}
          className="w-full h-full object-cover rounded-full filter grayscale contrast-[1.1] brightness-[0.9] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500"
          loading="lazy"
        />
      </div>

      {/* Subtle Bottom Drop-Shadow Glow Ring */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-6 bg-purple-500/0 group-hover:bg-purple-500/20 blur-md rounded-full transition-all duration-500 pointer-events-none" />
    </a>
  );
}