// Written by Stephen Elliott on 12/1/2024

import React from 'react';
import { Link } from 'react-router-dom';

import ProjectPanel from './panels/ProjectPanel'


function Projects() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <NavPanel />
        </div>
        <div className='col-9'>
          {/* {
            projectId ?
              <ProjectPanel projectId={projectId} /> :
              <ProjectPanel />
          } */}
          <ProjectPanel />
        </div>
      </div>
    </div>
  )
}

function NavPanel() {
  return (
    <div className='container border border-secondary'>
      {/* TODO: fix border size */}
      <div className='mt-3 mb-3'>
        <h2 className='fs-2'>
          Map
        </h2>
      </div>
      <div>
        <div>
          <NavLinkList subtitle='' />
        </div>
      </div>
    </div>
  )
}

// Simple bootstrap alternative to link panel trouble:
// import React from 'react';
// import Nav from 'react-bootstrap/Nav';

// function LinksList() {
//   return (
//     <Nav className="flex-column flex-sm-row"> {/* Use flexbox to create a 2x1 layout */}
//       <Nav.Link href="/home">Home</Nav.Link> {/* Use Nav.Link to create a link */}
//       <Nav.Link href="/about">About</Nav.Link>
//     </Nav>
//   );
// }

// export default LinksList;


function NavLinkList({ subtitle }) {
  const links = [
    // NB must be absolute paths or the URL params are appended
    { to: '/Projects/ThisWebsite', text: 'This website' },
    { to: '/Projects/NextProject', text: 'Next project' }
  ];

  let allLinks =
    links.map((link) =>
      <NavLinkListItem to={link.to} text={link.text} className='col-6'/>);


  return (
    <div className=''>
      <h3 className='fs-4'>
        {subtitle}
      </h3>
      <ul className='row list-unstyled align-content-center'>
        {allLinks}
      </ul>
    </div>
  );
}

function NavLinkListItem({ to, text }) {
  return (
      <li className='justify-content-center text-center border border-primary rounded-4 me-3'>
        <Link to={to} className='p-3 fs-5 text-black' style={{ textDecoration: 'none' }}>
          {text}
        </Link>
      </li>
  )
}

export default Projects;
