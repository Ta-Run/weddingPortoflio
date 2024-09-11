import React, { useState } from 'react';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    `${process.env.PUBLIC_URL}/images/image 8.png`,
    `${process.env.PUBLIC_URL}/images/image 17.png`,
    `${process.env.PUBLIC_URL}/images/image 19.png`
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      {/* Heading */}
      <div className="relative text-center mb-8">
        <h2 className="font-raleway text-[41.89px] font-extrabold leading-[49.18px]">
          PORTFOLIO
        </h2>

        {/* Underline */}
        <div className="w-[159px] mx-auto mt-2 border-t-2 border-[#FCFC04]"></div>
      </div>

      {/* Image Slider */}
      <div className="flex items-center justify-center relative">
        {/* Previous Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 lg:left-6 z-10 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Slider Content */}
        <div className="flex justify-center items-center space-x-4">
          {/* Left Image */}
          <div className="hidden lg:block transition-transform duration-300 ease-in-out">
            <img
              src={images[(currentIndex + images.length - 1) % images.length]}
              alt="Previous Slide"
              className="w-64 h-64 object-cover rounded-md opacity-70"
            />
          </div>

          {/* Center Image */}
          <div className="transition-transform duration-300 ease-in-out">
            <img
              src={images[currentIndex]}
              alt="Current Slide"
              className="w-80 h-80 object-cover rounded-lg shadow-lg transform scale-110"
            />
          </div>

          {/* Right Image */}
          <div className="hidden lg:block transition-transform duration-300 ease-in-out">
            <img
              src={images[(currentIndex + 1) % images.length]}
              alt="Next Slide"
              className="w-64 h-64 object-cover rounded-md opacity-70"
            />
          </div>
        </div>

        {/* Next Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 lg:right-6 z-10 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
