import React from 'react'
import './invite.scss'
import { motion } from 'framer-motion'
import Banner from '../../components/banner/banner'
import ContactForm from '../../components/contact-form/contact-form'
import ContactInfo from '../../components/contact-info/contact-info'
import { bannerInfo } from './inviteInfo'

const Invite = () => {
  return (
    <motion.div className="invite wrap"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Banner {...bannerInfo} />
      <div className="contact-group">
        <ContactForm />
        <ContactInfo />
      </div>
    </motion.div>
  )
}

export default Invite;