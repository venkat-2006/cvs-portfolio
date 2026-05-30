// src/app/works/page.tsx
import Link from 'next/link'
import { categories } from '@/data/categories'
import CategoryCard from '@/components/Categories/CategoryCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Works — All Categories',
  description: 'Browse all creative works by category.',
}

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-black pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Back */}
        <Link
          href="/"
          className="
            inline-flex items-center gap-2
            text-zinc-500 hover:text-white
            text-sm mb-14 transition-colors
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <p className="text-zinc-600 uppercase tracking-[0.3em] text-xs font-semibold mb-5">
            Portfolio
          </p>
          <h1
            className="text-white font-bold tracking-tighter leading-none"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
          >
            All Works
          </h1>
          <p className="text-zinc-500 mt-6 text-base max-w-md leading-relaxed">
            Pick a category to explore the full gallery.
          </p>
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.slug} {...cat} />
          ))}
        </div>
      </div>
    </main>
  )
}