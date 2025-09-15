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

      <section
        className="relative flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 md:pt-28"
        style={{
          height: window.innerWidth < 640 ? "75vh" : "100vh",
        }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundColor: "#1f1f1f",
              backgroundSize:
                window.innerWidth < 640
                  ? "200%"
                  : window.innerWidth < 1024
                  ? "150%"
                  : "contain",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-end lg:justify-end items-center px-4 sm:px-6 lg:px-8">
          <div
            className="text-center"
            style={{
              marginBottom: window.innerWidth < 640 ? "2rem" : "4rem",
              marginTop: "5px",
            }}
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-serif text-white mb-8 sm:mb-10 md:mb-12 tracking-wide leading-relaxed">
              {letters}
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button
                type="button"
                onClick={handleViewServices}
                className="border-2 border-white text-white px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                View Services
                <Camera className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewHeroSection;
