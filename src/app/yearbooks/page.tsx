"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Yearbooks() {
  // TouchPros yearbook viewer URL
  const touchprosUrl = "https://fredericktown.touchpros.com/FlipbookYear?tabid=7974";

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-school-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Fredericktown Yearbooks</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl">
              Explore our digital collection of yearbooks from 1970 to the present day
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-red prose-lg mx-auto mb-16 text-center">
          <h2 className="text-gray-900">Digital Yearbook Collection</h2>
          <p className="text-gray-900">
            The Fredericktown Alumni Association is pleased to provide access to digital versions of our school yearbooks.
            Our collection includes yearbooks from 1970 to the present, all viewable through the TouchPros digital platform.
          </p>
          
          <div className="mt-12 mb-16 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-8">
              <div className="absolute inset-0 flex items-center justify-center bg-red-50">
                <span className="text-school-red text-3xl font-bold">Yearbook Archive</span>
              </div>
            </div>
            
            <a
              href={touchprosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800 shadow-md transition-colors duration-150"
            >
              Access Digital Yearbooks
            </a>
            
            <p className="text-gray-900 mt-4">
              Click the button above to visit the TouchPros yearbook viewer.
              <br />Once there, you can select from any available yearbook year.
            </p>
          </div>
        </div>
        
        {/* Physical Yearbooks */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">Looking for Physical Yearbooks?</h2>
          <p className="text-center text-gray-900 max-w-3xl mx-auto mb-8">
            For access to physical copies of yearbooks from before 1970 or to donate yearbooks to our collection,
            please contact our historical committee. We're always looking to expand our archives.
          </p>
          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800">
              Contact Our Historical Committee
            </Link>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-school-red text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Support Our Historical Preservation Efforts</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Your donation helps us preserve and share Fredericktown's rich history through 
            digitization, archiving, and special historical projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:history@fredericktownalumni.org" 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-school-red bg-white hover:bg-gray-100"
            >
              Contact Us
            </a>
            <a 
              href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10"
            >
              Support Our Archive Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 