import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const allProjects = [
  {
    title: "💵 PaisaPartner - Expense Management Web Application",
    desc: "PaisaPartner helps users effortlessly track their income, expenses, and savings — making financial management simple and visually appealing.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Recharts"],
    gif: "/gifs/paisa.png",
    live: "https://paisa-partner-finance-management-we.vercel.app/login",
    github:
      "https://github.com/Debjit-Dey/PaisaPartner--Finance-Management-Website",
  },
  {
    title: "💵  Namaste Bugs - Expense Management Web Application",
    desc: "A modern and responsive project management tool for tracking bugs, managing tasks, and collaborating with team members seamlessly.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Recharts"],
    gif: "/gifs/project.png",
    live: "https://project-management-website-mern-sta.vercel.app",
    github:
      "https://github.com/Debjit-Dey/Project-Management-Website-Mern-Stack-like-Jira",
  },
  {
    title: "🛒 Shop Manager - Seller Product tracker",
    desc: "A complete Shop Management Website for handling product listings, transactions, and inventory with a user-friendly dashboard.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Recharts"],
    gif: "/gifs/shop.png",
    live: "https://shop-management-delta.vercel.app/login",
    github: "https://github.com/Debjit-Dey/shop-management",
  },
  {
    title: "📁 DataHub - File Storage App",
    desc: "Secure file storage platform with login, Cloudinary integration, and download feature.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Cloudinary"],
    gif: "/gifs/datahub.gif",
    live: "https://datahub-wi4k.onrender.com/",
    github:
      "https://github.com/Debjit-Dey/DataHub----Full-Stack-Data-Storage-Project",
  },
  {
    title: "📖 BookStore - Book Management Web Application",
    desc: "An online Bookstore Website for browsing, searching, and purchasing books with seamless cart and checkout features.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    gif: "/gifs/book.png",
    live: "https://debjitdey-bookstore.netlify.app/",
    github: "https://github.com/Debjit-Dey/bookstore",
  },
  {
    title: "✈️ DjDey Vlogs- Travel Vlog Website",
    desc: "A vibrant Travel Vlog Website showcasing scenic journeys, travel experiences, and destination highlights with a modern UI.",
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    gif: "/gifs/vlog.png",
    live: "https://flourishing-mousse-a7a293.netlify.app/",
    github: "https://github.com/Debjit-Dey/React-Vlog-Website",
  },
  {
    title: "Kanban Board Task Management Website",
    desc: "A Kanban Board Task Management Website for organizing, tracking, and prioritizing tasks visually across customizable workflow columns.",
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    gif: "/gifs/todo.gif",
    live: "https://task-management-system-kohl.vercel.app/",
    github: "https://github.com/Debjit-Dey/Task-Management-System",
  },
  {
    title: "Currency Converter Website",
    desc: "A simple and responsive Currency Converter app that allows real-time conversion between multiple international currencies.",
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    gif: "/gifs/currency.png",
    live: "https://currency-converter-gray-five.vercel.app/",
    github: "https://github.com/Debjit-Dey/Currency-Converter",
  },
  {
    title: "Password Generator Website",
    desc: "A secure Password Generator Website that creates strong, customizable passwords with options for length, numbers, and special characters.",
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    gif: "/gifs/password.png",
    live: "https://password-generator-react-drab-phi.vercel.app/",
    github: "https://github.com/Debjit-Dey/password-generator-react",
  },
  {
    title: "Amazon Clone Website",
    desc: "A website that replicates the features and functionality of Amazon.com, including product listing, shopping cart, and checkout.",
    tech: ["HTML", "CSS"],
    gif: "/gifs/amazon.png",
    live: "https://amazon-clone-gamma-ten.vercel.app/",
    github: "https://github.com/Debjit-Dey/Amazon-clone",
  },
  {
    title: "HotStar Clone Website",
    desc: "A website that replicates the features and functionality of HotStar.com, including video streaming, series and content browsing.",
    tech: ["HTML", "CSS", "JavaScript"],
    gif: "/gifs/hotstar.jpg",
    live: "https://hotstar-clone-eta.vercel.app/",
    github: "https://github.com/Debjit-Dey/hotstar-clone",
  },
  {
    title: "IChat- Real-time Chat Application",
    desc: "A real-time chat application enabling instant messaging between users with a clean and interactive interface.",
    tech: ["HTML", "CSS", "JavaScript", "Socket.io", "Nodejs"],
    gif: "/gifs/chat.png",
    live: "https://github.com/Debjit-Dey/Realtime-chat-website",
    github: "https://github.com/Debjit-Dey/Realtime-chat-website",
  },
];

const Projects = () => {
  const sectionRef = useRef();
  const cardRefs = useRef([]);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 6);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, [visibleProjects]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-20 px-6 md:px-16 text-white bg-[#0D5EA6] animate-pulseColor overflow-hidden"
    >
      {/* Floating Planet & Blob omitted for brevity (same as before) */}

      <h2 className="text-4xl font-bold text-center mb-12 relative z-10">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {visibleProjects.map((proj, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="relative bg-white/10 backdrop-blur border border-[#A16D28] text-white p-6 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-300/30 hover:border-[#EAA64D]"
          >
            {proj.gif && (
              <img
                src={proj.gif}
                alt={proj.title}
                className="w-full h-40 object-cover rounded-lg mb-4 border border-white/20"
              />
            )}
            <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
            <p className="text-sm mb-4 text-gray-200">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-[#C78A3B] text-white text-xs font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EAA64D] hover:text-yellow-400 flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 flex items-center gap-1"
                >
                  <FaGithub /> GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#EAA64D] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#C78A3B] transition duration-300 shadow-lg"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
