import HeroBadge from "./Herobadge";

export default function HeroContent() {
  return (
    <div className="space-y-6">
      <HeroBadge />

      <h1
        className="
        font-black
        leading-[0.9]

        text-5xl
        sm:text-6xl
        md:text-7xl
        lg:text-8xl
        xl:text-[90px]
        "
      >
        CREATING
        <br />
        VISUALS
        <br />
        THAT COMMAND
        <br />
        ATTENTION
      </h1>

      <p
        className="
        text-zinc-400
        max-w-xl
        text-base
        md:text-lg
        "
      >
        Helping brands stand out through premium graphic design,
        branding, social media creatives and visual storytelling.
      </p>
    </div>
  );
}