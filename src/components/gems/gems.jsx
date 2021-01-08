import React from 'react'
import './gems.scss'

const Gems = ({ children }) => {
  return (
    <div className='gems wrap'>
      {children}
    </div>
  )
}

export default Gems;