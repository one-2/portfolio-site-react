// Written by Stephen Elliott on 12/1/2024

import React from 'react';
import { Link } from 'react-router-dom';

const listOfLinks = () => {
  return (
    <div className='row'>
      <ul className='d-flex justify-content-between list-unstyled' >
        <li>
          <Link to='/Projects' className='text-center fs-5 text-black' style={{ textDecoration: 'none' }}>
            Projects</Link>
        </li>
        <li className='mx-1 text-secondary'>
          |
        </li>
        <li>
          <Link to='/Blogs' className='text-center fs-5 text-black' style={{ textDecoration: 'none' }}>
            Blogs</Link>
        </li>
        <li className='mx-1 text-secondary'>
          |
        </li>
        <li>
          <Link to='/Contact' className='text-center fs-5 text-black' style={{ textDecoration: 'none' }}>
            Contact</Link>
        </li>
      </ul >
    </div>
  )
}

const littleCircle = () => {
  return (
    <div className='d-flex'>
      <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='blue'
        className='bi bi-circle-fill me-3' viewBox='0 0 16 16'>
        <circle cx='8' cy='8' r='8' />
      </svg>
    </div>
  )
}

const nameBlock = () => {
  return (
    <div className='d-flex flex-row align-items-baseline'>
      {littleCircle()}
      <Link to='/' style={{ textDecoration: 'none' }}>
        <span className='fs-3 me-3 text-black fw-semibold'>Stephen Elliott</span>    {/* fs is font-size*/}
      </Link >
      <span className='fs-5d-flex flex-row  me-3 text-black'>Data Cowboy 🤠</span>    {/* me is margin-end. while ms is margin-start*/}
    </div>
  )
}

function Header() {
  return (
    <div className='container mt-4 mb-5'>
      <div className='row align-items-baseline'>
        <div className='col-6'>
          {nameBlock()}
        </div>

        <div className='col-2' />

        <div className='col-4'>
          {listOfLinks()}
        </div>
      </div>
    </div>
  )
}

export default Header;
