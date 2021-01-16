import React from 'react'
import './full-img-banner.scss'
import Button from '../button/button'
import Test from '../../assets/shared/desktop/bg-beta.jpg'

const FullImgBanner = () => {
  return (
    <div className='full-img-banner' style={{ background: `linear-gradient(to right, rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${Test}) no-repeat center/cover` }}>
      <div className="content">
        <h1>We're in beta. Get your invite today!</h1>
        <Button>
          <h4>Get an invite</h4>
        </Button>
      </div>
    </div>
  )
}

export default FullImgBanner;