import React from 'react'

const About = () => {
  return (
    <>
      <div className="grid grid-cols-2 bg-yellow-500 w-screen h-[300px]">
        {/* Left column */}
        <div className="flex flex-col justify-center items-start px-12">
          <p className="text-black font-black font-sans text-5xl">
            About Respondrz
          </p>
          <h3 className="mt-6 text-4xl font-sans text-black">
            Our Mission
          </h3>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center items-start px-8">
          <p className="text-black font-medium text-lg leading-relaxed">
            Respondrz is a platform designed to help teams collaborate,
            respond faster, and stay organized. Our mission is to make
            communication seamless and effective.
          </p>
          <button className='mt-6 px-8 py-4 bg-red-500  rounded-md cursor-pointer hover:bg-white hover:text-black'>Explore More</button>
        </div>
      </div>
    </>
  )
}

export default About
