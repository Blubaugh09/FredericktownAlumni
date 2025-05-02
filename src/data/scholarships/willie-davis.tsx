import React from 'react';

export default function WillieDavisContent() {
  return (
    <div className="text-gray-800">
      <p className="mb-4">
        The "Willie Davis" Scholarship is intended to provide the Head Football Coach with a
        teaching tool for the standards of excellence in the values that are important in football
        and in life.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-3/4">
          <p className="mb-4">
            The most enduring things that will come from a high school football experience is a
            chance to learn, practice and come to appreciate the values that are the criteria for the
            Willie Davis Scholarship.
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          {/* Image placeholder - you can add an actual image here later */}
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Willie Davis Image
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-6 bg-gray-50 rounded-lg border-l-4 border-school-red">
        <h3 className="text-xl font-bold mb-4">Core Values</h3>
        <p className="mb-4 italic">
          "The award has nothing to do with need and very little to do with athletic ability because
          a high school player cannot control their financial circumstances or their god given
          abilities, but they are in total control of their personal value system and what they make
          of the ability they have."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h4 className="font-bold text-school-red mb-2">Work Ethic</h4>
            <p>
              Good work ethic where you learn to prepare to be your best. Games are won
              during the off season and at practice; you don't just "turn it on" Friday night.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h4 className="font-bold text-school-red mb-2">Positive Attitude</h4>
            <p>
              Positive Attitude that envisions and expects favorable results; handles the ups
              and downs; accepts coaching and feedback; and keeps moving toward the goal
              despite discouragement.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h4 className="font-bold text-school-red mb-2">Team Focus</h4>
            <p>
              Team Focus that puts the good of the team above self-interests.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h4 className="font-bold text-school-red mb-2">Heart</h4>
            <p>
              Heart - passion, persistence, courage, getting the most of your ability, giving your
              best effort and never giving up.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-school-red mb-4">Criteria and Process</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-school-red flex items-center justify-center text-white font-bold mr-4">
              1
            </div>
            <div>
              <p>
                Awarded annually to a graduating member of the FHS HS Football Team and renewable
                up to four years.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-school-red flex items-center justify-center text-white font-bold mr-4">
              2
            </div>
            <div>
              <p>
                Any post high school education approved by the Knox County Foundation (KCF) qualifies
                for the award.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-school-red flex items-center justify-center text-white font-bold mr-4">
              3
            </div>
            <div>
              <p>
                Interested Candidates need to follow the established FHS Alumni Assn Application
                process to be eligible.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-school-red flex items-center justify-center text-white font-bold mr-4">
              4
            </div>
            <div>
              <p>
                Selection is made by the High School Football Coach, endorsed by the Fredericktown-
                Willie Davis Youth Football Board of Directors and approved by the FHS Alumni Assn
                Scholarship Committee.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-gray-100 rounded-lg text-center">
        <h4 className="font-semibold text-lg mb-3">A Scholarship Based on Character</h4>
        <p className="italic">
          This unique scholarship recognizes that while athletic ability may vary, every player has complete 
          control over their character, work ethic, and personal values.
        </p>
      </div>
    </div>
  );
} 