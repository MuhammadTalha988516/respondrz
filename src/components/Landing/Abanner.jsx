import React from 'react'
import { Link } from 'react-router-dom'

const Abanner = () => {
  return (
    <div className="w-full bg-gray-100">
    {/* Hero Section */}
    <div className="w-full h-[300px] bg-gray-400 flex flex-col justify-center items-center text-center px-6 pt-6">
      <h1 className="text-3xl md:text-4xl font-sans font-bold text-black mb-4">
        What is <span className='text-[#F34434]'>RespondrZ?</span>
      </h1>
      <p className="text-black max-w-3xl font-semibold leading-relaxed">
      Respondrz is more than just a platform—it’s a lifeline.
      We’re building a digital ecosystem that connects governments, NGOs, hospitals, insurers, and corporations so they can respond to emergencies faster, smarter, and with greater impact. 
      </p>
      <Link 
      to="/impact"
      className='mt-8 px-6 py-4 text-white bg-[#F34434] hover:bg-red-500 rounded-xl cursor-pointer'> More Info</Link>
    </div>

    
  </div>
  )
}

export default Abanner