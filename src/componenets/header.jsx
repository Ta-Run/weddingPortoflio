import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent text-white py-3 z-50 transition-colors duration-300 ease-in-out hover:bg-black/70">
      <nav className="container mx-auto flex justify-center items-center px-8">
        {/* <ul className="flex space-x-24 justify-center"> */}
        <ul className="flex space-x-24 justify-between w-full max-w-3xl">
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
            <Link to="/about-us" className="hover:text-gray-300 cursor-pointer">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/service" className="hover:text-gray-300 cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


//Header.jsx