import React from 'react'
import SDG from '../../assets/SDG.png'
import SDG1 from '../../assets/sdg1.png'
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
    <div className="w-full h-auto flex flex-col bg-gray-800 items-center space-y-10 py-12 px-4">
      <h1 className='font-bold text-white text-5xl'>Supporting the SDGs and Our Planet</h1>
      {/* Title Banner */}
      <div className="text-center max-w-4xl space-y-4">
        <p className="text-white text-lg">
          Respondrz does not just save lives, it protects the planet. By dispatching the nearest ambulance instead of one traveling long distances, we reduce unnecessary fuel use and carbon emissions.
        This directly supports multiple UN SDGs, including:
        </p>
         </div>

     <img 
        src={SDG} 
        alt="SDG Banner"
        className="max-w-[400px] w-full"
      />


      {/* SDG Icons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 mx-auto gap-6 justify-items-center w-full max-w-6xl">
        {[SDG3, SDG5, SDG8, SDG9, SDG11, SDG17].map((icon, i) => (
          <img 
            key={i} 
            src={icon} 
            alt={`SDG ${i + 1}`} 
            className="w-[120px] sm:w-[160px] md:w-[200px] h-auto object-contain transition transform hover:scale-110 duration-300"
          />
        ))}
      </div>

      {/* Learn More Section */}
      <div className="text-center max-w-2xl space-y-4">
        <p className="text-white text-lg">
         When technology, compassion, and sustainability come together, progress accelerates for people and for the planet.        </p>
      
         </div>

    </div>
  )
}

export default SDGs
