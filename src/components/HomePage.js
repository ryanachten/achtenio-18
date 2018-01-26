import React from 'react';
import ProjectView from './HomeView';
import projects from '../store';

const HomePage = () => {

  return(
    <div>
      <h1>Home Page</h1>
      <ProjectView />
    </div>
  );
};

export default HomePage;
