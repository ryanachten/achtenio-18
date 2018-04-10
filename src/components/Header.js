import React from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Header = () => (
  <header className="topNav--container">
    <NavLink className="logotype topNav--link" to="/" activeClassName="is-active" exact={true}>r/a</NavLink>
    <div className="topNav--linkContainer">
      <NavLink className="topNav--link" to="/work" activeClassName="is-active">Work</NavLink>
      <NavLink className="topNav--link" to="/cv" activeClassName="is-active">CV</NavLink>
      <NavLink className="topNav--link" to="/contact" activeClassName="is-active">Contact</NavLink>
    </div>
    <button className="topNav--menuButton" onClick={toggleNav}></button>


  </header>
);

const toggleNav = () => {
  $('.topNav--linkContainer').toggleClass('topNav--open');
  $('.topNav--menuButton').toggleClass('topNav--open');
};

export default Header;
