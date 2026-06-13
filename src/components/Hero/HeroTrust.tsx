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
      <span>500+ Projects</span>
      <span className="hidden sm:block text-gray-600">|</span>
      <span>40+ Clients</span>
      <span className="hidden sm:block text-gray-600">|</span>
      <span>2+ Years Experience</span>
    </div>
  );
}