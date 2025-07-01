import React from 'react';

export default function DeanJaneStrebyContent() {
  return (
    <div className="text-gray-800">
      <p className="mb-4">
        The Fredericktown High School Alumni Association is pleased to
        announce the Dean & Jane Streby Scholarship that will first be awarded
        to a 2021 FHS graduate. This new fully endowed Scholarship is being
        sponsored by their children Laurie Streby Stelts, Joni Streby Rhoads,
        Carole Streby and Mike Streby.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-3/4">
          <p className="mb-4">
            Dean and Jane Streby have been giants in serving the Fredericktown community for over 70
            years displaying their commitment to faith, loyalty, family and community and, through
            Dean, the journey continues to this day. In recognition of this service, their children want to
            give their parents a legacy that will last for all time.
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          {/* Image placeholder - you can add an actual image here later */}
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Dean & Jane Streby Photo
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-school-red mb-6">A Lifetime of Service</h3>
        
        <div className="space-y-8">
          {/* Dean's section */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="md:w-1/6 flex justify-center">
                <div className="h-24 w-24 rounded-full bg-school-red flex flex-col items-center justify-center text-white font-bold">
                  <span className="text-2xl">Dean</span>
                  <span className="text-sm">Age 93</span>
                  <span className="text-sm">Still Serving</span>
                </div>
              </div>
              <div className="md:w-5/6">
                <h4 className="font-bold text-lg mb-3">Dean Streby's Service</h4>
                <p className="mb-3">
                  Dean has served the community in multiple ways starting with 38 years as a mail carrier.
                  After retiring from the postal service, Dean worked for the Dana Corporation another 18
                  years, then at First Knox National Bank as a courier. 
                </p>
                <p className="mb-3">
                  All along the way, Dean volunteered to
                  multiple organizations--coaching Little League, filming games for the Athletic Departments,
                  helping build and maintain the football stadium, taking care of the officials (which he is still
                  doing today) and promoting the Fredericktown School District and community in various
                  ways.
                </p>
                <p>
                  Also, Dean helped with the Tomato Show Parade for many years, was a former
                  member of the Lion's club where he served as President, is a current member of the Athletic
                  Boosters where he served as past president and is a member of the American Legion. For the
                  past 18 years Dean has been an usher for THE Ohio State University football games (starting
                  as a volunteer and now on the payroll). Dean has not yet retired, is still working, still
                  volunteering and still going strong at age 93!
                </p>
              </div>
            </div>
          </div>
          
          {/* Jane's section */}
          <div>
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="md:w-1/6 flex justify-center">
                <div className="h-24 w-24 rounded-full bg-school-red flex flex-col items-center justify-center text-white font-bold">
                  <span className="text-2xl">Jane</span>
                  <span className="text-sm">1933-2013</span>
                  <span className="text-sm">Forever Loved</span>
                </div>
              </div>
              <div className="md:w-5/6">
                <h4 className="font-bold text-lg mb-3">Jane Streby's Service</h4>
                <p className="mb-3">
                  Not to be outdone by Dean, Jane served as the Fredericktown Primary School secretary for
                  28 years, volunteered as scorekeeper for the High School boys' basketball team for 38 years
                  (only person ever to be selected two consecutive years as scorekeeper for the Girls State
                  Finals tournament), was a Band Booster and served as president in the 1970's heading up a
                  drive to purchase much needed new uniforms. 
                </p>
                <p className="mb-3">
                  Jane also served on the Village Council for 3
                  years at which time she was instrumental in organizing the Fredericktown School Park
                  District. She also assisted the Tomato Show Board by organizing the Hospitality Tent and
                  registering floats for the parades. Dean and Jane were honored to be the Grand Marshalls of
                  the Tomato Show in 2010, accepting with the proviso that their family share in the event.
                </p>
                <p>
                  After Jane's retirement, she volunteered her time at the school, Interchurch and the
                  Salvation Army until a tragic car accident that took her precious life in 2013.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-gray-50 rounded-lg border-l-4 border-school-red">
        <h4 className="font-semibold mb-3">Family Values</h4>
        <p className="mb-4">
          Dean and Jane were also role models in supporting their children's activities, cheering them
          on, encouraging them to do their best. This support continues for their grandchildren and
          great grandchildren. Family always comes first with the Strebys.
        </p>
        <p>
          In recognition of these exemplary lives, the Streby children are paying it forward so their
          parent's legacy will live on forever through this endowed scholarship that will support
          deserving Freddie grads.
        </p>
      </div>
      
      <div className="mt-8 p-5 bg-gray-100 rounded-lg text-center">
        <h4 className="font-semibold text-lg mb-2">Established by the Streby Children</h4>
        <p className="mb-4">
          Laurie Streby Stelts • Joni Streby Rhoads • Carole Streby • Mike Streby
        </p>
        <p className="italic">
          "In recognition of these exemplary lives, the Streby children are paying it forward so their
          parent's legacy will live on forever through this endowed scholarship."
        </p>
      </div>
    </div>
  );
} 