import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-school-red text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-school-red/90 to-school-red/70 z-10"></div>
          <div className="absolute inset-0 bg-[url('/hero-background.jpg')] bg-cover bg-center opacity-25"></div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-16  sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                Fredericktown Alumni Association
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto md:mx-0 mb-10 italic">
                Freddies Helping Freddies
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Link 
                  href="/scholarships" 
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-white text-black"
                >
                  Scholarships
                </Link>
                <a 
                  href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-bold rounded-md text-white bg-gray-700 hover:bg-gray-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Support Our Mission
                </a>
              </div>
            </div>
            <div className="mt-10 md:mt-0 max-w-xs">
              <Image
                src="/images/FreddiesHelpingFreddies6.png"
                alt="Freddies Helping Freddies"
                width={300}
                height={300}
                className="w-40 md:w-64 h-auto mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FHS Alumni Scholarship Fund Section */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FHS Alumni Scholarship Fund</h2>
            <div className="h-1 w-20 bg-school-red mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <div className="prose prose-red prose-lg max-w-none">
              <p>
              FHS Alumni Scholarship Fund was created with the goal of assisting FHS graduates reach their dreams by attending a post-secondary institution.

Our Motto "Freddies helping Freddies" describes this effort.

Our goal is "More and larger Scholarships – every year!"

All Scholarships are awarded or renewed each year.

Students apply through the FHS Guidance Office.

