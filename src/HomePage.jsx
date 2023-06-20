import React from 'react'
import { CollegeRank } from './components/CollegeRank'
import { Footer } from './components/Footer'
import { Placement } from './components/Placement'

export const HomePage = () => {
  return (
    <div className="main">
      <CollegeRank/>
      <Placement/>
      <Footer/>
    </div>
  )
}
