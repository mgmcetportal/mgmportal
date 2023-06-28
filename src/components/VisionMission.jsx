import React from 'react'
import vision from '../utils/vision.png'
import mission from '../utils/mission.png'
import '../Design.css'

export const VisionMission = () => {
  return (
    <div>
        <div className="vision-mission mb-[30px]">
          <div className="heading text-center text-3xl font-extrabold text-[#094074] hover:text-yellow-600 pb-4">Our Vision & Mission</div>
            <div className="spoiler grid grid-col-1 md:grid-cols-2">
              <div className="vision bg-[#3C6997] h-48 m-3 rounded-xl text-sm md:text-lg">
                <div className="header flex p-4 items-center">
                  <img src={vision} alt="" className="h-20 w-28 white-image"  /> 
                  <h1 className="text-6xl font-bold ml-4 hover:text-[#FE9000] text-white">Vision</h1>
                </div>
                  <p className="p-4 text-white">To be a globally recognized center of excellence in engineering and technology education, fostering innovation, research, and societal transformation.</p>
              </div>

            <div className="mission bg-[#3C6997] h-48 m-3 rounded-xl text-sm md:text-lg">
            <div className="header flex p-4 items-center">
                  <img src={mission} alt="" className="h-20 w-28 white-image"  /> 
                  <h1 className="text-6xl font-bold ml-4 hover:text-[#FE9000] text-white">Mission</h1>
                </div>
                  <p className="p-4 text-white">Empower students with holistic engineering education, nurturing their technical, analytical, and problem-solving skills.</p>
            </div>
            </div>
        </div>
    </div>
  )
}
