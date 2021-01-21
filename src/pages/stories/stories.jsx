import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { WidthContext } from '../../contexts/widthContext'
import FeaturedCard from '../../components/featured-card/featured-card'
import FeaturedCardMobile from '../../components/featured-card-mobile/featured-card-mobile'
import Cards from '../../components/cards/cards'
import Card from '../../components/card/card'
import { cardInfo } from './stories-info'

const Stories = () => {
  const [width, setWidth] = useContext(WidthContext)

  return (
    <motion.div className='stories wrap'
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      {
        width > 575
          ? <FeaturedCard />
          : <FeaturedCardMobile />
      }
      <Cards>
        {
          cardInfo.map(info => (
            <Card {...info} />
          ))
        }
      </Cards>
    </motion.div>
  )
}

export default Stories;