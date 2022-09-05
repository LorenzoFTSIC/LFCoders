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
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProjectList
              projects={projects}
              title="Check Out The Most Recent Collaborations"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default RecentProjects;
