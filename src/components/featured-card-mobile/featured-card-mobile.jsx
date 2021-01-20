import React from 'react'
import './featured-card-mobile.scss'
import Moon from '../../assets/stories/desktop/moon-of-appalacia.jpg'

const FeaturedCardMobile = () => {
  return (
    <div className='featured-card-mobile'>
      <div className="top" style={{ background: `url(${Moon})` }} >

      </div>
      <div className="bottom">

      </div>
    </div>
  )
}

export default FeaturedCardMobile;