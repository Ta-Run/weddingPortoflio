import React from 'react';

const Service = () => {
  return (
    <div className="relative p-4">
      {/* Title Section */}
      <div className="relative text-center mb-8">
        <h2 className="font-raleway text-[41.89px] font-extrabold leading-[49.18px] text-white">
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
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 w-full">
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
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 w-full">
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
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 w-full">
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
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 w-full">
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
          className="lg:w-[233px] lg:h-[74px] border border-[#FCFC04] text-center text-lg font-semibold text-[#FCFC04] bg-transparent hover:bg-[#FCFC04] hover:text-black transition-colors"
        >
          View All
        </button>
      </div>

      <div className="relative text-center pt-20 mb-8">
        <h2 className="font-raleway md:text-[41.89px] font-extrabold md:leading-[49.18px] text-white">
          NUMBER OF IMPRESSION
        </h2>
        <div className="w-[159px] mx-auto mt-2 border-t-2 border-[#FCFC04]"></div>
      </div>
      <div className='grid grid-cols-2 gap-4 place-items-center h-56'>
        <div className='text-2xl text-white'>
          <div className='text-yellow-600'>7+</div>
          <div>Year of Experience</div>
        </div>
        <div className='ml-4 text-2xl text-white'>
          <div className='text-yellow-600'> 150+ </div>
          WEDDINGS COMPLETED SUCCESSFULLY
        </div>
      </div>

      <div className="relative text-center mb-6">
        <h2 className="font-raleway md:text-[41.89px] font-extrabold md:leading-[49.18px] text-white">
          TESTIMONIAL
        </h2>
        <div className="w-[159px] mx-auto mt-2 border-t-2 border-[#FCFC04]"></div>
      </div>

      <div className="relative pt-16 flex items-center justify-center">
  {/* Previous Arrow */}
  <div className="absolute left-0 pl-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white cursor-pointer"
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

  <div className="box-content p-6 border-4 border-gray-300 flex items-center relative z-10 bg-white">
    {/* Image */}
    <div className="flex-shrink-0">
      <img
        src={process.env.PUBLIC_URL + '/images/image 14.png'}
        alt="Testimonial"
        className="h-40 w-auto"
      />
    </div>

    {/* Text */}
    <div className="ml-6 text-gray-700 text-center">
      <p>
        "Captured our special day beautifully, each moment
        <br /> immortalized with artistry. A true professional,<br /> grateful for the memories."
      </p>
      <div className="mt-4 font-semibold text-gray-900">DAVID WARNER</div>
    </div>
  </div>

  {/* Next Arrow */}
  <div className="absolute right-0 pr-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white cursor-pointer"
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
        <h2 className="font-raleway text-[32px] md:text-[41.89px] font-extrabold leading-[40px] md:leading-[49.18px] text-white">
          FAQ
        </h2>
        <div className="w-[100px] md:w-[159px] mx-auto mt-2 border-t-2 border-[#FCFC04]"></div>
      </div>

      <div className="pt-10 space-y-[20px] flex flex-col items-center">
        <div className="flex justify-between w-full max-w-[700px] box-border p-4 border-2 items-center rounded-lg text-white">
          <div>Understanding of wedding photography</div>
          <div>+</div>
        </div>

        <div className="flex justify-between w-full max-w-[700px] box-border p-4 border-2 items-center rounded-lg text-white">
          <div>Planning &amp; management of wedding shoots</div>
          <div>+</div>
        </div>

        <div className="flex justify-between w-full max-w-[700px] box-border p-4 border-2 items-center rounded-lg text-white">
          <div>How to anticipate and plan to capture great moments at weddings</div>
          <div>+</div>
        </div>

        <div className="flex justify-between w-full max-w-[700px] box-border p-4 border-2 items-center rounded-lg text-white">
          <div>Wedding tool kit for a wedding photographer</div>
          <div>+</div>
        </div>

        <div className="flex justify-between w-full max-w-[700px] box-border p-4 border-2 items-center rounded-lg text-white">
          <div>How to create great wedding photos</div>
          <div>+</div>
        </div>
      </div>

      <div className="relative text-center pt-20 mb-6">
        <h2 className="font-raleway lg:text-[41.89px] font-extrabold lg:leading-[49.18px] text-white">
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
  );
};

export default Service;
