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
    },
    {
      name: "Roy McKinley '38",
      slug: "roy-mckinley",
      description: "Honors the legendary coach, teacher, and superintendent Roy McKinley, Class of 1938. Recognizes students who demonstrate leadership, community service, and the perseverance to achieve the seemingly impossible."
    },
    {
      name: "Tracie Weller Women in STEM",
      slug: "tracie-weller-stem",
      description: "Honors Tracie J. Weller's 30-year teaching career (1985-2010). Supports young women pursuing education in science, technology, engineering, and mathematics fields."
    },
    {
      name: "Dr. Robert & Patricia Hines Ronk & Family",
      slug: "robert-patricia-ronk",
      description: "Established by Dr. Robert Ronk and Patricia Hines Ronk to help future generations of Fredericktown graduates with their post-high school education."
    },
    {
      name: "Gary & Sharon Ritchey Streby",
      slug: "gary-sharon-streby",
      description: "Created by Gary Streby to honor the memory of his wife, Sharon Ritchey Streby (Class of 1961). Supports students who embody Sharon's love of learning and dedication to education."
    },
    {
      name: "Jeannine Weller Davis",
      slug: "jeannine-weller-davis",
      description: "Honors Jeannine Weller Davis (Class of 1961) for her lifetime of community service and volunteerism. Supports students who demonstrate hard work and dedication to making a positive impact."
    },
    {
      name: "Chris Fearn Well",
      slug: "chris-fearn-well",
      description: "Recognizes Chris' lifetime dedication to Fredericktown as a teacher, leader, and tireless community volunteer. Honors her 32 years of teaching and 46 years of service to the Tomato Show."
    },
    {
      name: "Ed & Sandy Erick & Family",
      slug: "ed-sandy-erick",
      description: "Honors Ed Erick's legacy as FHS Principal and community leader, and the Erick family's commitment to education. Supports students who exemplify excellence, determination, compassion, and service."
    },
    {
      name: "Class of 1974",
      slug: "class-of-1974",
      description: "Established by the FHS Class of 1974 to pay it forward to future generations. Created in celebration of their 50th reunion to support Fredericktown students in their educational journeys."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-school-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-16  sm:px-6 lg:px-8">
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

      {/* Named Scholarships Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Named Scholarships</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-10 px-8 py-10">
            <div className="max-w-3xl mx-auto mb-10">
              <div className="space-y-4">
                <p className="text-lg text-gray-900">
                  A Donor or a Group of Donors making gifts cumulating to $10,000 or greater have an 
                  opportunity to "Name" a scholarship.
                </p>
                <p className="text-lg text-gray-900">
                  A "Named Scholarship" is a great way to permanently recognize a special person or group 
                  of people with a Scholarship that will be awarded every year—forever!
                </p>
              </div>
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
      </div>

      {/* How to Apply Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Apply</h2>
          <div className="space-y-6 text-gray-900">
            <p className="text-lg">
              The Knox County Foundation annually distributes more than $1 million in college scholarships through various competitive application processes. The Universal Scholarship Application is available each January at <a href="https://knoxcf.awardspring.com" target="_blank" rel="noopener noreferrer" className="text-school-red hover:text-red-800 font-medium">https://knoxcf.awardspring.com</a> with a deadline of March 1. 
            </p>
            <p className="text-lg">
              The Career and Technical Education Scholarship Application is available year-round with deadlines of January 15th, April 15th, July 15th, and October 15th. The Vaughn Wiester Music Scholarship deadline is March 1 and students must apply through the Universal Scholarship.
            </p>
            <p className="text-lg">
              Traditional students, as well as adults returning to college, are encouraged to apply. For further information or questions about the application process, please see our FAQs page or contact Kara Ernsberger, Program Coordinator, at 740-392-3270 or <a href="mailto:kara@knoxcf.org" className="text-school-red hover:text-red-800 font-medium">kara@knoxcf.org</a>.
            </p>
          </div>
          <div className="mt-8 text-center">
            <a 
              href="https://knoxcf.awardspring.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Scholarship Information */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Universal Scholarship Application</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-900">
              The Universal Scholarship Application is for applicants attending or planning to attend a fully-accredited two-year or four-year post-secondary institution, or those enrolled in medical school. Students must be enrolled full-time to receive a scholarship.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Application Process</h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-900">
                  With the exception of the Ariel Corporation Scholarship, all students must complete the Universal Scholarship Application at <a href="https://knoxcf.awardspring.com" target="_blank" rel="noopener noreferrer" className="text-school-red hover:text-red-800 font-medium">https://knoxcf.awardspring.com</a>. This application allows you to be considered for multiple scholarships by automatically matching you to funds for which you are eligible.
                </p>
                <p className="text-lg text-gray-900">
                  This single application will determine if you qualify for one or more of the 150+ individual scholarship funds at the Knox County Foundation. The online application should be filled out as completely and thoroughly as possible. Incomplete or late applications will not be considered.
                </p>
                <p className="text-lg text-gray-900">
                  Before completing the application, students should read the Requirements & Instructions as well as the Applicant Guide.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Renewable Scholarships</h3>
              <p className="text-lg text-gray-900">
                A few Foundation scholarships are renewable for more than one year. In order to maintain a renewable scholarship, students will need to complete a follow-up and upload a current transcript via the online Dashboard in May each year.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Requirements</h3>
              <ul className="list-disc pl-5 space-y-3 text-lg text-gray-900">
                <li><strong>Residency:</strong> All applicants must be a U.S. Citizen or eligible non-citizen. Most, but not all, scholarships require applicants to be a resident of Knox County, Ohio.</li>
                <li><strong>E-mail Address:</strong> Every student will need to create an account through AwardSpring with an e-mail address they will have access to after high school/college graduation (ie: a personal e-mail address, not a school e-mail).</li>
                <li><strong>Transcript:</strong> Current High School Seniors and College Freshmen are required to submit their High School Transcript. High School transcripts must be requested from their respective guidance counselor via AwardSpring (instructions are within the application). Current college applicants must submit their most up-to-date college transcript as a PDF.</li>
                <li><strong>Personal Statement:</strong> All applicants must submit a 250-word personal statement. For suggestions on topics, please see the FAQs page.</li>
                <li><strong>FAFSA:</strong> While not a requirement for all, a majority of the scholarship funds have a financial need component. To be considered for any of these scholarships, students must upload a copy of their FAFSA Submission Summary showing the Student Aid Index (SAI).</li>
              </ul>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">4. The AwardSpring Website</h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-900">
                  For a full tutorial on using the scholarship site, please review the Applicant Guide.
                </p>
                <p className="text-lg text-gray-900">
                  New users will create a username by clicking the "Register" button while returning users should log-in using the e-mail address used when they first registered.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career and Technical Education Scholarship Application</h3>
              <p className="text-lg text-gray-900">
                For information on Vocational Scholarships, please visit the Career and Technical Education (CTE) Scholarship Application page. CTE Scholarships are provided to students who are attending, or will attend, an occupational training program of two-years or less at an accredited vocational school, technical school, community college, or junior college.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Scholarship Categories</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Universal Scholarship */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Universal Scholarship</h3>
              <p className="text-gray-900 mb-6">
                For students attending or planning to attend a fully-accredited two-year or four-year post-secondary institution, or those enrolled in medical school. Students must be enrolled full-time to receive a scholarship.
              </p>
              <h4 className="text-lg font-semibold mb-2">Key Information:</h4>
              <ul className="list-disc pl-5 mb-6 text-gray-900">
                <li>Available each January</li>
                <li>Deadline: March 1</li>
                <li>Single application for 150+ scholarship funds</li>
                <li>Automatic matching to eligible scholarships</li>
                <li>Online application through AwardSpring</li>
              </ul>
              <div className="mt-auto">
                <a
                  href="https://knoxcf.awardspring.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
          
          {/* Career and Technical Education Scholarship */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Career & Technical Education Scholarship</h3>
              <p className="text-gray-900 mb-6">
                For students who are attending, or will attend, an occupational training program of two-years or less at an accredited vocational school, technical school, community college, or junior college.
              </p>
              <h4 className="text-lg font-semibold mb-2">Key Information:</h4>
              <ul className="list-disc pl-5 mb-6 text-gray-900">
                <li>Available year-round</li>
                <li>Quarterly deadlines: January 15, April 15, July 15, October 15</li>
                <li>Supports vocational and technical training</li>
                <li>Separate application process from Universal Scholarship</li>
              </ul>
              <div className="mt-auto">
                <a
                  href="https://knoxcf.org/how-to-apply/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-school-red hover:bg-red-800"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h2>
          <p className="text-lg text-gray-900 mb-6">
            If you have any questions about scholarships or the application process, 
            please contact the Knox County Foundation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:kara@knoxcf.org" className="text-school-red hover:text-red-800 font-medium">
              kara@knoxcf.org
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a href="tel:7403923270" className="text-school-red hover:text-red-800 font-medium">
              740-392-3270
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