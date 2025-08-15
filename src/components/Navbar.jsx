import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/image/logoo2.webp"; // Apne logo ka path update karein

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once

  const links = [
    { name: "𝐇𝐨𝐦𝐞", path: "/" },
    { name: "𝐀𝐛𝐨𝐮𝐭", path: "/about" },
    { name: "𝐌𝐞𝐧𝐮", path: "/menu" },
    { name: "𝐆𝐚𝐥𝐥𝐞𝐫𝐲", path: "/Gallery" },
    { name: "𝐂𝐨𝐧𝐭𝐚𝐜𝐭", path: "/contact" },

  ];

  // Dynamic classes based on scroll state
  const headerClasses = `fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
    isScrolled
      ? "bg-white/80 backdrop-blur-md text-[#596528]"
      : "bg-[#241414] text-white"
  }`;

  const navLinkClasses = (isActive) =>
    `transition-colors duration-300 font-medium ${
      isScrolled
        ? isActive ? "text-[#97a066]" : "hover:text-[#97a066]"
        : isActive ? "text-[#e2b84c]" : "hover:text-[#e2b84c]"
    }`;

  const buttonClasses = `px-4 py-2 rounded-md transition-all duration-300 ${
    isScrolled
      ? "border border-[#596528] text-[#596528] hover:bg-[#97a066] hover:text-white"
      : "border border-white text-white hover:bg-[#e2b84c] hover:text-black"
  }`;
  
  const iconClasses = isScrolled ? "text-[#596528]" : "text-white";

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="p-1 rounded">
            <img
              src={Logo}
              alt="Cafe Logo"
              loading="lazy"
              className="h-17 w-auto mx-auto object-contain"
            />
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-8 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path} className={({ isActive }) => navLinkClasses(isActive)}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Book a Table (Desktop) */}
        <div className="hidden md:block">
          <NavLink to="/BookaTable" className={buttonClasses}>
             𝐁𝐨𝐨𝐤 𝐚 𝐓𝐚𝐛𝐥𝐞
          </NavLink>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className={iconClasses} /> : <Menu size={28} className={iconClasses} />}
        </button>
      </div>

      {/* Sidebar (Solid dark, no transparency) */}
      <div
        className={`fixed top-0 right-0 w-64 h-screen bg-[#241414] text-white z-[51] shadow-xl
                    transform transition-transform duration-300 ease-in-out p-6
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="mb-8"
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>
        <ul className="space-y-6 text-base font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block transition-colors duration-300 ${
                    isActive ? "text-[#e2b84c]" : "hover:text-[#e2b84c]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {/* Book a Table (Mobile) */}
          <li>
            <NavLink
              to="/BookaTable"
              onClick={() => setIsOpen(false)}
              className="block border border-white text-center text-white px-4 py-2 rounded-md 
                         hover:bg-[#e2b84c] hover:text-black transition-all duration-300"
            >
               𝐁𝐨𝐨𝐤 𝐚 𝐓𝐚𝐛𝐥𝐞
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
