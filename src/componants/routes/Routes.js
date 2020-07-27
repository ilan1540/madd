import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import AllBaseMadd from '../pages/AllBaseMadd';
import LastMadd from '../pages/LastMadd';
import { TableMadd } from '../pages/TableMadd';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lastmadd" component={LastMadd} />
        <Route exact path="/madd/all" component={AllBaseMadd} />
        <Route exact path="/tablemadd" component={TableMadd} />
      </Switch>
    </div>
  );
};

export default Routes;
