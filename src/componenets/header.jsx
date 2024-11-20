import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
const Header = ({ footerRef }) => {
  const [activeLink, setActiveLink] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleScrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
    setActiveLink("contact");
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "SERVICE", path: "/service" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "CONTACT US", path: "/about-us" },

  ];

  return (
    
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
      <nav className="w-full mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Brand/Logo */}
      

        {/* Desktop Menu */}
        <ul className="w-full navbarMenuList hidden md:flex space-x-8">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `transition-all duration-300 ${
                    isActive ? "text-yellow-400 border-b-2 border-yellow-400" : ""
                  } hover:text-gray-300`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden text-3xl focus:outline-none hamburgeBtn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } navbarMobileMenu absolute top-16 right-6 bg-black bg-opacity-90 rounded-lg shadow-lg p-6 w-48 md:hidden`}
        >
          <ul className="flex flex-col space-y-4">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition-all duration-300 ${
                      isActive
                        ? "text-yellow-400 border-b-2 border-yellow-400"
                        : ""
                    } hover:text-gray-300`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>

  );
};

export default Header;
