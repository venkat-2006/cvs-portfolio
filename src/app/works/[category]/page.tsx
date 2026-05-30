// src/app/works/[category]/page.tsx

import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { works } from "@/data/works";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({
  params,
}: Props) {
  const { category: categorySlug } = await params;

  const category = categories.find(
    (c) => c.slug === categorySlug
  );

  if (!category) {
    notFound();
  }

  const filteredWorks = works.filter(
    (work) => work.category === categorySlug
  );

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div
        className="
        fixed
        top-0
        left-1/2
        -translate-x-1/2

        w-[900px]
        h-[900px]

        rounded-full

        bg-purple-500/10

        blur-[180px]

        pointer-events-none

        -z-10
        "
      />

      {/* HERO */}

      <section className="relative pt-32 md:pt-40 pb-20 md:pb-24">
        <div className="container mx-auto px-6">

          <p
            className="
            uppercase
            tracking-[0.4em]
            text-xs
            text-zinc-500
            mb-6
            "
          >
            Creative Collection
          </p>

          <h1
            className="
            font-black
            tracking-tighter
            leading-none

            text-[52px]
            md:text-[90px]
            lg:text-[140px]
            "
          >
            {category.title}
          </h1>

          <div className="mt-8 flex flex-wrap gap-4">
            <div
              className="
              rounded-full

              border
              border-white/10

              bg-white/5

              backdrop-blur-xl

              px-6
              py-3

              text-sm
              "
            >
              {filteredWorks.length} Works
            </div>
          </div>

          <p
            className="
            mt-8

            max-w-2xl

            text-zinc-400

            text-base
            md:text-lg

            leading-relaxed
            "
          >
            {category.description}
          </p>
        </div>
      </section>

      {/* GALLERY */}

      <section className="pb-32 px-4 md:px-6">
        <div className="container mx-auto">

          {filteredWorks.length > 0 ? (
            <div
              className="
              columns-1
              md:columns-2
              xl:columns-3
              2xl:columns-4

              gap-6
              "
            >
              {filteredWorks.map((work) => (
                <div
                  key={work.id}
                  className="
                  group

                  relative

                  break-inside-avoid
                  mb-6

                  overflow-hidden

                  rounded-3xl

                  border
                  border-white/10

                  bg-white/[0.03]

                  backdrop-blur-xl

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:border-white/20
                  "
                >
                  {/* Image */}

                  <img
                    src={work.image}
                    alt={work.title}
                    className="
                    w-full
                    h-auto

                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-110
                    "
                  />

                  {/* Overlay */}

                  <div
                    className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black
                    via-black/50
                    to-transparent

                    opacity-0

                    group-hover:opacity-100

                    transition-all
                    duration-500

                    flex
                    items-end
                    "
                  >
                    <div className="p-6">
                      <h3
                        className="
                        text-xl
                        font-bold
                        text-white
                        "
                      >
                        {work.title}
                      </h3>

                      <p
                        className="
                        text-sm
                        text-zinc-300
                        mt-1
                        "
                      >
                        {category.title}
                      </p>
                    </div>
                  </div>

                  {/* Shine */}

                  <div
                    className="
                    absolute
                    inset-0

                    opacity-0

                    group-hover:opacity-100

                    transition-opacity
                    duration-700

                    bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]

                    -translate-x-full

                    group-hover:translate-x-full
                    "
                  />
                </div>
              ))}
            </div>
          ) : (
            <div
              className="
              text-center

              py-32
              "
            >
              <h2
                className="
                text-3xl
                font-bold
                text-zinc-300
                "
              >
                No works yet
              </h2>

              <p
                className="
                mt-3
                text-zinc-500
                "
              >
                This category will be updated soon.
              </p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}