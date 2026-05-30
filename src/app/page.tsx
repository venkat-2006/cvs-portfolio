// src/app/page.tsx
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Showcase from '@/components/Showcase/Showcase'
import Categories from '@/components/Categories/Categories'
import Services from '@/components/Services/Services'
// import Testimonials from '@/components/Testimonials/Testimonials'
// import About from '@/components/About/About'
// import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Categories />
        <Services />
      </main>

    </>
  )
}