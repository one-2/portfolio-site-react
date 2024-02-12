import React from 'react';
import { TextCircle } from './TextCircle';

export function FeatureCircles() {
  return (
    <div className='row justify-content-center align-items-center gap-4 mt-3 mb-3'>
      <TextCircle text='Projects' path='/Projects' />
      <TextCircle text='Blogs' path='/Blogs' />
      <TextCircle text='Contacts' path='/Contact' />
    </div>
  );
}
