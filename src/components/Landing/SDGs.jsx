import React from 'react'
import SDG from '../../assets/SDG.webp'
import SDG3 from '../../assets/sdg3.webp'
import SDG5 from '../../assets/sdg5.webp'
import SDG8 from '../../assets/sdg8.webp'
import SDG9 from '../../assets/sdg9.webp'
import SDG11 from '../../assets/sdg11.webp'
import SDG17 from '../../assets/sdg17.webp'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const SDGs = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center space-y-10 py-12 px-4">

      {/* Title */}
      <h1
        className="font-bold text-2xl sm:text-3xl text-center"
        data-aos="fade-down"
      >
        Helping Pakistan achieve the SDGs.
      </h1>

      {/* Title Banner */}
      <img 
        src={SDG} 
        alt="SDG Banner"
        className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[400px]"
        data-aos="zoom-in-up"
      />

      {/* SDG Icons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center w-full max-w-6xl">
        {[SDG3, SDG5, SDG8, SDG9, SDG11, SDG17].map((icon, i) => (
          <img 
            key={i} 
            src={icon} 
            alt={`SDG ${i + 1}`} 
            className="w-[90px] sm:w-[120px] md:w-[160px] lg:w-[200px] h-auto object-contain transition transform hover:scale-110 duration-500"
            data-aos="zoom-in"
            data-aos-delay={i * 200}
          />
        ))}
      </div>

      {/* Learn More Section */}
      <div 
        className="text-center max-w-lg sm:max-w-2xl space-y-4 px-2"
        data-aos="fade-up"
      >
        <p className="text-gray-700 text-base sm:text-lg">
          Learn more about how <span className="font-bold text-[#F34434]">RespondrZ </span> 
          is contributing to the achievement of the Sustainable Development Goals in Pakistan.
        </p>
      
        <Link 
          to="/impact" 
          className="inline-flex items-center gap-2 bg-[#F34434] text-white font-semibold px-4 sm:px-6 py-3 sm:py-4 mt-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:bg-red-600 transition duration-300"
          data-aos="zoom-in-up"
        >
          Learn More <ChevronRight className="w-5 h-5" />
        </Link>
      </div>

    </div>
  )
}

export default SDGs
