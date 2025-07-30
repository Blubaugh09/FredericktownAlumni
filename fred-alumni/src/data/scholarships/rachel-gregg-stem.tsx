import React from 'react';

export default function RachelGreggSTEMContent() {
  return (
    <div className="text-gray-800">
      <p className="mb-4">
        The FHS Alumni Association is pleased to announce that a scholarship honoring the teaching career of Rachel A. Gregg (1967 – 1992) has been fully endowed by Malcolm R. Shrimplin, an FHS graduate. The purpose of the scholarship is to encourage young women to further study science, technology, engineering, and mathematics (STEM).
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        <div className="md:w-3/4">
          <p className="mb-4">
            "I'm grateful for the encouragement shown to me by Mrs. Gregg while studying algebra and calculus before going to college", said Malcolm. "I attribute my academic and professional accomplishments to the solid educational foundation that Mrs. Gregg and other faculty at FHS provided to me and countless other students. I encourage others who benefitted from Mrs. Gregg's tutelage, along with those who want to encourage women pursuing careers in STEM-related fields, to contribute to this scholarship."
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          {/* Image placeholder - you can add an actual image here later */}
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Rachel A. Gregg Photo
          </div>
        </div>
      </div>

      <h4 className="text-xl font-semibold mb-3 text-school-red">Educational Background</h4>
      
      <p className="mb-4">
        Rachel graduated from Lenoir Rhyne College, Hickory, NC, with a major in chemistry and minors in biology, physics and mathematics. She pursued graduate work in chemistry at the University of North Carolina at Chapel Hill. In the mid-1950's, she began her teaching career in Chesterville, OH where she taught high school biology, chemistry, physics, and both advanced and general mathematics, along with general science.
      </p>

      <h4 className="text-xl font-semibold mb-3 text-school-red">Career at Fredericktown</h4>
      
      <p className="mb-4">
        In the mid-1960's, living in Fredericktown with her husband, Charles Gregg and children, Anne and Geoff, she was offered a teaching position in the Fredericktown school system. Accepting this position meant enrollment in Ashland College to complete coursework required for an Ohio teaching certificate.
      </p>
      
      <p className="mb-4">
        Reflecting on her twenty-five-year tenure at Fredericktown, she feels that our school offered excellent academics led by a dedicated teaching staff. Her main goal was always to inspire students to discover their talents and to challenge them to work diligently to achieve personal success to the best of their abilities.
      </p>

      <h4 className="text-xl font-semibold mb-3 text-school-red">Empowering Women in STEM</h4>
      
      <p className="mb-4">
        As a woman, another important goal was to encourage her female students to acquire the skills and qualifications that enabled them to have a career that would provide them with economic independence. Rachel summarizes her sentiments this way, "With an education in the sciences, arts, mathematics and related fields, career opportunities abound. My wish is that I have been a positive force in helping my students achieve their goals."
      </p>

      <h4 className="text-xl font-semibold mb-3 text-school-red">About Malcolm R. Shrimplin</h4>
      
      <p className="mb-4">
        Malcolm graduated at the top of his class at FHS in 1988 and earned a BSBA with a specialization in Operations Research, cum laude from Bowling Green State University in 1992. He also holds a master's degree from The University of Tennessee, Knoxville in Management Science. Malcolm and his husband, David, reside in southern California.
      </p>

      <h4 className="text-xl font-semibold mb-3 text-school-red">How to Donate</h4>
      
      <p className="mb-4">
        Tax-deductible donations to the Rachel A. Gregg Women in STEM Scholarship may be made by writing a check payable to "FHS ALUMNI SCHOLARSHIP FUND"; note "FHS Gregg STEM" on the memo line; and mail it to The Knox County Foundation, P.O. Box 309, Mount Vernon, OH 43050-0309.
      </p>
      
      <p className="mb-4">
        To donate online, please click on the "Donate" button on the FHS Alumni website at www.fredericktownalumni.org and be sure to note "FHS Gregg STEM" when donating.
      </p>
      
      <div className="mt-6 p-4 bg-school-red text-white rounded-lg">
        <h5 className="font-semibold mb-2 !text-white">Rachel A. Gregg's Legacy</h5>
        <p className="text-sm !text-white">
          A dedicated educator who inspired students to discover their talents while specifically encouraging young women to pursue careers in STEM fields that would provide economic independence and limitless opportunities.
        </p>
      </div>
    </div>
  );
}