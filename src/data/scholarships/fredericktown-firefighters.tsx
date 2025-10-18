import React from 'react';

export default function FrederictownFirefightersContent() {
  return (
    <div className="text-gray-800">
      <p className="mb-4">
        The FHS Alumni Association is pleased to announce the "Fredericktown Firefighters Association Scholarship". This new fully endowed scholarship will be the 40th "Freddies Helping Freddies" Scholarship and will first be awarded in 2026.
      </p>

      <h4 className="text-xl font-semibold mb-3 text-school-red">About the Fredericktown Firefighters Association</h4>
      
      <p className="mb-4">
        The Fredericktown Firefighters Association is comprised of firefighters who proudly serve with the Fredericktown Community Fire District (FCFD). Being a volunteer-based fire department, these men and women graciously expend considerable time and effort, above and beyond their normal professions and daily lives, to assist others in their time of need. Although these firefighters are labeled as "volunteers", they possess the same training and certifications as "career" firefighters, perform the same job duties, and are subject to the same risks, making them special people who put others before self.
      </p>

      <h4 className="text-xl font-semibold mb-3 text-school-red">Service and Dedication</h4>
      
      <p className="mb-4">
        While all calls for help to FCFD may not necessarily be classified as an emergency, the Firefighters believe that the person making the call deems the matter to be serious enough to reach out for assistance. The Firefighters make every effort to resolve all situations to a satisfactory conclusion. This service requires a high level of dedication and compassion for others and a diversified basis of knowledge and skills.
      </p>

      <p className="mb-4">
        The members of Fredericktown Firefighters Association also conduct annual fundraising activities to support various initiatives such as member retention, departmental improvements, and charitable activities. All of these initiatives are conducted in addition to the firefighting requirements with the funds raised being held strictly separate from the tax-based income received by the FCFD.
      </p>

      <h4 className="text-xl font-semibold mb-3 text-school-red">Purpose of the Scholarship</h4>
      
      <p className="mb-4">
        When asked what motivated the Firefighters to fund this scholarship, Fire Chief Scott Mast said "the primary purpose of this scholarship is to recognize the generations of individuals that selflessly made a commitment to the FCFD to render assistance to others, regardless of the situation and the risk. It is to also recognize the family members who sacrifice invaluable family time and worry for the welfare of their firefighter".
      </p>

      <div className="mt-6 p-4 bg-school-red text-white rounded-lg">
        <h5 className="font-semibold mb-2 !text-white">Mission and Goal</h5>
        <p className="text-sm !text-white mb-3">
          When questioned about the Firefighters mission and goal, Chief Mast stated:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm !text-white">
          <li><strong>Mission:</strong> "To be wherever we are needed, whenever we are needed, for whatever reason we are needed"</li>
          <li><strong>Goal:</strong> "To be the best volunteer fire department in the nation"</li>
        </ul>
        <p className="text-sm !text-white mt-3">
          "We are thankful for all those willing to accept the mission and the goal."
        </p>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h5 className="font-semibold mb-2 text-school-red">Learn More</h5>
        <p className="text-sm text-gray-700">
          For more information about the Fredericktown Firefighters Association and their service to the community, visit:
        </p>
        <a 
          href="https://fredericktown.touchpros.com/ViewProfile?tabid=8898&showFilterResults=1&filtertype=All&theme=modern_school&res_page=4&Id=283109" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-school-red hover:text-red-800 font-medium mt-2"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
          </svg>
          View on FHS TouchPros
        </a>
      </div>
    </div>
  );
}

