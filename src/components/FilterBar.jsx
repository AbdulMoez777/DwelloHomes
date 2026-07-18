import React from "react";
import { MapPin, Home, CircleDollarSign } from "lucide-react";

function FilterBar() {
  return (
    <div className="max-w-5xl bg-[#E4D1C6] mx-auto rounded-2xl p-6 flex justify-between -mt-10 relative z-10 gap-6  shadow-sm">
      {/* Location Box  */}
      <div className="bg-[#FBF5F1] flex items-center justify-between px-4 py-2 rounded-lg w-full relative">
        <input
          type="text"
          placeholder="Location"
          className="bg-transparent outline-none w-full text-[#2B1B12] placeholder:text-[#2B1B12] font-bold placeholder:font-bold"
        />
        <MapPin size={18} className="text-[#2B1B12] shrink-0" />
      </div>

      {/* Type Select DropDown  */}
      <div className="bg-[#FBF5F1] flex items-center justify-between px-4 py-2 w-full rounded-lg relative">
        <select
          defaultValue=""
          className="outline-none bg-transparent w-full text-sm appearance-none font-bold text-sm cursor-pointer"
        >
          <option value="" disabled>
            Type
          </option>
          <option value="apartment">apartment</option>
          <option value="villa">villa</option>
          <option value="cottage">cottage</option>
          <option value="mansion">mansion</option>
        </select>
        <Home
          size={18}
          className="text-[#2B1B12] shrink-0 absolute right-4 pointer-events-none"
        />
      </div>

      {/* Price Box  */}
      <div className="bg-[#FEFBF5] flex items-center justify-between px-4 py-2 rounded-lg w-full relative">
        <select
          defaultValue=""
          className="bg-transparent outline-none w-full text-[#2B1B12] font-bold text-sm appearance-none cursor-pointer"
        >
          <option value="" disabled>
            Price Range
          </option>
          <option value="100-300">$100k - $300k</option>
          <option value="300-500">$300k - $500k</option>
          <option value="500-1m">$500k - $1M</option>
          <option value="1m+">$1M+</option>
        </select>
        <CircleDollarSign
          size={18}
          className="text-[#2B1B12] shrink-0 absolute right-4 pointer-events-none"
        />
      </div>

      {/* Submit Button */}
      <button className="bg-[#2B1B12] hover:bg-[#3e2c22] text-white px-10 py-2 rounded-lg font-bold whitespace-nowrap transition-colors">
        Sign up
      </button>
    </div>
  );
}

export default FilterBar;
