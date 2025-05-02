import React from 'react';

export default function ClydeEdnaBoydContent() {
  return (
    <div className="text-gray-800">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-3/4">
          <p className="mb-4">
            The Fredericktown High School Alumni Association is pleased
            to announce that a fully endowed scholarship has been
            established to honor the lives of Clyde & Edna Boyd and their
            deep commitment to Fredericktown schools over many
            years.
          </p>
          <p className="mb-4">
            The Clyde & Edna Boyd Scholarship, which will first be awarded to a 2022 FHS graduate,
            is being sponsored by their daughters who provided the following memories and
            insights on their parents' lives.
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Clyde & Edna Boyd Photo
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-school-red mb-6">Family History</h3>
        
        <div className="mb-6">
          <p className="mb-4">
            Clyde, one of the 12 children born to his parents in Saltville, Virginia, moved with
            the family to the Mt. Vernon area when he was young, and he had no schooling beyond
            8<sup>th</sup> grade. But he was an avid reader, and when it came time to marry, he chose a
            schoolteacher, who was introduced to him by one of her students. A native of Knox
            County, Edna graduated from Mt. Vernon High School in 1924 and enrolled at Kent
            State, when it was a Normal School for teacher training.
          </p>
        </div>
        
        <div className="border-t border-gray-200 my-6 pt-6">
          <h4 className="font-bold text-lg mb-3">Marriage and Family</h4>
          <p className="mb-4">
            At the time of their marriage in
            1927, she was teaching in the one-room Green Valley School and Clyde was trucking
            produce from Cleveland to Mt. Vernon. She stopped teaching to raise a family, and he
            continued to do some trucking while gradually turning to farming. In 1942, Clyde and
            Edna purchased a farm three miles north of town on Route 13 and went wholeheartedly
            into the dairy business with a herd of registered Guernseys. The sign on their mailbox,
            Ric-To-Lee-Lo Farm, underscored the center of their lives: their four children (Richard,
            Tom, Betty Lee, and Lois.)
          </p>
        </div>
        
        <div className="border-t border-gray-200 my-6 pt-6">
          <h4 className="font-bold text-lg mb-3">Connection to Fredericktown Schools</h4>
          <p className="mb-4">
            In the late 1940s, when school buses were owner operated, Clyde began driving
            a route that began at his farm. In 1953, Edna returned to teaching, this time in
            Fredericktown where her first-grade class met at improvised quarters in the Methodist
            Church because the school building on Taylor Street lacked space. By 1974, when Edna
            retired, she and Clyde had participated in the schooling of hundreds of students and
            seen all four of their children graduated from FHS: Richard in 1950, Tom in 1953, Betty
            in 1956, and Lois in 1958.
          </p>
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-gray-50 rounded-lg border-l-4 border-school-red">
        <h4 className="font-semibold mb-3">Family Legacy</h4>
        <p className="mb-4">
          All four valued their parents' guidance and commitments. Richard and Tom
          followed in Clyde's footsteps, and after taking over the small lime and fertilizer business
          that he started, they expanded it into what became B&B Farm Services. Betty and Lois
          looked to their mother's example and became teachers.
        </p>
      </div>
      
      <div className="mt-8 p-5 bg-gray-100 rounded-lg">
        <h4 className="font-semibold text-lg mb-3 text-center">Purpose of the Scholarship</h4>
        <p className="mb-4">
          Recognizing how Fredericktown schools provided teachers who cared about
          students and an environment that nurtured achievement, the family is offering this
          small scholarship with the hope of helping other FHS grads proceed toward their goals.
        </p>
      </div>
      
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <div className="w-full md:w-auto text-center p-4 bg-gray-100 rounded-lg">
          <div className="text-2xl font-bold text-school-red">Ric-To-Lee-Lo</div>
          <div className="text-sm">Their farm name honoring their four children</div>
        </div>
        <div className="w-full md:w-auto text-center p-4 bg-gray-100 rounded-lg">
          <div className="text-2xl font-bold text-school-red">1974</div>
          <div className="text-sm">Edna's retirement after years of teaching</div>
        </div>
        <div className="w-full md:w-auto text-center p-4 bg-gray-100 rounded-lg">
          <div className="text-2xl font-bold text-school-red">2022</div>
          <div className="text-sm">First year scholarship awarded</div>
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-gray-50 rounded-lg text-center">
        <h4 className="font-semibold text-lg mb-2">Established by the Boyd Family</h4>
        <p className="italic">
          "Recognizing how Fredericktown schools provided teachers who cared about students and an environment that nurtured achievement."
        </p>
      </div>
    </div>
  );
} 