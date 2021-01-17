import React from 'react'
import './mobile-navbar.scss'
import { NavLink } from 'react-router-dom'

const MobileNavbar = () => {
  return (
    <div className='mobile-navbar'>
      <div className="container">
        <ul className='mobile-nav-links'>
          <li><NavLink to='/stories'>Stories</NavLink></li>
          <li><NavLink to='/features'>Features</NavLink></li>
          <li><NavLink to='/pricing'>Pricing</NavLink></li>
        </ul>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default MobileNavbar;