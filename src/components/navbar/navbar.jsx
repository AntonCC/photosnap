import React from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import SquareBtn from '../square-btn/square-btn'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-links">
          <ul>
            <li><NavLink to='/'>Stories</NavLink></li>
            <li><NavLink to='/'>Features</NavLink></li>
            <li><NavLink to='/'>Pricing</NavLink></li>
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