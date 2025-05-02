import React from 'react';

export default function PhillipsFryeContent() {
  return (
    <div className="text-gray-800">
      <p className="mb-4">
        The most recent named scholarship, which will be awarded to a
        2019 FHS graduate, the Phillips-Frye Scholarship, honors the lives
        of John R. and Angelene C. Phillips and Fred C. and Ruth L. Frye,
        long-time residents of the Fredericktown area.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-3/4">
          <p className="mb-4">
            By establishing the Phillips-Frye Scholarship, Gary Frye
            (FHS '60) and Sharon Phillips Frye (FHS '62), are not only keeping
            the name of their loved ones alive in the community, but, also,
            ensuring that funds will be available in the future for FHS
            graduates.
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          {/* Image placeholder - you can add an actual image here later */}
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Phillips-Frye Families Photo
          </div>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold text-school-red mb-3">Angelene C. Phillips</h4>
          <p className="mb-3">
            Special recognition is given to the teaching career of Angelene Phillips
            for her 12 years as a Home Economics teacher at FHS, followed
            by her serving as Commercial Foods Instructor at Knox County
            Vocational School, and later as an Ohio State University Extension
            Agent for Knox County.
          </p>
          <p>
            She retired in 1983 but is still
            remembered as a favorite teacher by many of her students, 4-H
            members, and their parents.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold text-school-red mb-3">Fred C. Frye</h4>
          <p className="mb-3">
            Further recognition through the Phillips-Frye Scholarship is
            for the long, active community service of Fred C. Frye, working
            through the Lions Club, Salvation Army, and First Baptist Church,
            among others.
          </p>
          <p>
            Mr. Frye served 8 years on the Fredericktown
            School Board, which, over 50 years ago, had the foresight to buy
            the large tract of land which allowed for the construction of
            recent and present school buildings and athletic facilities.
          </p>
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-gray-50 rounded-lg border-l-4 border-school-red">
        <h4 className="font-semibold mb-2">Honoring Two Families' Legacies</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div>
            <h5 className="font-medium mb-1">Phillips Family</h5>
            <ul className="list-disc pl-5">
              <li>John R. Phillips</li>
              <li>Angelene C. Phillips - Educator</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-1">Frye Family</h5>
            <ul className="list-disc pl-5">
              <li>Fred C. Frye - Community Leader</li>
              <li>Ruth L. Frye</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-gray-200">
          <p>
            Established by Gary Frye (FHS '60) and Sharon Phillips Frye (FHS '62) to honor their parents' contributions 
            to education and community service in Fredericktown.
          </p>
        </div>
      </div>
    </div>
  );
} 