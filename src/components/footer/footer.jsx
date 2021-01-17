import React from 'react'
import './footer.scss'
import { NavLink } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/shared/desktop/logo-white.svg'
import {ReactComponent as Facebook} from '../../assets/shared/desktop/facebook.svg'
import {ReactComponent as Youtube} from '../../assets/shared/desktop/youtube.svg'
import {ReactComponent as Twitter} from '../../assets/shared/desktop/twitter.svg'
import {ReactComponent as Pinterest} from '../../assets/shared/desktop/pinterest.svg'
import {ReactComponent as Instagram} from '../../assets/shared/desktop/instagram.svg'
import Button from '../button/button'

const Footer = () => {
  return (
    <footer className='footer wrap'>
      <div className="inner">
        <div className="logo">
          <Logo />
        </div>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/'>Stories</NavLink></li>
          <li><NavLink to='/'>Features</NavLink></li>
          <li><NavLink to='/'>Pricing</NavLink></li>
        </ul>
        <div className="socials">
          <Facebook />
          <Youtube />
          <Twitter />
          <Pinterest />
          <Instagram />
        </div>
        <div className="btn">
          <Button linkTo='/invite'>
            <h4>Get an invite</h4>
          </Button>
        </div>
        <p className="copyright">Copyright 2020. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;