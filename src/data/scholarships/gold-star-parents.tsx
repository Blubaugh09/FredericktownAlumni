import React from 'react';

export default function GoldStarParentsContent() {
  return (
    <div className="text-gray-800">
      <p className="mb-4">
        The "Gold Star Parents" Scholarship was first awarded in 2018;
        sponsored by Dan '61 and Susan Snyder to honor the venerated
        status that no one wants:
        Gold Star Parent.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-3/4">
          <p className="mb-4">
            "This scholarship gives special recognition to all Gold Star Parents
            whose grief and sacrifice for the country never stops. There is a
            long list of Freddies who made the ultimate sacrifice for their
            country; each a tragic story of heroism and sacrifice for love of
            country - a sacrifice made by the Patriot and their Parents -
            John 15:13".
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          {/* Image placeholder - you can add an actual image here later */}
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Gold Star Symbol
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center p-6 bg-gray-50 rounded-lg">
        <blockquote className="text-xl italic font-semibold text-gray-700">
          "Greater love has no one than this: to lay down one's life for one's friends."
          <footer className="mt-2 text-base font-normal">— John 15:13</footer>
        </blockquote>
      </div>
      
      <div className="mt-8 bg-gray-50 p-5 rounded-lg border-l-4 border-school-red">
        <h4 className="font-semibold mb-3">What is a Gold Star Parent?</h4>
        <p className="mb-4">
          Gold Star Parents are mothers and fathers who have lost a son or daughter in active service 
          of the United States Armed Forces. The Gold Star symbol has been used by American families 
          to honor their loved ones killed in military service since World War I.
        </p>
        <p>
          This scholarship honors not only the ultimate sacrifice made by Fredericktown alumni in service 
          to their country, but also recognizes the enduring grief and sacrifice of the parents who raised these heroes.
        </p>
      </div>
      
      <div className="mt-8 p-5 bg-gray-100 rounded-lg border border-school-red text-center">
        <p className="text-lg font-semibold mb-2">An Invitation to Support</p>
        <p>
          Note: The donor would welcome fellow Freddie donors to add to this scholarship to make the award as
          big as possible.
        </p>
        <div className="mt-4">
          <a 
            href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
          >
            Support This Scholarship
          </a>
        </div>
      </div>
    </div>
  );
} 