import React from 'react'
import './invite.scss'
import Banner from '../../components/banner/banner'
import ContactForm from '../../components/contact-form/contact-form'
import ContactInfo from '../../components/contact-info/contact-info'
import { bannerInfo } from './inviteInfo'

const Invite = () => {
  return (
    <div className="invite wrap">
      <Banner {...bannerInfo} />
      <div className="contact-group">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  )
}

export default Invite;