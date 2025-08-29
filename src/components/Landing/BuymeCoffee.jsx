import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee } from "lucide-react";

const BMC_LOGO =
  "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png";

const BuymeCoffee = () => {
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#F34434] mb-4">
          Changemakers: Buy a Coffee, Change a Life
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          If you’re in a position to give, Respondrz turns your gift into a
          lifeline. Let’s make compassion actionable.
        </p>

        {/* Info Card */}
        <div className="mt-12 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              A Simple Act, A Greater Impact
            </h3>
            <p className="text-gray-600">
              Think about the comfort of a warm cup of coffee, it is small, it
              is simple, but it makes a difference in someone’s day.
            </p>

            {/* Expand button */}
            <div className="mt-4">
              <button
                onClick={() => setOpen(!open)}
                className="text-[#F34434] font-semibold underline hover:no-underline"
              >
                {open ? "Hide Details" : "Click Me "}
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
                    Now imagine transforming that same act of kindness into
                    something far greater—giving a vulnerable person the chance
                    to receive medical care when they need it most.
                  </p>
                  <p>
                    At Respondrz, we invite Generous Hearts, Philanthropists,
                    Community Leaders, and Everyday Changemakers to “buy coffee”
                    for the needy. But instead of caffeine, your contribution
                    fuels access to life-saving emergency care for people who
                    would otherwise be left behind: workers on the margins,
                    rural families, minorities, and communities in crisis.
                  </p>
                  <p>
                    Your kindness becomes infrastructure. Your generosity
                    becomes survival. Your legacy becomes resilience.
                  </p>
                  <p className="font-bold text-[#F34434]">
                    If you’re in a position to give, Respondrz turns your gift
                    into a lifeline. Let’s make compassion actionable.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Donate Button */}
            <div className="mt-8 flex justify-center">
              {!logoError ? (
                <a
                  href="https://www.buymeacoffee.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={BMC_LOGO}
                    alt="Buy Me a Coffee"
                    className="h-14 hover:scale-105 transition"
                    onError={() => setLogoError(true)}
                  />
                </a>
              ) : (
                <a
                  href="https://www.buymeacoffee.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-black px-5 py-3 rounded-xl font-bold shadow hover:bg-yellow-500"
                >
                  <Coffee size={22} /> Buy Me a Coffee
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuymeCoffee;
