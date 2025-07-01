import React from 'react';

export default function MahaffeyContent() {
  return (
    <div className="text-gray-800">
      <p className="mb-4">
        The FHS Alumni Association is pleased to announce that a fully endowed
        scholarship has been established to honor the lives of Dr. William L. &
        Marietta B. Mahaffey.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        <div className="md:w-3/4">
          <p className="mb-4">
            The William L. Mahaffey MD & Marietta B. Mahaffey FHS Scholarship will be
            awarded annually beginning in 2017. This annual two year Junior College
            scholarship is sponsored by the Mahaffey children who were all FHS grads:
            Marilyn '50; Martha Ann '52 and William '54. The Mahaffey children
            provided the following memories and insights on their parents' lives and of the time they spent
            growing up in Fredericktown.
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          {/* Image placeholder - you can add an actual image here later */}
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Dr. & Mrs. Mahaffey Photo
          </div>
        </div>
      </div>
      
      <p className="mb-4">
        Dr. Mahaffey and his wife Marietta grew up in Mount Vernon. Marietta was born in 1904 and
        was a nurse and office manager for Dr. Claypool when she married William. William was born
        in 1906 and went to Kenyon College and obtained his MD degree from The Ohio State
        University.
      </p>
      
      <p className="mb-4">
        After William's graduation they moved to Fredericktown and started a General Medical Practice
        out of their home on Sandusky Street, where they remained for over 25 years. The medical
        office was in the home and consisted of a dispensary, an examining room, a waiting room and a
        three bed surgical suite for tonsillectomies. When we three children were old enough, we
        would assist in treatments. Our father would close the office for 3 to 4 days a week during the
        summer to spend time as a family on Lake Erie.
      </p>
      
      <p className="mb-4">
        Fredericktown, as a small farming community, was tight knit and revolved around a one
        building school and four churches. Most students went through 12 years with the same
        classmates. The community was simply too small to house prejudice.
      </p>
      
      <p className="mb-4">
        Our parents love for us and our nurturing in a community like Fredericktown is what makes us
        what we are today. Our parents knew that the community of Fredericktown allowed them to
        follow and manage our growing up. Our parents always warned us that everyone in
        Fredericktown would know what we did wrong, before we did.
      </p>
      
      <p className="mb-4">
        It takes time and experience to realize and reflect on how really special our Fredericktown years
        were. This small scholarship, hopefully, will allow another age of "Freddie's" to continue their
        journey with education based on the values of a Fredericktown foundation.
      </p>
    </div>
  );
} 