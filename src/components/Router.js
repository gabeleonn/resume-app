import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <p>Heey</p>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
