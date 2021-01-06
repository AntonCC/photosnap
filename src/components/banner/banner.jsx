import React from 'react'
import './banner.scss'
import Button from '../button/button'


const Banner = ({ title, body, img,  btnText, bgWhite, switchSide }) => {
  return (
    <div className={`banner ${switchSide ? 'switch' : ''}`}>
      <div className={`side-a ${bgWhite ? 'bg-white' : ''} `}>
        <div className="wrap">
          <h1>{ title }</h1>
          <p>{ body }</p>
          <Button bgWhite={bgWhite} >
            <h4>{ btnText }</h4>
          </Button>
        </div>
      </div>
      <div className="side-b">
        <picture>
          {/* <source media='(max-width: 1000px)' srcset={Hero} /> */}
          <img src={ img } />
        </picture>
      </div>
    </div>
  )
}

export default Banner;