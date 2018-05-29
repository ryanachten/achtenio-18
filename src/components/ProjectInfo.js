import React from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import SvgFilter from './SvgFilter';
import ReactPlayer from 'react-player';

class ProjectInfo extends React.Component{

  constructor(props){
    super(props);

    this.startFilter = this.startFilter.bind(this);
    this.cancelFilter = this.cancelFilter.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  startFilter(e){
    $(e.target).addClass('svgFilterTarget');
    this.delta = 0.0;
    this.max = 100;
    this.speed = 0.02;
    this.updateFilter();
  };

  updateFilter(){
    this.frameId = window.requestAnimationFrame(this.updateFilter);
    const displacement = (Math.sin(this.delta)*this.max).toFixed(2);
    this.delta+=this.speed;

    $('feDisplacementMap')[0].scale.baseVal = displacement;

    if ($('feDisplacementMap')[0].scale.baseVal > 100) {
      window.cancelAnimationFrame(this.frameId);
    }
  }

  cancelFilter({target}){
    $(target).removeClass('svgFilterTarget');
    window.cancelAnimationFrame(this.frameId);
    $('feDisplacementMap')[0].scale.baseVal = 0;
  }

  render = () => {

    const {
      title,
      subtitle,
      date,
      description,
      roles,
      credits,
      tools,
      social,
      liveSite,
      textureImg,
      videoDocUrl,
      sections
    } = this.props.project;

    return(
      <div>

        <SvgFilter />

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
                  <li key={uuid()}>{credit.name} ~ <em>{credit.role}</em></li>
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
                  <a target="_blank" className={`project__socialIcon`} href={site.url}>
                    <i className={`fi-social-${site.host.toLowerCase()}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {liveSite && (
            <section className="project__section liveSite">
              <h2 className="project__sectionHeader">Live Site</h2>
              {liveSite.live
                // If site is live, provide link
                ? <a target="_blank" href={liveSite.url}>
                  {liveSite.label} <i className="fi-link"></i>
                </a>
                // If site is down, provide msg
                : <a>
                  {liveSite.label} <i className="fi-unlink"></i>
                </a>
              }

            </section>
          )}

        </div>

        {videoDocUrl && (
          <div className="vimeo__container">
            <h2 className="project__sectionHeader">Video Documentation</h2>
            <div className="vimeo__wrapper">

              <ReactPlayer
                className="vimeo__player"
                url={videoDocUrl}
                width='100%'
                height='100%'
                onReady={() => {
                  $('.vimeo__loadingScreen').hide();
                  $('.vimeo__player').fadeIn();
              }}/>
              <div className="vimeo__loadingScreen">
                <h2>Video Loading...</h2>
              </div>
            </div>
          </div>
        )}

        { sections.map( (section) => {
          if (section.type === 'image') {
            return (
              <img key={uuid()} className="project__img" src={section.url}
                onMouseEnter={this.startFilter}
                onMouseLeave={this.cancelFilter}
                ></img>
            );
          }else if (section.type === 'text') {
            return (
              <div key={uuid()} className="project__text">
                {section.header && (
                  <h2>{section.header}</h2>
                )}
                {section.subheader && (
                  <h3>{section.subheader}</h3>
                )}
                <p>{section.content}</p>
              </div>
            );
          }
        })}

        <section className="project__section">
          <h2 className="project__sectionHeader">Further Info</h2>
          <p>Interested? See further documentation at the links below:</p>
          <ul>
            {social.map( (site)=>(
              <li className="project__socialItem" key={uuid()}>
                <a target="_blank" className={`project__socialIcon`} href={site.url}>
                  <i className={`fi-social-${site.host.toLowerCase()}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
};

export default ProjectInfo;
