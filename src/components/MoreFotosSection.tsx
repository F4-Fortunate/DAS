import img1 from "../images/PortfolioSVGs/IMG_0033.png";
import img2 from "../images/PortfolioSVGs/IMG_0037.jpg";
import img3 from "../images/PortfolioSVGs/IMG_0038.png";
import img4 from "../images/PortfolioSVGs/IMG_0039.png";
import img5 from "../images/PortfolioSVGs/IMG_0069.jpg";
import img6 from "../images/PortfolioSVGs/IMG_0070.png";
import img7 from "../images/PortfolioSVGs/IMG_0072.png";
import img8 from "../images/PortfolioSVGs/IMG_0080.png";
import img9 from "../images/PortfolioSVGs/IMG_0081.png";
import img10 from "../images/PortfolioSVGs/IMG_0082.png";
import img11 from "../images/PortfolioSVGs/IMG_0217.png";
import img12 from "../images/PortfolioSVGs/IMG_8784.png";
import img13 from "../images/PortfolioSVGs/IMG_8785.png";
import img14 from "../images/PortfolioSVGs/IMG_8786.png";
import img15 from "../images/PortfolioSVGs/IMG_8788.png";
import img16 from "../images/PortfolioSVGs/IMG_8789.png";
import img17 from "../images/PortfolioSVGs/IMG_8792.png";
import img18 from "../images/PortfolioSVGs/IMG_8808.png";
import img19 from "../images/PortfolioSVGs/IMG_8809.png";
import img20 from "../images/PortfolioSVGs/IMG_8888.png";
import img21 from "../images/PortfolioSVGs/IMG_8889.png";
import img22 from "../images/PortfolioSVGs/IMG_8954.png";
import img23 from "../images/PortfolioSVGs/IMG_8955.png";
import img24 from "../images/PortfolioSVGs/IMG_8956.png";
import img25 from "../images/PortfolioSVGs/IMG_9073.png";
import img26 from "../images/PortfolioSVGs/IMG_9251.png";
import img27 from "../images/PortfolioSVGs/IMG_9254.png";
import img28 from "../images/PortfolioSVGs/IMG_9258.png";
import img29 from "../images/PortfolioSVGs/IMG_9265.png";
import img30 from "../images/PortfolioSVGs/IMG_9266.png";
import img31 from "../images/PortfolioSVGs/IMG_9269.png";
import img32 from "../images/PortfolioSVGs/IMG_9271.png";
import img33 from "../images/PortfolioSVGs/IMG_9273.png";
import img34 from "../images/PortfolioSVGs/IMG_9274.png";
import img35 from "../images/PortfolioSVGs/IMG_9279.png";
import img36 from "../images/PortfolioSVGs/IMG_9288.png";
import img37 from "../images/PortfolioSVGs/IMG_9291.png";
import img38 from "../images/PortfolioSVGs/IMG_9434.png";
import img39 from "../images/PortfolioSVGs/IMG_9449.png";
import img40 from "../images/PortfolioSVGs/IMG_9452.png";
import img41 from "../images/PortfolioSVGs/IMG_9523.png";
import img42 from "../images/PortfolioSVGs/IMG_9525.png";
import img43 from "../images/PortfolioSVGs/IMG_9734.png";
import img44 from "../images/PortfolioSVGs/IMG_9735.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const OptimizedImage = ({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-out transform hover:scale-[1.02]">
        <img
          src={src}
          alt={alt}
          className="w-full h-96 object-cover transition-all duration-500 ease-out group-hover:brightness-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
      </div>
    </div>
  );
};

const PhotosSection = () => {
  const location = useLocation();

  // Force fresh page load behavior
  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0);

    // Force a small delay to ensure clean rendering like a page reload
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      // Force re-render of all child components
      document.body.style.display = "none";
      document.body.offsetHeight; // Trigger reflow
      document.body.style.display = "";
    }, 10);

    return () => clearTimeout(timer);
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
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
  ];

  return (
    <div className="py-10 sm:py-8 lg:py-14 px-4 sm:px-6 lg:px-20 bg-white">
      <Header />
      <div className="pt-10">
        <Link
          to="/"
          className="flex items-center py-3 gap-2 text-violet-950 hover:text-violet-900 font-medium transition-colors bg-white px-4  rounded-lg shadow-md border border-gray-200 inline-flex"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back Home
        </Link>
      </div>

      <section className=" pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-20 bg-white mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              More of our Works
            </h2>
            <p className="text-gray-600 text-sm sm:text-base pb-10">
              Our Featured Creations.
            </p>

            {/* Loading progress indicator
            {imagesLoaded < portfolioImages.length && (
              <div className="mt-4">
                <div className="text-sm text-gray-500 mb-2">
                  Loading images... ({imagesLoaded}/{portfolioImages.length})
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 max-w-md mx-auto">
                  <div
                    className="bg-violet-800 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${
                        (imagesLoaded / portfolioImages.length) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioImages.map((image, index) => (
                <OptimizedImage
                  key={index}
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PhotosSection;
