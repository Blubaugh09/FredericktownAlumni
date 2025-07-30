import React from 'react';

export default function LoriAckermanContent() {
  return (
    <div className="text-gray-800">
      <p className="mb-4">
        The FHS Alumni Association is pleased to announce that a scholarship honoring the teaching career of Lori Ackerman (1960 – 2000) has been fully endowed by The Class of 1988. The class established this scholarship to honor the life and legacy of Fredericktown High School teaching alum Lori Ackerman.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        <div className="md:w-3/4">
          <p className="mb-4">
            Mrs. Ackerman or "Mrs. A", as many so fondly called her, was truly special. She was more than just a teacher. She was your biggest cheerleader, a caring voice, a guiding hand, and a friend. Because she had two daughters in The Class of 1988, our class felt a connection to her and her to us, watching us grow throughout the years, culminating with her serving as our Senior Class Advisor.
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          {/* Image placeholder - you can add an actual image here later */}
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Lori Ackerman Photo
          </div>
        </div>
      </div>

      <h4 className="text-xl font-semibold mb-3 text-school-red">More Than Just a Teacher</h4>
      
      <p className="mb-4">
        She taught us more than just Western Civilization and Government. As seniors, she taught us how to start becoming adults, something she didn't just do for our class. She touched the lives of countless students who came before and after us. Lori loved teaching and truly making a difference in someone's life.
      </p>
      
      <p className="mb-4">
        She was born to Hungarian immigrants of whom she would say "instilled discipline with lots of love". This led to her natural desire to go into teaching. In 1959, she earned her Bachelor's Degree in Education from the Indiana University of Pennsylvania and later earned a Master's Degree in Education from Ashland University. Her greatest fulfillment was being an esteemed mentor and teacher to many, teaching for over forty years before retiring in June of 2000.
      </p>

      <h4 className="text-xl font-semibold mb-3 text-school-red">Community Leadership</h4>
      
      <p className="mb-4">
        All the students who knew her were so blessed that her journey included and ended at Fredericktown High School. Teaching was never enough though, as she proudly made Fredericktown her home and exemplified the civic-minded values that she instilled in her students.
      </p>
      
      <p className="mb-4">
        She served on the Fredericktown and Knox County Boards of Education, the Education Service Center Board, and the Ohio School Board. She was a member of the Ohio Retired Teachers Association, Fredericktown Community Development Foundation, the Fredericktown Senior Activity Center, and the Fredericktown Bicentennial committee.
      </p>

      <h4 className="text-xl font-semibold mb-3 text-school-red">Scholarship Criteria</h4>
      
      <p className="mb-4">
        Ideally, the students who receive this scholarship, much like The Class of 1988, should strive to be friends with all and work to better the community. They should be strong academic performers, while at the same time being involved in a variety of extra-curricular activities that benefit not only themselves, but also the school and the larger community. The students should be the living embodiment of the ideals to which Lori encouraged all her students to aspire.
      </p>

      <h4 className="text-xl font-semibold mb-3 text-school-red">How to Donate</h4>
      
      <p className="mb-4">
        Those who knew Mrs. Ackerman are encouraged to consider making a tax-deductible donation to the scholarship in her memory. You can donate by writing a check payable to "FHS ALUMNI SCHOLARSHIP FUND"; note "FHS Ackerman 1988" on the memo line; and mail it to The Knox County Foundation, P.O. Box 309, Mount Vernon, OH 43050-0309.
      </p>
      
      <p className="mb-4">
        To donate online, please click on the "Donate" button on the FHS Alumni website at www.fredericktownalumni.org and be sure to note "FHS Ackerman 1988" when donating.
      </p>
      
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h5 className="font-semibold mb-3 text-school-red">Matching Fund Opportunity</h5>
        <p className="text-sm text-gray-700 mb-2">
          To encourage others to honor the life and legacy of Ms. Ackerman, the class has solicited $10,000 above and beyond the monies needed to endow the scholarship. These additional funds are available to match all donations received by February 1, 2021.
        </p>
        <p className="text-sm text-gray-700">
          With financial leadership by The Ackerman Family, the intention is to raise the funds over time necessary to offer four of these scholarships, awarding one to a new student each year.
        </p>
      </div>
      
      <div className="mt-6 p-4 bg-school-red text-white rounded-lg">
        <h5 className="font-semibold mb-2 !text-white">Lori Ackerman's Legacy</h5>
        <p className="text-sm !text-white">
          "Mrs. A" was more than just a teacher - she was a cheerleader, caring voice, guiding hand, and friend who taught students how to become adults while exemplifying civic-minded values that made Fredericktown a better community.
        </p>
      </div>
    </div>
  );
}