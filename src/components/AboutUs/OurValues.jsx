import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import values from "../../assets/values.png"

const OurValues = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true })
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[50vh] px-8 py-8 bg-gray-50">
      
      {/* Left (Image with animation) */}
      <div 
        className="flex justify-center items-center"
        data-aos="zoom-in"
      >
        <img
          src={values}
          alt="Our Values Illustration"
          className="w-auto h-[60vh] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Right (Red Card with Values + animation) */}
      <div 
        className="flex justify-center items-center w-auto"
        data-aos="fade-left"
      >
        <div className="bg-[#F34434] text-4xl text-white p-8 md:p-12 w-full h-full flex flex-col justify-center rounded-2xl ">
          <h2 className="font-sans font-bold text-4xl mb-8">
            Our <span className="text-white">Values</span>
          </h2>

          <ul className="space-y-6">
            <li>
              <p className="font-bold text-lg">Urgency</p>
              <p className="opacity-90 text-sm md:text-base">
                We design with speed in mind because every second can save a life.
              </p>
            </li>
            <li>
              <p className="font-bold text-lg">Trust</p>
              <p className="opacity-90 text-sm md:text-base">
                Built on transparency and reliability, our platform earns user confidence when it matters most.
              </p>
            </li>
            <li>
              <p className="font-bold text-lg">Simplicity</p>
              <p className="opacity-90 text-sm md:text-base">
                In critical moments, clarity is everything. We keep our experience clean, focused, and easy to use.
              </p>
            </li>
            <li>
              <p className="font-bold text-lg">Impact</p>
              <p className="opacity-90 text-sm md:text-base">
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
