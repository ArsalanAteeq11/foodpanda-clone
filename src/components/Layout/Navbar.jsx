import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Newsroom", path: "/newsroom" },
    { name: "Partners", path: "/partners" },
    { name: "Panda Ads", path: "/panda-ads" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/careers" },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="shadow w-full h-16.75 flex items-center justify-between px-4 md:px-16 lg:px-24 transition-all duration-500 z-50 ">
      {/* Logo */}
      <img
        src="./images/foodpanda_logo_2023.svg"
        alt=""
        className="cursor-pointer"
      />

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `font-semibold ${isActive ? "border-b-2 border-[#ff2b85]" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <button className="px-8 py-2.5 cursor-pointer rounded-full font-semibold ml-4 bg-[#ff2b85] text-white transition-all duration-500 ">
          Choose loacation
        </button>
        <svg
          className="h-6 w-6 text-black transition-all duration-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="h-6 w-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={({ isActive }) =>
              `font-semibold ${isActive ? "border-t-2 border-[#ff2b85]" : ""}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}

        <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
          New Launch
        </button>

        <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
          Login
        </button>
      </div>
    </nav>
  );
}
