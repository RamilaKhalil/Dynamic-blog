import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/">
            My Blog
          </a>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/"
             className="hover:text-gray-400">Home
          </a>
          <a href="/about"
             className="hover:text-gray-400">About
          </a>
          <a href="/blog"
             className="hover:text-gray-400">Blog
          </a>
          <a href="/contact" 
          className="hover:text-gray-400">Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
