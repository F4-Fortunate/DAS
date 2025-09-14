import React from "react";
import button from "../images/HeroSection/Group 3.svg";
import flowerImg from "../images/ProcessSection/Group 4.jpg";
import {handleWhatsAppNav} from "../utils/util"
const ProcessSection = () => {

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={flowerImg}
              alt="img"
              className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-full mx-auto lg:mx-0 grayscale rounded-xl"
            />
          </div>
          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-7">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 text-left">
                <span className="block sm:hidden">How we make it happen</span>
                <span className="hidden sm:block">
                  How we make it
                  <br />
                  happen...
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-left">
                From the quiet in–between moments to the big celebrations, we
                focus on telling your story as it naturally unfolds...
                <br />
                <br />
                Our approach blends artistry with authenticity, so every photo
                feels alive with real emotion, not just posed perfection.
              </p>
            </div>

            <div className="flex justify-start mt-8">
              {/* <button type="button" className="bg-transparent border-none p-0">
                <img
                  onClick={handleWhatsAppNav}
                  src={button}
                  alt="btn"
                  className="w-auto h-12 sm:h-14 lg:h-16"
                />
              </button> */}

              <button
                type="button"
                onClick={handleWhatsAppNav}
                className="bg-black text-white w-72 h-20 px-10 sm:px-10 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-900 transition-all duration-1000 hover:scale-105 shadow-lg"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
