import React from 'react'
import FeaturedCard from '../../components/featured-card/featured-card'
import Cards from '../../components/cards/cards'
import Card from '../../components/card/card'
import { cardInfo } from './stories-info'

const Stories = () => {
  return (
    <div className='stories wrap'>
      <FeaturedCard />
      <Cards>
        {
          cardInfo.map(info => (
            <Card {...info} />
          ))
        }
      </Cards>
    </div>
  )
}

export default Stories;