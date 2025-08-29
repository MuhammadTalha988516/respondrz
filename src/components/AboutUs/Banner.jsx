import React from "react"
import banner from "../../assets/bannerabout.png"

const Banner = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden">
      {/* Banner Image */}
      <img
        src={banner}
        alt="respondrz"
        className="w-full h-full object-cover scale-105"
        data-aos="zoom-in"
        data-aos-duration="1200"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
        <h1
          className="text-white text-4xl md:text-6xl font-extrabold uppercase tracking-wide drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          About Us
        </h1>
      </div>
    </div>
  )
}

export default Banner
