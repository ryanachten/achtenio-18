import React from 'react';
import {Link} from 'react-router-dom';
import projects from '../store';

const WorkPage = () => {

  return (
    <div>
      { Object.keys(projects).map( ( key ) => (
        <div key={key}>
          <Link to={`/work/${key}`}>
            <h1>{projects[key].title}</h1>
          </Link>
          <h2>{projects[key].subtitle}</h2>
          <h4>{projects[key].date}</h4>
          <p>{projects[key].description}</p>
          <img src={projects[key].images[0]}></img>
        </div>
        )) }
    </div>
  )
};

export default WorkPage;
