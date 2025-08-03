import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Cup from "../assets/image/cuuun.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "𝐻𝑜𝓂𝑒", path: "/" },
    { name: "𝒜𝒷𝑜𝓊𝓉", path: "/about" },
    { name: "𝑀𝑒𝓃𝓊", path: "/menu" },
    { name: "𝒢𝒶𝓁𝓁𝑒𝓇𝓎", path: "/Gallery" },
    { name: "𝒞𝑜𝓃𝓉𝒶𝒸𝓉", path: "/contact" },
  ];

  return (
    <header className="bg-[#241414] text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img
            src={Cup}
            alt="Somethings Brewing Logo"
            loading="lazy"
            className="h-9 w-9"
          />
          <span className="text-lg font-bold text-[#d4b06c]">
            𝒮𝑜𝓂𝑒𝓉𝒽𝒾𝓃𝑔𝓈𝐵𝓇𝑒𝓌𝒾𝓃𝑔
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-8 text-sm font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive ? "text-[#e2b84c]" : "hover:text-[#e2b84c]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Book a Table (Desktop) */}
        <div className="hidden md:block">
          <NavLink
            to="/book-table"
            className="border border-white text-white px-4 py-2 rounded-md 
                       hover:bg-[#e2b84c] hover:text-black transition-all duration-300"
          >
            𝐵𝑜𝑜𝓀 𝒶 𝓉𝒶𝒷𝓁𝑒
          </NavLink>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#241414] text-white z-50 p-6 
                    transform transition-transform duration-300 ease-in-out
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
              to="/book-table"
              onClick={() => setIsOpen(false)}
              className="block border border-white text-center text-white px-4 py-2 rounded-md 
                         hover:bg-[#e2b84c] hover:text-black transition-all duration-300"
            >
              𝐵𝑜𝑜𝓀 𝒶 𝓉𝒶𝒷𝓁𝑒
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
