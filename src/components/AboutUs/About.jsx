import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, always: false }); 
  }, []);

  return (
    <div className="w-full my-10 bg-gray-100">
      {/* Hero Sectio */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] bg-gray-400 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
          Who We Are
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold mt-4 text-black mb-4">
          About <span className="text-[#F34434]">RespondrZ</span>
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg text-black max-w-md sm:max-w-2xl md:max-w-3xl font-sans leading-relaxed"
          data-aos="fade-down"
        >
          A mission-driven platform built to transform how communities prepare
          for and respond to emergencies. Born from the realization that
          outdated systems cost lives, we believe technology should bridge the
          gap between chaos and coordination.
        </p>
      </div>
    </div>
  );
};

export default About;
