import React from 'react'
import './mobile-navbar.scss'
import { NavLink } from 'react-router-dom'
import SquareBtn from '../square-btn/square-btn'

const MobileNavbar = ({ mobileActive, handleMobileNav }) => {
  return (
    <div className='mobile-navbar'>
      <div className={`inner ${mobileActive ? 'active' : ''}`}>
        <ul className='mobile-nav-links'>
          <li><NavLink to='/stories' onClick={handleMobileNav}>Stories</NavLink></li>
          <li><NavLink to='/features' onClick={handleMobileNav}>Features</NavLink></li>
          <li><NavLink to='/pricing' onClick={handleMobileNav}>Pricing</NavLink></li>
        </ul>
        <div className="line"></div>
        <div className="btn">
          <NavLink to='/features' onClick={handleMobileNav}>
            <SquareBtn>Get an invite</SquareBtn>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar;