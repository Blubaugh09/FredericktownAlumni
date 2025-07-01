import React from 'react';

export default function ClassOf1958Content() {
  return (
    <div className="text-gray-800">
      <p className="mb-4">
        The Class of 1958 Scholarship was established in 2018 marking the
        class 60th year reunion.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-3/4">
          <p className="mb-4">
            It is in remembrance of the many teachers who guided us through 12
            years from the North end of the Taylor Avenue school building to the
            South end of that now gone building.
          </p>
          <p className="mb-4">
            The scholarship is also in memory of our classmates who are no
            longer with us.
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          {/* Image placeholder - you can add an actual image here later */}
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Class of 1958 Photo
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-6 bg-gray-50 rounded-lg border-l-4 border-school-red">
        <h4 className="text-lg font-semibold mb-3">Our Purpose</h4>
        <p className="text-lg italic">
          "The purpose of the scholarship is to provide assistance to future Freddies who pursue post-secondary 
          education and encourage them to give back to the Alumni Scholarship program as
          they become successful."
        </p>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-5 rounded-lg text-center">
          <h4 className="font-bold text-school-red mb-3">In Remembrance</h4>
          <div className="h-20 w-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-200">
            <span className="text-3xl">🕯️</span>
          </div>
          <p>
            Honoring the dedicated teachers who guided the Class of 1958 
            through their educational journey at the Taylor Avenue school building.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg text-center">
          <h4 className="font-bold text-school-red mb-3">In Memory</h4>
          <div className="h-20 w-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-200">
            <span className="text-3xl">💫</span>
          </div>
          <p>
            Commemorating the classmates of 1958 who are no longer with us, 
            but whose spirits continue to inspire future generations of Freddies.
          </p>
        </div>
      </div>
      
      <div className="mt-8 text-center p-4 bg-gray-50 rounded-lg">
        <p className="text-xl font-semibold mb-2">60 Years of Freddie Pride</p>
        <p className="italic">
          Established on the 60th anniversary of graduation, this scholarship embodies the 
          Class of 1958's commitment to education and their desire to create a legacy that continues to give back.
        </p>
      </div>
    </div>
  );
} 