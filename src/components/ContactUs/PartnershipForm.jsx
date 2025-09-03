import React, { useState } from "react";

export default function PartnershipForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    designation: "",
    buyCoffee: "",
    ambulance: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Partnership form submitted successfully!");
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          organization: "",
          designation: "",
          buyCoffee: "",
          ambulance: "",
          email: "",
          phone: "",
          country: "",
          city: "",
          message: "",
        });
      } else {
        alert("❌ Failed to submit form: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Server error. Please try again later.");
    }
  };

  return (
    <section className="min-h-screen bg-[#0F172A] py-12 px-4 sm:px-6 lg:px-12 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-[#1E293B] rounded-lg shadow-xl p-8 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
          Let’s build a partnership
        </h2>
        <p className="text-gray-400 mb-10 text-center">
          Fill out the form below and we'll get in touch with you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          {/* First + Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name*"
              required
              className="bg-gray-800 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name*"
              required
              className="bg-gray-800 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Organization + Designation */}
          <input
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Organization*"
            required
            className="bg-gray-800 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Designation"
            className="bg-gray-800 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <select
              name="buyCoffee"
              value={formData.buyCoffee}
              onChange={handleChange}
              required
              className="bg-gray-800 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Buy Coffee for Needy?*</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <select
              name="ambulance"
              value={formData.ambulance}
              onChange={handleChange}
              required
              className="bg-gray-800 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Do you have an Ambulance?*</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              required
              className="bg-gray-800 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number*"
              required
              className="bg-gray-800 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Country + City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="bg-gray-800 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="bg-gray-800 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message*"
            rows="4"
            required
            className="bg-gray-800 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md w-full font-medium transition duration-300"
          >
            Submit Partnership Request
          </button>

          {/* Success Message */}
          {submitted && (
            <p className="text-green-400 text-center mt-4">
              🎉 Your partnership request has been submitted successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