The Fund is professionally managed by the Knox County Foundation; donations are tax deductible.
              </p>
              
              <div className="my-6 p-4 bg-gray-50 border-l-4 border-school-red rounded">
                <p className="text-xl font-medium italic text-gray-800">
                  "Freddies helping Freddies" 
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-school-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="ml-2 text-lg font-semibold text-gray-900">Management</h3>
                  </div>
                  <p className="text-gray-700">
                    The Fund is professionally managed by the Knox County Foundation; donations are tax deductible.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-school-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="ml-2 text-lg font-semibold text-gray-900">Our Goal</h3>
                  </div>
                  <p className="text-gray-700">
                    "More and larger Scholarships – every year!"
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-6 bg-gray-50 p-6 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                   
                    
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-6">
                    <li>All Scholarships are awarded or renewed each year</li>
                    <li>Students apply through the FHS Guidance Office</li>
                  </ul>
                </div>
                
                <Link 
                  href="/scholarships" 
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800 shadow-md"
                >
                  Learn More About Scholarships
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Impact & Statistics */}
      <section className="py-16 bg-white border-b-2 border-school-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fund Impact & Growth</h2>
            <div className="h-1 w-20 bg-school-red mx-auto"></div>
          </div>
          
          {/* Main Fund Balance Highlight */}
          <div className="bg-gradient-to-r from-school-red to-red-800 text-white rounded-lg p-8 mb-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">FUND BALANCE</h3>
              <div className="text-5xl md:text-6xl font-extrabold mb-4">$1,200,654</div>
              <p className="text-xl mb-6">as of December 31, 2024</p>
              <div className="bg-white/20 rounded-lg p-4 inline-block">
                <p className="text-lg">
                  <span className="font-semibold">Starting with a balance of just under $10,000 in 2015</span>
                  <br />
                  the Fund has grown to <span className="font-bold text-2xl">$1,200,654</span>
                </p>
              </div>
              <p className="text-2xl font-bold mt-6">Thank you Donors!</p>
            </div>
          </div>

          {/* 2024 Highlights Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">2024 Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Donor Contributions */}
              <div className="bg-gray-50 rounded-lg p-6 text-center border-l-4 border-school-red">
                <div className="text-3xl font-bold text-school-red mb-2">$86,000</div>
                <p className="text-gray-700 font-medium">Donor Contributions</p>
              </div>
              
              {/* Number of Donors */}
              <div className="bg-gray-50 rounded-lg p-6 text-center border-l-4 border-school-red">
                <div className="text-3xl font-bold text-school-red mb-2">190</div>
                <p className="text-gray-700 font-medium">Number of Donors</p>
              </div>
              
              {/* Market Returns */}
              <div className="bg-gray-50 rounded-lg p-6 text-center border-l-4 border-school-red">
                <div className="text-3xl font-bold text-school-red mb-2">$157,000</div>
                <p className="text-gray-700 font-medium">Market Returns</p>
                <p className="text-sm text-gray-600 mt-1">15.1%</p>
              </div>
              
              {/* Scholarship Awards */}
              <div className="bg-gray-50 rounded-lg p-6 text-center border-l-4 border-school-red">
                <div className="text-3xl font-bold text-school-red mb-2">37</div>
                <p className="text-gray-700 font-medium">Scholarship Awards</p>
                <p className="text-sm text-gray-600 mt-1">Total of $46,000</p>
              </div>
              
            </div>
          </div>

          {/* Additional Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* New Scholarships */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="h-6 w-6 text-school-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                New Scholarships in 2025
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-school-red mr-2">•</span>
                  Chris Fearn Well
                </li>
                <li className="flex items-start">
                  <span className="text-school-red mr-2">•</span>
                  Ed & Sandy Erick & Family
                </li>
                <li className="flex items-start">
                  <span className="text-school-red mr-2">•</span>
                  Class of 1974
                </li>
              </ul>
            </div>
            
            {/* Total Impact */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="h-6 w-6 text-school-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Scholarship Awards since 1994
              </h4>
              <div className="text-center">
                <div className="text-2xl font-bold text-school-red">123 Students</div>
                <div className="text-2xl font-bold text-school-red">$249,700</div>
                <p className="text-gray-600 mt-2">Total Impact Over 30 Years</p>
              </div>
            </div>
            
          </div>

          {/* Motto */}
          <div className="text-center">
            <div className="inline-block bg-school-red text-white px-8 py-4 rounded-lg">
              <p className="text-xl font-bold italic">"It can be done in a small town."</p>
              <p className="text-sm mt-2 opacity-90">FHS Alumni Fundraising Committee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">How We Serve Our Community</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-school-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scholarships</h3>
                <p className="text-gray-600 mb-4">
                  We provide scholarships to deserving students pursuing higher education.
                </p>
                <Link href="/scholarships" className="text-school-red hover:text-red-800 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-school-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Alumni Network</h3>
                <p className="text-gray-600 mb-4">
                  Connect with fellow alumni and stay updated on events and reunions.
                </p>
                <Link href="/about" className="text-school-red hover:text-red-800 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-school-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community Support</h3>
                <p className="text-gray-600 mb-4">
                  We fund various programs that benefit Fredericktown students and the community.
                </p>
                <Link href="/funds" className="text-school-red hover:text-red-800 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates & Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Updates & Highlights</h2>
            <div className="h-1 w-20 bg-school-red mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Stay connected with the latest news, achievements, and milestones from the Fredericktown Alumni community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Update 1: 2025 Scholarship Thank You Notes */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-2 bg-school-red"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-school-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <span className="text-sm font-medium text-gray-500">June 2025</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2025 Scholarship Recipients Send Heartfelt Thank You Messages</h3>
                <p className="text-gray-600 mb-4">
                  This year's scholarship recipients have shared touching thank you notes expressing their gratitude for the support from the Fredericktown Alumni community.
                </p>
                <a 
                  href="/pdfs/ThankYous/2025.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-school-red hover:text-red-800 font-medium text-sm flex items-center"
                >
                  Read Messages
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Update 2: 10th Annual Report */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-2 bg-school-red"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-school-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <span className="text-sm font-medium text-gray-500">May 2025</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">FHS Alumni 10th Annual Scholarship Report Released</h3>
                <p className="text-gray-600 mb-4">
                  Our comprehensive 10th Annual Report showcases a decade of "Freddies Helping Freddies" - highlighting scholarship recipients, donor impact, and fund growth.
                </p>
                <a 
                  href="/pdfs/Annual_Reports/2025-05-11 - FHS Alumni 10th Annual Report V19.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-school-red hover:text-red-800 font-medium text-sm flex items-center"
                >
                  View Report
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
          
          {/* View All Updates Link */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center px-4 py-2 text-sm text-gray-600">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Updates are added periodically to keep our community informed
            </div>
          </div>
        </div>
      </section>

      {/* Yearbooks Highlight */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore Our Yearbooks</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Take a nostalgic journey through our digital collection of Fredericktown yearbooks, 
                spanning decades of memories, achievements, and school history.
              </p>
              <Link 
                href="https://fredericktown.touchpros.com/FlipbookYear?tabid=7974" 
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse Yearbooks
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm h-72">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -rotate-6 bg-white p-2 shadow-lg rounded transform transition duration-300 hover:rotate-0 z-10">
                <Image
                    src="/images/2005_Yearbook.png"
                    alt="2005 Fredericktown Yearbook"
                    width={192}
                    height={256}
                    className="h-64 w-48 object-cover"
                  />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 rotate-3 bg-white p-2 shadow-lg rounded transform transition duration-300 hover:rotate-0 z-20">
                  <div className="h-64 w-48 bg-gray-300">
                  <Image
                    src="/images/1961_Yearbook.png"
                    alt="1961 Fredericktown Yearbook"
                    width={192}
                    height={256}
                    className="h-64 w-48 object-cover"
                  />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-school-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Your contribution helps ensure that we can continue supporting Fredericktown students 
            and preserving our shared history for generations to come.
          </p>
          <a 
            href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-school-red bg-white hover:bg-gray-100 mb-6"
          >
            Donate Now
          </a>
          <div className="mt-6 pt-4 border-t border-white/30 max-w-3xl mx-auto">
            <p className="text-lg mb-2">Alternatively, make your check payable to FHS ALUMNI SCHOLARSHIP FUND.</p>
            <p className="text-lg">Mail to: Knox County Foundation, P.O. Box 309, Mount Vernon, OH 43050-0309.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
