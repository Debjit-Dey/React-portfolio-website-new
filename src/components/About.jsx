import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative overflow-hidden py-20 px-6 md:px-16 text-center text-white bg-[#0D5EA6]/90 animate-pulseColor"
    >
      {/* 🪐 Decorative Planets */}
      <img
        src="/planet1.png"
        alt="planet"
        className="absolute top-12 left-50 w-20 opacity-40 animate-floatY pointer-events-none"
      />
      <img
        src="/planet2.png"
        alt="planet"
        className="absolute bottom-6 right-40 w-28 opacity-30 animate-floatY delay-1000 pointer-events-none"
      />

      {/* 🧬 Blob Background */}
      <svg
        className="absolute top-0 left-0 w-[500px] opacity-10 z-0 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#EAA64D"
          d="M54.9,-65.1C70.5,-56.1,83.7,-39.1,83.1,-22.7C82.5,-6.4,68.2,9.3,57.8,24.1C47.5,38.8,41,52.5,30.1,62.7C19.3,72.8,4.1,79.4,-9.6,81.9C-23.3,84.5,-35.5,83.1,-44.5,75.1C-53.5,67.1,-59.3,52.6,-65.6,39C-71.8,25.3,-78.4,12.6,-80.5,-1.4C-82.6,-15.4,-80.2,-30.9,-72.8,-44.8C-65.4,-58.7,-53.1,-71,-38.2,-79.1C-23.3,-87.1,-5.7,-90.9,9.6,-91.1C24.9,-91.4,38.2,-88.2,54.9,-65.1Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* 💬 Text Content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          I'm <span className="font-semibold text-yellow-300">Debjit Dey</span>,
          a passionate and detail-oriented Full Stack Web Developer with a
          strong foundation in data structures, algorithms, and building
          scalable applications using{" "}
          <span className="font-medium text-[#EAA64D]">React.js</span>,{" "}
          <span className="font-medium text-[#EAA64D]">Node.js</span>, and{" "}
          <span className="font-medium text-[#EAA64D]">MongoDB</span>. I love
          turning ideas into reality through code and solving real-world
          problems. I'm always eager to learn and grow in collaborative
          environments.
        </p>
      </div>
    </section>
  );
};

export default About;
