import Link from 'next/link';
import Image from 'next/image';

export default function ScholarshipApplication() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-school-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-16  sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Scholarship Application</h1>
              <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-xl">
                Your path to educational support starts here.
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

      {/* Application Process */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-red prose-lg mx-auto mb-16">
          <h2>How to Apply</h2>
          <p>
            The Fredericktown Alumni Association is committed to supporting the next generation of leaders through our scholarship program.
            Below is a step-by-step guide to help you navigate the application process.
          </p>
        </div>

        {/* Step by Step Application Process */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mb-16">
          <div className="px-6 py-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Application Process</h3>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-school-red text-white text-2xl font-bold">
                    1
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Check Eligibility</h4>
                  <p className="text-gray-700 mb-4">
                    Review the requirements for each scholarship to determine which ones you qualify for. 
                    Eligibility criteria vary by scholarship and may include:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Minimum GPA requirements</li>
                    <li>Field of study specifications</li>
                    <li>Class year or graduation status</li>
                    <li>Community service involvement</li>
                    <li>Financial need considerations</li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-school-red text-white text-2xl font-bold">
                    2
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Prepare Required Documents</h4>
                  <p className="text-gray-700 mb-4">
                    Gather all necessary documentation before beginning your application:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Academic transcripts (official or unofficial)</li>
                    <li>List of extracurricular activities and leadership positions</li>
                    <li>Community service record with verified hours</li>
                    <li>Personal statement or essay (specific requirements will be provided)</li>
                    <li>Letters of recommendation (typically 1-3)</li>
                    <li>Financial information if applying for need-based scholarships</li>
                    <li>College acceptance letter or proof of enrollment (if applicable)</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-school-red text-white text-2xl font-bold">
                    3
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Complete the Application Form</h4>
                  <p className="text-gray-700 mb-4">
                    Fill out the online application form completely and accurately:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li>Personal and contact information</li>
                    <li>Educational background and future plans</li>
                    <li>Scholarship selections (you may apply for multiple scholarships with one application)</li>
                    <li>Essay responses to provided prompts</li>
                  </ul>
                  <p className="text-gray-700">
                    <a href="#application-form" className="text-school-red hover:text-red-800 font-medium">
                      Access the online application form
                    </a>
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-school-red text-white text-2xl font-bold">
                    4
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Submit by the Deadline</h4>
                  <p className="text-gray-700 mb-4">
                    All application materials must be submitted by <strong>April 15</strong> to be considered for the current year's scholarship cycle.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <p className="text-gray-700 font-medium">Important Dates:</p>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li><strong>January 15:</strong> Application opens</li>
                      <li><strong>April 15:</strong> Application deadline</li>
                      <li><strong>May 1-15:</strong> Application review period</li>
                      <li><strong>May 20:</strong> Award notifications sent</li>
                      <li><strong>June:</strong> Scholarship awards ceremony</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-school-red text-white text-2xl font-bold">
                    5
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Selection Process</h4>
                  <p className="text-gray-700 mb-4">
                    Applications are reviewed by the Scholarship Committee using the following process:
                  </p>
                  <ol className="list-decimal pl-5 text-gray-700">
                    <li>Initial screening for eligibility and completeness</li>
                    <li>Evaluation based on scholarship-specific criteria</li>
                    <li>Committee review and scoring</li>
                    <li>Final selection of recipients</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form Section (Placeholder) */}
        <div id="application-form" className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Scholarship Application Form</h3>
          <p className="text-gray-700 text-center mb-8">
            The online application form for the 2024-2025 academic year will be available starting January 15, 2024.
          </p>
          <div className="flex justify-center">
            <button 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-400 cursor-not-allowed"
              disabled
            >
              Application Opening Soon
            </button>
          </div>
        </div>

        {/* Tips for a Successful Application */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mb-16">
          <div className="px-6 py-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tips for a Successful Application</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-md">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Start Early</h4>
                <p className="text-gray-700">
                  Begin gathering materials and drafting essays well before the deadline to allow time for revisions and feedback.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-md">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Be Specific</h4>
                <p className="text-gray-700">
                  Provide concrete examples of achievements, challenges overcome, and future goals rather than general statements.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-md">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Proofread Carefully</h4>
                <p className="text-gray-700">
                  Review all materials for grammar, spelling, and clarity. Consider having someone else review your application as well.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-md">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Follow Instructions</h4>
                <p className="text-gray-700">
                  Adhere to all guidelines regarding word counts, document formats, and submission requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
              <div className="px-6 py-4">
                <h4 className="text-lg font-bold text-gray-900">Can I apply for multiple scholarships?</h4>
                <p className="text-gray-700 mt-2">
                  Yes, you may apply for all scholarships for which you meet the eligibility requirements. You only need to submit one application.
                </p>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
              <div className="px-6 py-4">
                <h4 className="text-lg font-bold text-gray-900">How will I know if I've been selected?</h4>
                <p className="text-gray-700 mt-2">
                  All applicants will be notified of the committee's decision by email no later than May 20. Recipients will also receive official award letters.
                </p>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
              <div className="px-6 py-4">
                <h4 className="text-lg font-bold text-gray-900">How are scholarship funds disbursed?</h4>
                <p className="text-gray-700 mt-2">
                  Scholarship funds are typically sent directly to the recipient's educational institution to be applied toward tuition, fees, and other educational expenses.
                </p>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
              <div className="px-6 py-4">
                <h4 className="text-lg font-bold text-gray-900">Are scholarships renewable?</h4>
                <p className="text-gray-700 mt-2">
                  Most scholarships are one-time awards, though some may be renewable for multiple years. Renewal typically requires maintaining satisfactory academic progress and meeting other criteria.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h3>
          <p className="text-gray-700 mb-6">
            If you have any questions about our scholarships or the application process, 
            please contact our Scholarship Committee.
          </p>
          <a href="mailto:scholarships@fredericktownalumni.org" className="text-school-red hover:text-red-800 font-medium">
            scholarships@fredericktownalumni.org
          </a>
        </div>
      </div>
    </div>
  );
} 