import React from 'react'
import './features.scss'
import { motion } from 'framer-motion'
import Banner from '../../components/banner/banner'
import Gems from '../../components/gems/gems'
import Gem from '../../components/gem/gem'
import FullImgBanner from '../../components/full-img-banner/full-img-banner'
import { bannerInfo, gemInfo } from './features-info'

const Features = () => {
  return (
    <motion.div className='features wrap'
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Banner {...bannerInfo} />
      <Gems>
        {
          gemInfo.map(info => (
            <Gem {...info} />
          ))
        }
      </Gems>
      <FullImgBanner />
    </motion.div>
  )
}

export default Features;