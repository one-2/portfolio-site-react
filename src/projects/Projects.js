// Written by Stephen Elliott on 12/1/2024

import React from 'react';

import ProjectPanel from './components/ProjectPanel'
import ProjectNavPanel from './components/ProjectNavPanel';

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
          <ProjectNavPanel />
        </div>
        <div className='col-9'>
          <ProjectPanel />
        </div>
      </div>
    </div>
  )
}

export default Projects;
