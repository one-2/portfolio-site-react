import React from 'react';


export default function LittleCircle() {
  return (
    <div className='d-flex'>
      <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='blue'
        className='bi bi-circle-fill me-3' viewBox='0 0 16 16'>
        <circle cx='8' cy='8' r='8' />
      </svg>
    </div>
  );
}
