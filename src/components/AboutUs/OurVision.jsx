import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import visionImg from "../../assets/vision.png"

const OurVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true })
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[50vh] px-8 py-8 bg-gray-50">
      
      {/* Left side - Vision Text */}
      <div 
        className="flex flex-col justify-center items-center md:items-start text-center md:text-left 
                   space-y-6 px-8 py-12 bg-[#F34434] text-white rounded-2xl "
        data-aos="fade-right"
      >
        <h1 className="text-4xl font-bold">Our Vision</h1>
        <p className="text-xl leading-relaxed max-w-xl opacity-90">
          To empower communities with technology that ensures emergency response 
          is fast, reliable, and universally accessible. We strive for a future 
          where safety and care know no boundaries, and every life has the chance 
          to be protected.
        </p>
      </div>

      {/* Right side - Image */}
      <div 
        className="flex justify-center items-center"
        data-aos="zoom-in"
      >
        <img
          src={visionImg}
          alt="Our Vision"
          className="w-auto h-[60vh] object-cover rounded-l-2xl shadow-lg"
        />
      </div>
    </div>
  )
}

export default OurVision
