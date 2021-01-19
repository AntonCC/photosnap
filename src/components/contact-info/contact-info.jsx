import React from 'react'
import './contact-info.scss'

const ContactInfo = () => {
  return (
    <div className='contact-info'>
      <div className="info">
        <h2>Connect with us</h2>
        <p>
          For any questions or support:
          <br/>
          Email us at <strong>photosnap@example.com</strong>
          <br/>
          Call us at <strong>1.999.888.7777</strong>
        </p>
      </div>
      <div className="address">
        <div className="usa">
          <h3>Photosnap USA</h3>
          <p>1404 Example Rd, New York, NY 11279</p>
        </div>
        <div className="uk">
          <h3>Photosnap UK</h3>
          <p>1404 Example Rd, Suite 15, London, 13908</p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo;