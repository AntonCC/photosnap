import React from 'react'
import './mobile-table.scss'
import Check from '../../assets/pricing/desktop/check.svg'

const MobileTable = () => {
  return (
    <div className='mobile-table'>
      <div className="title">
        <h4>The Features</h4>
      </div>
      <div className="row">
        <h4 className='feature'>Unlimited Story Posting</h4>
        <div className="checks">
          <div className="type">
            <p>Basic</p>
            <img src={Check} />
          </div>
          <div className="type">
            <p>Pro</p>
            <img src={Check} />
          </div>
          <div className="type">
            <p>Business</p>
            <img src={Check} />
          </div>
        </div>
      </div>
      <div className="row">
        <h4 className='feature'>Unlimited Photo Upload</h4>
        <div className="checks">
          <div className="type">
            <p>Basic</p>
            <img src={Check} />
          </div>
          <div className="type">
            <p>Pro</p>
            <img src={Check} />
          </div>
          <div className="type">
            <p>Business</p>
            <img src={Check} />
          </div>
        </div>
      </div>
      <div className="row">
        <h4 className='feature'>Embedding Custom Content</h4>
        <div className="checks">
          <div className="type">
            <p>Basic</p>
          </div>
          <div className="type">
            <p>Pro</p>
            <img src={Check} />
          </div>
          <div className="type">
            <p>Business</p>
            <img src={Check} />
          </div>
        </div>
      </div>
      <div className="row">
        <h4 className='feature'>Customize Metadata</h4>
        <div className="checks">
          <div className="type">
            <p>Basic</p>
          </div>
          <div className="type">
            <p>Pro</p>
            <img src={Check} />
          </div>
          <div className="type">
            <p>Business</p>
            <img src={Check} />
          </div>
        </div>
      </div>
      <div className="row">
        <h4 className='feature'>Advanced Metrics</h4>
        <div className="checks">
          <div className="type">
            <p>Basic</p>
          </div>
          <div className="type">
            <p>Pro</p>
          </div>
          <div className="type">
            <p>Business</p>
            <img src={Check} />
          </div>
        </div>
      </div>
      <div className="row">
        <h4 className='feature'>Photo Downloads</h4>
        <div className="checks">
          <div className="type">
            <p>Basic</p>
          </div>
          <div className="type">
            <p>Pro</p>
          </div>
          <div className="type">
            <p>Business</p>
            <img src={Check} />
          </div>
        </div>
      </div>
      <div className="row">
        <h4 className='feature'>Search Engine Indexing</h4>
        <div className="checks">
          <div className="type">
            <p>Basic</p>
          </div>
          <div className="type">
            <p>Pro</p>
          </div>
          <div className="type">
            <p>Business</p>
            <img src={Check} />
          </div>
        </div>
      </div>
      <div className="row">
        <h4 className='feature'>Custom Analytics</h4>
        <div className="checks">
          <div className="type">
            <p>Basic</p>
          </div>
          <div className="type">
            <p>Pro</p>
          </div>
          <div className="type">
            <p>Business</p>
            <img src={Check} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileTable;