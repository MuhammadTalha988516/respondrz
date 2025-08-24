import React from 'react'
import { PhoneCall, Mail } from 'lucide-react'

const CTA = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-screen px-6 py-12 bg-gray-100">
      
      {/* Call Us Card */}
      <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-8 hover:shadow-2xl transition">
        <div className="bg-red-100 p-4 rounded-full mb-4">
          <PhoneCall size={40} className="text-[#F34434]" />
        </div>
        <h2 className="text-xl font-bold mb-2">Call Us</h2>
        <p className="text-gray-600">+92 300 1234567</p>
      </div>

      {/* Email Us Card */}
      <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-8 hover:shadow-2xl transition">
        <div className="bg-red-100 p-4 rounded-full mb-4">
          <Mail size={40} className="text-[#F34434]" />
        </div>
        <h2 className="text-xl font-bold mb-2">Email Us</h2>
        <p className="text-gray-600">support@respondrz.com</p>
      </div>

      {/* Location Card Example */}
      <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-8 hover:shadow-2xl transition">
        <div className="bg-red-100 p-4 rounded-full mb-4">
          📍
        </div>
        <h2 className="text-xl font-bold mb-2">Visit Us</h2>
        <p className="text-gray-600">123 Main Street, Karachi</p>
      </div>

    </div>
  )
}

export default CTA
