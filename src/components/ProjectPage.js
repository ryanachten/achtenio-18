import React from 'react';
import projects from '../store';

const ProjectPage = (props) => {

  const project = projects[props.match.params.id];
  console.log(project);

  return(
    <div>
      <h1>Thing I've Done!</h1>
      Showing Project {props.match.params.id}!
    </div>
  );
};

export default ProjectPage;
