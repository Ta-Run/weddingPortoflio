import React from 'react';

// Make sure to import the fonts in your index.html or main file
// <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&family=Inter:wght@500&display=swap" rel="stylesheet">

function Footer() {
    return (
        <footer className="w-full text-white py-10 relative">
            {/* Content Above the Top Yellow Line */}
            <div className="container mx-auto p-4 text-left flex justify-between">
                <div style={{ paddingLeft: '256px' }}>
                    <h1 
                        className="text-left font-bold" 
                        style={{
                            fontFamily: 'Raleway, sans-serif',
                            fontSize: '41.89px',
                            fontWeight: '600',
                            lineHeight: '52px',
                            letterSpacing: '0.17em',
                        }}
                    >
                        Rishabh Sharma
                    </h1>
                    <h2 
                        className="text-left font-bold mb-4" // Added margin-bottom for spacing
                        style={{
                            fontFamily: 'Raleway, sans-serif',
                            fontSize: '41.89px',
                            fontWeight: '600',
                            lineHeight: '52px',
                            letterSpacing: '0.17em',
                        }}
                    >
                        Photography
                    </h2>
                    <p 
                        className="text-lg mt-8" // Added margin-bottom for spacing
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '21.78px',
                            letterSpacing: '0.05em',
                            width: '376px',
                            height: '22px',
                            opacity: '1', // Ensure it's visible
                        }}
                    >
                        All Images and Videos Are Copyrighted.
                    </p>
                    <p 
                        className="text-sm mt-2" 
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '21.78px',
                            letterSpacing: '0.05em',
                        }}
                    >
                        Terms and Conditions
                    </p>
                </div>

                {/* Work Section Moved Right with New Layout */}
                <div className="flex flex-col items-end justify-center mt-4" style={{ width: '126px', height: '90px', textAlign: 'right', paddingRight: '240px' }}>
                    <h2 
                        className="text-2xl font-bold" 
                        style={{
                            fontFamily: 'Raleway, sans-serif',
                            fontSize: '15px',
                            fontWeight: '700',
                            lineHeight: '20.16px',
                            letterSpacing: '0.17em',
                        }}
                    >
                        Work
                    </h2>
                    <ul className="list-none">
                        <li className="py-1" style={{ fontFamily: 'Raleway, sans-serif', fontSize: '15px', fontWeight: '700', lineHeight: '20.16px', letterSpacing: '0.17em' }}>Portfolio</li>
                        <li className="py-1" style={{ fontFamily: 'Raleway, sans-serif', fontSize: '15px', fontWeight: '700', lineHeight: '20.16px', letterSpacing: '0.17em' }}>Service</li>
                    </ul>
                </div>
            </div>

            {/* Centered Yellow Line */}
            <div className="flex justify-center mt-4">
                <div 
                    style={{
                        width: '1159px', // You can change this to '100%' for full-width
                        height: '0px',
                        borderTop: '2px solid #FCFC04',
                        marginTop: '10px', // Adjust margin as needed
                    }}
                />
            </div>

            {/* Button Layout Below the Yellow Line */}
            <div className="container mx-auto p-4 flex justify-between mt-4">
                {/* Call and Email Buttons */}
                <div className="flex space-x-4" style={{ marginLeft: '172px' }}> {/* Shifted right with more margin-left */}
                    <button 
                        style={{
                            width: '146px',
                            height: '44px',
                            border: '1px solid #FCFC04',
                            opacity: '1',
                        }}
                        className="text-white bg-transparent hover:bg-yellow-500 transition-colors duration-300"
                    >
                        Call
                    </button>
                    <button 
                        style={{
                            width: '146px',
                            height: '44px',
                            border: '1px solid #FCFC04',
                            opacity: '1',
                        }}
                        className="text-white bg-transparent hover:bg-yellow-500 transition-colors duration-300"
                    >
                        Email
                    </button>
                </div>

                {/* Facebook and Instagram Buttons */}
                <div className="flex space-x-4" style={{ marginRight: '172px' }}> {/* Shifted left with more margin-right */}
                    <button 
                        style={{
                            width: '146px',
                            height: '44px',
                            border: '1px solid #FCFC04',
                            opacity: '1',
                        }}
                        className="text-white bg-transparent hover:bg-yellow-500 transition-colors duration-300"
                    >
                        Facebook
                    </button>
                    <button 
                        style={{
                            width: '146px',
                            height: '44px',
                            border: '1px solid #FCFC04',
                            opacity: '1',
                        }}
                        className="text-white bg-transparent hover:bg-yellow-500 transition-colors duration-300"
                    >
                        Instagram
                    </button>
                </div>
            </div>

            {/* Main Content Below */}
            
        </footer>
    );
}

export default Footer;