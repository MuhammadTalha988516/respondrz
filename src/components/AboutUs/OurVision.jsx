import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import visionImg from "../../assets/vision.webp"

const OurVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", always: true })
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[50vh] px-6 md:px-12 py-8 bg-gray-50 gap-6">
      
      {/* Left side - Vision Text */}
      <div 
        className="flex flex-col justify-center items-center md:items-start text-center md:text-left 
                   space-y-6 px-6 md:px-10 py-10 bg-[#F34434] text-white rounded-2xl shadow-lg"
        data-aos="fade-right"
      >
        <h1 className="text-3xl md:text-4xl font-bold">Our Vision</h1>
        <p className="text-base md:text-lg leading-relaxed max-w-xl opacity-90">
          To empower communities with technology that ensures emergency response 
          is fast, reliable, and universally accessible. We strive for a future 
          where safety and care know no boundaries, and every life has the chance 
          to be protected.
        </p>
      </div>

      {/* Right side - Image */}
      <div 
        className="flex justify-center items-center px-4"
        data-aos="zoom-in"
      >
        <img
          src={visionImg}
          alt="Our Vision"
          className="w-full max-w-lg h-auto object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  )
}

export default OurVision
