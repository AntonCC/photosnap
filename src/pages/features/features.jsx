import React from 'react'
import './features.scss'
import Banner from '../../components/banner/banner'
import Gems from '../../components/gems/gems'
import Gem from '../../components/gem/gem'
import FullImgBanner from '../../components/full-img-banner/full-img-banner'
import { bannerInfo, gemInfo } from './features-info'

const Features = () => {
  return (
    <div className='features wrap'>
      <Banner {...bannerInfo} />
      <Gems>
        {
          gemInfo.map(info => (
            <Gem {...info} />
          ))
        }
      </Gems>
      <FullImgBanner />
    </div>
  )
}

export default Features;