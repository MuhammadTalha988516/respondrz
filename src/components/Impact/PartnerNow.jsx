import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import emergency from "../../assets/emergency.webp";

const PartnerNow = () => {
  return (
    <section className="bg-[#f5f3f7] py-12 sm:py-16 md:py-20 relative">
      <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        
        {/* Left Image */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ always: true }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={emergency}
            alt="Respondrz Emergency Partnership"
            className="rounded-2xl shadow-lg object-cover w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ always: true }}
          className="relative pl-6 sm:pl-8"
        >
          {/* Animated Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "80%" }}
            transition={{ duration: 2 }}
            viewport={{ always: true }}
            className="absolute left-0 top-0 w-[3px] bg-[#927cd9] rounded-full"
          />

          {/* Small Heading */}
          <h4 className="uppercase text-[#927cd9] font-semibold text-xs sm:text-sm tracking-wider mb-3">
            Partner Now
          </h4>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug mb-6 font-serif">
            A Movement for Better Living
          </h2>

          {/* Emotional Paragraph */}
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-lg">
            Respondrz is built on a simple truth: saving lives should not depend on chance, privilege, or geography. By connecting technology with humanity, we are building a system where emergencies are met with speed, dignity, and care.         
            This is more than innovation. This is impact. This is Respondrz.
            Join us, Join the moment, Create the Impact, because when lives are on the line, we can’t afford to wait.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link to="/impact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 border-2 border-[#927cd9] text-black font-bold rounded-lg shadow-md hover:bg-[#927cd9] hover:text-white transition"
              >
                Create Impact
              </motion.button>
            </Link>

            <Link to="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 border-2 border-[#927cd9] text-black font-bold rounded-lg shadow-md hover:bg-[#927cd9] hover:text-white transition"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerNow;
