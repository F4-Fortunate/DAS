import { useState } from "react";
import { Link } from "react-router-dom";
import btn from "../images/Frame 11.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInstagramNav = () => {
    window.open("https://instagram.com/direct/new/", "_blank");
  };

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
            className="text-lg sm:text-xl font-bold text-gray-900 hover:text-violet-800 transition-colors"
            onClick={closeMenu}
          >
            <span className="hidden sm:inline">DotunAjayi Studios</span>
            <span className="sm:hidden">DA Studios</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-violet-800 transition-colors"
            >
              Pricing/Services
            </Link>
            <Link
              to="/terms"
              className="text-sm font-medium text-gray-700 hover:text-violet-800 transition-colors"
            >
              Terms & Conditions
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Mobile/Tablet Hamburger Menu */}
          <button
            type="button"
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-violet-800 hover:bg-gray-100 transition-colors"
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

          <a href="#" onClick={handleInstagramNav}>
            <img src={btn} alt="btn" className="w-auto h-8 sm:h-11" />
          </a>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <nav className="px-4 py-4 space-y-3">
            <Link
              to="/pricing"
              className="block text-sm font-medium text-gray-700 hover:text-violet-800 transition-colors py-2"
              onClick={closeMenu}
            >
              Pricing/Services
            </Link>
            <Link
              to="/terms"
              className="block text-sm font-medium text-gray-700 hover:text-violet-800 transition-colors py-2"
              onClick={closeMenu}
            >
              Terms & Conditions
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
