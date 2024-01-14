// Written by Stephen Elliott on 12/1/2024

import React from 'react';

function Footer() {
  return (
    <div className='container'>
      <div className='row text-center'>
        <div className='col-4'>
          <h1 className='fs-5'>This Website</h1>
          <p>
            Built with React and Bootstrap <br />
            (c) Stephen Elliott 2024
          </p>
        </div>
        <div className='col-4'>
          <h1 className='fs-5'>Follow Me</h1> {/* Todo: is this styling correct? */}
          <p>
            <ul className='list-unstyled'>
              <li>LinkedIn</li>
              <li>GitHub</li>
            </ul>
          </p>
        </div>
        <div className='col-4'>
          <h1 className='fs-5'>Contact</h1>
          <p>example@me.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
