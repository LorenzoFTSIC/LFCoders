import React from 'react';

const ProjectList = ({ projects, title }) => {
  if (!projects.length) {
    return <h3>No Projects Yet</h3>;
  }

  // Contributors separated by "," and "and"
  function contributorString(projects) {
    if (projects.length === 1) return projects[0];
    const fore = projects.slice(0, projects.length - 1);
    const aft = projects[projects.length - 1];
    return fore.join(', ') + ' and ' + aft;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      {/* For every Project make a card */}
      <div className="flex-row justify-space-between my-4">
        {projects &&
          projects.map((project) => (
            <div key={project._id} className="col-12 col-xl-6">
              {/* Card Content */}
              <div className="card mb-3">
                {/* List of Contributors set in an array */}
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {contributorString} <br />
                  {/* Project name */}
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    worked on {project.name}{' '}
                  </span>
                  {/* Project description */}
                  {project.description ? <span>{project.description}</span> : 'No description available'}
                  {/* Combined Skills */}
                  <span>Combined, they used {project.skills}</span>
                  {/* Creation date */}
                  <span>Created on: {project.createDate}</span>
                  {/* Status */}
                  <span>Project status: {project.status}</span>
                </h4>
                {/* GitHub Link */}
                {project.github ? (
                  <a
                    href={project.github}
                    className="btn btn-block btn-squared btn-light text-dark"
                  >
                    View project on GitHub.
                  </a>
                ) : (
                  'No link available'
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectList;
