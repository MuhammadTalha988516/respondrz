import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); 
  }, []);
  return (
    <div className="w-full my-10 bg-gray-100">
      {/* Hero Section */}
      <div className="w-full h-[300px] bg-gray-400 flex flex-col justify-center items-center text-center px-6">
        <h1 className='text-black font-bold text-3xl'>Who We Are</h1>
        <h1 className="text-3xl md:text-4xl font-sans font-bold mt-4 text-black mb-4">
          About <span className='text-[#F34434]'>RespondrZ</span>
        </h1>
        <p className="text-black max-w-3xl font-sans leading-relaxed" data-aos="fade-down">
        A mission-driven platform built to transform how communities prepare for and respond to emergencies. Born from the realization that outdated systems cost lives, we believe technology should bridge the gap between chaos and coordination.
        </p>
      </div>

      
    </div>
  );
};

export default About;
