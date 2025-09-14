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
          className="cta bg-black text-white flex flex-col p-6 sm:p-8 lg:p-12 rounded-2xl"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight text-left">
            Get Started With Us
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            Start your journey today and let us bring your vision to life, with
            expert precision and creativity every step of the way.
          </p>
          <button
            type="button"
            onClick={handleWhatsAppNav}
            className="flex items-center justify-evenly border-2 border-black w-64 bg-slate-50 text-black px-8 py-3 sm:px-10 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-slate-200 hover:text-black transition-all duration-1000 hover:scale-105"
          >
            Get In Touch
            <img
              src={Component}
              alt="Component"
              className="gitBtnIcon w-4 h-4 bg-black p-1 rounded-full"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
