import React from 'react';

function AboutUs() {
    return (
        <div className="px-4 md:px-8 lg:px-16 py-12">
            {/* Title and Line */}
            <div className="relative text-center mb-8">
                <h2 className="font-raleway text-[32px] md:text-[41.89px] font-extrabold leading-[40px] md:leading-[49.18px]">
                    ABOUT US
                </h2>
                <div className="w-[120px] md:w-[159px] mx-auto mt-2 border-t-2 border-[#FCFC04]"></div>
            </div>

            {/* Grid for Text and Image */}
            <div className="grid lg:grid-cols-2 gap-x-8 gap-4 pt-8 lg:pt-16 items-center">
                {/* Text Section */}
                <div className="text-base md:text-lg leading-relaxed md:leading-relaxed">
                    <p>
                        Hello there! I'm [Your Name], a wedding photographer with a passion for freezing moments and turning them into timeless memories. What sets me apart? It's not just the click of a camera; it's the genuine connection I build with each couple. My friendly nature allows me to seamlessly adapt to any atmosphere, making even the most camera-shy feel at ease. I believe in capturing not just the poses, but the emotions and stories that unfold on your special day. From candid laughter to those heartfelt glances, I aim to encapsulate the essence of your love. Let's embark on this photographic journey together, where every frame tells a unique tale. I'm not just your photographer; I'm a storyteller weaving your love story through the lens. Excited to be a part of your journey!
                    </p>
                    {/* Name and Designation */}
                    <span className="block mt-4 text-lg font-semibold">SOM SHARMA</span>
                    <span className="block text-sm font-light">FOUNDER & HEAD PHOTOGRAPHER</span>

                    {/* Experience and Weddings */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="text-center">
                            <div className="text-yellow-600 text-3xl font-bold">7+</div>
                            <div className="text-lg">Years of Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-yellow-600 text-3xl font-bold">150+</div>
                            <div className="text-lg">Weddings Completed</div>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center lg:justify-end">
                    <img
                        src={process.env.PUBLIC_URL + "images/wedding-photography-by-joseph-radhik-joseph-desktop 1.png"}
                        alt="Photographer"
                        className="w-full max-w-md h-auto object-cover"
                    />
                </div>
            </div>

            <div className="relative text-center mb-8 pt-10">
                <h2 className="font-raleway text-[32px] md:text-[41.89px] font-extrabold leading-[40px] md:leading-[49.18px]">
                    TEAM
                </h2>
                <div className="w-[120px] md:w-[159px] mx-auto mt-2 border-t-2 border-[#FCFC04]"></div>
            </div>
            <div className="flex justify-center items-center py-12">
                <div className="flex gap-x-8 overflow-x-auto">
                    <img
                        src={process.env.PUBLIC_URL + '/images/teamphoto.png'}
                        alt="Team Photo 1"
                        className="w-auto h-32 object-cover" // Adjust the height as needed
                    />
                    <img
                        src={process.env.PUBLIC_URL + '/images/teamphoto.png'}
                        alt="Team Photo 2"
                        className="w-auto h-32 object-cover" // Adjust the height as needed
                    />
                    <img
                        src={process.env.PUBLIC_URL + '/images/teamphoto.png'}
                        alt="Team Photo 3"
                        className="w-auto h-32 object-cover" // Adjust the height as needed
                    />
                    <img
                        src={process.env.PUBLIC_URL + '/images/teamphoto.png'}
                        alt="Team Photo 4"
                        className="w-auto h-32 object-cover" // Adjust the height as needed
                    />
                    <img
                        src={process.env.PUBLIC_URL + '/images/teamphoto.png'}
                        alt="Team Photo 5"
                        className="w-auto h-32 object-cover" // Adjust the height as needed
                    />
                </div>
            </div>

        </div>
    );
}

export default AboutUs;
