import React from 'react';

export default function ClassOf1947Content() {
  return (
    <div className="text-gray-800">
      <p className="mb-4">
        The FHS Alumni Association is pleased to announce that a fully endowed
        scholarship has been established by the Class of 1947; the scholarship
        will be awarded annually and forever with 2017 FHS graduate Baylee
        Hauger being the first recipient.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        <div className="md:w-3/4">
          <p className="mb-4">
            While times have changed since the Class of 1947 graduated 70 years
            ago, the class members say that the skills and values that were
            important then are still the keys to success in today's world. Their
            consistent message was "It all starts with a good education, then hard
            work".
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          {/* Image placeholder - you can add an actual image here later */}
          <div className="bg-gray-200 h-48 w-48 flex items-center justify-center text-gray-500 rounded-md">
            Class of 1947 Photo
          </div>
        </div>
      </div>
      
      {/* Class Member Stories */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-school-red mb-4">Class Member Stories</h3>
        
        {/* Shirley Ackerman Burgett */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold mb-2">Shirley Ackerman Burgett</h4>
          <p className="mb-3">
            "We had good teachers at Fredericktown schools, we did not have all the fancy courses that 
            the Columbus schools had, but you get out of it what you put into it".
          </p>
          <p className="text-gray-700">
            After high school, Shirley helped her husband, Bill, start a business and together
            raised 5 children. In the early days, Shirley and Bill would celebrate their hard work with a
            butterscotch sundae at the local Corner Cupboard restaurant. Later at age 37, with 3 children
            still at home, Shirley went to the OSU Mansfield branch, graduating in 1972 with an Education
            degree; the same year her son, Brian, graduated from the main OSU campus. After graduation,
            Shirley served as a volunteer teacher at Johnsville Schools for 5 years before taking up her own
            career in farming, saying "I just enjoyed farming more than teaching".
          </p>
        </div>
        
        {/* Joyce Shipley Pence */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold mb-2">Joyce Shipley Pence</h4>
          <p className="mb-3">
            Joyce remembers milking cows before and after school on the family farm; and
            enjoying the noon-time basketball tournaments with each school bus making up a team.
          </p>
          <p className="text-gray-700">
            Joyce was a good athlete and won a silver dollar in a fastest girl competition; long time Freddies know
            all about those Shipley athletic genes. After high school Joyce attended beauty school in
            Mansfield; and met her future husband, Calvin, while waitressing to help pay for her schooling.
            After working for others for a few years, Joyce opened her own beauty shop in 1955 and still
            serves customers two days a week: attributing a focus on customer satisfaction as the key to
            her success. Joyce's advice to the youth of today is to "do your best in school and to have a plan
            for your future".
          </p>
        </div>
        
        {/* Fred Turner */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold mb-2">Fred Turner</h4>
          <p className="mb-3">
            Fred says he learned the most in his two years at the Pinkley Road School where all 8
            grades were taught in the same room.
          </p>
          <p className="text-gray-700">
            When he came to the "city school", the country kids and
            city kids had to learn how to get along with each other. Fred recalls that after football practice
            the country kids had to walk home, then do their chores; no wonder they were in excellent
            condition! Fred's favorite class was shop and advises the youth of today to "study hard, work
            together; work is the key to success".
          </p>
        </div>
        
        {/* Harold Ebersole */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold mb-2">Harold Ebersole</h4>
          <p className="text-gray-700">
            Harold recalls having "small classes, good teachers and good classmates" as major
            positives of being a member of the Class of 1947. Harold also pointed out an interesting fact;
            his uncle, Fred Turner, was a classmate and good friend. Harold's advice for today's youth is to
            "always show up for work and be on time".
          </p>
        </div>
        
        {/* Jean Braddock Carter */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold mb-2">Jean Braddock Carter</h4>
          <p className="text-gray-700">
            Jean also recalls one great year at the Brick School before 11 years at the
            Fredericktown School. She credits the teachers for her success; saying "they emphasized the
            basics and also taught us the social skills like politeness". Home Economics was her favorite and
            most useful course. Jean's advice to today's students is "do your homework and persevere-
            keep hammering away at your goals".
          </p>
        </div>
      </div>
      
      <p className="mt-6 mb-4">
        All said that they are proud that the Class of 1947 has stuck together all these years and is now
        able to endow a scholarship for the future generations of Freddies. They said "this Scholarship
        is in recognition of the great support and education we received from the community and the
        school system, especially the teachers. Fredericktown was a great place to grow up. We were
        instilled with the solid values and provided the opportunity to learn the skills we needed. With
        much appreciation, we are grateful to be able to pay it forward".
      </p>
      
      <div className="mt-6 bg-gray-50 p-4 rounded-lg border-l-4 border-school-red">
        <h4 className="text-lg font-semibold mb-2">Class of 1947 Values</h4>
        <ul className="list-disc pl-5 italic">
          <li>"It all starts with a good education, then hard work"</li>
          <li>"Do your best in school and have a plan for your future"</li>
          <li>"Study hard, work together; work is the key to success"</li>
          <li>"Always show up for work and be on time"</li>
          <li>"Do your homework and persevere - keep hammering away at your goals"</li>
        </ul>
      </div>
    </div>
  );
} 