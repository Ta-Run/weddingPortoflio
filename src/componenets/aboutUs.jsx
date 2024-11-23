import React, { useEffect, useRef } from "react";
import teamPhoto from "../assests/teamphoto.png";
import teamphoto1 from "../assests/teamphoto1.png";
import teamphoto2 from "../assests/teamphoto2.png";
import teamPhoto3 from "../assests/teamphoto3.png";

function AboutUs() {
  const teamSectionRef = useRef(null);

  // Scroll to the initial position on component mount
  useEffect(() => {
    if (teamSectionRef.current) {
      teamSectionRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, []);
  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 pb-0"> {/* Reduced bottom padding */}
      {/* Title and Line */}
      <div className="relative text-center mb-8 py-12">
        <h2 className="font-raleway text-[32px] md:text-[41.89px] font-extrabold leading-[40px] md:leading-[49.18px] relative inline-block">
          ABOUT US
        </h2>
        <div
          className="absolute left-1/2 mt-2 border-t-2 border-[#FCFC04]"
          style={{
            width: "120px",
            maxWidth: "159px",
            transform: "translateX(1%)",
          }}
        ></div>
      </div>

      {/* Grid for Text and Image */}
      <div className="grid lg:grid-cols-2 gap-x-8 gap-4 pt-8 lg:pt-16 items-center">


        {/* Image Section */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/wedding-photography-by-joseph-radhik-joseph-desktop 1.png"
            }
            alt="Photographer"
            className="w-[100%] lg:w-[100%] h-auto object-cover ml-[-9px]"
          />
        </div>


        {/* Text Section */}
        <div className="text-base md:text-lg leading-relaxed md:leading-relaxed">

          Hello there! I'm  Som Sharma, a wedding photographer with a passion
          for freezing moments and turning them into timeless memories. What
          sets me apart? It's not just the click of a camera; it's the genuine
          connection I build with each couple. My friendly nature allows me to
          seamlessly adapt to any atmosphere, making even the most camera-shy
          feel at ease. I believe in capturing not just the poses, but the
          emotions and stories that unfold on your special day. From candid
          laughter to those heartfelt glances, I aim to encapsulate the
          essence of your love. Let's embark on this photographic journey
          together, where every frame tells a unique tale. I'm not just your
          photographer; I'm a storyteller weaving your love story through the
          lens. Excited to be a part of your journey!

          <span className="block mt-4 text-lg font-semibold">SOM SHARMA</span>
          <span className="block text-sm font-light">
            FOUNDER & HEAD PHOTOGRAPHER
          </span>

          {/* Experience and Weddings */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="text-center">
              <div className="text-[#FCFC04] text-3xl font-bold">7+</div>
              <div className="text-lg">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-[#FCFC04] text-3xl font-bold">150+</div>
              <div className="text-lg">Weddings Completed</div>
            </div>
          </div>
        </div>


      </div>

      {/* Team Section Title */}
      <div className="relative text-center mb-8 pt-10 pb-0">
        <h2 className="font-raleway text-[32px] md:text-[41.89px] font-extrabold leading-[40px] md:leading-[49.18px] relative inline-block">
          TEAM
        </h2>
        <div
          className="absolute left-1/2 mt-2 border-t-2 border-[#FCFC04]"
          style={{
            width: "64px",
            maxWidth: "159px",
            transform: "translateX(1%)",
          }}
        ></div>
      </div>

      {/* Team Members */}
      {/* Team Members */}
      <div ref={teamSectionRef} className="overflow-x-auto whitespace-nowrap scroll-smooth">
        <div
          className="flex justify-center gap-[2rem] px-4 sm:px-8 md:px-16 lg:px-20"
        >
          {/* Team Member 1 */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <img
              src={teamPhoto}
              alt="Team Photo 1"
              className="w-[200px] h-[230px] object-cover border-none"
            />
            <div className="text-left mt-2 w-full">
              <div className="font-semibold text-white">SOM SHARMA</div>
              <div className="text-white mt-1">Videographer</div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <img
              src={teamPhoto3}
              alt="Team Photo 2"
              className="w-[200px] h-[230px] object-cover border-none"
            />
            <div className="text-left mt-2 w-full">
              <div className="font-semibold text-white">SOM SHARMA</div>
              <div className="text-white mt-1">Portrait</div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <img
              src={teamphoto2}
              alt="Team Photo 3"
              className="w-[200px] h-[230px] object-cover border-none"
            />
            <div className="text-left mt-2 w-full">
              <div className="font-semibold text-white">SOM SHARMA</div>
              <div className="text-white mt-1">Hair & MUA</div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <img
              src={teamphoto1}
              alt="Team Photo 4"
              className="w-[200px] h-[230px] object-cover border-none"
            />
            <div className="text-left mt-2 w-full">
              <div className="font-semibold text-white">SOM SHARMA</div>
              <div className="text-white mt-1">Hair & MUA</div>
            </div>
          </div>
          {/* Team Member 4 */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <img
              src={teamphoto1}
              alt="Team Photo 4"
              className="w-[200px] h-[230px] object-cover border-none"
            />
            <div className="text-left mt-2 w-full">
              <div className="font-semibold text-white">SOM SHARMA</div>
              <div className="text-white mt-1">Hair & MUA</div>
            </div>
          </div>
          {/* Team Member 4 */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <img
              src={teamphoto1}
              alt="Team Photo 4"
              className="w-[200px] h-[230px] object-cover border-none"
            />
            <div className="text-left mt-2 w-full">
              <div className="font-semibold text-white">SOM SHARMA</div>
              <div className="text-white mt-1">Hair & MUA</div>
            </div>
          </div>
          {/* Team Member 4 */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <img
              src={teamphoto1}
              alt="Team Photo 4"
              className="w-[200px] h-[230px] object-cover border-none"
            />
            <div className="text-left mt-2 w-full">
              <div className="font-semibold text-white">SOM SHARMA</div>
              <div className="text-white mt-1">Hair & MUA</div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS to Hide Scrollbar */}
      <style>
        {`
    .overflow-x-auto {
      overflow-x: auto;
      scrollbar-width: none;
    }
    .overflow-x-auto::-webkit-scrollbar {
      display: none;
    }
    @media (min-width: 768px) {
      .scroll-smooth {
        scroll-behavior: smooth;
      }
    }
  `}
      </style>

    </div>
  );
}

export default AboutUs;
