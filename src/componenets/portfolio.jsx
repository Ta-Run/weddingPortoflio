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
      {/* Portfolio Section */}
      <div className="text-white py-12">
        {/* Heading */}
        <div className="relative text-center mb-8">
          <h2 className="font-raleway md:text-[41.89px] font-extrabold md:leading-[49.18px] mt-12">
            PORTFOLIO
          </h2>
          {/* Underline */}
          <div className="w-[159px] mx-auto mt-2 border-t-2 border-[#FCFC04]"></div>
        </div>

        {/* Image Slider */}
        <div className="pt-20 flex items-center justify-center relative">
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
                className="md:w-80 md:h-80 object-cover rounded-lg shadow-lg transform scale-110"
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

      {/* Wedding Section */}
      <div className="text-white py-12">
        <div className="relative text-center pt-20 mb-6">
          <h2 className="font-raleway lg:text-[41.89px] font-extrabold lg:leading-[49.18px]">
            WEDDING
          </h2>
          <div className="w-[159px] mx-auto mt-2 border-t-2 border-[#FCFC04]"></div>
        </div>

        <div className="px-4 lg:px-8 py-12">
          {/* Center the grid container */}
          <div className="flex justify-center">
            <div className="grid lg:grid-cols-2 gap-4">
              {/* Large Images in the First Column */}
              <div className="relative">
                <img
                  src={process.env.PUBLIC_URL + '/images/image 17.png'}
                  alt="Large Image"
                  className="w-full h-auto object-cover"
                  style={{ width: '652px', height: '366px' }}
                />
                <img
                  src={process.env.PUBLIC_URL + '/images/image 5.png'}
                  alt="Large Image"
                  className="w-full h-auto pt-6 object-cover"
                  style={{ width: '652px', height: '565px' }}
                />
              </div>

              {/* Small Images in the Second Column */}
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <img
                    src={process.env.PUBLIC_URL + '/images/image 8.png'}
                    alt="Small Image 1"
                    className="w-full h-auto object-cover"
                    style={{ width: '442px', height: '442px' }}
                  />
                </div>
                <div className="relative">
                  <img
                    src={process.env.PUBLIC_URL + '/images/image 19.png'}
                    alt="Small Image 2"
                    className="w-full h-auto object-cover"
                    style={{ width: '442px', height: '479px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>

      {/* Fashion Section */}
      <div className="text-white py-12">
        <div className="relative text-center pt-20 mb-6">
          <h2 className="font-raleway lg:text-[41.89px] font-extrabold lg:leading-[49.18px]">
            FASHION
          </h2>
          <div className="w-[159px] mx-auto mt-2 border-t-2 border-[#FCFC04]"></div>
        </div>

        <div className="px-4 lg:px-8 py-12">
          {/* Center the grid container */}
          <div className="flex justify-center">
            <div className="grid lg:grid-cols-2 gap-4">
              {/* Large Images in the First Column */}
              <div className="relative">
                <img
                  src={process.env.PUBLIC_URL + '/images/image 34.png'}
                  alt="Large Image"
                  className="w-full h-auto object-cover"
                  style={{ width: '652px', height: '366px' }}
                />
                <img
                  src={process.env.PUBLIC_URL + '/images/image 32.png'}
                  alt="Large Image"
                  className="w-full h-auto pt-6 object-cover"
                  style={{ width: '652px', height: '565px' }}
                />
              </div>

              {/* Small Images in the Second Column */}
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <img
                    src={process.env.PUBLIC_URL + '/images/image 33.png'}
                    alt="Small Image 1"
                    className="w-full h-auto object-cover"
                    style={{ width: '442px', height: '442px' }}
                  />
                </div>
                <div className="relative">
                  <img
                    src={process.env.PUBLIC_URL + '/images/image 31.png'}
                    alt="Small Image 2"
                    className="w-full h-auto object-cover"
                    style={{ width: '442px', height: '479px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
};

export default Portfolio;
