import Link from 'next/link';

export default function ScholarshipAwardees() {
  const currentAwardees = [
    { name: "Kelsey Scott '24", scholarship: "The Ula Weller '35 Leedy Scholarship", duration: "4 years", amount: "$1,100" },
    { name: "Gabrielle Daniels '22", scholarship: "The Richard K. Wilson '65 Scholarship", duration: "4 years", amount: "$2,000" },
    { name: "Ava Parker Cuervo '24", scholarship: "The Dr. William L. & Marietta B. Mahaffey Scholarship", duration: "2 years", amount: "$1,000" },
    { name: "Isaiah Van Slyke '22", scholarship: "The Class of 1961 Scholarship", duration: "4 years", amount: "$1,200" },
    { name: "Alexander Spaulding '22", scholarship: "The Class of 1947 Scholarship", duration: "4 years", amount: "$2,600" },
    { name: "Emma Reed '22", scholarship: "The Otho S. '37 & Iris Jeanne (Moree) '38 Eyster Scholarship", duration: "4 years", amount: "$1,000" },
    { name: "Kelly Sapp '21", scholarship: "The Phillips-Frye Scholarship", duration: "4 years", amount: "$1,200" },
    { name: "Kaleb Randall '24", scholarship: "The 'Gold Star Parents' Scholarship", duration: "4 years", amount: "$1,200" },
    { name: "Emma Fowler '24", scholarship: "The Class of 1958 Scholarship", duration: "2 years", amount: "$1,500" },
    { name: "Tina Cockrell '96", scholarship: "The Class of 1959 Honoring Julie Cochran Rogers Scholarship", duration: "4 years", amount: "$600" },
    { name: "Hailey Ehret '22", scholarship: "The Carmon & Betty Weller & Family Scholarship", duration: "4 years", amount: "$2,200" },
    { name: "Trevor Bellman '24", scholarship: "The George Wilson Davis Scholarship", duration: "4 years", amount: "$1,000" },
    { name: "Braden Sapp '23", scholarship: "The George Wilson Davis Scholarship", duration: "4 years", amount: "$1,000" },
    { name: "Zachery Luckmeier '22", scholarship: "The George Wilson Davis Scholarship", duration: "4 years", amount: "$1,000" },
    { name: "Madison Bender '23", scholarship: "The Dean & Jane Streby Scholarship", duration: "2 years", amount: "$1,400" },
    { name: "Emilio Rojas McCament '24", scholarship: "The Lori Ackerman Class of 1988 Scholarship", duration: "4 years", amount: "$500" },
    { name: "Bethany Winget '23", scholarship: "The Lori Ackerman Class of 1988 Scholarship", duration: "4 years", amount: "$500" },
    { name: "Elaina Partington '22", scholarship: "The Lori Ackerman Class of 1988 Scholarship", duration: "4 years", amount: "$500" },
    { name: "Kaitlyn Lindeman '21", scholarship: "The Lori Ackerman Class of 1988 Scholarship", duration: "4 years", amount: "$500" },
    { name: "Ashley Johnson '21", scholarship: "The Rachel A. Gregg Women in STEM Scholarship", duration: "4 years", amount: "$2,700" },
    { name: "Macy Thorne '21", scholarship: "The FHS Distinguished Alumni Hall of Honor Scholarship", duration: "4 years", amount: "$1,000" },
    { name: "Celeste Swihart '22", scholarship: "The Clyde & Edna Boyd Scholarship", duration: "4 years", amount: "$1,100" },
    { name: "Rachael Patterson '22", scholarship: "The Jack & Jean Carter Family Scholarship", duration: "4 years", amount: "$1,000" },
    { name: "Xavier Platt '22", scholarship: "The Janet Hadley '59 Mather Scholarship", duration: "4 years", amount: "$1,200" },
    { name: "Makayla Scott '22", scholarship: "The Ruth E. Auker Women in STEM Scholarship", duration: "4 years", amount: "$750" },
    { name: "Isaac Anderson '24", scholarship: "The Morris & Sue James & Family Scholarship", duration: "4 years", amount: "$700" },
    { name: "Destiny Blubaugh '23", scholarship: "The Catherine Zagula Women in STEM Scholarship", duration: "4 years", amount: "$750" },
    { name: "Macie Mondillo '23", scholarship: "The Rusty & Mary Dalrymple & Family Scholarship", duration: "4 years", amount: "$1,900" },
    { name: "William Streby '24", scholarship: "The David L. Dalrymple Scholarship", duration: "4 years", amount: "$1,900" },
    { name: "Isabella Mullins '24", scholarship: "The Tracie J. Weller Women in STEM Scholarship", duration: "4 years", amount: "$1,000" },
    { name: "Lucas Phillips '24", scholarship: "The Dr. Robert & Patricia Hines Ronk Scholarship", duration: "4 years", amount: "$700" },
    { name: "Arwen Furnis '24", scholarship: "The Gary & Sharon Ritchey Streby Scholarship", duration: "4 years", amount: "$1,000" },
    { name: "Hannah Hogle '24", scholarship: "The Jeannine Weller Davis Scholarship", duration: "4 years", amount: "$1,000" }
  ];

  const historicalAwardees = [
    { year: "2016", recipients: ["Emily Carney", "Austin Geiger", "Justin Goeppinger", "Aria Hoeflich"] },
    { year: "2015", recipients: ["Tyler Ruhl"] },
    { year: "2014", recipients: ["Kaitlyn Frazier", "Hannah Bowman", "Sam Armstrong"] },
    { year: "2013", recipients: ["Bethany Wittman", "Natalee Johnson", "Logan Smith"] },
    { year: "2011", recipients: ["Shelbi Guy", "Jordan Radel", "Austin Hoeflich"] },
    { year: "2010", recipients: ["Gabrielle Hoeflich", "Dannielle Goeppinger", "C. J. Ruhl"] },
    { year: "2009", recipients: ["Amber Brady", "Brittany Fry", "Kasey Berry"] },
    { year: "2008", recipients: ["Curtis Ashcraft", "Sammi Lepley", "Merrit Zollars"] },
    { year: "2007", recipients: ["Eliza Wiggins", "Kevin Berry"] },
    { year: "2006", recipients: ["Troy Bell Jr.", "Emily Roe", "T.J. Cramer"] },
    { year: "2005", recipients: ["Jeff Blubaugh", "Shawna Dye"] },
    { year: "2004", recipients: ["Ryan Goeppinger", "Tara Durbin Wolpe"] },
    { year: "2003", recipients: ["Nick Cline", "Zachary Grimm", "Ryan Shoemaker"] },
    { year: "2002", recipients: ["Jeffrey Dickerson", "Chip Sargent"] },
    { year: "2001", recipients: ["Todd Stephens", "Becky Barkschat"] },
    { year: "2000", recipients: ["Scott Cothren", "Erin Dilley"] },
    { year: "1999", recipients: ["Sarah Beheler", "Gabe Christopher"] },
    { year: "1998", recipients: ["Michael Bechtel", "Dick Hamey", "Jeremy Werner"] },
    { year: "1997", recipients: ["Tamara Molnar"] },
    { year: "1996", recipients: ["Megan Price", "Tina Cockrell"] },
    { year: "1995", recipients: ["Jeremiah Friend", "Richard Blakesley"] },
    { year: "1994", recipients: ["Jodi Frazier", "Jeff Strong"] }
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-school-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-16  sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Scholarship Awardees</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl">
              Recognizing excellence in education since 1994
            </p>
          </div>
        </div>
      </div>

      {/* Current Awardees Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Scholarship Recipients</h2>
        <div className="mb-4 text-gray-600">
          <p className="text-lg">Our scholarships are making a difference in the lives of {currentAwardees.length} current students.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Scholarship
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Annual Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentAwardees.map((awardee, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {awardee.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {awardee.scholarship}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {awardee.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {awardee.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Statistics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-school-red">{currentAwardees.length}</div>
            <div className="text-gray-600 mt-2">Current Recipients</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-school-red">30+</div>
            <div className="text-gray-600 mt-2">Named Scholarships</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-school-red">$249,700+</div>
            <div className="text-gray-600 mt-2">Total Awarded Since 1994</div>
          </div>
        </div>

        {/* Historical Recipients */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">FHS Alumni Association Scholarship Awardees (1994-2016)</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Before the establishment of our named scholarships, the FHS Alumni Association awarded general scholarships to deserving students. Below are the recipients from 1994 to 2016:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historicalAwardees.map((yearGroup) => (
              <div key={yearGroup.year} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{yearGroup.year}</h3>
                <ul className="space-y-1">
                  {yearGroup.recipients.map((recipient, index) => (
                    <li key={index} className="text-gray-700">{recipient}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Scholarships */}
        <div className="text-center mt-12">
          <Link href="/scholarships" className="text-school-red hover:text-red-800 font-medium">
            ← Back to Scholarships
          </Link>
        </div>
      </div>
    </div>
  );
}