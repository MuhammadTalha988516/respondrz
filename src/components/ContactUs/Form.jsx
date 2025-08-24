import React from 'react'

const Form = () => {
  return (
    <div className="flex justify-center items-center py-12 bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[500px]">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Get in Touch
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F34434]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F34434]"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F34434]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F34434]"
          />

          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F34434]"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#F34434] text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form
