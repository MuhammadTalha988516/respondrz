import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Abanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animation duration + trigger once
  }, []);

  return (
    <div className="w-full my-10 bg-gray-100">
      {/* Hero Section */}
      <div
        className="w-full h-[300px] bg-gray-400 flex flex-col justify-center items-center text-center px-6 pt-6"
        data-aos="fade-up" // 👈 AOS animation
      >
        <h1
          className="text-3xl md:text-4xl font-sans font-bold text-black mb-4"
          data-aos="zoom-in"
        >
          What is <span className="text-[#F34434]">RespondrZ?</span>
        </h1>

        <p
          className="text-black max-w-3xl font-semibold leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Respondrz is more than just a platform—it’s a lifeline.
          We’re building a digital ecosystem that connects governments, NGOs,
          hospitals, insurers, and corporations so they can respond to
          emergencies faster, smarter, and with greater impact.
        </p>

        <Link
          to="/impact"
          className="mt-8 px-6 py-4 text-white bg-[#F34434] hover:bg-red-500 rounded-xl cursor-pointer"
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
