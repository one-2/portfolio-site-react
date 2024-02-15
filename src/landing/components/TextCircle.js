import React from 'react';
import { Link } from 'react-router-dom';


export default function TextCircle(props) {
  return (
    <div className='border border-primary rounded-circle d-flex align-items-center justify-content-center'
      style={{ width: '120px', height: '120px', padding: '10px' }}>
      <Link to={props.path} style={{ textDecoration: 'none' }}>
        <h1 className='fs-4 text-center'>{props.text}</h1>
      </Link>
    </div>
  );
}
