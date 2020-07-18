import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/madd" component={Home} />
      </Switch>
    </div>
  );
};

export default Routes;
