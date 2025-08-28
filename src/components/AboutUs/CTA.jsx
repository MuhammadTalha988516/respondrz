import React from 'react'
import { Link } from 'react-router-dom'
const CTA = () => {
  return (
    <>
    
    <div className='w-full h-[300px] bg-gray-300 flex justify-center items-center mb-6'>
        <div className=' mx-auto flex flex-col gap-4 justify-center items-center border-2 rounded-xl bg-[#F34434] h-[200px] w-[550px] '>
            <p className='px-8 text-white font-semibold text-xl'> Curious how it works? Take a quick peek behind the scenes and see for yourself. </p>

            <Link
            to="/partners"
            className='bg-black text-white hover:bg-white hover:text-black px-6 py-4 rounded-full cursor-pointer'>
             Click Me
            </Link>
        </div>
    </div>
    
    </>
  )
}

export default CTA