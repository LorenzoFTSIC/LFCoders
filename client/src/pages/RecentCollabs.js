import React from 'react';
import { useQuery } from '@apollo/client';

import ProjectList from '../components/ProjectList';

import { QUERY_PROJECTS } from '../utils/queries';

const RecentProjects = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];
  if (data) {
    console.log("project exists")
  }

  return (
    <div>
      <div >
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProjectList
              projects={projects}
              title="Recent Collaborations"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
