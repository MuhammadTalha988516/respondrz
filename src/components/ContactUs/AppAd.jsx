import React from "react"
import mock1 from "../../assets/Mockup1.png"
import mock2 from "../../assets/Mockup2.png"
import mock3 from "../../assets/Mockup3.png"

const AppAd = () => {
  return (
    <div className="w-full flex justify-center items-center py-8 bg-gray-300 pt-12">
      <div className="bg-[#F34434] border-4 border-white rounded-2xl shadow-lg grid grid-cols-1 lg:grid-cols-2 w-[90%] md:w-[80%] px-6 md:px-10 py-4 items-center overflow-visible relative">
        
        {/* Left Content */}
        <div className="text-white space-y-4 mb-6 lg:mb-0">
          <h1 className="text-xl md:text-3xl font-bold leading-snug">
            Your Complete Emergency Companion – Anytime, Anywhere
          </h1>
          <p className="text-sm md:text-lg leading-relaxed">
            With the Respondrz app, experience real-time health monitoring and 
            instant emergency assistance at your fingertips. Tap for help, track 
            vital health stats, and stay connected with a safety network that's 
            always ready, no matter where you are.
          </p>

          <button className="bg-white text-[#F34434] px-4 py-2 md:px-5 md:py-3 rounded-lg font-semibold shadow-md hover:bg-gray-700 hover:text-white transition">
            Download App
          </button>
        </div>

        {/* Right: Phones */}
        <div className="flex justify-center items-end relative h-[420px] md:h-[200px] lg:h-[400px] overflow-visible mt-2">
          
          {/* Left Phone */}
          <img
            src={mock1}
            alt="App Mockup 1"
            className="w-[200px] md:w-[260px] lg:w-[450px] absolute -top-12 md:-top-16 lg:-top-20 left-1/2 -translate-x-[100%] z-0 ml-24"
          />

          {/* Center Phone */}
          <img
            src={mock2}
            alt="App Mockup 2"
            className="w-[200px] md:w-[260px] lg:w-[450px] absolute -top-12 md:-top-16 lg:-top-20 left-1/2 -translate-x-1/2 z-8 ml-24"
          />

          {/* Right Phone */}
          <img
            src={mock3}
            alt="App Mockup 3"
            className="w-[200px] md:w-[260px] lg:w-[450px] absolute -top-12 md:-top-16 lg:-top-20 left-1/2 -translate-x-[75%] z-0 ml-24"
          />
        </div>
      </div>
    </div>
  )
}

export default AppAd
