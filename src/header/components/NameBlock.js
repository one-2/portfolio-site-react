import React from 'react';
import { Link } from 'react-router-dom';
import LittleCircle from './LittleCircle';

export default function NameBlock() {
  return (
    <div className='d-flex flex-row align-items-baseline'>
      <LittleCircle />
      <Link to='/' style={{ textDecoration: 'none' }}>
        <span className='fs-3 me-3 text-black fw-semibold'>Stephen Elliott</span>    {/* fs is font-size*/}
      </Link>
      <span className='fs-5d-flex flex-row  me-3 text-black'>Data Cowboy 🤠</span>    {/* me is margin-end. while ms is margin-start*/}
    </div>
  );
}
