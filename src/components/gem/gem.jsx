import React from 'react'
import './gem.scss'
import Test from '../../assets/features/desktop/responsive.svg'

const Gem = () => {
  return (
    <div className='gem'>
      <div className="img">
        <img src={Test} alt=""/>
      </div>
      <h3>100% Responsive</h3>
      <p>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
    </div>
  )
}

export default Gem;