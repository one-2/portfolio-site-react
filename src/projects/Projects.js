// Written by Stephen Elliott on 12/1/2024

import React from 'react';
import { Link } from 'react-router-dom';

import ProjectPanel from './panels/ProjectPanel'


function Projects() {
  return (
    <div className='container'>
      <div className='row'>
        <h1 className='fs-1 text-center'>
          Projects.
        </h1>
      </div>
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
        <h2 className='fs-2 text-center'>
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

function NavLinkList({ subtitle }) {
  return (
    <div className=''>
      <h3 className='fs-4'>
        {subtitle}
      </h3>
      <ul className='row list-unstyled justify-content-center'>
        <NavLinksLayout />
      </ul>
    </div>
  );
}

function NavLinksLayout() {
  // Paths must be absolute paths or the URL params are appended
  const links = [ // TODO: refactor into backend
    { to: '/Projects/ThisWebsite', text: 'This Site' },
    { to: '/Projects/NextProject', text: 'Cowpoke Ranch' },
    { to: '/Projects/NextProject', text: 'Smokey Saloon' },
    { to: '/Projects/NextProject', text: 'Dust Devil' }
  ];

  const allLinkListItems = links.map((link) =>
    <NavLinkListItem to={link.to} text={link.text} />);

  let layout = [];
  let previous;

  // for every link in links
  for (let idx = 0; idx < allLinkListItems.length; idx++) {
    const current = allLinkListItems[idx];
    if (idx % 2 == 0) {
      // if the link index is [0, 2, ...], cleanly divisible by two, add it to a temp variable
      previous = current;
    } else {
      // if the link index is [1, 3, ...], add the current link and the temp to a row
      layout.push(
        <div className='row justify-content-center'>
          {previous}
          {current}
        </div>
      )
      // wipe the temp
      previous = null;
    }
  }
  // when there are no more links,
  // if there is still an element to be added, add the temp to a row
  if (previous != null) {
    layout.push(
      <div className='row'>
        {previous}
      </div>
    )
  }

  return layout;
}

function NavLinkListItem({ to, text }) {
  return (
    <li className='col d-flex align-items-center justify-content-center text-center m-1 pt-1 pb-1 border border-primary rounded-4 bg-primary'>
      {/* v TODO: Make bold */}
      <Link to={to} className='fs-5 text-white' style={{ textDecoration: 'none' }}>
        {text}
      </Link>
    </li>
  )
}


export default Projects;
