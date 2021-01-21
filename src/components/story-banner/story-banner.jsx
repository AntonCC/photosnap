import React from 'react'
import './story-banner.scss'
import Test from '../../assets/stories/desktop/18-days-voyage.jpg'

const StoryBanner = ({ title, author, img }) => {
  return (
    <div className='story-banner'>
      <div className="side-a">
        <h1>{ title }</h1>
        <h3>By { author }</h3>
      </div>
      <div className="side-b">
        <img src={ img } alt="Test"/>
      </div>
    </div>
  )
}

export default StoryBanner;