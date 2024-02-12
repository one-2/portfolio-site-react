// Written by Stephen Elliott on 12/1/2024

import React from 'react';

import NavLinkList from '../navPanel/NavLinkList';
import NavPanel from '../navPanel/NavPanel';

function BlogPanel() {
  return (
    <div className='container border border-primary ps-3 pe-3 pt-2'>
      <div row className='m-3'>
        <div className='row'>
          <div className='col-auto'>
            <h2 className='fs-4'>
              Around the World - Part 2.
            </h2>
          </div>
          <div className='col-auto'>
            {/* TODO: shift down to baseline of title */}
            <p className='ms-2'>
              15/12/2024.
            </p>
          </div>
        </div>
        <div className='row'>
          <p>Here is some blog text about my trip around the world in December 2024. I could talk about this for a while. Matter of fact, I will be talking about this for a while...</p>
        </div>
      </div>
    </div>
  )
}

function BlogReaderComments() {
  return (
    <div className='container border border-primary ps-3 pe-3 pt-2'>
      <div className='row m-3 text-center'>
        <h1 className='fs-4'>Reader Comments</h1>
        <div className='row'>
          <p>I am amazed by the decadence of your dishes!</p>
        </div>
        <div className='row'>
          <p>Dude above me is a poet.</p>
        </div>
      </div>
    </div>
  )
}

function BlogNavPanel({ linksFeb24, linksJan24 }) {
  return (
    // <div className='container border border-primary'>
    //   <div className='m-3'>
    //     <div className=''>
    //       {/* TODO: embolden or italicise the list entry when page is active. */}
    //       <NavLinkList subtitle={'February'} links={linksFeb24} />
    //     </div>
    //     <div>
    //       <NavLinkList subtitle={'January 2024'} links={linksJan24} />
    //     </div>
    //   </div>
    // </div>
    
    NavPanel()
  )
  
}

function Blogs() {
  const linksFeb24 = [
    { to: '', text: 'Around the World - Part Two.' },
    { to: '', text: 'A Life On the Wind.' },
    { to: '', text: 'Desert Nights.' },
  ]

  const linksJan24 = [
    { to: '', text: 'Around the World - Part One.' },
    { to: '', text: 'Catching Tides.' },
    { to: '', text: 'The Way of the Road.' },
  ]

  return (
    <div className='container'>
      <div className='row'>
        <h1 className='fs-1 text-center'>
          Blogs.
        </h1>
      </div>
      <div className='row'>
        <div className='col-3 '>
          {BlogNavPanel({ linksFeb24, linksJan24 })}
        </div>
        <div className='col-6'>
          {BlogPanel()}
        </div>
        <div className='col-3'>
          {BlogReaderComments()}
        </div>
      </div>
    </div>
  )
}

export default Blogs;
