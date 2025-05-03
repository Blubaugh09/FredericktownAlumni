import Link from 'next/link';
import Image from 'next/image';

export default function Scholarships() {
  const namedScholarships = [
    {
      name: "Ula Weller '35 Leedy",
      slug: "ula-weller-leedy",
      description: "Established to honor Ula Weller Leedy, Class of 1935. This scholarship supports students with demonstrated academic achievement and community involvement."
    },
    {
      name: "Richard K. Wilson '65",
      slug: "richard-k-wilson",
      description: "Created in memory of Richard K. Wilson, Class of 1965. This scholarship is awarded to students pursuing higher education with a focus on business studies."
    },
    {
      name: "Dr. William L. & Marietta B. Mahaffey",
      slug: "william-marietta-mahaffey",
      description: "Honors the legacy of Dr. William and Marietta Mahaffey. Supports students pursuing careers in education or healthcare fields."
    },
    {
      name: "Class of 1961",
      slug: "class-of-1961",
      description: "Established by the Class of 1961 to support future generations of Fredericktown students in their educational pursuits."
    },
    {
      name: "Class of 1947",
      slug: "class-of-1947",
      description: "Created by the Class of 1947 to celebrate their legacy and provide opportunities for academic advancement to Fredericktown graduates."
    },
    {
      name: "Otho S. '37 & Iris Jeanne Moree '38 Eyster",
      slug: "otho-iris-eyster",
      description: "Honors the Eyster family's commitment to education. Supports students who demonstrate community service and academic excellence."
    },
    {
      name: "Phillips-Frye",
      slug: "phillips-frye",
      description: "Established to honor the Phillips and Frye families. This scholarship supports students with financial need pursuing college education."
    },
    {
      name: "Gold Star Parents",
      slug: "gold-star-parents",
      description: "Honors the families who have lost a son or daughter in military service. Awarded to students who demonstrate patriotism and service."
    },
    {
      name: "Class of 1958",
      slug: "class-of-1958",
      description: "Created by the Class of 1958 to support Fredericktown graduates in their pursuit of higher education and career goals."
    },
    {
      name: "Class of 1959 Honoring Julie Cochran Rogers",
      slug: "class-of-1959-julie-cochran-rogers",
      description: "Established by the Class of 1959 in honor of Julie Cochran Rogers. Supports students who embody her spirit of community service."
    },
    {
      name: "Carmon & Betty Weller & Family",
      slug: "carmon-betty-weller",
      description: "Honors the Weller family's commitment to education. Awarded to students pursuing studies in agriculture or related fields."
    },
    {
      name: "Willie Davis – 4 Scholarships",
      slug: "willie-davis",
      description: "Established by Willie Davis to provide four annual scholarships to Fredericktown graduates with outstanding academic and athletic achievement."
    },
    {
      name: "Dean & Jane Streby",
      slug: "dean-jane-streby",
      description: "Created in honor of Dean and Jane Streby. This scholarship supports students pursuing careers in education or community service."
    },
    {
      name: "Lori Ackerman Class of 1988",
      slug: "lori-ackerman",
      description: "Established in memory of Lori Ackerman, Class of 1988. Supports students who demonstrate her values of perseverance and dedication."
    },
    {
      name: "Rachel A. Gregg Women in STEM",
      slug: "rachel-gregg-stem",
      description: "Created to honor Rachel A. Gregg. This scholarship specifically supports young women pursuing education in STEM fields."
    },
    {
      name: "FHS Distinguished Hall of Honor",
      slug: "fhs-hall-of-honor",
      description: "Established to recognize and support students who exemplify the values and achievements of those in the Fredericktown Distinguished Hall of Honor."
    },
    {
      name: "Clyde & Edna Boyd",
      slug: "clyde-edna-boyd",
      description: "Honors the legacy of Clyde and Edna Boyd. Awarded to students who demonstrate strong work ethic and community involvement."
    },
    {
      name: "Janet Hadley '59 Mather",
      slug: "janet-hadley-mather",
      description: "Created in honor of Janet Hadley Mather, Class of 1959. Supports students with interests in arts, humanities, or community service."
    },
    {
      name: "Jack & Jean Carter Family",
      slug: "jack-jean-carter",
      description: "Established by the Carter family to support Fredericktown students pursuing higher education with demonstrated financial need."
    },
    {
      name: "Ruth E. Auker Women in STEM",
      slug: "ruth-auker-stem",
      description: "Honors Ruth E. Auker's contributions to education. This scholarship supports female students pursuing careers in STEM fields."
    },
    {
      name: "Morris & Sue James & Family",
      slug: "morris-sue-james",
      description: "Created by the James family to support students with academic excellence and community involvement from Fredericktown."
    },
    {
      name: "Catherine Zagula Women in STEM",
      slug: "catherine-zagula-stem",
      description: "Established to honor Catherine Zagula. Supports young women pursuing education and careers in science, technology, engineering, or mathematics."
    },
    {
      name: "Rusty & Mary Dalrymple & Family",
      slug: "rusty-mary-dalrymple",
      description: "Honors the Dalrymple family's commitment to education. Awarded to students who demonstrate leadership and community service."
    },
    {
      name: "David L. Dalrymple",
      slug: "david-dalrymple",
      description: "Created in memory of David L. Dalrymple. This scholarship supports students with interests in business, technology, or entrepreneurship."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-school-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Scholarships</h1>
              <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-xl">
                Supporting educational excellence and future generations of leaders.
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

      {/* Scholarship Information */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-red prose-lg mx-auto mb-16">
          <h2>Funding Tomorrow's Leaders</h2>
          <p>
            The Fredericktown Alumni Association is proud to offer scholarships to deserving students 
            who demonstrate academic excellence, leadership, and community involvement. 
            Through the generous donations of our alumni and supporters, we are able to provide financial 
            assistance to help students pursue their educational goals.
          </p>
          <p>
            Each year, our scholarship committee reviews applications and selects recipients based on 
            a combination of academic achievement, extracurricular activities, community service, 
            and financial need. We believe in investing in the future of our community by supporting 
            the educational aspirations of our young people.
          </p>
          <h3>Application Process</h3>
          <p>
            Applications for scholarships typically open in January and close in April of each year. 
            Students are notified of decisions by early May, and scholarships are awarded at the 
            annual graduation ceremony.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Available Scholarships</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Scholarship 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Alumni Merit Scholarship</h3>
              <div className="flex items-center mb-4">
                <div className="text-lg font-bold text-school-red">$2,500</div>
                <span className="mx-2 text-gray-500">•</span>
                <div className="text-sm text-gray-500">Annual</div>
              </div>
              <p className="text-gray-600 mb-6">
                Awarded to a graduating senior who demonstrates academic excellence, leadership, 
                and involvement in extracurricular activities.
              </p>
              <h4 className="text-lg font-semibold mb-2">Eligibility:</h4>
              <ul className="list-disc pl-5 mb-6 text-gray-600">
                <li>Minimum GPA of 3.5</li>
                <li>Acceptance to an accredited college or university</li>
                <li>Participation in at least two extracurricular activities</li>
                <li>Demonstrated leadership qualities</li>
              </ul>
              <div className="mt-auto">
                <Link href="/scholarships/apply" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          
          {/* Scholarship 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Community Service Scholarship</h3>
              <div className="flex items-center mb-4">
                <div className="text-lg font-bold text-school-red">$1,500</div>
                <span className="mx-2 text-gray-500">•</span>
                <div className="text-sm text-gray-500">Annual</div>
              </div>
              <p className="text-gray-600 mb-6">
                Awarded to a student who has made significant contributions to the community 
                through volunteer service and demonstrates a commitment to helping others.
              </p>
              <h4 className="text-lg font-semibold mb-2">Eligibility:</h4>
              <ul className="list-disc pl-5 mb-6 text-gray-600">
                <li>Minimum GPA of 3.0</li>
                <li>Acceptance to an accredited college, university, or vocational program</li>
                <li>Minimum of 100 hours of documented community service</li>
                <li>Letter of recommendation from a community service supervisor</li>
              </ul>
              <div className="mt-auto">
                <Link href="/scholarships/apply" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          
          {/* Scholarship 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">STEM Excellence Scholarship</h3>
              <div className="flex items-center mb-4">
                <div className="text-lg font-bold text-school-red">$2,000</div>
                <span className="mx-2 text-gray-500">•</span>
                <div className="text-sm text-gray-500">Annual</div>
              </div>
              <p className="text-gray-600 mb-6">
                Awarded to a student pursuing a degree in science, technology, engineering, or 
                mathematics who demonstrates academic achievement and passion for their field.
              </p>
              <h4 className="text-lg font-semibold mb-2">Eligibility:</h4>
              <ul className="list-disc pl-5 mb-6 text-gray-600">
                <li>Minimum GPA of 3.3</li>
                <li>Acceptance to an accredited college or university in a STEM program</li>
                <li>Completed at least 3 advanced STEM courses in high school</li>
                <li>Participation in STEM-related extracurricular activities</li>
              </ul>
              <div className="mt-auto">
                <Link href="/scholarships/apply" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Named Scholarships Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Named Scholarships</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-10 px-8 py-10">
            <div className="prose prose-red prose-lg mx-auto mb-10">
              <p className="text-gray-800">
                A Donor or a Group of Donors making gifts cumulating to $10,000 or greater have an 
                opportunity to "Name" a scholarship.
              </p>
              <p className="text-gray-800">
                A "Named Scholarship" is a great way to permanently recognize a special person or group 
                of people with a Scholarship that will be awarded every year—forever!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {namedScholarships.map((scholarship, index) => (
                <Link href={`/scholarships/${scholarship.slug}`} key={index}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-school-red cursor-pointer h-full">
                    <div className="h-3 bg-school-red"></div>
                    <div className="px-5 py-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{scholarship.name}</h3>
                      <p className="text-gray-700 text-sm">{scholarship.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a 
                href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
              >
                Create a Named Scholarship
              </a>
            </div>
          </div>
        </div>

        {/* How to Apply Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-school-red text-white text-lg font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Check Eligibility</h3>
              <p className="text-gray-600">
                Review the requirements for each scholarship to determine which ones you qualify for.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-school-red text-white text-lg font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Complete Application</h3>
              <p className="text-gray-600">
                Fill out the online application form and submit all required documentation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-school-red text-white text-lg font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Submit by Deadline</h3>
              <p className="text-gray-600">
                Ensure your application is submitted by April 15 to be considered for the current year.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/scholarships/apply" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800">
              Start Application Process
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about our scholarships or the application process, 
            please contact our Scholarship Committee.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:scholarships@fredericktownalumni.org" className="text-school-red hover:text-red-800 font-medium">
              scholarships@fredericktownalumni.org
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a 
              href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
            >
              Support Our Scholarships
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 