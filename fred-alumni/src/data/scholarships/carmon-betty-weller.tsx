import React from 'react';

export default function WellerFamilyContent() {
  return (
    <div className="text-gray-800">
      <p className="mb-4">
        The Fredericktown High School Alumni Association
        is pleased to announce their 11th Named
        Scholarship which will be awarded to a 2020 FHS
        graduate. This new fully endowed Scholarship was
        funded by the Weller Family--Carmon and Betty
        Lozier Weller and their children Tracie, Jeff and
        Judd.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-3/4">
          <p className="mb-4">
            All five family members were FHS graduates
            covering the span of 1952 to 1980. When asked what the driving force was causing the Weller Family to endow this scholarship,
            Betty said "Education is the most important thing we can give our students to prepare them for
            life. The fact that we had five teachers in our branch of the Weller family--Blanche McCulley,
            Esther McCulley Weller, Carmon Weller, Betty Lozier Weller and Tracie Weller--demonstrates
            our belief in the importance of education. We hope that our scholarship can help many
            Fredericktown students achieve their life-time goals."
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          {/* Image placeholder - you can add an actual image here later */}
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Weller Family Photo
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-school-red mb-4">The Weller Family Legacy</h3>
        
        <div className="space-y-8">
          {/* Carmon Weller */}
          <div className="border-b border-gray-200 pb-6">
            <h4 className="font-bold text-lg mb-2">Carmon Weller (Class of 1952)</h4>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-3/4">
                <p className="mb-3">
                  Carmon was the 1952 graduate where he was the Class and FFA
                  President, an all-around athlete and a faculty favorite. Carmon served his country during the
                  Korean War, worked his way through The Ohio State University graduating in 1965 with a
                  degree in Agronomy.
                </p>
                <p>
                  After teaching high school for four years and working several other jobs,
                  Carmon launched a successful backhoe business and became one of the community's most
                  popular and helpful residents, appropriately earning the nickname of "Ambassador of
                  Goodwill." Carmon's life ended in 2015.
                </p>
              </div>
              <div className="md:w-1/4">
                <ul className="text-sm bg-gray-100 p-3 rounded-lg">
                  <li><span className="font-semibold">Class & FFA President</span></li>
                  <li><span className="font-semibold">Korean War Veteran</span></li>
                  <li><span className="font-semibold">OSU Graduate (1965)</span></li>
                  <li><span className="font-semibold">Teacher & Entrepreneur</span></li>
                  <li><span className="font-semibold">"Ambassador of Goodwill"</span></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Betty Weller */}
          <div className="border-b border-gray-200 pb-6">
            <h4 className="font-bold text-lg mb-2">Betty Lozier Weller (Class of 1954)</h4>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-3/4">
                <p className="mb-3">
                  Betty was the Salutatorian of her Class, a member of the
                  National Honor Society and a popular cheerleader. She completed one year at Ohio State
                  before taking time off to have a family and help pay the bills. Betty returned to the college
                  classroom part-time while continuing to work and raise the children-- ultimately receiving her
                  degree in Business Education from The Ohio State University in 1974.
                </p>
                <p className="mb-3">
                  Betty immediately launched into a 30-year teaching career, with 29 of those years at Fredericktown. She was not
                  only a student favorite in the classroom, but a driving force in numerous extracurricular
                  activities--most notably the activities associated with the National Honor Society.
                </p>
                <p>
                  Betty's community influence went far beyond the school house doors including 27 years as Fiscal
                  Officer for Middlebury Township, serving on the Fredericktown School Board, the FHS Alumni
                  Hall of Honor, and the FHS Alumni Scholarship Fund. It is no surprise that Betty was honored in
                  2017 as the Grand Marshal of the Fredericktown Tomato Show Parade which is acknowledged
                  to be Fredericktown's most prestigious lifetime achievement award.
                </p>
              </div>
              <div className="md:w-1/4">
                <ul className="text-sm bg-gray-100 p-3 rounded-lg">
                  <li><span className="font-semibold">Class Salutatorian</span></li>
                  <li><span className="font-semibold">National Honor Society</span></li>
                  <li><span className="font-semibold">OSU Graduate (1974)</span></li>
                  <li><span className="font-semibold">30-Year Teaching Career</span></li>
                  <li><span className="font-semibold">Tomato Show Grand Marshal (2017)</span></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Weller Children */}
          <div>
            <h4 className="font-bold text-lg mb-3">The Weller Children</h4>
            <p className="mb-4">
              Betty is quick to tell all that both she and Carmon's greatest accomplishment was raising their
              three outstanding children--Tracie, Jeff and Judd--all of whom they are so proud. Each of the
              Weller children were excellent and popular students with significant accomplishments in the
              classroom and on the athletic fields.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-school-red">Tracie Weller</h5>
                <p>
                  Tracie was a whiz in math and science and shared her gifts
                  with others as a high school teacher for 30 years after graduating from The Ohio State
                  University.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-school-red">Jeff Weller</h5>
                <p>
                  Jeff caught Carmon's entrepreneurial spirit and established a successful
                  sandblasting business.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-school-red">Judd Weller</h5>
                <p>
                  Judd, who had an eye for art and was a graduate of the Columbus
                  College of Art and Design, had his life cut short by kidney cancer in 2013.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-gray-50 rounded-lg border-l-4 border-school-red">
        <h4 className="font-semibold mb-3">A Family Dedicated to Education</h4>
        <p className="italic">
          "Education is the most important thing we can give our students to prepare them for
          life. The fact that we had five teachers in our branch of the Weller family--Blanche McCulley,
          Esther McCulley Weller, Carmon Weller, Betty Lozier Weller and Tracie Weller--demonstrates
          our belief in the importance of education."
        </p>
        <p className="mt-2 italic">
          — Betty Weller
        </p>
      </div>
    </div>
  );
} 