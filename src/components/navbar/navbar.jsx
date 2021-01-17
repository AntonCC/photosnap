import React, { useState } from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg'
import SquareBtn from '../square-btn/square-btn'
import MobileNavbar from '../mobile-navbar/mobile-navbar'

const Navbar = () => {
  const [mobileActive, setMobileActive] = useState()

  const handleClick = () => {
    setMobileActive(!mobileActive)
  }

  return (
    <div className='navbar'>
      <div className="container desktop">
        <div className="logo">
          <NavLink to='/'>
            <Logo />
          </NavLink>
        </div>
        <div className="nav-links">
          <ul>
            <li><NavLink to='/stories'>Stories</NavLink></li>
            <li><NavLink to='/features'>Features</NavLink></li>
            <li><NavLink to='/pricing'>Pricing</NavLink></li>
          </ul>
        </div>
        <div className="btn">
          <SquareBtn>
            Get an invite
          </SquareBtn>
        </div>
        <div className="menu" onClick={handleClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className={`slide-out ${mobileActive ? 'active' : ''}`}>
        <MobileNavbar />
      </div>
    </div>
  )
}

export default Navbar;