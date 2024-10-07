import React, { useState } from 'react';
import "./home.css"

function Home() {
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

  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image slides
  const slides = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/images/image 8.png`,
      label: "Captured our special day beautifully, each moment immortalized with artistry. A true professional grateful for the memorie1.",
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/images/image 17.png`,
      label: "Captured our special day beautifully, each moment immortalized with artistry. A true professional grateful for the memori2.",
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/images/image 14.png`,
      label: "Captured our special day beautifully, each moment immortalized with artistry. A true professional grateful for the memori3.",
    },
  ];



  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div >
      <div className='relative w-full h-screen flex hero p-4'>   
      {/* <span className="absolute left-20 top-12  box-border h-16 w-16   border-t-8 border-l-8"></span>  */}


        <span className="absolute box-border h-16 w-16 top-24 left-20 border-t-8 border-l-8"></span>

        {/* Heading and Subheading */}
        <div
          className="  inset-x-0 top-[20%] mx-auto justify-center text-center  p-4"
          style={{
            fontFamily: 'Raleway',
            fontSize: '48px',
            fontWeight: '800',
            lineHeight: '78px',
          }}
        >
          <h1 className="text-white">SOM <div  className="inline w-[159px] mx-auto mt-2 border-b-2 border-[#FCFC04]"> </div>SHARMA</h1>

          <p className="text-lg font-light text-white">Professional Photographer</p>
        </div>
        <span className="absolute right-20 bottom-0  box-border h-16 w-16    border-b-8 border-r-8"></span>
      </div>

      <div className="text-white py-12">
        {/* Heading */}
        <div className="relative text-center mb-8">
          <h2 className="font-raleway md:text-[41.89px] font-extrabold md:leading-[49.18px]">
            PORT<span className="w-[159px] mx-auto mt-2 border-b-2 border-[#FCFC04]">FOLIO</span>
          </h2>
        </div>

        {/* Image Slider */}
        <div className="pt-20 w-full flex items-center justify-center relative ">
          <div className="flex w-[80%] justify-center items-center space-x-4 ">
            {/* Left Image */}
            <div className="hidden lg:block transition-transform duration-300 ease-in-out cursor-default"
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
            <div className="hidden lg:block transition-transform duration-300 ease-in-out"
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
            SER<span className="w-[159px] mx-auto mt-2 border-b-2 border-[#FCFC04]">VICE</span>
          </h2>
        </div>


        <div className="px-4 md:px-8 lg:px-16 py-12">
          {/* Grid Container */}
          <div className="mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20 ">
            {/* Card 1 */}
            <div className=" border border-[#FFFFFF] shadow-lg mx-auto p-5  w-fit " >
              {/* <div className="flex justify-center items-center h-full"> */}
              <img
                src={process.env.PUBLIC_URL + '/images/image 10.png'}
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
                  "Weddings: A celebration of love, uniting hearts in joyous vows, creating lifelong memories of togetherness."
                </p>
              </div>
              {/* </div> */}
            </div>

            {/* Card 2 */}
            <div className=" border border-[#FFFFFF] shadow-lg mx-auto p-5  w-fit " >
              {/* <div className="flex justify-center items-center h-full"> */}
              <img
                src={process.env.PUBLIC_URL + '/images/image 10.png'}
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
                  "Weddings: A celebration of love, uniting hearts in joyous vows, creating lifelong memories of togetherness."
                </p>
              </div>
              {/* </div> */}
            </div>

            {/* Card 3 */}

            <div className=" border border-[#FFFFFF] shadow-lg mx-auto p-5  w-fit " >
              {/* <div className="flex justify-center items-center h-full"> */}
              <img
                src={process.env.PUBLIC_URL + '/images/image 10.png'}
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
                  "Weddings: A celebration of love, uniting hearts in joyous vows, creating lifelong memories of togetherness."
                </p>
              </div>
              {/* </div> */}
            </div>
            {/* Card 4 */}
            <div className=" border border-[#FFFFFF] shadow-lg mx-auto p-5  w-fit " >
              {/* <div className="flex justify-center items-center h-full"> */}
              <img
                src={process.env.PUBLIC_URL + '/images/image 10.png'}
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
                  "Weddings: A celebration of love, uniting hearts in joyous vows, creating lifelong memories of togetherness."
                </p>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <button
            className="lg:w-[233px] lg:h-[74px] border border-[#FCFC04] text-center text-lg font-semibold text-[#FCFC04] bg-transparent hover:bg-[#FCFC04] hover:text-black transition-colors"
          >
            View All
          </button>
        </div>


        <div className="relative text-center pt-20 mb-8">
          <h2 className="font-raleway md:text-[41.89px] font-extrabold md:leading-[49.18px] text-white">
            NUMBER <span className='w-[159px] mx-auto mt-2 border-b-2 border-[#FCFC04]'>OF IMPRESSION</span>
          </h2>
        </div>
        <div className=' flex item-center justify-around gap-4 place-items-center h-56 w-80%'>
          <div className='text-2xl text-white'>
            <div className='text-yellow-600'>7+</div>
            <div>Year of Experience</div>
          </div>
          <div className='ml-4 text-2xl text-white'>
            <div className='text-yellow-600'> 150+ </div>
            WEDDINGS COMPLETED SUCCESSFULLY
          </div>
        </div>

        <div className="relative text-center py-15">
          <h2 className="font-raleway md:text-[41.89px] font-extrabold md:leading-[49.18px] text-white">
            TESTI <span className="w-[159px] mx-auto mt-2 border-b-2 border-[#FCFC04]">MONIAL </span>
          </h2>
        </div>

        {/* start */}
        <div id="default-carousel" className="relative mb-4 mt-14 ml-4" data-carousel="static">
          {/* Carousel wrapper */}
          <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                data-carousel-item
              >
                {/* <div className="relative pt-16 flex items-center justify-center"> */}
                <div className="box-content p-6 w-[80%] border-4 border-gray-300 flex items-center mx-auto justify-center gap-20 z-10 bg-red">
                  {/* Image */}

                  <img
                    src={slide.image}
                    className=""
                    alt={`Slide ${slide.id}`}
                    height={300}
                    width={200}
                  />


                  {/* Text */}
                  <div className=" w-1/2 ml-6 text-gray-700 text-center">
                    <p>
                      {slide.label && (
                        <span className="  text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                          {slide.label}
                        </span>
                      )}
                    </p>
                    <div className="mt-4 font-semibold text-white">DAVID WARNER</div>
                  </div>
                </div>
                {/* </div> */}
              </div>
            ))}
          </div>

          {/* Slider indicators */}
          <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-yellow-500" : "bg-white"
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
            F<span className='w-[100px] md:w-[159px] mx-auto mt-2 border-b-2 border-[#FCFC04]'>AQ</span>
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
            <div>How to anticipate and plan to capture great moments at weddings</div>
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
            GLIMPSE  <span className="w-[235px] mx-auto mt-2 border-b-2 border-[#FCFC04]">OF INSTAGRAM</span>
          </h2>

        </div>

        <div className="px-4 lg:px-8 py-12">
          {/* Center the grid container */}
          <div className="flex justify-center">
            <div className="grid lg:grid-cols-2 gap-4">
              {/* Large Images in the First Column */}
              <div className="relative">
                <img
                  src={process.env.PUBLIC_URL + '/images/image 10.png'}
                  alt="Instagram"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Smaller Images in the Second Column */}
              <div className="space-y-4">
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="relative">
                    <img
                      src={process.env.PUBLIC_URL + '/images/image 10.png'}
                      alt="Instagram"
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

    </div>
  )
}

export default Home;
