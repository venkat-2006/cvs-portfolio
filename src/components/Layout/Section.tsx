type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = "",
}: Props) {
  return (
    <section
      className={`
      py-20
      md:py-28
      lg:py-36
      ${className}
    `}
    >
      {children}
    </section>
  );
}