import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const FutureSectorImpact = () => {
  const stats = [
    {
      number: 75000,
      suffix: "+",
      text: "patients could receive timely emergency care in the first 3 pilot cities annually",
    },
    {
      number: 350,
      suffix: "+",
      text: "ambulances connected digitally for faster and coordinated response",
    },
    {
      number: 15,
      suffix: "%",
      text: "faster average response time expected with smart dispatching",
    },
    {
      number: 1500,
      suffix: "+",
      text: "healthcare workers supported with digital alerts and optimized transfers",
    },
    {
      number: 7,
      suffix: "%",
      text: "reduction in delays and emissions through smart routing",
    },
  ];

  // 👇 One ref for the entire stats grid
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-white py-16 font-serif">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h3 className="text-orange-500 font-semibold mb-4 text-center">
          Future Sector Impact in Pakistan
        </h3>
        <p className="text-gray-500 mb-12 text-center">
          These projections show the early impact of digitalizing ambulance services in major cities.
        </p>

        {/* Stats */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center"
        >
          {stats.map((stat, index) => (
            <div key={index} className="transition-transform duration-500 hover:scale-105">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2}
                    separator=","
                    suffix={stat.suffix}
                  />
                ) : (
                  "0" + stat.suffix
                )}
              </h2>
              <div className="w-12 h-1 bg-orange-500 mx-auto my-4"></div>
              <p className="text-gray-700 text-lg md:text-xl">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureSectorImpact;
