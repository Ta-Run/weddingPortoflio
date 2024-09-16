import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent text-white py-4 px-6 z-50 transition-colors duration-300 ease-in-out hover:bg-black/70">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">YourLogo</div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-gray-300 cursor-pointer">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/service" className="hover:text-gray-300 cursor-pointer">
              Service
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-gray-300 cursor-pointer">
              About Us
            </Link>
          </li>
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;
