import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 bg-yellow-300 w-screen h-[300px]">
        
        {/* Left column */}
        <div
          className="flex flex-col justify-center items-start px-12"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <p className="text-black font-black font-sans text-5xl">
            About Respondrz
          </p>
        </div>

        {/* Right column */}
        <div
          className="flex flex-col justify-center items-start px-8"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <p
            className="text-black font-medium text-lg leading-relaxed"
            data-aos="fade-down"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            Everyday Health Operations, Pandemics, or in Disasters, Ambulance
            plays a vital role. In emergency, every second counts. Respondrz
            empowers Governments, NGOs, Hospitals, Insurance Companies, and
            Corporations with cutting-edge digital tools to act faster, smarter,
            and more effectively, because preparedness is not a choice, it is a
            responsibility.
          </p>

          <Link
            to="/about-us"
            className="mt-6 px-8 py-4 bg-black text-yellow-300 rounded-md cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
            data-aos="zoom-in-up"
            data-aos-delay="1200"
            data-aos-duration="1000"
          >
            Explore More
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
