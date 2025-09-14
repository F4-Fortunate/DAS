import heroImage from "../images/HeroSection/hero.png";
import { useNavigate } from "react-router-dom";
const NewHeroSection = () => {
  const navigate = useNavigate();
  const handleViewServices = () => {
    navigate("/pricing");
  };

  const handleContactUs = () => {
    const phoneNumber = "+2349027104215";
    const message =
      "Hi there!!! Mr Dotun Ajayi. \nI would like to learn more about your services.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-4 2xl:pb-0">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
          Your Moments, Our Focus
          <br />
          <span className="text-gray-200">Captured With Care</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Professional photography that tells your story with premium artistry
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 mt-5">
          <button
            type="button"
            onClick={handleViewServices}
            className="bg-white text-black w-72 px-8 py-5 sm:px-10 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-1000 hover:scale-105 shadow-lg"
          >
            View Services
          </button>

          {/* <button
            type="button"
            onClick={handleContactUs}
            className="border-2 border-white text-white px-8 py-3 sm:px-10 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-1000 hover:scale-105"
          >
            Contact Us
          </button> */}
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce pb-3">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
