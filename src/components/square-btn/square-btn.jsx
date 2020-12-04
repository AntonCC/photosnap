import React from 'react'
import './square-btn.scss'

const SquareBtn = ({ children }) => {
  return (
    <button className='square-btn'>
      { children }
    </button>
  )
}

export default SquareBtn;