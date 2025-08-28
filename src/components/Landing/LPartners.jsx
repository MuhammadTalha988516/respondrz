import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight} from "lucide-react";

const LPartners = () => {
  const partners = [
    { id: "01", title: "Public Sector (Governments)", subtitle: "Saving Citizens, Building Data for the Future", desc: "Governments carry the responsibility of protecting citizens, but fragmented ambulance systems make it difficult to respond quickly and fairly. RespondrZ changes this.", bg: "https://img.dunyanews.tv/news/2025/March/03-10-25/news_big_images/872446_85694817.jpg" },
    { id: "02", title: "NGOs (Non-Profit Organizations)", subtitle: "Making Impact Where It Matters Most", desc: "NGOs are at the heart of humanitarian work, but without digital tools, their impact often remains unseen. RespondrZ amplifies your mission.", bg: "https://edhi.org/wp-content/uploads/2016/12/Ambulance-Service.png" },
    { id: "03", title: "Corporate Sector", subtitle: "CSR That Truly Saves Lives", desc: "Corporate Social Responsibility (CSR) is not just about giving back—it is about creating lasting impact. RespondrZ offers a powerful avenue for corporations to contribute.", bg: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" },
    { id: "04", title: "Private Hospitals", subtitle: "Expanding Reach, Growing Responsibly", desc: "Private hospitals often own ambulances that operate independently. By partnering with RespondrZ, you gain both business growth and social impact.", bg: "https://wfumb.info/wp-content/uploads/2019/01/Kenya_AKU_Kenya_0284.jpg" },
    { id: "05", title: "Public Sector", subtitle: "Modernizing Healthcare for All", desc: "Public institutions play a central role in equitable access. RespondrZ makes emergency response transparent and efficient for citizens.", bg: "https://images.pexels.com/photos/33568993/pexels-photo-33568993.png" },
    { id: "06", title: "Insurance Companies", subtitle: "Enabling Smarter Healthcare Protection", desc: "Insurance providers can make their services faster, smarter, and more impactful with RespondrZ’s real-time integrations.", bg: "https://images.pexels.com/photos/7163955/pexels-photo-7163955.jpeg" },
  ];

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth horizontal scroll
  const rawX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(partners.length - 1) * 60}%`]
  );
  const x = useSpring(rawX, { stiffness: 80, damping: 20, mass: 0.6 });

  return (
    <>
      {/* Horizontal Scroll Section */}
      <section ref={containerRef} className="relative w-full h-[190vh] bg-gray-300">
        <h2 className="text-4xl pt-20 md:text-5xl text-center font-bold text-red-600 w-full">
          Be Our Partners
        </h2>

        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-10 px-20 will-change-transform">
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-[340px] h-[460px] flex flex-col rounded-xl 
                  shadow-xl shrink-0 cursor-pointer relative overflow-hidden group will-change-transform"
                style={{
                  backgroundImage: `url(${partner.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300 rounded-xl" />
                <div className="relative z-10 p-6 flex flex-col justify-center items-center text-center h-full 
                                transition-all duration-500 group-hover:translate-y-[-30%]">
                  <span className="text-6xl font-extrabold text-pink-400 mb-3 block">
                    {partner.id}
                  </span>
                  <p className="text-2xl font-bold">{partner.title}</p>
                </div>
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

      {/* End Text Section */}
      <section className="w-full py-40 bg-gray-300">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="px-8 max-w-4xl mx-auto text-center text-gray-800"
        >
          <p className="text-2xl font-semibold leading-relaxed">
            At RespondrZ, we believe technology is only powerful when it touches lives.
            That’s why RespondrZ is more than software—it’s a movement toward safer communities,
            faster care, and a healthier planet.
          </p>
        </motion.div>

        {/* Centered CTA Button */}
        <div className="w-full flex justify-center mt-12">
          <Link
            to="/impact"
            className="flex items-center gap-2 bg-[#F34434] text-white px-8 py-4 rounded-2xl font-semibold shadow-md hover:bg-[#d92f2f] transition w-fit"
          >
            Impact <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default LPartners;
