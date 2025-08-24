import React  from "react";

const KeyImpactAreas = () => (
  <section className="w-full bg-white py-16 px-6">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800">
        How RespondrZ Makes a Difference
      </h2>
    </div>
    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {[
        {
          title: "Visibility & Awareness",
          desc: "Empowering NGOs, hospitals, and communities with digital presence.",
        },
        {
          title: "Efficiency in Response",
          desc: "Intelligent alerts and GPS routing reduce delays.",
        },
        {
          title: "Accountability & Transparency",
          desc: "Digital logs and reports for donors, families, and organizations.",
        },
        {
          title: "Sustainability",
          desc: "Smarter fleet utilization = lower operational costs.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-3 text-red-600">
            {item.title}
          </h3>
          <p className="text-gray-700">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);


export default KeyImpactAreas;