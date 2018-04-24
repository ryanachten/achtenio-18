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

  startFilter({target}){
    $(target).addClass('svgFilterTarget');
    this.updateFilter();
  };

  updateFilter(){
    this.frameId = window.requestAnimationFrame(this.updateFilter);
    $('feDisplacementMap')[0].scale.baseVal += 0.2;
    if ($('feDisplacementMap')[0].scale.baseVal > 500) {
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
      images
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
                  <a target="_blank" className={`project__socialIcon ${site.host.toLowerCase()}`} href={site.url}></a>
                </li>
              ))}
            </ul>
          </section>

          {liveSite && (
            <section className="project__section liveSite">
              <h2 className="project__sectionHeader">Live Site</h2>
              <a target="_blank" href={liveSite.url}>{liveSite.label}</a>
            </section>
          )}

        </div>

        {videoDocUrl && (
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
        )}

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
                <a target="_blank" className={`project__socialIcon ${site.host.toLowerCase()}`} href={site.url}></a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
};

export default ProjectInfo;
