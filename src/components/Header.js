import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="topnav--container">
    <NavLink className="logotype topnav--link" to="/" activeClassName="is-active" exact={true}>r/a</NavLink>
    <div className="topnav--linkcontainer">
      <NavLink className="topnav--link" to="/work" activeClassName="is-active">Work</NavLink>
      <NavLink className="topnav--link" to="/work" activeClassName="is-active">CV</NavLink>
      <NavLink className="topnav--link" to="/contact" activeClassName="is-active">Contact</NavLink>
    </div>
    <button className="topnav--open"></button>
  </header>
);

export default Header;
