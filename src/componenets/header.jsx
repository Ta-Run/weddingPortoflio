import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ footerRef }) => {
  const [activeLink, setActiveLink] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
    setActiveLink("contact");
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "SERVICE", path: "/service" },
    { name: "ABOUT US", path: "/about-us" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent text-white py-4 z-50">
      <nav className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Desktop Navbar Links */}
        <ul className="hidden lg:flex flex-row items-center gap-4 lg:gap-[12rem] mx-auto">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `hover:text-gray-300 transition-all duration-300 ${isActive || activeLink === name.toLowerCase() ? "text-yellow-400 border-b-2 border-yellow-400" : ""}`
                }
                onClick={() => {
                  setActiveLink(name.toLowerCase());
                }}
              >
                {name}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              onClick={handleScrollToFooter}
              className={`hover:text-gray-300 transition-all duration-300 ${activeLink === "contact" ? "text-yellow-400 border-b-2 border-yellow-400" : ""}`}
            >
              CONTACT
            </button>
          </li>
        </ul>

        <div className="block lg:hidden mb-2  mt-8 mr-12">
          <button onClick={toggleMobileMenu} className="focus:outline-none text-4xl">
            <span className="text-white">
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <ul className={`flex flex-col items-center justify-center gap-[3rem] transition-all duration-500 ease-in-out fixed top-12 left-56.5rem bg-black w-48 h-[440px] p-4 rounded-lg shadow-lg ${isMobileMenuOpen ? "block" : "hidden"} lg:hidden`}>
  {navLinks.map(({ name, path }) => (
    <li key={name}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `hover:text-gray-300 transition-all duration-300 ${isActive || activeLink === name.toLowerCase() ? "text-yellow-400 border-b-2 border-yellow-400" : ""}`
        }
        onClick={() => {
          setActiveLink(name.toLowerCase()); // Corrected line
          setIsMobileMenuOpen(false);
        }}
      >
        {name}
      </NavLink>
    </li>
  ))}
  <li>
    <button
      onClick={() => {
        handleScrollToFooter();
        setIsMobileMenuOpen(false);
      }}
      className={`hover:text-gray-300 transition-all duration-300 ${activeLink === "contact" ? "text-yellow-400 border-b-2 border-yellow-400" : ""}`}
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
