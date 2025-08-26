import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LPartners = () => {
  const partners = [
    { 
      id: "01", 
      title: "Public Sector (Governments)",
      subtitle: "Saving Citizens, Building Data for the Future",
      desc: `Governments carry the responsibility of protecting citizens, but fragmented ambulance systems make it difficult to respond quickly and fairly. RespondrZ changes this.`,
      bg: "https://img.dunyanews.tv/news/2025/March/03-10-25/news_big_images/872446_85694817.jpg"
    },
    { 
      id: "02", 
      title: "NGOs (Non-Profit Organizations)",
      subtitle: "Making Impact Where It Matters Most",
      desc: `NGOs are at the heart of humanitarian work, but without digital tools, their impact often remains unseen. RespondrZ amplifies your mission.`,
      bg: "https://edhi.org/wp-content/uploads/2016/12/Ambulance-Service.png"
    },
    { 
      id: "03", 
      title: "Corporate Sector",
      subtitle: "CSR That Truly Saves Lives",
      desc: `Corporate Social Responsibility (CSR) is not just about giving back—it is about creating lasting impact. RespondrZ offers a powerful avenue for corporations to contribute.`,
      bg: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
    },
    { 
      id: "04", 
      title: "Private Hospitals",
      subtitle: "Expanding Reach, Growing Responsibly",
      desc: `Private hospitals often own ambulances that operate independently. By partnering with RespondrZ, you gain both business growth and social impact.`,
      bg: "https://wfumb.info/wp-content/uploads/2019/01/Kenya_AKU_Kenya_0284.jpg"
    },
    { 
      id: "05", 
      title: "Public Sector",
      subtitle: "Modernizing Healthcare for All",
      desc: `Public institutions play a central role in equitable access. RespondrZ makes emergency response transparent and efficient for citizens.`,
      bg: "https://images.pexels.com/photos/33568993/pexels-photo-33568993.png"
    },
    { 
      id: "06", 
      title: "Insurance Companies",
      subtitle: "Enabling Smarter Healthcare Protection",
      desc: `Insurance providers can make their services faster, smarter, and more impactful with RespondrZ’s real-time integrations.`,
      bg: "https://images.pexels.com/photos/7163955/pexels-photo-7163955.jpeg"
    },
  ];

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["0%", `-${(partners.length - 1) * 7}%`]
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[200vh] bg-gray-300 text-white"
    >
        <h2 className="text-4xl pt-20 md:text-5xl text-center font-bold text-red-600 w-full ">
          Our Partners
        </h2>
      {/* Sticky wrapper */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <motion.div
          style={{ x }}
          className="flex gap-10 px-20"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[340px] h-[460px] flex flex-col rounded-xl 
                shadow-xl shrink-0 cursor-pointer relative overflow-hidden group"
              style={{
                backgroundImage: `url(${partner.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              {/* dark overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300 rounded-xl" />

              {/* Title content (moves up on hover) */}
              <div className="relative z-10 p-6 flex flex-col justify-center items-center text-center h-full 
                              transition-all duration-500 group-hover:translate-y-[-30%]">
                <span className="text-6xl font-extrabold text-pink-400 mb-3 block">
                  {partner.id}
                </span>
                <p className="text-2xl font-bold">{partner.title}</p>
              </div>

              {/* Hidden description (slides up on hover) */}
              <div className="absolute bottom-8 left-0 w-full p-6 z-10 text-center
                              translate-y-full group-hover:translate-y-0
                              transition-transform duration-500 ease-in-out">
                <h4 className="text-lg font-semibold text-orange-400 mb-3">
                  {partner.subtitle}
                </h4>
                <p className="text-base leading-relaxed">{partner.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LPartners;
