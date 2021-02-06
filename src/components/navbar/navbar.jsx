import React, { useEffect, useContext } from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg'
import { WidthContext } from '../../contexts/widthContext'
import SquareBtn from '../square-btn/square-btn'
import MobileNavbar from '../mobile-navbar/mobile-navbar'
import { ReactComponent as Close } from '../../assets/shared/mobile/close.svg'

const Navbar = ({ mobileActive, handleMobileNav }) => {
  const [width, setWidth] = useContext(WidthContext)

  useEffect(() => {
    if(width > 845 && mobileActive) {
      handleMobileNav()
    }
  }, [width])

  // Seperate handler for logo so it doesn't open mobile nav. 
  const handleLogoClick = () => {
    if(!mobileActive) {
      return
    } else {
      handleMobileNav()
    }
  }

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <NavLink to='/' onClick={handleLogoClick}>
            <Logo />
          </NavLink>
        </div>
        <div className="nav-links">
          <ul>
            <li><NavLink tag={NavLink} activeClassName='active' to='/stories'>Stories</NavLink></li>
            <li><NavLink tag={NavLink} activeClassName='active' to='/features'>Features</NavLink></li>
            <li><NavLink tag={NavLink} activeClassName='active' to='/pricing'>Pricing</NavLink></li>
          </ul>
        </div>
        <div className="btn">
          <NavLink to='/invite'>
            <SquareBtn>
              Get an invite
            </SquareBtn>
          </NavLink>
        </div>
        {
          mobileActive
            ? (
              <div className='close-menu' onClick={handleMobileNav}>
                <Close />
              </div>
            )
            : (
              <div className="menu" onClick={handleMobileNav}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            )

        }
      </div>
      <div className={`slide-out ${mobileActive ? 'active' : ''}`}>
        <MobileNavbar mobileActive={mobileActive} handleMobileNav={handleMobileNav} />
      </div>
    </div>
  )
}

export default Navbar;