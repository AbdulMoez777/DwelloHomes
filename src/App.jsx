import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FilterBar from "./components/FilterBar"

function App() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#FEFBF5] pb-16 ">
        <Navbar />
        <HeroSection />
      </div>
      <FilterBar/>
    </div>
  );
}

export default App;
