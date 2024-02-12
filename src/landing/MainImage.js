import React from 'react';
import logo from './landing_image.jpg';

export function MainImage() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <img src={logo} style={{ width: '550px', height: '350px' }} alt='Black and white selfie of two friends.' />
    </div>
  );
}
