import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-school-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">About Fredericktown Alumni</h1>
              <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-xl">
                Supporting our community and preserving our shared history.
              </p>
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
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-900">
              The Fredericktown Alumni Association is dedicated to fostering a lifelong connection between alumni 
              and the Fredericktown community. We are committed to supporting educational opportunities for 
              current and future students through scholarships and programs.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-school-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-900">
                  <strong className="font-medium text-gray-900">Connect Alumni</strong> - Building bridges across generations of graduates
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-school-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-900">
                  <strong className="font-medium text-gray-900">Support Education</strong> - Providing scholarships to deserving students
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-school-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-900">
                  <strong className="font-medium text-gray-900">Preserve History</strong> - Maintaining our heritage and traditions
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-300">
                {/* Placeholder for real image */}
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-800 text-xl">School Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
            Our History
          </h2>
          <div className="prose prose-red prose-lg mx-auto text-gray-900">
            <p className="text-gray-900">
              Founded in 1965, the Fredericktown Alumni Association has been serving graduates and the 
              community for over five decades. What began as a small group of dedicated alumni has grown 
              into an organization that spans generations.
            </p>
            <p className="text-gray-900">
              Our first scholarship was awarded in 1968, and since then, we have provided hundreds of 
              students with financial assistance to pursue their educational goals. The association has 
              evolved over the years, expanding its programs and reach while maintaining its core mission 
              of supporting education and connecting alumni.
            </p>
            <p className="text-gray-900">
              Today, we continue to build on this foundation through various initiatives, including our 
              scholarship program, community events, and historical preservation efforts. We are proud of 
              our legacy and look forward to continuing our work for generations to come.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Leadership
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-900 sm:mt-4">
            Meet the dedicated individuals guiding our organization.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Board Member 1 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-8">
              <div className="flex justify-center">
                <div className="h-24 w-24 rounded-full bg-gray-300 mb-4"></div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">Jane Smith</h3>
                <p className="text-sm text-school-red mb-2">President</p>
                <p className="text-sm text-gray-900">Class of 1985</p>
              </div>
            </div>
          </div>
          
          {/* Board Member 2 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-8">
              <div className="flex justify-center">
                <div className="h-24 w-24 rounded-full bg-gray-300 mb-4"></div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">John Johnson</h3>
                <p className="text-sm text-school-red mb-2">Vice President</p>
                <p className="text-sm text-gray-900">Class of 1992</p>
              </div>
            </div>
          </div>
          
          {/* Board Member 3 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-8">
              <div className="flex justify-center">
                <div className="h-24 w-24 rounded-full bg-gray-300 mb-4"></div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">Robert Williams</h3>
                <p className="text-sm text-school-red mb-2">Treasurer</p>
                <p className="text-sm text-gray-900">Class of 1978</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 