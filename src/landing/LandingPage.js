// Written by Stephen Elliott on 12/1/2024

import React from 'react';

import logo from '../logo.svg';
import { Link } from 'react-router-dom';

function TextCircle(props) {
  return (
    <div className='border border-primary rounded-circle p-5 d-flex align-items-center justify-content-center'>
      {/** Set up links with useNavigate hook */}
      <Link to={props.path} style={{ textDecoration: 'none' }}>
        <h1 className='fs-4 text-center'>{props.text}</h1>
      </Link>
    </div>
  )
}

function LandingPage() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <img src={logo} alt='logo' />
        </div>

        <div className='col-6 text-start'>
          <h1 className='fs-1 mt-5'>
            Hello World!
          </h1>
          <h2 className='fs-5'>
            Nice to see you.
          </h2>
          <p>
            Here's some information about me. I could put anything here, and I'm not quite sure what I will, yet.
          </p>

          <div className='row'>
            <div className='col-4'>
              <TextCircle text='Projects' path='/Projects' />
            </div>
            <div className='col-4'>
              <TextCircle text='Blogs'    path='/Blogs'/>
            </div>
            <div className='col-4'>
              <TextCircle text='Contacts' path='/Contact'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
