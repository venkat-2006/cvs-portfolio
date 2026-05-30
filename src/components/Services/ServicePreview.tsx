type Props = {
  image: string;
  title: string;
  visible: boolean;
};

export default function ServicePreview({ image, title, visible }: Props) {
  return (
    <div
      className="
        relative
        w-[300px] xl:w-[360px]
        aspect-[16/10]
        rounded-2xl
        overflow-hidden
        border border-white/10
        bg-white/5
        shrink-0
      "
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0) scale(1)" : "translateX(40px) scale(0.96)",
        transition: "opacity 0.45s cubic-bezier(0.23,1,0.32,1), transform 0.45s cubic-bezier(0.23,1,0.32,1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        style={{
          transform: visible ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
        }}
      />
      {/* shimmer overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}