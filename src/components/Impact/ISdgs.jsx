import React from 'react'
import SDG from '../../assets/SDG.png'
import SDG1 from '../../assets/sdg1.png'
import SDG3 from '../../assets/sdg3.png'
import SDG5 from '../../assets/sdg5.png'
import SDG8 from '../../assets/sdg8.png'
import SDG9 from '../../assets/sdg9.png'
import SDG11 from '../../assets/sdg11.png'
import SDG17 from '../../assets/sdg17.png'
import { motion } from 'framer-motion'

const ISDGs = () => {
  // animation variants
  const textVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const iconVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    })
  }

  const icons = [SDG3, SDG5, SDG8, SDG9, SDG11, SDG17]

  return (
    <div className="w-full h-auto flex flex-col bg-gray-800 items-center space-y-10 py-12 px-4">
      
      {/* Heading */}
      <motion.h1
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ always: true }}
        className="font-bold text-white text-5xl text-center"
      >
        Supporting the SDGs and Our Planet
      </motion.h1>

      {/* Intro Text */}
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ always: true }}
        className="text-center max-w-4xl space-y-4"
      >
        <p className="text-white text-lg">
          Respondrz does not just save lives, it protects the planet. By dispatching the nearest ambulance instead of one traveling long distances, we reduce unnecessary fuel use and carbon emissions.  
          This directly supports multiple UN SDGs, including:
        </p>
      </motion.div>

      {/* SDG Banner Image */}
      <motion.img
        src={SDG}
        alt="SDG Banner"
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ always: true }}
        className="max-w-[400px] w-full"
      />

      {/* SDG Icons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 mx-auto gap-6 justify-items-center w-full max-w-6xl">
        {icons.map((icon, i) => (
          <motion.img
            key={i}
            src={icon}
            alt={`SDG ${i + 1}`}
            custom={i}
            variants={iconVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ always: true }}
            className="w-[120px] sm:w-[160px] md:w-[200px] h-auto object-contain transition transform hover:scale-110 duration-300"
          />
        ))}
      </div>

      {/* Closing Text */}
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ always: true }}
        className="text-center max-w-2xl space-y-4"
      >
        <p className="text-white text-lg">
          When technology, compassion, and sustainability come together, progress accelerates for people and for the planet.
        </p>
      </motion.div>
    </div>
  )
}

export default ISDGs
