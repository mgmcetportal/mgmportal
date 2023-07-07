import React from 'react'
import logo from '../utils/logo-banner.png'

export const HeaderBanner = () => {
  return (
    <div>
        <div className="flex bg-white m-4">
        <div className="header-img flex mr-7 h-11 w-96 md:w-auto md:h-auto">
            <img src={logo} alt=" "  className="items-center justify-center align-middle" />
        </div>
    </div>
    </div>
  )
}
