import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuData from '../data/MenuData';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to change header class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Add class if scrolled past 50px
      } else {
        setIsScrolled(false); // Remove class if not
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up event listener on component unmount
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-0 shrikHeader' : 'py-0'
      }`} // Conditional class for scroll
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start nevigate">
          {/* Left-aligned logo */}
          <div className="flex items-center py-2">
            <Link to="/">
              <img src="/logo.png" alt="Company Logo" className="w-auto z-10 logoImg transition-all duration-300 ease-in-out" />
            </Link>
          </div>

          {/* Desktop Menu (right-aligned) */}
          <nav className="hidden md:flex space-x-8 bgBlackHead pt-8 pb-4 pl-5 pr-0 relative z-20">
            <MenuData />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-3">
          <div className="px-2 pt-2 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              to="/signup"
              className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
