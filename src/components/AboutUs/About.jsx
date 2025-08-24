import React from 'react';

const About = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* Hero Section */}
      <div className="w-full h-[300px] bg-gray-400 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-3xl md:text-4xl font-sans font-bold text-black mb-4">
          About <span className='text-[#F34434]'>RespondrZ</span>
        </h1>
        <p className="text-black max-w-3xl font-sans leading-relaxed">
          At Respondrz, we understand that emergencies don’t wait and neither should you. 
          Every second during a health crisis can be the difference between life and death. 
          That’s why we built Respondrz: a mobile-first emergency response platform that connects 
          people in urgent medical situations with the fastest available help around them.
        </p>
      </div>

      
    </div>
  );
};

export default About;
