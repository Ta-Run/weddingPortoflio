import React from 'react'

function Home() {
  return (
    <div className="  relative w-full h-[800px] overflow-hidden">
      {/* Background Image */}
      <img
        src={process.env.PUBLIC_URL + "images/wedding-photography-by-joseph-radhik-joseph-desktop 1.png"}
        alt="Photographer"
        className="w-full h-full object-cover"
      />

      {/* Heading and Subheading */}
      <div
        className="absolute inset-x-0 top-[20%] mx-auto text-center bg-white bg-opacity-50 p-4"
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
  )
}

export default Home;
