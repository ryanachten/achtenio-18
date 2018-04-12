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

  // const rotateImg = () => {
  //   const randX = Math.floor(Math.random()*2);
  //   const randY = Math.floor(Math.random()*2);
  //   const randZ = Math.floor(Math.random()*2);
  //   const randDeg = Math.floor(Math.random()*5+1);
  //   return(
  //     { transform: `rotate3d(${randX}, ${randY}, ${randZ}, ${randDeg}deg)` }
  //   );
  // };

  return(
    <div>
      <section className="project__splashContainer">
        <div className="project__splashbox">
          <div><h1>{title}</h1></div>
          <div><h2>{subtitle}</h2></div>
          <div><h2>{date}</h2></div>
        </div>
      </section>

      <div className="project__infoContainer">

        <section className="project__section overview">
          <h2 className="project__sectionHeader">Overview</h2>
          <p>{description}</p>
        </section>

        <hr className="project__divider" />

        <section className="project__section">
          <h2 className="project__sectionHeader">Role</h2>
          <ul>
            {roles.map( (role)=>(
              <li key={uuid()}>{role}</li>
            ))}
          </ul>
        </section>
        { credits && (
          <section className="project__section">
            <h2 className="project__sectionHeader">Credits</h2>
            <ul>
              { credits.map( (credit) => (
                <li key={uuid()}>{credit.name} ~ {credit.role}</li>
              )) }
            </ul>
          </section>
        )}

        <section className="project__section">
          <h2 className="project__sectionHeader">Tools</h2>
          <ul>
            {tools.map( (tool)=>(
              <li key={uuid()}>{tool}</li>
            ))}
          </ul>
        </section>

        <section className="project__section social">
          <h2 className="project__sectionHeader">Docs</h2>
          <ul>
            {social.map( (site)=>(
              <li className="project__socialItem" key={uuid()}>
                <a className={`project__socialIcon ${site.host.toLowerCase()}`} href={site.url}></a>
              </li>
            ))}
          </ul>
        </section>

      </div>


      { images.map( (img) => (

        <img key={uuid()} className="project__img" src={img}
          // onMouseOver={({target: {style}}) => {
          //   if (style.animationPlayState !== 'initial') {
          //     style.animation = 'img-roll 3s';
          //   }}}
          ></img>

      ))}

      <section className="project__section">
        <h2 className="project__sectionHeader">Further Info</h2>
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
