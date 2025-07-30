import React from 'react';

export default function RuthAukerSTEMContent() {
  return (
    <div className="text-gray-800">
      <p className="mb-4">
        The FHS Alumni Association is pleased to announce that a scholarship honoring the teaching career of Ruth E. Auker (1978 – 2003) has been fully endowed by Malcolm R. Shrimplin, an FHS graduate. To be awarded this spring, the purpose of this scholarship is to encourage young women to further study science, technology, engineering, and mathematics (STEM).
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        <div className="md:w-3/4">
          <p className="mb-4">
            "I'm grateful for the excellent foundational education in the biological sciences that Mrs. Auker provided to me before going to college", said Malcolm. "While I did not study the subject further, the knowledge that I gained from Mrs. Auker has served me well during my career in the biopharmaceutical industry. I encourage others who benefitted from Mrs. Auker's tutelage, along with those who want to encourage women pursuing careers in STEM-related fields, to contribute to this scholarship."
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          {/* Image placeholder - you can add an actual image here later */}
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Ruth E. Auker Photo
          </div>
        </div>
      </div>

      <h4 className="text-xl font-semibold mb-3 text-school-red">Educational Background and Early Career</h4>
      
      <p className="mb-4">
        Ruth earned a Bachelor of Science in Secondary Education from Ohio University in January 1964. The next week she was teaching at East Knox high school where she met her late husband, Roger. She then taught at Fairfield Union and Mount Vernon high schools. For the next several years, she was a stay-at-home mom with her two children, Ellen, and Tim.
      </p>

      <h4 className="text-xl font-semibold mb-3 text-school-red">25 Years at Fredericktown High School</h4>
      
      <p className="mb-4">
        In August 1978, she was hired to teach biology at Fredericktown High School. For 25 years at Fredericktown, she taught biology, anatomy/physiology, environmental science, and unified science. After her retirement in 2003, she continued as a substitute teacher for a few years.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h5 className="font-semibold mb-3 text-school-red">Ruth's Teaching Philosophy</h5>
        <p className="text-gray-700 italic mb-4">
          "I am proud to have been a member of the faculty where our goal was to prepare every student for her/his best possible future"
        </p>
        <p className="text-gray-700">
          Many of her students have been very successful in their careers in STEM-related fields.
        </p>
      </div>

      <h4 className="text-xl font-semibold mb-3 text-school-red">Commitment to Scholarships</h4>
      
      <p className="mb-4">
        Auker continues, "Having served on scholarship committees for Fredericktown Education Association and Knox Community Hospital Auxiliary, I know the impact receiving a scholarship has on a student's education goals. Awarding this scholarship to a young woman pursuing a career in a STEM-related field will make it easier for her to reach her goal. I am honored to be a part of this."
      </p>

      <h4 className="text-xl font-semibold mb-3 text-school-red">About Malcolm R. Shrimplin</h4>
      
      <p className="mb-4">
        Malcolm graduated at the top of his class at FHS in 1988 and earned a BSBA with a specialization in Operations Research, cum laude from Bowling Green State University in 1992. He also holds a master's degree from The University of Tennessee, Knoxville in Management Science. Malcolm and his husband, David, reside in Scottsdale, AZ.
      </p>

      <h4 className="text-xl font-semibold mb-3 text-school-red">Part of a STEM Series</h4>
      
      <p className="mb-4">
        This scholarship is the second in a series of four that are planned to honor teaching careers of female STEM teachers from Fredericktown High school and to encourage women to pursue careers in STEM-related fields. The first, the "Rachel A. Gregg Women in STEM Scholarship", was awarded in the spring of 2021.
      </p>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h5 className="font-semibold mb-3 text-school-red">STEM Scholarship Series</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div><strong>1st:</strong> Rachel A. Gregg Women in STEM (2021)</div>
          <div><strong>2nd:</strong> Ruth E. Auker Women in STEM (Current)</div>
          <div><strong>3rd & 4th:</strong> Planned to honor additional female STEM teachers</div>
          <div><strong>Series Goal:</strong> Encourage women in STEM careers</div>
        </div>
      </div>

      <h4 className="text-xl font-semibold mb-3 text-school-red">How to Donate</h4>
      
      <p className="mb-4">
        Tax-deductible donations to the Ruth E. Auker Women in STEM Scholarship may be made by writing a check payable to "FHS ALUMNI SCHOLARSHIP FUND"; note "FHS Auker STEM" on the memo line; and mail it to The Knox County Foundation, P.O. Box 309, Mount Vernon, OH 43050-0309.
      </p>
      
      <p className="mb-4">
        To donate online, please click on the "Donate" button on the FHS Alumni website at www.fredericktownalumni.org and be sure to note "FHS Auker STEM" when donating.
      </p>
      
      <p className="mb-4">
        Donations may also be made to the entire series of four scholarships by just noting "FHS STEM" when doing so. These donations will be allocated in an effort to keep the payout of these four scholarships across the years as consistent as possible.
      </p>
      
      <div className="mt-6 p-4 bg-school-red text-white rounded-lg">
        <h5 className="font-semibold mb-2 !text-white">Ruth E. Auker's Legacy</h5>
        <p className="text-sm !text-white">
          A dedicated biology teacher who spent 25 years preparing students for their best possible futures, with many going on to successful careers in STEM fields. Her commitment to education continues through scholarship support for young women in science.
        </p>
      </div>
    </div>
  );
}