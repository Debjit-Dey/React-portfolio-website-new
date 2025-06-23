import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion, useMotionValue, useTransform } from "framer-motion";
import StarBackground from "./StarBackground";

const Hero = () => {
  const heroRef = useRef();
  const floatRef = useRef();
  const mouseX = useMotionValue(0);
  const rotate = useTransform(mouseX, [0, 1], [-15, 15]);

  useEffect(() => {
    gsap.to(floatRef.current, {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      mouseX.set(x);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 py-16 text-white bg-[#0D5EA6] animation-pulseColor"
    >
      {/* 🌌 Canvas Stars */}
      <StarBackground />

      {/* 🌫️ Fog/Blur Overlay */}
      {/* <div className="absolute inset-0 z-0 backdrop-blur-[2px] bg-black/10" /> */}

      {/* 🪐 Moving Planets */}
      <img
        src="/planet1.png"
        alt="planet"
        className="absolute top-10 left-10 w-24 animate-floatY opacity-80"
      />
      <img
        src="/planet2.png"
        alt="planet"
        className="absolute bottom-12 right-10 w-32 animate-floatY opacity-60 delay-1000"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        {/* LEFT */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-[#EAA64D]">Debjit Dey</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A passionate Full Stack Web Developer skilled in React.js, Node.js,
            MongoDB & Tailwind CSS — building beautiful and functional web apps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 text-lg bg-[#EAA64D] text-black font-semibold rounded-full shadow-md hover:scale-105 transform transition duration-300"
            >
              View My Work
            </a>
            <a
              href="/Debjit_Dey_Resume.pdf"
              download
              className="px-6 py-3 text-lg border-2 border-[#EAA64D] text-[#EAA64D] rounded-full hover:bg-[#EAA64D] hover:text-black transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          ref={floatRef}
          style={{ rotate }}
          className="w-[280px] md:w-[380px] lg:w-[450px]"
        >
          <img
            src="/hero-illustration.png"
            alt="Debjit Developer"
            className="w-full h-auto rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
