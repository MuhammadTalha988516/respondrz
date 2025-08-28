import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ambulance } from "lucide-react";

const AmbulanceService = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#F34434] mb-4">
          Do You Provide Ambulance Service?
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          If you run an ambulance service, Respondrz invites you to be part of a
          network where your business growth and your impact on humanity go hand
          in hand.
        </p>

        {/* Info Card */}
        <div className="mt-12 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 border border-gray-200"
          >
            {/* Icon + Title */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-[#F34434]/10 p-4 rounded-full">
                <Ambulance size={40} className="text-[#F34434]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Every Ambulance Has a Story
              </h3>
            </div>

            <p className="text-gray-600">
              Sometimes it’s the difference between life and death, hope and
              despair. But too often, ambulances sit idle, underutilized, or
              disconnected from emergencies that desperately need them.
            </p>

            {/* Expand button */}
            <div className="mt-4">
              <button
                onClick={() => setOpen(!open)}
                className="text-[#F34434] font-semibold underline hover:no-underline"
              >
                {open ? "Hide Details" : "Learn More"}
              </button>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 text-left space-y-4 text-gray-700"
                >
                  <p>
                    <strong>Respondrz changes that.</strong> By joining our
                    platform, ambulance providers gain direct access to
                    emergencies happening in their proximity. That means more
                    business for your fleet, higher utilization of your
                    resources, and, most importantly, more lives saved.
                  </p>
                  <p>
                    Respondrz also helps you manage your fleet and monitor it
                    for transparency and audit.
                  </p>
                  <p className="font-semibold text-[#F34434]">
                    This isn’t just about revenue. It’s about being the heartbeat
                    of a system that ensures no one is left waiting for help
                    that was already nearby.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center">
              <a
                href="/join-provider"
                className="inline-flex items-center gap-2 bg-[#F34434] text-white px-8 py-4 rounded-2xl font-bold shadow hover:bg-[#d92f2f] transition"
              >
                🚑 Join as Provider
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AmbulanceService;
