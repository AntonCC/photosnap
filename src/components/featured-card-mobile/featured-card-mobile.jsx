import React from 'react'
import './featured-card-mobile.scss'
import Button from '../button/button'
import Moon from '../../assets/stories/mobile/moon-of-appalacia.jpg'

const FeaturedCardMobile = () => {
  return (
    <div className='featured-card-mobile'>
      <div className="top">
        <img src={Moon} alt="Moon"/>
      </div>
      <div className="bottom">
        <h4 className='last-month'>Last Month's Featured Story</h4>
        <h1 className='title'>Hazy Full Moon of Apalachia</h1>
        <span className='date-author'>
          <p>March 2nd 2020</p>
          <strong>by John Appleseed</strong>
        </span>
        <p className='description'>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
        <Button>
          <h4>Read the Story</h4>
        </Button>
      </div>
    </div>
  )
}

export default FeaturedCardMobile;