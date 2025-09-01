import React from 'react'
import { PhoneCall, Mail, MapPin } from 'lucide-react'

const CTA = () => {
  return (
    <section className="w-full bg-gray-100 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Call Us Card */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center text-center p-8 hover:shadow-2xl transition">
          <div className="bg-red-100 p-4 rounded-full mb-4">
            <PhoneCall size={40} className="text-[#F34434]" aria-hidden="true" />
          </div>
          <h2 className="text-xl font-bold mb-2">Call Us</h2>
          <p className="text-gray-600">+92 300 1234567</p>
        </div>

        {/* Email Us Card */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center text-center p-8 hover:shadow-2xl transition">
          <div className="bg-red-100 p-4 rounded-full mb-4">
            <Mail size={40} className="text-[#F34434]" aria-hidden="true" />
          </div>
          <h2 className="text-xl font-bold mb-2">Email Us</h2>
          <p className="text-gray-600">support@respondrz.com</p>
        </div>

        {/* Visit Us Card */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center text-center p-8 hover:shadow-2xl transition">
          <div className="bg-red-100 p-4 rounded-full mb-4">
            <MapPin size={40} className="text-[#F34434]" aria-hidden="true" />
          </div>
          <h2 className="text-xl font-bold mb-2">Visit Us</h2>
          <p className="text-gray-600">123 Main Street, Karachi</p>
        </div>

      </div>
    </section>
  )
}

export default CTA
