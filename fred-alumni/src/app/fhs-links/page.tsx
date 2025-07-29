import Link from 'next/link';
import Image from 'next/image';

export default function FHSLinks() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-school-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">FHS Links</h1>
              <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-xl">
                Stay connected with Fredericktown High School through these important links and resources.
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
        {/* Main Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Freddie Flash - School Newspaper */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-school-red md:w-48 flex items-center justify-center py-6 md:py-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">Freddie Flash</h3>
                <p className="mt-4 text-gray-800">
                  Stay up-to-date with the latest news, events, and happenings at Fredericktown High School 
                  through our official online newspaper.
                </p>
                <div className="mt-6">
                  <a 
                    href="https://freddieflash.org" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                  >
                    Visit Freddie Flash
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Fredericktown Schools Official Website */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-gray-500 md:w-48 flex items-center justify-center py-6 md:py-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">Fredericktown Schools</h3>
                <p className="mt-4 text-gray-800">
                  Access the official Fredericktown Local School District website for academic calendars, 
                  district news, and important school information.
                </p>
                <div className="mt-6">
                  <a 
                    href="https://www.fredericktownschools.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600"
                  >
                    Visit School District
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Additional Resources</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-8">
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-gray-800 mb-6">
                Looking for more Fredericktown High School information and resources? Check out our comprehensive 
                Alumni Archives section for historical records, yearbooks, and much more.
              </p>
              
              <div className="mt-8">
                <Link 
                  href="/archives"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-school-red hover:bg-red-800 shadow-lg"
                >
                  Explore Alumni Archives
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-16 bg-school-red text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            These links help you stay connected with the current Fredericktown High School community 
            while supporting our alumni network and future students.
          </p>
          <Link 
            href="/faq#how-to-donate"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-school-red bg-white hover:bg-gray-100"
          >
            Support Our Alumni Fund
          </Link>
        </div>
      </div>
    </div>
  );
}