import React from 'react'
import { CollegeRank } from './components/CollegeRank'
import { Footer } from './components/Footer'

export const HomePage = () => {
  return (
    <div className="main">
      <CollegeRank/>
      <Footer/>
    </div>
  )
}
