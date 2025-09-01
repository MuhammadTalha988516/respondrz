import React from 'react'
import banner from '../../assets/contactbanner.webp'

const Banner = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[100vh]">
      {/* Background Image */}
      <img 
        src={banner} 
        alt="Contact Banner" 
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg text-center px-4">
          Contact Us
        </h1>
      </div>
    </div>
  )
}

export default Banner
