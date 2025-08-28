import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, BarChart3, Activity, Users, Building2, ShieldCheck } from "lucide-react";

import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpeg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpg";
import bg from "../../assets/bg.jpg";

const audiences = [
  {
    title: "For Governments",
    desc: `Reuse Dead Resources (Ambulances), Track, Coordinate, and Deploy Resources Instantly. Gain Data Insights, for Policy & Planning, Resources & Budget Allocation, Situational Awareness that Saves Lives and Boosts Citizen Trust.`,
    backgroundImage: bg,
    cards: [
      { title: "Reuse Resources", desc: "Repurpose idle ambulances and optimize usage.", icon: HeartPulse },
      { title: "Data Insights", desc: "Analytics for policy & budget allocation.", icon: BarChart3 },
      { title: "Situational Awareness", desc: "Live tracking that saves lives.", icon: Activity },
    ],
  },
  {
    title: "For NGOs",
    desc: `There is Err in human, people in distress times may dial an incorrect number or possibly can not recall in an emergency situation, RespondrZ make sure that people reach to the authorized emergency responders without making phone call. Ensure donations and aid reach the right people at the right time, cutting waste and duplication.`,
    backgroundImage: bg1,
    cards: [
      { title: "Direct Connection", desc: "No wrong calls in emergencies.", icon: Users },
      { title: "Efficient Aid", desc: "Deliver donations without duplication.", icon: ShieldCheck },
      { title: "Trusted Reach", desc: "Boost credibility and citizen trust.", icon: HeartPulse },
    ],
  },
  {
    title: "For Hospitals & Healthcare Providers",
    desc: `Hospitals having a full fledge Emergency Setup, requires RespondrZ platform to respond the emergency happened in the nearest proximity. We strongly believe an emergency should be dealt with priority, to reduce suffering, pain, and deaths, it also multiply the Business.`,
    backgroundImage: bg2,
    cards: [
      { title: "Emergency Priority", desc: "Respond faster to nearby cases.", icon: HeartPulse },
      { title: "Grow Business", desc: "Increase patient trust & reputation.", icon: Building2 },
      { title: "Seamless Response", desc: "Coordinate instantly with resources.", icon: Activity },
    ],
  },
  {
    title: "For Insurance Companies",
    desc: `Since Insurance Companies (Micro/Marcro Insurances) provides health insurances, may staple cost efficient pre-hospital care with their insurance plans to add value to it. ResopndrZ is a user-friendly SaaS Platform, and need of general and vulnerable population.`,
    backgroundImage: bg3,
    cards: [
      { title: "Value Plans", desc: "Add emergency care to insurance.", icon: ShieldCheck },
      { title: "Affordable Care", desc: "Pre-hospital services bundled in.", icon: BarChart3 },
      { title: "Wider Reach", desc: "Serve vulnerable populations better.", icon: Users },
    ],
  },
  {
    title: "For Corporations",
    desc: `You believe in Corporate Social Responsibility (CSR), and wanna buy coffee to needy ones or vulnerable population? Yes you can. You can add value to health benefits to your employees, add value to the society by Protect Raiders, general workers, religious minorities, and the rural population, by helping us building an infrastructure for them.`,
    backgroundImage: bg4,
    cards: [
      { title: "CSR Value", desc: "Support communities meaningfully.", icon: Users },
      { title: "Employee Benefits", desc: "Add healthcare to benefits.", icon: HeartPulse },
      { title: "Community Impact", desc: "Protect vulnerable populations.", icon: ShieldCheck },
    ],
  },
];

const OurPartners = () => {
  return (
    <div className="flex flex-col">
      {audiences.map((item, index) => (
        <section
          key={index}
          className="relative w-full min-h-screen flex items-center"
        >
          {/* Background */}
          <div
            className="absolute inset-0 h-[100vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Content (Zig-Zag layout) */}
          <div
            className={`relative z-10  mt-10 mx-auto px-6 lg:px-12 py-20 flex flex-col md:flex-row items-start gap-50
              ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Left/Right Text */}
            <motion.div
              className="flex-1 text-white"
              initial={{ x: index % 2 === 0 ? -80 : 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ always: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                {item.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
                {item.desc}
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition">
                  Get Started
                </button>

              </div>
            </motion.div>

            {/* Right/Left Cards */}
            <motion.div
              className="flex-1 grid grid-cols-1 sm:grid-cols-1 gap-6"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ always: true }}
            >
              {item.cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-white shadow-lg hover:bg-white/20 transition"
                  >
                    <Icon className="w-10 h-10 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-200">{card.desc}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default OurPartners;
