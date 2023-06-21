import React from 'react'
import { CollegeRank } from './components/CollegeRank'
import { Footer } from './components/Footer'
import { Placement } from './components/Placement'
import { Offer } from './components/Offer'
// import { Slider } from './components/Slider'

export const HomePage = () => {
  return (
    <div className="main">
      {/* <Slider/> */}
      <Offer/>
      <CollegeRank/>
      <Placement/>
      <Footer/>
    </div>
  )
}
