import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Debjit Dey. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2 text-xl">
        <a
          href="https://github.com/Debjit-Dey"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition duration-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/debjit-dey-981b2a1a6"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
