type ClientTooltipProps = {
  platform: string;
};

export default function ClientTooltip({ platform }: ClientTooltipProps) {
  return (
    <div className="absolute bottom-4 inset-x-0 mx-auto max-w-max flex items-center gap-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 pointer-events-none select-none bg-purple-500/10 border border-purple-500/30 backdrop-blur-md px-3 py-1 rounded-full shadow-[0_4px_12px_rgba(147,51,234,0.2)]">
      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
      <span 
        className="text-[9px] font-bold uppercase tracking-[0.15em] text-purple-300"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        View {platform}
      </span>
    </div>
  );
}