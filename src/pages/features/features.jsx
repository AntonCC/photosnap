import React from 'react'
import './features.scss'
import Banner from '../../components/banner/banner'
import { bannerInfo } from './features-info'

const Features = () => {
  return (
    <div className='features wrap'>
      <Banner {...bannerInfo} />
    </div>
  )
}

export default Features;