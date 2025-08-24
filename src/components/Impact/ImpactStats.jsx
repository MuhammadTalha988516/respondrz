import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaMapMarkerAlt, FaHospital, FaUsers } from "react-icons/fa";

const ImpactStats = () => (

<section className="w-full bg-gray-100 py-16 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
      <div>
        <FaClock className="text-red-500 text-4xl mx-auto mb-4" />
        <h3 className="text-3xl font-bold">50%</h3>
        <p className="text-gray-600">Faster Response Time</p>
      </div>
      <div>
        <FaMapMarkerAlt className="text-red-500 text-4xl mx-auto mb-4" />
        <h3 className="text-3xl font-bold">Live</h3>
        <p className="text-gray-600">Real-Time Tracking</p>
      </div>
      <div>
        <FaHospital className="text-red-500 text-4xl mx-auto mb-4" />
        <h3 className="text-3xl font-bold">100+</h3>
        <p className="text-gray-600">Partnered Units</p>
      </div>
      <div>
        <FaUsers className="text-red-500 text-4xl mx-auto mb-4" />
        <h3 className="text-3xl font-bold">Thousands</h3>
        <p className="text-gray-600">Lives Touched</p>
      </div>
    </div>
  </section>
);

export default ImpactStats;
