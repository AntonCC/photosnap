import React from 'react'
import './table.scss'
import Check from '../../assets/pricing/desktop/check.svg'

const Table = () => {
  return (
    <div className='table'>
      <h1 className="title">
        Compare
      </h1>
      <div className="content">
        <div className="tiers">
          <p className='first'>The Features</p>
          <p className='feature'>Basic</p>
          <p className='feature'>Pro</p>
          <p className='feature'>Business</p>
        </div>
        <div className="row story">
          <p className='first'>Unlimited Story Posting</p>
          <div className='check x1'>
            <img src={Check} />
          </div>
          <div className='check x2'>
            <img src={Check} />
          </div>
          <div className='check x3'>
            <img src={Check} />
          </div>
        </div>
        <div className="row photo">
          <p className='first'>Unlimited Photo Upload</p>
          <div className='check x1'>
            <img src={Check} />
          </div>
          <div className='check x2'>
            <img src={Check} />
          </div>
          <div className='check x3'>
            <img src={Check} />
          </div>
        </div>
        <div className="row custom">
          <p className='first'>Embedding custom content</p>
          <div className='check x2'>
            <img src={Check} />
          </div>
          <div className='check x3'>
            <img src={Check} />
          </div>
        </div>
        <div className="row meta">
          <p className='first'>Customize Metadata</p>
          <div className='check x2'>
            <img src={Check} />
          </div>
          <div className='check x3'>
            <img src={Check} />
          </div>
        </div>
        <div className="row metrics">
          <p className='first'>Advanced Metrics</p>
          <div className='check x3'>
            <img src={Check} />
          </div>
        </div>
        <div className="row photo">
          <p className='first'>Photo downloads</p>
          <div className='check x3'>
            <img src={Check} />
          </div>
        </div>
        <div className="row indexing">
          <p className='first'>Search Engine Indexing</p>
          <div className='check x3'>
            <img src={Check} />
          </div>
        </div>
        <div className="row indexing">
          <p className='first'>Custom Analytics</p>
          <div className='check x3'>
            <img src={Check} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table;