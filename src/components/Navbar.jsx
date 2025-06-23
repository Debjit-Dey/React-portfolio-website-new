import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Highlights", to: "highlights" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        scrolled ? "bg-[#0D5EA6]/90 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold text-[#EAA64D] tracking-wider">
          Debjit.dev
        </h1>

        <div className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-sm font-medium hover:text-yellow-300 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDark(!dark)}
            className="text-lg md:text-xl focus:outline-none hover:text-yellow-300"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D5EA6]/95 backdrop-blur-sm px-6 py-4 text-white">
          <ul className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-lg font-medium hover:text-yellow-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
