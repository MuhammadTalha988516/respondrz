import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import missionImg from "../../assets/mission.png"

const OurMission = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: false }) 
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[50vh] px-8 py-8 text-white bg-gray-50">
      
      {/* Left side - Image */}
      <div 
        className="w-full h-[60vh] flex justify-center items-center"
        data-aos="zoom-in"
      >
        <img
          src={missionImg}
          alt="Our Mission"
          className="w-auto h-[50vh] object-cover"
        />
      </div>

      {/* Right side - Mission Text */}
      <div 
        className="bg-[#F34434] flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 px-6 py-8  rounded-2xl border-white"
        data-aos="fade-up"
      >
        <h1 className="text-4xl  font-bold">Our Mission</h1>
        <p className="text-xl  leading-relaxed max-w-lg">
        To digitize and streamline crisis response so that <span className="text-black"> Governments, NGOs, Hospitals, and Corporate Sector can save more lives, protect more families, and rebuild communities faster.</span>
        </p>
      </div>

    </div>
  )
}

export default OurMission
