import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJava,
  FaRProject,
  FaJs,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiCplusplus,
  SiPostman,
  SiRedux,
  SiJsonwebtokens,
  SiFramer,
} from "react-icons/si";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

const webSkills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", level: 95 },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500", level: 90 },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
    level: 92,
  },
  { name: "React.js", icon: <FaReact />, color: "text-cyan-400", level: 90 },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", level: 88 },
  { name: "Express.js", icon: "🚀", color: "text-gray-200", level: 85 },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600", level: 87 },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-600", level: 75 },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-sky-400",
    level: 93,
  },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500", level: 80 },
];

const programmingLanguages = [
  { name: "C", icon: <TbBrandCpp /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "R", icon: <FaRProject /> },
  { name: "C#", icon: <TbBrandCSharp /> },
];

const otherTools = [
  { name: "VS Code", icon: <BiLogoVisualStudio /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "NPM", icon: <FaNpm /> },
  { name: "MongoDB Compass", icon: "🧭" },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Context API", icon: "📦" },
  { name: "REST API", icon: "🔗" },
  { name: "JWT", icon: <SiJsonwebtokens /> },
  { name: "GSAP", icon: "🎬" },
  { name: "ScrollTrigger", icon: "📜" },
  { name: "Framer Motion", icon: <SiFramer /> },
];

const Skills = () => {
  const sectionRef = useRef();
  const webRef = useRef();
  const langRef = useRef();
  const toolRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        webRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: webRef.current, start: "top 85%" },
        }
      );
      gsap.fromTo(
        langRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: langRef.current, start: "top 85%" },
        }
      );
      gsap.fromTo(
        toolRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: toolRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden py-20 px-6 md:px-16 bg-[#0D5EA6]/90 text-white text-center animate-pulseColor"
    >
      <h2 className="text-4xl font-bold mb-12 relative z-10">Skills</h2>

      {/* MERN Stack Skills */}
      <div
        ref={webRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16 relative z-10"
      >
        {webSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white/10 rounded-xl hover:scale-105 transition duration-300 backdrop-blur-sm"
          >
            <div className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</div>
            <p className="text-sm font-semibold">{skill.name}</p>
            <div className="w-full mt-2">
              <div className="h-2 bg-white/20 rounded-full">
                <div
                  className="h-2 rounded-full bg-yellow-400 transition-all duration-700 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-xs text-gray-300 mt-1 inline-block">
                {skill.level}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Programming Languages */}
      <div ref={langRef} className="mb-10 relative z-10">
        <h3 className="text-2xl font-bold mb-4 text-yellow-300">
          Programming Languages
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {programmingLanguages.map((lang, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-105 transition"
              title={lang.name}
            >
              <div className="text-3xl mb-1">{lang.icon}</div>
              <p className="text-sm">{lang.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dev Tools */}
      <div ref={toolRef} className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 text-yellow-300">
          Dev Tools & Libraries
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {otherTools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-105 transition"
              title={tool.name}
            >
              <div className="text-3xl mb-1">{tool.icon}</div>
              <p className="text-sm">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
