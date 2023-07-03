import React from 'react'
import { CollegeRank } from './components/CollegeRank'
import { Footer } from './components/Footer'
import { Placement } from './components/Placement'
import { Offer } from './components/Offer'
// import { FeedBack } from './components/FeedBack'
import { Slider } from './components/Slider'
import { VisionMission } from './components/VisionMission'
import Header from './components/Header'


export const HomePage = () => {
  return (
    <div className="main">
      <Header/>
      <Slider/> 
      {/* <Offer/>
      <CollegeRank/>
      <Placement/>
      <VisionMission/>
      <Footer/>  */}
      {/* <FeedBack/> */}
    </div>
  )
}
