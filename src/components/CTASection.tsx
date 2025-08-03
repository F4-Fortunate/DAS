import React, { useEffect, useRef } from "react";
import Component from "../images/Vector 1.svg";

const CTASection = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleWhatsAppNav = () => {
    const phoneNumber = "+2349027104215";
    const message =
      "Hi there!!! Mr Dotun Ajayi. \nI would like to learn more about your services.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // useEffect(() => {
  //   const gitImg = ctaRef.current;
  //   const gitBtn = btnRef.current;

  //   if (gitBtn && gitImg) {
  //     const handleMouseOver = () => {
  //       gitImg.classList.add("gitImgHover");
  //     };

  //     const handleMouseOut = () => {
  //       gitImg.classList.remove("gitImgHover");
  //     };

  //     gitBtn.addEventListener("mouseover", handleMouseOver);
  //     gitBtn.addEventListener("mouseout", handleMouseOut);

  //     return () => {
  //       gitBtn.removeEventListener("mouseover", handleMouseOver);
  //       gitBtn.removeEventListener("mouseout", handleMouseOut);
  //     };
  //   }
  // }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ctaRef}
          className="cta text-white flex flex-col p-6 sm:p-8 lg:p-12 rounded-2xl"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
            Get Started With Us
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            Start your journey today and let us bring your vision to life, with
            expert precision and creativity every step of the way.
          </p>
          <button
            type="button"
            // ref={btnRef}
            onClick={handleWhatsAppNav}
            className="gitBtn bg-white flex items-center align-middle gap-3 text-violet-800 hover:bg-gray-100 px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold transition-colors max-w-44 sm:max-w-48 h-12 sm:h-14 mx-auto lg:mx-0"
          >
            Get In Touch
            <img
              src={Component}
              alt="Component"
              className="gitBtnIcon w-4 h-4 bg-violet-800 p-1 rounded-full"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
