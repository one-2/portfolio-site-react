// Written by Stephen Elliott on 12/1/2024

import React from 'react';

import ProjectPanel from './panels/ProjectPanel'
import NavPanel from '../navPanel/NavPanel';

function Projects() {
  const links = [ // TODO: refactor into backend
    { to: '/Projects/ThisWebsite', text: 'This Site' },
    { to: '/Projects/NextProject', text: 'Cowpoke Ranch' },
    { to: '/Projects/NextProject', text: 'Smokey Saloon' },
    { to: '/Projects/NextProject', text: 'Dust Devil' }
  ];
  return (
    <div className='container'>
      <div className='row'>
        <h1 className='fs-1 text-center'>
          Projects.
        </h1>
      </div>
      <div className='row'>
        <div className='col-3'>
          <NavPanel links={links} />
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

export default Projects;
