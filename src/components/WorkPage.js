import React from 'react';
import {Link} from 'react-router-dom';
import projects from '../store';

const WorkPage = () => {

  return (
    <div className="thumbnail__container">
      { Object.keys(projects).map( ( key ) => (
        <div key={key}>
          <Link className="thumbnail__item" to={`/work/${key}`}>
            <img className="thumbnail__img"
              src={`/img/thumbs/${projects[key].thumbImg}`}></img>
            <h1 className="thumbnail__title">{projects[key].title}</h1>
            <h2>{projects[key].subtitle}</h2>
          </Link>
        </div>
        )) }
    </div>
  )
};

export default WorkPage;
