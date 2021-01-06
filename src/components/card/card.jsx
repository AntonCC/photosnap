import React from 'react'
import './card.scss'
import Button from '../button/button'
import Test from '../../assets/stories/desktop/calm-waters.jpg'

const Card = () => {
  return (
    <div className='card'>
      <h3>18 Days Voyage</h3>
      <p>by Alexei Borodin</p>
      <hr/>
      <Button>
        <h4>Read Story</h4>
      </Button>
    </div>
  )
}

export default Card;