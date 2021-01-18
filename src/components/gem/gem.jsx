import React from 'react'
import './gem.scss'

const Gem = ({ title, body, img}) => {
  return (
    <div className='gem'>
      <div className="img">
        <img src={ img } alt=""/>
      </div>
      <h3>{ title }</h3>
      <p>{ body }</p>
    </div>
  )
}

export default Gem;