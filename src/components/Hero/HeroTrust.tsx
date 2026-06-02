export default function HeroTrust() {
  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      gap-4
      text-sm
      text-gray-500
      sm:flex-row
      sm:gap-8
      "
    >
      <span>100+ Projects</span>
      <span className="hidden sm:block text-gray-300">|</span> {/* Optional separator for desktop */}
      <span>20+ Clients</span>
      <span className="hidden sm:block text-gray-300">|</span> {/* Optional separator for desktop */}
      <span>3+ Years Experience</span>
    </div>
  );
}