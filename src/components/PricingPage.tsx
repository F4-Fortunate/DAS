import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const PricingPage = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("prewedding");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.style.display = "none";
      document.body.offsetHeight;
      document.body.style.display = "";
    }, 10);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleWhatsAppNav = (service: string, packageType: string) => {
    const phoneNumber = "+2349027104215";
    const message = `Hi there!!! Mr Dotun Ajayi. \nI would like to make an enquiry about your: ${service} shoot... ${packageType}.`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const selectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    setIsMobileSidebarOpen(false);
  };

  const categories = [
    { id: "prewedding", name: "Pre-Wedding Photography" },
    { id: "weddings", name: "Wedding Photography" },
    { id: "introductions", name: "Introduction Photography" },
    { id: "maternity", name: "Maternity Photography" },
    { id: "birthday", name: "Birthday Photography" },
    { id: "family", name: "Family Photography" },
    { id: "infant", name: "Infant Photography" },
  ];

  const pricingData = {
    prewedding: [
      {
        title: "2 Outfit Package",
        price: "₦120,000",
        features: [
          "6 Professionally edited images",
          "Complementary wall frame",
          "Soft copies only",
        ],
      },
      {
        title: "3 Outfit Package",
        price: "₦150,000",
        features: [
          "10 Professionally edited images",
          "Creative direction/setup",
          "Complementary wall frame",
          "Soft copies only",
        ],
      },
    ],
    weddings: [
      {
        title: "SILVER PACKAGE",
        subtitle: "PHOTOGRAPHY ONLY",
        price: "₦600,000",
        features: [
          "1 Full frame camera",
          "1 photographer",
          "12*30 synthetic photobook with a box",
          "Full Wedding pictures in a Flash Drive",
        ],
      },
      {
        title: "GOLD PACKAGE",
        subtitle: "PHOTOGRAPHY ONLY",
        price: "₦750,000",
        features: [
          "2 full frame cameras",
          "2 photographers",
          "12*30 synthetic photobook with a box",
          "A calendar",
          "16*20 frame",
          "Full Wedding pictures all in a 16Gig flash Drive",
        ],
      },
      {
        title: "SAPPHIRE PACKAGE",
        subtitle: "PHOTOGRAPHY ONLY",
        price: "₦900,000",
        features: [
          "2 full frame cameras",
          "2 photographers",
          "A 12*30 synthetic photobook with a case",
          "Calendar with a mini book",
          "14*14 Acrylic frame",
          "16*20 frame",
          "Full Wedding pictures inside one 32 Gig flash drive",
        ],
      },
      {
        title: "SILVER PACKAGE",
        subtitle: "VIDEOGRAPHY AND PHOTOGRAPHY",
        price: "₦700,000",
        features: [
          "1 Full frame camera",
          "1 photographer",
          "1 Videographer",
          "1 Wedding thriller",
          "12*30 synthetic photobook with a box",
          "with a calendar 14*14 frame",
          "Full Wedding pictures in a Flash Drive",
        ],
      },
      {
        title: "GOLD PACKAGE",
        subtitle: "VIDEOGRAPHY AND PHOTOGRAPHY",
        price: "₦850,000",
        features: [
          "2 full frame cameras",
          "2 photographers",
          "Pre wedding thriller",
          "1 wedding thriller video",
          "A 12*30 synthetic photobook with a case",
          "Calendar with a mini book",
          "16*20 frame",
          "Full Wedding pictures & Video all inside a 32 Gig flash drive",
        ],
      },
      {
        title: "SAPPHIRE PACKAGE",
        subtitle: "VIDEOGRAPHY AND PHOTOGRAPHY",
        price: "₦1,000,000",
        features: [
          "1 Drone",
          "2 full frame cameras",
          "2 photographers",
          "2 Videographers",
          "Pre wedding thriller",
          "2 wedding thriller video",
          "A 12*30 synthetic photobook with a case",
          "Calendar with a mini book",
          "14*14 Acrylic frame",
          "16*20 frame",
          "Full Wedding pictures & Video all inside two 32 Gig flash drive",
        ],
      },
    ],
    introductions: [
      {
        title: "Introduction Package",
        price: "₦400,000",
        features: [
          "1 Full frame camera",
          "1 photographer",
          "1 Videographer",
          "1 Intro thriller",
          "Full pictures & Video in a 32Gig Flash Drive",
        ],
      },
    ],
    maternity: [
      {
        title: "1 Outfit Package",
        price: "₦90,000",
        features: [
          "4 Professionally edited images",
          "Creative direction/setup",
          "Soft copies only",
        ],
      },
      {
        title: "2 Outfit Package",
        price: "₦150,000",
        features: [
          "6 Professionally edited images",
          "Creative direction/setup",
          "Soft copies only",
        ],
      },
    ],
    birthday: [
      {
        title: "1 Outfit Package",
        price: "₦70,000",
        features: [
          "4 Professionally edited images",
          "Creative direction/setup",
          "Soft copies only",
        ],
      },
      {
        title: "2 Outfit Package",
        price: "₦100,000",
        features: [
          "6 Professionally edited images",
          "Creative direction/setup",
          "Soft copies only",
        ],
      },
      {
        title: "3 Outfit Package",
        price: "₦120,000",
        features: [
          "8 Professionally edited images",
          "Creative direction/setup",
          "Soft copies only",
        ],
      },
    ],
    infant: [
      {
        title: "1 Outfit Package",
        price: "₦80,000",
        features: [
          "4 Professionally edited images",
          "Creative direction/setup with props",
          "Soft copies only",
        ],
      },
      {
        title: "2 Outfit Package",
        price: "₦130,000",
        features: [
          "6 Professionally edited images",
          "Creative direction/setup with props",
          "Soft copies only",
        ],
      },
      {
        title: "3 Outfit Package",
        price: "₦170,000",
        features: [
          "8 Professionally edited images",
          "Creative direction/setup with props",
          "Soft copies only",
        ],
      },
    ],
    family: [
      {
        title: "2 Outfit Package",
        price: "₦120,000",
        features: [
          "6 Professionally edited images",
          "Creative direction/setup",
          "Soft copies only",
          "One 14 X 14 Frame",
        ],
      },
      {
        title: "3 Outfit Package",
        price: "₦170,000",
        features: [
          "12 Professionally edited images",
          "Creative direction/setup",
          "Soft copies only",
          "One 16 X 20 Frame",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="pt-20 flex-1">
        {/* Mobile Category Selector */}
        <div className="lg:hidden px-4 py-4 bg-gray-50 border-b">
          <button
            type="button"
            onClick={toggleMobileSidebar}
            className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg text-left"
          >
            <span className="font-medium text-gray-900">
              {categories.find((cat) => cat.id === activeCategory)?.name}
            </span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${
                isMobileSidebarOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Mobile Dropdown Menu */}
          {isMobileSidebarOpen && (
            <div className="absolute left-4 right-4 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <nav className="py-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => selectCategory(category.id)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors ${
                      activeCategory === category.id
                        ? "bg-black text-white hover:bg-black"
                        : "text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* Main Container  */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            {/* Desktop Sidebar  */}
            <div className="hidden lg:block w-72 bg-gray-50 min-h-screen p-6 sticky top-20 h-fit">
              <h2 className="text-xl font-bold text-black mb-6">Services</h2>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeCategory === category.id
                        ? "bg-black text-white"
                        : "text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content Area */}
            <div className="flex-1 lg:pl-8 p-4 sm:p-6 lg:p-6">
              <div className="mb-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl px-4 py-3 transition-all duration-300 animate-pulse-subtle">
                  <div className="flex items-center rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300 animate-pulse-subtle bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
                    <svg
                      className="w-3 h-3 text-amber-400 animate-bounce-gentle mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs text-amber-700 font-medium">
                      All shoots outside the studio attracts an extra charge of{" "}
                      <span className="font-bold text-amber-900">₦80,000</span>
                    </span>
                  </div>

                  <div className="grid sm:flex gap-2">
                    <button
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/1Vq3aZi39-22ZgK5c9lQ-Nm6KqMVe6NQu/view?usp=drivesdk",
                          "_blank"
                        )
                      }
                      className="flex items-center gap-2 bg-black hover:bg-gray-950- text-white text-xs font-medium px-3 py-3 max-w-64 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md flex-shrink-0"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Portraits Pricing Guide
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/17k7srSo1QL0eU-5Gj5Yafz7yT-rkbZHq/view?usp=drivesdk",
                          "_blank"
                        )
                      }
                      className="flex items-center gap-2 bg-black hover:bg-gray-950- text-white text-xs font-medium max-w-64 px-3 py-4 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md flex-shrink-0"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Weddings Pricing Guide
                    </button>
                  </div>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {categories.find((cat) => cat.id === activeCategory)?.name}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {pricingData[activeCategory as keyof typeof pricingData]?.map(
                  (package_, index) => (
                    <div
                      key={index}
                      className="rounded-lg p-6 shadow-lg bg-black"
                    >
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {package_.title}
                        </h3>
                        {"subtitle" in package_ && package_.subtitle && (
                          <p className="text-sm text-gray-200 mb-2">
                            {package_.subtitle}
                          </p>
                        )}

                        <div className="text-2xl font-bold text-white">
                          {package_.price}
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {package_.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-white text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() =>
                          handleWhatsAppNav(
                            categories.find((cat) => cat.id === activeCategory)
                              ?.name || "",
                            package_.title
                          )
                        }
                        className="w-full bg-white text-black font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        Make a Reservation
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default PricingPage;
