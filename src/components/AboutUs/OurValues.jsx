import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import values from "../../assets/values.webp"

const OurValues = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", always: true })
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[50vh] px-4 sm:px-6 md:px-8 py-8 bg-gray-50">
      
      {/* Left (Image with animation) */}
      <div 
        className="flex justify-center items-center mb-6 md:mb-0"
        data-aos="zoom-in"
      >
        <img
          src={values}
          alt="Our Values Illustration"
          className="w-full max-w-[450px] h-auto md:h-[60vh] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Right (Red Card with Values + animation) */}
      <div 
        className="flex justify-center items-center w-full"
        data-aos="fade-left"
      >
        <div className="bg-[#F34434] text-white p-6 sm:p-8 md:p-12 w-full h-full flex flex-col justify-center rounded-2xl">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl mb-6 sm:mb-8 text-center md:text-left">
            Our <span className="text-white">Values</span>
          </h2>

          <ul className="space-y-6">
            <li>
              <p className="font-bold text-lg">Urgency</p>
              <p className="opacity-90 text-sm sm:text-base">
                We design with speed in mind because every second can save a life.
              </p>
            </li>
            <li>
              <p className="font-bold text-lg">Trust</p>
              <p className="opacity-90 text-sm sm:text-base">
                Built on transparency and reliability, our platform earns user confidence when it matters most.
              </p>
            </li>
            <li>
              <p className="font-bold text-lg">Simplicity</p>
              <p className="opacity-90 text-sm sm:text-base">
                In critical moments, clarity is everything. We keep our experience clean, focused, and easy to use.
              </p>
            </li>
            <li>
              <p className="font-bold text-lg">Impact</p>
              <p className="opacity-90 text-sm sm:text-base">
                Our mission is rooted in real-world outcomes. We strive to save lives and support communities through meaningful tech.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OurValues
