import React from "react";
import groupImage from "../images/ExperimentsSection/Group 16.svg";
import button from "../images/HeroSection/Group 3.svg";
const ExperimentsSection = () => {
  const handleInstagramNav = () => {
    window.open("https://instagram.com/direct/new/", "_blank");
  };
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={groupImage}
              alt="group"
              className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-full mx-auto lg:mx-0"
            />
          </div>
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-left">
                <span className="block sm:hidden">
                  Experiments and clients projects.
                </span>
                <span className="hidden sm:block">
                  Experiments and
                  <br />
                  clients projects.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-left">
                Whether it's through incorporating film strategies into every
                creative process or simply incorporating film techniques into
                every situation. Our approach goes well beyond finding a topic
                and covering it.
              </p>
            </div>
            <div className="flex justify-start">
              <button type="button" className="bg-transparent border-none p-0">
                <img
                  onClick={handleInstagramNav}
                  src={button}
                  alt="btn"
                  className="w-auto h-12 sm:h-14 lg:h-16"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperimentsSection;
