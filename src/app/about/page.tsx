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

      {/* Fundraising Committee Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Fundraising Committee
            </h2>
            <div className="h-1 w-20 bg-school-red mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <div className="prose prose-red prose-lg mx-auto leading-relaxed">
              <div className="space-y-4">
                <p className="text-gray-900">
                  The role of the Fundraising Committee is to make it easy and compelling for "Freddies to Help Freddies" to deliver on our goal of More and larger Scholarships – every year!
                </p>
                
                <p className="text-gray-900">
                  Committee members cultivate, educate, support, ask, answer, recognize, thank, market, publicize, record keep, and report among other activities.
                </p>
                
                <p className="text-gray-900">
                  If you have questions on anything to do with Scholarships or want to run a Class or special purpose campaign, you can count on the Fundraising Committee for information, materials and advice.
                </p>
                
                <p className="text-gray-900">
                  Campaigns are typically run by Class leaders for their Class Reunions, but we also support special purpose campaigns, such as, Gold Star Parents and Class of 1959 honoring Julie Cochran Rogers.
                </p>
              </div>
              
              <div className="my-6 p-5 bg-gray-50 rounded-lg border-l-4 border-school-red">
                <h3 className="text-xl font-bold text-gray-900 mb-2">JOIN OUR TEAM!</h3>
                <p className="text-gray-900">
                  The Fundraising Team is always looking to strengthen our numbers. There is much work to do besides "asking" for a donation, so don't let that stop you. If you love the concept of "Freddies Helping Freddies", there is a role for you. We let Team members focus on what they like to do and can do well, we share the load, we have very few meetings (all over the phone), we communicate constantly electronically, we have fun, we do good work, and we make a difference. You do not need to live locally to be on our Team (few do). If you want to join our Team or need help running your own campaign, just contact any member of the Fundraising Team.
                </p>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Fundraising Committee Members:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-1">Bonita Leedy '60 Birkel</p>
                  <p className="text-gray-700">bleedy2@gmail.com</p>
                  <p className="text-gray-700">864-313-7090</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-1">Roger '61 & Jeannine Weller '61 Davis</p>
                  <p className="text-gray-700">rfdavis12@hotmail.com</p>
                  <p className="text-gray-700">j9mdavis@gmail.com</p>
                  <p className="text-gray-700">727-580-0740</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-1">Malcolm R. Shrimplin '88</p>
                  <p className="text-gray-700">malcolm.shrimplin@me.com</p>
                  <p className="text-gray-700">480-399-5388</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-1">Chris Fearn '67 Well</p>
                  <p className="text-gray-700">chriswell2249@gmail.com</p>
                  <p className="text-gray-700">740-501-1288</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-1">Betty Lozier '54 Weller</p>
                  <p className="text-gray-700">Bettyweller36@hotmail.com</p>
                  <p className="text-gray-700">740-501-3349</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fund Management</h3>
                <p className="font-semibold mb-1">Knox County Foundation</p>
                <p className="text-gray-700">Jeffrey Scott, Executive Director</p>
                <p className="text-gray-700">Phone: 740.392.3270</p>
                <p className="text-gray-700">www.knoxcf.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scholarship Committee Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Scholarship Committee
          </h2>
          <div className="h-1 w-20 bg-school-red mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="prose prose-red prose-lg mx-auto leading-relaxed">
            <div className="space-y-4">
              <p className="text-gray-900">
                The role of the Scholarship Committee is to encourage students to apply for the available scholarships and select the awardees who best fit the criteria of the available scholarships.
              </p>
              
              <p className="text-gray-900">
                Committee members independently review all applications and meet in person to confidentially discuss and select the awardees; always a difficult assignment. Because of the limited number of FHS Alumni Scholarships, FHS students are also encouraged to apply for scholarships available from the Knox County Foundation.
              </p>
              
              <p className="text-gray-900">
                The Scholarship Committee members are the current Officers of the FHS Alumni Association and other community volunteers. If you are interested in volunteering to join the Scholarship Committee, please contact Jill Spearman Macklin: <a href="mailto:jspear10@hotmail.com" className="text-school-red hover:text-red-800">jspear10@hotmail.com</a>.
              </p>
              
              <p className="text-gray-900">
                The Scholarship Awardees are announced each year at the FHS Senior Awards Night held in May.
              </p>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Current members of the Scholarship Committee:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-900">Jill Spearman Macklin</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-900">Betty Lozier Weller</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-900">Chris Fearn Well</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-900">John Wareham</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-900">Tina Bowers Doup</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-900">Kelly Goff Castle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
} 