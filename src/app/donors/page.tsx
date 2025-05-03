import Link from 'next/link';
import Image from 'next/image';

export default function Donors() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-school-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
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
          <h2>Make a Difference</h2>
          <p className="text-gray-800">
            The Fredericktown Alumni Association relies on the generosity of donors like you to fund 
            scholarships, maintain alumni connections, and support educational initiatives. Your 
            contribution, regardless of size, makes a significant impact on the lives of students 
            and helps preserve the legacy of Fredericktown.
          </p>
          <p className="text-gray-800">
            All donations to the Fredericktown Alumni Association are tax-deductible and go directly 
            to supporting our mission. Our board of directors ensures that your contributions are 
            used efficiently and effectively to benefit students and alumni.
          </p>
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

        {/* Donor Recognition */}
        <div className="mb-16 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Donor Recognition</h2>
          <p className="text-center text-gray-800 max-w-3xl mx-auto mb-12">
            There are two complementary classifications of Donor Recognition – Founding Donors and Annual Sustaining Donors.
            In addition, gifts "In Memory of" or "In Honor of" are also recognized.
          </p>
          
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Founding Donors</h3>
              <p className="text-gray-800 mb-6 text-center">
                Donors who make gifts cumulating to $1,000 or greater during their lifetime are Founding Donors
                listed on the Permanent Donor Recognition Plaque in the School Entrance Lobby and in the Annual Report.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="bg-gray-50 p-5 rounded-lg text-center border-t-4 border-school-red">
                  <h4 className="font-bold text-lg mb-2">Founder</h4>
                  <p className="text-xl text-school-red font-semibold">$1,000+</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg text-center border-t-4 border-school-red">
                  <h4 className="font-bold text-lg mb-2">Silver Founder</h4>
                  <p className="text-xl text-school-red font-semibold">$2,500+</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg text-center border-t-4 border-school-red">
                  <h4 className="font-bold text-lg mb-2">Gold Founder</h4>
                  <p className="text-xl text-school-red font-semibold">$5,000+</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg text-center border-t-4 border-school-red">
                  <h4 className="font-bold text-lg mb-2">Platinum Founder</h4>
                  <p className="text-xl text-school-red font-semibold">$10,000+</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Annual Sustaining Donors</h3>
              <p className="text-gray-800 mb-6 text-center">
                All gifts made during the year are listed in the Alumni Banquet Program at the following levels:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-bold mb-2">Freddie</h4>
                  <p className="text-school-red font-semibold">&lt;$100</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-bold mb-2">Century</h4>
                  <p className="text-school-red font-semibold">$100+</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-bold mb-2">Silver</h4>
                  <p className="text-school-red font-semibold">$250+</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-bold mb-2">Gold</h4>
                  <p className="text-school-red font-semibold">$500+</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-bold mb-2">Platinum</h4>
                  <p className="text-school-red font-semibold">$1,000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Class Legacy Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">FHS Class Legacy</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-800 mb-8 text-center max-w-3xl mx-auto">
              Many graduating classes choose to create a collective legacy through donations to the 
              Fredericktown Alumni Association. Below we recognize the classes that have made significant contributions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sample class donations - these would be replaced with actual data */}
              {[
                { name: "Class of 1961", amount: "Platinum Founder" },
                { name: "Class of 1959", amount: "Gold Founder" },
                { name: "Class of 1958", amount: "Gold Founder" },
                { name: "Class of 1947", amount: "Silver Founder" },
                { name: "Class of 1975", amount: "Founder" },
                { name: "Class of 1965", amount: "Founder" }
              ].map((classItem, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-bold text-lg text-school-red mb-2">{classItem.name}</h4>
                  <p className="text-gray-700">{classItem.amount}</p>
                </div>
              ))}
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