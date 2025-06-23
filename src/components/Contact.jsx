import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={contactRef}
      id="contact"
      className="py-20 px-6 md:px-16 bg-[#0D5EA6]/90   animate-pulseColor text-white"
    >
      {/* 🪐 Moving Planets */}
      <img
        src="/planet1.png"
        alt="planet"
        className="absolute top-0 left-[47%] w-24 animate-floatY opacity-80"
      />
      <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="mb-6 text-lg text-white/90">
          Interested in working together or have any questions? Drop me a
          message!
        </p>
        <form
          action="https://formspree.io/f/mvgrwqdo" // Replace with your actual endpoint
          method="POST"
          className="grid grid-cols-1 gap-6 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-white/10 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#EAA64D]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-white/10 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#EAA64D]"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="p-3 rounded bg-white/10 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#EAA64D]"
          />
          <button
            type="submit"
            className="bg-[#EAA64D] text-black py-3 px-6 rounded hover:bg-[#C78A3B] transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Success message placeholder (can be conditionally shown) */}
        {/* <p className="mt-4 text-green-400">Thanks! Your message was sent.</p> */}

        <div className="mt-10 flex justify-center gap-6 text-2xl text-white">
          <a
            href="mailto:debjitdeyofficial6@gmail.com"
            aria-label="Email"
            className="hover:text-[#EAA64D] transition duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Debjit-Dey"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#EAA64D] transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/debjit-dey-981b2a1a6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#EAA64D] transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
