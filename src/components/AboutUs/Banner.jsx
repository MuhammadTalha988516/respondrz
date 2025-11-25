import React from "react"
import banner from "../../assets/bannerabout.webp"

const Banner = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Banner Image */}
      <img
        src={banner}
        alt="respondrz"
        className="w-full h-full object-cover scale-105"
        data-aos="zoom-in"
        data-aos-duration="1200"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex justify-center items-center px-4 text-center">
        <h1
          className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide drop-shadow-lg"
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
