import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import projects from '../store';

class WorkPage extends React.Component{

  constructor(props){
    super(props);

    this.startFilter = this.startFilter.bind(this);
    this.cancelFilter = this.cancelFilter.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  startFilter(e){
    $(e.target).addClass('filter');
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
    $(target).removeClass('filter');
    window.cancelAnimationFrame(this.frameId);
    $('feDisplacementMap')[0].scale.baseVal = 0;
  }

  componentWillUnmount = () => {
    window.cancelAnimationFrame(this.frameId);
  };

  render = () => {

    return (
      <div className="thumbnail__container">

        <svg id="svgFilterContainer">
          <defs>
            <filter id="svgFilter">
              <feTurbulence
                type="fractalNoise" baseFrequency="0.01"
                numOctaves="2" result="turbulence"/>
              <feDisplacementMap
                in="SourceGraphic" in2="turbulence" scale="0.01" />
            </filter>
          </defs>
        </svg>

        { Object.keys(projects).map( ( key ) => (
          <div key={key}>
            <Link className="thumbnail__item" to={`/work/${key}`}>
              <img className="thumbnail__img"
                src={`/img/thumbs/${projects[key].thumbImg}`}
                onMouseEnter={this.startFilter}
                onMouseLeave={this.cancelFilter}></img>
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
