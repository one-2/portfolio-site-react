import React from 'react';
import { Link } from 'react-router-dom';


export default function ListLink({ displayText , to='../../' + displayText }) {
  return (
    <li>
      <Link to={to} className='text-center fs-5 text-black' style={{ textDecoration: 'none' }}>
        {displayText}
      </Link>
    </li>
  );
}
