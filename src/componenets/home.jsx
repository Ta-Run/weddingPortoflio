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
      image: `${process.env.PUBLIC_URL}/images/image 17.png`,
      label:
        "Captured our special day beautifully, each moment immortalized with artistry. A true professional grateful for the memorie1.",
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/images/image 17.png`,
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
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "18.78px",
                    letterSpacing: "0.2em", // Increase letter spacing for more width
                    textAlign: "center", // Center the text horizontally
                    whiteSpace: "nowrap", // Prevent text from wrapping to the next line
                    transform: "scaleX(1.1)", // Adjust width with scaling
                    transformOrigin: "center", // Scale from the center
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

      <div className="text-white py-1">
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
        <div className="pt-20 w-full flex items-center justify-center relative ">
          <div className="flex w-[80%] justify-center items-center space-x-4 ">
            {/* Left Image */}
            <div
              className="hidden lg:block transition-transform duration-300 ease-in-out cursor-default"
              onClick={prevSlide}
            >
              <img
                src={images[(currentIndex + images.length - 1) % images.length]}
                alt="Previous Slide"
                className="w-96 h-64 object-cover rounded-md opacity-70"
              />
            </div>

            {/* Center Image */}
            <div className="transition-transform duration-300 ease-in-out">
              <img
                src={images[currentIndex]}
                alt="Current Slide"
                className="w-96 h-80 object-cover rounded-lg shadow-lg transform scale-110"
              />
            </div>

            {/* Right Image */}
            <div
              className="hidden lg:block transition-transform duration-300 ease-in-out"
              onClick={nextSlide}
            >
              <img
                src={images[(currentIndex + 1) % images.length]}
                alt="Next Slide"
                className="w-96 h-64 object-cover rounded-md opacity-70"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="lg:w-[233px] lg:h-[74px] border border-[#FCFC04] text-center text-lg font-semibold text-[#FCFC04] bg-transparent hover:bg-[#FCFC04] hover:text-black transition-colors
              my-20
              "
          >
            View All
          </button>

          {/* Service Card */}
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
          <div className="mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20 ">
            {/* Card 1 */}
            <div className=" border border-[#FFFFFF] shadow-lg mx-auto p-5  w-fit ">
              {/* <div className="flex justify-center items-center h-full"> */}
              <img
                src={process.env.PUBLIC_URL + "/images/image 10.png"}
                alt="Service"
                className="w-full"
                width={200}
                height={200}
              />
              <div className="mt-6">
                <h2 className="font-raleway text-[25.89px] font-semibold leading-[30.39px] text-center text-[#FCFC04] shadow-md">
                  Wedding
                </h2>
                <p className="mt-2 text-md text-center text-white shadow-md">
                  "Weddings: A celebration of love, uniting hearts in joyous
                  vows, creating lifelong memories of togetherness."
                </p>
              </div>
              {/* </div> */}
            </div>

            {/* Card 2 */}
            <div className=" border border-[#FFFFFF] shadow-lg mx-auto p-5  w-fit ">
              {/* <div className="flex justify-center items-center h-full"> */}
              <img
                src={process.env.PUBLIC_URL + "/images/image 10.png"}
                alt="Service"
                className="w-full"
                width={200}
                height={200}
              />
              <div className="mt-6">
                <h2 className="font-raleway text-[25.89px] font-semibold leading-[30.39px] text-center text-[#FCFC04] shadow-md">
                  Wedding
                </h2>
                <p className="mt-2 text-md text-center text-white shadow-md">
                  "Weddings: A celebration of love, uniting hearts in joyous
                  vows, creating lifelong memories of togetherness."
                </p>
              </div>
              {/* </div> */}
            </div>

            {/* Card 3 */}

            <div className=" border border-[#FFFFFF] shadow-lg mx-auto p-5  w-fit ">
              {/* <div className="flex justify-center items-center h-full"> */}
              <img
                src={process.env.PUBLIC_URL + "/images/image 10.png"}
                alt="Service"
                className="w-full"
                width={200}
                height={200}
              />
              <div className="mt-6">
                <h2 className="font-raleway text-[25.89px] font-semibold leading-[30.39px] text-center text-[#FCFC04] shadow-md">
                  Wedding
                </h2>
                <p className="mt-2 text-md text-center text-white shadow-md">
                  "Weddings: A celebration of love, uniting hearts in joyous
                  vows, creating lifelong memories of togetherness."
                </p>
              </div>
              {/* </div> */}
            </div>
            {/* Card 4 */}
            <div className=" border border-[#FFFFFF] shadow-lg mx-auto p-5  w-fit ">
              {/* <div className="flex justify-center items-center h-full"> */}
              <img
                src={process.env.PUBLIC_URL + "/images/image 10.png"}
                alt="Service"
                className="w-full"
                width={200}
                height={200}
              />
              <div className="mt-6">
                <h2 className="font-raleway text-[25.89px] font-semibold leading-[30.39px] text-center text-[#FCFC04] shadow-md">
                  Wedding
                </h2>
                <p className="mt-2 text-md text-center text-white shadow-md">
                  "Weddings: A celebration of love, uniting hearts in joyous
                  vows, creating lifelong memories of togetherness."
                </p>
              </div>
              {/* </div> */}
            </div>
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
            className="font-raleway md:text-[41.89px] font-bold text-white"
            style={{
              fontWeight: "700", // Adjust font weight
              lineHeight: "1.0", // Decrease line height for closer spacing
            }}
          >
            NUMBER{" "}
            <span className="relative inline-block mt-2">
              OF IMPRESSION
              <span
                className="absolute left-0 bottom-[-12px] h-[2px] bg-[#FCFC04]" // Adjust the bottom value to move the line down
                style={{
                  width: "calc(67% - 22px)", // Adjust this value to position the line correctly
                  marginLeft: "132px", // Optional: Adjust as needed for better alignment
                }}
              ></span>
            </span>
          </h2>
        </div>

        <div className="flex items-center justify-around gap-4 h-56 w-[89%]">
          {/* 7+ Section */}
          <div
            className="flex flex-col items-center text-white"
            style={{
              width: "819px", // Width for the frame
              height: "102px", // Height for the frame
              opacity: "1", // Set opacity to 1 for visibility
              marginLeft: "20px", // Add left margin to shift right
            }}
          >
            <div
              className="text-center"
              style={{
                color: "#FCFC04",
                fontFamily: "Poppins",
                fontSize: "67.77px",
                fontWeight: "500",
                lineHeight: "101.65px",
                letterSpacing: "0.05em",
              }}
            >
              7+
            </div>
            <div
              className="text-white text-center"
              style={{
                fontFamily: "Arial",
                fontSize: "25.89px",
                fontWeight: "500",
                lineHeight: "30.39px",
                letterSpacing: "0.05em",
              }}
            >
              YEAR OF EXPERIENCE
            </div>
          </div>

          {/* 150+ Section */}
          <div
            className="flex flex-col items-center text-white"
            style={{
              width: "819px", // Width for the frame
              height: "102px", // Height for the frame
              opacity: "1", // Set opacity to 1 for visibility
              marginLeft: "20px", // Add left margin to shift right
            }}
          >
            <div
              className="text-center"
              style={{
                color: "#FCFC04",
                fontFamily: "Poppins",
                fontSize: "67.77px",
                fontWeight: "500",
                lineHeight: "101.65px",
                letterSpacing: "0.05em",
              }}
            >
              150+
            </div>
            <div
              className="text-white text-center"
              style={{
                fontFamily: "Arial", // Changed font family to Arial
                fontSize: "25.89px",
                fontWeight: "500",
                lineHeight: "30.39px",
                letterSpacing: "0.05em",
                width: "350px", // Updated width to make it smaller
                height: "30px", // Updated height
                opacity: "1", // Set opacity to 1 for visibility
                whiteSpace: "nowrap", // Prevent text from wrapping to the next line
                marginLeft: "-156px",
              }}
            >
              WEDDINGS COMPLETED SUCCESSFULLY
            </div>
          </div>
        </div>

        <div className="relative text-center py-10">
          {" "}
          {/* Adjust the padding value as needed */}
          <h2 className="font-raleway md:text-[41.89px] font-extrabold md:leading-[49.18px] text-white mt-12 mb-0">
            {" "}
            {/* Removed bottom margin */}
            TESTIMONIAL
          </h2>
          <span className="w-[140px] mx-auto mt-2 border-b-2 border-[#FCFC04] block ml-[51%]"></span>{" "}
          {/* Added left margin */}
        </div>

        {/* start */}
        {/* start */}
        {/* start */}
        <div
          id="default-carousel"
          className="relative mb-4 mt-20 ml-4"
          data-carousel="static"
        >
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
                <div className="box-content p-6 w-[80%] border-4 border-gray-300 flex items-center mx-auto justify-center gap-20 z-10 bg-red flex-row-reverse">
                  {/* Image */}
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    height={300}
                    width={200}
                    className="object-cover"
                  />

                  {/* Text */}
                  <div className="w-1/2 mr-6 text-gray-700 text-left">
                    <p className="text-sm leading-normal h-16 overflow-hidden text-ellipsis">
                      {" "}
                      {/* Control height and overflow */}
                      {slide.label && (
                        <span className="text-md text-white sm:text-lg">
                          Captured our special day beautifully, each moment
                          immortalized with artistry. A true professional,
                          grateful for the memories.
                        </span>
                      )}
                    </p>
                    <div className="mt-2 text-white leading-normal">
                      DAVID WARNER
                    </div>
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

        <div className="App">
          <div className="px-8 lg:px-8 py-1">
            {/* Center the grid container */}
            <div className="flex justify-center">
              {/* Set 2 columns and center the grid with padding */}
              <div
                className="grid grid-cols-2 gap-8 mx-2 my-12"
                style={{ paddingLeft: "140px" }}
              >
                {" "}
                {/* Adjust padding-left as needed */}
                {/* Custom margin values */}
                {/* Large Image in the First Cell of the First Row */}
                <div className="relative">
                  {/* Large Image without link */}
                  <img
                    src={image17} // Imported image
                    alt="Large Image"
                    className="object-cover"
                    style={{
                      width: "652px", // Set the specified width
                      height: "366px", // Set the specified height
                      opacity: 1, // Set opacity to 1 for visibility
                    }}
                  />

                  {/* Centered Logo with link */}
                  <div
                    className="absolute transition-opacity duration-300" // Add transition for smooth effect
                    style={{
                      width: "104px",
                      height: "104px",
                      top: "42%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      opacity: 0, // Initially hidden
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = 0.8; // Show logo on hover
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = 0; // Hide logo when not hovering
                    }}
                  >
                    <a
                      href="https://www.instagram.com/yourInstagramHandle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src={logoImage}
                        alt="Logo"
                        className="object-cover w-full h-full logo-image"
                      />
                    </a>
                  </div>
                </div>
                {/* First Small Image in the Second Cell of the First Row */}
                <div className="relative">
                  <img
                    src={image8} // Imported image
                    alt="Small Image 1"
                    className="object-cover"
                    style={{
                      width: "442px",
                      height: "442px",
                      opacity: 1, // Set to 1 for visibility
                    }}
                  />
                </div>
                {/* Second Small Image in the First Cell of the Second Row */}
                <div className="relative">
                  <img
                    src={image5} // Imported image
                    alt="Small Image 2"
                    className="object-cover"
                    style={{
                      width: "652px", // Custom width
                      height: "557px", // Custom height
                      opacity: 1, // Set to 1 for visibility
                      position: "absolute", // Set position to absolute
                      top: "-80px", // Set the top position (use quotes for string value)
                    }}
                  />
                </div>
                {/* Third Small Image in the Second Cell of the Second Row */}
                <div className="relative">
                  <img
                    src={image19} // Imported image
                    alt="Small Image 3"
                    className="object-cover"
                    style={{
                      width: "442px", // Custom width
                      height: "479px", // Custom height
                      opacity: 1, // Set to 1 for visibility
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CSS for zoom effect */}
          <style>
            {`
      .logo-image {
        transition: transform 0.3s ease; /* Smooth transition for zoom effect */
      }

      .logo-image:hover {
        transform: scale(1.1); /* Zoom effect on hover */
      }
    `}
          </style>
        </div>

        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Home;
