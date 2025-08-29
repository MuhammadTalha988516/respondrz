import { useEffect } from 'react';
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Matters = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); 
  }, []);
  return (
    <>
    <div className='w-full h-[250px] bg-gray-100'>
        <div className='flex flex-col justify-center items-center text-center mx-32 leading-relaxed py-8 '>
            <h1 className='mt-4 font-extrabold text-3xl'
            data-aos="zoom-in">Why it Matters </h1>
            <p className='mt-8 text-2xl'>When lives are on the line, paperwork and delays are unacceptable.
                By bringing real-time data, seamless communication, and AI-driven insights into the heart of emergency response, Respondrz ensures
                <span className='font-bold'> no cry for help goes unheard.</span></p>
        </div>
    </div>
    
    </>
  )
}

export default Matters