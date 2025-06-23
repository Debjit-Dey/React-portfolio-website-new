import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StarBackground from "./StarBackground";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: "🏆",
    title: "3rd Place – Coding Competition",
    desc: "Won 3rd place in 'Crown for Code' at Tech Fest Konark among 100+ participants.",
    cert: "/certificates/coding.jpg",
    color: "#A16D28",
  },
  {
    icon: "🥉",
    title: "3rd Place – Declamation Contest",
    desc: "Secured 3rd position in university-level declamation contest, showcasing strong public speaking skills.",
    cert: "/certificates/declamation.jpg",
    color: "#EAA64D",
  },
  {
    icon: "🥉",
    title: "3rd Place – Elocution Competition",
    desc: "Recognized for articulation and clarity during university elocution competition.",
    cert: "/certificates/elocution.jpg",
    color: "#C78A3B",
  },
  {
    icon: "🎖️",
    title: "NCC 'A' Certificate Holder",
    desc: "Completed NCC training successfully with an 'A' grade certificate.",
    cert: "/certificates/ncc.jpg",
    color: "#64B5F6",
  },
  {
    icon: "🥉",
    title: "3rd Place – University Level Quiz Competition",
    desc: "Achieved 3rd place in a challenging quiz competition at the university level, demonstrating knowledge across various subjects.",
    cert: "/certificates/elocution.jpg",
    color: "#C78A3B",
  },
  {
    icon: "🏆",
    title: "4th Place – University Level Smart India Internal Hackathon",
    desc: "Secured 4th place in the Smart India Hackathon, showcasing innovative problem-solving skills.",
    cert: "/certificates/elocution.jpg",
    color: "#C78A3B",
  },
];

const Highlights = () => {
  const sectionRef = useRef();
  const cardRefs = useRef([]);
  const marqueeRef = useRef();
  const scrollTweenRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      scrollTweenRef.current = gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });

      const pauseScroll = () => scrollTweenRef.current?.pause();
      const resumeScroll = () => scrollTweenRef.current?.play();

      const marquee = marqueeRef.current;
      marquee.addEventListener("mouseenter", pauseScroll);
      marquee.addEventListener("mouseleave", resumeScroll);

      return () => {
        marquee.removeEventListener("mouseenter", pauseScroll);
        marquee.removeEventListener("mouseleave", resumeScroll);
        scrollTweenRef.current?.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const winningImages = [
    "/moments/prize1.jpg",
    "/moments/prize2.jpg",
    "/moments/prize3.jpg",
    "/moments/prize4.jpg",
    "/moments/prize5.jpg",
    "/moments/prize6.jpg",
  ];

  return (
    <section
      id="highlights"
      ref={sectionRef}
      className="relative py-20 px-6 md:px-16 bg-[#0D5EA6]/90 animate-pulseColor text-white overflow-hidden"
    >
      {/* 🌌 Canvas Stars */}
      {/* <StarBackground /> */}
      {/* 🪐 Moving Planets
      <img
        src="/planet1.png"
        alt="planet"
        className="absolute top-10 left-[30%] w-24 animate-floatY opacity-80"
      />
      <img
        src="/planet2.png"
        alt="planet"
        className="absolute bottom-80 right-[30%] w-32 animate-floatY opacity-60 delay-1000"
      /> */}
      <h2 className="text-4xl font-bold text-center mb-12 z-10 relative">
        Highlights
      </h2>
      {/* Highlight Cards */}
      <div className="grid gap-8 md:grid-cols-2 z-10 relative">
        {highlights.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-white/10 backdrop-blur p-6 rounded-lg shadow-xl border-l-4 hover:scale-[1.02] transition duration-300"
            style={{ borderColor: item.color }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{item.icon}</span>
              <h3
                className="text-xl font-semibold"
                style={{ color: item.color }}
              >
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-white/90">{item.desc}</p>
          </div>
        ))}
      </div>
      {/* Auto-scrolling Winning Images */}
      <h3 className="text-2xl font-semibold mt-16 mb-6 text-center">
        Prize-Winning Moments
      </h3>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-6 w-max px-4"
          ref={marqueeRef}
          style={{ willChange: "transform", width: "max-content" }}
        >
          {[...winningImages, ...winningImages].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Winning moment ${idx + 1}`}
              className="scrolling-img shrink-0 h-64 w-[400px] min-w-[400px] rounded-md border border-white/20 shadow-md hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
