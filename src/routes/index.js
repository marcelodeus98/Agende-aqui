import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import To_schedule from '../pages/To_schedule';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/to_schedule" exact component={To_schedule}/>
      </Switch>
    </BrowserRouter>
  );
}