import React from 'react';
import image from '../assests/ccc128.jpg'; // Adjust the path accordingly

function Footer() {
    return (
        <footer className="relative w-full text-white py-10 bg-black overflow-hidden">
            {/* Watermark as background */}
            <div className="absolute inset-0">
                <div
                    className="absolute transform rotate-[-29.04deg] "
                    style={{
                        width: '703px',
                        height: '1318px',
                        top: '-500px',  // Adjust the vertical position if needed
                        left: '-384px', // Adjust the horizontal position if needed
                        backgroundImage: `url(${image})`, // Using imported image
                        backgroundSize: 'cover', // Adjust to fit the container
                        backgroundPosition: 'center', // Center the image
                    }}
                ></div>
            </div>

            {/* Footer Content */}
            <div className="relative z-10 container mx-auto p-4 flex justify-between">
                <div className="pl-64">
                    <h1 className="text-left font-bold text-5xl leading-[52px] tracking-[0.17em]">
                        Rishabh Sharma
                    </h1>
                    <h2 className="text-left font-bold text-5xl leading-[52px] tracking-[0.17em] mb-4">
                        Photography
                    </h2>
                    <p className="text-lg mt-8 tracking-[0.05em] opacity-100 w-96 h-6">
                        All Images and Videos Are Copyrighted.
                    </p>
                    <p className="text-sm mt-2 tracking-[0.05em]">
                        Terms and Conditions
                    </p>
                </div>

                {/* Work Section */}
                <div className="flex flex-col items-end justify-center text-right pr-60">
                    <h2 className="text-lg font-bold tracking-[0.17em]">
                        Work
                    </h2>
                    <ul className="list-none">
                        <li className="py-1 tracking-[0.17em]">Portfolio</li>
                        <li className="py-1 tracking-[0.17em]">Service</li>
                    </ul>
                </div>
            </div>

            {/* Centered Yellow Line */}
            <div className="flex justify-center mt-4">
                <div className="border-t-2 border-yellow-400 w-[1159px] mt-2"></div>
            </div>

            {/* Button Layout Below the Yellow Line */}
            <div className="relative z-10 container mx-auto p-4 flex justify-between mt-4">
                {/* Call and Email Buttons */}
                <div className="flex space-x-4 ml-44">
                    <a href="tel:+1234567890">
                        <button className="border border-yellow-400 text-white hover:bg-yellow-500 hover:text-black transition-colors duration-300 w-36 h-11">
                            Call
                        </button>
                    </a>
                    <a href="https://www.mail.com/login/" target="_blank" rel="noopener noreferrer">
                        <button className="border border-yellow-400 text-white hover:bg-yellow-500 hover:text-black transition-colors duration-300 w-36 h-11">
                            Email
                        </button>
                    </a>
                </div>

                {/* Facebook and Instagram Buttons */}
                <div className="flex space-x-4 mr-44">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <button className="border border-yellow-400 text-white hover:bg-yellow-500 hover:text-black transition-colors duration-300 w-36 h-11">
                            Facebook
                        </button>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
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
