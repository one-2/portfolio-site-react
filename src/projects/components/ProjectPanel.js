// Written by Stephen Elliott on 28/1/24.
// Renders the project information panel.

import NavPanel from "../../navPanel/NavPanel";
import ThisWebsiteData from "./ThisWebsiteData";
import { useParams } from 'react-router-dom'; // state hook allows you to create route-dependent returns

function ProjectPanel() {
  let { projectId } = useParams(); // must destructure the object here as the params are returned as an object
  const projectData = getProjectData(projectId);

  return (
    <div className='container border border-primary'>
      <div className='row mt-3 mb-3'>
        <div className='col-auto'>
          <h2 className='fs-3 ms-2'>
            {projectData.title}
          </h2>
        </div>
        <div className='col-auto'>
          {/* TODO: shift down to baseline of title */}
          <p className='ms-2'>
            {projectData.dateFrom}-{projectData.dateTo}.
          </p>
        </div>
      </div>

      <div className='row ms-1 me-2 mb-3'>
        <div>
          <h3 className='fs-5'>
            Summary
          </h3>
          <p>
            {projectData.summary}
          </p>
        </div>
        <div>
          <h3 className='fs-5'>
            Skills
          </h3>
          {projectData.skillsList}
        </div>
        <div>
          <h3 className='fs-5'>
            The Full Story
          </h3>
          <p>
            {projectData.fullStory}
          </p>
        </div>
      </div>
    </div>
  )
}

function getProjectData(projectId) {
  switch (projectId) {
    // no url params (ie http://localhost:3000/Projects)
    case undefined: // TODO: handle this so the url doesn't change when it's clicked (polish)
      return ThisWebsiteData();

    // named url params (eg http://localhost:3000/Projects/ThisWebsite)
    case ('ThisWebsite'): // TODO: Shift to a db
      return ThisWebsiteData();

    // default (error) url params (eg http://localhost:3000/Projects/0000000)
    default: // TODO: Replace with error case
      return (
        {
          'title': 'default',
          'dateFrom': 'no such page',
          'dateTo': 'no such page',
          'summary': 'no such page',
          'skillsList': 'no such page',
          'fullStory': 'no such page'
        }
      )
  }
}

export default ProjectPanel;
