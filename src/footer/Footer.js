// Written by Stephen Elliott on 12/1/2024, 23/1/24
// This script renders the footer element.

import React from 'react';

const WebsiteInfo = () => {
  // Creates the website construction footer info-panel.
  return (
    <div>
      <h1 className='fs-5'>This Website</h1>
      <p>
        Built with React and Bootstrap.<br />
        (c) Stephen Elliott 2024.
      </p>
    </div>
  )
}

const SocialsInfo = () => {
  // Creates the social media footer infopanel.
  return (
    <div className='text-center'>
      <h1 className='fs-5'>Follow Me</h1>
      <div className='row'>
        <ul className='list-unstyled'>
          <li>* LinkedIn</li> 
          {/* TODO: add logos */}
          <li>* GitHub</li>
        </ul>
      </div>
    </div>
  )
}

const SmileyPanel = () => {
  // Creates an emoji panel.
  return (
    <div className='container'>
      <h1 className='fs-3'>🤠🤠</h1>
    </div>
  )
}

function Footer() {
  // Creates the footer.
  return (
    <div className='container mt-5'>
      <div className='row text-center'>
        <div className='col-4'>
          <WebsiteInfo />
        </div>
        <div className='col-4'>
          <SocialsInfo />
        </div>
        <div className='col-4 d-flex align-items-center justify-content-center'>
          <SmileyPanel />
        </div>
      </div>
    </div>
  )
}

export default Footer;
