import { useEffect } from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Matters = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, always: false });
  }, []);

  return (
    <div className="w-full bg-gray-100 py-12 sm:py-16 md:py-20">
      <div className="flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 lg:px-32 leading-relaxed max-w-6xl mx-auto">
        <h1
          className="mt-2 sm:mt-4 font-extrabold text-2xl sm:text-3xl md:text-4xl"
          data-aos="zoom-in"
        >
          Why it Matters
        </h1>
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-2xl text-gray-700">
          When lives are on the line, paperwork and delays are unacceptable.
          By bringing real-time data, seamless communication, and AI-driven
          insights into the heart of emergency response, Respondrz ensures
          <span className="font-bold text-gray-900">
            {" "}
            no cry for help goes unheard.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Matters;
