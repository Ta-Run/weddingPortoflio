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

    </div>
  );
};

export default Service;