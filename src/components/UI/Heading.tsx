type Props = {
  title: string;
  subtitle?: string;
};

export default function Heading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="space-y-4">
      <h2
        className="
        text-4xl
        md:text-5xl
        lg:text-6xl
        font-bold
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
          text-gray-400
          max-w-2xl
          text-base
          md:text-lg
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}