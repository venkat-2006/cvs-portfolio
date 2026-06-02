// src/app/page.tsx

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Showcase from "@/components/Showcase/Showcase";
import Categories from "@/components/Categories/Categories";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import About from "@/components/About/About";
import FeaturedClients from "@/components/Clients/FeaturedClients";

// NEW
import CreativeLab from "@/components/CreativeLab/CreativeLab";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Showcase />

        <Categories />

        <Services />

        <About />

        <Testimonials />

        <FeaturedClients />

        {/* PHASE 11 */}
        <CreativeLab />
      </main>
    </>
  );
}