import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const SectorImpact = () => {
  const stats = [
    {
      number: 420000,
      suffix: "+",
      text: "patients transported safely to hospitals during emergencies",
    },
    {
      number: 2300,
      suffix: "+",
      text: "ambulances connected across major cities nationwide",
    },
    {
      number: 95,
      suffix: "%",
      text: "average response time under 10 minutes during critical cases",
    },
  ];

  return (
    <section className="bg-white py-16 font-serif">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h3 className="text-orange-500 font-semibold mb-12">
          Sector Impact in 2025
        </h3>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => {
            const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

            return (
              <div key={index} ref={ref}>
                <h2 className="text-6xl font-black text-gray-900">
                  {inView ? (
                    <CountUp
                      key={inView} // 🔑 resets animation on every re-entry
                      start={0}
                      end={stat.number}
                      duration={1.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  ) : (
                    "0" + stat.suffix
                  )}
                </h2>
                <div className="w-12 h-1 bg-orange-500 mx-auto my-4"></div>
                <p className="text-gray-700 text-xl">{stat.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectorImpact;
