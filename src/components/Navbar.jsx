import React from "react";
import { Search } from "lucide-react";
import { User } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex items-center px-20 py-6">
      {/* BOX 1: The Logo */}
      <div className="flex-1">
        <img src="/images/DwelloLogo.png" alt="Logo" className="h-8" />
      </div>

      {/* BOX 2: The Links */}
      <div className="flex gap-8 justify-center font-bold ">
        <a href="#home" className="text-[#2A1D16] hover:text-[#3e2c22]">
          Home
        </a>
        <a href="#service" className="text-[#2A1D16] hover:text-[#3e2c22]">
          Service
        </a>
        <a href="#agents" className="text-[#2A1D16] hover:text-[#3e2c22]">
          Agents
        </a>
        <a href="#contact" className="text-[#2A1D16] hover:text-[#3e2c22]">
          Contact
        </a>
      </div>

      {/* BOX 3: The Buttons */}
      <div className="flex-1 flex gap-6 items-center justify-end font-bold">
        <button className="cursor-pointer">
          <Search size={20} className="text-[#2A1D16] hover:text-[#3e2c22]" />
        </button>
        <button className="cursor-pointer">
          <User size={20} className="text-[#2A1D16] hover:text-[#3e2c22]" />
        </button>

        <button className="bg-[#2A1D16] hover:bg-[#3e2c22] text-white px-4 py-2 rounded-lg cursor-pointer">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
