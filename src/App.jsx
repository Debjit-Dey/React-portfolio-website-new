import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experiance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    gsap.from(".animate", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: appRef.current,
        start: "top top",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div ref={appRef} className="bg-ocean-blue   text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
