import React from "react";
import { useInView } from "react-intersection-observer";
import stats from "../../assets/stats.jpg";

const RespondrzImpact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="bg-[rgb(255,244,225)] py-12 font-serif">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text Content */}
        <div ref={ref}>
          <p className="text-red-600 text-xl font-bold mb-5">
            Respondrz Impact in 2025
          </p>
          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-snug mb-8">
            Saving lives by connecting people to emergency care faster
          </h2>

          <div className="space-y-12">
            {/* Stat 1 */}
            <div className="flex items-start gap-10">
              <div>
                <h3 className="text-5xl font-black text-gray-900">500k</h3>
                <div className="w-12 h-1 bg-orange-500 mt-2 ml-10"></div>
              </div>
              <p className="text-gray-700 text-lg">
                Emergency rides booked instantly through the Respondrz mobile app
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex items-start gap-16">
              <div>
                <h3 className="text-5xl font-extrabold text-gray-900">1.2k</h3>
                <div className="w-12 h-1 bg-orange-500 mt-2 m-7"></div>
              </div>
              <p className="text-gray-700 text-lg">
                Ambulances available across major cities to reach patients on time
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex items-start gap-16">
              <div>
                <h3 className="text-5xl font-extrabold text-gray-900">24/7</h3>
                <div className="w-12 h-1 bg-orange-500 mt-2 ml-8"></div>
              </div>
              <p className="text-gray-700 text-lg ">
                Live support and tracking to ensure critical help arrives when it matters most
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src={stats}
            alt="Emergency Ambulance Service"
            className="rounded-lg shadow-md object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default RespondrzImpact;
