import React from "react";
import amb from "../../assets/amb.webp";

const ImBan = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${amb})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl text-green-500 font-extrabold leading-tight drop-shadow-lg">
          RespondrZ: Saving Lives, Faster Than Ever
        </h1>

        <p className="text-lg md:text-2xl mt-8 text-white font-light drop-shadow-md">
          Every second counts in an emergency. RespondrZ ensures help is always
          just a tap away.
        </p>
      </div>
    </section>
  );
};

export default ImBan;
