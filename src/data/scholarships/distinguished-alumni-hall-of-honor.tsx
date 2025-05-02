import React from 'react';

export default function DistinguishedAlumniHallOfHonorContent() {
  return (
    <div className="text-gray-800">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-3/4">
          <p className="mb-4">
            The Fredericktown High School Alumni Association is pleased to
            announce that a fully endowed scholarship has been established by
            members of the FHS Distinguished Alumni Hall of Honor. The scholarship
            will become the 17th named FHS Alumni Scholarship and will be first
            awarded to a 2021 FHS graduate. The initial annual award will be $500.
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            FHS Hall of Honor
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-school-red mb-6">About the Distinguished Alumni Hall of Honor</h3>
        
        <p className="mb-4">
          The FHS Distinguished Alumni Hall of Honor was established in 2012 to recognize graduates
          with exceptional career achievements and to inspire present-day students to establish their
          own goals, knowing that they can start at FHS, compete equally with the best the world has to
          offer and accomplish great things with their lives.
        </p>
        
        <div className="border-t border-gray-200 my-6 pt-6">
          <h4 className="font-bold text-lg mb-3">Legacy of Excellence</h4>
          <p className="mb-4">
            To date 18 FHS graduates have been selected for induction into the Hall of Honor, with
            graduation years ranging from 1932 to 1997. While 65 years separate their graduation dates,
            the keys to success they cited had remarkably common themes that remained timeless across
            the decades — a good education, continual learning, strong values, a focus on goals and, most
            of all, hard work.
          </p>
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-gray-50 rounded-lg border-l-4 border-school-red">
        <h4 className="font-semibold mb-3">The Fredericktown Experience</h4>
        <p className="mb-4">
          Inductees were nearly unanimous in commenting on what a blessing it was to grow up in
          Fredericktown, a small, tight-knit community with one school system, where most students go
          through 12 years with the same classmates. And where the whole community was rooting for
          their success and keeping an eye on them, with parents often warning that everyone in
          Fredericktown would know if they did wrong even before they got home. Inductees said that
          with time and experience they have come to realize how very special their Fredericktown years
          were and what a positive impact the community had on their lives and careers.
        </p>
      </div>
      
      <div className="mt-8 p-5 bg-gray-100 rounded-lg">
        <h4 className="font-semibold text-lg mb-3 text-center">Purpose of the Scholarship</h4>
        <p className="mb-4">
          The inductees say that they are funding this scholarship to help the future generations of
          Freddies to continue their educational journeys based on the values of a Fredericktown
          foundation.
        </p>
      </div>
      
      <div className="mt-8 p-5 bg-gray-50 rounded-lg text-center">
        <h4 className="font-semibold text-lg mb-2">Recognition</h4>
        <p className="mb-4">
          All Distinguished Alumni Hall of Honor members are recognized with a plaque in the school
          lobby and online at the FHS Alumni website, <a href="http://www.fredericktownalumni.org/" className="text-school-red hover:underline">http://www.fredericktownalumni.org/</a>, where
          their names, photos, accomplishments and advice to those future Freddies are listed.
        </p>
      </div>
      
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <div className="w-full md:w-auto text-center p-4 bg-gray-100 rounded-lg">
          <div className="text-2xl font-bold text-school-red">18</div>
          <div className="text-sm">Hall of Honor Inductees</div>
        </div>
        <div className="w-full md:w-auto text-center p-4 bg-gray-100 rounded-lg">
          <div className="text-2xl font-bold text-school-red">65</div>
          <div className="text-sm">Years Spanning Graduations</div>
        </div>
        <div className="w-full md:w-auto text-center p-4 bg-gray-100 rounded-lg">
          <div className="text-2xl font-bold text-school-red">2012</div>
          <div className="text-sm">Year Established</div>
        </div>
        <div className="w-full md:w-auto text-center p-4 bg-gray-100 rounded-lg">
          <div className="text-2xl font-bold text-school-red">$500</div>
          <div className="text-sm">Initial Annual Award</div>
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-gray-50 rounded-lg text-center">
        <p className="italic">
          "They can start at FHS, compete equally with the best the world has to offer, and accomplish great things with their lives."
        </p>
      </div>
    </div>
  );
} 