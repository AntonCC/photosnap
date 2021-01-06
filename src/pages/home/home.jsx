import React from 'react'
import Banner from '../../components/banner/banner'
import Cards from '../../components/cards/cards'
import Card from '../../components/card/card'
import { bannerInfo } from './homeInfo'

const Home = () => {
  return (
    <div className='home'>
      {
        bannerInfo.map(info => (
          <Banner {...info} />
        ))
      }
      <Cards>
        <Card />
        <Card />
        <Card />
        <Card />
      </Cards>
    </div>
  )
}

export default Home;