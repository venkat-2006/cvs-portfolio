import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Showcase from "@/components/Showcase/Showcase";
import Categories from "@/components/Categories/Categories";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import About from "@/components/About/About";
import FeaturedClients from "@/components/Clients/FeaturedClients";
import CreativeLab from "@/components/CreativeLab/CreativeLab";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed Global Glass Carriage Navigation Layer */}
      <Navbar />
      

      <main className="w-full relative">
        {/* Anchor: Back to Top / Home */}
       
        <div id="hero">
          <Hero />
        </div>

        {/* Anchor: Work Showcase */}
        <div id="showcase">
          <Showcase />
        </div>

        <Categories />

        {/* Anchor: Services Offerings */}
        <div id="services">
          <Services />
        </div>

        <About />

        {/* Anchor: Client Reviews */}
        <div id="testimonials">
          <Testimonials />
        </div>

        <FeaturedClients />

        {/* Anchor: Creative Playgrounds Lab */}
        <div id="creative-lab">
          <CreativeLab />
        </div>

        {/* Anchor: Frequently Asked Questions */}
        <div id="faq">
          <FAQ />
        </div>
        
        {/* Anchor: Secure Contact Terminal Footprint */}
        <div id="contact">
          <Footer />
        </div>
      </main>
    </>
  );
}