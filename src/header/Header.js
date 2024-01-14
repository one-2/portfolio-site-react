// Written by Stephen Elliott on 12/1/2024

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4 text-start'>
          <p>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='blue'
                className='bi bi-circle-fill me-3' viewBox='0 0 16 16'>
                <circle cx='8' cy='8' r='8' />
              </svg>
              <span className='fs-5 me-3'>Stephen Elliott</span>    {/* fs is font-size*/}
              <span className='fs-10 me-3'>Data Cowboy 🤠</span>    {/* me is margin-end. while ms is margin-start*/}
            </Link>
          </p>
        </div>
        <div className='col-4' />
        <div className='col-4'>
          <nav className='navbar navbar-light bg-light'>
            <Link to='/Projects'>Projects</Link>
            |
            <Link to='/Blogs'>Blogs</Link>
            |
            <Link to='/Contact'>Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header;
