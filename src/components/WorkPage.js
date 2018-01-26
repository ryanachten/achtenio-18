import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    Look at all my work!
    <nav>
      <NavLink to="/work/vertice" activeClassName="is-active">Vertice</NavLink>
      <NavLink to="/work/vuw" activeClassName="is-active">VUW</NavLink>
    </nav>
  </div>
);

export default PortfolioPage;
