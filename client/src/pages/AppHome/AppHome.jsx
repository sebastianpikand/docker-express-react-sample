import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DemoPage from '../DemoPage';

const AppHome = () => {
  return (
    <Switch>
      <Route exact path="/" component={DemoPage} />
    </Switch>
  );
};

export default AppHome;
