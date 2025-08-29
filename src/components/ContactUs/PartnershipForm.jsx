import React, { useState } from "react";

export default function PartnershipForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    alert("✅ Partnership form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 bg-[#0F172A]">
        {/* Left Form Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Let’s build a partnership
          </h2>
          <p className="text-gray-400 mb-10">
            Join Respondrz in shaping a safer tomorrow. Fill out the form and let’s collaborate.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  First Name*
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Last Name*
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Organization*
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Designation
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Buy Coffee for Needy?*
                </label>
                <select
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Do you have an Ambulance?*
                </label>
                <select
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Email*
                </label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Country
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  City
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Message*
              </label>
              <textarea
                rows="4"
                required
                className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-700 transition"
            >
              Submit Partnership Request
            </button>
          </form>

          {/* Success Message below form */}
          {submitted && (
            <p className="mt-4 text-green-400 font-medium">
              🎉 Your partnership request has been submitted successfully!
            </p>
          )}
        </div>

        {/* Right CEO Section */}
        <div className="text-white flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-red-400 mb-6">Respondrz</h3>
          <p className="text-gray-300 mb-10 italic leading-relaxed">
            “At Respondrz, we believe partnerships save lives. Together, we can
            create a network of compassion and rapid response that transforms
            emergencies into opportunities for hope and resilience.”
          </p>
          <div className="flex items-center space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="CEO"
              className="w-14 h-14 rounded-full border border-gray-700"
            />
            <div>
              <p className="font-medium text-lg">Awais Ali</p>
              <p className="text-gray-400 text-sm">CEO of Respondrz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
