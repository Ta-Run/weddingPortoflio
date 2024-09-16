import React, { useState } from 'react';

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
  return (
    <div>
      <div className='releative w-full h-[800px]'>

        {/* Background Image */}
        <img
          src={process.env.PUBLIC_URL + "images/wedding-photography-by-joseph-radhik-joseph-desktop 1.png"}
          alt="Photographer"
          className="md:w-full h-full object-cover"
        />

        {/* Heading and Subheading */}
        <div
          className=" absolute inset-x-0 top-[20%] mx-auto text-center bg-white bg-opacity-50 p-4"
          style={{
            fontFamily: 'Raleway',
            fontSize: '48px',
            fontWeight: '800',
            lineHeight: '56px',
          }}
        >
          <h1 className="text-black">SOM SHARMA</h1>
          <p className="text-lg font-light text-black">Professional Photographer</p>

        </div>

      </div>
    
      
    </div>
  )
}

export default Home;
