import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import DefaultScholarshipContent from '@/data/scholarships/default-content';

// Define the scholarships data, same as in the main scholarships page
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
    name: "Janet Hadley '59 Mather",
    slug: "janet-hadley-mather",
    description: "Established in 2022 to honor the life of Janet Hadley, FHS-1959, Mather,  who was a loving wife, mother, and active volunteer. Sponsored by her husband, Robert Mather, and daughters, Stacia Kaschak and Kristy Caldarella."
  },
  {
    name: "Jack & Jean Carter Family",
    slug: "jack-jean-carter",
    description: "Established in 2022 to recognize Fredericktown as a special place with great people and schools. Sponsored by Jean Braddock Carter, FHS-1947, and children: Nancy, FHS-1973, Tom, FHS-1976, and Gary, FHS-1982."
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
  }
];

// Generate static paths for all scholarships
export function generateStaticParams() {
  return namedScholarships.map((scholarship) => ({
    slug: scholarship.slug,
  }));
}

export default async function ScholarshipPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params to get the slug
  const { slug } = await params;
  
  // Find the scholarship by slug
  const scholarship = namedScholarships.find((s) => s.slug === slug);
  
  // If scholarship not found, return 404
  if (!scholarship) {
    notFound();
  }

  // Dynamically import the scholarship content based on slug
  const ScholarshipContent = dynamic(
    () => {
      try {
        return import(`@/data/scholarships/${slug}`).catch(() => {
          // If the file doesn't exist, return the default content
          return Promise.resolve({ default: () => <DefaultScholarshipContent name={scholarship.name} /> });
        });
      } catch (error) {
        return Promise.resolve({ default: () => <DefaultScholarshipContent name={scholarship.name} /> });
      }
    },
    {
      loading: () => <p className="text-gray-500">Loading scholarship content...</p>,
      ssr: true,
    }
  );

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-school-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-16  sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">{scholarship.name} Scholarship</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-white">
              Supporting educational excellence for future generations.
            </p>
          </div>
        </div>
      </div>

      {/* Scholarship Information */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-10 p-8">
          <div className="prose prose-red prose-lg mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Scholarship</h2>
            <p className="text-gray-800 text-lg mb-8">
              {scholarship.description}
            </p>
            
            {/* Press release content - dynamically loaded */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3>Press Release</h3>
              <Suspense fallback={<p className="text-gray-500">Loading scholarship content...</p>}>
                <ScholarshipContent />
              </Suspense>
            </div>
            
            {/* Eligibility and Application section (placeholder) */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Eligibility Criteria</h3>
            <p className="text-gray-800 text-lg mb-8">
              Detailed eligibility criteria for the {scholarship.name} Scholarship will be added here.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Apply</h3>
            <p className="text-gray-800 text-lg mb-8">
              Application information and deadlines for this scholarship will be provided in this section.
            </p>
            
            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/scholarships/apply" 
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
              >
                Apply for Scholarship
              </Link>
              <a 
                href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
              >
                Support This Scholarship
              </a>
            </div>
          </div>
        </div>
        
        {/* Back to Scholarships */}
        <div className="text-center mt-8">
          <Link href="/scholarships" className="text-school-red hover:text-red-800 font-medium">
            ← Back to All Scholarships
          </Link>
        </div>
      </div>
    </div>
  );
} 