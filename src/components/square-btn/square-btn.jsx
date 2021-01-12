import React from 'react'
import './square-btn.scss'

const SquareBtn = ({ inverse, children }) => {
  return (
    <button className={`square-btn ${inverse ? 'inverse' : ''}`}>
      { children }
    </button>
  )
}

export default SquareBtn;