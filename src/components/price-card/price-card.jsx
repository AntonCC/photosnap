import React from 'react'
import './price-card.scss'
import SquareBtn from '../square-btn/square-btn'

const PriceCard = ({ title, body, priceMonth, priceYear, slideSwitch, active }) => {
  return (
    <div className={`price-card ${active ? 'active' : ''}`}>
      <h2 className='plan'>{ title }</h2>
      <p className='description'>{ body }</p>
      {
        slideSwitch 
          ? (
            <span className='price-group'>
              <h1 className='price'>{ priceYear }</h1>
              <p className='per-year'>per year</p>
            </span>
          )
          : (
            <span className='price-group'>
              <h1 className='price'>{ priceMonth }</h1>
              <p className='per-month'>per month</p>
            </span>
          )
      }
      <div className="btn">
        <SquareBtn inverse={ active }>
          Pick Plan
        </SquareBtn>
      </div>
    </div>
  )
}

export default PriceCard;