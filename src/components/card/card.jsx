import React from 'react'
import './card.scss'
import Button from '../button/button'


const Card = ({ title, author, img }) => {
  const backgroundImg = `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url(${img}) no-repeat center/cover`

  return (
    <div className='card' style={{ background: backgroundImg }}>
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