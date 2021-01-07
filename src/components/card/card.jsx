import React, { useEffect } from 'react'
import './card.scss'
import Button from '../button/button'
// import Test from '../../assets/stories/desktop/calm-waters.jpg'

const Card = ({ title, author, img }) => {
  return (
    <div className='card' style={{ background: `url(${img}) no-repeat center/cover` }}>
      <h3>{ title }</h3>
      <p>by { author }</p>
      <hr/>
      <Button>
        <h4>Read Story</h4>
      </Button>
    </div>
  )
}

export default Card;