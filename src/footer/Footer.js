// Written by Stephen Elliott on 12/1/2024, 23/1/24
// This script renders the footer element.

import React from 'react';

const WebsiteInfo = () => {
  // Creates the website construction footer infopanel.
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
  // Creates the social media footer infopanel.
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
  // Creates the contact information footer infopanel.
  return (
    <div>
      <h1 className='fs-5'>Contact</h1>
      <p>example@me.com</p>
    </div>
  )
}

function Footer() {
  // Creates the footer.
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
