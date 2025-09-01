import React, { useState } from "react";

export default function PartnershipForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    alert("✅ Partnership form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 bg-[#0F172A]">
        
        {/* Left Form Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Let’s build a partnership
          </h2>
          <p className="text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg">
            Join Respondrz in shaping a safer tomorrow. Fill out the form and let’s collaborate.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            
            {/* First + Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300">
                  First Name*
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300">
                  Last Name*
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Organization */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-300">
                Organization*
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Designation */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-300">
                Designation
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300">
                  Buy Coffee for Needy?*
                </label>
                <select
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300">
                  Do you have an Ambulance?*
                </label>
                <select
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300">
                  Email*
                </label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Country + City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300">
                  Country
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300">
                  City
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-300">
                Message*
              </label>
              <textarea
                rows="4"
                required
                className="mt-1 block w-full rounded-md bg-gray-800 text-white px-3 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-red-600 px-4 py-2 sm:py-3 text-white font-medium text-sm sm:text-base hover:bg-red-700 transition"
            >
              Submit Partnership Request
            </button>
          </form>

          {/* Success Message */}
          {submitted && (
            <p className="mt-4 text-green-400 font-medium text-sm sm:text-base">
              🎉 Your partnership request has been submitted successfully!
            </p>
          )}
        </div>

        {/* Right CEO Section */}
        <div className="text-white flex flex-col justify-center mt-12 lg:mt-0">
          <h3 className="text-lg sm:text-xl font-semibold text-red-400 mb-4 sm:mb-6">
            Respondrz
          </h3>
          <p className="text-gray-300 mb-6 sm:mb-10 italic leading-relaxed text-sm sm:text-base lg:text-lg">
            “At Respondrz, we believe partnerships save lives. Together, we can
            create a network of compassion and rapid response that transforms
            emergencies into opportunities for hope and resilience.”
          </p>
          <div className="flex items-center space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.webp"
              alt="CEO"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-700"
            />
            <div>
              <p className="font-medium text-base sm:text-lg">Ch Ali Kamran</p>
              <p className="text-gray-400 text-xs sm:text-sm">CEO of Respondrz</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
