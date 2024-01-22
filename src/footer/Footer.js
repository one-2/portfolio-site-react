// Written by Stephen Elliott on 12/1/2024

import React from 'react';

const WebsiteInfo = () => {
  return (
    <div>
      <h1 className='fs-5'>This Website</h1>
      <p>
        Built with React and Bootstrap <br />
        (c) Stephen Elliott 2024
      </p>
    </div>
  )
}

const SocialsInfo = () => {
  return (
    <div>
      <h1 className='fs-5'>Follow Me</h1> {/* Todo: is this styling correct? */}
      <p>
        <ul className='list-unstyled'>
          <li>LinkedIn</li>
          <li>GitHub</li>
        </ul>
      </p>
    </div>
  )
}

const ContactInfo = () => {
  return (
    <div>
      <h1 className='fs-5'>Contact</h1>
      <p>example@me.com</p>
    </div>
  )
}

function Footer() {
  return (
    <div className='container'>
      <div className='row text-center'>
        <div className='col-4'>
          <WebsiteInfo />
        </div>
        <div className='col-4'>
          <SocialsInfo />
        </div>
        <div className='col-4'>
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}

export default Footer;
