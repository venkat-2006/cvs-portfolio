type Props = {
  children: React.ReactNode;
};

export default function Container({
  children,
}: Props) {
  return (
    <div
      className="
      w-full

      max-w-[1440px]

      mx-auto

      px-4
      sm:px-6
      md:px-8
      lg:px-10
      xl:px-12
      "
    >
      {children}
    </div>
  );
}