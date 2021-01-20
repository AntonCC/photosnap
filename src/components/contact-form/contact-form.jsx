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
  })

  return (
    <div className='contact-form'>
      <h2>Get an invite</h2>
      <p>Fill out the from below to get an invite</p>
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