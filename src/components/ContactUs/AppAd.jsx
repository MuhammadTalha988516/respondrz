import React from "react"

import mock2 from "../../assets/Mockup2.webp"


const AppAd = () => {
  return (
    <div className="w-full flex justify-center items-center py-12 bg-gray-300">
      <div className="bg-[#F34434] border-4 border-white rounded-2xl shadow-lg grid grid-cols-1 lg:grid-cols-2 w-[90%] md:w-[80%] px-6 md:px-10 py-8 items-center relative overflow-hidden">
        
        {/* Left Content */}
        <div className="text-white space-y-5 mb-10 lg:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            Your Complete Emergency Companion – Anytime, Anywhere
          </h1>
          <p className="text-sm md:text-lg leading-relaxed max-w-md">
            With the Respondrz app, experience real-time health monitoring and 
            instant emergency assistance at your fingertips. Tap for help, track 
            vital health stats, and stay connected with a safety network that's 
            always ready, no matter where you are.
          </p>

          {/* Store Buttons */}
          <div className="flex gap-4">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on App Store"
                className="h-12"
              />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>

        
        <div className="relative flex justify-center mt-10 items-end h-[400px] lg:h-[500px]">
          {/* Center Phone */}
          <img
            src={mock2}
            alt="App Mockup 2"
            className="relative w-[400px] md:w-[460px] lg:w-[500px] -top-10 lg:-top-16 z-20"
          />

          
        </div>
      </div>
    </div>
  )
}

export default AppAd
