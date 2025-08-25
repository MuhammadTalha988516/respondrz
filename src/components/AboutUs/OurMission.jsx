import React from 'react'

const OurMission = () => {
  return (
    <div className="bg-[#F34434] grid grid-cols-1 md:grid-cols-2 w-screen h-auto md:h-[200px] text-white px-8 py-12">
      
      {/* Left side - Mission */}
      <div className="flex flex-col justify-center items-center text-center space-y-6 px-4 border-r md:border-white">
        <h1 className="text-3xl font-bold">Our Mission</h1>
        <p className="text-lg leading-relaxed">
          To create a world where immediate emergency response is accessible to everyone, everywhere, 
          regardless of time, location, or circumstance. We envision a future where emergency care is 
          democratized, and no one feels helpless in a critical moment.
        </p>
      </div>

      {/* Right side - Sponsor */}
      <div className="flex flex-col justify-center items-center text-center space-y-6 px-4">
        <h1 className="text-3xl font-bold">Our Vision</h1>
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Deleniti atque odio repellat, nesciunt fuga nostrum maiores magnam laborum numquam unde. 
          Eum modi qui iste accusantium similique maxime perspiciatis, libero expedita?
        </p>
      </div>

    </div>
  )
}

export default OurMission
