import React, { useContext } from 'react'
import { WidthContext } from '../../contexts/widthContext'
import FeaturedCard from '../../components/featured-card/featured-card'
import FeaturedCardMobile from '../../components/featured-card-mobile/featured-card-mobile'
import Cards from '../../components/cards/cards'
import Card from '../../components/card/card'
import { cardInfo } from './stories-info'

const Stories = () => {
  const [width, setWidth] = useContext(WidthContext)

  return (
    <div className='stories wrap'>
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
    </div>
  )
}

export default Stories;