import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage';
import WorkPage from '../components/WorkPage';
import ProjectPage from '../components/ProjectPage';
import AboutPage from '../components/AboutPage';
import CvPage from '../components/CvPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
// import LoadingScreen from '../components/LoadingScreen';


const AppRouter = () => (
  <BrowserRouter>
    <div id="router--container">
      <Header />
      {/* <LoadingScreen /> */}
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/work" component={WorkPage} exact={true} />
        <Route path="/work/:id" component={ProjectPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/cv" component={CvPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
