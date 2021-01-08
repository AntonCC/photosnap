import React from 'react'
import './cards.scss'

const Cards = ({ children }) => {
  return (
    <div className='cards wrap'>
      { children }
    </div>
  )
}

export default Cards;