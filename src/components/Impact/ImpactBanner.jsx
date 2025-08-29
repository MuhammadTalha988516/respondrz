import React from "react";
import { motion } from "framer-motion";
import sdggif from "../../assets/sdgs.gif";

const ImpactBanner = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left column: Text */}
          <motion.div
            className="lg:col-span-7"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ always: true }}
          >
            <p className="text-lg tracking-widest font-semibold text-rose-500 uppercase mb-4">
              About Respondrz
            </p>

            <h2 className="text-4xl md:text-4xl font-extrabold text-slate-800 mb-8">
              Our Impact
            </h2>

            <div className="text-xl md:text-2xl max-w-xl text-slate-800 ">
              <p>
            We proudly support the United Nations Sustainable Development Goals (SDGs), with measurable contributions to health, equality, sustainable cities, innovation, partnerships, and environmental protection. Every life saved, every second reduced in response time, and every resource optimized brings us closer to a world where safety and dignity are not privileges, but rights.              </p>
            </div>
          </motion.div>

          {/* Right column: GIF */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ always: true }}
          >
            <img
              src={sdggif}
              alt="Impact animation"
              className="w-full max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactBanner;
