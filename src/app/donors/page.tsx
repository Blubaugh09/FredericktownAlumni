import Link from 'next/link';
import Image from 'next/image';

export default function Donors() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-school-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-16  sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Support Our Mission</h1>
              <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-xl">
                Your generosity helps shape the future of Fredericktown students.
              </p>
              <div className="mt-8">
                <a 
                  href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-school-red bg-white hover:bg-gray-100 shadow-md"
                >
                  Donate Now
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
      </div>

      {/* Donor Information */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-red prose-lg mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Make a Difference</h2>
          <br />
          <p className="text-gray-800">
            The Fredericktown Alumni Association relies on the generosity of donors like you to fund 
            scholarships, maintain alumni connections, and support educational initiatives. Your 
            contribution, regardless of size, makes a significant impact on the lives of students 
            and helps preserve the legacy of Fredericktown.
          </p>
          <br />
          <p className="text-gray-800">
            All donations to the Fredericktown Alumni Association are tax-deductible and go directly 
            to supporting our mission. Our board of directors ensures that your contributions are 
            used efficiently and effectively to benefit students and alumni.
          </p>
          <br />
          <p className="text-gray-800 font-medium mt-6">
            Our Donors are the "Freddies Helping Freddies" who are changing lives of the next generations 
            of Freddies with their generosity. Every gift large or small makes a difference and is 
            acknowledged with a thank you note and tax receipt.
          </p>
        </div>

        {/* Ways to Give Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Ways to Give</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Way 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-12 bg-school-red"></div>
              <div className="px-6 py-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">One-Time Donation</h3>
                <p className="text-gray-800 mb-6">
                  Make a single contribution of any amount to support our scholarships and programs.
                </p>
                <a 
                  href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                >
                  Donate Now
                </a>
              </div>
            </div>
            
            {/* Way 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-12 bg-school-red"></div>
              <div className="px-6 py-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Annual Giving</h3>
                <p className="text-gray-800 mb-6">
                  Become a recurring donor with an annual gift to provide sustainable support for our mission.
                </p>
                <a 
                  href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                >
                  Join Annual Giving
                </a>
              </div>
            </div>
            
            {/* Way 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-12 bg-school-red"></div>
              <div className="px-6 py-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Named Scholarship</h3>
                <p className="text-gray-800 mb-6">
                  Establish a named scholarship to honor a loved one or create a lasting legacy.
                </p>
                <a 
                  href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>



        {/* Class Legacy Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">FHS Class Legacy</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="prose prose-red prose-lg max-w-none">
              <p className="text-gray-800 mb-6">
                With time and experience, most Freddie grads come to appreciate what a blessing it was to grow up in Fredericktown and receive their education in the local school system. These grads want to show their appreciation to the people and environment that made their positive experiences possible.
              </p>
              
              <p className="text-gray-800 mb-6">
                To show their gratitude, many Freddies decide to team up with their Classmates, on the occasions of their Class Reunions, to do something special by running a <strong>"Freddies Helping Freddies"</strong> campaign for their Class.
              </p>
              
              <div className="bg-gray-50 border-l-4 border-school-red p-6 my-8 rounded-r-lg">
                <p className="text-gray-800 mb-4">
                  These Class Reunion campaigns typically set their goals on <strong>"100% participation"</strong> rather than the "donation amount"; usually suggesting an individual gift corresponding to their graduation year—e.g.;
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>$19.61</strong> for the Class of 1961</li>
                  <li><strong>$19.62</strong> for Class of 1962</li>
                  <li>And so forth...</li>
                </ul>
                <p className="text-gray-800 mt-4">
                  Larger gifts are encouraged, of course, but the primary goal is maximum teamwork with <strong>"100% participation"</strong> being the <em>"Holy Grail"</em>.
                </p>
              </div>
              
              <p className="text-gray-800 mb-6">
                Classes that run these campaigns are always surprised by the power of their teamwork and the amount they raise. Class members always say, <em>"this is the best thing we have ever done as a class - we totally bonded to our common goal!"</em>.
              </p>
              
              <p className="text-gray-800 mb-6">
                As more and more Classes began to run campaigns, a scorecard was created to promote communication, generate enthusiasm and establish friendly competition among the Classes. That scorecard became known as the <strong>"Class Challenge"</strong>.
              </p>
              
              <div className="bg-school-red text-white p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4 text-center">Named Scholarships from Class Challenge</h3>
                <p className="text-center mb-6">
                  To date the Class Challenge has resulted in four "Named Scholarships":
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/20 p-4 rounded-lg text-center">
                    <h4 className="font-bold">Class of 1947</h4>
                    <p className="text-sm mt-1">Named Scholarship</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg text-center">
                    <h4 className="font-bold">Class of 1958</h4>
                    <p className="text-sm mt-1">Named Scholarship</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg text-center">
                    <h4 className="font-bold">Class of 1959</h4>
                    <p className="text-sm mt-1">Named Scholarship</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg text-center">
                    <h4 className="font-bold">Class of 1961</h4>
                    <p className="text-sm mt-1">Named Scholarship</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-800 mb-6">
                Not even one of these Classes ever thought their Class would raise more than $10,000 and be able to Name a scholarship.
              </p>
              
              <p className="text-gray-800 mb-8">
                But just by trying, amazing things began to happen, proving once again the Fredericktown motto <strong><em>"It can be done in a small town"</em></strong>.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-school-red mb-3">For Class Leaders</h3>
                <p className="text-gray-800">
                  Class leaders that decide to run a <strong>"Freddies Helping Freddies"</strong> campaign as a part of their Class Reunion experience, can count on the Fundraising Committee for information, materials and advice.
                </p>
                <div className="mt-4">
                  <a 
                    href="mailto:freddiealumni@yahoo.com" 
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                  >
                    Contact Fundraising Committee
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Honor & Memory Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">In Honor & In Memory</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-800 mb-8 text-center max-w-3xl mx-auto">
              Many donors choose to make gifts in honor or in memory of loved ones, teachers, mentors, or classmates.
              These special tributes are acknowledged in our annual reports and communications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-center mb-6 text-school-red">In Honor Of</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="italic text-gray-700 text-center">
                    "I'm making this donation in honor of Ms. Smith, who taught English at Fredericktown for 30 years 
                    and inspired countless students to pursue their dreams."
                  </p>
                  <p className="text-right mt-4 text-gray-800 font-medium">— John Wilson, Class of 1983</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-center mb-6 text-school-red">In Memory Of</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="italic text-gray-700 text-center">
                    "This gift is made in loving memory of our classmate Jennifer Brown, who exemplified the spirit of 
                    Fredericktown with her kindness, intelligence, and dedication to service."
                  </p>
                  <p className="text-right mt-4 text-gray-800 font-medium">— Class of 1992</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <a 
                href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
              >
                Make a Tribute Gift
              </a>
            </div>
          </div>
        </div>

        {/* Permanent Donors Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Permanent Donors (2015-Present)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6 text-center bg-school-red text-white py-2 rounded-t-lg">Platinum Founders ($10,000+)</h3>
              <div className="bg-white rounded-b-lg shadow-md p-6 border border-gray-200">
                <ul className="space-y-2 text-gray-800">
                  <li>Ula Weller '35 Leedy Estate</li>
                  <li>Richard K. Wilson '65</li>
                  <li>William & Marietta Mahaffey Fund</li>
                  <li>Class of 1961</li>
                  <li>Class of 1947</li>
                  <li>Otho S. & Iris Jeanne Eyster Estate</li>
                  <li>Phillips-Frye Family Foundation</li>
                  <li>Gold Star Parents Association</li>
                  <li>Willie Davis Foundation</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-center bg-school-red text-white py-2 rounded-t-lg">Gold Founders ($5,000+)</h3>
              <div className="bg-white rounded-b-lg shadow-md p-6 border border-gray-200">
                <ul className="space-y-2 text-gray-800">
                  <li>Class of 1958</li>
                  <li>Class of 1959</li>
                  <li>Carmon & Betty Weller Family</li>
                  <li>Dean & Jane Streby</li>
                  <li>Lori Ackerman Memorial Fund</li>
                  <li>Rachel A. Gregg Foundation</li>
                  <li>FHS Distinguished Hall of Honor</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-center bg-school-red text-white py-2 rounded-t-lg">Silver Founders ($2,500+)</h3>
              <div className="bg-white rounded-b-lg shadow-md p-6 border border-gray-200">
                <ul className="space-y-2 text-gray-800">
                  <li>Clyde & Edna Boyd Estate</li>
                  <li>Janet Hadley '59 Mather</li>
                  <li>Jack & Jean Carter Family</li>
                  <li>Ruth E. Auker Fund</li>
                  <li>Morris & Sue James Family</li>
                  <li>Catherine Zagula Trust</li>
                  <li>Rusty & Mary Dalrymple Family</li>
                  <li>David L. Dalrymple Memorial</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Founders ($1,000+)</h3>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-1 text-gray-800">
              <p>Robert & Anne Williams</p>
              <p>Sandra Johnson '67</p>
              <p>Michael Thompson Family</p>
              <p>Class of 1975</p>
              <p>Class of 1980</p>
              <p>James & Elizabeth Miller</p>
              <p>Fredericktown Business Association</p>
              <p>Patricia Wright Memorial</p>
              <p>Thomas & Susan Anderson</p>
              <p>Mark & Carol Davis</p>
              <p>Robert Hall '62</p>
              <p>Barbara Wilson Foundation</p>
              <p>Fredericktown Community Fund</p>
              <p>Edward & Mary Thompson</p>
              <p>Class of 1965</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-school-red text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Support Our Mission?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Your contribution today will help create opportunities for the students of tomorrow.
          </p>
          <a 
            href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-school-red bg-white hover:bg-gray-100"
          >
            Make a Donation
          </a>
        </div>
      </div>
    </div>
  );
} 