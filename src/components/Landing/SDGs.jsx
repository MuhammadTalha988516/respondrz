import React from 'react'
import SDG from '../../assets/SDG.png'
import SDG3 from '../../assets/sdg3.png'
import SDG5 from '../../assets/sdg5.png'
import SDG8 from '../../assets/sdg8.png'
import SDG9 from '../../assets/sdg9.png'
import SDG11 from '../../assets/sdg11.png'
import SDG17 from '../../assets/sdg17.png'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const SDGs = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center space-y-10 py-12 px-4">

      {/* Title */}
      <h1
        className="font-bold text-3xl"
        data-aos="fade-down"
      >
        Helping Pakistan achieve the SDGs.
      </h1>

      {/* Title Banner */}
      <img 
        src={SDG} 
        alt="SDG Banner"
        className="max-w-[400px] w-full"
        data-aos="zoom-in-up"
      />

      {/* SDG Icons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 mx-auto gap-6 justify-items-center w-full max-w-6xl">
        {[SDG3, SDG5, SDG8, SDG9, SDG11, SDG17].map((icon, i) => (
          <img 
            key={i} 
            src={icon} 
            alt={`SDG ${i + 1}`} 
            className="w-[120px] sm:w-[160px] md:w-[200px] h-auto object-contain transition transform hover:scale-110 hover:rotate-0 duration-500"
            data-aos="zoom-in"
            data-aos-delay={i * 200}
          />
        ))}
      </div>

      {/* Learn More Section */}
      <div 
        className="text-center max-w-2xl space-y-4"
        data-aos="fade-up"
      >
        <p className="text-gray-700 text-lg">
          Learn more about how <span className="font-bold text-[#F34434]">RespondrZ </span> 
          is contributing to the achievement of the Sustainable Development Goals in Pakistan.
        </p>
      
        <Link 
          to="/impact" 
          className="inline-flex items-center gap-2 bg-[#F34434] text-white font-semibold px-6 py-4 mt-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:bg-red-600 transition duration-300"
          data-aos="zoom-in-up"
        >
          Learn More <ChevronRight className="w-5 h-5" />
        </Link>
      </div>

    </div>
  )
}

export default SDGs
