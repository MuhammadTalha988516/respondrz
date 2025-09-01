import React from "react";
import { Typewriter } from "react-simple-typewriter";
import bgImage from "../../assets/Pban.webp"; // your background image

const BannerSection = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center mb-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <Typewriter
            words={["Our Solutions"]}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            delaySpeed={1500}
          />
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
          <Typewriter
            words={[
              "Respondrz is not just software, it is a lifeline. Our digital platform brings together all the players who matter in a crisis to create one synchronized response system."
            ]}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            delaySpeed={1000}
          />
        </p>
      </div>
    </section>
  );
};

export default BannerSection;
