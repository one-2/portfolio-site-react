// Written by Stephen Elliott on 12/1/2024
import React from 'react';

import ContactForm from './components/ContactForm'
import ContactTitle from './components/ContactTitle';

export default function Contact() {
  return (
    <div className='container'>
      <div className='row'>
        <ContactTitle />
      </div>
      <div className='row justify-content-center'>
        <div className='d-flex justify-content-center'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
