import type { CreatorClient } from "@/data/clients";
import ClientLogo from "./ClientLogo";

type ClientRowProps = {
  clients: CreatorClient[];
  direction: "left" | "right";
};

export default function ClientRow({ clients, direction }: ClientRowProps) {
  // Duplicating the sequence heavily to prevent layout stitching lines on ultra-wide screens
  const infiniteSequence = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="group/row-rail relative flex w-full overflow-hidden py-4 select-none">
      {/* 
        PREMIUM SLOWDOWN: Normal runtime runs at a brisk 32s loop speed.
        Hovering drops it seamlessly to a luxurious 128s drag speed (25% speed velocity).
      */}
      <div
        className={`flex gap-8 sm:gap-12 shrink-0 will-change-transform ${
          direction === "left"
            ? "animate-[marquee-left_32s_linear_infinite] group-hover/row-rail:[animation-duration:128s]"
            : "animate-[marquee-right_32s_linear_infinite] group-hover/row-rail:[animation-duration:128s]"
        }`}
      >
        {infiniteSequence.map((client, idx) => (
          <ClientLogo key={`marquee-logo-${direction}-${client.id}-${idx}`} client={client} />
        ))}
      </div>
    </div>
  );
}