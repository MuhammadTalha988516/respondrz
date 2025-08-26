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

            <div className="text-xl md:text-xl text-slate-800 space-y-3">
              <p>
                Respondrz partners with governments, public sector organizations,
                private hospitals, insurance companies, and NGOs to establish and
                operate effective emergency services through public–private
                partnerships and technical collaborations. These efforts advance
                SDG 1 – [No Poverty], SDG 3 – [Good Health and Wellbeing], SDG 5 – 
                [Gender Equality], SDG 8 – [Decent Work and Economic Growth], SDG 9 – 
                [Industry, Innovation, and Infrastructure], SDG 11 – [Sustainable Cities
                and Communities], and SDG 17 – [Partnerships for the Goals].
              </p>
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
