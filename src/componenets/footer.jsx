import React from "react";
import image from "../assests/ccc128.jpg";

function Footer() {
  return (
    <footer className="relative w-full text-white mt-40 bg-black overflow-hidden">
      {/* Watermark as background */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        {" "}
        {/* Add h-full and w-full */}
        <div
          className="absolute transform rotate-[-6deg]"
          style={{
            width: "787px", // Adjusted width
            height: "1016px", // Adjusted height
            top: "-239px", // Fine-tuned top value to balance positioning
            left: "-14px", // Adjust left to show the image properly
            backgroundImage: `url(${image})`,
            backgroundSize: "cover", // Ensures the image covers the div without leaving white space
            backgroundPosition: "center", // Centers the image both horizontally and vertically
            backgroundRepeat: "no-repeat", // No repeat to avoid duplication of image
          }}
        ></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto p-4 flex justify-between">
        <div className="pl-32">
          <h1 className="text-left font-bold text-5xl leading-[52px] tracking-[0.17em]">
            RISHABH SHARMA
          </h1>
          <h2 className="text-left font-bold text-5xl leading-[52px] tracking-[0.17em] mb-4">
            PHOTOGRAPHY
          </h2>
          <p className="text-lg mt-8 tracking-[0.05em] opacity-100 w-96 h-6">
            All Images and Videos Are Copyrighted.
          </p>
          <p className="text-sm mt-2 tracking-[0.05em]">Terms and Conditions</p>
        </div>

        {/* Work Section */}
        <div className="flex flex-col items-end justify-center text-right pr-40">
          <h2 className="text-lg font-bold tracking-[0.17em]">Work</h2>
          <ul className="list-none">
            <li className="py-1 tracking-[0.17em]">Portfolio</li>
            <li className="py-1 tracking-[0.17em]">Service</li>
          </ul>
        </div>
      </div>

      {/* Centered Yellow Line */}
      <div className="relative z-20 flex justify-center mt-4">
        <div className="border-t-2 border-yellow-400 w-[1218px] mt-2 mr-8"></div>
      </div>

      {/* Button Layout Below the Yellow Line */}
      <div className="relative z-10 container mx-auto p-4 flex justify-between mt-4">
        {/* Call and Email Buttons */}
        <div className="flex space-x-4 ml-32">
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

        {/* Facebook and Instagram Buttons */}
        <div className="flex space-x-4 mr-40">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-yellow-400 text-white hover:bg-yellow-500 hover:text-black transition-colors duration-300 w-36 h-11">
              Facebook
            </button>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-yellow-400 text-white hover:bg-yellow-500 hover:text-black transition-colors duration-300 w-36 h-11">
              Instagram
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
