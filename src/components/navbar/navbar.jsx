import React from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg'
import SquareBtn from '../square-btn/square-btn'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
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
        <SquareBtn>
          Get an invite
        </SquareBtn>
      </div>
    </div>
  )
}

export default Navbar;