import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    Look at all my work!
    <nav>
      <NavLink to="/work/1" activeClassName="is-active">Project 1</NavLink>
      <NavLink to="/work/2" activeClassName="is-active">Project 2</NavLink>
    </nav>
  </div>
);

export default PortfolioPage;
