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
          <h4 className='first'>The Features</h4>
          <h4 className='feature'>Basic</h4>
          <h4 className='feature'>Pro</h4>
          <h4 className='feature'>Business</h4>
        </div>
        <div className="row story">
          <h4 className='first'>Unlimited Story Posting</h4>
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
          <h4 className='first'>Unlimited Photo Upload</h4>
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
          <h4 className='first'>Embedding custom content</h4>
          <div className='check x1' /> 
          <div className='check x2'>
            <img src={Check} />
          </div>
          <div className='check x3'>
            <img src={Check} />
          </div>
        </div>
        <div className="row meta">
          <h4 className='first'>Customize Metadata</h4>
          <div className='check x1' />
          <div className='check x2'>
            <img src={Check} />
          </div>
          <div className='check x3'>
            <img src={Check} />
          </div>
        </div>
        <div className="row metrics">
          <h4 className='first'>Advanced Metrics</h4>
          <div className='check x1' />
          <div className='check x2' />
          <div className='check x3'>
            <img src={Check} />
          </div>
        </div>
        <div className="row photo">
          <h4 className='first'>Photo downloads</h4>
          <div className='check x1' />
          <div className='check x2' />
          <div className='check x3'>
            <img src={Check} />
          </div>
        </div>
        <div className="row indexing">
          <h4 className='first'>Search Engine Indexing</h4>
          <div className='check x1' />
          <div className='check x2' />
          <div className='check x3'>
            <img src={Check} />
          </div>
        </div>
        <div className="row indexing">
          <h4 className='first'>Custom Analytics</h4>
          <div className='check x1' />
          <div className='check x2' />
          <div className='check x3'>
            <img src={Check} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table;