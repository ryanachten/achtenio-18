import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import projects from '../store';
import SvgFilter from './SvgFilter'

class WorkPage extends React.Component{

  constructor(props){
    super(props);

    this.startFilter = this.startFilter.bind(this);
    this.cancelFilter = this.cancelFilter.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  componentWillUnmount(){
    window.cancelAnimationFrame(this.frameId);
  };

  componentDidMount(){
    this.loadedImgContainer = {};
  }

  startFilter(e){
    $(e.target).addClass('svgFilterTarget');
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

  fadeInImages(){
    const projectKeys = Object.keys(projects);
    let currentIndex = 0;

    this.fadeInterval = window.setInterval( () => {
      const currentKey = projectKeys[currentIndex];
      $(this.loadedImgContainer[currentKey]).fadeIn();
      currentIndex++;

      // Once all containers have faded in, remove interval
      if (currentIndex === projectKeys.length) {
        window.clearInterval(this.fadeInterval);
      }
    }, 1000);
  }

  render = () => {

    return (
      <div className="thumbnail__container">

        <SvgFilter />

        { Object.keys(projects).map( ( key ) => (
          <div className="thumbnail__item" key={key}>
            <Link to={`/work/${key}`}>
              <img className="thumbnail__img"
                src={`/img/thumbs/${projects[key].thumbImg}`}
                onMouseEnter={this.startFilter}
                onMouseLeave={this.cancelFilter}
                onLoad={(e) => {
                  // store current img's container for fade in
                  const containerDiv = $(e.target).parents('.thumbnail__item')[0];
                  this.loadedImgContainer[key] = containerDiv;

                  // If all images are loaded, start fade in process
                  if (
                    Object.keys(this.loadedImgContainer).length ===
                    Object.keys(projects).length) {
                      this.fadeInImages();
                  }
                }}></img>
              <h1 className="thumbnail__title">{projects[key].title}</h1>
              <h2>{projects[key].subtitle}</h2>
            </Link>
          </div>
          )) }
      </div>
    )
  }
};

export default WorkPage;
