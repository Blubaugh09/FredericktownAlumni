import React from 'react';

export default function JulieCochranRogersContent() {
  return (
    <div className="text-gray-800">
      <p className="mb-4">
        As a part of its 60th anniversary celebration, the Fredericktown High
        School Class of 1959 has established a scholarship to honor the life
        and legacy of a classmate, Julie Cochran Rogers!
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-3/4">
          <p className="mb-4">
            In 1955, at age 15, Julie contracted polio and would live the rest of her life as a
            paraplegic. However, long before the Americans with Disabilities Act
            of 1990 that prohibits discrimination against individuals
            with disabilities in all areas of public life, this young woman from
            Fredericktown, who would not let her disability keep her from her
            dreams!
          </p>
          <p className="mb-4 font-semibold italic">
            She did not accept NO from a town without curb cuts to allow wheelchairs to easily
            maneuver sidewalks; she did not accept NO from a high school with many steps; she did not
            accept NO from a university that said NO you can't come here, because your classes would have
            a barrier of 97 steps! This young woman accepted any challenge placed before her!
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          {/* Image placeholder - you can add an actual image here later */}
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Julie Cochran Rogers Photo
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-bold text-school-red mb-4">A Story of Determination</h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-school-red flex items-center justify-center text-white font-bold mr-4">1</div>
            <div>
              <p>
                Julie finished her secondary education at Fredericktown thanks to the young men who
                pushed her to school each day, in all kinds of weather, through a town without curb cuts; the
                strong arms that carried Julie in her wheelchair up and down the 3 flights of stairs; and the young
                women who carried the books of the young men who were carrying her wheelchair!
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-school-red flex items-center justify-center text-white font-bold mr-4">2</div>
            <div>
              <p>
                Following two years at the Mansfield Campus of Ohio State University, Julie was told that,
                because of a barrier of 97 steps to classes in Derby Hall, she could not realize her dream of
                becoming a speech therapist. She persevered and that challenge was addressed by a fraternity
                that made it their mission to get her to classes each day, much like the young men at
                Fredericktown High School did!
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-school-red flex items-center justify-center text-white font-bold mr-4">3</div>
            <div>
              <p>
                Julie received her B.S. in 1970 and her M.A. in 1974.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-gray-50 rounded-lg border-l-4 border-school-red">
        <h4 className="font-semibold mb-3">The Class of 1959's Tribute</h4>
        <p className="mb-4">
          The Class of 1959 accepted the challenge of establishing the Class of 1959 honoring Julie
          Cochran Rogers Scholarship. It honors, as well, all of the many amazing efforts to aid Julie in
          saying "NO, Fredericktown, Taylor Street School and the Ohio State University, you aren't going
          to keep me from reaching my dreams!"
        </p>
        <p>
          The Class of 1959 honors Julie Cochran Rogers Scholarship is the 10th named scholarship
          as a part of the Fredericktown Alumni Association's Scholarship Fund.
        </p>
      </div>
      
      <div className="mt-8 p-5 bg-gray-100 rounded-lg border border-gray-300 text-center">
        <p className="text-lg font-semibold mb-3">Support This Scholarship</p>
        <p className="mb-4">
          If you knew Julie and would like to contribute to the scholarship honoring her life and
          legacy, you can do so by sending a check to FHS Alumni Association with "Julie Scholarship" in
          the memo line to: Community Foundation of Knox County/Mt. Vernon, P. O. Box 309, Mt. Vernon,
          OH 43050.
        </p>
        <div className="mt-4">
          <a 
            href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-school-red hover:bg-red-800"
          >
            Contribute Online
          </a>
        </div>
      </div>
    </div>
  );
} 