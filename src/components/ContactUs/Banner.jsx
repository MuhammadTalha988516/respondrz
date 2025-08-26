import React from 'react'
import banner from '../../assets/contactbanner.png'

const Banner = () => {
  return (
    <div className="relative w-full h-[100vh] ">
      {/* Background Image */}
      <img 
        src={banner} 
        alt="Contact Banner" 
        className="w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
          Contact Us
        </h1>
      </div>
    </div>
  )
}

export default Banner
