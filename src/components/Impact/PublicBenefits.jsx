import React from "react";
import { motion } from "framer-motion";
import UseAnimations from "react-useanimations";
import activity from "react-useanimations/lib/activity";
import alertTriangle from "react-useanimations/lib/alertTriangle";
import lock from "react-useanimations/lib/lock";
import loading from "react-useanimations/lib/loading";
import heart from "react-useanimations/lib/heart";
import settings from "react-useanimations/lib/settings";
import searchToX from "react-useanimations/lib/searchToX";
import trash from "react-useanimations/lib/trash";
import github from "react-useanimations/lib/github";

const PublicBenefits = () => {
  const sections = [
    {
      id: "public",
      title: "General Public, Faster Help, Closer to Home",
      desc: "Emergencies don’t wait, and neither should people. With Respondrz, the public benefits from faster ambulance access, live arrival times, and seamless connection with responders.",
      cards: [
        {
          icon: loading,
          title: "Nearest Ambulance",
          desc: "Access the closest available ambulance instantly.",
          features: [
            "Real-time assignment",
            "Seamless responder connection",
            "Fast response delivery",
          ],
        },
        {
          icon: activity,
          title: "Faster Help",
          desc: "Know exactly when help will arrive.",
          features: [
            "Live arrival times",
            "Quick dispatch system",
            "Reduced waiting uncertainty",
          ],
        },
        {
          icon: heart,
          title: "Peace of Mind",
          desc: "Families rest assured knowing help is on the way.",
          features: [
            "Stay connected with responders",
            "Transparent tracking",
            "Trusted response",
          ],
        },
      ],
    },
    {
      id: "vulnerable",
      title: "Vulnerable Populations, Giving Voice to the Voiceless",
      desc: "Not everyone can dial in an emergency. Respondrz ensures elderly citizens, people with reduced mobility, and those who are deaf or mute are supported and never forgotten.",
      cards: [
        {
          icon: searchToX,
          title: "Inclusive Access",
          desc: "Emergency access for all — no barriers.",
          features: [
            "Voice-free emergency calls",
            "Mobility-friendly support",
            "Accessibility-first design",
          ],
        },
        {
          icon: settings,
          title: "Safety & Dignity",
          desc: "Protecting those most at risk with empathy.",
          features: [
            "Respectful response system",
            "Disability-aware services",
            "Trusted community care",
          ],
        },
        {
          icon: heart,
          title: "Support at Home",
          desc: "Help tailored to vulnerable citizens where they live.",
          features: [
            "In-home response",
            "Wearable-triggered alerts",
            "Inclusive support",
          ],
        },
      ],
    },
    {
      id: "governments",
      title: "Smarter Governments, Stronger Communities",
      desc: "For public officials, Respondrz is a strategic intelligence system with real-time dashboards for better planning and faster responses.",
      cards: [
        {
          icon: activity,
          title: "Strategic Dashboards",
          desc: "Advanced insights for safety planning.",
          features: [
            "Risk heatmaps",
            "Pre-pandemic monitoring",
            "Disaster preparedness",
          ],
        },
        {
          icon: alertTriangle,
          title: "Resource Planning",
          desc: "Optimize resources for maximum impact.",
          features: [
            "Budget allocation tools",
            "Reduced response times",
            "Future-proof strategies",
          ],
        },
        {
          icon: github,
          title: "Community Insights",
          desc: "Understand and serve your citizens better.",
          features: ["Local response data", "Trend analysis", "Predictive readiness"],
        },
      ],
    },
    {
      id: "startups",
      title: "Empowering Startups & Health Tech Innovators",
      desc: "Through our open API, startups and health-tech innovators can integrate directly, creating a stronger, connected ecosystem.",
      cards: [
        {
          icon: github,
          title: "Open API",
          desc: "Collaboration with health-tech innovators.",
          features: ["Easy integrations", "Automated emergency alerts", "Fast adoption"],
        },
        {
          icon: activity,
          title: "Stronger Ecosystem",
          desc: "Building connected emergency solutions.",
          features: [
            "Community-driven innovation",
            "Startup support",
            "Scalable health-tech",
          ],
        },
        {
          icon: lock,
          title: "Reliable Security",
          desc: "Data safety for critical integrations.",
          features: [
            "HIPAA-compliant",
            "Secure API access",
            "Trusted by health-tech leaders",
          ],
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-white">
      {sections.map((section, idx) => {
        const isPatternOne = idx % 2 === 0;
        const titleAnim = isPatternOne
          ? { y: 40, opacity: 0 }
          : { x: -60, opacity: 0 };
        const cardAnim = isPatternOne
          ? { y: 60, opacity: 0 }
          : { x: 60, opacity: 0 };

        return (
          <section
            key={section.id}
            className="bg-gray-800 text-white py-20 mb-10 mt-10"
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Section Title */}
              <motion.div
                initial={titleAnim}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">{section.desc}</p>
              </motion.div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.cards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={cardAnim}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 8px 30px rgba(134,239,172,0.5)",
                    }}
                    className="bg-gray-900 rounded-2xl shadow-lg p-8 transition-all duration-500 cursor-pointer hover:bg-gray-700"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <UseAnimations
                        animation={card.icon}
                        size={40}
                        strokeColor="#86efac"
                        autoplay
                        loop
                        speed={0.7}
                      />
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                    </div>
                    <p className="mb-6 text-gray-300">{card.desc}</p>
                    <ul className="space-y-3 text-gray-400">
                      {card.features.map((feat, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default PublicBenefits;
