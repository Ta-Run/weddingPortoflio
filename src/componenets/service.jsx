import React from 'react';

const Service = () => {
  return (
    <div className="relative p-4">
      {/* Title Section */}
      <div className="relative text-center mb-8">
        <h2 className="font-raleway text-[41.89px] font-extrabold leading-[49.18px]">
          SERVICE
        </h2>

        <div className="w-[159px] mx-auto mt-2 border-t-2 border-[#FCFC04]"></div>
      </div>


      <div className="px-4 md:px-8 lg:px-16 py-12">
        {/* Grid Container */}
        <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="relative border border-[#FFFFFF] shadow-lg mx-auto max-w-[531px]" style={{ height: '607px' }}>
            <div className="relative flex justify-center items-center h-full">
              <img
                src={process.env.PUBLIC_URL + '/images/image 10.png'}
                alt="Service"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-black bg-opacity-60 w-full"> {/* Changed background color and opacity */}
                <h2 className="font-raleway text-[25.89px] font-semibold leading-[30.39px] text-center text-[#FCFC04] shadow-md">
                  Wedding
                </h2>
                <p className="mt-2 text-md text-center text-white shadow-md">
                  "Weddings: A celebration of love, uniting hearts in joyous vows, creating lifelong memories of togetherness."
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative border border-[#FFFFFF] shadow-lg mx-auto max-w-[531px]" style={{ height: '607px' }}>
            <div className="relative flex justify-center items-center h-full">
              <img
                src={process.env.PUBLIC_URL + '/images/image 10.png'}
                alt="Service"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-black bg-opacity-60 w-full"> {/* Changed background color and opacity */}
                <h2 className="font-raleway text-[25.89px] font-semibold leading-[30.39px] text-center text-[#FCFC04] shadow-md">
                  Wedding
                </h2>
                <p className="mt-2 text-md text-center text-white shadow-md">
                  "Weddings: A celebration of love, uniting hearts in joyous vows, creating lifelong memories of togetherness."
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative border border-[#FFFFFF] shadow-lg mx-auto max-w-[531px]" style={{ height: '607px' }}>
            <div className="relative flex justify-center items-center h-full">
              <img
                src={process.env.PUBLIC_URL + '/images/image 10.png'}
                alt="Service"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-black bg-opacity-60 w-full"> {/* Changed background color and opacity */}
                <h2 className="font-raleway text-[25.89px] font-semibold leading-[30.39px] text-center text-[#FCFC04] shadow-md">
                  Wedding
                </h2>
                <p className="mt-2 text-md text-center text-white shadow-md">
                  "Weddings: A celebration of love, uniting hearts in joyous vows, creating lifelong memories of togetherness."
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative border border-[#FFFFFF] shadow-lg mx-auto max-w-[531px]" style={{ height: '607px' }}>
            <div className="relative flex justify-center items-center h-full">
              <img
                src={process.env.PUBLIC_URL + '/images/image 10.png'}
                alt="Service"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-black bg-opacity-60 w-full"> {/* Changed background color and opacity */}
                <h2 className="font-raleway text-[25.89px] font-semibold leading-[30.39px] text-center text-[#FCFC04] shadow-md">
                  Wedding
                </h2>
                <p className="mt-2 text-md text-center text-white shadow-md">
                  "Weddings: A celebration of love, uniting hearts in joyous vows, creating lifelong memories of togetherness."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* View All Button */}
      <div className="flex justify-center mt-8">
        <button
          className="lg:w-[233px] lg:h-[74px] border border-[#FCFC04] text-center text-lg font-semibold"
          style={{ backgroundColor: 'transparent' }}
        >
          View All
        </button>
      </div>

      <div className="relative text-center pt-20 mb-8">
        <h2 className="font-raleway md:text-[41.89px] font-extrabold md:leading-[49.18px]">
          NUMBER OF IMPRESSION
        </h2>
        <div className="w-[159px] mx-auto mt-2 border-t-2 border-[#FCFC04]"></div>
      </div>
      <div className='grid grid-cols-2 gap-4 place-items-center h-56'>
        <div className='text-2xl'>
          <div className='text-yellow-600'>7+</div>
          <div>Year of Experience</div>
        </div>
        <div className='ml-4 text-2xl'>
          <div className='text-yellow-600'> 150+ </div>
          WEDDINGS COMPLETED SUCCESSFULLY
        </div>
      </div>

      <div className="relative text-center mb-6">
        <h2 className="font-raleway md:text-[41.89px] font-extrabold md:leading-[49.18px]">
          TESTIMONIAL
        </h2>
        <div className="w-[159px] mx-auto mt-2 border-t-2 border-[#FCFC04]"></div>
      </div>


      <div className="relative pt-16  flex justify-center ">

        {/* Previous Arrow */}
        <div >
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
        </div>


        <div className="box-content p-4 border-4 border-gray-300  flex   items-center relative z-0">
          {/* Image */}
          <div>
            <img
              src={process.env.PUBLIC_URL + '/images/image 14.png'}
              alt="Service"
              className="h-full w-auto"
            />
          </div>
          {/* Text */}
          <div className="text-gray-700 text-center ">

            "Captured our special day beautifully, each moment
            <br /> immortalized with artistry. A true professional,<br /> grateful for the memories.
            <div className='mt-4'> DAVID WARNER" </div>
          </div>
        </div>


        {/* Next Arrow */}
        <div >
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
        </div>
      </div>
      <div className="relative text-center pt-20 mb-6">
        <h2 className="font-raleway text-[32px] md:text-[41.89px] font-extrabold leading-[40px] md:leading-[49.18px]">
          FAQ
        </h2>
        <div className="w-[100px] md:w-[159px] mx-auto mt-2 border-t-2 border-[#FCFC04]"></div>
      </div>

      <div className="pt-10 space-y-[20px] flex flex-col items-center">
        <div className="flex justify-between w-full max-w-[700px] box-border p-4 border-2 items-center rounded-lg">
          <div>Understanding of wedding photography</div>
          <div>+</div>
        </div>

        <div className="flex justify-between w-full max-w-[700px] box-border p-4 border-2 items-center rounded-lg">
          <div>Planning &amp; management of wedding shoots</div>
          <div>+</div>
        </div>

        <div className="flex justify-between w-full max-w-[700px] box-border p-4 border-2 items-center rounded-lg">
          <div>How to anticipate and plan to capture great moments at weddings</div>
          <div>+</div>
        </div>

        <div className="flex justify-between w-full max-w-[700px] box-border p-4 border-2 items-center rounded-lg">
          <div>Wedding tool kit for a wedding photographer</div>
          <div>+</div>
        </div>

        <div className="flex justify-between w-full max-w-[700px] box-border p-4 border-2 items-center rounded-lg">
          <div>How to create great wedding photos</div>
          <div>+</div>
        </div>
      </div>

      <div className="relative text-center pt-20 mb-6">
        <h2 className="font-raleway lg:text-[41.89px] font-extrabold lg:leading-[49.18px]">
          GLIMPSE OF INSTAGRAM
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
                src={process.env.PUBLIC_URL + '/images/image 10.png'}
                alt="Large Image"
                className="w-full h-auto object-cover"
                style={{ width: '652px', height: '366px' }}
              />
              <img
                src={process.env.PUBLIC_URL + '/images/image 10.png'}
                alt="Large Image"
                className="w-full h-auto pt-6 object-cover"
                style={{ width: '652px', height: '565px' }}
              />
            </div>

            {/* Small Images in the Second Column */}
            <div className="flex flex-col gap-4">
              <div className="relative">
                <img
                  src={process.env.PUBLIC_URL + '/images/image 10.png'}
                  alt="Small Image 1"
                  className="w-full h-auto object-cover"
                  style={{ width: '442px', height: '442px' }}
                />
              </div>
              <div className="relative">
                <img
                  src={process.env.PUBLIC_URL + '/images/image 10.png'}
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
  );
};

export default Service;
