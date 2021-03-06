import React from 'react'
import './banner.scss'
import Button from '../button/button'

const Banner = ({ title, body, img, btnText, linkTo, bgWhite, switchSide, sideStripe }) => {

  return (
    <div className={`banner ${switchSide ? 'switch' : ''}`}>
      <div className={`side-a ${bgWhite ? 'bg-white' : ''} ${sideStripe ? 'side-stripe' : ''}`}>
        <div className="wrap">
          <h1>{ title }</h1>
          <p style={!btnText ? {marginBottom: 0} : null}>{ body }</p>
          {
            btnText && (
              <Button bgWhite={bgWhite} linkTo={linkTo} >
                <h4>{ btnText }</h4>
              </Button>
            )
          }
        </div>
      </div>
      <div className="side-b">
        {/* <source media='(max-width: 1000px)' srcset={Hero} /> */}
        <img src={ img } alt='banner' />
      </div>
    </div>
  )
}

export default Banner;