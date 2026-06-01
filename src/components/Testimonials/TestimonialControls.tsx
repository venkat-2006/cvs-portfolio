type Props = {
  onPrev: () => void;
  onNext: () => void;
};

export default function TestimonialControls({ onPrev, onNext }: Props) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onPrev}
        aria-label="Previous testimonial"
        className="group flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full border border-white/[0.06] bg-gradient-to-b from-[#141416]/60 to-[#0a0a0c]/80 backdrop-blur-xl text-zinc-400 transition-all duration-300 hover:border-purple-500/30 hover:text-white hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.4)] focus-visible:outline-none"
      >
        <svg className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={onNext}
        aria-label="Next testimonial"
        className="group flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full border border-white/[0.06] bg-gradient-to-b from-[#141416]/60 to-[#0a0a0c]/80 backdrop-blur-xl text-zinc-400 transition-all duration-300 hover:border-purple-500/30 hover:text-white hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.4)] focus-visible:outline-none"
      >
        <svg className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}