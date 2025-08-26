import React from 'react'
import banner from "../../assets/bannerabout.png"

const Banner = () => {
  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center bg-black">
      {/* Image as background */}
      <img 
        src={banner} 
        alt="respondrz" 
        className="absolute inset-0 w-full h-full object-cover" 
      />

      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  )
}

export default Banner
