import React from "react";
import contactImage from "../../assets/contactus.webp";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <img
        src={contactImage}
        alt="Contact Us"
        className="w-full object-cover h-[40vh] sm:h-[50vh] lg:h-[60vh] mb-6 sm:mb-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
          Get in Touch With Us
        </h2>
        <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-sm sm:max-w-lg md:max-w-xl mb-4 sm:mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
          molestias. Esse eveniet provident ipsum, cumque neque accusantium
          fugit obcaecati modi expedita unde asperiores!
        </p>

        <Link to="/contact-us">
          <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-base transition">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;

