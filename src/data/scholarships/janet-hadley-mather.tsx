import React from 'react';

export default function JanetHadleyMatherContent() {
  return (
    <div className="text-gray-800">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-3/4">
          <p className="mb-4">
            The Fredericktown High School Alumni Association is pleased to announce
            that a fully endowed scholarship has been established to honor the life of
            1959 Fredericktown High School graduate Janet Hadley Mather.
          </p>
          <p className="mb-4">
            The Mather scholarship, which will first be awarded to a 2022 FHS graduate, is
            being sponsored by her husband, Robert J. Mather, and their daughters,
            Stacia Kaschak and Kristy Caldarella, who provided the following memories
            and insights on Jan's life.
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Janet Hadley Mather Photo
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-school-red mb-6">Early Life and Education</h3>
        
        <div className="mb-6">
          <p className="mb-4">
            Jan was born on Nov. 22, 1941, in Marietta to John Edward and Bess Blair Hadley. She grew up
            in Fredericktown, graduating from Fredericktown High School in 1959. Jan furthered her
            education at Kent State University, where she met her future husband, Robert Mather, in a
            physics class. They were married in Kent on June 19, 1965.
          </p>
        </div>
        
        <div className="border-t border-gray-200 my-6 pt-6">
          <h4 className="font-bold text-lg mb-3">Career and Family</h4>
          <p className="mb-4">
            Jan taught school in Ohio, Iowa, and Pennsylvania, and retired from the Allegheny County Department of Human Services in
            Pittsburgh, PA. In addition to being a loving wife, mother and friend, Jan also actively volunteered with
            programs to benefit people.
          </p>
        </div>
        
        <div className="border-t border-gray-200 my-6 pt-6">
          <h4 className="font-bold text-lg mb-3">Connection to FHS Alumni Association</h4>
          <p className="mb-4">
            Janet valued education and was instrumental in the founding of
            the Fredericktown High School Alumni Association's Permanent Endowment to fund
            scholarships for Fredericktown High School graduates.
          </p>
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-gray-50 rounded-lg border-l-4 border-school-red">
        <h4 className="font-semibold mb-3">Community Involvement</h4>
        <p className="mb-4">
          She was a member of the United Methodist Church in Stow, the P.E.O. International Sisterhood,
          Gamma Phi Beta social sorority and Phi Kappa Phi honorary fraternity. She volunteered at the
          food pantry at her church and facilitated the founding of Bulldog Bags, Inc., a non-profit
          weekend food program for children on the Stow-Munroe Falls City School District. Jan also
          volunteered with the Retired Senior Volunteer Program in the Medications Assistance Program,
          helping seniors receive access and financial assistance to necessary medications.
        </p>
      </div>
      
      <div className="mt-8 p-5 bg-gray-100 rounded-lg">
        <h4 className="font-semibold text-lg mb-3 text-center">Purpose of the Scholarship</h4>
        <p className="mb-4">
          In recognition of Jan's altruism and concern for the well-being of others, her husband and
          children want to give Jan a legacy that will last for all time by establishing a fully endowed
          named scholarship that will support Freddie graduates.
        </p>
      </div>
      
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <div className="w-full md:w-auto text-center p-4 bg-gray-100 rounded-lg">
          <div className="text-2xl font-bold text-school-red">1959</div>
          <div className="text-sm">FHS Graduation Year</div>
        </div>
        <div className="w-full md:w-auto text-center p-4 bg-gray-100 rounded-lg">
          <div className="text-2xl font-bold text-school-red">1965</div>
          <div className="text-sm">Marriage to Robert Mather</div>
        </div>
        <div className="w-full md:w-auto text-center p-4 bg-gray-100 rounded-lg">
          <div className="text-2xl font-bold text-school-red">2022</div>
          <div className="text-sm">First year scholarship awarded</div>
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-gray-50 rounded-lg text-center">
        <h4 className="font-semibold text-lg mb-2">Established by Robert J. Mather and Family</h4>
        <p className="italic">
          "In recognition of Jan's altruism and concern for the well-being of others."
        </p>
      </div>
    </div>
  );
} 