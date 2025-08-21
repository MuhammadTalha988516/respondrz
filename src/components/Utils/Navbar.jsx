import React from 'react'
import Logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='bg-[#F34434] flex items-center h-[100px] px-8 relative'>
      
      {/* Left Logo */}
      <div className='flex items-center'>
        <img 
          src={Logo}
          alt="Respondrz"
          className='w-[90px] h-auto cursor-pointer'
        />
      </div>

      {/* Center Nav Links */}
      <ul className='absolute left-1/2 transform -translate-x-1/2 font-semibold flex space-x-8'>
        <li className='text-white cursor-pointer hover:underline'>Home</li>
        <li className='text-white cursor-pointer hover:underline'>About Us</li>
        <li className='text-white cursor-pointer hover:underline'>Industries</li>
        <li className='text-white cursor-pointer hover:underline'>Impact</li>
        <li className='text-white cursor-pointer hover:underline'>Gov&NGOs</li>
        <li className='text-white cursor-pointer hover:underline'>Contact Us</li>
      </ul>

      {/* Right side placeholder (future button/icon ke liye) */}
      <div className="ml-auto">
        <button className="text-white bg-[#F34434] border-0 rounded-full px-6 h-[40px] ">Get an Ambulance </button> 
      </div>
    </div>
  )
}

export default Navbar
