import Link from 'next/link';
import Image from 'next/image';

export default function Funds() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-school-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Funds</h1>
              <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-xl">
                Supporting various initiatives that benefit Fredericktown students and the community.
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

      {/* Funds Overview */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-red prose-lg mx-auto mb-16">
          <h2>Investing in Our Community's Future</h2>
          <p className="text-gray-800">
            The Fredericktown Alumni Association manages several funds that support different aspects 
            of our mission. Each fund has a specific purpose and focus, allowing donors to direct their 
            contributions to the areas they are most passionate about.
          </p>
          <p className="text-gray-800">
            Our funds are carefully managed to ensure long-term sustainability while maximizing their 
            impact on current students and the community. The Alumni Association Board of Directors 
            oversees all funds and ensures that distributions align with donor intent and our mission.
          </p>
        </div>

        {/* Fund Categories */}
        <h2 className="text-3xl font-bold text-center mb-12">Our Primary Funds</h2>
        
        <div className="space-y-16">
          {/* Scholarship Fund */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-school-red md:w-48 flex items-center justify-center py-6 md:py-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">Scholarship Fund</h3>
                <p className="mt-4 text-gray-800">
                  The Scholarship Fund is our largest and most active fund, providing financial 
                  assistance to deserving Fredericktown graduates pursuing higher education. 
                  Each year, we award multiple scholarships based on academic achievement, 
                  leadership, community service, and financial need.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="bg-gray-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-gray-800">Fund Balance: $450,000</span>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-gray-800">2023 Distributions: $35,000</span>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-gray-800">Established: 1968</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/scholarships" className="text-school-red hover:text-red-800 font-medium">
                    Learn more about our scholarships →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Educational Enrichment Fund */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-school-red md:w-48 flex items-center justify-center py-6 md:py-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">Educational Enrichment Fund</h3>
                <p className="mt-4 text-gray-800">
                  The Educational Enrichment Fund supports special educational projects, 
                  teacher grants, and learning opportunities that go beyond the standard 
                  curriculum. This fund helps provide resources for innovative teaching 
                  methods, educational technology, field trips, and special programs that 
                  enhance the learning experience for Fredericktown students.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="bg-gray-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-gray-800">Fund Balance: $125,000</span>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-gray-800">2023 Distributions: $12,000</span>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-gray-800">Established: 1992</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Alumni Engagement Fund */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-school-red md:w-48 flex items-center justify-center py-6 md:py-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">Alumni Engagement Fund</h3>
                <p className="mt-4 text-gray-800">
                  The Alumni Engagement Fund supports activities that connect alumni with 
                  each other and with current students. This fund helps finance reunions, 
                  networking events, mentorship programs, and communication efforts that 
                  maintain strong ties among alumni and between generations of Fredericktown 
                  students.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="bg-gray-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-gray-800">Fund Balance: $75,000</span>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-gray-800">2023 Distributions: $8,500</span>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-gray-800">Established: 2005</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Historical Preservation Fund */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-school-red md:w-48 flex items-center justify-center py-6 md:py-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">Historical Preservation Fund</h3>
                <p className="mt-4 text-gray-800">
                  The Historical Preservation Fund supports efforts to preserve and share 
                  the history of Fredericktown schools and its alumni. This fund helps 
                  digitize yearbooks, maintain archives, create historical displays, and 
                  document the stories and achievements of past students and teachers.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="bg-gray-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-gray-800">Fund Balance: $50,000</span>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-gray-800">2023 Distributions: $5,000</span>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-gray-800">Established: 2010</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/yearbooks" className="text-school-red hover:text-red-800 font-medium">
                    Explore our digitized yearbooks →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scholarship Fund FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Scholarship Fund FAQ</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
            <div className="prose prose-lg mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">What is the Scholarship Fund?</h4>
                  <p className="text-gray-800">
                    The Fredericktown High School Alumni Association Scholarship Fund is a Permanent Endowment Fund, 
                    established for the purpose of guaranteeing scholarships for graduates of FHS. Only the growth 
                    on the principal will be used for awarding scholarships; therefore, it is a "gift that keeps on 
                    giving — forever!".
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Who is eligible for a scholarship?</h4>
                  <p className="text-gray-800">
                    Scholarships are awarded to graduates of FHS.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">How are the Awards made?</h4>
                  <p className="text-gray-800">
                    Students complete an application available at the School Guidance Office. New Awards are made 
                    each year by The Scholarship Committee who manages the Awards and the Renewals.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">How many Awards are there? What is the size of the Awards?</h4>
                  <p className="text-gray-800">
                    Our motto is "More and Larger Scholarships – Every Year!" As new gifts are received the size and 
                    number of scholarships will increase. See the latest Annual Report for details on the current number 
                    of awards.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">How are Gifts recognized?</h4>
                  <p className="text-gray-800">
                    All Gifts help change lives and are appreciated. Every gift is acknowledged with a thank you note 
                    and tax receipt. Also, all gifts made during the year are listed in the Alumni Banquet Program as follows:
                  </p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h5 className="font-semibold">Annual Recognition</h5>
                      <ul className="mt-2 space-y-2">
                        <li><span className="font-medium">Freddie:</span> &lt;$100</li>
                        <li><span className="font-medium">Century:</span> $100+</li>
                        <li><span className="font-medium">Silver:</span> $250+</li>
                        <li><span className="font-medium">Gold:</span> $500+</li>
                        <li><span className="font-medium">Platinum:</span> $1,000+</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h5 className="font-semibold">Permanent Recognition</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        "Founder" gifts cumulating to $1,000 or greater are permanently listed on
                        the Permanent Donor Recognition Plaque in the School Entrance Lobby:
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li><span className="font-medium">Founder:</span> $1,000+</li>
                        <li><span className="font-medium">Silver Founder:</span> $2,500+</li>
                        <li><span className="font-medium">Gold Founder:</span> $5,000+</li>
                        <li><span className="font-medium">Platinum Founder:</span> $10,000+</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Are there "naming" opportunities for scholarships?</h4>
                  <p className="text-gray-800">
                    Yes, donors making gifts cumulating to $10,000 or greater have the opportunity to "Name" a scholarship. 
                    Contact any member of the Fundraising Committee for details.
                  </p>
                  <div className="mt-4">
                    <Link href="/scholarships" className="text-school-red hover:text-red-800 font-medium">
                      Learn more about Named Scholarships →
                    </Link>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">How else other than cash can I give to the Scholarship Fund?</h4>
                  <p className="text-gray-800">
                    There are many ways to make a tax effective charitable gift to the Fund, both during life and at death. 
                    Consider consulting with an attorney or financial advisor to Bequest in your will; make Real Estate gifts, 
                    commercial buildings, land and houses; gift stocks, bonds, IRAs, or other securities; Life insurance: 
                    a portion of a death benefit can be assigned to the endowment fund.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">What is the suggested wording for a bequest in a will?</h4>
                  <p className="text-gray-800">
                    "I bequeath the sum of $_____ from (or ___% of) my estate to the Fredericktown High School Alumni Association 
                    Scholarship Fund C/O Knox County Foundation, P. O. Box 309, Mount Vernon, Ohio 43050-0309."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Annual Reports Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Annual Reports</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-8">
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-800 mb-6">
                The Fredericktown Alumni Association publishes annual reports detailing the performance of our scholarship funds, 
                recognition of donors, and impact of our scholarships. These reports provide transparency and accountability for 
                our stewardship of donated funds.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="font-bold text-lg mb-2">8th Annual Report</h4>
                  <p className="text-sm text-gray-500 mb-4">December 31, 2022</p>
                  <a href="#" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800">
                    Download PDF
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="font-bold text-lg mb-2">7th Annual Report</h4>
                  <p className="text-sm text-gray-500 mb-4">December 31, 2021</p>
                  <a href="#" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800">
                    Download PDF
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="font-bold text-lg mb-2">6th Annual Report</h4>
                  <p className="text-sm text-gray-500 mb-4">April 2021</p>
                  <a href="#" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800">
                    Download PDF
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="font-bold text-lg mb-2">5th Annual Report</h4>
                  <p className="text-sm text-gray-500 mb-4">June 2020</p>
                  <a href="#" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800">
                    Download PDF
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="font-bold text-lg mb-2">4th Annual Report</h4>
                  <p className="text-sm text-gray-500 mb-4">June 2019</p>
                  <a href="#" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800">
                    Download PDF
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="font-bold text-lg mb-2">View More Reports</h4>
                  <p className="text-sm text-gray-500 mb-4">2015-2018</p>
                  <a href="#" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800">
                    View Archive
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-16 bg-school-red text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Support Our Funds</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Your contribution to any of our funds helps ensure that we can continue supporting 
            Fredericktown students and preserving our shared history for generations to come.
          </p>
          <a 
            href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-school-red bg-white hover:bg-gray-100"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
} 