import React from 'react'
import './pricing.scss'
import Banner from '../../components/banner/banner'
import Prices from '../../components/prices/prices'
import PriceCard from '../../components/price-card/price-card'
import Table from '../../components/table/table'
import { bannerInfo, priceInfo } from './pricing-info'

const Pricing = () => {
  return (
    <div className='pricing wrap'>
      <Banner {...bannerInfo} />
      <Prices >
        {
          priceInfo.map(info => (
            <PriceCard {...info} />
          ))
        }
      </Prices>
      <Table />
    </div>
  )
}

export default Pricing;