import React from "react"

const WhyUs = ()=>{
    return(
        <section className="relative mt-10 w-full h-[80vh] bg-[#F34434] flex items-center justify-center">
        <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl mt-10 md:text-6xl font-bold mb-6">
        Why Partner With RespondrZ
        </h1>
        <p className="text-xl max-w-4xl text-center">
           Every Second counts during an emergency. Yet, thousands of lives are lost every year because ambulances are underutilized, fragmented, or delayed by a lack of coordination. <br /> <br />
           RespondrZ bridges this gap by digitally connecting governments, NGOs, corporations, insurance providers, and private hospitals into one reliable emergency response ecosystem. By partnering with us, you are not only saving lives, but you are shaping a future where healthcare is more accessible, transparent, and efficient.
        </p>
        </div>
        </section>
    );
};


export default WhyUs;