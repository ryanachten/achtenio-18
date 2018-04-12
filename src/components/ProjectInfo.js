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
    const randDeg = Math.floor(Math.random()*5+1);
    return(
      { transform: `rotate3d(${randX}, ${randY}, ${randZ}, ${randDeg}deg)` }
    );
  };

  return(
    <div>
      <section className="project__splashContainer">
        <div className="project__splashbox">
          <div><h1>{title}</h1></div>
          <div><h2>{subtitle}</h2></div>
          <div><h4>{date}</h4></div>
        </div>
      </section>

      <section className="project__section">
        <h4 className="project__sectionHeader">Description</h4>
        <p>{description}</p>
      </section>

      <img className="project__img" src={images[0]}
        onMouseOver={({target: {style}}) => {
          if (style.animationPlayState !== 'initial') {
            style.animation = 'img-roll 3s';
          }
        }}></img>

      <section className="project__section">
        <h4 className="project__sectionHeader">Role</h4>
        <ul>
          {roles.map( (role)=>(
            <li key={uuid()}>{role}</li>
          ))}
        </ul>
      </section>
      { credits && (
        <section className="project__section">
          <h4 className="project__sectionHeader">Credits</h4>
          <ul>
            { credits.map( (credit) => (
              <li key={uuid()}>{credit.name} ~ {credit.role}</li>
            )) }
          </ul>
        </section>
      )}

      <img className="project__img" src={images[1]}
        onMouseOver={({target: {style}}) => {
          if (style.animationPlayState !== 'initial') {
            style.animation = 'img-roll 3s';
          }
        }}></img>

      <section className="project__section">
        <h4 className="project__sectionHeader">Tools</h4>
        <ul>
          {tools.map( (tool)=>(
            <li key={uuid()}>{tool}</li>
          ))}
        </ul>
      </section>

      <img className="project__img" src={images[2]}
        onMouseOver={({target: {style}}) => {
          if (style.animationPlayState !== 'initial') {
            style.animation = 'img-roll 3s';
          }
        }}></img>

      <section className="project__section">
        <h4 className="project__sectionHeader">Docs</h4>
        <p>Interested? See further documentation at the links below:</p>
        <ul>
          {social.map( (site)=>(
            <li className="project__socialItem" key={uuid()}>
              <a className={`project__socialIcon ${site.host.toLowerCase()}`} href={site.url}></a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProjectInfo;
