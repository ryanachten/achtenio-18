import React from 'react';
import $ from 'jquery';
import SvgFilter from './SvgFilter';

class AboutPage extends React.Component{

  constructor(props){
    super(props);

    this.updateFilter = this.updateFilter.bind(this);
  }

  componentDidMount(){
    this.delta = 0.0;
    this.max = 100;
    this.speed = 0.02;
    this.updateFilter();
  }

  componentWillUnmount(){
    window.cancelAnimationFrame(this.frameId);
  };

  updateFilter(){
    const displacement = (Math.sin(this.delta)*this.max).toFixed(2);
    this.delta+=this.speed;

    this.frameId = window.requestAnimationFrame(this.updateFilter);
    $('feDisplacementMap')[0].scale.baseVal = displacement;
  }

  render = () => {

    return (
      <div className="about__container">
        <SvgFilter />
        <img className="about__logo svgFilterTarget" src="/img/icons/logo.svg"></img>
        <p className="about__splashText">
          Ryan Achten.<br/>
          Designer & developer based in Wellington, New Zealand.<br/>
          <br/>
          Works with digital media, encompassing graphic, motion, and interactive projects. Has collaborated with cultural institutions, academics, musicians and other creative types.<br/>
        </p>
        <ul className="about__socialLinks">
          <li><a href="https://www.behance.net/ryanachten">
            <i className="fi-social-behance"></i></a></li>
          <li><a href="https://github.com/ryanachten">
            <i className="fi-social-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/ryanachten/">
            <i className="fi-social-linkedin"></i></a></li>
          <li><a href="https://vimeo.com/ryanachten">
            <i className="fi-social-vimeo"></i></a></li>
          <li><a href="mailto:ryanachten@gmail.com">
            <i className="fi-mail"></i></a></li>
        </ul>
      </div>
    );
  };
}

export default AboutPage;
