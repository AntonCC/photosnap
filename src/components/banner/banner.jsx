import React from 'react'
import './banner.scss'
import Pic from '../../assets/home/desktop/create-and-share.jpg'

const Banner = () => {
  return (
    <div className='banner'>
      <div className="side-a">
        <div className="wrap">
          <h1>Create and share your photo stories.</h1>
          <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
          <button>Get an Invite</button>
        </div>
      </div>
      <div className="side-b">
        <img src={Pic} />
      </div>
    </div>
  )
}

export default Banner;