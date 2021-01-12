import React from 'react'
import './prices-switch.scss'

const PricesSwitch = () => {
  return (
    <div className='prices-switch'>
      <h3>Monthly</h3>
      <div className="switch">
        <div className="circle"></div>
      </div>
      <h3>Yearly</h3>
    </div>
  )
}

export default PricesSwitch;