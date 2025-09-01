import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Abanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, always: true }); // animation duration + trigger always
  }, []);

  return (
    <div className="w-full my-10 bg-gray-100">
      {/* Hero Section */}
      <div
        className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-gray-400 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10"
        data-aos="fade-up"
      >
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-black mb-4"
          data-aos="zoom-in"
        >
          What is <span className="text-[#F34434]">RespondrZ?</span>
        </h1>

        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-black max-w-2xl md:max-w-3xl font-medium md:font-semibold leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Respondrz is more than just a platform—it’s a lifeline. We’re building
          a digital ecosystem that connects governments, NGOs, hospitals,
          insurers, and corporations so they can respond to emergencies faster,
          smarter, and with greater impact.
        </p>

        <Link
          to="/impact"
          className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg text-white bg-[#F34434] hover:bg-red-500 rounded-lg sm:rounded-xl cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default Abanner;
