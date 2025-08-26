import React from "react";
import contactImage from "../../assets/contactus.jpg";
import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <img
        src={contactImage}
        alt="Contact Us"
        className="w-full object-cover h-[50vh] mb-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get in Touch With Us
        </h2>
        <p className="text-gray-200 max-w-xl mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
          molestias. Esse eveniet provident ipsum, cumque neque accusantium
          fugit obcaecati modi expedita unde asperiores!
        </p>
        
     <Link to="/contact-us">
        <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition">
          Contact Us
        </button>
      </Link>

      </div>
    </section>
  );
};

export default Contact;
