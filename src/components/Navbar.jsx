import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6">
      
      {/* BOX 1: The Logo */}
      <div>
        <img src="/images/DwelloLogo.png" alt="Logo" className="h-8" />
      </div>

      {/* BOX 2: The Links */}
      <div className="flex gap-6 font-bold">
        <a href="#home">Home</a>
        <a href="#service">Service</a>
        <a href="#agents">Agents</a>
        <a href="#contact">Contact</a>
      </div>

      {/* BOX 3: The Buttons */}
      <div className="flex gap-6 items-center font-bold">
        <button>Search</button>
        <button>Profile</button>
        
        <button className="bg-[#2A1D16] text-white px-4 py-2 rounded-lg">
          Sign up
        </button>
      </div>
      
    </nav>
  )
}

export default Navbar