import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ footerRef }) => {
  const [activeLink, setActiveLink] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
      setActiveLink("contact");
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent text-white py-4 z-50">
      <nav className="container mx-auto px-6 md:px-8 flex items-center">
        {/* Mobile Menu Button */}
        <div className="md:hidden mb-2">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none text-4xl ml-4" // Increased size
          >
            <span className="text-white">
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8" // Increased size
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5" // Increased stroke width
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8" // Increased size
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5" // Increased stroke width
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </span>
          </button>
        </div>

        {/* Navbar Links for Desktop */}
        <ul className="hidden md:flex flex-row items-center gap-4 md:gap-[12rem] mx-auto">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-all duration-300 ${
                  isActive || activeLink === "home"
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : ""
                }`
              }
              onClick={() => {
                setActiveLink("home");
              }}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-all duration-300 ${
                  isActive || activeLink === "portfolio"
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : ""
                }`
              }
              onClick={() => {
                setActiveLink("portfolio");
              }}
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-all duration-300 ${
                  isActive || activeLink === "service"
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : ""
                }`
              }
              onClick={() => {
                setActiveLink("service");
              }}
            >
              SERVICE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-all duration-300 ${
                  isActive || activeLink === "about-us"
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : ""
                }`
              }
              onClick={() => {
                setActiveLink("about-us");
              }}
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleScrollToFooter}
              className={`hover:text-gray-300 transition-all duration-300 ${
                activeLink === "contact"
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : ""
              }`}
            >
              CONTACT
            </button>
          </li>
        </ul>

        {/* Side Menu for Mobile */}
        <ul
          className={`flex flex-col items-center justify-center gap-[3rem] transition-all duration-500 ease-in-out fixed top-16 left-6 bg-black w-48 h-[440px] p-4 rounded-lg shadow-lg ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-all duration-300 ${
                  isActive || activeLink === "home"
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : ""
                }`
              }
              onClick={() => {
                setActiveLink("home");
                setIsMobileMenuOpen(false); // Close mobile menu on link click
              }}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-all duration-300 ${
                  isActive || activeLink === "portfolio"
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : ""
                }`
              }
              onClick={() => {
                setActiveLink("portfolio");
                setIsMobileMenuOpen(false); // Close mobile menu on link click
              }}
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-all duration-300 ${
                  isActive || activeLink === "service"
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : ""
                }`
              }
              onClick={() => {
                setActiveLink("service");
                setIsMobileMenuOpen(false); // Close mobile menu on link click
              }}
            >
              SERVICE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-all duration-300 ${
                  isActive || activeLink === "about-us"
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : ""
                }`
              }
              onClick={() => {
                setActiveLink("about-us");
                setIsMobileMenuOpen(false); // Close mobile menu on link click
              }}
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => {
                handleScrollToFooter();
                setIsMobileMenuOpen(false); // Close mobile menu on button click
              }}
              className={`hover:text-gray-300 transition-all duration-300 ${
                activeLink === "contact"
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : ""
              }`}
            >
              CONTACT
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
