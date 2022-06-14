import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import To_schedule from '../pages/To_schedule';
import Schedules from '../pages/Schedules';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/to_schedule" exact component={To_schedule}/>
        <Route path="/schedules" exact component={Schedules}/>
      </Switch>
    </BrowserRouter>
  );
}