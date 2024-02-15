// Written by Stephen Elliott on 12/1/2024

import React from 'react';
import ListOfLinks from './components/listOfLinks/ListOfLinks';
import NameBlock from './components/NameBlock';

export default function Header() {
  return (
    <div className='container mt-4 mb-5'>
      <div className='row align-items-baseline'>
        <div className='col-6'>
          <NameBlock />
        </div>
        <div className='col-2' />
        <div className='col-4'>
          <ListOfLinks />
        </div>
      </div>
    </div>
  )
}
