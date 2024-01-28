// Written by Stephen Elliott on 12/1/2024

import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'; // state hook allows you to create route-dependent returns

import ProjectPanel from './panels/ProjectPanel'

function NavPanel() {
  return (
    <div className='container border border-secondary'>
      {/* TODO: fix border size */}
      <div className='mt-3 mb-3'>
        <h2 className='fs-4'>
          The Nav Panel
        </h2>
      </div>
      <div>
        <div>
          <NavLinkList subtitle='2024' />
        </div>
      </div>
    </div>
  )
}

function Projects() {
  let projectId = useParams();

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
          <ProjectPanel projectId={'ThisWebsite'} />
        </div>
      </div>
    </div>
  )
}

function NavLinkList({subtitle}) {
  const links = [
    {to:'', text:'This website'},
    {to:'', text:'Next project'}
  ];
  
  const allLinks = 
    links.map((link) => <NavLinkListItem to={link.to} text={link.text} />);

  return (
    <container>
      <h3 className='fs-5'>
        {subtitle}
      </h3>
      <ul>
        {allLinks}
      </ul>
    </container>
  );
}

function NavLinkListItem({ to, text }) {
  return (
    <li>
      <Link to={to} className='text-center fs-5 text-black' style={{ textDecoration: 'none' }}>
        {text}
      </Link>
    </li>
  )
}

export default Projects;
