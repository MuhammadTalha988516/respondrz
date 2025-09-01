import banner from "../../assets/Banner.webp";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, always: false }); // animation duration + trigger always
  }, []);

  return (
    <div className="relative w-full">
      {/* Banner Image */}
      <img
        src={banner}
        alt="Respondrz"
        className="w-full h-[100vh] object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center px-4 sm:px-6">
        {/* Quranic Ayah */}
        <p
          className="text-green-600 text-lg sm:text-2xl md:text-3xl font-bold bg-black/50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          وَمَنْ أَحْيَاهَا فَكَأَنَّمَآ أَحْيَا ٱلنَّاسَ جَمِيعًۭا ۚ
        </p>

        {/* Translation */}
        <p
          className="text-white text-sm sm:text-base md:text-lg bg-black/40 px-3 sm:px-4 py-2 rounded-md max-w-sm sm:max-w-lg md:max-w-2xl shadow-md"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          And whoever saves a life, it will be as if they saved all of humanity.
          <br />
          (Al-Maidah 5:32)
        </p>

        {/* Main Heading */}
        <h1
          className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-8 sm:mt-12 max-w-sm sm:max-w-xl md:max-w-3xl leading-snug"
          data-aos="zoom-in-up"
          data-aos-delay="1000"
        >
          Digitalizing Emergency Responses.
          <br />
          Saving Lives. Ecosystem. Together.
        </h1>
      </div>
    </div>
  );
};

export default Banner;
