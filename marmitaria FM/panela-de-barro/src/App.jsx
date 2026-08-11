import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights.jsx";
import Menu from "./components/Menu.jsx";
import HowToOrder from "./components/HowToOrder.jsx";
import About from "./components/About.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="site-root">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Highlights />
      <Menu />
      <HowToOrder />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
