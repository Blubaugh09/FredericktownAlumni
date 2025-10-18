import Link from 'next/link';
import Image from 'next/image';

export default function AlumniArchives() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-school-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Alumni Archives</h1>
              <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-xl">
                Discover the rich history and achievements of Fredericktown High School through our comprehensive archives.
              </p>
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
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Opening Section */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
            <div className="prose prose-lg mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Gateway to FHS History</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                FHS TouchPros is the "go to" site for information of interest to FHS Students, Staff, Family, Alums, and Fans. 
                Explore all Named Scholarships and Awardees, "Freddies Helping Freddies" Annual Reports, Alumni Listings by Year, 
                All Yearbooks, Veterans, Distinguished Alumni, Athletic Hall of Fame Members, Valedictorians, Salutatorians, 
                Fans of the Year, History, and more.
              </p>
              <div className="mt-8">
                <a 
                  href="https://fredericktown.touchpros.com/Home2" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-school-red hover:bg-red-800 shadow-lg"
                >
                  Visit FHS TouchPros
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hall of Fame Section */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-school-red md:w-48 flex items-center justify-center py-6 md:py-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">Hall of Fame</h3>
                <p className="mt-4 text-gray-800">
                  Celebrate the outstanding achievements of our alumni, faculty, and supporters who have made significant 
                  contributions to their communities and brought honor to Fredericktown High School.
                </p>
                <div className="mt-6">
                  <a 
                    href="https://fredericktown.touchpros.com/SearchBy?tabid=9421" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                  >
                    Explore Hall of Fame
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academics Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Academics</h2>
          <p className="text-center text-gray-800 mb-8 max-w-3xl mx-auto">
            Discover the academic excellence that defines Fredericktown High School through our comprehensive 
            academic honors and recognition programs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-gray-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Hall of Honor</h4>
              <p className="text-gray-700 mb-4">Recognition of outstanding academic achievements and contributions.</p>
              <a 
                href="https://fredericktown.touchpros.com/SearchBy?tabid=10492" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
              >
                View Hall of Honor
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-gray-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Academic Honors</h4>
              <p className="text-gray-700 mb-4">Celebrating our Valedictorians, Salutatorians, and academic excellence.</p>
              <a 
                href="https://fredericktown.touchpros.com/SearchBy?tabid=7971" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
              >
                View Academic Honors
              </a>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">History</h2>
          <p className="text-center text-gray-800 mb-8 max-w-3xl mx-auto">
            Explore the rich heritage and traditions of Fredericktown High School through our extensive 
            historical archives and collections.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-gray-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Yearbooks</h4>
              <p className="text-gray-700 mb-4">Complete collection of FHS yearbooks spanning decades.</p>
              <a 
                href="https://fredericktown.touchpros.com/FlipbookYear?tabid=7974" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
              >
                Browse Yearbooks
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-gray-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">School Spirit</h4>
              <p className="text-gray-700 mb-4">Athletic facilities, traditions, and school pride moments.</p>
              <a 
                href="https://fredericktown.touchpros.com/SearchBy?tabid=7975&filtertype=Sport" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
              >
                View School Spirit
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-gray-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">FHS Alumni</h4>
              <p className="text-gray-700 mb-4">Comprehensive alumni listings and class information.</p>
              <a 
                href="https://fredericktown.touchpros.com/SearchBy?tabid=11702" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
              >
                Search Alumni
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-gray-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Class Lists</h4>
              <p className="text-gray-700 mb-4">Organized class rosters by graduation year.</p>
              <a 
                href="https://fredericktown.touchpros.com/SearchBy?tabid=8896&filtertype=Graduation" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
              >
                View Class Lists
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-gray-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Named Scholarships</h4>
              <p className="text-gray-700 mb-4">Complete records of scholarship recipients and donors.</p>
              <a 
                href="https://fredericktown.touchpros.com/SearchBy?tabid=8898&showFilterResults=1&filtertype=All" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
              >
                View Scholarships
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-gray-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Annual Reports</h4>
              <p className="text-gray-700 mb-4">"Freddies Helping Freddies" scholarship program reports.</p>
              <a 
                href="https://fredericktown.touchpros.com/FlipbookYear?tabid=8899" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
              >
                Read Reports
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-gray-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Veterans</h4>
              <p className="text-gray-700 mb-4">Honoring our alumni who served in the military.</p>
              <a 
                href="https://fredericktown.touchpros.com/SearchBy?tabid=8915" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
              >
                Honor Veterans
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-school-red text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Explore Your FHS Legacy</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
          Whether you&#39;re looking for classmates, researching school history, or exploring
scholarship opportunities, FHS TouchPros houses the Alumni Archives and is your
comprehensive resource for all things Fredericktown High School.
          </p>
          <a 
            href="https://fredericktown.touchpros.com/Home2" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-school-red bg-white hover:bg-gray-100"
          >
            Start Exploring TouchPros
          </a>
        </div>
      </div>
    </div>
  );
}