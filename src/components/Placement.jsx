import React from 'react'
import dell from "../utils/dell.png"
import df from "../utils/df.jpg"
import hcl from "../utils/hcl.jpg"
import ibm from "../utils/ibm.png"
import indianair from "../utils/indianair.png"
import jpmorg from "../utils/jpmorg.png"
import oracl from "../utils/oracl.png"
import tcs from "../utils/tcs.png"
import wipro from "../utils/wipro.png"
import rcomunication2 from "../utils/rcomunication2.png"
import infi from "../utils/infi.jpg"
import mpha from "../utils/mpha.jpg"
import sc from "../utils/sc.jpg"
import indianarmy from "../utils/indianarmy.jpg"
import lt from "../utils/lt.png"
import simans from "../utils/simans.png"

export const Placement = () => {
  return (
    <>
    <div>
    <div className="crank-title ">
        <h1 className="text-center pt-10 pb-5 text-3xl font-extrabold text-[#094074] hover:text-yellow-600">Top Recruiters</h1>
      </div>
      <div className="mgm-placement md:ml-36 md:mr-36">
        <div className="grid grid-cols-2 p-4 m-4 gap-1 border border-[#FE9000] rounded-xl md:grid-cols-4 md:mb-10 md:p-10 md:gap-10">
          <div className="img-1 h-56 p-4 md:h-[100%]">
            <img src={dell} alt="" />
          </div>

          <div className="img-2 h-56  flex md:h-[100%]">
          <img src={df} alt="" className="self-center"/>
          </div>

          <div className="img-3 h-56 bg-black flex md:h-[100%]">
          <img src={hcl} alt="" />
          </div>

          <div className="img-4 h-56 flex  items-stretch md:h-[100%]">
          <img src={ibm} alt="" className="self-center"/>
          </div>

          <div className="img-5 h-56 flex  items-stretch md:h-[100%]">
          <img src={jpmorg} alt="" className="self-center"/>
          </div>

          <div className="img-6 h-56 flex justify-center items-stretch md:h-[100%]">
          <img src={indianair} alt="" className="self-center "/>
          </div>

          <div className="img-7 h-56 flex  items-stretch md:h-[100%]">
          <img src={oracl} alt="" className="self-center"/>
          </div>

          <div className="img-8 h-56 flex  items-stretch md:h-[100%]">
          <img src={wipro} alt="" className="self-center"/>
          </div>

          <div className="img-9 h-56 flex  items-stretch md:h-[100%]">
          <img src={tcs} alt="" className="self-center"/>
          </div>

          <div className="img-10 h-56 flex  items-stretch md:h-[100%]">
          <img src={rcomunication2} alt="" className="self-center"/>
          </div>

          <div className="img-11 h-56 flex  items-stretch md:h-[100%]">
          <img src={infi} alt="" className="self-center"/>
          </div>

          <div className="img-12 h-56 flex  items-stretch md:h-[100%]">
          <img src={mpha} alt="" className="self-center"/>
          </div>

          <div className="img-13 h-56 flex  items-stretch md:h-[100%]">
          <img src={sc} alt="" className="self-center"/>
          </div>

          <div className="img-14 h-56 flex  items-stretch md:h-[100%]">
          <img src={indianarmy} alt="" className="self-center"/>
          </div>

          <div className="img-15 h-56 flex  items-stretch md:h-[100%]">
          <img src={lt} alt="" className="self-center"/>
          </div>

          <div className="img-16 h-56 flex  items-stretch md:h-[100%]">
          <img src={simans} alt="" className="self-center"/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
