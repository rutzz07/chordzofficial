import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutSection from "../components/AboutSection";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
   
      <AboutSection />
         <Services />
      <Stats />
      <Projects />
      <FAQ />
      <CTA />
      <Footer/>
    </>
  );
}