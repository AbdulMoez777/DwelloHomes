import React from "react";

function HeroSection() {
  return (
    <section className="flex px-20 py-6 justify-between items-center max-w-6.7xl mx-auto ">
      {/* Left Section  */}
      <div className="flex flex-col gap-8 w-1/2">
        <h1 className="text-6xl lg:text-7xl font-extrabold text-[#2B1B12] leading-tighter ">
          Find Your <br />
          Dream Home
        </h1>
        <p className="text-[#2B1B12] font-medium max-w-sm">
          Explore our curated selection of exquisite properties meticulously
          tailored to your unique dream home vision
        </p>
        <button className="bg-[#2B1B12] hover:bg-[#3e2c22] text-white px-11 py-3 rounded-lg w-fit font-semibold transition-colors">
          Sign up
        </button>
      </div>

      {/* Right Image Section  */}
      <div className="w-1/2 flex justify-end">
        <img
          src="/images/hero image 1.png"
          alt="Hero Image "
          className="w-full max-w-xl object-contain -mt-24"
        />
      </div>
    </section>
  );
}

export default HeroSection;
