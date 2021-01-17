import React from 'react'
import './button.scss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../assets/shared/desktop/arrow.svg'

const Button = ({ bgWhite, linkTo, children }) => {
  return (
    <>
      {
        linkTo
          ? (
            <NavLink to={`${linkTo}`}>
              <div className={`button ${bgWhite ? 'black' : ''}`}>
                { children }
                <Arrow />
              </div>
            </NavLink>
          )
          : (
            <div className={`button ${bgWhite ? 'black' : ''}`}>
              { children }
              <Arrow />
            </div>
          )
      }
    </>
  )
}

export default Button;