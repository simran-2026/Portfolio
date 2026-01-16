import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(" ");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
     const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);


  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  }



  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    // {id:"contact", label:"Contact"},
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
      isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"}
       `}>  

      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-5xl font-semibold relative cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Simran</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-[#8245ec]">Verma</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        <ul className=" hidden text-4xl md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id} className='cursor-pointer hover:text-[#8245ec] ${
            activeSection === item.id ? "text-[#8245ec]" : ""}'>
              <button onClick={()=> handleMenuItemClick(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>
       

        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/simran-2026"
          target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
            <FaGithub size={30} />
          </a>

           <a href="https://www.linkedin.com/in/simranverma0101"
          target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
