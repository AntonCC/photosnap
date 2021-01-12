import React from 'react'
import './price-card.scss'
import SquareBtn from '../square-btn/square-btn'

const PriceCard = ({ title, body, price, active }) => {
  return (
    <div className={`price-card ${active ? 'active' : ''}`}>
      <h2 className='plan'>{ title }</h2>
      <p className='description'>{ body }</p>
      <h1 className='price'>{ price }</h1>
      <p className='per-month'>per month</p>
      <SquareBtn inverse={ active }>
        Pick Plan
      </SquareBtn>
    </div>
  )
}

export default PriceCard;