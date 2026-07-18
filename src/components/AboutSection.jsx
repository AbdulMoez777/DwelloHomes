import React from "react";

function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 flex flex-col lg:flex-row items-center gap-16">
      {/* left Image  */}
      <div className="w-full lg:w-1/2">
        <img src="/images/BelowHeroSection.png" alt="BelowHeroSectionImage"
        className="w-full rounded-[2rem] shadow-sm object-cover" />
      </div>

      {/* Right Text  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h3 className="text-4xl md:text-5xl font-extrabold text-[#2B1B12] tracking-tight leading-tight">We Help You To Find <br /> Your Dream Home</h3>
        <p className="text-[#4F3527] font-medium leading-relaxed max-w-lg">
          From cozy cottages to luxurious estates, our dedicated team guides you
          through every step of the journey, ensuring your dream home becomes a
          reality
        </p>
        {/* The Statistics Row */}
        <div className="flex gap-12 mt-6">
          
          <div className="flex flex-col">
            <h3 className="text-4xl font-extrabold text-[#2B1B12]">8K+</h3>
            <p className="text-sm text-gray-600 font-semibold mt-2">Houses Available</p>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-4xl font-extrabold text-[#2B1B12]">6K+</h3>
            <p className="text-sm text-gray-600 font-semibold mt-2">Houses Sold</p>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-4xl font-extrabold text-[#2B1B12]">2K+</h3>
            <p className="text-sm text-gray-600 font-semibold mt-2">Trusted Agents</p>
          </div>

        </div>
      </div>

      
    </section>
  );
}

export default AboutSection;
