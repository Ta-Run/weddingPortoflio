import React, { useState } from "react";
import "./home.css";
import image17 from "../assests/image 17.png";
import image5 from "../assests/image 5.png";
import image19 from "../assests/image 19.png";
import image8 from "../assests/image 8.png";
import logoImage from "../assests/Vector.png";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    `${process.env.PUBLIC_URL}/images/image 17.png`,
    `${process.env.PUBLIC_URL}/images/image 17.png`,
    `${process.env.PUBLIC_URL}/images/image 19.png`,
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

  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image slides
  const slides = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/images/image 14.png`,
      label:
        "Captured our special day beautifully, each moment immortalized with artistry. A true professional grateful for the memorie1.",
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/images/image 14.png`,
      label:
        "Captured our special day beautifully, each moment immortalized with artistry. A true professional grateful for the memori2.",
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/images/image 14.png`,
      label:
        "Captured our special day beautifully, each moment immortalized with artistry. A true professional grateful for the memori3.",
    },
  ];

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div>
      <div className="relative w-full h-screen flex hero p-4">
        <span className="absolute left-20 top-12  box-border h-16 w-16   border-t-8 border-l-8"></span>

        {/* <span className="absolute box-border h-16 w-16 top-24 left-20 border-t-8 border-l-8"></span> */}

        {/* Heading and Subheading */}
        <div
          className="  inset-x-0 top-[20%] mx-auto justify-center text-center  p-4"
          style={{
            fontFamily: "Raleway",
            fontSize: "48px",
            fontWeight: "1000",
            lineHeight: "78px",
          }}
        >
          <div className="flex flex-col items-center">
            <h1
              className="text-white font-bold text-7xl"
              style={{
                fontFamily: "Arial, sans-serif",
                lineHeight: "1.2", // Increase line height for more space between lines
                marginTop: "85px", // Shifts the entire h1 down
              }}
            >
              SOM
              <span className="inline-block mx-2"></span>
              <div className="inline w-[900px] mx-auto mt-4 border-b-4 border-[#FCFC04]"></div>
              <span className="inline-block mx-2"></span>
              SHARMA
            </h1>

            <div
              style={{
                width: "159px", // Match the width of the upper line
                height: "0px",
                border: "2px solid #FCFC04",
                margin: "30px 0", // Vertical margin to create space between elements
              }}
            ></div>

            <div className="flex justify-center">
              <div className="flex justify-center">
                <p
                  className="text-white"
                  style={{
                    width: "100%", // Ensure the container is wide enough
                    maxWidth: "500px", // Set a max width to control it
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "15px",
                    fontWeight: "500",
                    lineHeight: "18.78px",
                    letterSpacing: "0.2em", // Increase letter spacing for more width
                    textAlign: "center", // Center the text horizontally
                    whiteSpace: "nowrap", // Prevent text from wrapping to the next line
                    transform: "scaleX(1.1)", // Adjust width with scaling
                    transformOrigin: "center", // Scale from the center
                    marginLeft: "-357px",
                  }}
                >
                  PROFESSIONAL PHOTOGRAPHER
                </p>
              </div>
            </div>
          </div>
        </div>
        <span className="absolute right-20 bottom-12 box-border h-16 w-16 border-b-8 border-r-8"></span>
      </div>

      <div className="text-white py-4">
        {/* Heading */}
        <div className="relative text-center mb-8">
          <h2 className="font-raleway md:text-[41.89px] font-extrabold md:leading-[49.18px]">
            PORT
            <span className="w-[159px] mx-auto mt-2 border-b-2 border-[#FCFC04]">
              FOLIO
            </span>
          </h2>
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

        <div className="flex justify-center">
          <button className="lg:w-[233px] lg:h-[74px] border border-[#FCFC04] text-center text-lg font-semibold text-[#FCFC04] bg-transparent hover:bg-[#FCFC04] hover:text-black transition-colors my-20">
            View All
          </button>
        </div>

        <div className="relative text-center mt-8">
          <h2 className="font-raleway text-[41.89px] font-extrabold leading-[49.18px] text-white">
            SER
            <span className="w-[159px] mx-auto mt-2 border-b-2 border-[#FCFC04]">
              VICE
            </span>
          </h2>
        </div>

        <div className="px-4 md:px-8 lg:px-16 py-12">
          {/* Grid Container */}
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 sm:gap-20">
            {Array(4)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="border border-[#FFFFFF] shadow-lg mx-auto p-5 w-full max-w-xs sm:max-w-none"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/image 10.png"}
                    alt="Service"
                    className="w-full h-auto" // Ensures the image maintains aspect ratio
                    width={200}
                    height={200}
                  />
                  <div className="mt-4 sm:mt-6">
                    <h2 className="font-raleway text-xl sm:text-[25.89px] font-semibold leading-[30.39px] text-center text-[#FCFC04] shadow-md">
                      Wedding
                    </h2>
                    <p className="mt-2 text-sm sm:text-md text-center text-white shadow-md">
                      "Weddings: A celebration of love, uniting hearts in joyous
                      vows, creating lifelong memories of togetherness."
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <button className="lg:w-[233px] lg:h-[74px] border border-[#FCFC04] text-center text-lg font-semibold text-[#FCFC04] bg-transparent hover:bg-[#FCFC04] hover:text-black transition-colors">
            View All
          </button>
        </div>

        <div className="relative text-center pt-20 mb-8">
          <h2
            className="font-raleway text-[28px] md:text-[41.89px] font-bold text-white"
            style={{ fontWeight: 700, lineHeight: 1 }}
          >
            NUMBER{" "}
            <span className="relative inline-block mt-2">
              OF IMPRESSION
              <span
                className="absolute left-1/2 transform translate-x-[-40px] bottom-[-12px] h-[2px] bg-[#FCFC04]"
                style={{ width: "67%" }}
              ></span>
            </span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around gap-8 h-auto w-[89%] md:h-56">
          {/* 7+ Section */}
          <div
            className="flex flex-col items-center text-white text-center"
            style={{ opacity: 1, marginLeft: "20px" }}
          >
            <div className="text-[#FCFC04] font-poppins text-6xl md:text-[67.77px] font-medium leading-[1.2] tracking-[0.05em]">
              7+
            </div>
            <div className="text-white font-arial text-lg md:text-[25.89px] font-medium leading-[1.2] tracking-[0.05em]">
              YEAR OF EXPERIENCE
            </div>
          </div>

          {/* 150+ Section */}
          <div
            className="flex flex-col items-center text-white text-center"
            style={{ opacity: 1, marginLeft: "20px" }}
          >
            <div className="text-[#FCFC04] font-poppins text-6xl md:text-[67.77px] font-medium leading-[1.2] tracking-[0.05em]">
              150+
            </div>
            <div
              className="text-white font-arial text-lg md:text-[25.89px] font-medium leading-[1.2] tracking-[0.05em] whitespace-nowrap"
              style={{
                marginLeft: "22px",
                marginRight: "0",
                paddingLeft: "-2px",
                paddingRight: "10px",
              }}
            >
              WEDDINGS COMPLETED SUCCESSFULLY
            </div>
          </div>
        </div>

        <div className="relative text-center py-10">
          <h2 className="font-raleway md:text-[41.89px] font-extrabold md:leading-[49.18px] text-white mt-12 mb-0">
            TESTIMONIAL
          </h2>
          <span
            className="
    w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] 
    mx-auto mt-2 border-b-2 border-[#FCFC04] 
    block ml-auto sm:ml-[51%]
  "
          ></span>
        </div>

        {/* start**************************************************************************************** */}

        <div
          id="default-carousel"
          className="relative mt-10 mx-4 sm:mx-12 mb-4"
          data-carousel="static"
        >
          <style>
            {`
      @media (max-width: 640px) {
        .carousel-content {
          padding-left: 10px;  /* Adjust left padding for mobile */
          padding-right: 10px; /* Adjust right padding for mobile */
        }
      }
    `}
          </style>

          {/* Carousel wrapper */}
          <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                data-carousel-item
              >
                <div
                  className={`carousel-content box-content p-2 sm:p-6 w-full max-w-[90%] sm:max-w-[75%] mx-auto 
            border-4 border-gray-300 flex items-center justify-center 
            ${window.innerWidth < 640 ? "flex-col gap-4" : "flex-row-reverse"} 
            bg-red`}
                  style={{ minWidth: "375px" }} // Ensure minimum width of 375px
                >
                  {/* Image */}
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="object-cover h-48 w-full sm:w-auto sm:h-[191px]"
                  />

                  {/* Text (Hidden on Mobile) */}
                  <div className="hidden sm:block w-full sm:w-1/2 text-gray-700 text-left">
                    <p className="text-sm sm:text-md leading-normal h-16 overflow-hidden text-ellipsis">
                      {slide.label && (
                        <span className="text-white text-md sm:text-lg">
                          Captured our special day beautifully, each moment
                          immortalized with artistry. A true professional,
                          grateful for the memories.
                        </span>
                      )}
                    </p>
                    <div className="mt-2 text-white">DAVID WARNER</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider indicators */}
          <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-yellow-500" : "bg-white"
                }`}
                aria-current={currentSlide === index}
                aria-label={`Slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* end */}

      <div className="relative text-center pt-20 mb-6 ">
        <h2 className="font-raleway text-[32px] md:text-[41.89px] font-extrabold leading-[40px] md:leading-[49.18px] text-white">
          F
          <span className="w-[100px] md:w-[159px] mx-auto mt-2 border-b-2 border-[#FCFC04]">
            AQ
          </span>
        </h2>
      </div>

      <div className="pt-10 space-y-[20px] w-full flex flex-col items-center ">
        <div className="flex justify-between w-[80%] box-border p-4 border-2 items-center rounded-lg text-white">
          <div>Understanding of wedding photography</div>
          <div>+</div>
        </div>

        <div className="flex justify-between w-[80%]  box-border p-4 border-2 items-center rounded-lg text-white">
          <div>Planning &amp; management of wedding shoots</div>
          <div>+</div>
        </div>

        <div className="flex justify-between w-[80%]  box-border p-4 border-2 items-center rounded-lg text-white">
          <div>
            How to anticipate and plan to capture great moments at weddings
          </div>
          <div>+</div>
        </div>

        <div className="flex justify-between w-[80%]  box-border p-4 border-2 items-center rounded-lg text-white">
          <div>Wedding tool kit for a wedding photographer</div>
          <div>+</div>
        </div>

        <div className="flex justify-between w-[80%]  box-border p-4 border-2 items-center rounded-lg text-white">
          <div>How to create great wedding photos</div>
          <div>+</div>
        </div>
      </div>

      <div className="relative text-center pt-20 mb-6">
        <h2 className="font-raleway lg:text-[41.89px] font-extrabold lg:leading-[49.18px] text-white ">
          GLIMPSE{" "}
          <span className="w-[235px] mx-auto mt-2 border-b-2 border-[#FCFC04]">
            OF INSTAGRAM
          </span>
        </h2>
      </div>
      {/* .................................................. */}

      <div className="py-12" style={{ paddingLeft: "1rem" }}>
        {/* Center the grid container */}
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Large Images in the First Column */}
            <div className="relative flex flex-col gap-6">
              {/* First Image with Instagram Overlay */}
              <div className="relative group">
                <img
                  src={process.env.PUBLIC_URL + "/images/image 17.png"}
                  alt="Large Image 1"
                  className="hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
                  style={{ width: "652px", height: "366px" }}
                />

                {/* Instagram Logo with Link */}
                <div
                  className="absolute opacity-0 group-hover:opacity-80 transition-all duration-300 
                       flex justify-center items-center top-1/2 left-1/2 
                       transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ width: "104px", height: "104px" }}
                >
                  <a
                    href="https://www.instagram.com/yourInstagramHandle" // Replace with your Instagram handle
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // For security reasons
                    className="block w-full h-full"
                  >
                    <img
                      src={logoImage} // Using the imported logo
                      alt="Instagram Logo"
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
              </div>

              {/* Second Large Image */}
              <img
                src={process.env.PUBLIC_URL + "/images/image 5.png"}
                alt="Large Image 2"
                className="hover:scale-105 transition-transform duration-300 ease-in-out pt-6 object-cover"
                style={{ width: "652px", height: "565px" }}
              />
            </div>

            {/* Small Images in the Second Column */}
            <div className="flex flex-col gap-4">
              <div className="relative">
                <img
                  src={process.env.PUBLIC_URL + "/images/image 8.png"}
                  alt="Small Image 1"
                  className="hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
                  style={{ width: "442px", height: "442px" }}
                />
              </div>
              <div className="relative">
                <img
                  src={process.env.PUBLIC_URL + "/images/image 19.png"}
                  alt="Small Image 2"
                  className="hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
                  style={{ width: "442px", height: "479px" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Inline Styles for Hover and Responsive Design */}
        <style>
          {`
          @media (max-width: 768px) {
            .grid {
              grid-template-columns: 1fr; /* Stacks columns on small screens */
            }
            .relative {
              margin-bottom: 1rem; /* Add spacing between stacked items */
            }
            img {
              width: 100%; /* Full width on mobile */
              height: auto; /* Maintain aspect ratio */
            }
          }
        `}
        </style>
      </div>
    </div>
  );
}

export default Home;
