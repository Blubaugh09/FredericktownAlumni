import Link from 'next/link';
import Image from 'next/image';

export default function Scholarships() {
  const namedScholarships = [
    {
      name: "Ula Weller '35 Leedy",
      slug: "ula-weller-leedy",
      description: "Established in 2016 to honor the life of Ula Weller, FHS-1935, Leedy, who was a successful business woman and great mother. Sponsored by her daughter, Bonita Leedy, FHS-1960, Birkel."
    },
    {
      name: "Richard K. Wilson '65",
      slug: "richard-k-wilson",
      description: "Established in 2017 to honor the life of Richard K. Wilson, FHS-1965, who overcame many obstacles on his way to success in business and as a miracle father. Sponsored by his brother, Bill Wilson, FHS-1962."
    },
    {
      name: "Dr. William L. & Marietta B. Mahaffey",
      slug: "william-marietta-mahaffey",
      description: "Established in 2017 to honor Dr. William and Marietta Mahaffey, the beloved local MD and Nurse team in the 1940's and 50's. Sponsored by the Mahaffey children- Marilyn, FHS-1950; Martha, FHS-1952; and Bill, FHS-1954."
    },
    {
      name: "Class of 1961",
      slug: "class-of-1961",
      description: "Established in 2017, to recognize the great Fredericktown community and schools. Sponsored by the Class of 1961 on the occasion of their 55th Class reunion."
    },
    {
      name: "Class of 1947",
      slug: "class-of-1947",
      description: "Established in 2017, to recognize their community and teachers. Sponsored by the Class of 1947 on the occasion of their 70th Class reunion."
    },
    {
      name: "Otho S. '37 & Iris Jeanne Moree '38 Eyster",
      slug: "otho-iris-eyster",
      description: "Established in 2018 to honor the lives of Otho, FHS-1937, and Iris Jeanne Moree, FHS-1938, Eyster, who paved the way for their children. Sponsored by two of their sons, Otho, FHS-1961, and Chase, FHS -1979."
    },
    {
      name: "Phillips-Frye",
      slug: "phillips-frye",
      description: "Established in 2018 to honor the lives of their parents, John and Angeline Phillips and Fred and Ruth Frye, who were community leaders. Sponsored by two of their children, Gary, FHS-1960, and Sharon Phillips, FHS-1962, Frye."
    },
    {
      name: "Gold Star Parents",
      slug: "gold-star-parents",
      description: "Established in 2018 to honor the never-ending sacrifice made by all Gold Star Parents. Sponsored by Dan, FHS 1961, and Susan Snyder."
    },
    {
      name: "Class of 1958",
      slug: "class-of-1958",
      description: "Established in 2018, to recognize the great Fredericktown community and schools. Sponsored by the Class of 1958 on the occasion of their 60th Class reunion."
    },
    {
      name: "Class of 1959 Honoring Julie Cochran Rogers",
      slug: "class-of-1959-julie-cochran-rogers",
      description: "Established in 2020 to honor the life of their classmate, Julie Cochran, FHS-1959, Rogers, who overcame polio, broke through barriers and changed our Nation. Sponsored by the Class of 1959 on the occasion of their 60th Class reunion."
    },
    {
      name: "Carmon & Betty Weller & Family",
      slug: "carmon-betty-weller",
      description: "Established in 2020, to support the education of Fredericktown children. Sponsored by the Weller Family:  Carmon, FHS-1952 and Betty, FHS-1954, and their children: Tracie, FHS-1975; Jeff, FHS-1978; and Judd, FHS-1980."
    },
    {
      name: "Willie Davis – 4 Scholarships",
      slug: "willie-davis",
      description: "Four Scholarships established in 2002 to honor the life of Willie Davis, who attended FHS during the Great Depression years. Sponsored by Willie's sons, Ray, FHS-1958, and Roger, FHS-1961, to promote Willie's values to all FHS footballers."
    },
    {
      name: "Dean & Jane Streby",
      slug: "dean-jane-streby",
      description: "Established in 2021 to honor the lives of Dean, FHS-1946, and Jane Streby, long time community role models and supporters of FHS athletics. Sponsored by their children, Laurie, FHS-1973; Joni, FHS-1975; Carole,1979; and Mike, FHS-1984."
    },
    {
      name: "Lori Ackerman Class of 1988",
      slug: "lori-ackerman",
      description: "Four Scholarships established in 2021 to honor the legacy of Mrs. Lori Ackerman, a favorite and inspirational teacher. Sponsored by the entire Class of 1988 with special financial leadership by Lori's twin daughters, Melana and Melisa, both FHS-1988."
    },
    {
      name: "Rachel A. Gregg Women in STEM",
      slug: "rachel-gregg-stem",
      description: "Established in 2021 to encourage young women to pursue technical careers and to honor Mrs. Rachel Gregg, a special STEM teacher. This is the first in a series of four Women in STEM Scholarships. Initially sponsored by Malcolm Shrimplin, FHS -1988, followed by strong financial support from Rachel Gregg and her daughter, Anne, FHS-1975."
    },
    {
      name: "FHS Distinguished Hall of Honor",
      slug: "fhs-hall-of-honor",
      description: "Established in 2021 to recognize the blessings of growing up in the great Fredericktown schools with a supportive community. Sponsored by members of the FHS Distinguished Alumni Hall of Honor."
    },
    {
      name: "Clyde & Edna Boyd",
      slug: "clyde-edna-boyd",
      description: "Established in 2022 to honor the lives of Clyde and Edna Boyd for their deep commitment to Fredericktown Schools over many years. Sponsored by their daughters- Betty Boyd, FHS-1956, Caroli, and Lois Boyd, FHS-1958, Boyce."
    },

    {
      name: "Jack & Jean Carter Family",
      slug: "jack-jean-carter",
      description: "Established in 2022 to recognize Fredericktown as a special place with great people and schools. Sponsored by Jean Braddock Carter, FHS-1947, and children: Nancy, FHS-1973, Tom, FHS-1976, and Gary, FHS-1982."
    },
    {
      name: "Janet Hadley '59 Mather",
      slug: "janet-hadley-mather",
      description: "Established in 2022 to honor the life of Janet Hadley, FHS-1959, Mather,  who was a loving wife, mother, and active volunteer. Sponsored by her husband, Robert Mather, and daughters, Stacia Kaschak and Kristy Caldarella."
    },
    {
      name: "Ruth E. Auker Women in STEM",
      slug: "ruth-auker-stem",
      description: "Established in 2022 to encourage young women to pursue technical careers and to honor Mrs. Ruth Auker, a special STEM teacher. This is the second in a series of four Women in STEM Scholarships sponsored by Malcolm Shrimplin, FHS -1988."
    },
    {
      name: "Morris & Sue James & Family",
      slug: "morris-sue-james",
      description: "Established in 2023 to help FHS grads further their educations. Sponsored by Morris and Sue James, who had distinguished careers as educators and community leaders, and daughters: Vicky, FHS-1976; Carol, FHS-1980; and Terri, FHS-1982."
    },
    {
      name: "Catherine Zagula Women in STEM",
      slug: "catherine-zagula-stem",
      description: "Established in 2023 to encourage young women to pursue technical careers and to honor Mrs. Catherine Zagula, a special STEM teacher. This is the third in a series of four Women in STEM Scholarships sponsored by Malcolm Shrimplin, FHS -1988."
    },
    {
      name: "Rusty & Mary Dalrymple & Family",
      slug: "rusty-mary-dalrymple",
      description: "Established in 2023 to honor the lives of Rusty and Mary McClelland, FHS-1931, Dalrymple, for their deep commitment to the local school and community, including their long service to the school board. Sponsored by their son, Richard Dalrymple, FHS-1960."
    },
    {
      name: "David L. Dalrymple",
      slug: "david-dalrymple",
      description: "Established in 2024 to honor the life of David Dalrymple, FHS-1958, whose work in science led to a breakthrough in MRI technology. Sponsored by his brother, Richard Dalrymple, FHS-1960."
    },

    {
      name: "Tracie Weller Women in STEM",
      slug: "tracie-weller-stem",
      description: "Established in 2024 to encourage young women to pursue technical careers and to honor Tracie Weller, FHS-1975, as a special STEM teacher. This is the fourth in a series of four Women in STEM Scholarships sponsored by Malcolm Shrimplin, FHS -1988."
    },
    {
      name: "Dr. Robert & Patricia Hines Ronk & Family",
      slug: "robert-patricia-ronk",
      description: "Established in 2024 to help FHS grads further their educations. Sponsored by Dr. Robert, FHS-1959, and Patricia Hines, FHS-1960, Ronk. Dr. Robert was the Knox County orthodontist for 38 years with Patricia as the office manager."
    },
    {
      name: "Gary & Sharon Ritchey Streby",
      slug: "gary-sharon-streby",
      description: "Established in 2024 to honor the life of Sharon Ritchey, FHS-1961, Streby, and to help Freddies fund their educations. Sponsored by her husband, Gary Streby, FHS-1963, who got to know Sharon as they worked together at the local Ritchey's Market."
    },
    {
      name: "Jeannine Weller Davis",
      slug: "jeannine-weller-davis",
      description: "Established in 2024 to honor Jeannine Weller, FHS-1961, Davis for her lifetime of being \"the wind beneath the wings\" for her family, friends, neighbors, and numerous organizations in New Jersey, Florida, and Ohio. Sponsored by her husband, Roger Davis, FHS-1961."
    },
    {
      name: "Chris Fearn Well",
      slug: "chris-fearn-well",
      description: "Established in 2025 to honor Chris Fearn, FHS-1967, Well for her lifetime of dedication as a teacher, leader, and tireless worker on a dizzying list of community activities. Sponsored by a community fundraiser led by Francie Lord, FHS-1967, Rodstrom."
    },
    {
      name: "Ed & Sandy Erick & Family",
      slug: "ed-sandy-erick",
      description: "Established in 2025 to honor the life of Ed Erick, a respected FHS Principal, community leader and family man. Sponsored by his wife, Sandy Erick, and sons: Matt, FHS-1986, and Scott, FHS-1991."
    },
    {
      name: "Class of 1974",
      slug: "class-of-1974",
      description: "Established in 2025, to recognize the great Fredericktown community and schools. Sponsored by the Class of 1974 on the occasion of their 50th Class reunion."
    },
    {
      name: "Roy McKinley",
      slug: "roy-mckinley",
      description: "Established in 2026 to recognize the footprints left by Roy McKinley during a 15-year Fredericktown career spanning 1937-1952 as a coach, teacher and Superintendent. Sponsored by a group of Roy's former students and friends, led by Betty Weller and others."
    },
    {
      name: "Art & Beverly Dremann",
      slug: "art-beverly-dremann",
      description: "Established in 2026 to recognize entire Dremann family’s career contributions to education. Art and Beverly Henwood ’55 Dremann and their daughters, Kathie-FHS-‘76 and Amy, FHS-‘79, together devoted over 150 years of service to young people."
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