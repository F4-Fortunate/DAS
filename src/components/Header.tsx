import { useState } from "react";
import { Link } from "react-router-dom";
import btn from "../images/Frame 11.svg";
import Component from "../images/Vector 1.svg";
import { handleInstagramNav } from "../utils/util";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white py-3 sm:py-4 px-4 sm:px-6 lg:px-20 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
          <Link
            to="/"
            className="text-lg sm:text-xl font-extrabold text-black hover:text-gray-800 transition-colors"
            onClick={closeMenu}
          >
            <span className="hidden sm:inline">DotunAjayiStudios</span>
            <span className="sm:hidden">DotunAjayiStudios</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/pricing"
              className="text-sm font-medium text-black hover:text-gray-800 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/terms"
              className="text-sm font-medium text-black hover:text-gray-800 transition-colors"
            >
              Terms & Conditions
            </Link>
            {/* <Link
              to="/faq"
              className="text-sm font-medium text-black hover:text-gray-800 transition-colors"
            >
              FAQs
            </Link> */}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Mobile/Tablet Hamburger Menu */}
          <button
            type="button"
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-black hover:text-gray-800 hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="hidden lg:block">
            <button
              type="button"
              onClick={handleInstagramNav}
              className="flex items-center justify-between gap-2 border-2 border-black w-40 bg-slate-50 text-black px-3 py-3 sm:px-7 sm:py-4 rounded-lg font-semibold text-base sm:text-sm hover:bg-slate-200 hover:text-black transition-all duration-1000 hover:scale-105"
            >
              Contact Us
              <img
                src={Component}
                alt="Component"
                className="gitBtnIcon w-4 h-4 bg-black p-1 rounded-full"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <nav className="px-4 py-4 space-y-3">
            <Link
              to="/pricing"
              className="block text-sm font-medium text-black hover:text-gray-800 transition-colors py-2"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              to="/terms"
              className="block text-sm font-medium text-black hover:text-gray-800 transition-colors py-2"
              onClick={closeMenu}
            >
              Terms & Conditions
            </Link>
            <button
              type="button"
              onClick={() => {
                handleInstagramNav();
                closeMenu();
              }}
              className="block text-sm font-medium text-black hover:text-gray-800 transition-colors py-2"
            >
              Contact Us
            </button>
            {/* <Link
              to="/faq"
              className="block text-sm font-medium text-black hover:text-gray-800 transition-colors py-2"
              onClick={closeMenu}
            >
              FAQs
            </Link> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
