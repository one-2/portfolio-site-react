// Written by Stephen Elliott on 12/1/2024

import React from 'react';

import logo from './landing_image.jpg';
import { Link } from 'react-router-dom';

function MainImage() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <img src={logo} style={{ width: '550px', height: '350px' }} alt='My Image' />
    </div>
  )
}

function IntroTextBox() {
  return (
    <div className='row'>
      <h1 className='fs-1'>
        Hello World!
      </h1>
      <h2 className='fs-5'>
        Nice to see you.
      </h2>
      <p>
        Here's some information about me. I could put anything here, and I'm not quite sure what I will, yet.
      </p>
    </div>
  )
}

function FeatureCircles() {
  return (
    <div className='row justify-content-center align-items-center gap-4 mt-3 mb-3'>
      <TextCircle text='Projects' path='/Projects' />
      <TextCircle text='Blogs' path='/Blogs' />
      <TextCircle text='Contacts' path='/Contact' />
    </div>
  )
}

function TextCircle(props) {
  return (
    <div className='border border-primary rounded-circle d-flex align-items-center justify-content-center'
      style={{ width: '120px', height: '120px', padding: '10px' }}>
      <Link to={props.path} style={{ textDecoration: 'none' }}>
        <h1 className='fs-4 text-center'>{props.text}</h1>
      </Link>
    </div>
  )
}

function LandingPage() {
  return (
    <div className='container'>
      <div className=' d-flex justify-content-center align-items-center'>
        <div className='col-6 m-1'>
          <MainImage />
        </div>
        <div className='col-6'>
          <div className='row mt-4 mb-2'>
            <IntroTextBox />
            <FeatureCircles />
          </div>
        </div>
      </div>
    </div >
  );
}

export default LandingPage;
