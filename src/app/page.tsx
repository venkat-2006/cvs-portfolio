import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Showcase from '@/components/Showcase/Showcase'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showcase />
      </main>
    </>
  )
}