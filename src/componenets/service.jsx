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

    </div>
  );
};

export default Service;
