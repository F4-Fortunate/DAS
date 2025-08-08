import React from "react";
import button from "../images/HeroSection/Group 3.svg";
import flowerImg from "../images/ProcessSection/Group 4.jpg";

const ProcessSection = () => {
  const handleWhatsAppNav = () => {
    const phoneNumber = "+2349027104215";
    const message =
      "Hi there!!! Mr Dotun Ajayi. \nI would like to learn more about your services.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={flowerImg}
              alt="img"
              className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-full mx-auto lg:mx-0 grayscale"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="text-xs sm:text-sm text-indigo-900 font-medium text-left">
                GET TO KNOW US
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-left">
                <span className="block sm:hidden">Why we make it happen</span>
                <span className="hidden sm:block">
                  Why we make it
                  <br />
                  happen
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-left">
                Your ceremony & reception venues, your vision, your dress, your
                colours and anything else you would like.
              </p>
            </div>
            <div className="flex justify-start">
              <button type="button" className="bg-transparent border-none p-0">
                <img
                  onClick={handleWhatsAppNav}
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

export default ProcessSection;
