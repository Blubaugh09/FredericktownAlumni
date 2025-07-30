import React from 'react';

export default function JackJeanCarterContent() {
  return (
    <div className="text-gray-800">
      <p className="mb-4">
        The Fredericktown High School Alumni Association is pleased to announce their 21st Named Freddie Alumni Scholarship; the "Jack & Jean Carter Family Scholarship". This new fully endowed Scholarship, which will be first awarded to a 2022 FHS graduate, was funded by Jean Carter and her children Nancy, Tom, and Gary.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        <div className="md:w-3/4">
          <p className="mb-4">
            Jean Braddock Carter gave the family their Fredericktown roots as a life-long resident and a 1947 FHS graduate. Jean loved school and was a member of the National Honor Society while active in many school and church related functions. She even worked at the local bank part-time during her school years, which provided an important career path later in life.
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          {/* Image placeholder - you can add an actual image here later */}
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Jack & Jean Carter Photo
          </div>
        </div>
      </div>

      <h4 className="text-xl font-semibold mb-3 text-school-red">Family Life and Values</h4>
      
      <p className="mb-4">
        Jack Carter, who had Gambier roots, was the quintessential good guy, solid citizen, and great father who never met a stranger. Jack was well known and well liked in the community. Jack and Jean raised their family on a small farm on Route 95 where hard work, Christian values and family time were their priorities. Money was short, but the love was plentiful.
      </p>
      
      <p className="mb-4">
        Jean, the love of Jack's life, concentrated on being a full-time mom and was very involved in the community. Jean made sure the family showed up as a unit each Sunday at the United Methodist Church; the kids school assignments were completed on time; and that their lessons were learned and understood. Jean was also an active volunteer at the Knox County Community Hospital, the Methodist Church, the Interchurch and the Fredericktown schools; and even made time for gardening which was a passion.
      </p>

      <h4 className="text-xl font-semibold mb-3 text-school-red">Overcoming Tragedy</h4>
      
      <p className="mb-4">
        The Carter Family was disrupted when Jack suddenly passed of a heart attack in 1978 at the young age of 53. Gary, the youngest was still a teenager and Tom had just completed his second year of college. Jean stepped up in her time of grief to become the single mom who took the lead as the family breadwinner while encouraging her children to build their own lives. Jean put her earlier banking training to good use and worked another twenty years in the industry retiring in 1999.
      </p>

      <h4 className="text-xl font-semibold mb-3 text-school-red">Children's Accomplishments</h4>
      
      <p className="mb-4">
        Jean is not one to boast, but she beams as she describes her three children and their accomplishments as Freddie students, citizens, and parents:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h5 className="font-semibold text-school-red mb-2">Nancy - FHS '73</h5>
          <p className="text-sm">National Honor Society student who excelled in the Health and Human Services profession at Ohio University.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h5 className="font-semibold text-school-red mb-2">Tom - FHS '76</h5>
          <p className="text-sm">National Honor Society student, played on the 1975 Freddie Regional Finalist baseball team, Architecture grad from OSU who became a successful Real Estate developer.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h5 className="font-semibold text-school-red mb-2">Gary - FHS '82</h5>
          <p className="text-sm">Star on the 1981 Freddie Hall of Fame football team, active in the local community with a successful career in agriculture/business.</p>
        </div>
      </div>
      
      <p className="mb-4">
        Jean is quick to point out her children's best accomplishment is having raised her five wonderful grandchildren.
      </p>

      <h4 className="text-xl font-semibold mb-3 text-school-red">Scholarship Mission</h4>
      
      <p className="mb-4">
        When asked what the driving force was causing the Jack and Jean Carter Family to endow this scholarship; Jean, now 92, said "Fredericktown is a special place with special people, and we want to help build on that. The teachers and educational system at Fredericktown are excellent and have always prioritized the students first along with their individual career goals. Fredericktown may be a small town, but its people have large aspirations. We hope this scholarship will help some deserving students to follow and achieve their goals."
      </p>
      
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h5 className="font-semibold mb-3 text-school-red">Key Milestones</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div><strong>1947:</strong> Jean graduates from FHS as National Honor Society member</div>
          <div><strong>1978:</strong> Jack passes away at age 53</div>
          <div><strong>1999:</strong> Jean retires after 20 years in banking</div>
          <div><strong>2022:</strong> First scholarship awarded to FHS graduate</div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-school-red text-white rounded-lg">
        <h5 className="font-semibold mb-2 !text-white">Jack & Jean Carter Family Legacy</h5>
        <p className="text-sm !text-white">
          A family rooted in hard work, Christian values, and community service who believe in Fredericktown's excellence and want to help deserving students achieve their large aspirations despite coming from a small town.
        </p>
      </div>
    </div>
  );
}