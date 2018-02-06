import React from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Header = () => (
  <header className="topnav--container">
    <NavLink className="logotype topnav--link" to="/" activeClassName="is-active" exact={true}>r/a</NavLink>
    <button className="topnav--menubutton" onClick={toggleNav}></button>
    <div className="topnav--linkcontainer">
      <NavLink className="topnav--link" to="/work" activeClassName="is-active">Work</NavLink>
      <NavLink className="topnav--link" to="/work" activeClassName="is-active">CV</NavLink>
      <NavLink className="topnav--link" to="/contact" activeClassName="is-active">Contact</NavLink>
    </div>

  </header>
);

const toggleNav = () => {
  $('.topnav--linkcontainer').toggleClass('topnav--open');
  $('.topnav--menubutton').toggleClass('topnav--open');
};

export default Header;
