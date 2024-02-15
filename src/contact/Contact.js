// Written by Stephen Elliott on 12/1/2024
import React from 'react';

import ContactForm from './ContactForm'

function Contact() {
  return (
    <div className='container'>
      <div className='row'>
        <h1 className='fs-1 text-center'>
          Contact.
        </h1>
      </div>
      <div className='row justify-content-center'>
        <div className='d-flex justify-content-center'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact;
