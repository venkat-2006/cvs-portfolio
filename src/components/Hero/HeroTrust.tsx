export default function HeroTrust() {
  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      gap-4
      text-base
      md:text-lg
      text-gray-400
      font-medium
      sm:flex-row
      sm:gap-8
      "
    >
      <span>100+ Projects</span>
      <span className="hidden sm:block text-gray-600">|</span>
      <span>20+ Clients</span>
      <span className="hidden sm:block text-gray-600">|</span>
      <span>3+ Years Experience</span>
    </div>
  );
}