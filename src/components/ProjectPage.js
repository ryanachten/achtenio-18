import React from 'react';
import projects from '../store';
import uuid from 'uuid';

const ProjectPage = (props) => {

  const {
    title,
    subtitle,
    date,
    description,
    headerImg,
    roles,
    credits = undefined,
    tools,
    social,
    images
  } = projects[props.match.params.id];

  return(
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h4>{date}</h4>
      <p>{description}</p>

      <img src={images[0]}></img>

      <section>
        <h4>Role:</h4>
        <ul>
          {roles.map( (role)=>(
            <li key={uuid()}>{role}</li>
          ))}
        </ul>
      </section>
      { credits && (
        <section>
          <h4>Credits:</h4>
          <ul>
            { credits.map( (credit) => (
              <li key={uuid()}>{credit.name} ~ {credit.role}</li>
            )) }
          </ul>
        </section>
      )}

      <img src={images[1]}></img>

      <section>
        <h4>Tools:</h4>
        <ul>
          {tools.map( (tool)=>(
            <li key={uuid()}>{tool}</li>
          ))}
        </ul>
      </section>

      <img src={images[2]}></img>

      <section>
        <h4>Social:</h4>
        <ul>
          {social.map( (site)=>(
            <li key={uuid()}>
              <a href={site.url}>{site.host}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProjectPage;
