import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import img1 from "../images/PortfolioSection/Rectangle 17.svg";
import img2 from "../images/PortfolioSection/Rectangle 18.svg";
import img3 from "../images/PortfolioSection/Rectangle 19.svg";
import img4 from "../images/PortfolioSection/Rectangle 20.svg";
import img5 from "../images/PortfolioSection/Rectangle 21.svg";
import img6 from "../images/PortfolioSection/Rectangle 22.svg";
import img7 from "../images/PortfolioSection/Rectangle 23.svg";
import img8 from "../images/PortfolioSection/Rectangle 24.svg";
import img9 from "../images/PortfolioSection/Rectangle 25.svg";
import Component from "../images/Vector 1.svg";
// import img10 from "../images/PortfolioSVGs/IMG_9265.svg";
// import img11 from "../images/PortfolioSVGs/IMG_0072.svg";
// import img12 from "../images/PortfolioSVGs/IMG_8784.svg";
// import img13 from "../images/PortfolioSVGs/IMG_8888.svg";
// import img14 from "../images/PortfolioSVGs/IMG_9525.svg";
// import img15 from "../images/PortfolioSVGs/IMG_9258.svg";

const PortfolioSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top when returning to index page
  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const portfolioImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    // img10,
    // img11,
    // img12,
    // img13,
    // img14,
    // img15,
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center sm:text-left mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Awesome Works
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Our Featured Creations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group portfolio_containter flex justify-center"
            >
              <img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="portfolio_Image h-96 w-full sm:w-80 lg:w-auto object-cover lg:object-contain transition-transform duration-500 ease-out"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12 sm:mt-16 lg:mt-24">
        <button
          type="button"
          onClick={() => navigate("/photos")}
          className="vmBtn bg-violet-900 flex items-center justify-center align-middle gap-3 sm:gap-5 text-white hover:text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold transition-colors w-64 sm:w-80 h-16 sm:h-20"
        >
          View More
          <img
            src={Component}
            alt="Component"
            className="gitBtnIcon w-4 sm:w-5 h-4 sm:h-5 bg-white p-1 rounded-full"
          />
        </button>
      </div>
    </section>
  );
};

export default PortfolioSection;
