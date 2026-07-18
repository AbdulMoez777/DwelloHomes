import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FilterBar from "./components/FilterBar"
import AboutSection from "./components/AboutSection";
import ChooseUs from "./components/ChooseUs";
import PopularHouses from "./components/PopularHouses";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <div id="home" className="bg-[#FEFBF5] pb-16 ">
        <Navbar />
        <HeroSection />
      </div>
      <FilterBar/>
      <AboutSection/>
      <ChooseUs/>
      <PopularHouses/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
