import React from "react";

const ImBan = () => {
  return (
    <section
      className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6520084/pexels-photo-6520084.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl text-green-600 font-bold mb-6">
          RespondrZ: Saving Lives, Faster Than Ever
          <br />
        </h1>

        <p className="text-xl mt-10 text-white md:text-2xl">
          Every second counts in an emergency. RespondrZ ensures help is always
          just a tap away.
        </p>
      </div>
    </section>
  );
};

export default ImBan;
