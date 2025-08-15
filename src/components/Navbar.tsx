'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-red-500 to-pink-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-default">
              <Logo />
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <span className="text-white hover:text-red-100 transition-colors font-medium cursor-default">
              Marketplace
            </span>
            <span className="text-white hover:text-red-100 transition-colors font-medium cursor-default">
              Categories
            </span>
            <Link href="/login" className="bg-white text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-50 transition-all transform hover:scale-105 shadow-md">
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-100"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <span className="block text-white hover:text-red-200 px-3 py-2 cursor-default">
                Marketplace
              </span>
              <span className="block text-white hover:text-red-200 px-3 py-2 cursor-default">
                Categories
              </span>
              <Link href="/login" className="w-full text-left bg-white text-red-600 px-3 py-2 rounded-md font-medium block">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
