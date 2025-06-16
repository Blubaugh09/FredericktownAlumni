import Link from 'next/link';
import Image from 'next/image';

export default function Awardees() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-school-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-16  sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Scholarship Awardees</h1>
              <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-xl">
                Celebrating the achievements of our scholarship recipients.
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

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-red prose-lg mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Investing in Future Leaders</h2>
          <br />
          <p className="text-gray-800">
            Each year, the Fredericktown Alumni Association is proud to award scholarships to 
            deserving students who demonstrate academic excellence, leadership, and a commitment 
            to community service. Our scholarship recipients represent the best of Fredericktown 
            and carry our legacy forward as they pursue their educational and career goals.
          </p>
          <br />
          <p className="text-gray-800">
            On this page, we celebrate the achievements of our scholarship recipients and 
            recognize their hard work and dedication. We are honored to play a small role 
            in their educational journey and are excited to see the impact they will make 
            in their chosen fields and communities.
          </p>
        </div>



        {/* Past Recipients */}
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Past Recipients</h2>
          
          <div className="max-w-5xl mx-auto">
            {/* Historical Recipients Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2016</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Emily Carney</li>
                  <li>Austin Geiger</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2015</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Tyler Ruhl</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2014</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Kaitlyn Frazier</li>
                  <li>Hannah Bowman</li>
                  <li>Sam Armstrong</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2013</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Bethany Wittman</li>
                  <li>Natalee Johnson</li>
                  <li>Logan</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2011</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Shelbi Guy</li>
                  <li>Jordan Radel</li>
                  <li>Austin Hoeflich</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2010</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Gabrielle Hoeflich</li>
                  <li>Dannielle Goeppinger</li>
                  <li>C. J. Ruhl</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2009</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Amber Brady</li>
                  <li>Brittany Fry</li>
                  <li>Kasey Berry</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2008</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Curtis Ashcraft</li>
                  <li>Sammi Lepley</li>
                  <li>Merrit Zollars</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2007</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Eliza Wiggins</li>
                  <li>Kevin Berry</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2006</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Troy Bell Jr.</li>
                  <li>Emily Roe</li>
                  <li>T.J. Cramer</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2005</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Jeff Blubaugh</li>
                  <li>Shawna Dye</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2004</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Ryan Goeppinger</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2003</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Nick Cline</li>
                  <li>Zachary Grimm</li>
                  <li>Ryan Shoemaker</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2002</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Jeffrey Dickerson</li>
                  <li>Chip Sargent</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2001</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Todd Stephens</li>
                  <li>Becky Barkschat</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">2000</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Scott Cothren</li>
                  <li>Erin Dilley</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">1999</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Sarah Beheler</li>
                  <li>Gabe Christopher</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">1998</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Michael Bechtel</li>
                  <li>Dick Hamey</li>
                  <li>Jeremy Werner</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">1997</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Tamara Molnar</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">1996</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Megan Price</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">1995</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Jeremiah Friend</li>
                  <li>Richard Blakesley</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">1994</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>Jodi Frazier</li>
                  <li>Jeff Strong</li>
                </ul>
              </div>

            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-lg">
              Over <span className="font-bold text-school-red">30 years</span> of supporting Fredericktown students
            </p>
          
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