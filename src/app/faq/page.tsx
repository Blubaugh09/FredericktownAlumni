import Link from 'next/link';
import Image from 'next/image';

export default function FAQ() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-school-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-16  sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">FAQ's</h1>
              <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-xl">
                Frequently asked questions about scholarships, donations, and alumni resources.
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

        {/* How to Donate Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">How to Donate</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
            <div className="prose prose-lg mx-auto">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Online Donations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Knox County Foundation</h4>
                      <p className="text-gray-800 mb-4">Donate directly through the Knox County Foundation website</p>
                      <a 
                        href="https://knoxcf.org/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                      >
                        Visit Knox County Foundation
                      </a>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">FHS Alumni Website</h4>
                      <p className="text-gray-800 mb-4">Donate through our official alumni website</p>
                      <a 
                        href="https://FredericktownAlumni.org" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                      >
                        Visit Alumni Website
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">By Mail</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-800 mb-4">
                      <strong>Make check payable to:</strong> "FHS Alumni Scholarship Fund"
                    </p>
                    <p className="text-gray-800 mb-4">
                      <strong>Mail to:</strong><br />
                      Knox County Foundation<br />
                      P.O. Box 309<br />
                      Mount Vernon, OH 43050-0309
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Provide Information</h3>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-800">
                      In either donation method, include info on how you want to direct your donation. You can use the 
                      "Additional Notes" section of your online donation or the "Memo line" of your check and/or enclose 
                      a note to explain the purpose of your donation such as your class year, the Scholarship you want to 
                      support, or who you are "Remembering" or "Honoring."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Where to Find Everything Else Section */}
        <div className="mt-16 bg-school-red text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Where to Find Everything Else</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            FHS TouchPros is the comprehensive hub for all FHS information - your one-stop destination for students, staff, families, alumni, and fans.
          </p>
          <a 
            href="https://fredericktown.touchpros.com/Home2" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-school-red bg-white hover:bg-gray-100 mb-6"
          >
            Visit FHS TouchPros
          </a>
          <div className="mt-6 pt-4 border-t border-white/30 max-w-4xl mx-auto">
            <p className="text-lg mb-4">What you'll find on FHS TouchPros:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">Recognition & Awards</h4>
                <ul className="space-y-1 text-sm text-white/90">
                  <li>• All Named Scholarships and Awardees</li>
                  <li>• Distinguished Alumni</li>
                  <li>• Athletic Hall of Fame Members</li>
                  <li>• Fans of the Year</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Academic Excellence</h4>
                <ul className="space-y-1 text-sm text-white/90">
                  <li>• Valedictorians</li>
                  <li>• Salutatorians</li>
                  <li>• Alumni Listings by Year</li>
                  <li>• All Yearbooks</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Heritage & Community</h4>
                <ul className="space-y-1 text-sm text-white/90">
                  <li>• Veterans</li>
                  <li>• "Freddies Helping Freddies" Reports</li>
                  <li>• School History</li>
                  <li>• And much more!</li>
                </ul>
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="font-bold text-lg mb-2">8th Annual Report</h4>
                  <p className="text-sm text-gray-500 mb-4">June 2023</p>
                  <a 
                    href="/pdfs/Annual_Reports/2023-06-18-FHS-Alumni-8th-Annual-Report-Option-2-V11.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                  >
                    View Report
                  </a>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="font-bold text-lg mb-2">7th Annual Report</h4>
                  <p className="text-sm text-gray-500 mb-4">March 2022</p>
                  <a 
                    href="/pdfs/Annual_Reports/2022-Alumni-Scholarships-7th-Annual-Report-V10-2.03.2022.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                  >
                    View Report
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="font-bold text-lg mb-2">6th Annual Report</h4>
                  <p className="text-sm text-gray-500 mb-4">April 2021</p>
                  <a 
                    href="/pdfs/Annual_Reports/2021-04-FHS-6th-Annual-Report.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                  >
                    View Report
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="font-bold text-lg mb-2">5th Annual Report</h4>
                  <p className="text-sm text-gray-500 mb-4">June 2020</p>
                  <a 
                    href="/pdfs/Annual_Reports/2020-06-FHS-5th-Annual-Report.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                  >
                    View Report
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="font-bold text-lg mb-2">4th Annual Report</h4>
                  <p className="text-sm text-gray-500 mb-4">June 2019</p>
                  <a 
                    href="/pdfs/Annual_Reports/2019-06-FHS-4th-Annual-Report.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                  >
                    View Report
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="font-bold text-lg mb-2">3rd Annual Report</h4>
                  <p className="text-sm text-gray-500 mb-4">June 2018</p>
                  <a 
                    href="/pdfs/Annual_Reports/2018-06-FHS-3rd-Annual-Report.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                  >
                    View Report
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="font-bold text-lg mb-2">2nd Annual Report</h4>
                  <p className="text-sm text-gray-500 mb-4">June 2017</p>
                  <a 
                    href="/pdfs/Annual_Reports/2017-06-FHS-2nd-Annual-Report.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                  >
                    View Report
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="font-bold text-lg mb-2">1st Annual Report</h4>
                  <p className="text-sm text-gray-500 mb-4">June 2016</p>
                  <a 
                    href="/pdfs/Annual_Reports/2016-06-FHS-1st-Annual-Report.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                  >
                    View Report
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
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-school-red bg-white hover:bg-gray-100 mb-6"
          >
            Donate Online
          </a>
          <div className="mt-6 pt-4 border-t border-white/30 max-w-3xl mx-auto">
            <p className="text-lg mb-2">Alternatively, make your check payable to FHS ALUMNI SCHOLARSHIP FUND.</p>
            <p className="text-lg">Mail to: Knox County Foundation, P.O. Box 309, Mount Vernon, OH 43050-0309.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 