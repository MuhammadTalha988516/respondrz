import React from 'react'
import { Link } from 'react-router-dom'   // ⬅️ ADD THIS LINE
import Logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='bg-white  flex items-center h-[100px] px-8 '>
      
      {/* Left Logo */}
      <div className='flex items-center'>
        <img 
          src={Logo}
          alt="Respondrz"
          className='w-[90px] h-auto cursor-pointer'
        />
      </div>

      {/* Center Nav Links */}
     <ul className='absolute text-[#F34434] left-1/2 transform -translate-x-1/2 font-semibold flex space-x-8'>
        <li><Link to="/" className=' hover:underline'>Home</Link></li>
        <li><Link to="/about" className=' hover:underline'>About Us</Link></li>
        <li><Link to="/partners" className=' hover:underline'>Partners</Link></li>
        <li><Link to="/impact" className=' hover:underline'>Impact</Link></li>
        <li><Link to="/gov-ngos" className=' hover:underline'>Gov & NGOs</Link></li>
        <li><Link to="/contact" className=' hover:underline'>Contact Us</Link></li>
      </ul>

      
      <div className="ml-auto">
        <button className="text-white bg-[#F34434] border-0 rounded-full px-6 h-[40px] ">Get an Ambulance </button> 
      </div>
    </div>
  )
}

export default Navbar
