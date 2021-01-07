import React from 'react'
import Banner from '../../components/banner/banner'
import Cards from '../../components/cards/cards'
import Card from '../../components/card/card'
import Gems from '../../components/gems/gems'
import { bannerInfo, cardInfo } from './homeInfo'

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
        <h1>Testing</h1>
      </Gems>
    </div>
  )
}

export default Home;