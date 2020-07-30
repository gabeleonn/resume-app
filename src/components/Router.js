import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import adminPage from './adminPage/adminPage';
import mainPage from './mainPage/mainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={mainPage} />
        <Route exact path="/admin" component={adminPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
