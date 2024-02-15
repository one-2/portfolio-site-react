// Written by Stephen Elliott on 12/1/2024

import React from 'react'

import BlogNavPanel from './components/BlogNavPanel'
import BlogMainPanel from './components/BlogMainPanel'
import BlogReaderCommentsPanel from './components/BlogReaderCommentsPanel'

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
          <BlogReaderCommentsPanel />
        </div>
      </div>
    </div>
  )
}
