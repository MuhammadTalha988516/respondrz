import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Assets
import Corporate from "../../assets/Corporate.jpeg";
import publicI from "../../assets/publicI.jpeg";
import Govt from "../../assets/Govt.jpg";
import ngo from "../../assets/ngo.jpg";
import Private from "../../assets/Private.jpeg";
import bg3 from "../../assets/bg3.webp";

// -------- Partner Data --------
const PARTNERS_DATA = [
  {
    id: "01",
    title: "Public Sector (Governments)",
    subtitle: "Saving Citizens, Building Data for the Future",
    desc: "Governments carry the responsibility of protecting citizens, but fragmented ambulance systems make it difficult to respond quickly and fairly. RespondrZ changes this.",
    bg: Govt,
  },
  {
    id: "02",
    title: "NGOs (Non-Profit Organizations)",
    subtitle: "Making Impact Where It Matters Most",
    desc: "NGOs are at the heart of humanitarian work, but without digital tools, their impact often remains unseen. RespondrZ amplifies your mission.",
    bg: ngo,
  },
  {
    id: "03",
    title: "Insurance Companies",
    subtitle: "Enabling Smarter Healthcare Protection",
    desc: "Insurance providers can make their services faster, smarter, and more impactful with RespondrZ's real-time integrations.",
    bg: bg3,
  },
  {
    id: "04",
    title: "Private Hospitals",
    subtitle: "Expanding Reach, Growing Responsibly",
    desc: "Private hospitals often own ambulances that operate independently. By partnering with RespondrZ, you gain both business growth and social impact.",
    bg: Private,
  },
  {
    id: "05",
    title: "Public Institutions",
    subtitle: "Modernizing Healthcare for All",
    desc: "Public institutions play a central role in equitable access. RespondrZ makes emergency response transparent and efficient for citizens.",
    bg: publicI,
  },
  {
    
    id: "06",
    title: "Corporate Sector",
    subtitle: "CSR That Truly Saves Lives",
    desc: "Corporate Social Responsibility (CSR) is not just about giving back—it is about creating lasting impact. RespondrZ offers a powerful avenue for corporations to contribute.",
    bg: Corporate,
  },
];

// -------- Card Component --------
const PartnerCard = ({ id, title, subtitle, desc, bg }) => (
  <Link
    to="/partners" // removed dynamic anchor, static route
    className="w-[340px] h-[460px] flex flex-col rounded-xl shadow-xl shrink-0 relative overflow-hidden group cursor-pointer"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 rounded-xl transition-all duration-300 group-hover:bg-black/70" />

    {/* Number + Title (moves up on hover) */}
    <div
      className="relative z-10 p-6 flex flex-col justify-center items-center text-center h-full 
      transition-all duration-500 group-hover:-translate-y-24"
    >
      <span className="text-6xl font-extrabold text-pink-400 mb-3 block">
        {id}
      </span>
      <p className="text-2xl font-bold text-white">{title}</p>
    </div>

    {/* Subtitle + Description (fade/slide in) */}
    <div
      className="absolute bottom-0 left-0 w-full p-6 z-10 text-center 
      opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 
      transition-all duration-500 delay-150"
    >
      <h4 className="text-lg font-semibold text-orange-400 mb-3">
        {subtitle}
      </h4>
      <p className="text-base leading-relaxed text-white">{desc}</p>
    </div>
  </Link>
);

// -------- Main Component --------
const LPartners = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardWidth = 340;
  const gap = 40;
  const totalCards = PARTNERS_DATA.length;
  const totalWidth = totalCards * cardWidth + (totalCards - 1) * gap;

  // Center offset so first & last card pass through center
  const startOffset = (window.innerWidth - cardWidth) / 2;
  const endOffset = -(totalWidth - window.innerWidth + startOffset);

  const scrollX = useTransform(scrollYProgress, [0, 1], [startOffset, endOffset]);

  // Fade-in mission section AFTER last card exits
  const missionOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const missionY = useTransform(scrollYProgress, [0.85, 1], [50, 0]);

  return (
    <>
      {/* Header */}
      <header className="w-full py-20 bg-gray-300">
        <h2 className="text-4xl md:text-5xl text-center font-bold text-red-600">
          Be Our Partners
        </h2>
      </header>

      {/* Horizontal Scroll */}
      <section
        ref={containerRef}
        className="relative w-full h-[350vh] bg-gray-300"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            className="flex items-center gap-10"
            style={{ x: scrollX }}
          >
            {PARTNERS_DATA.map((partner) => (
              <PartnerCard key={partner.id} {...partner} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section with Fade-in */}
      <motion.section
        className="w-full py-32 bg-gray-300 mt-10"
        style={{ opacity: missionOpacity, y: missionY }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl font-semibold leading-relaxed text-gray-800 mb-12">
            At RespondrZ, we believe technology is only powerful when it touches
            lives. That's why RespondrZ is more than software—it's a movement
            toward safer communities, faster care, and a healthier planet.
          </p>
          <Link
            to="/impact"
            className="inline-flex items-center gap-2 bg-[#F34434] text-white px-6 py-3 rounded-2xl font-semibold shadow-md hover:bg-[#d92f2f] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Impact
            <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.section>
    </>
  );
};

export default LPartners;
