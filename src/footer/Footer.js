// Written by Stephen Elliott on 12/1/2024, 23/1/24
// This script renders the footer element.

import React from 'react';
import { SmileyPanel } from './components/SmileyPanel';
import { SocialsInfo } from './components/SocialsPanel';
import { WebsiteInfo } from './components/WebsitePanel';

export default function Footer() {
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
