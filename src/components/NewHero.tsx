import heroImage from "../images/HeroSection/hero.png";
import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";
import heroMobile from "../images/HeroSection/heromobile.png";
const NewHeroSection = () => {
  const navigate = useNavigate();
  const handleViewServices = () => {
    navigate("/pricing");
  };

   const text = "Capturing Life's Beautiful Moments";
   const letters = text.split("").map((letter, index) => (
     <span
       key={index}
       className="inline-block animate-letter"
       style={{
         animationDelay: `${index * 0.08}s`,
         animationDuration: "5s",
         animationIterationCount: "infinite",
       }}
     >
       {letter === " " ? "\u00A0" : letter}
     </span>
   ));
  // const handleContactUs = () => {
  //   const phoneNumber = "+2349027104215";
  //   const message =
  //     "Hi there!!! Mr Dotun Ajayi. \nI would like to learn more about your services.";
  //   window.open(
  //     `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
  //     "_blank"
  //   );
  // };

  return (
    <>
      <style>{`
        @keyframes letterSlide {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          10%,
          80% {
            opacity: 1;
            transform: translateX(0);
          }
          90%,
          100% {
            opacity: 0;
            transform: translateX(20px);
          }
        }
        .animate-letter {
          animation: letterSlide 5s infinite;
        }
      `}</style>

      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 md:pt-28">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundColor: "#1a1a1a",
            }}
          />

          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex-1 flex flex-col justify-end items-center px-4 sm:px-6 lg:px-8">
            <div className="mb-7 sm:mb-12 text-center">
              <h2 className="text-sm sm:text-lg lg:text-2xl font-serif text-white mb-2 sm:mb-2 tracking-wide">
                {letters}
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <button
                  type="button"
                  onClick={handleViewServices}
                  className="border-2 border-white text-white px-8 py-3 sm:px-10 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  View Services
                  <Camera className="w-5 h-5 animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewHeroSection;
