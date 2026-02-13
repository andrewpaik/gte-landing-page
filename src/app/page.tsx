import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Speed from "@/components/Speed";
import Ecosystem from "@/components/Ecosystem";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Speed />
      <Ecosystem />
      <Contact />
      <Footer />
    </>
  );
}
