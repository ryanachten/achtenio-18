import React from 'react';
import uuid from 'uuid';

const ProjectInfo = (props) => {

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
    textureImg,
    images
  } = props.project;

  const rotateImg = () => {
    const randX = Math.floor(Math.random()*2);
    const randY = Math.floor(Math.random()*2);
    const randZ = Math.floor(Math.random()*2);
    const randDeg = Math.floor(Math.random()*5);
    return(
      { transform: `rotate3d(${randX}, ${randY}, ${randZ}, ${randDeg}deg)` }
    );
  };

  return(
    <div>
      <section className="project--splashContainer">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <h4>{date}</h4>
      </section>

      <section className="project--section">
        <h4 className="project--sectionHeader">Description</h4>
        <p>{description}</p>
      </section>

      <img className="project--img" src={images[0]} style={rotateImg()}></img>

      <section className="project--section">
        <h4 className="project--sectionHeader">Role</h4>
        <ul>
          {roles.map( (role)=>(
            <li key={uuid()}>{role}</li>
          ))}
        </ul>
      </section>
      { credits && (
        <section className="project--section">
          <h4 className="project--sectionHeader">Credits</h4>
          <ul>
            { credits.map( (credit) => (
              <li key={uuid()}>{credit.name} ~ {credit.role}</li>
            )) }
          </ul>
        </section>
      )}

      <img className="project--img" src={images[1]} style={rotateImg()}></img>

      <section className="project--section">
        <h4 className="project--sectionHeader">Tools</h4>
        <ul>
          {tools.map( (tool)=>(
            <li key={uuid()}>{tool}</li>
          ))}
        </ul>
      </section>

      <img className="project--img" src={images[2]} style={rotateImg()}></img>

      <section className="project--section">
        <h4 className="project--sectionHeader">Social</h4>
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

export default ProjectInfo;
