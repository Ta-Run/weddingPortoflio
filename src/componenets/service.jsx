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


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">

        <div
          className="relative border border-[#FFFFFF] shadow-lg "
          style={{
            width: '531px',
            height: '607px',
            overflow: 'hidden',
          }}
        >

          <div className='flex justify-center items-center pt-12'>
            <img
              src={process.env.PUBLIC_URL + '/images/image 10.png'}
              alt="Service"
            />
            <div
              className="absolute bottom-0 left-0 p-9 bg-opacity-80 w-full"
            >
              <h2
                className="font-raleway text-[25.89px] font-semibold leading-[30.39px] text-center"
              >
                Wedding
              </h2>
              <p className="mt-2 text-md text-center">
                "Weddings: A celebration of love, uniting hearts in joyous vows, creating lifelong memories of togetherness."
              </p>
            </div>
          </div>
        </div>


        <div
          className="relative border border-[#FFFFFF] shadow-lg "
          style={{
            width: '531px',
            height: '607px',
            overflow: 'hidden',
          }}
        >

          <div className='flex justify-center items-center pt-12'>
            <img
              src={process.env.PUBLIC_URL + '/images/image 10.png'}
              alt="Service"
            />
            <div
              className="absolute bottom-0 left-0 p-9 bg-opacity-80 w-full"
            >
              <h2
                className="font-raleway text-[25.89px] font-semibold leading-[30.39px] text-center"
              >
                Wedding
              </h2>
              <p className="mt-2 text-md text-center">
                "Weddings: A celebration of love, uniting hearts in joyous vows, creating lifelong memories of togetherness."
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative border border-[#FFFFFF] shadow-lg "
          style={{
            width: '531px',
            height: '607px',
            overflow: 'hidden',
          }}
        >

          <div className='flex justify-center items-center pt-12'>
            <img
              src={process.env.PUBLIC_URL + '/images/image 10.png'}
              alt="Service"
            />
            <div
              className="absolute bottom-0 left-0 p-9 bg-opacity-80 w-full"
            >
              <h2
                className="font-raleway text-[25.89px] font-semibold leading-[30.39px] text-center"
              >
                Wedding
              </h2>
              <p className="mt-2 text-md text-center">
                "Weddings: A celebration of love, uniting hearts in joyous vows, creating lifelong memories of togetherness."
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative border border-[#FFFFFF] shadow-lg "
          style={{
            width: '531px',
            height: '607px',
            overflow: 'hidden',
          }}
        >

          <div className='flex justify-center items-center pt-12'>
            <img
              src={process.env.PUBLIC_URL + '/images/image 10.png'}
              alt="Service"
            />
            <div
              className="absolute bottom-0 left-0 p-9 bg-opacity-80 w-full"
            >
              <h2
                className="font-raleway text-[25.89px] font-semibold leading-[30.39px] text-center"
              >
                Wedding
              </h2>
              <p className="mt-2 text-md text-center">
                "Weddings: A celebration of love, uniting hearts in joyous vows, creating lifelong memories of togetherness."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-8">
        <button
          className="w-[233px] h-[74px] border border-[#FCFC04] text-center text-lg font-semibold"
          style={{ backgroundColor: 'transparent' }}
        >
          View All
        </button>
      </div>

      <div className="relative text-center mb-8">
        <h2 className="font-raleway text-[41.89px] font-extrabold leading-[49.18px]">
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
        <h2 className="font-raleway text-[41.89px] font-extrabold leading-[49.18px]">
          TESTIMONIAL
        </h2>
        <div className="w-[159px] mx-auto mt-2 border-t-2 border-[#FCFC04]"></div>
      </div>

      
      <div className="relative flex justify-center items-center w-full h-screen">
        {/* Box */}
        <div className="box-content h-40 w-96 p-4 border-4 border-gray-300 bg-white flex items-center space-x-4 relative z-0">
          {/* Image */}
          <div>
            <img
              src={process.env.PUBLIC_URL + '/images/image 14.png'}
              alt="Service"
              className="h-full w-auto"
            />
          </div>
          {/* Text */}
          <div className="text-gray-700">
            "Captured our special day beautifully, each moment immortalized with artistry. A true professional, grateful for the memories. DAVID WARNER"
          </div>
        </div>

        {/* Previous Arrow */}
        <div className="absolute left-2 md:left-4 lg:left-6 z-10 flex items-center">
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

        {/* Next Arrow */}
        <div className="absolute right-2 md:right-4 lg:right-6 z-10 flex items-center">
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

    </div>
  );
};

export default Service;
