import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "🛜 Web Developer Intern at Labmentix",
    period: "May 2025 - Current (6 months)",
    desc: [
      "Built and maintained web applications using React.js and Node.js",
      "Collaborated with cross-functional teams to deliver high-quality software",
      "Implemented responsive designs and optimized performance",
    ],
  },
  {
    title: "🛜 Web Developer Intern at Proxenix",
    period: "June 2025 - August 2025 (2 months)",
    desc: ["Built seamless responsive web applications using mern stack"],
  },
  {
    title: "👨‍💻 Core Team Member – GJUS&T Coders Club",
    period: "July 2023 – July 2024",
    desc: [
      "Organized 10+ coding competitions and tech workshops",
      "Led 'Tech Titan' initiative promoting peer education",
      "Conducted monthly coding tests, hackathons, and fests",
    ],
  },
  {
    title: "🏆 Coding Contest Winner – Tech Fest 'Konark'",
    period: "Feb 2025",
    desc: [
      "Secured 3rd position in the 'Crown for Code' competition",
      "Excelled under pressure among top university coders",
    ],
  },
];

const education = [
  {
    title: "🎓 B.Tech in CSE – GJUS&T, Hisar",
    period: "2022 – 2026",
    desc: [
      "CGPA: 7.59 / 10",
      "Studied DSA, DBMS, CN, OS, OOP, and Advanced DSA",
    ],
  },
  {
    title: "🎓 Class 6-12 - Jawahar Navodaya Vidyalaya, Dihibagnan, Hooghly",
    period: "2014-2021",
    desc: ["Studied Python, MySQL, HTML, File Handling "],
  },
];

const Experience = () => {
  const expRef = useRef();
  const eduRef = useRef();
  const expCards = useRef([]);
  const eduCards = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        expCards.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: expRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        eduCards.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: eduRef.current,
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      className="relative py-20 px-6 md:px-16 bg-[#0D5EA6] text-white overflow-hidden animate-pulseColor"
    >
      {/* 🪐 Background Blobs */}
      <svg
        className="absolute top-0 right-0 w-[500px] opacity-10 z-0 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#EAA64D"
          d="M54.9,-65.1C70.5,-56.1,83.7,-39.1,83.1,-22.7C82.5,-6.4,68.2,9.3,57.8,24.1C47.5,38.8,41,52.5,30.1,62.7C19.3,72.8,4.1,79.4,-9.6,81.9C-23.3,84.5,-35.5,83.1,-44.5,75.1C-53.5,67.1,-59.3,52.6,-65.6,39C-71.8,25.3,-78.4,12.6,-80.5,-1.4C-82.6,-15.4,-80.2,-30.9,-72.8,-44.8C-65.4,-58.7,-53.1,-71,-38.2,-79.1C-23.3,-87.1,-5.7,-90.9,9.6,-91.1C24.9,-91.4,38.2,-88.2,54.9,-65.1Z"
          transform="translate(100 100)"
        />
      </svg>
      {/* 💼 Experience Section */}
      <div ref={expRef} className="relative z-10 mb-16">
        <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
        <div className="space-y-10">
          {experiences.map((item, index) => (
            <div
              key={index}
              ref={(el) => (expCards.current[index] = el)}
              className="bg-white/10 backdrop-blur p-6 rounded-lg border-l-4 border-[#EAA64D] shadow-xl hover:scale-[1.02] transition duration-300"
            >
              <h3 className="text-xl font-semibold text-[#EAA64D] mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-white/70 mb-3">{item.period}</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-white/90">
                {item.desc.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* 🪐 Background Blobs */}
      <svg
        className="absolute bottom-0 left-0 w-[500px] opacity-10 z-0 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#EAA64D"
          d="M54.9,-65.1C70.5,-56.1,83.7,-39.1,83.1,-22.7C82.5,-6.4,68.2,9.3,57.8,24.1C47.5,38.8,41,52.5,30.1,62.7C19.3,72.8,4.1,79.4,-9.6,81.9C-23.3,84.5,-35.5,83.1,-44.5,75.1C-53.5,67.1,-59.3,52.6,-65.6,39C-71.8,25.3,-78.4,12.6,-80.5,-1.4C-82.6,-15.4,-80.2,-30.9,-72.8,-44.8C-65.4,-58.7,-53.1,-71,-38.2,-79.1C-23.3,-87.1,-5.7,-90.9,9.6,-91.1C24.9,-91.4,38.2,-88.2,54.9,-65.1Z"
          transform="translate(100 100)"
        />
      </svg>
      {/* 🎓 Education Section */}
      <div ref={eduRef} className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-10">Education</h2>
        <div className="space-y-10">
          {education.map((item, index) => (
            <div
              key={index}
              ref={(el) => (eduCards.current[index] = el)}
              className="bg-white/10 backdrop-blur p-6 rounded-lg border-l-4 border-[#C78A3B] shadow-xl hover:scale-[1.02] transition duration-300"
            >
              <h3 className="text-xl font-semibold text-[#C78A3B] mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-white/70 mb-3">{item.period}</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-white/90">
                {item.desc.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
