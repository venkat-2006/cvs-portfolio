type Props = {
  total: number;
  active: number;
  onDotClick: (index: number) => void;
};

export default function TestimonialDots({ total, active, onDotClick }: Props) {
  return (
    <div className="flex items-center justify-center gap-2.5 mt-8">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          aria-label={`Go to slide ${i + 1}`}
          className="relative transition-all duration-300 focus-visible:outline-none py-2"
        >
          <span
            className={`block rounded-full transition-all duration-500 ${
              i === active
                ? "w-6 sm:w-8 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                : "w-1.5 h-1.5 bg-white/15 hover:bg-white/35"
            }`}
          />
        </button>
      ))}
    </div>
  );
}