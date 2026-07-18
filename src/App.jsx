import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FilterBar from "./components/FilterBar"
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <div id="home" className="bg-[#FEFBF5] pb-16 ">
        <Navbar />
        <HeroSection />
      </div>
      <FilterBar/>
      <AboutSection/>
    </div>
  );
}

export default App;
