import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div className="w-full h-[250px] sm:h-[280px] md:h-[300px] bg-gray-300 flex justify-center items-center mb-6 px-4">
      <div className="mx-auto flex flex-col gap-4 justify-center items-center border-2 rounded-xl bg-[#F34434] h-[180px] sm:h-[200px] w-full max-w-[550px] p-4">
        <p className="text-white font-semibold text-base sm:text-lg md:text-xl text-center">
          Curious how it works? Take a quick peek behind the scenes and see for
          yourself.
        </p>

        <Link
          to="/partners"
          className="bg-black text-white hover:bg-white hover:text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full cursor-pointer text-sm sm:text-base md:text-lg transition-all"
        >
          Click Me
        </Link>
      </div>
    </div>
  )
}

export default CTA
