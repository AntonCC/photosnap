import React from 'react'
import './prices-switch.scss'

const PricesSwitch = ({ slideSwitch, handleClick }) => {
  return (
    <div className='prices-switch'>
      <h3 className={`monthly ${!slideSwitch ? 'active' : ''}`}>Monthly</h3>
      <div className={`switch ${slideSwitch ? 'active' : 'inactive'}`} onClick={handleClick}>
        <div className="circle"></div>
      </div>
      <h3 className={`yearly ${slideSwitch ? 'active' : ''}`}>Yearly</h3>
    </div>
  )
}

export default PricesSwitch;