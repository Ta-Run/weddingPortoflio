import React, { useState } from "react";
import "./home.css";
import logoImage from "../assests/Vector.png";
import { useNavigate } from "react-router-dom";

import { FaPlus, FaTimes } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [seeAll, setSeeAll] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const images = [
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


  // Function to toggle FAQ answers
  const toggleQuestion = (index) => {
    // If already expanded, close it, otherwise expand
    if (expanded === index) {
      setExpanded(null); // Collapse
    } else {
      setExpanded(index); // Expand
    }
  };

  // Function to toggle See All / See Less
  const toggleSeeAll = () => {
    setSeeAll(!seeAll); // Toggle between true and false
  };


  const slides = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/images/image 17.png`,
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

  const faqs = [
    {
      question: "Can You Capture Our Wedding Day From Start to Finish?",
      answer: "Absolutely! We provide comprehensive coverage of your wedding day, capturing every moment from preparations to the reception."
    },
    {
      question: "Do You Offer Engagement Photo Sessions?",
      answer: "Yes, we offer engagement sessions that allow you to capture beautiful moments before your wedding, providing a great way to get comfortable in front of the camera."
    },
    {
      question: "How Do You Handle Different Lighting Conditions During The Wedding?",
      answer: "We are experienced in working with various lighting conditions, including natural light and indoor venues, ensuring that every photo looks stunning regardless of the environment."
    },
    {
      question: "Can We Customize Our Wedding Photography Package?",
      answer: "Definitely! We offer customizable packages to fit your specific needs, including options for hours of coverage, number of photographers, and additional services."
    },
    {
      question: "How Many Photos Will We Receive From Our Wedding?",
      answer: "The number of photos varies by package, but you can expect to receive hundreds of beautifully edited images that capture the essence of your day."
    },
    {
      question: "When Will We Receive Our Wedding Photos?",
      answer: "Typically, you will receive your edited wedding photos within 4-6 weeks after your wedding day, depending on the season and our current schedule."
    },
    {
      question: "Do You Provide Wedding Albums?",
      answer: "Yes, we offer high-quality wedding albums that beautifully showcase your favorite images from the day, designed to last a lifetime."
    },
    {
      question: "Can You Help Us With A Wedding Photography Timeline?",
      answer: "Absolutely! We can assist in creating a photography timeline that ensures we capture all the key moments of your wedding day."
    },
  ];


  return (
    <div>
      <div className="relative w-full h-screen flex hero object-cover object-center p-4">
        <span className="absolute left-5 sm:left-20 top-5 sm:top-12 box-border h-8 w-8 sm:h-16 sm:w-16 border-t-4 sm:border-t-8 border-l-4 sm:border-l-8"></span>

        <div className="inset-x-0 top-[20%] mx-auto text-center p-4" style={{ fontFamily: "Raleway", lineHeight: "78px" }}>
          <div className="flex flex-col items-center">
            <h1
              className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ lineHeight: "1.2", fontFamily: "Arial, sans-serif" }}
            >
              SOM
              <span className="inline-block mx-2">
                SHARMA
              </span>
            </h1>

            <p
              className="text-white text-xs sm:text-sm font-medium"
              style={{
                fontFamily: "Raleway, sans-serif",
                letterSpacing: "0.2em",
                textAlign: "center",
                marginTop: "20px",
                whiteSpace: "nowrap",
                transform: "scaleX(1.1)",
                transformOrigin: "center",
              }}
            >
              PROFESSIONAL PHOTOGRAPHER
            </p>
          </div>
        </div>

        <span className="absolute right-5 sm:right-20 bottom-5 sm:bottom-12 box-border h-8 w-8 sm:h-16 sm:w-16 border-b-4 sm:border-b-8 border-r-4 sm:border-r-8"></span>
      </div>


      <div className="text-white py-4 mt-10">
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
            {/* Left Image - Only visible on large screens */}
            <div className="hidden lg:block transition-transform duration-300 ease-in-out">
              <img
                src={images[(currentIndex + images.length - 1) % images.length]}
                alt="Previous Slide"
                className="w-20 h-20 md:w-32 md:h-32 lg:w-64 lg:h-64 object-cover rounded-md opacity-70"
              />
            </div>

            {/* Center Image - Adjusts size for different screen widths */}
            <div className="transition-transform duration-300 ease-in-out">
              <img
                src={images[currentIndex]}
                alt="Current Slide"
                className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-lg shadow-lg transform scale-110"
              />
            </div>

            {/* Right Image - Only visible on large screens */}
            <div className="hidden lg:block transition-transform duration-300 ease-in-out">
              <img
                src={images[(currentIndex + 1) % images.length]}
                alt="Next Slide"
                className="w-20 h-20 md:w-32 md:h-32 lg:w-64 lg:h-64 object-cover rounded-md opacity-70"
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
          <button className="lg:w-[233px] lg:h-[74px] border border-[#FCFC04] text-center text-lg font-semibold text-[#FCFC04] bg-transparent hover:bg-[#FCFC04] hover:text-black transition-colors my-20"
            onClick={() => navigate("/portfolio")}
          >
            View All
          </button>
        </div>


        {/* service */}
        <div className="relative text-center pt-6">
          <h2 className="font-raleway md:text-[41.89px] font-extrabold md:leading-[49.18px]">
            SER
            <span className="w-[159px] mx-auto mt-2 border-b-2 border-[#FCFC04]">
              VICE
            </span>
          </h2>
        </div>

        <div className="px-4 md:px-8 lg:px-16 py-12">
          {/* Grid Container */}
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 sm:gap-20 cursor-pointer"
            onClick={() => navigate("/service")}
          >
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
        <div className="flex justify-center mt-8">
          <button className="lg:w-[233px] lg:h-[74px] border border-[#FCFC04] text-center text-lg font-semibold text-[#FCFC04] bg-transparent hover:bg-[#FCFC04] hover:text-black transition-colors"
            onClick={() => navigate("/service")}
          >
            View All
          </button>
        </div>

        {/*  number of merrided*/}
        <div className="relative text-center pt-10 sm:pt-20 mb-4 sm:mb-8">
          <h2
            className="font-raleway text-[20px] sm:text-[28px] md:text-[41.89px] font-bold text-white"
            style={{ fontWeight: 700, lineHeight: 1 }}
          >
            NUMBER{" "}
            <span className="relative inline-block mt-1 sm:mt-2">
              OF IMPRESSION
              <span
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] sm:bottom-[-6px] md:bottom-[-12px] h-[2px] bg-[#FCFC04]"
                style={{ width: "47%" }}
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
              className="text-white font-arial text-base sm:text-lg md:text-[25.89px] font-medium leading-tight tracking-[0.05em] whitespace-nowrap px-4 sm:px-0"
              style={{
                marginLeft: "22px",
                marginRight: "0",
              }}
            >
              WEDDINGS COMPLETED
            </div>
          </div>
        </div>

        {/* testimonial */}
        <div className="relative text-center py-10">
          <h2 className="font-raleway md:text-[41.89px] font-extrabold md:leading-[49.18px]">
            TESTIMONIAL
          </h2>
          <span className="
    w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] 
    mx-auto mt-2 border-b-2 border-[#FCFC04] 
    block ml-auto sm:ml-[51%]
  "></span>
        </div>
      </div>

      <div id="default-carousel" className="relative mt-10 mx-4 sm:mx-12 mb-4" data-carousel="static">

        {/* Carousel wrapper */}
        <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              data-carousel-item
            >
              <div
                className="bg-red-600 carousel-content box-content p-2 sm:p-6 w-full max-w-[90%] sm:max-w-[75%] mx-auto border-4 border-white flex flex-col sm:flex-row-reverse gap-4 items-center justify-center"
                style={{ minWidth: "375px" }}
              >
                {/* Slide Image */}
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="object-cover h-48 w-full sm:w-auto sm:h-[191px]"
                />

                {/* Slide Description */}
                <div className="w-full sm:w-1/2 text-gray-700 text-left">
                  <p className="text-sm sm:text-md leading-normal h-16 overflow-hidden text-ellipsis">
                    {slide.label && (
                      <span className="text-white text-md sm:text-lg">
                        Captured our special day beautifully, each moment
                        immortalized with artistry. A true professional, grateful for
                        the memories.
                      </span>
                    )}
                  </p>
                  <div className="mt-2 text-white">DAVID WARNER</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          {slides.map((_, index) => (
            <button key={index} type="button" className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-yellow-500"
              : "bg-white"}`} aria-current={currentSlide === index} aria-label={`Slide ${index + 1}`} onClick={() =>
                goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* faq */}
      <div className="relative text-center pt-20 mb-6 ">
        <h2
          className="font-raleway md:text-[41.89px] font-extrabold md:leading-[49.18px]">
          F
          <span className="w-[100px] md:w-[159px] mx-auto mt-2 border-b-2 border-[#FCFC04]">
            AQ
          </span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto pt-10 px-4">
        {faqs.slice(0, seeAll ? faqs.length : 4).map((faq, index) => (
          <div key={index} className="border border-gray-600 mb-4 rounded-md overflow-hidden">
            <div
              className="flex justify-between items-center cursor-pointer p-4"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {/* Icon with rotation transition */}
              <div
                className={`transform transition-transform duration-300 ${expanded === index ? "rotate-45" : "rotate-0"
                  }`}
              >
                {expanded === index ? (
                  <FaTimes className="text-white" />
                ) : (
                  <FaPlus className="text-white" />
                )}
              </div>
            </div>

            {/* Collapsible answer with transition */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${expanded === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <hr className="border-t border-gray-600 mx-4" />
              <div className="px-4 pb-4 pt-2 text-gray-400 text-base leading-relaxed text-left">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}

        {/* See All / See Less Button */}
        <div className="flex justify-center mt-6">
          {/* Button to toggle between See All and See Less with smooth transition */}
          <button
            onClick={toggleSeeAll}
            className="w-full max-w-xs lg:max-w-[233px] lg:h-[74px] border border-[#FCFC04] text-center text-lg font-semibold text-[#FCFC04] bg-transparent hover:bg-[#FCFC04] hover:text-black transition-colors my-4"
          >
            {seeAll ? "See Less" : "View All"}
          </button>
        </div>
      </div>


      {/* glimpiss of instagram */}
      <div className="relative text-center pt-20 mb-6">
        <h2 className="font-raleway md:text-[41.89px] font-extrabold md:leading-[49.18px] ">
          GLIMPSE{" "}
          <span className="w-[235px] mx-auto mt-2 border-b-2 border-[#FCFC04]">
            OF INSTAGRAM
          </span>
        </h2>
      </div>

      <div className="pt-10 flex justify-center px-4 md:px-0">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-screen-lg w-full items-stretch">
          <div className="flex flex-col gap-4 items-center">
            <div className="relative group w-full h-[366px]">
              <img
                src={`${process.env.PUBLIC_URL}/images/image 17.png`}
                alt="Large Image 1"
                className="object-cover w-full h-full"
              />
              <a
                href="https://www.instagram.com/yourInstagramHandle"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300 cursor-pointer"
              >
                <img
                  src={logoImage}
                  alt="Instagram Logo"
                  className="w-12 h-12 object-contain"
                />
              </a>
            </div>

            {/* Second Large Image */}
            <div className="w-full h-[565px]">
              <img
                src={`${process.env.PUBLIC_URL}/images/image 5.png`}
                alt="Large Image 2"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 items-center">
            <div className="w-full h-[442px]">
              <img
                src={`${process.env.PUBLIC_URL}/images/image 8.png`}
                alt="Small Image 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full h-[479px]">
              <img
                src={`${process.env.PUBLIC_URL}/images/image 19.png`}
                alt="Small Image 2"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
