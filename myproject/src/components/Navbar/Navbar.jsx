import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#1a1a1a]/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="py-5 flex justify-between items-center text-white">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span>Sardar</span>
          <span className="text-[#8245ec]">/</span>
          <span>Nazeer</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-colors duration-300 hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%]
          bg-[#1f1f1f]/95 backdrop-blur-lg rounded-xl shadow-lg p-6 md:hidden"
        >
          <ul className="flex flex-col items-center space-y-5 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition-colors duration-300 hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Social Icons */}
          <div className="flex justify-center space-x-5 mt-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;