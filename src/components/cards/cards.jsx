import React from 'react'
import './cards.scss'

const Cards = ({ children }) => {
  return (
    <div className='cards'>
      { children }
    </div>
  )
}

export default Cards;