import { ArrowRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button
      className="
      group
      relative

      overflow-hidden

      inline-flex
      items-center
      justify-center
      gap-4

      min-w-[220px]

      px-10
      py-5

      rounded-full

      bg-white/10
      backdrop-blur-2xl

      border
      border-white/15

      text-white
      font-semibold

      text-base
      md:text-lg

      shadow-[0_0_30px_rgba(255,255,255,0.05)]

      hover:bg-white/15
      hover:border-white/30
      hover:scale-[1.02]

      transition-all
      duration-300
      "
    >
      {/* Shine Effect */}
      <span
        className="
        absolute
        inset-0

        -translate-x-full
        group-hover:translate-x-full

        transition-transform
        duration-1000

        bg-gradient-to-r
        from-transparent
        via-white/20
        to-transparent
        "
      />

      {/* Text */}
      <span className="relative z-10 whitespace-nowrap">
        {children}
      </span>

      {/* Arrow */}
      <ArrowRight
        size={22}
        className="
        relative
        z-10

        transition-transform
        duration-300

        group-hover:translate-x-1
        "
      />
    </button>
  );
}