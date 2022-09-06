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
      <h3 className="mainTitle">{title}</h3>
      {/* For every Project make a card */}
      <div className="flex-row justify-space-between">
        {projects &&
          projects.map((project) => (
            <div key={project._id} className="col-12 col-xl-6">
              {/* Card Content */}
              <div className="card mb-3">
                {/* List of Contributors set in an array */}
                <h4 className="card-header bg-dark">
                  {contributorString} <br />
                  {/* Project name */}
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    worked on {project.name}{' '}
                  </span> <br />
                  {/* Project description */}
                  {project.description ? <span>{project.description}</span> : <span>No description available</span>} <br />
                  {/* Combined Skills */}
                  <span>Combined, they used {project.skills}</span> <br />
                  {/* Creation date */}
                  <span>Created on: {project.createDate}</span> <br />
                  {/* Status */}
                  <span>Project status: {project.status}</span> <br />
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
                  <span>No link available</span>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectList;
