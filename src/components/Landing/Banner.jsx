import banner from "../../assets/Banner.png"

const Banner = () => {
  return (
    <div className="relative w-full">
      {/* Banner Image */}
      <img src={banner} alt="Respondrz" className="w-full h-[100vh]" />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center px-6">
        
        <p className="text-green-600 text-3xl font-bold bg-black/50 px-6 py-3 rounded-lg">
          وَمَنْ أَحْيَاهَا فَكَأَنَّمَآ أَحْيَا ٱلنَّاسَ جَمِيعًۭا ۚ
        </p>

        <p className="text-white text-lg bg-black/40 px-4 py-2 rounded-md max-w-2xl">
          And whoever saves a life, it will be as if they saved all of humanity.<br />
           (Al-Maidah 5:32)
        </p>

        <h1 className="text-white font-bold text-3xl mt-12 max-w-3xl leading-snug">
        Digitalizing Emergency Responses. Saving Lives. Ecosystem. Together.
        </h1>

        
      </div>
    </div>
  )
}

export default Banner
