import React from 'react'
import './invite.scss'
import Banner from '../../components/banner/banner'
import ContactForm from '../../components/contact-form/contact-form'
import { bannerInfo } from './inviteInfo'

const Invite = () => {
  return (
    <div className="invite wrap">
      <Banner {...bannerInfo} />
      <div className="contact-group">
        <ContactForm />
      </div>
    </div>
  )
}

export default Invite;