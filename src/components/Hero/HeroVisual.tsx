export default function HeroVisual() {
  return (
    <div
      className="
      relative

      w-full
      aspect-square

      max-w-[520px]

      mx-auto

      mt-24
      lg:mt-32
      "
    >
      {/* Glow */}
      <div
        className="
        absolute
        inset-0

        rounded-full

        bg-gradient-to-br
        from-purple-600
        via-purple-500
        to-blue-500

        blur-[120px]

        opacity-30
        "
      />

      {/* Main Orb */}
      <div
        className="
        absolute
        inset-0

        rounded-full

        border
        border-white/10

        bg-white/5

        backdrop-blur-xl

        shadow-[0_0_120px_rgba(168,85,247,0.25)]
        "
      />
    </div>
  );
}