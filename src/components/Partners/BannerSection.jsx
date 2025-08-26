import React from "react";
import { Typewriter } from "react-simple-typewriter";
import bgImage from "../../assets/Pban.webp"; // your background image

const BannerSection = () => {
  return (
    <section
      className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <Typewriter
            words={["Who Can Be Our Partner?"]}
             // type once
            cursor
            cursorStyle="|"
            typeSpeed={80}
            
            delaySpeed={1500}
          />
        </h1>

        <p className="text-xl max-w-4xl md:text-2xl">
          <Typewriter
            words={[
              "At RespondrZ, we believe that saving lives should never be limited by boundaries or lack of coordination.",
              "Anyone who provides ambulance services or supports the noble cause of digitalizing emergency response can be our partner.",
              "Together, we can build a safer, faster, and more compassionate future for people in need."
            ]}
            loop={false} // type once
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </p>
      </div>
    </section>
  );
};

export default BannerSection;
