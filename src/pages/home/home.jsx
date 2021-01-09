import React from 'react'
import Banner from '../../components/banner/banner'
import Cards from '../../components/cards/cards'
import Card from '../../components/card/card'
import Gems from '../../components/gems/gems'
import Gem from '../../components/gem/gem'
import { bannerInfo, cardInfo, gemInfo } from './homeInfo'

const Home = () => {
  return (
    <div className='home'>
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
    </div>
  )
}

export default Home;