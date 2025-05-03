import Link from 'next/link';
import Image from 'next/image';

export default function Awardees() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-school-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Scholarship Awardees</h1>
              <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-xl">
                Celebrating the achievements of our scholarship recipients.
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

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-red prose-lg mx-auto mb-16">
          <h2>Investing in Future Leaders</h2>
          <p className="text-gray-800">
            Each year, the Fredericktown Alumni Association is proud to award scholarships to 
            deserving students who demonstrate academic excellence, leadership, and a commitment 
            to community service. Our scholarship recipients represent the best of Fredericktown 
            and carry our legacy forward as they pursue their educational and career goals.
          </p>
          <p className="text-gray-800">
            On this page, we celebrate the achievements of our scholarship recipients and 
            recognize their hard work and dedication. We are honored to play a small role 
            in their educational journey and are excited to see the impact they will make 
            in their chosen fields and communities.
          </p>
        </div>

        {/* Current Year's Recipients */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">2023 Scholarship Recipients</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Recipient 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Emma Johnson</h3>
                <p className="text-school-red mb-3">Alumni Merit Scholarship - $2,500</p>
                <p className="text-gray-800 mb-4">
                  Emma will be attending Ohio State University to study Computer Science. 
                  She served as class president and was captain of the debate team.
                </p>
                <div className="text-sm text-gray-700">
                  <p><strong>Activities:</strong> Student Council, Debate Team, National Honor Society</p>
                  <p><strong>Future Plans:</strong> Computer Science & Artificial Intelligence</p>
                </div>
              </div>
            </div>
            
            {/* Recipient 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Ramirez</h3>
                <p className="text-school-red mb-3">Community Service Scholarship - $1,500</p>
                <p className="text-gray-800 mb-4">
                  Michael will be attending Miami University to study Environmental Science. 
                  He organized community clean-up events and volunteered over 200 hours.
                </p>
                <div className="text-sm text-gray-700">
                  <p><strong>Activities:</strong> Environmental Club, Volunteer Corps, Soccer Team</p>
                  <p><strong>Future Plans:</strong> Environmental Conservation & Policy</p>
                </div>
              </div>
            </div>
            
            {/* Recipient 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Sophia Chen</h3>
                <p className="text-school-red mb-3">STEM Excellence Scholarship - $2,000</p>
                <p className="text-gray-800 mb-4">
                  Sophia will be attending Case Western Reserve University to study Biomedical Engineering. 
                  She won first place in the state science fair with her biomedical research project.
                </p>
                <div className="text-sm text-gray-700">
                  <p><strong>Activities:</strong> Science Olympiad, Math Club, Research Internship</p>
                  <p><strong>Future Plans:</strong> Medical Devices & Research</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past Recipients */}
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Past Recipients</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">2022</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Scholarship
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        University
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Field of Study
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Alex Williams
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Alumni Merit
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        University of Cincinnati
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Architecture
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Jasmine Patel
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        STEM Excellence
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Ohio State University
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Chemistry
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Tyler Rodriguez
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Community Service
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Kent State University
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Social Work
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">2021</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Scholarship
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        University
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Field of Study
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Sarah Nguyen
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Alumni Merit
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Miami University
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Business Administration
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        David Lee
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        STEM Excellence
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Purdue University
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Mechanical Engineering
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Emily Thompson
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Community Service
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Bowling Green State
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Education
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/awardees/archive" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800">
              View Complete Archives
            </Link>
          </div>
        </div>

        {/* Alumni Updates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Alumni Updates</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Update 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Dr. Mark Anderson</h3>
                    <p className="text-sm text-gray-700">Alumni Merit Scholarship, 2010</p>
                  </div>
                </div>
                <p className="text-gray-800 mb-4">
                  "The scholarship I received from the Fredericktown Alumni Association was 
                  instrumental in helping me pursue my medical degree. I'm now a pediatrician 
                  at Cincinnati Children's Hospital, where I'm able to make a difference in 
                  children's lives every day."
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Then:</strong> Ohio State University, Pre-Med<br />
                  <strong>Now:</strong> Pediatrician, Cincinnati Children's Hospital
                </p>
              </div>
            </div>
            
            {/* Update 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Rebecca Taylor</h3>
                    <p className="text-sm text-gray-700">STEM Excellence Scholarship, 2015</p>
                  </div>
                </div>
                <p className="text-gray-800 mb-4">
                  "The STEM scholarship supported my education in environmental engineering. 
                  I now work on sustainable infrastructure projects across the Midwest. 
                  I'm grateful for the foundation the Fredericktown Alumni Association 
                  helped me build."
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Then:</strong> Purdue University, Environmental Engineering<br />
                  <strong>Now:</strong> Project Engineer, Green Infrastructure Solutions
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/awardees/share-your-story" className="text-school-red hover:text-red-800 font-medium">
              Share your scholarship story →
            </Link>
          </div>
        </div>

        {/* Apply CTA */}
        <div className="bg-school-red text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Apply for a Scholarship</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            If you're a Fredericktown student pursuing higher education, we encourage 
            you to apply for one of our scholarships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/scholarships" 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-school-red bg-white hover:bg-gray-100"
            >
              View Scholarship Opportunities
            </Link>
            <a 
              href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10"
            >
              Support Our Scholarships
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 