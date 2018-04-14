import React from 'react';
import uuid from 'uuid';
import $ from 'jquery';

class ProjectInfo extends React.Component{

  constructor(props){
    super(props);

    this.startFilter = this.startFilter.bind(this);
    this.cancelFilter = this.cancelFilter.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  startFilter({target}){
    $(target).addClass('filter');
    this.updateFilter();
  };

  updateFilter(){
    this.frameId = window.requestAnimationFrame(this.updateFilter);
    // const turb = $('feTurbulence')[0];
    // const displace = $('feDisplacementMap')[0].scale.baseVal;
    // console.log(displace);
    $('feDisplacementMap')[0].scale.baseVal += 0.2;
    if ($('feDisplacementMap')[0].scale.baseVal > 500) {
      window.cancelAnimationFrame(this.frameId);
    }

    // $('feTurbulence')[0].numOctaves.baseVal += 0.01;
    // console.log($('feTurbulence')[0].numOctaves.baseVal);
  }

  cancelFilter({target}){
    $(target).removeClass('filter');
    window.cancelAnimationFrame(this.frameId);
    $('feDisplacementMap')[0].scale.baseVal = 0;
  }

  render = () => {

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
    } = this.props.project;

    return(
      <div>
        <svg id="svgFilterContainer">
          <defs>
            <filter id="svgFilter">
              <feTurbulence
                type="fractalNoise" baseFrequency="0.01"
                numOctaves="1" result="turbulence"/>
              <feDisplacementMap
                in="SourceGraphic" in2="TURBULENCE" scale="0.01" />
            </filter>
          </defs>
        </svg>

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
            onMouseEnter={this.startFilter}
            onMouseLeave={this.cancelFilter}
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
  }
};

export default ProjectInfo;
