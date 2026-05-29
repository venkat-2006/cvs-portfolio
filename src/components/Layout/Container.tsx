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

      max-w-[1400px]

      mx-auto
      
      px-8
      sm:px-10
      md:px-12
      lg:px-10
      xl:px-12
      "
    >
      {children}
    </div>
  );
}