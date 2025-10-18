"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDonateDropdownOpen, setIsDonateDropdownOpen] = useState(false);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isDonateDropdownOpen && !target.closest('.donate-dropdown')) {
        setIsDonateDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDonateDropdownOpen]);

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
            
            <Link href="/fhs-links" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800">
              FHS Links
            </Link>
           
            <a 
              href="https://knoxcf.awardspring.com/Home/Scholarships" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-4 inline-flex items-center justify-center px-5 py-2.5 border border-white text-sm font-bold rounded-md text-school-red bg-white hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Apply Now
            </a>
            
            {/* Donate Dropdown Button */}
            <div className="ml-4 relative donate-dropdown">
              <button 
                className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 text-sm font-bold rounded-md text-white bg-gray-700 hover:bg-gray-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                onClick={() => setIsDonateDropdownOpen(!isDonateDropdownOpen)}
              >
                Donate
                <svg 
                  className={`ml-2 h-4 w-4 transition-transform duration-200 ${isDonateDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isDonateDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50" style={{ color: '#111827' }}>
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link
                      href="/faq#how-to-donate"
                      className="flex items-center px-4 py-3 text-sm !text-gray-900 hover:bg-gray-100 transition-colors"
                      role="menuitem"
                      onClick={() => setIsDonateDropdownOpen(false)}
                      style={{ color: '#111827' }}
                    >
                      <svg className="mr-3 h-5 w-5 !text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold !text-gray-900" style={{ color: '#111827' }}>Ways to Donate</div>
                        <div className="text-xs !text-gray-600" style={{ color: '#4B5563' }}>Learn about donation options</div>
                      </div>
                    </Link>
                    <a
                      href="https://knoxcf.fcsuite.com/erp/donate/create/fund?funit_id=1178"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-3 text-sm !text-gray-900 hover:bg-gray-100 transition-colors border-t border-gray-200"
                      role="menuitem"
                      onClick={() => setIsDonateDropdownOpen(false)}
                      style={{ color: '#111827' }}
                    >
                      <svg className="mr-3 h-5 w-5 !text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold !text-gray-900" style={{ color: '#111827' }}>Donate Now</div>
                        <div className="text-xs !text-gray-600" style={{ color: '#4B5563' }}>Make an online donation</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
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
            
            <Link href="/fhs-links" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">
              FHS Links
            </Link>
           
            <a 
              href="https://knoxcf.awardspring.com/Home/Scholarships" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block px-3 py-3 mt-2 text-center rounded-md text-base font-bold bg-white text-school-red hover:bg-gray-100 shadow-md border border-white"
            >
              Apply Now
            </a>
            
            {/* Mobile Donate Options */}
            <div className="mt-2 space-y-2">
              <Link 
                href="/faq#how-to-donate" 
                onClick={handleLinkClick}
                className="flex items-center px-3 py-3 rounded-md text-base font-semibold bg-gray-700 text-white hover:bg-gray-600 shadow-md"
              >
                <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ways to Donate
              </Link>
              <a 
                href="https://knoxcf.fcsuite.com/erp/donate/create/fund?funit_id=1178" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-3 rounded-md text-base font-semibold bg-green-600 text-white hover:bg-green-700 shadow-md"
              >
                <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Donate Now
              </a>
            </div>
          </div>
        </div>
    </nav>
  );
} 