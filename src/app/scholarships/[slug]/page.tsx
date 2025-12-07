import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import DefaultScholarshipContent from '@/data/scholarships/default-content';

// Explicit imports for all scholarship content files (required for production builds)
const scholarshipContentMap: Record<string, () => Promise<any>> = {
  'ula-weller-leedy': () => import('@/data/scholarships/ula-weller-leedy'),
  'richard-k-wilson': () => import('@/data/scholarships/richard-k-wilson'),
  'william-marietta-mahaffey': () => import('@/data/scholarships/william-marietta-mahaffey'),
  'class-of-1961': () => import('@/data/scholarships/class-of-1961'),
  'class-of-1947': () => import('@/data/scholarships/class-of-1947'),
  'otho-iris-eyster': () => import('@/data/scholarships/otho-iris-eyster'),
  'phillips-frye': () => import('@/data/scholarships/phillips-frye'),
  'gold-star-parents': () => import('@/data/scholarships/gold-star-parents'),
  'class-of-1958': () => import('@/data/scholarships/class-of-1958'),
  'class-of-1959-julie-cochran-rogers': () => import('@/data/scholarships/class-of-1959-julie-cochran-rogers'),
  'carmon-betty-weller': () => import('@/data/scholarships/carmon-betty-weller'),
  'willie-davis': () => import('@/data/scholarships/willie-davis'),
  'dean-jane-streby': () => import('@/data/scholarships/dean-jane-streby'),
  'lori-ackerman': () => import('@/data/scholarships/lori-ackerman'),
  'rachel-gregg-stem': () => import('@/data/scholarships/rachel-gregg-stem'),
  'fhs-hall-of-honor': () => import('@/data/scholarships/distinguished-alumni-hall-of-honor'),
  'clyde-edna-boyd': () => import('@/data/scholarships/clyde-edna-boyd'),
  'jack-jean-carter': () => import('@/data/scholarships/jack-jean-carter'),
  'janet-hadley-mather': () => import('@/data/scholarships/janet-hadley-mather'),
  'ruth-auker-stem': () => import('@/data/scholarships/ruth-auker-stem'),
  'morris-sue-james': () => import('@/data/scholarships/morris-sue-james'),
  'catherine-zagula-stem': () => import('@/data/scholarships/catherine-zagula-stem'),
  'rusty-mary-dalrymple': () => import('@/data/scholarships/rusty-mary-dalrymple'),
  'david-dalrymple': () => import('@/data/scholarships/david-dalrymple'),
  'tracie-weller-stem': () => import('@/data/scholarships/tracie-weller-stem'),
  'robert-patricia-ronk': () => import('@/data/scholarships/robert-patricia-ronk'),
  'gary-sharon-streby': () => import('@/data/scholarships/gary-sharon-streby'),
  'jeannine-weller-davis': () => import('@/data/scholarships/jeannine-weller-davis'),
  'chris-fearn-well': () => import('@/data/scholarships/chris-fearn-well'),
  'ed-sandy-erick': () => import('@/data/scholarships/ed-sandy-erick'),
  'class-of-1974': () => import('@/data/scholarships/class-of-1974'),
  'roy-mckinley': () => import('@/data/scholarships/roy-mckinley'),
  'art-beverly-dremann': () => import('@/data/scholarships/art-beverly-dremann'),
  'fredericktown-firefighters': () => import('@/data/scholarships/fredericktown-firefighters'),
  'william-mary-elder': () => import('@/data/scholarships/william-mary-elder'),
  'long-family': () => import('@/data/scholarships/long-family'),
  'marjorie-a-fearn': () => import('@/data/scholarships/marjorie-a-fearn'),
  // Family variants
  'jack-jean-carter-family': () => import('@/data/scholarships/jack-jean-carter-family'),
  'morris-sue-james-family': () => import('@/data/scholarships/morris-sue-james-family'),
  'rusty-mary-dalrymple-family': () => import('@/data/scholarships/rusty-mary-dalrymple-family'),
  'david-l-dalrymple-family': () => import('@/data/scholarships/david-l-dalrymple-family'),
  'catherine-zagula-women-in-stem': () => import('@/data/scholarships/catherine-zagula-women-in-stem'),
  'ruth-e-auker-women-in-stem': () => import('@/data/scholarships/ruth-e-auker-women-in-stem'),
  'rachel-a-gregg-women-in-stem': () => import('@/data/scholarships/rachel-a-gregg-women-in-stem'),
  'lori-ackerman-class-of-1988': () => import('@/data/scholarships/lori-ackerman-class-of-1988'),
};

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
  },
  {
    name: "Art & Beverly Dremann",
    slug: "art-beverly-dremann",
    description: "Established in 2026 to recognize entire Dremann family's career contributions to education. Art and Beverly Henwood '55 Dremann and their daughters, Kathie-FHS-'76 and Amy, FHS-'79, together devoted over 150 years of service to young people."
  },
  {
    name: "Fredericktown Firefighters",
    slug: "fredericktown-firefighters",
    description: "Established in 2026 to honor the generations of individuals that selflessly made a commitment to the Fredericktown Community Fire District to render assistance to others, regardless of the situation and the risk. Sponsored by the Fredericktown Firefighters Association."
  },
  {
    name: "Dr. William & Mary Bowlus Elder",
    slug: "william-mary-elder",
    description: "Established in 2026 to honor Dr. William & Mary Bowlus Elder, both FHS-1972, who dedicated their lives to serving the Fredericktown community. Bill as a family physician and Mary as an educator and librarian. Sponsored by the Elder family."
  },
  {
    name: "Long Family",
    slug: "long-family",
    description: "Established in 2026 to honor the memory and service of Rarick W. and Dorothy B. Long to the Fredericktown community. Rarick was owner and publisher of The Knox County Citizen for 35 years, and together they strengthened and fostered unity in the community. Sponsored by their children: Rebecca Long Leakey, Harlan B. Long, and John C. Long, all FHS graduates. Preference given to students interested in pursuing journalism."
  },
  {
    name: "Marjorie A. Fearn",
    slug: "marjorie-a-fearn",
    description: "Established to honor Marjorie A. Fearn, class of 1950 Valedictorian, who lived a rewarding life in Fredericktown full of family and friends. She worked at Edwards Sheet Metal, retired from Mount Vernon Public Schools, and was active in the Fredericktown United Methodist Church, Tomato Show, local garden club, and bridge club. Sponsored by Marjorie herself as a caring Freddie, paying it forward to help deserving Fredericktown students."
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
  // Use explicit mapping for production build compatibility
  const getScholarshipContent = scholarshipContentMap[slug] || (() => 
    Promise.resolve({ default: () => <DefaultScholarshipContent name={scholarship.name} /> })
  );

  const ScholarshipContent = dynamic(
    getScholarshipContent,
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