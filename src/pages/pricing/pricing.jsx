import React, { useState, useEffect } from 'react'
import './pricing.scss'
import Banner from '../../components/banner/banner'
import Prices from '../../components/prices/prices'
import PriceCard from '../../components/price-card/price-card'
import Table from '../../components/table/table'
import MobileTable from '../../components/mobile-table/mobile-table'
import FullImgBanner from '../../components/full-img-banner/full-img-banner'
import { bannerInfo, priceInfo } from './pricing-info'

const Pricing = () => {
  const [mobileTable, setMobileTable] = useState(null)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Dont forget to debounce this!
  const handleResize = () => {
    if(window.innerWidth > 525) {
      setMobileTable(false)
    } else {
      setMobileTable(true)
    }
  }

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
      {
        mobileTable
          ? <MobileTable />
          : <Table />
      }
      <FullImgBanner />
    </div>
  )
}

export default Pricing;