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
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
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
                src="/images/FreddiesHelpingFreddies5.png"
                alt="Freddies Helping Freddies"
                width={300}
                height={300}
                className="w-40 md:w-64 h-auto mx-auto object-contain"
              />
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
          <h2 className="text-3xl font-bold mb-6">Support the Next Generation</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your donation helps provide scholarships and resources for Fredericktown students.
          </p>
          <a 
            href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-lg font-bold rounded-md text-white bg-gray-700 hover:bg-gray-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 animate-pulse-subtle"
          >
            Donate Now
          </a>
        </div>
      </section>
    </div>
  );
}
