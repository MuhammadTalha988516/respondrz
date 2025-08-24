import React from "react";

const sectors = [
  {
    title: "Public Sector (Governments)",
    subtitle: "Saving Citizens, Building Data for the Future",
    desc: `Governments carry the responsibility of protecting citizens, but fragmented ambulance systems make it difficult to respond quickly and fairly. RespondrZ changes this.`,
    points: [
      "Faster Help for Citizens: Seamlessly connect your ambulances to the public through a one-tap SOS system.",
      "Real-Time Insights: Access heatmaps and live data on emergencies across your region.",
      "Better Policy & Planning: Use accurate data for resource allocation, disaster management, and budgeting.",
      "Transparency: Track ambulances and ensure fair, efficient use of public resources.",
    ],
  },
  {
    title: "NGOs (Non-Profit Organizations)",
    subtitle: "Making Impact Where It Matters Most",
    desc: `NGOs are at the heart of humanitarian work, but without digital tools, their impact often remains unseen. RespondrZ amplifies your mission.`,
    points: [
      "Visibility: Show communities your role in saving lives.",
      "Efficiency: Dispatch ambulances faster through digital alerts.",
      "Accountability: Share transparent reports with donors and partners.",
      "Sustainability: Reduce operational costs through better fleet utilization.",
    ],
  },
  {
    title: "Corporate Sector",
    subtitle: "CSR That Truly Saves Lives",
    desc: `Corporate Social Responsibility (CSR) is not just about giving back—it is about creating lasting impact. RespondrZ offers a powerful avenue for corporations to contribute.`,
    points: [
      "Life-Saving CSR: Sponsor ambulances or fund digital access for vulnerable communities.",
      "Public Recognition: Show customers and employees that you stand for life and safety.",
      "Shared Value: A safer, healthier society benefits businesses too.",
    ],
  },
  {
    title: "Private Hospitals",
    subtitle: "Expanding Reach, Growing Responsibly",
    desc: `Private hospitals often own ambulances that operate independently. By partnering with RespondrZ, you gain both business growth and social impact.`,
    points: [
      "Increased Utilization: Receive more emergency cases by being digitally accessible.",
      "Reputation: Be recognized as a hospital that prioritizes saving lives, not just profits.",
      "Digital Inclusion: Join the national effort of healthcare modernization.",
      "Community Trust: Build loyalty with patients and families through fast, transparent response.",
    ],
  },
  {
    title: "Insurance Companies",
    subtitle: "Enabling Smarter Healthcare Protection",
    desc: `Insurance providers play a crucial role in healthcare accessibility. By joining RespondrZ, insurance companies can make their services faster, smarter, and more impactful.`,
    points: [
      "Seamless Claims: Faster verification and processing of ambulance and emergency care claims.",
      "Data Insights: Access valuable data on emergencies to design better coverage plans.",
      "Customer Loyalty: Build trust by showing real-time support during life-and-death moments.",
      "Social Impact: Be seen as a partner that prioritizes health and protection beyond policies.",
    ],
  },
];

const OurPartners = () => {
  return (
    <div className="w-full bg-gray-100">
      {sectors.map((sector, index) => (
        <section key={index} className="py-16 px-6 border-b border-gray-200">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            
            {/* Text Section */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {sector.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">{sector.subtitle}</p>
              <p className="text-gray-700 mb-6">
                {sector.desc}{" "}
                <span className="font-semibold text-red-600">RespondrZ</span>
              </p>
            </div>

            {/* Bullet Section */}
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <ul className="space-y-4">
                {sector.points.map((point, i) => {
                  const [strong, ...rest] = point.split(":");
                  return (
                    <li key={i} className="flex items-start">
                      <span className="text-red-500 font-bold mr-3">•</span>
                      <span>
                        <strong>{strong}:</strong> {rest.join(":")}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-6 font-semibold text-gray-800">
                {sector.title.includes("Governments") &&
                  "By partnering with RespondrZ, governments restore trust, save more lives, and gain actionable intelligence for a healthier nation."}
                {sector.title.includes("NGOs") &&
                  "Together, we can turn compassion into action, and ensure no life is lost for lack of timely help."}
                {sector.title.includes("Corporate") &&
                  "By joining hands with RespondrZ, your CSR investment becomes more than charity—it becomes a legacy of lives saved."}
                {sector.title.includes("Hospitals") &&
                  "Inclusion in RespondrZ means becoming part of a nationwide life-saving network."}
                {sector.title.includes("Insurance") &&
                  "RespondrZ allows insurers to go beyond paperwork and truly stand beside their customers when they need help the most."}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default OurPartners;
