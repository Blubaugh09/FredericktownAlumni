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