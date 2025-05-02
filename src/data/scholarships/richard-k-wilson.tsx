import React from 'react';

export default function RichardKWilsonContent() {
  return (
    <div className="text-gray-800">
      <p className="mb-4">
        The FHS Alumni Association is pleased to announce that a fully endowed
        scholarship has been established to honor the life of 1965 FHS graduate
        Richard K. Wilson who overcame significant hurdles to live a courageous
        and fulfilling life.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        <div className="md:w-3/4">
          <p className="mb-4">
            After starting on the varsity football team as a sophomore, Rick was
            diagnosed with a chronic kidney disease and sat out his junior year.
            Coming back his senior year, even with the kidney issue; he earned
            honorable mention All-Ohio. In 1970 he lost his kidneys to the disease and
            was an early kidney transplant recipient at Ohio State University Hospital
            with his brother Ed, FHS 1968, as the donor. The kidney served him well for 17 years until the
            toll of the immune suppressant drugs resulted in the failure of that kidney. He had a second
            transplant in 1987 with brother, Bill, FHS 1962, as the donor.
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          {/* Image placeholder - you can add an actual image here later */}
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Richard K. Wilson Photo
          </div>
        </div>
      </div>
      
      <p className="mb-4">
        In spite of the health challenges, Rick went on to have a successful career in mechanical design
        and drafting and earned a stellar reputation in the field of cryogenics and nuclear energy.
      </p>
      
      <p className="mb-4">
        The joy of his life was his miracle daughter, Kristie. Rick and his wife, Janet, whom he married in
        1969, were told they would likely not be able to have children because of the trauma of the
        kidney transplant on the rest of his systems. To their surprise and elation, Kristie was born in
        1973. Later, when Kristi was diagnosed with dyslexia, it was evident that Rick had accomplished
        so much in his life while dealing with this disability as well. His determination to live life to the
        fullest was a role model for Kristie. She graduated from Adrian College and with husband,
        Andrew, adopted, a baby boy, Stephen, from Kazakhstan in 2008. They have done a wonderful
        job raising a young American boy who is proud of his Kazakhstan heritage. Stephen would have
        loved his Grandpa Rick as did every child who ever met him.
      </p>
      
      <p className="mb-4">
        Rick was the son of Bill and Donna (Earnest) Wilson. Donna was a 1929 graduate of FHS. The
        family attended Fredericktown Presbyterian Church. The three Wilson brothers were familiar
        sights on the playing fields of Fredericktown in the 1960s.
      </p>
      
      <p className="mb-4">
        This scholarship is sponsored by Rick's brother, Bill, and will be awarded annually beginning in
        2017. When Bill was asked what motivated his donation, he said that "In the face of his
        challenges, Rick was always confident, optimistic and ready for a new adventure. Hopefully, this
        scholarship will assist many other Fredericktown High School graduates overcome great
        obstacles and develop the skills to live a life as rewarding as Rick Wilson".
      </p>
      
      <div className="mt-6 flex justify-center">
        <figure className="text-center">
          <div className="bg-gray-200 h-48 w-auto mx-auto mb-2 flex items-center justify-center text-gray-500 rounded-md">
            1969 – Bill-25 Rick-22 Ed-19 (Family Photo)
          </div>
          <figcaption className="text-sm text-gray-600">1969 – Bill-25 Rick-22 Ed-19</figcaption>
        </figure>
      </div>
    </div>
  );
} 