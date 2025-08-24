import React from "react";

const Partners = () => {
  return (
    <div className="w-full bg-[#213066] py-10">
      <h2 className="text-2xl font-bold text-center text-white mb-8">
        Our Partners
      </h2>

      <div className="flex gap-6 flex-wrap  px-0">
        <div className="w-[220px] h-[320px] text-white 
          flex items-center justify-center text-lg font-semibold 
          rounded-2xl shadow-md shrink-0
          hover:shadow-xl hover:-translate-y-1 
          transition-transform duration-300">
          Government
        </div>

        <div className="w-[220px] h-[320px] text-white 
          flex items-center justify-center text-lg font-semibold 
          rounded-2xl shadow-md shrink-0
          hover:shadow-xl hover:-translate-y-1 
          transition-transform duration-300">
          NGOs
        </div>

        <div className="w-[220px] h-[320px] text-white 
          flex items-center justify-center text-lg font-semibold 
          rounded-2xl shadow-md shrink-0
          hover:shadow-xl hover:-translate-y-1 
          transition-transform duration-300">
          Corporate Sector
        </div>

        <div className="w-[220px] h-[320px] text-white 
          flex items-center justify-center text-lg font-semibold 
          rounded-2xl shadow-md shrink-0
          hover:shadow-xl hover:-translate-y-1 
          transition-transform duration-300">
          Private Hospitals
        </div>

        <div className="w-[220px] h-[320px] text-white 
          flex items-center justify-center text-lg font-semibold 
          rounded-2xl shadow-md shrink-0
          hover:shadow-xl hover:-translate-y-1 
          transition-transform duration-300">
          Public Sector
        </div>

        <div className="w-[220px] h-[320px] text-white 
          flex items-center justify-center text-lg font-semibold 
          rounded-2xl shadow-md shrink-0
          hover:shadow-xl hover:-translate-y-1 
          transition-transform duration-300">
          Insurance Company
        </div>
      </div>
    </div>
  );
};

export default Partners;
