import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage';
import WorkPage from '../components/WorkPage';
import ProjectPage from '../components/ProjectPage';
import ContactPage from '../components/ContactPage';
import CvPage from '../components/CvPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (
  <BrowserRouter>
    <div id="router--container">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/work" component={WorkPage} exact={true} />
        <Route path="/work/:id" component={ProjectPage} />
        <Route path="/cv" component={CvPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
