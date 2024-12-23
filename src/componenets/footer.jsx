import React, { forwardRef } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation to get current path
import image from "../assests/ccc128.jpg"; // Adjust the path if needed
import './Footer.css'


const Footer = forwardRef((props, ref) => {
  const navigate = useNavigate(); // Hook to navigate
  const location = useLocation(); // Hook to get current location

  // Define the active path
  const activePath = location.pathname; // This gets the current active path

  // Define routes
  const routes = [
    { path: "/", name: "HOME" },
    { path: "/portfolio", name: "PORTFOLIO" },
    { path: "/service", name: "SERVICE" },
    { path: "/about-us", name: "ABOUT US" },
  ];

  // Function to handle page change
  const handlePageChange = (path) => {
    navigate(path); // Navigate to the selected path
  };

  return (
    <footer
      ref={ref}
      className="relative w-full text-white mt-auto "
    >
      {/* Watermark as background */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <div
          className="hidden md:block absolute transform rotate-[-6deg]" // Show only on desktop view
          style={{
            width: "450px",
            height: "612px",
            top: "-145px",
            left: "181px",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 w-ful mx-auto p-4 flex flex-col md:flex-row  items-center text-center md:text-left">
        {/* Left Section */}
        <div className=" w-full md:w-auto  flex-auto">
          <h1 className="font-bold text-5xl leading-[52px] tracking-[0.17em] footerName">
            RISHABH SHARMA <br/> PHOTOGRAPHY
          </h1>
    
          <p className="text-lg mt-8 tracking-[0.05em] opacity-100">
            All Images and Videos Are Copyrighted.
          </p>
          <p className="text-sm mt-2 tracking-[0.05em]">Terms and Conditions</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-end justify-center  w-full md:w-auto">
          <ul className="list-none">
            {routes
              .filter((route) => route.path !== activePath) // Exclude the active page
              .map((route) => (
                <li key={route.path} className="py-1 tracking-[0.17em]">
                  <button
                    onClick={() => handlePageChange(route.path)}
                    className="text-white hover:text-yellow-400 transition-colors duration-300"
                  >
                    {route.name}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Centered Yellow Line */}
      <div className="relative z-20 flex justify-center mt-4">
        <div className="border-t-2 border-yellow-400 w-[1218px] mt-2 mx-auto md:mx-0"></div>
      </div>

      {/* Buttons Layout Below the Yellow Line */}
      <div className="relative z-10 w-full mx-auto p-4 flex flex-col sm:flex-row justify-between mt-4">
        {/* Call and Email Buttons */}
        <div className="flex space-x-4 ml-0 mb-4 sm:mb-0 justify-center sm:justify-start">
          <a href="tel:+1234567890">
            <button className="border border-yellow-400 text-white hover:bg-yellow-500 hover:text-black transition-colors duration-300 w-36 h-11">
              Call
            </button>
          </a>
          <a
            href="https://www.mail.com/login/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-yellow-400 text-white hover:bg-yellow-500 hover:text-black transition-colors duration-300 w-36 h-11">
              Email
            </button>
          </a>
        </div>

        
        <div className="flex space-x-4 mr-0 justify-center sm:justify-start">
        <a href="tel:+1234567890">
        <button className="border border-yellow-400 text-white hover:bg-yellow-500 hover:text-black transition-colors duration-300 w-36 h-11">
          Call
        </button>
      </a>
      <a
        href="https://www.mail.com/login/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="border border-yellow-400 text-white hover:bg-yellow-500 hover:text-black transition-colors duration-300 w-36 h-11">
          Email
        </button>
      </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
