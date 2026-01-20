
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
  ];
  return (
    <nav
      className={`fixed top-0 pt-8  w-full z-50  transition-all duration-300
      ${isScrolled ? "bg-[#050414]/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}
      px-8`} // FIXED: stronger desktop padding
    >
      <div className=" max-w-7xl mx-auto">
        {/* FIXED: increased navbar height */}
        <div className="flex  h-20 items-center justify-between text-white">

          {/* LOGO */}
          <div className="font-bold cursor-pointer text-2xl lg:text-7xl tracking-wide">
            {/* FIXED: larger logo for desktop */}
            <span className="text-[#8245ec]">&lt;</span>
            <span>Simran</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-[#8245ec]">Verma</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-12 text-base lg:text-5xl text-gray-300">
            {/* FIXED: increased spacing + font size */}
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition-all duration-200
                hover:text-[#8245ec]
                ${activeSection === item.id ? "text-[#8245ec]" : ""}`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* SOCIAL ICONS */}
          <div className="hidden md:flex items-center gap-6">
            {/* FIXED: larger icons */}
            <a
              href="https://github.com/simran-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaGithub size={45} />
            </a>

            <a
              href="https://www.linkedin.com/in/simranverma0101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaLinkedin size={45} />
            </a>
          </div>

          {/* MOBILE MENU ICON */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                size={28}
                className="text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                size={28}
                className="text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] bg-[#050414]/90 backdrop-blur-xl rounded-xl shadow-xl md:hidden">
          <ul className="flex flex-col items-center gap-5 py-6 text-base text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec]
                ${activeSection === item.id ? "text-[#8245ec]" : ""}`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex gap-6 pt-4">
              <FaGithub size={22} />
              <FaLinkedin size={22} />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
