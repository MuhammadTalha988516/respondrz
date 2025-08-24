import banner from "../../assets/Banner.png"

const Banner = () => {
  return (
    <div className="relative w-full">
      {/* Banner Image */}
      <img src={banner} alt="Respondrz" className="w-full h-auto" />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center px-6">
        
        <p className="text-white text-3xl font-bold bg-black/50 px-6 py-3 rounded-lg">
          وَمَنْ أَحْيَاهَا فَكَأَنَّمَآ أَحْيَا ٱلنَّاسَ جَمِيعًۭا ۚ
        </p>

        <p className="text-white text-lg bg-black/40 px-4 py-2 rounded-md max-w-2xl">
          And whoever saves a life, it will be as if they saved all of humanity. (Al-Maidah 5:32)
        </p>

        <h1 className="text-white font-bold text-3xl max-w-3xl leading-snug">
          In an Emergency, Every Second Counts, <br /> Get help instantly with just one tap
        </h1>

        <p className="text-white font-sans text-xl max-w-3xl leading-relaxed">
          Respondrz connects you to the nearest ambulance and emergency responders in real time. 
          Whether it’s a heart attack, accident, or roadside emergency — get fast, life-saving help 
          without delays or confusion.
        </p>
      </div>
    </div>
  )
}

export default Banner
