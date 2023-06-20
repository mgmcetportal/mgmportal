import React from 'react'

export const CollegeRank = () => {
  return (
    <div className="crank bg-white pt-10">
      <div className="crank-title ">
        <h1 className="text-center text-3xl font-extrabold text-[#094074] hover:text-yellow-600">Our Ranking</h1>
      </div>
      <div className="crank-render grid grid-cols-2">
        <div className="crank-item h-fit m-4 md:ml-64 ">
          <div className="crbox h-56 ">
            <h1 className="text-center text-3xl pt-5 font-bold text-[#094074] ">#59</h1>
            <p className="text-center  pt-5 text-yellow-600 text-xs md:text-lg"> MGM-CET is Ranked 59 in Top 140 Engineering Institutes </p>
            <div className="flex md:justify-center content-center ">
             <img className="flex md:justify-center md:content-center pt-8 " src="https://www.lpu.in/landing-pages/brand/images/The.jpg" alt=''/>
            </div>
          </div>
        </div>

        <div className="crank-item h-fit m-4 md:mr-64">
          <div className="crbox h-56 ">
            <h1 className="text-center text-3xl pt-5 font-bold text-[#094074] ">#47</h1>
            <p className="text-center  pt-5 text-yellow-600 text-xs md:text-lg  "> MGM-CET is Ranked 47 in Top 100 Private Engineering Institutes </p>
            <div className="flex md:justify-center content-center ">
                <img className="flex md:justify-center md:content-center pt-5  md:mt-5 " src="https://www.lpu.in/landing-pages/brand/images/The.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
