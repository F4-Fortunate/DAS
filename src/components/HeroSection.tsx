import React from "react";
import cameraImage from "../images/HeroSection/unsplash_6Io0psUdasY.svg";
import dotunImage from "../images/HeroSection/unsplash_SZtLK_W7vKo.svg";
import weddingImage from "../images/HeroSection/unsplash_8nXKXYdO-Wk.svg";
import button from "../images/HeroSection/Group 3.svg";
const HeroSection = () => {
  const handleInstagramNav = () => {
    window.open("https://instagram.com/direct/new/", "_blank");
  };
  return (
    <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight text-left">
              <span className="block sm:hidden">
                Where creative
                <br />
                process happens
              </span>
              <span className="hidden sm:block lg:hidden">
                Where creative process
                <br />
                happens
              </span>
              <span className="hidden lg:block">
                Where
                <br />
                creative
                <br />
                process
                <br />
                happens
              </span>
            </h1>
            <p className="text-base sm:text-lg text-black max-w-lg text-left">
              Every moment has a story to tell, and we’re here to capture it
              with creativity and passion.
            </p>
            <div className="flex justify-start">
              <button
                type="button"
                onClick={handleInstagramNav}
                className="bg-transparent border-none p-0 overflow-hidden"
              >
                <img
                  src={button}
                  alt="btn"
                  className="w-auto h-12 sm:h-14 lg:h-16 hover:scale-105 transition-transform duration-300"
                />
              </button>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={cameraImage}
                alt="Camera equipment"
                className="w-full h-48 sm:h-56 lg:h-64 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 overflow-hidden">
              <img
                src={dotunImage}
                alt="Portrait 1"
                className="w-full h-32 sm:h-48 lg:h-64 object-cover rounded-lg"
              />
              <img
                src={weddingImage}
                alt="Portrait 2"
                className="w-full h-32 sm:h-48 lg:h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
