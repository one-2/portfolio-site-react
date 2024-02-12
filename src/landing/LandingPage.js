// Written by Stephen Elliott on 12/1/2024

import React from 'react';

import { IntroTextBox } from './IntroTextBox';
import { FeatureCircles } from './FeatureCircles';
import { MainImage } from './MainImage';

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
