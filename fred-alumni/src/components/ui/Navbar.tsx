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

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-school-red text-white z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : 'shadow-md'
    }`}>
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
            <Link href="/funds" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800">
              Funds
            </Link>
            <Link href="/scholarships" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800">
              Scholarships
            </Link>
            <Link href="/awardees" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800">
              Awardees
            </Link>
            <Link href="/donors" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800">
              Donors
            </Link>
            <Link href="https://fredericktown.touchpros.com/FlipbookYear?tabid=7974" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800">
              Yearbooks
            </Link>
            <a 
              href="https://knoxcf.awardspring.com/Home/Scholarships" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-4 inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Apply Now
            </a>
            <a 
              href="https://knoxcf.awardspring.com/Home/Scholarships" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-4 inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 text-sm font-bold rounded-md text-white bg-gray-700 hover:bg-gray-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Donate Now
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <a 
              href="https://knoxcf.org/how-to-apply/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mr-2 inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-sm font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md"
            >
              Apply
            </a>
            <a 
              href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mr-4 inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 text-sm font-bold rounded-md text-white bg-gray-700 hover:bg-gray-600 shadow-md"
            >
              Donate
            </a>
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
      {isMenuOpen && (
        <div className="md:hidden bg-school-red">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">
              About
            </Link>
            <Link href="/funds" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">
              Funds
            </Link>
            <Link href="/scholarships" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">
              Scholarships
            </Link>
            <Link href="/awardees" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">
              Awardees
            </Link>
            <Link href="/donors" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">
              Donors
            </Link>
            <Link href="/yearbooks" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">
              Yearbooks
            </Link>
            <a 
              href="https://knoxcf.org/how-to-apply/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block px-3 py-3 mt-2 text-center rounded-md text-base font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md"
            >
              Apply Now
            </a>
            <a 
              href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block px-3 py-3 mt-2 text-center rounded-md text-base font-bold bg-gray-700 text-white hover:bg-gray-600 shadow-md"
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
} 