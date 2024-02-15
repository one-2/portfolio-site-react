import React from 'react';
import ListLink from './ListLink';

export default function ListOfLinks() {
  return (
    <div className='row'>
      <ul className='d-flex justify-content-between list-unstyled'>
        {/* TODO */}
        <ListLink displayText='Projects' />
        {ListSeparator()}
        <ListLink displayText='Blogs' />
        {ListSeparator()}
        <ListLink displayText='Contact' />
      </ul>
    </div>
  );
}

const ListSeparator = () => {
  return (
    <li className='mx-1 text-secondary'>
      |
    </li>
  );
}
