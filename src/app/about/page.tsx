import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-school-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">About Fredericktown Alumni</h1>
              <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-xl">
                Supporting our community and preserving our shared history.
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

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Purpose
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-900">
              The Fredericktown High School Alumni Association is organized for charitable and educational purposes, including the encouragement of donations to fund scholarships for alumni of Fredericktown High School and general support of the school.
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
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <Image
                  src="/images/SchoolEmblem.png"
                  alt="Fredericktown Local Schools Emblem"
                  width={500}
                  height={500}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Membership
            </h2>
            <div className="h-1 w-20 bg-school-red mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <div className="prose prose-red prose-lg mx-auto text-gray-900">
              <p className="text-gray-900 text-center">
                The membership is open to all persons who have attended Fredericktown High School.
              </p>
              <div className="my-8 p-5 bg-gray-50 rounded-lg border-l-4 border-school-red">
                <p className="text-xl text-center font-medium text-gray-900">
                  There are no fees or dues required to obtain or maintain membership in this association.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Annual Meetings Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Annual Meetings
          </h2>
          <div className="h-1 w-20 bg-school-red mx-auto mt-4"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 max-w-4xl mx-auto">
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="bg-gray-50 p-6 rounded-lg h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-school-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule
                  </h3>
                  <p className="text-gray-700">
                    Annual meetings are held on the last Saturday of each June at 6:30 P.M at the Fredericktown High School.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-6 rounded-lg h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-school-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Officer Elections
                  </h3>
                  <p className="text-gray-700">
                    The officers of the association shall consist of a president, vice president and secretary/treasurer, each elected to a one-year term at the annual meeting.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-school-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Election Process
              </h3>
              <p className="text-gray-700">
                Any member may nominate any other member to any of the offices either prior to or at the annual meeting. Officers are elected by a majority of all votes cast.
              </p>
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