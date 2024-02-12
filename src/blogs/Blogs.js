// Written by Stephen Elliott on 12/1/2024

import React from 'react'

import BlogNavPanel from './BlogNavPanel'
import BlogMainPanel from './BlogMainPanel'
import BlogReaderComments from './BlogReaderComments'

export default function Blogs() {
  return (
    <div className='container'>
      <div className='row'>
        <h1 className='fs-1 text-center'>
          Blogs.
        </h1>
      </div>
      <div className='row'>
        <div className='col-3 '>
          <BlogNavPanel />
        </div>
        <div className='col-6'>
          <BlogMainPanel />
        </div>
        <div className='col-3'>
          <BlogReaderComments />
        </div>
      </div>
    </div>
  )
}
