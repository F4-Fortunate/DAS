import button from "../images/HeroSection/Group 3.svg";
import imgOne from "../images/MomentsSection/Mask group (3).svg";
import img2 from "../images/MomentsSection/Mask group (4).svg";
import img3 from "../images/MomentsSection/Mask group (5).svg";
const MomentsSection = () => {
    const handleWhatsAppNav = () => {
      const phoneNumber = "+2349027104215";
      const message = "Hi there!!! Mr Dotun Ajayi. \nI would like to learn more about your services.";
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    };
  return (
    <section className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-20 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight text-left">
              <span className="block sm:hidden">
                Celebrating Your Most Important Moments
              </span>
              <span className="hidden sm:block">
                Celebrating Your Most
                <br />
                Important Moments
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-left">
              We're here to celebrate life's most important moments with you.
              Whether it's the beginning of forever or the celebration of a
              lifetime, we want to be there to capture every single moment.
            </p>
            <div className="flex justify-start">
              <button
                type="button"
                onClick={handleWhatsAppNav}
                className="bg-black text-white w-72 h-20 px-10 sm:px-10 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile/Tablet: Grid layout, Desktop: Original stepped design */}
          <div className="block lg:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <img
                  src={imgOne}
                  alt="Portrait 1"
                  className="w-full h-auto max-h-80 object-contain rounded-lg"
                />
                <div className="text-xl sm:text-2xl font-bold text-gray-900 text-left">
                  01.
                </div>
              </div>

              <div className="space-y-4">
                <img
                  src={img2}
                  alt="Portrait 2"
                  className="w-full h-auto max-h-80 object-contain rounded-lg"
                />
                <div className="text-xl sm:text-2xl font-bold text-gray-900 text-left">
                  02.
                </div>
              </div>

              <div className="space-y-4 sm:col-span-2 sm:max-w-sm sm:mx-auto">
                <img
                  src={img3}
                  alt="Portrait 3"
                  className="w-full h-auto max-h-80 object-contain rounded-lg"
                />
                <div className="text-xl sm:text-2xl font-bold text-gray-900 text-left">
                  03.
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Original stepped design */}
          <div className="hidden lg:block">
            <div className="relative img-containter mt-10 justify-start flex gap-x-28">
              <div className="mt-10">
                <img
                  src={imgOne}
                  alt="Portrait 1"
                  className="w-auto h-96 object-cover rounded-lg msImg"
                />
                <div className="mb-2">
                  <div className="text-2xl font-bold text-gray-900">01.</div>
                </div>
              </div>

              <div className="msImg2Con">
                <img
                  src={img2}
                  alt="Portrait 2"
                  className="w-auto h-96 object-cover rounded-lg msImg"
                />
                <div className="mb-2">
                  <div className="text-2xl font-bold text-gray-900">02.</div>
                </div>
              </div>

              <div className="msImg3Con">
                <img
                  src={img3}
                  alt="Portrait 3"
                  className="w-auto h-96 object-cover rounded-lg msImg"
                />
                <div className="mb-2">
                  <div className="text-2xl font-bold text-gray-900">03.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;
