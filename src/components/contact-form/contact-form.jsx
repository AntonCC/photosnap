import React from 'react'
import './contact-form.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import SquareBtn from '../square-btn/square-btn'

const ContactForm = () => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string().trim().max(30).required("* This field can't be empty"),
    email: Yup.string().trim().email('* Invalid email').required("* This field can't be empty"),
    companyName: Yup.string().trim().max(30, "* This field can't exceed 30 characters"),
    message: Yup.string().trim().max(500),
    signUp: Yup.boolean()
  })

  return (
    <div className='contact-form'>
      <h2>Get in touch</h2>
      <p>Fill out the from below to get in touch</p>
      <Formik
        initialValues={{ name: '', email: '', companyName: '', title: '', message: ''}}
        validationSchema={ContactSchema}
        onSubmit={(values, { resetFrom }) => {
          // remove leading and trailing whitespace, Formik grabs original values even with Yup.trim()
          for(const value in values) {
            if(typeof values[value] === 'string') {
              values[value] = values[value].trim()
            }
          }
          resetFrom()
        }}
      >
        {() => (
          <Form>
            <div className="form-group">
              <Field name='name' placeholder='Name' />
              <ErrorMessage name='name'>
                {msg => <div className='contact-error'>{ msg }</div>}
              </ErrorMessage>
            </div>
            <div className="form-group">
              <Field name='email' placeholder='Email' />
              <ErrorMessage name='email'>
                {msg => <div className='contact-error'>{ msg }</div>}
              </ErrorMessage>
            </div>
            <div className="form-group">
              <Field name='companyName' placeholder='Company Name' />
              <ErrorMessage name='companyName'>
                {msg => <div className='contact-error'>{ msg }</div>}
              </ErrorMessage>
            </div>
            <div className="form-group">
              <Field name='message' placeholder='Message' />
              <ErrorMessage name='message'>
                {msg => <div className='contact-error'>{ msg }</div>}
              </ErrorMessage>
            </div>
            <div className="form-group checkbox">
              <Field name='signUp' type='checkbox' className='box' />
              <label className='italic'>Stay label-to-date with company announcments and updates to our API</label>
            </div>
            <div className="btn">
              <SquareBtn>
                Submit
              </SquareBtn>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )

}

export default ContactForm;