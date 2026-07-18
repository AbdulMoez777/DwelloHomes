import React from "react";
import { Bed, MapPin, Maximize } from "lucide-react";

function PopularHouses() {
  return (
    <section className="max-w-6xl px-6 py-20 mx-auto">
      {/* Text  */}
      <div className="mb-12">
        <h3 className="text-[#2B1B12] font-extrabold text-4xl text-center">
          Our Popular Residences
        </h3>
      </div>

      {/* Grid  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Card 1: San Francisco */}
        <div className="bg-[#DDC7BB] rounded-3xl overflow-hidden shadow-sm flex flex-col transition-transform hover:-translate-y-2">
          <img
            src="/images/PopularImage1.png"
            alt="San Francisco Residence"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#2B1B12]">
              <MapPin size={18} />
              <h4 className="text-lg font-bold">San Francisco, California</h4>
            </div>
            <div className="flex items-center gap-6 text-[#2B1B12] font-semibold text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Bed size={18} />
                <span>4 Rooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize size={18} />
                <span>3,500 sq ft</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <button className="bg-[#2B1B12] hover:bg-[#3e2c22] text-white px-6 py-2 rounded-lg font-bold text-sm transition-colors">
                Sign up
              </button>
              <span className="font-extrabold text-[#2B1B12] text-lg">
                $2,500,000
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Beverly Hills */}
        <div className="bg-[#DDC7BB] rounded-3xl overflow-hidden shadow-sm flex flex-col transition-transform hover:-translate-y-2">
          <img
            src="/images/PopularImage2.png"
            alt="Beverly Hills Residence"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#2B1B12]">
              <MapPin size={18} />
              <h4 className="text-lg font-bold">Beverly Hills, California</h4>
            </div>
            <div className="flex items-center gap-6 text-[#2B1B12] font-semibold text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Bed size={18} />
                <span>3 Rooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize size={18} />
                <span>1,500 sq ft</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <button className="bg-[#2B1B12] hover:bg-[#3e2c22] text-white px-6 py-2 rounded-lg font-bold text-sm transition-colors">
                Sign up
              </button>
              <span className="font-extrabold text-[#2B1B12] text-lg">
                $850,000
              </span>
            </div>
          </div>
        </div>

        {/* Card 3: Palo Alto */}
        <div className="bg-[#DDC7BB] rounded-3xl overflow-hidden shadow-sm flex flex-col transition-transform hover:-translate-y-2">
          <img
            src="/images/PopularImage3.png"
            alt="Palo Alto Residence"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#2B1B12]">
              <MapPin size={18} />
              <h4 className="text-lg font-bold">Palo Alto, California</h4>
            </div>
            <div className="flex items-center gap-6 text-[#2B1B12] font-semibold text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Bed size={18} />
                <span>6 Rooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize size={18} />
                <span>4,000 sq ft</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <button className="bg-[#2B1B12] hover:bg-[#3e2c22] text-white px-6 py-2 rounded-lg font-bold text-sm transition-colors">
                Sign up
              </button>
              <span className="font-extrabold text-[#2B1B12] text-lg">
                $3,700,000
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularHouses;
