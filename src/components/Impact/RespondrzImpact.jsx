import React from "react";
import { useInView } from "react-intersection-observer";
import stats from "../../assets/stats.webp";

const RespondrzImpact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // set to true if you want it to animate only always
    threshold: 0.3,
  });

  const goals = [
    {
      value: "200k+",
      desc: "Emergency rides helping people get timely access to life-saving care",
    },
    {
      value: "2k+",
      desc: "Ambulances connected across key cities for reliable response",
    },
    {
      value: "15+",
      desc: "Cities covered step by step to ensure fair nationwide access",
    },
    {
      value: "20k+",
      desc: "Healthcare workers supported with faster patient transfers",
    },
    {
      value: "10–15%",
      desc: "Reduction in delays & emissions through smart routing",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-400 py-16 font-serif">
      <div className="w-full mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text Content */}
        <div ref={ref} className="text-white lg:pr-10 space-y-10">
          <p
            className={`text-red-300 text-xl font-bold mb-4 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            Respondrz Vision for 2030
          </p>
          <h2
            className={`text-4xl lg:text-5xl font-bold leading-snug mb-10 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            Saving lives by connecting people to emergency care faster
          </h2>

          {goals.map((goal, index) => (
            <div
              key={index}
              className={`flex items-center gap-8 transition-all duration-700 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }} // FIX: seconds not ms
            >
              <div className="min-w-[200px] text-right">
                <h3 className="text-5xl font-black">{goal.value}</h3>
                <div className="w-12 h-1 bg-orange-400 mt-2 ml-auto"></div>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed ml-10">
                {goal.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div
          className={`flex justify-center lg:justify-end transition-all duration-700 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <img
            src={stats}
            alt="Emergency Ambulance Service"
            className="rounded-xl shadow-lg object-cover w-full max-w-xl h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default RespondrzImpact;
