import React from 'react';

const Service = () => {
  return (
    <div className="relative p-4">
      {/* Title Section */}
      <div className="relative text-center mb-16 mt-20 flex flex-col items-center">
        <h2 className="font-raleway text-[41.89px] font-extrabold leading-[49.18px] text-white">
          SER
          <span className="w-[159px] mx-auto mt-2 border-b-2 border-[#FCFC04]">
          VICE
          </span>
        </h2>
        </div>
        

      <div className="px-4 md:px-8 lg:px-16 py-12">
        {/* Grid Container */}
        <div className="mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20">
          {/* Card 1 */}
          <div className="border border-[#FFFFFF] shadow-lg mx-auto p-5 w-fit">
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
          </div>

          {/* Card 2 */}
          <div className="border border-[#FFFFFF] shadow-lg mx-auto p-5 w-fit">
            <img
              src={process.env.PUBLIC_URL + '/images/image 41.png'}
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
          </div>

          {/* Card 3 */}
          <div className="border border-[#FFFFFF] shadow-lg mx-auto p-5 w-fit">
            <img
              src={process.env.PUBLIC_URL + '/images/image 43.png'}
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
          </div>

          {/* Card 4 */}
          <div className="border border-[#FFFFFF] shadow-lg mx-auto p-5 w-fit">
            <img
              src={process.env.PUBLIC_URL + '/images/image 42.png'}
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
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-8">
        <button className="lg:w-[233px] lg:h-[74px] border border-[#FCFC04] text-center text-lg font-semibold text-[#FCFC04] bg-transparent hover:bg-[#FCFC04] hover:text-black transition-colors">
          CONTACT US
        </button>
      </div>

      {/* Media Queries for different breakpoints */}
      <style jsx>{`
        @media (max-width: 510px) {
          h2 {
            font-size: 30px; /* Adjust title size */
          }
          .border-t-2 {
            width: 100px; /* Adjust line width */
          }
          .text-md {
            font-size: 14px; /* Adjust paragraph size */
          }
        }

        @media (max-width: 400px) {
          h2 {
            font-size: 26px; /* Further adjust title size */
          }
          .border-t-2 {
            width: 80px; /* Further adjust line width */
          }
          .text-md {
            font-size: 12px; /* Further adjust paragraph size */
          }
        }

        @media (max-width: 380px) {
          h2 {
            font-size: 24px; /* Further adjust title size */
          }
          .border-t-2 {
            width: 70px; /* Further adjust line width */
          }
          .text-md {
            font-size: 11px; /* Further adjust paragraph size */
          }
        }

        @media (max-width: 370px) {
          h2 {
            font-size: 22px; /* Further adjust title size */
          }
          .border-t-2 {
            width: 60px; /* Further adjust line width */
          }
          .text-md {
            font-size: 10px; /* Further adjust paragraph size */
          }
        }

        @media (max-width: 360px) {
          h2 {
            font-size: 20px; /* Further adjust title size */
          }
          .border-t-2 {
            width: 50px; /* Further adjust line width */
          }
          .text-md {
            font-size: 9px; /* Further adjust paragraph size */
          }
        }
      `}</style>
    </div>
  );
};

export default Service;
