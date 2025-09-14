//import cameraImage from "../images/HeroSection/camera-equipment.jpg";
//import dotunImage from "../images/HeroSection/unsplash_SZtLK_W7vKo.svg";
import imgOne from "../images/MomentsSection/Mask group (3).svg";
import img2 from "../images/HeroSection/heronew1.png";
import img3 from "../images/HeroSection/hero new 2.png";
import img4 from "../images/HeroSection/hero final.png";
const HeroSection = () => {
  const handleInstagramNav = () => {
    window.open("https://instagram.com/direct/new/", "_blank");
  };
  return (
    <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-20 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight text-left">
              <span className="block sm:hidden">
                Capturing Life's
                <br />
                Beautiful Moments
              </span>
              <span className="hidden sm:block lg:hidden">
                Capturing Life's Beautiful
                <br />
                Moments
              </span>
              <span className="hidden lg:block">
                Capturing
                <br />
                Life's
                <br />
                Beautiful
                <br />
                Moments
              </span>
            </h1>
            <p className="text-base sm:text-lg text-black max-w-lg text-left">
              Every moment has a story to tell, and we're here to turn fleeting
              moments into lasting stories
            </p>
            <div className="flex justify-start">
              <button
                type="button"
                onClick={handleInstagramNav}
                className="bg-black text-white w-72 h-20 px-10 sm:px-10 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-900 transition-all duration-1000 hover:scale-105 shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 overflow-hidden">
              <img
                src={imgOne}
                alt="Portrait 1"
                className="w-full h-32 sm:h-48 lg:h-60 object-cover rounded-lg"
              />
              <img
                src={img4}
                alt="Portrait 2"
                className="w-full h-32 sm:h-48 lg:h-60 object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 overflow-hidden">
              <img
                src={img3}
                alt="Portrait 1"
                className="w-full h-32 sm:h-48 lg:h-60 object-cover rounded-lg"
              />
              <img
                src={img2}
                alt="Portrait 2"
                className="w-full h-32 sm:h-48 lg:h-60 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
