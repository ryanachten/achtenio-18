import React from 'react';

const AboutPage = () => (
  <div className="about__container">
    <img className="about__logo" src="/img/icons/logo.svg"></img>
    <p className="about__splashText">
      My name is Ryan Achten.<br/>
      I’m a designer & developer based in Wellington, New Zealand.<br/>
      <br/>
      I’ve created all sorts of digital media, encompassing graphic, motion, and interactive works. I’ve worked with amazing people from cultural institutions and academics to musicians and other creative types.<br/>
    </p>
    <p>
      <br/>
      Interested in working together? Get in touch at ryanachten (at) gmail (dot) com<br/>
      <br/>
      For more of my work, take a peak at the social sites below:
    </p>
    <ul className="about__socialLinks">
      <li><a href="https://www.behance.net/ryanachten">
        <img src="/img/icons/social/behance.svg"></img></a></li>
      <li><a href="https://github.com/ryanachten">
        <img src="/img/icons/social/github.svg"></img></a></li>
      <li><a href="https://www.linkedin.com/in/ryanachten/">
        <img src="/img/icons/social/vimeo.svg"></img></a></li>
      <li><a href="https://vimeo.com/ryanachten">
        <img src="/img/icons/social/linkedin.svg"></img></a></li>
    </ul>
  </div>
);

export default AboutPage;
