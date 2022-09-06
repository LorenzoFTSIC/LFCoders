import React from 'react';

const ProjectList = ({ projects, title }) => {
  console.log(projects);
  // Contributors separated by "," and "and"
  const contributorString = (projects) => {
    const fore = projects.profile.slice(0, projects.profile.length - 1);
    const aft = projects.profile[projects.profile.length - 1];
    if (projects.profile.length === 1) {
      return projects.profile[0];
    }
    console.log(fore.join(', ') + ' and ' + aft);

    return fore.join(', ') + ' and ' + aft;
  };
  // const lizard = contributorString(projects[0]);
  // 1. switched "projects" to "project"
  // 2. tried to put project as a variable and target profile ({ projects.profile })
  // 3. put in "projects.profile"
  // 4. putting a variable to call the fxn

  if (!projects.length) {
    return <h3>No Projects Yet</h3>;
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
                {/*  */}
                {/* List of Contributors set in an array */}
                <h4 className="card-header bg-dark">
                  {contributorString(project)} <br />
                  {/* Project name */}
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    worked on "{project.name}"{' '}
                  </span>{' '}
                  <br />
                  {/* Project description */}
                  {project.description ? (
                    <span>Description: "{project.description}"</span>
                  ) : (
                    <span>No description available</span>
                  )}{' '}
                  <br />
                  {/* Combined Skills */}
                  <span>
                    Combined, the collaborators used {project.skills}
                  </span>{' '}
                  <br />
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
