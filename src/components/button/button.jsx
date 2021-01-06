import React from 'react'
import './button.scss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../assets/shared/desktop/arrow.svg'

const Button = ({ bgWhite, children }) => {
  return (
    <>
      <NavLink to='/'>
        <div className={`button ${bgWhite ? 'black' : ''}`}>
          { children }
          <Arrow />
        </div>
      </NavLink>
    </>
  )
}

export default Button;