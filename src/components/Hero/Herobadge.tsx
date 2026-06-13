export default function HeroBadge() {
  return (
    <div
      className="
      inline-flex
      items-center
      gap-3
      px-9
      py-4
      rounded-full
      border
      border-green-500/20
      bg-white/[0.03]
      backdrop-blur-xl
      text-base
      font-semibold
      tracking-wide
      text-green-300
      shadow-[0_0_30px_rgba(34,197,94,0.12)]
      "
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
      </span>
      Available For Projects
    </div>
  );
}