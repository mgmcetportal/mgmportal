import React from 'react'
export const Footer = () => {
  return (
    <>
    <div className=" mgm-footer bg-[#FE9000]">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="useful-links p-4 flex justify-center py-5 md:flex md:justify-start border-b-2  border-[#094074] md:border-b-0">
            <ul>
            <h1 className="flex justify-center pb-5 text-3xl hover:text-blue-500 md:justify-start">Useful Links</h1>
              <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">MGM info @Wikipedia </li>
              <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">Online Payment</li>
              <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">DTE</li>
              <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">EOA of 2023-24</li>
              <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">DTE, AICTE EoA & University Letters</li>
              <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">FRA Proposal</li>
            </ul>
          </div>
    
            <div className="useful-links  p-4 flex justify-center py-5 md:flex md:justify-start border-b-2  border-[#094074] md:border-b-0">
              <ul>
              <h1 className="flex justify-center pb-5 text-3xl hover:text-blue-500 md:justify-start">Quick Links</h1>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">Placements</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">Admission</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">Photo Gallery</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">Syllabus</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">Facilities</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">Fest</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">Central Library</li>
              </ul>
          </div>

          <div className="useful-links p-4 flex justify-center py-5 md:flex md:justify-start border-b-2  border-[#094074] md:border-b-0">
              <ul>
              <h1 className="flex justify-center pb-5 text-3xl hover:text-blue-500 md:justify-start">MGM's Group</h1>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">Engineering College</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">Management College</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">Medical College & Hospital</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">Nursing College</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">Physiotherapy College</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">Dental College & Hospital</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">Health Science University</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">CCSIT</li>
              </ul>
          </div>

          <div className="useful-links p-4 flex justify-center py-5 md:flex md:justify-start border-b-2  border-[#094074] md:border-b-0">
              <ul>
              <h1 className="flex justify-center pb-5 text-3xl hover:text-blue-500 md:justify-start">Contact Us</h1>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">MGM info @Wikipedia</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">Online Payment</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">DTE</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">EOA of 2023-24</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">DTE, AICTE EoA & University Letters</li>
                <li className="flex justify-center pb-5 hover:underline cursor-pointer md:justify-start">FRA Proposal</li>
              </ul>
          </div>
        </div>

        <div className="footer-map p-4 text-center bg-[#094074]">
            &copy; 2023 MGM's College of Engineering and Technology. Sitemap | Credits | LogIn
            <p>Visitor Counts</p>
              <a href="/" title="blog visitor counter" className=" h-[70px] flex justify-center p-5 ">
                <img src="https://counter10.optistats.ovh/private/freecounterstat.php?c=bqspb8n9l6r6qz92m85dm44qsckrl934" border="0" title="blog visitor counter" alt="blog visitor counter"/>
              </a>
        </div>
    </div>
    </>
  )
}
