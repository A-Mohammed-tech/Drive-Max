import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import Manufacturing from "./sections/Manufacturing";
import Quality from "./sections/Quality";
import VisionMission from "./sections/VisionMission";
import Contact from "./sections/Contact";
import useActiveSection from "./hooks/useActiveSection";
import { navLinks } from "./data/content";

const sectionIds = navLinks.map((l) => l.id);

export default function App() {
  const activeId = useActiveSection(sectionIds);
  // Set when a visitor clicks "Enquire about this" on a product card.
  const [enquiry, setEnquiry] = useState(null);

  const handleEnquire = useCallback((product) => {
    setEnquiry({ product, nonce: Date.now() });
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand-red focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar activeId={activeId} />
      <main id="main">
        <Hero />
        <About />
        <Products onEnquire={handleEnquire} />
        <Manufacturing />
        <Quality />
        <VisionMission />
        <Contact enquiry={enquiry} />
      </main>
      <Footer />
    </>
  );
}
