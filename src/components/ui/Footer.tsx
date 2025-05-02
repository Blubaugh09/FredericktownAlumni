import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Donation Banner */}
        <div className="mb-10 text-center">
          <div className="text-2xl font-semibold mb-4 text-white !important">Support Fredericktown Alumni Association</div>
          <a 
            href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-white-300 text-lg font-bold rounded-md text-white bg-school-red hover:bg-red-800 transition-all duration-200 shadow-md"
          >
            Donate Now
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="bg-black p-4 rounded">
            <div className="text-2xl font-bold mb-4 text-white !important">Fredericktown Alumni</div>
            <div className="text-lg text-white !important">
              Supporting the alumni community and future generations of Fredericktown students.
            </div>
          </div>
          
          <div className="bg-black p-4 rounded">
            <div className="text-xl font-bold mb-4 text-white border-b border-white-800 pb-2 !important">Quick Links</div>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-lg text-white hover:text-school-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-lg text-white hover:text-school-red transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/funds" className="text-lg text-white hover:text-school-red transition-colors">
                  Funds
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="bg-black p-4 rounded">
            <div className="text-xl font-bold mb-4 text-white border-b border-white-800 pb-2 !important">Resources</div>
            <ul className="space-y-3">
              <li>
                <Link href="/scholarships" className="text-lg text-white hover:text-school-red transition-colors">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/awardees" className="text-lg text-white hover:text-school-red transition-colors">
                  Awardees
                </Link>
              </li>
              <li>
                <Link href="/yearbooks" className="text-lg text-white hover:text-school-red transition-colors">
                  Yearbooks
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="bg-black p-4 rounded">
            <div className="text-xl font-bold mb-4 text-white border-b border-white-800 pb-2 !important">Support</div>
            <ul className="space-y-3">
              <li>
                <Link href="/donors" className="text-lg text-white hover:text-school-red transition-colors">
                  Donors
                </Link>
              </li>
              <li>
                <a 
                  href="https://knoxcf.fcsuite.com/erp/donate/create?funit_id=1178" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-school-red hover:text-red-400 font-bold"
                >
                  Make a Donation
                </a>
              </li>
              <li>
                <a href="mailto:contact@fredericktownalumni.org" className="text-lg text-white hover:text-school-red transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white-800 mt-12 pt-8 text-center text-base text-white">
          <p>© {currentYear} Fredericktown Alumni Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 