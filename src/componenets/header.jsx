import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation(); // Get current location

  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent text-white py-3 z-50 transition-colors duration-300 ease-in-out">
      <nav className="container mx-auto flex justify-center items-center px-8">
        <ul className="flex space-x-24 justify-between w-full max-w-3xl">
          <li className="relative group">
            <NavLink 
              to="/" 
              className={({ isActive }) => `hover:text-gray-300 cursor-pointer ${isActive ? 'font-bold' : ''}`}
            >
              HOME
            </NavLink>
            <div className={`absolute left-0 bottom-[-4px] h-[2px] transition-all duration-300 ${location.pathname === '/' ? 'w-12 bg-[#FCFC04]' : 'w-0'}`}></div>
          </li>
          <li className="relative group">
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => `hover:text-gray-300 cursor-pointer ${isActive ? 'font-bold' : ''}`}
            >
              PORTFOLIO
            </NavLink>
            <div className={`absolute left-0 bottom-[-4px] h-[2px] transition-all duration-300 ${location.pathname === '/portfolio' ? 'w-20 bg-[#FCFC04]' : 'w-0'}`}></div>
          </li>
          <li className="relative group">
            <NavLink 
              to="/about-us" 
              className={({ isActive }) => `hover:text-gray-300 cursor-pointer ${isActive ? 'font-bold' : ''}`}
            >
              ABOUT US
            </NavLink>
            <div className={`absolute left-0 bottom-[-4px] h-[2px] transition-all duration-300 ${location.pathname === '/about-us' ? 'w-20 bg-[#FCFC04]' : 'w-0'}`}></div>
          </li>
          <li className="relative group">
            <NavLink 
              to="/service" 
              className={({ isActive }) => `hover:text-gray-300 cursor-pointer ${isActive ? 'font-bold' : ''}`}
            >
              CONTACT
            </NavLink>
            <div className={`absolute left-0 bottom-[-4px] h-[2px] transition-all duration-300 ${location.pathname === '/service' ? 'w-16 bg-[#FCFC04]' : 'w-0'}`}></div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
