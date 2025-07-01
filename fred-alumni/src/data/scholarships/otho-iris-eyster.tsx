import React from 'react';

export default function EysterContent() {
  return (
    <div className="text-gray-800">
      <p className="mb-4">
        The FHS Alumni Association is pleased to announce that a fully
        endowed scholarship has been established to honor the lives of
        Otho S. & Iris Jeanne (Moree) Eyster.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-3/4">
          <p className="mb-4">
            Otho ('37) and Jeanne ('38) Eyster both grew up in the Fredericktown
            school district; Otho, in Ankneytown and Jeanne, on Chestnut Street.
            The Eysters remained in the community to raise their five children who all became FHS grads.
          </p>
          <p className="mb-4">
            The Eyster Scholarship will be awarded annually beginning in 2018.
            Their sons Otho ('61) and Chase ('79) established this scholarship to
            recognize their parents' commitment to higher education and lifelong learning.
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          {/* Image placeholder - you can add an actual image here later */}
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Otho & Iris Jeanne Eyster Photo
          </div>
        </div>
      </div>
      
      <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-school-red">
        <p className="text-lg italic">
          "Because the Eysters' five children were the first generation of the family to
          benefit from higher education, the Eyster family wants to help
          other Fredericktown students have the same opportunity."
        </p>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-bold text-school-red mb-2">Family Legacy</h4>
          <ul className="list-disc pl-5">
            <li>Otho Eyster - Class of 1937</li>
            <li>Iris Jeanne (Moree) Eyster - Class of 1938</li>
            <li>Five children - All FHS graduates</li>
            <li>Including Otho ('61) and Chase ('79) who established this scholarship</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-bold text-school-red mb-2">Scholarship Values</h4>
          <ul className="list-disc pl-5">
            <li>Commitment to higher education</li>
            <li>Lifelong learning</li>
            <li>Creating opportunities for future generations</li>
            <li>Supporting educational aspirations in the community</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 