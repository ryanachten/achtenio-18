import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="notfound">
    <img className="notfound__logo" src="/img/icons/logo.svg"></img>
    <h1>Oops! <br /> I can’t seem to find what you’re looking for…</h1>
    <h2>Check out <em><Link to="/">home</Link></em> or <em><Link to="/work">work</Link></em> for some eye candy!</h2>
  </div>
);

export default NotFoundPage;
