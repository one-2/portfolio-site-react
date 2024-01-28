// Written by Stephen Elliott on 28/1/24.
// Renders the project information panel.

import ThisWebsiteData from "./ThisWebsiteData";

function ProjectPanel({ projectId }) {
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
    if (projectId == 'ThisWebsite') { return ThisWebsiteData() };

    return (
        {
            'title': 'default',
            'dateFrom': 'default',
            'dateTo': 'default',
            'overview': 'default',
            'skillsList': 'default',
            'fullStory': 'default'
        }
    )
}

export default ProjectPanel;