import React from 'react'

function Footer() {
    return (
        <footer className="w-full  text-white py-10 relative">
            {/* Top Line */}
            <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: '#FCFC04' }}></div>

            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Heading */}


                {/* Contact Section */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
                    {/* Mobile Number */}
                    <div className="flex items-center mb-2">
                        <div className="text-center md:text-left mb-6 md:mb-0">
                            <h2 className="text-3xl font-bold">SOM SHARMA PHOTOGRAPHY</h2>

                            {/* Mobile Number and Icon */}
                            <div className="flex justify-center md:justify-start items-center mt-4">
                                <img
                                    src={process.env.PUBLIC_URL + '/images/mobile-icon.png'}
                                    alt="Mobile Icon"
                                    className="w-6 h-6 mr-2"
                                />
                                <span className="text-lg">+91 96856 92191</span>
                            </div>
                        </div>
                    </div>

                    
                    <div className="flex items-center">
                        <img
                            src={process.env.PUBLIC_URL + '/images/gmail-icon.png'}
                            alt="Gmail Icon"
                            className="w-6 h-6 mr-2"
                        />
                        <span className="text-lg">rishabhphotographer08@gmail.com</span>
                    </div>
                </div>

                
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-xl font-semibold mb-2">SOCIAL MEDIA</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:opacity-75">
                            <img
                                src={process.env.PUBLIC_URL + '/images/facebook-icon.png'}
                                alt="Facebook"
                                className="w-6 h-6"
                            />
                        </a>
                        <a href="#" className="text-white hover:opacity-75">
                            <img
                                src={process.env.PUBLIC_URL + '/images/instagram-icon.png'}
                                alt="Instagram"
                                className="w-6 h-6"
                            />
                        </a>
                        <a href="#" className="text-white hover:opacity-75">
                            <img
                                src={process.env.PUBLIC_URL + '/images/twitter-icon.png'}
                                alt="Twitter"
                                className="w-6 h-6"
                            />
                        </a>

                        {/* Add more social media icons as needed */}
                    </div>
                    <div className="text-lg pt-10">
                        All Images and Videos Are Copyrighted.</div>
                </div>
            </div>



        </footer>
    )
}

export default Footer