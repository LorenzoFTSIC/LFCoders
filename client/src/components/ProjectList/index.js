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

  if (!projects.length) {
    return <h3>No Projects Yet</h3>;
  }
  return (
    <div>
      <h3 className="mainTitle">{title}</h3>
      {/* For every Project make a card */}
      <div >
        {projects &&
          projects.map((project) => (
            <div key={project._id}>
              {/* Card Content */}
              <div className="modalContainer projectContainer">
                {/* <div className="card-header bg-dark"> */}
                {/* List of Contributors set in an array */}
                <h4 className="sectionHeading projectHeading">
                  {/* Project name */}
                  <span>"{project.name}" </span> <br />
                </h4>
                <h5 className="sectionHeading projectHeading projectHeadingBottom">
                  {' '}
                  {contributorString(project)}
                </h5>
                {/* </div> */}
                {/* Project description */}
                {project.description ? (
                  <>
                    <h5 className="mainTitle">Description: </h5>
                    <span className="projectContent">
                      {' '}
                      "{project.description}"
                    </span>
                  </>
                ) : (
                  <span>No description available</span>
                )}{' '}
                <br />
                {/* Combined Skills */}
                <h5 className="mainTitle">The collaborators used</h5>
                <span> {project.skills}</span> <br />
                {/* Creation date */}
                <h5 className="mainTitle"> Created on:</h5>
                <span> {project.createDate}</span> <br />
                {/* Status */}
                <h5 className="mainTitle"> Project status:</h5>
                <span> {project.status}</span> <br />
                {/* GitHub Link */}
                {project.github ? (
                  <a href={project.github} className="btn btn-block">
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
