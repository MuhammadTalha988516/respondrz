import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Ambulance from "../../assets/Ambulance.jpg"; // your background image

const ImBan = () => {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Ambulance})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center  px-4">
        <h1 className="text-4xl md:text-6xl text-[#F34434] font-bold mb-6">
            RespondrZ: Saving Lives, Faster Than Ever
        <br />
        </h1>

        <p className="text-xl mt-10 text-white md:text-2xl">
        Every second counts in an emergency. RespondrZ ensures help is always just a tap away.
        </p>
      </div>
    </section>
  );
};

export default ImBan;
