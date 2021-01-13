import React, { useState } from 'react'
import './prices.scss'
import PricesSwitch from '../prices-switch/prices-switch'

const Prices = ({ children }) => {
  const [slideSwitch, setSlideSwitch] = useState(false)

  const handleClick = () => {
    setSlideSwitch(!slideSwitch)
  }

  const childrenWithExtraProp = React.Children.map(children, child => (
    React.cloneElement(child, { slideSwitch: slideSwitch })
  ))

  return (
    <div className='prices'>
      <PricesSwitch slideSwitch={slideSwitch} handleClick={handleClick} />
      <div className="price-cards">
        {childrenWithExtraProp}
      </div>
    </div>
  )
}

export default Prices;