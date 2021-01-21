import React from 'react'
import { motion } from 'framer-motion'
import Banner from '../../components/banner/banner'
import Cards from '../../components/cards/cards'
import Card from '../../components/card/card'
import Gems from '../../components/gems/gems'
import Gem from '../../components/gem/gem'
import { bannerInfo, cardInfo, gemInfo } from './home-info'

const Home = () => {
  return (
    <motion.div className='home wrap'
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      {
        bannerInfo.map(info => (
          <Banner {...info} />
        ))
      }
      <Cards>
        {
          cardInfo.map(info => (
            <Card {...info} />
          ))
        }
      </Cards>
      <Gems>
        {
          gemInfo.map(info => (
            <Gem {...info} />
          ))
        }
      </Gems>
    </motion.div>
  )
}

export default Home;