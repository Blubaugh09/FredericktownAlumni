"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    // Add a small delay before closing for smoother UX
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 150);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-school-red text-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold">Fredericktown Alumni</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800">
              About
            </Link>
            <Link href="/faq" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800">
              FAQ
            </Link>
            <Link href="/scholarships" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800">
              Scholarships
            </Link>
            
            <Link href="/archives" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800">
              Alumni Archives
            </Link>
           
            <a 
              href="https://knoxcf.awardspring.com/Home/Scholarships" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-4 inline-flex items-center justify-center px-5 py-2.5 border border-white text-sm font-bold rounded-md text-school-red bg-white hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Apply Now
            </a>
            <Link 
              href="/faq#how-to-donate" 
              className="ml-4 inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 text-sm font-bold rounded-md text-white bg-gray-700 hover:bg-gray-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Donate
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden bg-school-red transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} style={{ overflow: 'hidden' }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">
              Home
            </Link>
            <Link href="/about" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">
              About
            </Link>
            <Link href="/faq" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">
              FAQ
            </Link>
            <Link href="/scholarships" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">
              Scholarships
            </Link>
            
            <Link href="/archives" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">
              Alumni Archives
            </Link>
           
            <a 
              href="https://knoxcf.awardspring.com/Home/Scholarships" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block px-3 py-3 mt-2 text-center rounded-md text-base font-bold bg-white text-school-red hover:bg-gray-100 shadow-md border border-white"
            >
              Apply Now
            </a>
            <Link 
              href="/faq#how-to-donate" 
              onClick={handleLinkClick}
              className="block px-3 py-3 mt-2 text-center rounded-md text-base font-bold bg-gray-700 text-white hover:bg-gray-600 shadow-md"
            >
              Donate
            </Link>
          </div>
        </div>
    </nav>
  );
} 