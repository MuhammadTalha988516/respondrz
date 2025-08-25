// src/components/Partners.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Partners = () => {
  const partners = [
    { id: "01", text: "Government" },
    { id: "02", text: "NGOs" },
    { id: "03", text: "Corporate Sector" },
    { id: "04", text: "Private Hospitals" },
    { id: "05", text: "Public Sector" },
    { id: "06", text: "Insurance Company" },
  ];

  const containerRef = useRef(null);

  // Track vertical scroll of section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // section start to end
  });

  // Map vertical scroll to horizontal X movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(partners.length - 1) *10}%`]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[300vh] bg-gray-300 text-white"
    >
      {/* Sticky wrapper */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-10 px-20"
        >
          {partners.map((partner) => (
            <motion.a
              key={partner.id}
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[300px] h-[400px] border border-white flex flex-col 
                items-center justify-center text-center rounded-xl bg-[#111] 
                shadow-xl p-6 shrink-0 cursor-pointer"
            >
              <span className="text-5xl font-bold text-pink-400 mb-4">
                {partner.id}
              </span>
              <p className="text-lg font-semibold">{partner.text}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
