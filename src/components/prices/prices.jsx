import React from 'react'
import './prices.scss'
import PricesSwitch from '../prices-switch/prices-switch'

const Prices = ({ children }) => {
  return (
    <div className='prices'>
      <PricesSwitch />
      <div className="price-cards">
        {children}
      </div>
    </div>
  )
}

export default Prices;