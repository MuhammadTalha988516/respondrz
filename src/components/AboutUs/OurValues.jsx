import React from 'react'
import Ambulance from '../../assets/ambulance.png'

const OurValues = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-screen h-auto md:h-auto px-6 py-12">
      {/* left grid */}
      <div>
        <h2 className="flex justify-start font-sans font-extrabold text-2xl mb-6">
          Our <span className="text-[#F34434] ml-2">Values</span>
        </h2>

        <ul className=" list-inside space-y-4 text-gray-700">
          <li>
            <p className="font-bold">Urgency</p>
            <p className='list-disc'>We design with speed in mind because every second can save a life.</p>
          </li>
          <li>
            <p className="font-bold">Trust</p>
            <p className='list-disc'>Built on transparency and reliability, our platform earns user confidence when it matters most.</p>
          </li>
          <li>
            <p className="font-bold">Simplicity</p>
            <p className='list-disc'>In critical moments, clarity is everything. We keep our experience clean, focused, and easy to use.</p>
          </li>
          <li>
            <p className="font-bold">Impact</p>
            <p className='list-disc'>Our mission is rooted in real-world outcomes. We strive to save lives and support communities through meaningful tech.</p>
          </li>
        </ul>
      </div>

      {/* right side */}
      <div className="flex justify-center items-center mt-8 md:mt-0">
        <img
          src={Ambulance}
          alt="ambulance"
          className="w-[300px] md:w-[400px] h-auto"
        />
      </div>
    </div>
  )
}

export default OurValues
